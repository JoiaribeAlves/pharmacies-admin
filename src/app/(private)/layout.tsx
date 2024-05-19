import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'

import '@/_styles/globals.css'
import AuthProvider from '@/providers/authProvider'
import { authOptions } from '@/lib/auth'
import { Toaster } from '@/_components/ui/sonner'
import { Header } from '@/_components/Header'

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
          <Toaster />
          <Header />
          <main className="px-4 py-14 lg:px-40">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
