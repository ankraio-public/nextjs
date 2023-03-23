import Image from 'next/image'

import Seo from '@/components/elements/Seo'
import Stack from '@/components/elements/Stack'

const Home = () => {
  return (
    <>
      <Seo />
      <Stack direction="vertical" justify="center" align="center">
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
        <Stack>
          <a href="https://ankra.io" target="_blank" rel="noopener noreferrer">
            By{' '}
            <Image
              src="/ankra.png"
              alt="Ankra Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </Stack>
      </Stack>
    </>
  )
}

export default Home
