import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { getToursByCompanyId } from '@/db/tour/tour';
import { getCompanyByUserId } from '@/db/company/company';
import getSession from '@/lib/session/session';
import React from 'react';
import { Edit } from 'lucide-react';


//add pagination to this page
export default async function CompanyTours() {
	const session = await getSession();
	const company = await getCompanyByUserId(session?.user.id);
	const tours = await getToursByCompanyId(company?.id);

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

				{tours.length === 0 ? (
					<p>No tours found...</p>
				) : (
					<Card className='mt-8 border-none shadow-lg rounded-md'>
						<CardContent>
							<Table className=''>
								<TableHeader>
									<TableRow>
										{/* <TableHead>Id</TableHead> */}
										<TableHead>Name</TableHead>
										<TableHead>Price</TableHead>
										<TableHead>Duration</TableHead>
										<TableHead>Description</TableHead>
										<TableHead>Location</TableHead>
										<TableHead>Category</TableHead>
										<TableHead>Start Date</TableHead>
										<TableHead>End Date</TableHead>
										<TableHead>Image</TableHead>
										<TableHead></TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{tours.flat().map((tour) => (
										<TableRow key={tour.id}>
											{/* <TableCell className='font-medium'>
												{tour.id}
											</TableCell> */}
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
												{tour.location.name}
											</TableCell>
											<TableCell className='font-medium'>
												{tour.category.name}
											</TableCell>
											<TableCell className='font-medium'>
												{tour.tourAvailability.map(
													(availability) => (
														<p
															key={
																availability.id
															}>
															{availability.startDate.toLocaleDateString()}
														</p>
													),
												)}
											</TableCell>
											<TableCell className='font-medium'>
												{tour.tourAvailability.map(
													(availability) => (
														<p
															key={
																availability.id
															}>
															{availability.endDate.toLocaleDateString()}
														</p>
													),
												)}
											</TableCell>
											<TableCell className='font-medium'>
												<Image
													alt='tour image'
													src={tour.images[0].name}
													width={44}
													height={44}
												/>
												{}
											</TableCell>
											<TableCell className='font-medium'>
												<Link
													href={`/company/tours/${tour.id}/edit`}>
													<Edit/>
												</Link>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				)}

				<Button
					className='bg-orange-300 hover:bg-orange-300 text-black mt-8'
					asChild>
					<Link href='/'>Back to Home</Link>
				</Button>
			</div>
		</>
	);
}
