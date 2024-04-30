'use client'

import { TrashIcon } from 'lucide-react'

import { Button } from '@/_components/ui/button'

interface IDeletePharmacyButton {
  id: string
}

function DeletePharmacyButton({ id }: IDeletePharmacyButton) {
  async function handleDeletePharmacy(id: string) {
    console.log(id)
  }

  return (
    <Button
      variant="default"
      size="sm"
      className="mx-auto bg-red-200 text-red-800 hover:bg-red-300"
      onClick={() => handleDeletePharmacy(id)}
    >
      <TrashIcon size={14} />
    </Button>
  )
}

export { DeletePharmacyButton }
