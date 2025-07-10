import { getTourById } from '@/db/tour/tour';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
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
			{/* Left: Tour Details and Form */}
			{/* <div className='md:w-2/3 w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8'>
				<div>
					<h1 className='text-2xl font-bold  mb-2'>{tour.name}</h1>
					<div className='flex flex-col md:flex-row gap-4 mb-2'>
						<div>
							<span className='font-semibold '>Date:</span>{' '}
							{tour.tourAvailability?.[0]?.startDate
								? new Date(
										tour.tourAvailability[0].startDate,
								  ).toLocaleDateString()
								: 'N/A'}
						</div>
						<div>
							<span className='font-semibold '>Time:</span>{' '}
							{tour.tourAvailability?.[0]?.startTime
								? new Date(
										tour.tourAvailability[0].startTime,
								  ).toLocaleTimeString([], {
										hour: '2-digit',
										minute: '2-digit',
								  })
								: 'N/A'}
						</div>
					</div>
					<div className='mb-4'>
						<span className='font-semibold '>Description:</span>
						<p className=''>{tour.description}</p>
					</div>
				</div>
				<form className='flex flex-col gap-4'>
					<div>
						<Label htmlFor='name'>Name</Label>
						<Input
							id='name'
							name='name'
							placeholder='Your name'
							required
						/>
					</div>
					<div>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							name='email'
							type='email'
							placeholder='you@email.com'
							required
						/>
					</div>
					<div>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input
							id='phone'
							name='phone'
							type='tel'
							placeholder='(555) 555-5555'
							required
						/>
					</div>
					<Button
						type='submit'
						className='mt-4 bg-orange-400 hover:bg-orange-500 text-white font-bold'>
						Reserve Spot
					</Button>
				</form>
			</div> */}
			{/* Right: Payment Details */}
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
