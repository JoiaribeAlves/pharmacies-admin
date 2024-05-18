'use server'

import { prismaClient } from '@/lib/prisma'

async function getIdAndName() {
  try {
    const pharmacies = await prismaClient.pharmacy.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc',
      },
    })

    return pharmacies
  } catch (error) {
    console.error(error)
    return null
  } finally {
    await prismaClient.$disconnect()
  }
}

export { getIdAndName }
