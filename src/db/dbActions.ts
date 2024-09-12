'use server';

import db from './db';

export async function createCompany(formData: FormData) {
	try {
		// const category = await prisma.company.findFirst({
		// 	where: { name: formData.category },
		// 	select: {
		// 		name: true,
		// 	},
		// });

		// if (!category) {
		// 	throw new Error('Category not found');
		// }

		// const categoryId = category.id;
		// const categoryName = category.name;

		// Convert FormData to a plain object
		const data = Object.fromEntries(formData.entries()) as Record<
			string,
			any
		>;

		console.log(data);

		// const user = await db.company.findFirst({
		// 	where: { id: data.userId },
		// 	select: {
		// 		id: true,
		// 		// name: true,
		// 	},
		// });

		// if (!user) {
		// 	throw new Error('User not found');
		// }

		// const userId = user.id;
		// const userName = user.name;

		const company = await db.company.create({
			data: {
				name: data.name,
				email: data.email,
				phone: data.phone,
				address: data.address,
				nif: data.nif,
				userId: data.userId,
			},
		});

		console.log('Company created successfully!');
		return company;
	} catch (error) {
		console.error('Error creating company:', error);
		return null;
	}
}

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

export async function createTour(formData: FormData, imagePath: string) {
	try {
		const tour = await db.tour.create({
			data: {
				name: formData.name,
				location: formData.location,
				price: formData.price,
				duration: formData.duration,
				description: formData.description,
				categoryId: formData.category,
				imagePath,
			},
		});

		console.log('Tour created successfully!');
		return tour;
	} catch (error) {
		console.error('Error creating tour:', error);
		return null;
	}
}

export async function getTours() {
	const tours = await db.tour.findMany();

	return tours;
}

export async function getTourById(id: string) {
	const tour = await db.tour.findUnique({
		where: {
			id: id,
		},
	});

	return tour;
}

export async function getAllToursByCategoryId(categoryId: string) {
	const tours = await db.tour.findMany({
		where: {categoryId: categoryId},
	})
	return tours;
}
