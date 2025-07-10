'use server';

import { db } from '../../lib/prisma';

export async function getOrderbyEmailAndTourId(email: string, tourId: string) {
	const order = await db.order.findFirst({
		where: {
			user: { email },
			tourId,
		},
		select: {
			id: true,
		},
	});

    return order
}
