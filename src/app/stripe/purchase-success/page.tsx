import { Button } from '@/components/ui/button';
import { getTourById } from '@/db/tour/tour';
import { formatCurrency, formatDate, formatTime } from '@/lib/formatters';
import getSession from '@/lib/session/session';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function SuccessPage({
	searchParams,
}: {
	searchParams: Promise<{ payment_intent: string }>;
}) {
	const { payment_intent } = await searchParams;
	const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
	if (paymentIntent.metadata.tourId == null) return notFound();

	const tour = await getTourById(paymentIntent.metadata.tourId);

	if (tour == null) return notFound();

	const session = await getSession();
	const isUserLoggedIn: boolean = session?.user?.email != null;

	const isSuccess = paymentIntent.status === 'succeeded';

	return (
		<div className='max-w-5xl w-full mx-auto my-4 space-y-8'>
			<h1 className='text-4xl font-bold'>
				{isSuccess ? 'Success!' : 'Error!'}
			</h1>
			<div className='flex gap-4 items-center'>
				<div className='aspect-video flex-shrink-0 w-1/3 relative'>
					<Image
						src={tour.images[0]?.name ?? '/banner.png'}
						fill
						alt={tour.name}
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
						{formatDate(tour.tourAvailability[0].startDate)} at{' '}
						{formatTime(tour.tourAvailability[0].startTime)}{' '}
					</div>

					{isSuccess ? (
						isUserLoggedIn ? (
							<Button className='mt-4' size='lg' asChild>
								<Link href={`/user/orders`}>
									Go to My Orders
								</Link>
							</Button>
						) : (
							<div className='mt-4'>
								We have sent you an email with your order
								details. Please check your inbox and your spam
								folder. If you still cannot find it, please
								contact us.
							</div>
						)
					) : (
						<Button className='mt-4' size='lg' asChild>
							<Link href={`/tours/${tour.id}/purchase`}>
								Try Again
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
