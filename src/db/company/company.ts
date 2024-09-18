'use server';

import db from '../db';

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

export async function getCompanyByUserId(userId: string | undefined) {
	const company = await db.company.findUnique({
		where: { userId: userId },
	});
	return company;
}


