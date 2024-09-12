
import { getCategories } from '@/db/dbActions';
import { NextResponse } from 'next/server';

export async function GET() {
	const categories = await getCategories();

	if (categories == null) {
		return new NextResponse('Categories not found'), { status: 404 };
	}

	return NextResponse.json(categories);
}
