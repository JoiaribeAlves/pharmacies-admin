'use server'

import { prismaClient } from '@/lib/prisma'

async function getDuty(id: string) {
  try {
    const pharmacy = await prismaClient.duty.findUnique({
      where: {
        id,
      },
      select: {
        startAt: true,
        pharmacy: {
          select: {
            id: true,
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

export { getDuty }
