'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import HomeCard from '@/components/HomeCard';
import Autoplay from 'embla-carousel-autoplay';
import { Tour } from '@prisma/client';
import Link from 'next/link';

type HomeCarouselProps = {
  tours: Tour[]; 
}

export default function HomeCarousel({ tours }: HomeCarouselProps) {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 4000,
				}),
			]}>
			<CarouselContent>
				{tours.map((tour) => (
					<CarouselItem
						key={tour.id}
						className='md:basis-1/2 lg:basis-1/3 xl:basis-1/5'>
						<Link href={`/tours/${tour.id}`}>
							<HomeCard
								title={tour.name}
								location={tour.location}
								duration={tour.duration}
								price={tour.price}
							/>
						</Link>	
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
