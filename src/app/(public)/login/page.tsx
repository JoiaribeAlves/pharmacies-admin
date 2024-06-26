import type { Metadata } from 'next'

import { LoginForm } from './_components/LoginForm'

export const metadata: Metadata = {
  title: 'Fazer login | Plantão de farmácia',
}

function LoginPage() {
  return (
    <div className="mx-4 flex w-full max-w-md flex-col gap-6 rounded-lg bg-gray-100 p-6">
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Fazer login
      </h1>

      <LoginForm />
    </div>
  )
}

export default LoginPage
