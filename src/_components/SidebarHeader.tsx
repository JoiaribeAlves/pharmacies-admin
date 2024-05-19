import { Avatar, AvatarImage, AvatarFallback } from '@/_components/ui/avatar'

function SidebarHeader() {
  return (
    <div className="flex h-14 items-center gap-1 border-b border-secondary px-3">
      <Avatar>
        <AvatarImage src="/logo-white.png" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>

      <h2 className="text-lg font-semibold">Plantão de Farmácia</h2>
    </div>
  )
}

export { SidebarHeader }
