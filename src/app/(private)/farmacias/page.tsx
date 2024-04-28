import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmácias | Plantão de Farmácia',
}

async function Pharmacies() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Farmácias</h1>
    </div>
  )
}

export default Pharmacies
