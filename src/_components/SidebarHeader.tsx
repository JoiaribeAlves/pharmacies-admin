import { Avatar, AvatarImage, AvatarFallback } from '@/_components/ui/avatar'

function SidebarHeader() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="/logo-white.png" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>

      <h2 className="text-lg font-bold">Plantão de Farmácia</h2>
    </div>
  )
}

export { SidebarHeader }
