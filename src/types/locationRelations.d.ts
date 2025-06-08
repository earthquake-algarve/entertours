

export type LocationWithRelations = Prisma.LocationGetPayload<{
    include: {
        tours: true;
        images: true;
    };
}>;
