import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'

import '@/_styles/globals.css'
import AuthProvider from '@/providers/authProvider'
import { authOptions } from '@/lib/auth'
import { Header } from '@/_components/Header'
import { Footer } from '@/_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  robots: 'noindex,nofollow',
}

interface IRootLayout {
  children: ReactNode
}

async function RootLayout({ children }: IRootLayout) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="flex-1 px-4 pb-24 pt-8 lg:px-40">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
