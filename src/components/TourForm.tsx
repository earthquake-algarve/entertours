'use client';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { BrandButton } from './BrandButton';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState } from 'react';
import { Prisma } from '@prisma/client';
import { Label } from './ui/label';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';
import { addTour, editTour } from '@/app/company/_actions/tours';
import { formatCurrency, timeFormatter } from '@/lib/formatters';
import Image from 'next/image';
import { DateRange } from 'react-day-picker';

type TourWithRelations = Prisma.TourGetPayload<{
	include: {
		category: true;
		location: true;
		tourAvailability: true;
		images: true;
	};
}>;

export default function TourForm({
	tour,
}: {
	tour?: TourWithRelations | null;
}) {
	const [error, action] = useFormState(
		tour == null ? addTour : editTour.bind(null, tour.id),
		{},
	);

	const [priceInCents, setPriceInCents] = useState<number | undefined>(
		tour?.price,
	);

	const [categories, setCategories] = useState([]);
	const [locations, setLocations] = useState([]);
	const [files, setFiles] = useState([]);
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: tour?.tourAvailability[0].startDate,
		to: tour?.tourAvailability[0].endDate,
	});
	const [startTime, setStartTime] = React.useState<String | undefined>();

	const formData = new FormData();

	for (let i = 0; i < files.length; i++) {
		formData.append('image', files[i]);
	}

	useEffect(() => {
		async function getAllCategories() {
			try {
				const response = await fetch('/api/categories');
				const data = await response.json();
				setCategories(data);
			} catch (error) {
				console.error('Failed to fetch categories:', error);
				setCategories([]);
			}
		}

		async function getAllLocations() {
			try {
				const response = await fetch('/api/locations');
				const data = await response.json();
				setLocations(data);
			} catch (error) {
				console.error('Failed to fetch locations:', error);
				setLocations([]);
			}
		}

		getAllCategories();
		getAllLocations();
	}, []);

	return (
		<form action={action} className='space-y-8 w-96 p-4 flex flex-col'>
			<div className='space-y-2'>
				<Label htmlFor='name'>Name</Label>
				<Input
					type='text'
					id='name'
					name='name'
					required
					defaultValue={tour?.name || ''}
				/>
				{error?.name && (
					<div className='text-destructive'>{error.name}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='price'>Price In Cents</Label>
				<Input
					type='number'
					id='price'
					name='price'
					required
					defaultValue={priceInCents}
					onChange={(e) =>
						setPriceInCents(Number(e.target.value) || undefined)
					}
				/>
				<div className='text-muted-foreground'>
					{formatCurrency((priceInCents || 0) / 100)}
				</div>
				{error?.price && (
					<div className='text-destructive'>{error?.price}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='description'>Description</Label>
				<Input
					id='description'
					name='description'
					required
					defaultValue={tour?.description}
				/>
				{error?.description && (
					<div className='text-destructive'>{error.description}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='calendarDates'>Select dates</Label>

				<div className='flex items-center justify-center'>
					<Calendar
						id='calendarDates'
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={1}
						disabled={{ before: new Date() }}
					/>
				</div>

				<Input
					name='calendarDateFrom'
					type='hidden'
					defaultValue={date?.from?.toISOString()}
				/>
				<Input
					name='calendarDateTo'
					type='hidden'
					defaultValue={date?.to?.toISOString()}
				/>
				{error?.calendarDateFrom && (
					<div className='text-destructive'>
						{error.calendarDateFrom}
					</div>
				)}
				{error?.calendarDateTo && (
					<div className='text-destructive'>
						{error.calendarDateTo}
					</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='startTime'>Start time</Label>
				<Input
					id='startTime'
					name='startTime'
					type='time'
					required
					defaultValue={timeFormatter(
						tour?.tourAvailability[0].startTime,
					)}
					onChange={(e) => {
						setStartTime(e.target.value);
					}}
				/>
				{error?.startTime && (
					<div className='text-destructive'>{error.startTime}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='duration'>Duration in minutes</Label>
				<Input
					id='duration'
					name='duration'
					required
					defaultValue={tour?.duration}
				/>
				{error?.duration && (
					<div className='text-destructive'>{error.duration}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='location'>Location</Label>
				<Select
					name='location'
					defaultValue={tour?.locationId}
					required>
					<SelectTrigger>
						<SelectValue placeholder='Select a location' />
					</SelectTrigger>

					<SelectContent>
						{locations.map((location) => (
							<SelectItem key={location.id} value={location.id}>
								{location.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{error?.location && (
					<div className='text-destructive'>{error.location}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='category'>Category</Label>

				<Select
					name='category'
					defaultValue={tour?.categoryId}
					required>
					<SelectTrigger>
						<SelectValue placeholder='Select a category' />
					</SelectTrigger>

					<SelectContent>
						{categories.map((category, index) => (
							<SelectItem key={index} value={category.id}>
								{category.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{error?.category && (
					<div className='text-destructive'>{error.category}</div>
				)}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='image'>Image</Label>
				<Input
					type='file'
					id='image'
					name='image'
					required={tour == null}
					multiple
					onChange={(e) => {
						setFiles(e.target.files);
					}}
				/>
				{tour != null && (
					<Image
						src={tour.images[0].name}
						height='400'
						width='400'
						alt='Product Image'
					/>
				)}
				{error?.image && (
					<div className='text-destructive'>{error.image}</div>
				)}
			</div>
			<SubmitButton />
			{}
		</form>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<BrandButton type='submit' disabled={pending}>
			{pending ? 'Saving...' : 'Save'}
		</BrandButton>
	);
}
