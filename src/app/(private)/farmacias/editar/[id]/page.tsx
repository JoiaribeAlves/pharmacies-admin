import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Editar farmácia</h1>

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
