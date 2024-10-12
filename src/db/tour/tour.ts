'use server';

import getSession from '@/lib/session/session';
import db from '../db';
import { getCompanyByUserId } from '../company/company';

export async function createTour(formData: FormData, imagePaths: string[]) {
	
	const session = await getSession();
	const company = await getCompanyByUserId(session?.user.id);
	
	try {
		const tour = await db.tour.create({
			data: {
				name: formData.name,
				locationId: formData.location,
				price: formData.price,
				duration: formData.duration,
				description: formData.description,
				categoryId: formData.category,
				images: {
					create: imagePaths.map((imagePath) => ({
						name: imagePath,
						isActive: true,
					})),
				},
				isActive: true,
				companyId: company?.id,
			},
			include: { images: true },
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
		include: { location: true },
	});

	return tours;
}

export async function getTourById(id: string) {
	const tour = await db.tour.findUnique({
		where: {
			id: id,
		},
		include: {location: true}
	});

	return tour;
}

export async function getAllToursByCategoryId(categoryId: string) {
	const tours = await db.tour.findMany({
		where: { categoryId: categoryId },
	});
	return tours;
}

export async function getToursByCompanyId(companyId: string | undefined) {
	const tours = await db.tour.findMany({
		where: {
			companyId: companyId,
		},
		include: { 
			category: true , 
			location: true

		},
		orderBy: { createdAt: 'desc' },
	});

	return tours;
}

export async function getAllToursByLocationId(locationId: string | undefined) {
	const tours = await db.tour.findMany({
		where: {
			locationId: locationId,
		},
		include: { location: true },
		orderBy: { createdAt: 'desc' },
	});

	return tours;
}
