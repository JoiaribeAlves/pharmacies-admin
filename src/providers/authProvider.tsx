'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface IAuthProvider {
  children: ReactNode
}

function AuthProvider({ children }: IAuthProvider) {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
