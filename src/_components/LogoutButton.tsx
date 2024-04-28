'use client'

import { signOut } from 'next-auth/react'

import { Button } from './ui/button'

function LogoutButton() {
  function handleLogout() {
    signOut()
  }

  return (
    <Button
      variant="link"
      className="text-primary-foreground h-8 p-1 text-xs"
      onClick={() => handleLogout()}
    >
      Sair
    </Button>
  )
}

export { LogoutButton }
