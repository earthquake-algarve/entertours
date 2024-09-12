import HomeCard from '@/components/HomeCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllToursByCategoryId, getCategoryById } from '@/db/dbActions';
import Link from 'next/link';

export default async function AllToursFromCategory({
	params: { id },
}: {
	params: { id: string };
}) {
	const [toursData, categoryData] = await Promise.all([
		getAllToursByCategoryId(id),
		getCategoryById(id),
	]);
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
							location={tour?.location}
							duration={tour?.duration}
							price={tour?.price}
						/>
					</Link>
				))}
			</div>
		</>
	);
}
