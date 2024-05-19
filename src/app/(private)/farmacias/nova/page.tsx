import type { Metadata } from 'next'
import { PharmacyForm } from '../_components/PharmacyForm'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nova Farmácia | Plantão de Farmácia',
}

async function NewPharmacy() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <Link
        href="/farmacias"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <ArrowLeftIcon size={14} />
        voltar
      </Link>

      <PharmacyForm />
    </div>
  )
}

export default NewPharmacy
