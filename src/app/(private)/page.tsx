import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Página inicial',
}

async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex flex-col gap-4">
      <h1>Hello, {session?.user.name}</h1>
    </div>
  )
}

export default Home
