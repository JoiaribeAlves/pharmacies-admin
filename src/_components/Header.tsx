import { MenuIcon } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/_components/ui/sheet'
import { SidebarHeader } from './SidebarHeader'
import { SidebarMain } from './SidebarMain'
import { SidebarFooter } from './SidebarFooter'

function Header() {
  return (
    <Sheet>
      <header className="fixed left-0 right-0 top-0 z-10 flex h-14 items-center bg-primary px-4 text-primary-foreground lg:px-40">
        <SheetTrigger>
          <MenuIcon size={24} />
        </SheetTrigger>
      </header>

      <SheetContent side="left">
        <SidebarHeader />
        <SidebarMain />
        <SidebarFooter />
      </SheetContent>
    </Sheet>
  )
}

export { Header }
