import { getTours } from "@/db/tour/tour";
import { NextResponse } from "next/server";

export async function GET() {
    try {
		const tours = await getTours();

		if (!tours) {
			return NextResponse.json(
				{ error: 'Tours not found' },
				{ status: 404 },
			);
		}
		return NextResponse.json(tours);
	} catch (error) {
		console.error('Error in /api/tours:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}