'use client'

import { CheckIcon, TrashIcon, XIcon } from 'lucide-react'

import { deleteDuty } from '../_actions/deleteDuty'
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

interface IDeleteDutyButton {
  id: string
}

function DeleteDutyButton({ id }: IDeleteDutyButton) {
  async function handleDeleteDuty(id: string) {
    const result = await deleteDuty(id)

    if (result) {
      ShowToast({
        title: 'Plantão excluído com sucesso!',
        icon: <CheckIcon size={14} />,
      })
    } else {
      ShowToast({
        title: 'Não foi possível excluir o plantão',
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
          <DialogTitle>Você realmente deseja excluir este plantão?</DialogTitle>
          <DialogDescription>Esta ação não pode ser desfeita</DialogDescription>
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
              onClick={() => handleDeleteDuty(id)}
            >
              Confirmar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { DeleteDutyButton }
