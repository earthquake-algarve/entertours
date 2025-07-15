'use client';
import { PaymentElement, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';
import { TourWithRelations } from '@/types/tourRelations';

type CheckoutFormProps = {
	tour: TourWithRelations;
	clientSecret: string;
};
export default function CheckoutForm({
	tour,
	clientSecret,
}: CheckoutFormProps) {

	const stripe = loadStripe(
		process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
	);

	return (
		<div className='max-w-5xl w-full mx-auto space-y-8'>
			<div className='flex gap-4 items-center'>
				<div className='aspect-video flex-shrink-0 w-1/3 relative'>
					<Image
						src={tour.images?.[0]?.name || '/banner.png'}
						fill
						alt={tour.name || 'Tour image'}
						className='object-cover'
					/>
				</div>
				<div>
					<div className='text-lg'>
						{formatCurrency(tour.price / 100)}
					</div>
					<h1 className='text-2xl font-bold'>{tour.name}</h1>
					<div className='line-clamp-3 text-muted-foreground'>
						{tour.description}
					</div>
					<div>{tour.location.name}</div>
					<div>
						{new Date(
							tour.tourAvailability[0].startDate,
						).toLocaleString()}
					</div>
				</div>
			</div>
			<Elements options={{ clientSecret }} stripe={stripe}>
				<PaymentForm price={tour.price} tourId={tour.id} />
			</Elements>
		</div>
	);
}
