import { getYear } from 'date-fns'
import { CopyrightIcon } from 'lucide-react'

function Footer() {
  const year = getYear(new Date())

  return (
    <footer className="flex h-16 items-center justify-center bg-red-600 text-sm text-white">
      <CopyrightIcon size={13} />
      &nbsp;{year} - Todos os direitos reservados
    </footer>
  )
}

export { Footer }
