import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/_styles/globals.css'
import { Header } from '@/_components/Header'
import { Footer } from '@/_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  robots: 'noindex,nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
