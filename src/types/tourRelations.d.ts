import { Prisma } from '@/generated/prisma';

export type TourWithRelations = Prisma.TourGetPayload<{
	include: {
		category: true;
		location: true;
		tourAvailability: true;
		images: true;
		orders: true;
	};
}>;
