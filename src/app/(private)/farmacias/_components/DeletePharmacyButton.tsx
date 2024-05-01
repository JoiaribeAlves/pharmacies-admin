'use client'

import { CheckIcon, TrashIcon, XIcon } from 'lucide-react'

import { deletePharmacy } from '../_actions.tsx/deletePharmacy'
import { Button } from '@/_components/ui/button'
import { ShowToast } from '@/_components/ShowToast'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/_components/ui/dialog'

interface IDeletePharmacyButton {
  id: string
}

function DeletePharmacyButton({ id }: IDeletePharmacyButton) {
  async function handleDeletePharmacy(id: string) {
    const result = await deletePharmacy(id)

    if (result) {
      ShowToast({
        title: 'Farmácia excluída com sucesso!',
        icon: <CheckIcon size={14} />,
      })
    } else {
      ShowToast({
        title: 'Não foi possível excluir a farmácia',
        icon: <XIcon size={14} />,
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-200 text-red-800 transition-colors hover:bg-red-300">
        <TrashIcon size={14} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Você realmente deseja excluir esta farmácia?
          </DialogTitle>
          <DialogDescription>
            Esta ação também irá apagar todos os plantões e endereços que esta
            farmácia possui
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Voltar
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleDeletePharmacy(id)}
            >
              Confirmar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { DeletePharmacyButton }
