import { prismaClient } from '@/lib/prisma'

async function getPharmacies() {
  try {
    const pharmacies = await prismaClient.pharmacy.findMany({
      select: {
        id: true,
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
      orderBy: {
        name: 'asc',
      },
    })

    return pharmacies
  } catch (error) {
    console.error(error)
  } finally {
    await prismaClient.$disconnect()
  }
}

export { getPharmacies }
