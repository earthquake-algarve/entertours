import { getCategories } from '@/db/category/category';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const categories = await getCategories();

		if (!categories) {
			return NextResponse.json(
				{ error: 'Categories not found' },
				{ status: 404 },
			);
		}
		return NextResponse.json(categories);
	} catch (error) {
		console.error('Error in /api/categories:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}
