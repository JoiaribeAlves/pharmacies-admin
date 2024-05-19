'use server'

import { revalidatePath } from 'next/cache'
import { Address, Pharmacy } from '@prisma/client'

import { prismaClient } from '@/lib/prisma'

interface IEditPharmacy {
  pharmacy: Pick<Pharmacy, 'id' | 'name' | 'imageUrl' | 'phones'>
  address: Pick<
    Address,
    'street' | 'number' | 'district' | 'complement' | 'mapUrl'
  >
}

async function editPharmacy(data: IEditPharmacy): Promise<boolean> {
  try {
    await prismaClient.pharmacy.update({
      where: {
        id: data.pharmacy.id,
      },
      data: {
        name: data.pharmacy.name,
        imageUrl: data.pharmacy.imageUrl,
        phones: data.pharmacy.phones,
        address: {
          update: {
            street: data.address.street,
            number: data.address.number,
            district: data.address.district,
            complement: data.address.complement,
            mapUrl: data.address.mapUrl,
          },
        },
      },
    })

    revalidatePath('/farmacias')

    return true
  } catch (error) {
    console.error(error)

    return false
  } finally {
    await prismaClient.$disconnect()
  }
}

export { editPharmacy }
