'use server'

import { revalidatePath } from 'next/cache'
import { Duty, Pharmacy } from '@prisma/client'

import { prismaClient } from '@/lib/prisma'

interface IEditDuty {
  duty: Pick<Duty, 'id'>
  pharmacy: Pick<Pharmacy, 'id'>
}

async function editDuty(data: IEditDuty): Promise<boolean> {
  try {
    await prismaClient.duty.update({
      where: {
        id: data.duty.id,
      },
      data: {
        pharmacyId: data.pharmacy.id,
      },
    })

    revalidatePath('/plantoes')

    return true
  } catch (error) {
    console.error(error)
    return false
  } finally {
    await prismaClient.$disconnect()
  }
}

export { editDuty }
