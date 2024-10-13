import React from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type LocationCardProps = {
	location: string | undefined;
	numberOfTours: number;
	imagePath: string;
};

export default function LocationCard({
	location,
	numberOfTours,
	imagePath,
}: LocationCardProps) {
	return (
		<Card className='w-fit border-none shadow-lg rounded-md'>
			<div className='w-72 h-56'>
				<Image
					src={imagePath}
					alt='card image'
					width={300}
					height={230}
					className='rounded-md w-full h-full'
				/>
			</div>
			<CardHeader>
				<CardTitle className='text-xl'>{location}</CardTitle>
			</CardHeader>
			<CardContent className='flex justify-between'>
				<div className='flex flex-col'>
					<span className=''>{numberOfTours} {numberOfTours > 1 ? 'tours': 'tour'}</span>
				</div>
			</CardContent>
		</Card>
	);
}
