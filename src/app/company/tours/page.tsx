import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import db from '@/db/db';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

const session = await getServerSession(authOptions);

async function getCompanyTours() {
	const data = await db.tour.findMany({
		//falta fazer a relacao entre tour e company na db
		include: { category: true },
		orderBy: { createdAt: 'desc' },
	});

	return data;
}

export default async function CompanyTours() {
	if (!session) {
		return <span>You are not authorized to see this page</span>;
	}

	const companyTours = await getCompanyTours();

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

				<Card className='mt-8 border-none shadow-lg rounded-md'>
					<CardContent>
						<Table className=''>
							<TableHeader>
								<TableRow>
									<TableHead>Id</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Price</TableHead>
									<TableHead>Duration</TableHead>
									<TableHead>Description</TableHead>
									<TableHead>Location</TableHead>
									<TableHead>Category</TableHead>
									<TableHead>Image</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{companyTours.flat().map((tour) => (
									<TableRow key={tour.id}>
										<TableCell className='font-medium'>
											{tour.id}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.name}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.price}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.duration}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.description}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.location}
										</TableCell>
										<TableCell className='font-medium'>
											{tour.category.name}
										</TableCell>
										<TableCell className='font-medium'>
											<Image
												alt='tour image'
												src={tour.imagePath}
												width={44}
												height={44}
											/>
											{}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>

				<Button
					className='bg-orange-300 hover:bg-orange-300 text-black mt-8'
					asChild>
					<Link href='/'>Back to Home</Link>
				</Button>
			</div>
		</>
	);
}
