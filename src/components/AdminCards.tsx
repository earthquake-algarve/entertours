import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type AdminCardProps = {
	title: string | undefined;
	amount: number;
	backgroundColor: string | undefined;
	cardRedirectTo: string;
};

export default function AdminCards({
	title,
	amount,
	backgroundColor,
	cardRedirectTo,
}: AdminCardProps) {
	return (
		<Card
			className={`w-60 border-none shadow-lg rounded-md ${backgroundColor}`}>
			<CardHeader>
				<CardTitle className='text-xl'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='flex '>
				<span>{amount}</span>
			</CardContent>
			<CardFooter className='flex justify-end'>
				<Link href={cardRedirectTo}>
					<span className='flex justify-end'>
						See more
						<ArrowRight />
					</span>
				</Link>
			</CardFooter>
		</Card>
	);
}
