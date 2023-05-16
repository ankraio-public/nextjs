import Image from 'next/image'

import Seo from '@/components/elements/Seo'

const Home = () => {
  return (
    <>
      <Seo />
      <div className="flex flex-col justify-center items-center gap-3">
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
        <div className="flex flex-row justify-stretch items-stretch gap-3">
          <a href="https://ankra.io" target="_blank" rel="noopener noreferrer" className="pointer-events-none flex flex-col place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <span className="text-gray-500 dark:text-gray-400">By{' '} Ankra</span>
            <Image
              src="/ankra.png"
              alt="Ankra Logo"
              width={200}
              height={100}
              priority
              className="rounded-3xl border-t border-neutral-800 drop-shadow-xl"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
