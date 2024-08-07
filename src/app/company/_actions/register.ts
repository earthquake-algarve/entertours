'use server';

import { registerCompanySchema } from '@/app/validation/schema';
import db from '@/db/db';
import { createCompany } from '@/db/dbActions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function registerCompany(formData: FormData) {
	// console.log(Object.fromEntries(formData.entries()));

	const result = registerCompanySchema.safeParse(
		Object.fromEntries(formData.entries()),
	);

	console.log(
		'resultado do formdata-----------------------------------',
		result.data,
	);

	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.formErrors.fieldErrors;
	}

	await createCompany(formData);

	// revalidatePath('/admin/companies');

	redirect('/company/profile');
}
