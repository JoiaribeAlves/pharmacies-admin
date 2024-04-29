import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { LogoutButton } from './LogoutButton'
import { Avatar, AvatarImage, AvatarFallback } from '@/_components/ui/avatar'

async function SidebarFooter() {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={session?.user.imageUrl} />
          <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-xs">
          <span className="font-medium">
            {session?.user.name?.split(' ')[0]}
          </span>
          <span className="opacity-75">{session?.user.email}</span>
        </div>
      </div>

      <LogoutButton />
    </div>
  )
}

export { SidebarFooter }
