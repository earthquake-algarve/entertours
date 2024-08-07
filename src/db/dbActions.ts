'use server'

import db from './db'

export async function createCompany(formData: FormData){
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

			const company = await db.company.create({
				data: {
					name: data.name,
					email: data.email,
					phone: data.phone,
					address: data.address,
					nif: data.nif,
					// userId: formData.userId,
				},
			});

			console.log('Company created successfully!');
			return company;
		} catch (error) {
			console.error('Error creating company:', error);
			return null;
		}
}