'use server'

import { prismaClient } from '@/lib/prisma'

async function deletePharmacy(id: string): Promise<boolean> {
  try {
    await prismaClient.duty.deleteMany({
      where: {
        pharmacyId: id,
      },
    })

    await prismaClient.address.deleteMany({
      where: {
        pharmacyId: id,
      },
    })

    await prismaClient.pharmacy.delete({
      where: {
        id,
      },
    })

    return true
  } catch (error) {
    console.error(error)

    return false
  } finally {
    await prismaClient.$disconnect()
  }
}

export { deletePharmacy }
