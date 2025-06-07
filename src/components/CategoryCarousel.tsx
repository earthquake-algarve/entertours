'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { Category } from '@/generated/prisma';
import CategoryCard from './CategoryCard';
import { Card, CardContent } from './ui/card';
import { FaBus } from 'react-icons/fa6';
import { CategoryIcon } from '@/lib/iconRegistry';

type CategoryCarouselProps = {
	categories: Category[];
};

export default function CategoryCarousel({
	categories,
}: CategoryCarouselProps) {
	// console.log(categories[1])
	if (!categories || categories.length === 0) {
		return (
			<div className='flex justify-center items-center p-10'>
				<p className='text-lg'>
					No categories available at the moment.
				</p>
			</div>
		);
	}
	return (
		<Carousel
			opts={{
				align: 'center',
			}}
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
			className='w-full'>
			<CarouselContent>
				{categories.map((category) => (
					<CarouselItem
						key={category.id}
						className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6'>
						<Link
							className='flex items-center justify-center'
							href={`/categories/${category.id}`}>
							<Card className='bg-orange-300 border-none mt-1'>
								<CardContent className='flex flex-col justify-center items-center'>
									<span className='font-bold items-center '>
										{category.name}
									</span>
									{/* <FaBus size={40} className='mt-1' /> */}
									<CategoryIcon iconName={category.icon}/>
								</CardContent>
							</Card>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
