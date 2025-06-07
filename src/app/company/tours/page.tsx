import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getToursByCompanyId } from '@/db/tour/tour';
import { getCompanyByUserId } from '@/db/company/company';
import getSession from '@/lib/session/session';
import { ToursTable } from '@/components/ToursTable';


export default async function CompanyTours() {
	const session = await getSession();
	const company = await getCompanyByUserId(session?.user.id);
	const tours = await getToursByCompanyId(company?.id);

	if (!tours || tours.length === 0) {
		return (
			<div className='p-16'>
				<PageHeader
					buttonChildren={
						<Link href='/company/tours/new'>Add tour</Link>
					}
					buttonAsChild={true}>
					No tours found
				</PageHeader>
			</div>
		);
	}

	return (
		<>
			<div className='p-16 '>
				<div className='flex justify-between  '>
					<PageHeader
						buttonChildren={
							<Link href='/company/tours/new'>Add tour</Link>
						}
						buttonAsChild={true}>
						Company tours
					</PageHeader>
				</div>

				<ToursTable tours={tours}/>

				<Button
					className='bg-orange-300 hover:bg-orange-300 text-black mt-8'
					asChild>
					<Link href='/'>Back to Home</Link>
				</Button>
			</div>
		</>
	);
}
