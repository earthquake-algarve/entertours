import HomeCard from '@/components/HomeCard';
import { PageHeader } from '@/components/PageHeader';
import { getTours } from '@/db/tour/tour';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function AllTours() {

	const tours = await getTours();

	return (
		<div className='flex flex-col justify-center items-center p-16 '>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/'>Back to home page</Link>}>
				All tours
			</PageHeader>

			<Suspense fallback={<p>Loading all tours</p>}>
				<div className='grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{/* <div className='flex justify-center items-center gap-6 flex-wrap'> */}
					{tours.map((tour) => {
						return (
							<Link key={tour.id} href={`tours/${tour.id}`}>
								<HomeCard
									title={tour.name}
									location={tour.location.name}
									duration={tour.duration}
									price={tour.price}
									imagePath={tour.images[0].name}
								/>
							</Link>
						);
					})}
				</div>
			</Suspense>
		</div>
	);
}
