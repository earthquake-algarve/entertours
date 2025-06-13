'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import AdminCards from './AdminCards';

export default function AdminCardsCarousel() {
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
			className='w-full'
		>
			<CarouselContent>
				<CarouselItem className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/5 2xl:basis-1/5'>
					<AdminCards
						title={'Total users'}
						amount={12}
						backgroundColor={'bg-green-200'}
						cardRedirectTo={`/admin/users`}
					/>
				</CarouselItem>
				<CarouselItem className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/5 2xl:basis-1/5'> 
					<AdminCards
						title={'Total companies'}
						amount={12}
						backgroundColor={'bg-orange-200'}
						cardRedirectTo={`/admin/companies`}
					/>
				</CarouselItem>
				<CarouselItem className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/5 2xl:basis-1/5'>
					<AdminCards
						title={'Total tours'}
						amount={12}
						backgroundColor={'bg-red-200'}
						cardRedirectTo={`/admin/tours`}
					/>
				</CarouselItem >
				<CarouselItem className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/5 2xl:basis-1/5'>
					<AdminCards
						title={'Total sales'}
						amount={12}
						backgroundColor={'bg-blue-200'}
						cardRedirectTo={`/admin/sales`}
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
