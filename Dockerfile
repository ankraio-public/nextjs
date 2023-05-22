#      ___      .__   __.  __  ___ .______           ___
#     /   \     |  \ |  | |  |/  / |   _  \         /   \
#    /  ^  \    |   \|  | |  '  /  |  |_)  |       /  ^  \
#   /  /_\  \   |  . `  | |    <   |      /       /  /_\  \
#  /  _____  \  |  |\   | |  .  \  |  |\  \----. /  _____  \
# /__/     \__\ |__| \__| |__|\__\ | _| `._____|/__/     \__\

## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:current-alpine as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

RUN apk --no-cache update

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app

# Copy the source code over
COPY --chown=node:node . /home/node/app/

## Development #################################################################
# Define a development target that installs devDeps and runs in dev mode
FROM base as development
WORKDIR /home/node/app

# Install dependencies based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Switch to the node user vs. root
# USER node
# Expose port 3000
EXPOSE 3000
# Start the app in dev mode
CMD ["yarn", "dev"]

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
WORKDIR /home/node/app
COPY --chown=node:node --from=development /home/node/app/node_modules /home/node/app/node_modules

# Build the NextJS app
# Change the build command with the one that your project uses - if needed.
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm run build; \
  else echo "Lockfile not found. We are unable to build your app." && exit 1; \
  fi

CMD ["yarn", "start"]

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
# Copy what we've installed/built from production
COPY --chown=node:node --from=production /home/node/app/.next /usr/share/nginx/html/
