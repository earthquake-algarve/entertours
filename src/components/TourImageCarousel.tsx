'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from './ui/button';
import { X } from 'lucide-react';

type TourImage = {
	id: string;
	name: string;
};

type TourImageCarouselProps = {
	tourImages: TourImage[];
	name: string;
	onRemoveImage?: (imageId: string) => void;
};

export default function TourImageCarousel({
	tourImages,
	name,
	onRemoveImage,
}: TourImageCarouselProps) {
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
			className='w-full '>
			<CarouselContent>
				{tourImages?.map((image) => {
					return (
						<CarouselItem
							className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4 cursor-grab relative'
							key={image.id}>
							<Button
								type='button'
								variant='destructive'
								size='icon'
								className='absolute top-0 right-0  rounded-full h-4 w-4'
								onClick={() => onRemoveImage?.(image.id)}>
								<X className='h-2 w-2' />
							</Button>

							<Image
								src={image.name}
								height='300'
								width='300'
								alt={name || 'Product Image'}
								className='object-cover'
							/>
						</CarouselItem>
					);
				})}
			</CarouselContent>
		</Carousel>
	);
}
