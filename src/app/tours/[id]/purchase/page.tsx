import { getTourById } from '@/db/tour/tour';
import Stripe from 'stripe';
import CheckoutForm from './_components/CheckoutForm';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchaseTour({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const tour = await getTourById(id);
	if (!tour) {
		return <div>Tour not found</div>;
	}

	const paymentIntent = await stripe.paymentIntents.create({
		amount: tour.price,
		currency: 'eur',
		payment_method_types: ['card', 'multibanco'], // Add other payment methods as needed
		metadata: {
			tourId: tour.id,
		},
	});

	if (!paymentIntent.client_secret) {
		return Error('Stripe Payment intent creation failed');
	}

	return (
		<div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-10'>
			<div className='w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6'>
				<h2 className='text-xl font-bold  mb-4'>Payment Details</h2>
				
				<CheckoutForm
					tour={tour}
					clientSecret={paymentIntent.client_secret}
				/>
			</div>
		</div>
	);
}