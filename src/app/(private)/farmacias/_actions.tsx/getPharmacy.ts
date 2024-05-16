'use server'

import { prismaClient } from '@/lib/prisma'

async function getPharmacy(id: string) {
  try {
    const pharmacy = await prismaClient.pharmacy.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        imageUrl: true,
        phones: true,
        address: {
          select: {
            street: true,
            number: true,
            district: true,
            complement: true,
            mapUrl: true,
          },
        },
      },
    })

    return pharmacy
  } catch (error) {
    console.error(error)
    return null
  } finally {
    await prismaClient.$disconnect()
  }
}

export { getPharmacy }
