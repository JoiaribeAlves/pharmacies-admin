import { SidebarHeader } from './SidebarHeader'
import { SidebarMain } from './SidebarMain'
import { SidebarFooter } from './SidebarFooter'

function Sidebar() {
  return (
    <aside className="bg-primary text-primary-foreground fixed left-0 top-0 z-10 flex h-screen w-72 flex-col p-4">
      <SidebarHeader />
      <SidebarMain />
      <SidebarFooter />
    </aside>
  )
}

export { Sidebar }
