import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/_styles/globals.css'
import { Header } from '@/_components/Header'
import { Footer } from '@/_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  robots: 'noindex,nofollow',
}

interface IRootLayout {
  children: ReactNode
}

function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="flex-1 px-4 pb-24 pt-8 lg:px-40">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
