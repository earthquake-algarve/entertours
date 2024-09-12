import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import db from '@/db/db';
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const session = await getServerSession(authOptions);
// console.log(session)

async function getCompanyData() {
	const data = await db.company.findFirst({
		where: { userId: session?.user.id },
	});

	// console.log(data)

	return data;
}

export default async function CompaniesProfile() {
	const companyData = await getCompanyData();

	//extract the keys and values from companyData and exclude the first and last key/value
	const keys = companyData ? Object.keys(companyData).slice(1, -1) : [];
	const values = companyData ? Object.values(companyData).slice(1, -1) : [];

	// console.log(companyData)
	return (
		<>
			<div className='container p-16'>
				<PageHeader>Company profile</PageHeader>
				<Table>
					<TableHeader>
						<TableRow>
							{keys.map((key) => (
								<TableHead key={key} className='w-[100px]'>
									{capitalizeFirstLetter(key)}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							{values.map((value, index) => (
								<TableCell key={index} className='font-medium'>
									{value}
								</TableCell>
							))}
						</TableRow>
					</TableBody>
				</Table>

				<Button
					className='bg-orange-300 hover:bg-orange-300 text-black'
					asChild>
					<Link href='/'>Back to Home</Link>
				</Button>
			</div>
		</>
	);
}
