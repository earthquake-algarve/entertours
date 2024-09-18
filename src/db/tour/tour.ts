'use server';

import db from '../db';

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
	const tours = await db.tour.findMany({
		orderBy: { createdAt: 'desc' },
	});

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
		where: { categoryId: categoryId },
	});
	return tours;
}

export async function getCompanyTours() {
	const tours = await db.tour.findMany({
		//falta fazer a relacao entre tour e company na db
		include: { category: true },
		orderBy: { createdAt: 'desc' },
	});

	return tours;
}
