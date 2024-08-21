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

const session = await getServerSession(authOptions);

async function getCompanyData() {
	const data = await db.company.findFirst({
		where: { userId: session?.user.id },
	});

	return data;
}

export default async function CompanyProfile() {

	const companyData = await getCompanyData();

	return (
		<>
			<div className='p-16 '>
				<PageHeader>Company profile</PageHeader>

				<Card className='mt-8 border-none shadow-lg rounded-md'>
					<CardContent>
						<Table className=''>
							<TableHeader>
								<TableRow>
									<TableHead>Name</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>NIF</TableHead>
									<TableHead>Phone</TableHead>
									<TableHead>Address</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow key={companyData?.id}>
									<TableCell className='font-medium'>
										{companyData?.name}
									</TableCell>
									<TableCell className='font-medium'>
										{companyData?.email}
									</TableCell>
									<TableCell className='font-medium'>
										{companyData?.nif}
									</TableCell>
									<TableCell className='font-medium'>
										{companyData?.phone}
									</TableCell>
									<TableCell className='font-medium'>
										{companyData?.address}
									</TableCell>
								</TableRow>
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
