import HomeCard from '@/components/HomeCard';
import { PageHeader } from '@/components/PageHeader';
import { getTours } from '@/db/dbActions';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function AllTours() {

	const tours = await getTours();

	return (
		<div className='flex flex-col p-16'>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/'>Back to home page</Link>}>
				All tours
			</PageHeader>

			<Suspense fallback={<p>Loading all tours</p>}>
				<div className='grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{tours.map((tour) => {
						return (
							<Link key={tour.id} href={`tours/${tour.id}`}>
								<HomeCard
									title={tour.name}
									location={tour.location}
									duration={tour.duration}
									price={tour.price}
								/>
							</Link>
						);
					})}
				</div>
			</Suspense>

			{/* {Array.from({ length: 24 }, (_, index) => (
					<Link key={index} href={`tours/${id}`}>
						<HomeCard
							title='Titulo tour'
							location='Lagos'
							duration={120}
							price={40}
						/>
					</Link>
				))} */}
		</div>
	);
}
