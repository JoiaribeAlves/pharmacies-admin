import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { getPharmacy } from '../../_actions.tsx/getPharmacy'
import { PharmacyForm } from '../../_components/PharmacyForm'

export const metadata: Metadata = {
  title: 'Editar Farmácia | Plantão de Farmácia',
}

interface IEditPharmacy {
  params: {
    id: string
  }
}

async function EditPharmacy({ params }: IEditPharmacy) {
  const pharmacy = await getPharmacy(params.id)

  if (!pharmacy) return notFound()

  return (
    <div className="flex flex-col gap-4 pt-4">
      <Link
        href="/farmacias"
        className="flex h-10 w-fit items-center gap-1 rounded-lg border border-border px-3 transition-colors hover:bg-accent"
      >
        <ArrowLeftIcon size={14} />
        voltar
      </Link>

      <PharmacyForm
        id={params.id}
        defaultValues={{
          pharmacy: {
            name: pharmacy.name,
            imageUrl: pharmacy.imageUrl,
            phones: pharmacy.phones,
          },
          address: {
            street: pharmacy.address?.street || '',
            number: pharmacy.address?.number || '',
            district: pharmacy.address?.district || '',
            complement: pharmacy.address?.complement || '',
            mapUrl: pharmacy.address?.mapUrl || '',
          },
        }}
      />
    </div>
  )
}

export default EditPharmacy
