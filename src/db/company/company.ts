'use server';

import { db } from '../../lib/prisma';

export async function createCompany(formData: FormData) {
	try {

		// Convert FormData to a plain object
		const data = Object.fromEntries(formData.entries()) as Record<
			string,
			any
		>;

		const company = await db.company.create({
			data: {
				name: data.name,
				email: data.email,
				phone: data.phone,
				address: data.address,
				nif: data.nif,
				userId: data.userId,
				isActive: true,
			},
		});

		await db.user.update({
			where: {
				id: data.userId,
			},
			data:{
				hasCompany: true,
			}
		})

		console.log('Company created successfully!');
		return company;
	} catch (error) {
		console.error('Error creating company:', error);
		return null;
	}
}

export async function getCompanyByUserId(userId: string | undefined) {
	const company = await db.company.findUnique({
		where: { userId: userId },
	});
	return company;
}

export async function getCompanies(){
	const companies = await db.company.findMany();

	return companies ?? [];
}
