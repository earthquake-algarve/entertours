
import { getLocations } from '@/db/locations/location';
import { NextResponse } from 'next/server';

export async function GET() {
	const locations = await getLocations();

	if (locations == null) {
		return new NextResponse('Locations not found', { status: 404 });
	}

	return NextResponse.json(locations);
}
