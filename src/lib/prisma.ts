import { PrismaClient } from "@/generated/prisma/client"

//prevent prisma to create multiple clients in dev

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient 
}

export const db =
	globalForPrisma.prisma ||
	new PrismaClient({
    errorFormat: 'pretty'
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db