import Link from 'next/link'
import { EditIcon } from 'lucide-react'
import { format } from 'date-fns'

import { getDuties } from '../_actions/getDuties'
import { DeleteDutyButton } from './DeleteDutyButton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/_components/ui/table'

async function DutyTable() {
  const duties = await getDuties()

  if (!duties) {
    return <></>
  }

  console.log('Início: ' + duties[0].startAt)

  return (
    <div>
      <Table className="overflow-hidden rounded-lg">
        <TableHeader className="bg-primary text-primary-foreground">
          <TableRow>
            <TableHead>Farmácia</TableHead>
            <TableHead>Data</TableHead>
            <TableHead className="text-center">Editar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>

        {duties.length === 0 ? (
          <TableBody>
            <TableRow className="odd:bg-muted">
              <TableCell colSpan={4}>Não há dados para apresentar</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {duties.map((duty, index) => (
              <TableRow key={index} className="even:bg-muted">
                <TableCell>{duty.pharmacy.name}</TableCell>
                <TableCell>{format(duty.startAt, 'dd/MM/yyyy')}</TableCell>
                <TableCell className="text-center">
                  <Link
                    href={`/plantoes/editar/${duty.id}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200 text-blue-800 transition-colors hover:bg-blue-300"
                  >
                    <EditIcon size={14} />
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <DeleteDutyButton id={duty.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  )
}

export { DutyTable }
