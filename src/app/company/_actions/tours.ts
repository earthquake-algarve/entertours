'use server';

import { editTourSchema, tourSchema } from '@/app/validation/schema';
import { getCategories } from '@/db/category/category';
import { createTour, deleteTourImageOnDb, getTourById, updateTour } from '@/db/tour/tour';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { notFound, redirect } from 'next/navigation';

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

	// await fs.mkdir('public/tour', { recursive: true });

	// const imagePath = `/tour/${crypto.randomUUID()}-${data.image.name}`;

	// await fs.writeFile(
	// 	`public${imagePath}`,
	// 	Buffer.from(await data.image.arrayBuffer())
	// );

	if ((await createTour({ ...data }, imagePaths)) == null) {
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
	console.log(Object.fromEntries(formData.entries()));
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

	

	//Consider deleting/editing images in another function in the future
	//Right now, don't allow to delete/edit images
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

	//just retrieving the images already stored
	// const imagePaths: string[] = [];

	// tour.images.forEach((image) => {
	// 	imagePaths.push(image.name);
	// });

	if (
		(await updateTour(
			tour.id,
			tour.tourAvailability[0].id,
			{ ...data },
			imagePaths,
		)) == null
	) {
		return null;
	}

	revalidatePath('/');
	revalidatePath('/tours');
	revalidatePath('/company/tours');

	redirect('/company/tours');
}

export async function deleteTourImage(tourId: string, imageId: string) {
	await deleteTourImageOnDb(tourId, imageId);

	revalidatePath('/company/tours');
	revalidatePath('/company/tours/' + tourId);
}