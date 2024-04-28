import { CalendarIcon, HomeIcon, StoreIcon } from 'lucide-react'

import { NavbarItem } from './NavbarItem'

function SidebarMain() {
  return (
    <nav className="grow py-4">
      <ul className="flex flex-col">
        <li>
          <NavbarItem href="/">
            <HomeIcon size={14} />
            Início
          </NavbarItem>
        </li>

        <li>
          <NavbarItem href="/farmacias">
            <StoreIcon size={14} />
            Farmácias
          </NavbarItem>
        </li>

        <li>
          <NavbarItem href="/plantoes">
            <CalendarIcon size={14} />
            Plantões
          </NavbarItem>
        </li>
      </ul>
    </nav>
  )
}

export { SidebarMain }
