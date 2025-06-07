import { BrandButton } from '../BrandButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HomeCarousel from '../HomeCarousel';
import { getTours } from '@/db/tour/tour';

export default async function CarouselSection() {
	const tours = (await getTours()) ?? [];
	if (!tours || tours.length === 0) {
		return <p>No tours available at the moment.</p>;
	}
	return (
		<section className='p-16 flex flex-col justify-center items-center space-y-6'>
			<HomeCarousel tours={tours} />
			<BrandButton asChild={true}>
				<Link href='/tours'>
					All tours <ArrowRight />{' '}
				</Link>
			</BrandButton>
		</section>
	);
}
