import '@/styles/globals.css'
import classNames from '@/lib/classNames'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(poppins.variable, 'font-sans')}>
      <Component {...pageProps} />
    </main>
  )
}
