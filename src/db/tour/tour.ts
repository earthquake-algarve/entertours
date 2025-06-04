'use server';

import getSession from '@/lib/session/session';
import db from '../db';
import { getCompanyByUserId } from '../company/company';
import { Prisma } from '@prisma/client';

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

		const convertedStartTime = new Date(
			`${formData.calendarDateFrom.split('T')[0]}T${
				formData.startTime
			}:00Z`,
		);

		await db.tourAvailability.create({
			data: {
				startDate: formData.calendarDateFrom,
				endDate: formData.calendarDateTo,
				startTime: convertedStartTime,
				tourId: tour.id,
			},
		});

		console.log('Tour created successfully!');
		return tour;
	} catch (error) {
		console.error('Error creating tour:', error);
		return null;
	}
}

export async function updateTour(
	tourId: string,
	tourAvailabilityId: string,
	formData: FormData,
	imagePaths: string[],
) {
	const session = await getSession();
	const company = await getCompanyByUserId(session?.user.id);

	try {
		// First, get the current images
		const currentTour = await db.tour.findUnique({
			where: { id: tourId },
			include: { images: true },
		});

		// Create a map of existing image paths
		const existingImagePaths = new Set(
			currentTour?.images.map((img) => img.name) || [],
		);

		// Find new images to add
		const newImagePaths = imagePaths.filter(
			(path) => !existingImagePaths.has(path),
		);

		// Update the tour with the new basic information
		const tour = await db.tour.update({
			where: {
				id: tourId,
			},
			data: {
				name: formData.name,
				locationId: formData.location,
				price: formData.price,
				duration: formData.duration,
				description: formData.description,
				categoryId: formData.category,
				// Only create new images, don't touch existing ones
				images: {
					create: newImagePaths.map((imagePath) => ({
						name: imagePath,
						isActive: true,
					})),
				},
				isActive: true,
				companyId: company?.id,
			},
			include: { images: true },
		});

		const convertedStartTime = new Date(
			`${formData.calendarDateFrom.split('T')[0]}T${
				formData.startTime
			}:00Z`,
		);

		await db.tourAvailability.update({
			where: {
				id: tourAvailabilityId,
			},
			data: {
				startDate: formData.calendarDateFrom,
				endDate: formData.calendarDateTo,
				startTime: convertedStartTime,
				tourId: tour.id,
			},
		});

		console.log('Tour edited successfully!');
		return tour;
	} catch (error) {
		console.error('Error editing tour:', error);
		return null;
	}
}

export async function getTours() {
	const tours = await db.tour.findMany({
		orderBy: { createdAt: 'desc' },
		include: { location: true, images: true, category: true, tourAvailability: true },	
	});

	return tours;
}

export async function getTourById(id: string) {
	const tour = (await db.tour.findUnique({
		where: {
			id: id,
		},
		include: {
			category: true,
			location: true,
			tourAvailability: true,
			images: true,
		},
	})) as Prisma.TourGetPayload<{
		include: {
			category: true;
			location: true;
			tourAvailability: true;
			images: true;
		};
	}>;

	return tour;
}

export async function getAllToursByCategoryId(categoryId: string) {
	const tours = await db.tour.findMany({
		where: { categoryId: categoryId },
		include: {
			location: true,
			images: true,
		},
	});
	return tours;
}

export async function getToursByCompanyId(companyId: string | undefined) {
	const tours = await db.tour.findMany({
		where: {
			companyId: companyId,
		},
		include: {
			category: true,
			location: true,
			tourAvailability: true,
			images: true,
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
		include: { location: true, images: true },
		orderBy: { createdAt: 'desc' },
	});

	return tours;
}

export async function deleteTourImageOnDb(imageId: string) {
	try {
		await db.images.delete({
			where: { id: imageId },
		});

		console.log('Tour image deleted successfully!');
		return true;
	} catch (error) {
		console.error('Error deleting tour image:', error);
		return null;
	}
}