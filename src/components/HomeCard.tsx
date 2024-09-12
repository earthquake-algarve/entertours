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
};

export default function HomeCard({
	title,
	location,
	duration,
	price,
}: HomeCardProps) {
	return (
		<Card className='w-fit border-none shadow-lg rounded-md'>
			<Image
				src='/banner.png'
				alt='card image'
				width={300}
				height={230}
				className='rounded-md'
			/>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className='flex justify-between'>
				<div className='flex flex-col'>
					<span className=''>{location}</span>
					<span className=''>{duration} minutes</span>
				</div>
				<div className=''>
					<span className='font-semibold text-3xl'>
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
