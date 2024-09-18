'use server';

import { tourSchema } from '@/app/validation/schema';
import { getCategories } from '@/db/category/category';
import { createTour } from '@/db/tour/tour';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function fetchCategories(){
	const categories = await getCategories();
	return categories;
}

export async function addTour(prevState: unknown, formData : FormData) {
	const result = tourSchema.safeParse(Object.fromEntries(formData.entries()));

	console.log(result);

	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;

	await fs.mkdir('public/tour', { recursive: true });

	const imagePath = `/tour/${crypto.randomUUID()}-${data.image.name}`;

	await fs.writeFile(
		`public${imagePath}`,
		Buffer.from(await data.image.arrayBuffer()) 
	);

	await createTour({ ...data }, imagePath)

	revalidatePath('/');
	revalidatePath('/tours');
	revalidatePath('/company/tours');

	redirect('/company/tours');
}

export async function updateTour(id: string, prevState: unknown, formData: FormData) {}
