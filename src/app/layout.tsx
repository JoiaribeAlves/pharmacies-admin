import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/_styles/globals.css'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
