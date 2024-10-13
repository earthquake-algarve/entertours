'use server';

import db from '../db';

export async function getLocations() {
	const locations = await db.location.findMany({
		where: {
			isActive: true,
		},
		include: {
			image: true,
		},
	});

	return locations;
}

export async function getLocationById(id: string) {
	const location = await db.location.findUnique({
		where: { id: id, isActive: true },
	});

	return location;
}

export async function getHowManyToursByLocation() {
	const locations = await db.location.findMany({
		select: {
			id: true,
			name: true,
			image: true,
			_count: { select: { tours: true } },
		},
		where: {
			isActive: true,
		},
	});
	return locations;
}
