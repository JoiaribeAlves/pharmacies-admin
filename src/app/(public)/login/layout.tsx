import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'

import '@/_styles/globals.css'
import { authOptions } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fazer login | Plantão de Farmácia',
  robots: 'noindex,nofollow',
}

interface ILoginLayout {
  children: ReactNode
}

async function LoginLayout({ children }: ILoginLayout) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-screen w-screen items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}

export default LoginLayout
