import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { PharmacyTable } from './_components/PharmacyTable'

export const metadata: Metadata = {
  title: 'Farmácias | Plantão de Farmácia',
}

async function Pharmacies() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Link
        href="/farmacias/nova"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <PlusIcon size={14} />
        Nova Farmácia
      </Link>

      <PharmacyTable />
    </div>
  )
}

export default Pharmacies
