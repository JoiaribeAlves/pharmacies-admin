// eslint-disable-next-line
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    imageUrl: string
  }

  interface Session {
    user: User & {
      imageUrl: string
    }
  }
}
