import '@/styles/globals.css'
import classNames from '@/lib/classNames'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(inter.variable, 'font-sans', "flex min-h-screen flex-col items-center justify-between p-24")}>
      <Component {...pageProps} />
    </main>
  )
}
