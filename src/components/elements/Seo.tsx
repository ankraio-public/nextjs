import Head from 'next/head'

interface SeoProps {
  canonicalUrl?: string
  description?: string
  title?: string
  image?: string
  url?: string
}

export const TITLE = 'Frontend template'

export const DESCRIPTION = 'Ankra'

const Seo = ({
  url = 'https://ankra.io',
  description = DESCRIPTION,
  title = TITLE,
  image = '',
  canonicalUrl,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}

export default Seo
