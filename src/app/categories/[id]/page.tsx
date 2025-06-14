import HomeCard from '@/components/HomeCard';
import { PageHeader } from '@/components/PageHeader';
import { getCategoryById } from '@/db/category/category';
import { getAllToursByCategoryId } from '@/db/tour/tour';
import Link from 'next/link';
import React from 'react';

export default async function AllToursFromCategory({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// Await the params Promise
	const { id } = await params;
	
	const [toursData, categoryData] = await Promise.all([
		getAllToursByCategoryId(id),
		getCategoryById(id),
	]);
	if (!toursData || toursData.length === 0) {
		return (
			<div className='container p-16'>
				<PageHeader>No tours found in this category</PageHeader>
			</div>
		);
	}
	return (
		<>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={
					<Link href='/categories'>Back to all categories</Link>
				}>
				All tours from category {categoryData?.name}
			</PageHeader>

			<div className='grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{toursData.length == 0 && 'No tours founded...'}
				{toursData.map((tour) => (
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
