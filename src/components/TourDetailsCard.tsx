'use client';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';
import { BrandButton } from './BrandButton';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { TourImage } from '@/types/tourImage';

type TourDetailsCardProps = {
	id: string | undefined;
	title: string | undefined;
	location: string | undefined;
	duration: number | undefined;
	price: number;
	description: string | undefined;
	images?: TourImage[];
};

export default function TourDetailsCard({
	id,
	title,
	location,
	duration,
	price,
	description,
	images,
}: TourDetailsCardProps) {
	return (
		<Card className='w-full max-w-5xl mx-auto border-none shadow-2xl rounded-2xl flex flex-col md:flex-row bg-white p-9'>
			{images && (
				<div className='md:w-2/3 w-full flex items-center justify-center p-4'>
					<Carousel
						opts={{
							align: 'center',
						}}
						plugins={[
							Autoplay({
								delay: 4000,
							}),
						]}
						className='w-full max-w-2xl'>
						<CarouselContent>
							{images?.length > 0 ? (
								images.map((image) => (
									<CarouselItem key={image.id}>
										<div className='flex justify-center items-center h-[350px] md:h-[450px]'>
											<Image
												src={image.name}
												alt={image.name || 'Tour Image'}
												height={450}
												width={700}
												className='rounded-xl object-cover w-full h-full shadow-lg'
											/>
										</div>
									</CarouselItem>
								))
							) : (
								<CarouselItem>
									<div className='flex justify-center items-center h-[350px] md:h-[450px] bg-gray-100 rounded-xl'>
										<span className='text-gray-400'>
											No images available
										</span>
									</div>
								</CarouselItem>
							)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			)}

			<div className='md:w-1/3 w-full flex flex-col justify-between p-6'>
				<CardHeader className='pb-2'>
					<CardTitle className='text-2xl font-bold'>
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-4 text-base font-medium text-gray-700'>
					<span>
						<span className='font-semibold text-gray-900'>
							Location:
						</span>{' '}
						{location}
					</span>
					<span>
						<span className='font-semibold text-gray-900'>
							Duration:
						</span>{' '}
						{duration} minutes
					</span>
					<span>
						<span className='font-semibold text-gray-900'>
							Price:
						</span>{' '}
						{formatCurrency(price / 100)} per person
					</span>
					<span>
						<span className='font-semibold text-gray-900'>
							Description:
						</span>{' '}
						{description}
					</span>
					{/* Add more details here if needed */}
				</CardContent>
				<CardFooter className='w-full flex justify-center mt-8'>
					<BrandButton>
						<Link
							className='w-52 font-bold text-center'
							href={`/tours/${id}/purchase`}>
							Purchase
						</Link>
					</BrandButton>
				</CardFooter>
			</div>
		</Card>
	);
}