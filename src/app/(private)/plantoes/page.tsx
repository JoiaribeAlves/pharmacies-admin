import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { DutyTable } from './_components/DutyTable'

export const metadata: Metadata = {
  title: 'Plantões | Plantão de Farmácia',
}

function Duties() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <Link
        href="/plantoes/novo"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <PlusIcon size={14} />
        Novo plantão
      </Link>

      <DutyTable />
    </div>
  )
}

export default Duties
