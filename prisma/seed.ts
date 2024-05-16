// import { genSalt, hash } from 'bcrypt-ts'

import { prismaClient } from '@/lib/prisma'

// async function user(name: string, email: string, password: string) {
//   const salt = await genSalt(10)
//   const passwordHash = await hash(password, salt)

//   try {
//     const user = await prismaClient.user.findUnique({
//       where: {
//         email,
//       },
//     })

//     if (user) {
//       console.error('Usuário já existe!')
//       return
//     }

//     await prismaClient.user.create({
//       data: {
//         name,
//         email,
//         password: passwordHash,
//       },
//     })

//     console.log('Usuário criado com sucesso!')
//   } catch (error) {
//     console.error(error)
//   } finally {
//     prismaClient.$disconnect()
//   }
// }

// user('Joiaribe', 'teste@teste.com.br', 'abcd1234')

async function newPharmacy() {
  try {
    const pharmacies = [
      {
        name: 'RD Farma',
        phones: ['69992931044', '69992931044'],
      },
      {
        name: 'Farmácia Mini Preço',
        phones: ['6935216744'],
      },
      {
        name: 'Drogasil',
        phones: ['69996067132', '69996067132'],
      },
      {
        name: 'Farmácia Baixo Preço',
        phones: ['6935211572'],
      },
      {
        name: 'Farmácia Bernardo',
        phones: ['69993074455', '69993074455'],
      },
      {
        name: 'Farmácia Mais Saúde',
        phones: ['6935211810', '69992525658'],
      },
      {
        name: 'Farmadroga',
        phones: ['6935212506'],
      },
      {
        name: 'Farmácia Santa Lúcia',
        phones: ['6935212520'],
      },
      {
        name: 'Drogaria Ultra Popular',
        phones: ['6935214723', '69993042139'],
      },
      {
        name: 'Farmácia Economize',
        phones: ['6935211460'],
      },
      {
        name: 'Farmácia Mini Preço',
        phones: ['6935211460'],
      },
      {
        name: 'Farmácia Preço Baixo',
        phones: ['6935212222', '69993679463'],
      },
      {
        name: 'Drogaria Líder',
        phones: ['6935212635'],
      },
      {
        name: 'Farmácia Unifarma',
        phones: ['6935214138'],
      },
      {
        name: 'Farmácia Farminas',
        phones: ['6935213020', '69993333020'],
      },
      {
        name: 'Farmácia Pague Menos',
        phones: ['6935216708', '69981600011'],
      },
      {
        name: 'Farmácia Preço Baixo',
        phones: ['6935213281'],
      },
      {
        name: 'Drogaria Ultra Popular',
        phones: ['6935213874'],
      },
    ]

    const addresses = [
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1528',
        district: 'Setor 2',
        complement: 'Ao lado do supermercado Ebenezer',
        mapUrl: 'https://bit.ly/nW2Fq7Y',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '2568',
        district: 'Setor 5',
        complement: 'Em frente ao supermercado IG',
        mapUrl: 'https://bit.ly/6vP1rLX',
      },
      {
        street: 'Rua Belo Horizonte',
        number: '3055',
        district: 'Setor 5',
        complement: 'Sob esquina com Av. Dom Pedro I',
        mapUrl: 'https://bit.ly/aD4Oe8S',
      },
      {
        street: 'Av. Florianópolis',
        number: '1735',
        district: 'Setor 7',
        complement: 'Em frente ao hospital municipal',
        mapUrl: 'https://bit.ly/4jK8ZbV',
      },
      {
        street: 'Av. Marechal Rondon',
        number: '2915',
        district: 'Setor 1',
        complement: 'Em frente ao supermercado TaíMax',
        mapUrl: 'https://bit.ly/pX9Mn5A',
      },
      {
        street: 'Av. Florianópolis',
        number: '1719',
        district: 'Setor 7',
        complement: 'Em frente ao hospital municipal',
        mapUrl: 'https://bit.ly/3T6c2yJ',
      },
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1954',
        district: 'Setor 1',
        complement: 'Próximo a loja avenida',
        mapUrl: 'https://bit.ly/9uQ5Cf1',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '2552',
        district: 'Setor 5',
        complement: 'Em frente ao supermercado IG',
        mapUrl: 'https://bit.ly/ASrtn3g',
      },
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1623',
        district: 'Setor 1',
        complement: 'Sob esquina com Av. Marechal Rondon',
        mapUrl: 'https://bit.ly/49OqfR0',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '2616',
        district: 'Setor 5',
        complement: 'Próximo ao supermercado IG',
        mapUrl: 'https://bit.ly/49UIhkI',
      },
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1544',
        district: 'Setor 2',
        complement: 'Ao lado da livraria Kassula',
        mapUrl: 'https://bit.ly/4aGZY8r',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '2568',
        district: 'Setor 5',
        complement: 'Em frente ao supermercado IG',
        mapUrl: 'https://bit.ly/3UrfkIk',
      },
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1574',
        district: 'Setor 2',
        complement: 'Em frente a rodoviária dos colonos',
        mapUrl: 'https://bit.ly/3UrcaEp',
      },
      {
        street: 'Av. JK',
        number: '1181',
        district: 'Setor 3',
        complement: 'Em baixo do Cassis Hotel',
        mapUrl: 'https://bit.ly/3UujJul',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '3056',
        district: 'Setor 5',
        complement: 'Em frente a rodoviária municipal',
        mapUrl: 'https://bit.ly/3WeqIc9',
      },
      {
        street: 'Av. Pe. Adolpho Rohl',
        number: '1484',
        district: 'Setor 2',
        complement: 'Ao lado da lotérica avenida',
        mapUrl: 'https://bit.ly/3QcugI6',
      },
      {
        street: 'Av. Marechal Rondon',
        number: '2949',
        district: 'Setor 1',
        complement: 'Ao lado da M Garcia',
        mapUrl: 'https://bit.ly/3Js8nAr',
      },
      {
        street: 'Av. Dom Pedro I',
        number: '2484',
        district: 'Setor 5',
        complement: 'Sob esquina com rua Ceará',
        mapUrl: 'https://bit.ly/3w4AZg9',
      },
    ]

    try {
      pharmacies.map(async (pharmacy, index) => {
        const res = await prismaClient.pharmacy.create({
          data: pharmacy,
        })

        await prismaClient.address.create({
          data: {
            ...addresses[index],
            pharmacyId: res.id,
          },
        })
      })

      console.log('Farmácias criadas com sucesso!')
    } catch (error) {
      console.error(error)
    } finally {
      await prismaClient.$disconnect()
    }
  } catch (error) {
    console.error(error)
  } finally {
    prismaClient.$disconnect()
  }
}

newPharmacy()
