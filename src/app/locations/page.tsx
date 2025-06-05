import React from 'react';
import LocationCard from '@/components/LocationCard';
import { getHowManyToursByLocation } from '@/db/locations/location';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

type LocationWithTours = {
	id: string;
	name: string;
	image?: { name?: string };
	_count: { tours: number };
};

export default async function Locations() {
	const locations: LocationWithTours[] = await getHowManyToursByLocation();
	return (
		<div className='flex flex-col justify-center items-center p-16 '>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/'>Back to home page</Link>}>
				All locations
			</PageHeader>

			<div className='grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{locations.map((location: LocationWithTours) => (
					<Link href={`locations/${location.id}`} key={location.id}>
						<LocationCard
							location={location.name}
							numberOfTours={location._count.tours}
							imagePath={location.image?.name ?? ''}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
