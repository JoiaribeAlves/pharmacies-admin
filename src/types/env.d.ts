declare namespace NodeJS {
  interface ProcessEnv {
    BASE_URL: string
    DATABASE_URL: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
  }
}
