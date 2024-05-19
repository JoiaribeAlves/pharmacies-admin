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
      className="h-8 w-fit px-2 text-xs text-primary-foreground"
      onClick={() => handleLogout()}
    >
      Sair
    </Button>
  )
}

export { LogoutButton }
