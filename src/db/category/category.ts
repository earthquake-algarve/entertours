'use server';

import db from '../db';

export async function getCategories() {
	const categories = await db.category.findMany();
	//add a column in db isActive

	// console.log(categories);

	return categories;
}

export async function getCategoryById(id: string) {
	const category = await db.category.findUnique({
		where: {
			id: id,
		},
	});

	return category;
}
