import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página inicial',
}

async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Hello, {session?.user?.name}</h1>
    </div>
  )
}

export default Home
