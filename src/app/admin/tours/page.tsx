import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { getTours, getToursByCompanyId } from '@/db/tour/tour';
import { ToursTable } from '@/components/ToursTable';

export default async function AdminToursPage() {

	const tours = await getTours();
	if (!tours || tours.length === 0) {
		return (
			<div className='p-16'>
				<PageHeader>No tours found</PageHeader>
				
			</div>
		);
	}

	return (
		<>
			<div className='p-8 sm:p-16'>
				<div className='flex justify-between  '>
					<PageHeader
						buttonAsChild={true}>
						All tours
					</PageHeader>
				</div>

				<ToursTable tours={tours} />


			</div>
		</>
	);
}
