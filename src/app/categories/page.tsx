import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { getHowManyToursByCategory } from '@/db/category/category';
import CategoryCard from '@/components/CategoryCard';

export default async function Categories() {
	const categories = await getHowManyToursByCategory()
	if (!categories || categories.length === 0) {
		return (
			<div className='container p-16'>
				<PageHeader>No categories found</PageHeader>
			
			</div>
		);
	}

	return (
		<div className='flex flex-col justify-center items-center p-16 '>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/'>Back to home page</Link>}>
				All categories
			</PageHeader>

			<div className='grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{categories.map((category) => (
					<Link href={`categories/${category.id}`} key={category.id}>
						<CategoryCard
							title={category.name}
							imagePath={category.imagePath ?? 'banner.png'}
							numberOfTours={category._count.tours}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
