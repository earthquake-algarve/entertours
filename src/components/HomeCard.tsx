import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';

type HomeCardProps = {
	// id?: string
	title: string | undefined;
	location: string | undefined;
	duration: number | undefined;
	price: number;
	imagePath: string;
};

export default function HomeCard({
	title,
	location,
	duration,
	price,
	imagePath,
}: HomeCardProps) {
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
				<CardTitle className='text-xl'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='flex justify-between'>
				<div className='flex flex-col'>
					<span className=''>{location}</span>
					<span className=''>{duration} minutes</span>
				</div>
				<div className=''>
					<span className='font-semibold text-2xl'>
						{formatCurrency(price)}
					</span>
				</div>
			</CardContent>
			<CardFooter className=''>
				<MdOutlineStarPurple500 color='#FFFF00' size={20} />
				<MdOutlineStarPurple500 color='#FFFF00' size={20} />
				<MdOutlineStarPurple500 color='#FFFF00' size={20} />
				<MdOutlineStarPurple500 color='#FFFF00' size={20} />
				<MdOutlineStarPurple500 color='#FFFF00' size={20} />
				5.0 (140 reviews)
			</CardFooter>
		</Card>
	);
}
