import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'

import '@/_styles/globals.css'
import AuthProvider from '@/providers/authProvider'
import { authOptions } from '@/lib/auth'
import { Sidebar } from '@/_components/Sidebar'
import { Header } from '@/_components/Header'
import { Toaster } from '@/_components/ui/sonner'

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
          <Sidebar />
          <Header />
          <main className="pl-72 pt-16">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
