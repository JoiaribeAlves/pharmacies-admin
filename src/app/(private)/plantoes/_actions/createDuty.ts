'use server'

import { Duty } from '@prisma/client'
import { prismaClient } from '@/lib/prisma'

interface ICreateDuty {
  duty: Pick<Duty, 'startAt' | 'endAt' | 'pharmacyId'>
}

async function createDuty(data: ICreateDuty) {
  try {
    await prismaClient.duty.create({
      data: {
        startAt: data.duty.startAt,
        endAt: data.duty.endAt,
        pharmacyId: data.duty.pharmacyId,
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

export { createDuty }
