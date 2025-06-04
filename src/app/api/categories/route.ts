import { getCategories } from '@/db/category/category';
import { NextResponse } from 'next/server';

export async function GET() {
	const categories = await getCategories();

	if (categories == null) {
		return NextResponse.json(
			{ error: 'Categories not found' },
			{ status: 404 },
		);
	}

	return NextResponse.json(categories);
}
