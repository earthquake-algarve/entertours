import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import db from '@/db/db';
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter';
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
	if (!session) {
		return <span>You are not authorized to see this page</span>;
	}

	const companyData = await getCompanyData();

	//extract the keys and values from companyData
	//and exclude the first and last key/value
	const keys = companyData ? Object.keys(companyData).slice(1, -1) : [];
	const values = companyData ? Object.values(companyData).slice(1, -1) : [];


	//choose one of the UI to use
	return (
		<>
			<div className='container p-16 '>
				<PageHeader>Company profile</PageHeader>

				<Card className='w-96 border-none shadow-lg rounded-md'>
					<CardContent className='flex justify-between'>
						<div className='flex flex-col'>
							{keys.map((key) => (
								<span key={key} className=''>
									{capitalizeFirstLetter(key)}
								</span>
							))}
						</div>

						<div className='flex flex-col'>
							{values.map((key) => (
								<span key={key} className=''>
									{key}
								</span>
							))}
						</div>
					</CardContent>
				</Card>

				<Card className='mt-8 border-none shadow-lg rounded-md'>
					<CardContent>
						<Table className=''>
							<TableHeader>
								<TableRow>
									{keys.map((key) => (
										<TableHead
											key={key}
											className='w-[100px]'>
											{capitalizeFirstLetter(key)}
										</TableHead>
									))}
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									{values.map((value, index) => (
										<TableCell
											key={index}
											className='font-medium'>
											{value}
										</TableCell>
									))}
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
