import { PageHeader } from '@/components/PageHeader';
import TourForm from '@/components/TourForm';
import { Card } from '@/components/ui/card';
import { getTourById } from '@/db/tour/tour';
import Link from 'next/link';

export default async function NewTour() {
	return (
		<>
			<div className='flex flex-col justify-center items-center p-10'>
				<PageHeader
					buttonAsChild={true}
					buttonChildren={<Link href='/company/tours'>Back</Link>}>
					Add a tour
				</PageHeader>
				<div className='flex justify-center items-center'>
					<Card className='shadow-lg'>
						<TourForm />
					</Card>
				</div>
			</div>
		</>
	);
}
