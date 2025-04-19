import { Prisma } from '@prisma/client';

export type TourWithRelations = Prisma.TourGetPayload<{
	include: {
		category: true;
		location: true;
		tourAvailability: true;
		images: true;
	};
}>;
