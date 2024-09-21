import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';
import { BrandButton } from './BrandButton';

type TourDetailsCardProps = {
	id: string | undefined;
	title: string | undefined;
	location: string | undefined;
	duration: number | undefined;
	price: number;
	description: string | undefined;
	imagePath: string ;
};

export default function TourDetailsCard({
	id,
	title,
	location,
	duration,
	price,
	description,
	imagePath
}: TourDetailsCardProps) {
	return (
		<Card className='w-full border-none shadow-xl rounded-md flex justify-between items-center p-4 xl:w-5/6'>
			<div className='w-[800px] xl:w-[1000px] h-[450px] relative'>
				{/* this is going to be a carousel of images */}
				<Image
					src={imagePath}
					alt='card image'
					fill
					className='rounded-sm '
				/>
			</div>
			<div className='xl:w-[500px] flex flex-col justify-center items-center'>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 font-semibold'>
					<span>Location: {location}</span>
					<span>Duration: {duration} minutes</span>
					<span>Price: {formatCurrency(price/100)} per person</span>
					<span>Description: {description}</span>
					<span>Data</span>
					<span>Horario</span>
				</CardContent>
				<CardFooter className=' w-full flex justify-center items-center mt-12'>
					<BrandButton>
						<Link
							className='w-52 font-bold'
							href={`/tour/${id}/purchase`}>
							Purchase
						</Link>
					</BrandButton>
				</CardFooter>
			</div>
		</Card>
	);
}
