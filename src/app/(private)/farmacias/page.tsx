import type { Metadata } from 'next'

import { PharmacyTable } from './_components/PharmacyTable'

export const metadata: Metadata = {
  title: 'Farmácias | Plantão de Farmácia',
}

async function Pharmacies() {
  return (
    <div className="flex flex-col gap-4">
      <PharmacyTable />
    </div>
  )
}

export default Pharmacies
