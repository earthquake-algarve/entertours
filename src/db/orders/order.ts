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

export async function getOrdersByUserId(userId: string) {
	const orders = await db.order.findMany({
		where: {
			userId,
		},
		include: {
			tour: {
				select:{
					id: true,
					name: true,
					price: true,
				}
			}
		},
		orderBy: {
			createdAt: 'desc',
		},
	});	

	return orders;
}


export async function getOrdersByCompanyId(companyId: string) {
	const orders = await db.order.findMany({
		where: {
			tour: {
				companyId: companyId,
			},
		},
		include: {
			tour: {
				select: {
					id: true,
					name: true,
					price: true,
				},
			},
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	return orders;
}

export async function getOrders(){
	const orders = await db.order.findMany({
		include: {
			tour: {
				select: {
					id: true,
					name: true,
					price: true,
				},
			},
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	
	return orders;
}