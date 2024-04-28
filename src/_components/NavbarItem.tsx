'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavbarItem {
  href: string
  children: ReactNode
}

function NavbarItem({ href, children }: INavbarItem) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={`flex items-center gap-1 rounded-lg p-3 transition-colors ${path === href ? 'bg-secondary text-primary' : ''}`}
    >
      {children}
    </Link>
  )
}

export { NavbarItem }
