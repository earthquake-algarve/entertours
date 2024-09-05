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
import { BrandButton } from '../BrandButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

//create a component to Carousel and make it client component
//so you can use async await to fetch data from db

export default function CarouselSection() {
	return (
		<section className='p-16 flex flex-col justify-center items-center space-y-6'>
			<Carousel
				plugins={[
					Autoplay({
						delay: 4000,
					}),
				]}>
				<CarouselContent>
					{Array.from({ length: 6 }, (_, index) => (
						<CarouselItem
							key={index}
							className='md:basis-1/2 lg:basis-1/3 xl:basis-1/5'>
							<HomeCard
								title='Titulo tour'
								location='Lagos'
								duration={120}
								price={40}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<BrandButton asChild={true}>
				<Link href='/tours'>
					All tours <ArrowRight />{' '}
				</Link>
			</BrandButton>
		</section>
	);
}
