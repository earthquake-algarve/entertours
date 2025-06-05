import { PrismaClient } from "@/generated/prisma/client"

//prevent prisma to create multiple clients in dev

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient 
}

export const db = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare global {
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>
// }

// const db = globalThis.prisma ?? prismaClientSingleton()

// export default db

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db