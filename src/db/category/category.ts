'use server';

import { db } from '../../lib/prisma';

export async function getCategories() {
	const categories = await db.category.findMany({
		where: {
			isActive: true,
		},
	});

	return categories ?? [];
}

export async function getCategoryById(id: string) {
	const category = await db.category.findUnique({
		where: {
			id: id,
			isActive: true,
		},
	});

	return category;
}

export async function getHowManyToursByCategory() {
	const categories = await db.category.findMany({
		select: {
			id: true,
			name: true,
			imagePath: true,
			_count: { select: { tours: true } },
		},
		where: {
			isActive: true,
		},
	});
	return categories ?? [];
}
