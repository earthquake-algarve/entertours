import { Prisma } from '@/generated/prisma';

export type OrdersWithRelations = Prisma.OrderGetPayload<{
    include: {
        tour: {
            select: {
                id: true;
                name: true; 
                price: true;}
        }
    };
}>;