import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plantões | Plantão de Farmácia',
}

async function Shifts() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Plantões</h1>
    </div>
  )
}

export default Shifts
