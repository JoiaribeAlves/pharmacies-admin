import { prismaClient } from '@/lib/prisma'

async function getDuties() {
  try {
    const duties = await prismaClient.duty.findMany({
      select: {
        id: true,
        startAt: true,
        endAt: true,
        pharmacy: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        startAt: 'asc',
      },
    })

    return duties
  } catch (error) {
    console.error(error)
  } finally {
    await prismaClient.$disconnect()
  }
}

export { getDuties }
