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
import getSession from '@/lib/session/session';
import { getCompanyByUserId } from '@/db/company/company';

export default async function CompanyProfile() {
	const session = await getSession();
	const company = await getCompanyByUserId(session?.user?.id);

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
								<TableRow key={company?.id}>
									<TableCell className='font-medium'>
										{company?.name}
									</TableCell>
									<TableCell className='font-medium'>
										{company?.email}
									</TableCell>
									<TableCell className='font-medium'>
										{company?.nif}
									</TableCell>
									<TableCell className='font-medium'>
										{company?.phone}
									</TableCell>
									<TableCell className='font-medium'>
										{company?.address}
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
