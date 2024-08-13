import { PageHeader } from '@/components/PageHeader';
import TourForm from '@/components/TourForm';
import { Card } from '@/components/ui/card';

export default function NewTour() {
	return (
		<>
			<div className='flex flex-col justify-center items-center p-10'>
				<PageHeader>Add a tour</PageHeader>
				<div className='flex justify-center items-center'>
					<Card className='shadow-lg'>
						<TourForm />
					</Card>
				</div>
			</div>
		</>
	);
}
