'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginForm() {
  const [loginFailure, setLoginFailure] = useState(false)

  const router = useRouter()

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoginFailure(false)

    const formData = new FormData(event.currentTarget)

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    })

    if (response?.error) {
      setLoginFailure(true)
      return
    }

    router.replace('/')
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="rounded-lg border-0 bg-white p-3 text-gray-800 outline-none ring-0 placeholder:text-gray-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="rounded-lg border-0 bg-white p-3 text-gray-800 outline-none ring-0 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="rounded-lg bg-red-600 p-3 text-white transition-colors hover:bg-red-700"
        >
          Entrar
        </button>
      </form>

      {loginFailure && (
        <span className="mt-4 block rounded-lg bg-red-200 p-2 text-center text-xs text-red-800">
          Email e Senha não conferem
        </span>
      )}
    </div>
  )
}

export { LoginForm }
