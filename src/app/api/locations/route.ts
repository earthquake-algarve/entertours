
import { getLocations } from '@/db/locations/location';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const locations = await getLocations();

		if (!locations) {
			return NextResponse.json(
				{ error: 'Locations not found' },
				{ status: 404 },
			);
		}
		return NextResponse.json(locations);
	} catch (error) {
		console.error('Error in /api/locations:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}
