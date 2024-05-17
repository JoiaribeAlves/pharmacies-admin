'use server'

import { revalidatePath } from 'next/cache'

import { prismaClient } from '@/lib/prisma'

async function deleteDuty(id: string): Promise<boolean> {
  try {
    await prismaClient.duty.delete({
      where: {
        id,
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

export { deleteDuty }
