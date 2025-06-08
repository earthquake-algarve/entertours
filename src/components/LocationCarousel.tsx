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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { LocationWithRelations } from '@/types/locationRelations';


type LocationCarouselProps = {
	locations: LocationWithRelations[];
};

export default function LocationCarousel({
	locations,
}: LocationCarouselProps) {
	if (!locations || locations.length === 0) {
		return (
			<div className='flex justify-center items-center p-10'>
				<p className='text-lg'>
					No locations available at the moment.
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
				{locations.map((location) => (
					<CarouselItem
						key={location.id}
						className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5'>
						<Link
							className='flex items-center justify-center'
							href={`/locations/${location.id}`}>
							<Card className='border-none w-60 flex flex-col justify-center items-center shadow-none'>
								<CardHeader className='flex flex-col justify-center items-center gap-4 '>
									<CardTitle>
										<Image
											src={
												location.image?.name ??
												'/banner.png'
											}
											alt='reviews'
											width={250}
											height={130}
											className='rounded-full border-4 object-cover '
										/>
									</CardTitle>
									<CardDescription className='font-semibold'>
										{location.name}
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
