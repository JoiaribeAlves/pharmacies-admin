import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { getDuty } from '../../_actions/getDuty'
import { DutyForm } from '../../_components/DutyForm'

export const metadata: Metadata = {
  title: 'Editar plantão | Plantão de farmácia',
}

interface IEditForm {
  params: {
    id: string
  }
}

async function EditDuty({ params }: IEditForm) {
  const duty = await getDuty(params.id)

  if (!duty) return notFound()

  return (
    <div className="flex flex-col gap-4 pt-4">
      <Link
        href="/plantoes"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <ArrowLeftIcon size={14} />
        voltar
      </Link>

      <DutyForm
        id={params.id}
        defaultValues={{
          duty: {
            startAt: duty.startAt,
          },
          pharmacy: {
            id: duty.pharmacy.id,
          },
        }}
      />
    </div>
  )
}

export default EditDuty
