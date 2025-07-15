import { Button } from '@/components/ui/button';
import { getTourById } from '@/db/tour/tour';
import { formatCurrency } from '@/lib/formatters';
import { db } from '@/lib/prisma';
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

	console.log('paymentIntent.metadata.email: ', paymentIntent.metadata.email);
	if (paymentIntent.metadata.email == null) return notFound();

	const tour = await getTourById(paymentIntent.metadata.tourId);

	if (tour == null) return notFound();

	const isSuccess = paymentIntent.status === 'succeeded';

	return (
		<div className='max-w-5xl w-full mx-auto space-y-8'>
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
					{/* <Button className='mt-4' size='lg' asChild>
						{isSuccess ? (
							<a
								href={`/products/download/${await createDownloadVerification(
									product.id,
								)}`}>
								Download
							</a>
						) : (
							<Link href={`/products/${product.id}/purchase`}>
								Try Again
							</Link>
						)}
					</Button> */}
				</div>
			</div>
		</div>
	);
}
