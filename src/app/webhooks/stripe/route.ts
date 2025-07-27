import Stripe from 'stripe';

import { NextRequest, NextResponse } from 'next/server';
import { getTourById } from '@/db/tour/tour';
import { db } from '@/lib/prisma';
import { Resend } from 'resend';
import { formatCurrency } from '@/lib/formatters';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
	try {
		console.log('Webhook received');
		const event = stripe.webhooks.constructEvent(
			await request.text(),
			request.headers.get('stripe-signature') as string,
			process.env.STRIPE_WEBHOOK_SECRET as string,
		);
		console.log('Webhook event type:', event.type);

		if (event.type === 'charge.succeeded') {
			const charge = event.data.object;
			const tourId = charge.metadata.tourId;
			const email = charge.billing_details.email;
			const pricePaidInCents = charge.amount;

			console.log('Charge metadata:', {
				tourId,
				email,
				pricePaidInCents,
			});

			if (!tourId || !email) {
				console.error('Missing tourId or email in metadata');
				return new NextResponse(
					'Bad Request: Missing tourId or email',
					{ status: 400 },
				);
			}

			const tour = await getTourById(tourId);
			if (!tour) {
				console.error('Tour not found for tourId:', tourId);
				return new NextResponse('Bad Request: Tour not found', {
					status: 400,
				});
			}

			const userFields = {
				email,
				orders: { create: { tourId, pricePaidInCents } },
			};

			const {
				orders: [order],
			} = await db.user.upsert({
				where: { email },
				create: userFields,
				update: userFields,
				select: {
					orders: {
						orderBy: { createdAt: 'desc' },
						take: 1,
					},
				},
			});

			console.log('User upserted, order created:', order);

			try {
				const emailResponse = await resend.emails.send({
					from: `Support Entertours<${process.env.EMAIL_FROM}>`,
					to: email,
					subject: `Order confirmation for ${tour.name}`,
					react: `Thank you for purchasing ${tour.name}! Your order has been confirmed. Price: ${formatCurrency(pricePaidInCents / 100)}.`,
				});
				console.log('Email sent successfully:', emailResponse);
			} catch (error) {
				console.error('Resend error:', error);
				// Optionally, store the failure in a log or database for later retry
			}
		}

		return new NextResponse(null, { status: 200 });
	} catch (error) {
		console.error('Webhook error:', error);
		const errorMessage = error instanceof Error ? error.message : String(error);
		return new NextResponse(`Webhook Error: ${errorMessage}`, {
			status: 400,
		});
	}
}