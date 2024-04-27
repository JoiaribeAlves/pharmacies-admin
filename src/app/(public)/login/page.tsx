import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { LoginForm } from './_components/LoginForm'

async function Page() {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="mx-4 flex w-full max-w-md flex-col gap-6 rounded-lg bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Fazer login
      </h1>

      <LoginForm />
    </div>
  )
}

export default Page
