import { genSalt, hash } from 'bcrypt-ts'

import { prismaClient } from '@/lib/prisma'

async function user(name: string, email: string, password: string) {
  const salt = await genSalt(10)
  const passwordHash = await hash(password, salt)

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      console.error('Usuário já existe!')
      return
    }

    await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    })

    console.log('Usuário criado com sucesso!')
  } catch (error) {
    console.error(error)
  } finally {
    prismaClient.$disconnect()
  }
}

user('Joiaribe', 'teste@teste.com.br', 'abcd1234')
