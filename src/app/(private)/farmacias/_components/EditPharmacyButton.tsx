'use client'

import { EditIcon } from 'lucide-react'

import { Button } from '@/_components/ui/button'

interface IEditPharmacyButton {
  id: string
}

function EditPharmacyButton({ id }: IEditPharmacyButton) {
  async function handleDeletePharmacy(id: string) {
    console.log(id)
  }

  return (
    <Button
      variant="default"
      size="sm"
      className="mx-auto bg-blue-200 text-blue-800 hover:bg-blue-300"
      onClick={() => handleDeletePharmacy(id)}
    >
      <EditIcon size={14} />
    </Button>
  )
}

export { EditPharmacyButton }
