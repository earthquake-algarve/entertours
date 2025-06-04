'use server';

import { editTourSchema, tourSchema } from '@/app/validation/schema';
import { getCategories } from '@/db/category/category';
import {
	createTour,
	deleteTourImageOnDb,
	getTourById,
	updateTour,
} from '@/db/tour/tour';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { notFound, redirect } from 'next/navigation';
import path from 'path';

export async function fetchCategories() {
	const categories = await getCategories();
	return categories;
}

export async function addTour(prevState: unknown, formData: FormData) {
	const result = tourSchema.safeParse(Object.fromEntries(formData.entries()));

	console.log(result);

	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;

	const imagePaths: string[] = [];
	const files = formData.getAll('image') as File[];

	for (const file of files) {
		const imagePath = `/tour/${data.name}/${file.name}`;
		await fs.mkdir(`public/tour/${data.name}`, { recursive: true });
		await fs.writeFile(
			`public${imagePath}`,
			Buffer.from(await file.arrayBuffer()),
		);
		imagePaths.push(imagePath);
	}

	if ((await createTour(formData , imagePaths)) == null) {
		return null;
	}

	revalidatePath('/');
	revalidatePath('/tours');
	revalidatePath('/company/tours');

	redirect('/company/tours');
}

//update this action
export async function editTour(
	id: string,
	prevState: unknown,
	formData: FormData,
) {
	// console.log(Object.fromEntries(formData.entries()));

	const result = editTourSchema.safeParse(
		Object.fromEntries(formData.entries()),
	);

	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;

	const tour = await getTourById(id);

	if (tour == null) return notFound();

	// Get existing image paths
	const existingImagePaths = formData.getAll('existingImages') as string[];

	// Find images to delete by comparing tour.images with existingImagePaths
	const imagesToDelete = tour.images.filter(
		(img) => !existingImagePaths.includes(img.name),
	);

	// Delete removed images from public folder
	for (const image of imagesToDelete) {
		try {
			await fs.unlink(`public${image.name}`);
			await deleteTourImageOnDb(image.id);
		} catch (error) {
			console.error(`Failed to delete image ${image.name}:`, error);
		}
	}

	// Handle new files
	const files = formData.getAll('image') as File[];
	const newImagePaths: string[] = [];

	for (const file of files) {
		// Skip empty file inputs
		if (file.size > 0) {
			const imagePath = `/tour/${data.name}/${file.name}`;

			// Check if image already exists in public folder
			try {
				const fileStats = await fs.stat(`public${imagePath}`);
				if (fileStats.isFile()) {
					// File exists, use a different filename to avoid conflicts
					const newFileName = `${Date.now()}-${file.name}`;
					const newImagePath = `/tour/${data.name}/${newFileName}`;
					await fs.mkdir(`public/tour/${data.name}`, {
						recursive: true,
					});
					await fs.writeFile(
						`public${newImagePath}`,
						Buffer.from(await file.arrayBuffer()),
					);
					newImagePaths.push(newImagePath);
				}
			} catch (error) {
				// File doesn't exist, create it normally
				await fs.mkdir(`public/tour/${data.name}`, { recursive: true });
				await fs.writeFile(
					`public${imagePath}`,
					Buffer.from(await file.arrayBuffer()),
				);
				newImagePaths.push(imagePath);
			}
		}
	}

	// Combine existing and new paths for the database update
	const allImagePaths = [...existingImagePaths, ...newImagePaths];

	if (
		(await updateTour(
			tour.id,
			tour.tourAvailability[0].id,
			formData,
			allImagePaths,
		)) == null
	) {
		return null;
	}

	revalidatePath('/');
	revalidatePath('/tours');
	revalidatePath('/company/tours');
	revalidatePath(`/company/tours/${id}`);

	redirect('/company/tours');
}

export async function deleteTourImage(tourId: string, imageId: string) {
	// Get the image data first to know the file path
	const tour = await getTourById(tourId);
	if (!tour) return null;

	const imageToDelete = tour.images.find((img) => img.id === imageId);
	if (imageToDelete) {
		try {
			// Delete the file from the public folder
			await fs.unlink(`public${imageToDelete.name}`);

			// Check if folder is empty and remove it if it is
			const dirPath = path.dirname(`public${imageToDelete.name}`);
			const files = await fs.readdir(dirPath);
			if (files.length === 0) {
				await fs.rmdir(dirPath);
			}
		} catch (error) {
			console.error(
				`Failed to delete image file: ${imageToDelete.name}`,
				error,
			);
		}
	}

	// Delete from database
	await deleteTourImageOnDb(imageId);

	revalidatePath('/company/tours');
	revalidatePath(`/company/tours/${tourId}`);
	return true;
}