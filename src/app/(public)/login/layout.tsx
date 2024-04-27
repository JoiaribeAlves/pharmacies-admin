import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/_styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fazer login | Plantão de Farmácia',
  robots: 'noindex,nofollow',
}

interface ILoginLayout {
  children: ReactNode
}

function LoginLayout({ children }: ILoginLayout) {
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
