'use server'

import { Address, Pharmacy } from '@prisma/client'
import { revalidatePath } from 'next/cache'

import { prismaClient } from '@/lib/prisma'

interface ICreatePharmacy {
  pharmacy: Pick<Pharmacy, 'name' | 'imageUrl' | 'phones'>
  address: Pick<
    Address,
    'street' | 'number' | 'district' | 'complement' | 'mapUrl'
  >
}

async function createPharmacy(data: ICreatePharmacy) {
  try {
    await prismaClient.pharmacy.create({
      data: {
        name: data.pharmacy.name,
        imageUrl: data.pharmacy.imageUrl,
        phones: data.pharmacy.phones,
        address: {
          create: {
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

export { createPharmacy }
