import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Digite seu email',
        },
        password: {
          label: 'Senha',
          type: 'password',
          placeholder: 'Digite sua senha',
        },
      },
      async authorize(credentials) {
        console.log(credentials)

        if (!credentials) {
          return null
        }

        if (credentials.email === 'teste@teste.com.br') {
          return {
            id: '1',
            name: 'Testador',
            email: 'teste@teste.com.br',
          }
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
