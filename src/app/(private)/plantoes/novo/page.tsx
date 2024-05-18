import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { DutyForm } from '../_components/DutyForm'

export const metadata: Metadata = {
  title: 'Novo plantão | Plantão de farmácia',
}

function NewDuty() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Link
        href="/plantoes"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <ArrowLeftIcon size={14} />
        voltar
      </Link>

      <DutyForm />
    </div>
  )
}

export default NewDuty
