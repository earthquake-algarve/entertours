import HomeCard from '@/components/HomeCard';
import { PageHeader } from '@/components/PageHeader';
import { getLocationById } from '@/db/locations/location';
import { getAllToursByLocationId } from '@/db/tour/tour';
import { TourWithRelations } from '@/types/tourRelations';
import Link from 'next/link';
import React from 'react';


export default async function AllToursFromLocation({
	params: { id },
}: {
	params: { id: string };
}) {
	const [toursData, locationData] = await Promise.all([
		getAllToursByLocationId(id),
		getLocationById(id),
	]);
	return (
		<>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={
					<Link href='/locations'>Back to all locations</Link>
				}>
				All tours from location {locationData?.name}
			</PageHeader>

			<div className='grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{toursData.length == 0 && 'No tours founded...'}
				{toursData.map((tour: TourWithRelations) => (
					<Link href={`/tours/${tour?.id}`} key={tour?.id}>
						<HomeCard
							title={tour?.name}
							location={tour?.location.name}
							duration={tour?.duration}
							price={tour?.price}
							imagePath={tour?.images[0].name}
						/>
					</Link>
				))}
			</div>
		</>
	);
}
