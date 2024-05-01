import Link from 'next/link'
import { EditIcon } from 'lucide-react'

import { maskPhoneNumber } from '@/_helpers/maskPhoneNumber'
import { getPharmacies } from '../_actions.tsx/getPharmacies'
import { DeletePharmacyButton } from './DeletePharmacyButton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/_components/ui/table'

async function PharmacyTable() {
  const pharmacies = await getPharmacies()

  if (!pharmacies) {
    return <></>
  }

  return (
    <div className="p-6">
      <Table className="overflow-hidden rounded-lg">
        <TableHeader className="bg-primary text-primary-foreground">
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead className="text-center">Editar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>

        {pharmacies.length === 0 ? (
          <TableBody>
            <TableRow className="odd:bg-muted">
              <TableCell colSpan={5}>Não há dados para apresentar</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {pharmacies.map((pharmacy, index) => (
              <TableRow key={index} className="even:bg-muted">
                <TableCell>{pharmacy.name}</TableCell>
                <TableCell>
                  {pharmacy.address?.street}, {pharmacy.address?.number},{' '}
                  {pharmacy.address?.district}
                </TableCell>
                <TableCell>
                  {pharmacy.phones.map((phone, index) => (
                    <span key={index} className="block">
                      {maskPhoneNumber(phone)}
                    </span>
                  ))}
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={`/farmacias/editar/${pharmacy.id}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200 text-blue-800 transition-colors hover:bg-blue-300"
                  >
                    <EditIcon size={14} />
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <DeletePharmacyButton id={pharmacy.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  )
}

export { PharmacyTable }
