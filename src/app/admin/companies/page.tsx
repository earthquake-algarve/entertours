import { PageHeader } from '@/components/PageHeader';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getCompanies } from '@/db/company/company';

export default async function CompaniesProfile() {
	const companies = await getCompanies();

	return (
		<>
			<div className='container p-16'>
				<PageHeader>All companies</PageHeader>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>NIF</TableHead>
							<TableHead>Phone</TableHead>
							<TableHead>Address</TableHead>
							<TableHead>Is Active</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{companies.map((company) => {
							return (
								<TableRow key={company.id}>
									<TableCell>{company.name}</TableCell>
									<TableCell>{company.email}</TableCell>
									<TableCell>{company.nif}</TableCell>
									<TableCell>{company.address}</TableCell>
									<TableCell>{company.phone}</TableCell>
									<TableCell>
										{company.isActive ? 'True' : 'False'}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</>
	);
}
