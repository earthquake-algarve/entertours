import { PageHeader } from '@/components/PageHeader';
import TourDetailsCard from '@/components/TourDetailsCard';
import { getTourById } from '@/db/tour/tour';
import Link from 'next/link';
import React from 'react';

export default async function TourDetails({
	params: { id },
}: {
	params: { id: string };
}) {
	const tour = await getTourById(id);

	return (
		<div className='border-2 p-16 flex flex-col justify-center items-center'>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/tours'>Back to all tours</Link>}
				>
				Tour
			</PageHeader>

			<TourDetailsCard
				id={tour?.id}
				title={tour?.name}
				location={tour?.location.name}
				duration={tour?.duration}
				price={tour?.price}
				description={tour?.description}
				imagePath={tour?.images[0].name}
			/>
		</div>
	);
}
