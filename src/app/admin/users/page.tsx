import { PageHeader } from '@/components/PageHeader';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getUsers } from '@/db/user/user';

export default async function UsersManagement() {
	const users = await getUsers();
	if (!users || users.length === 0) {
		return (
			<div className='container p-16'>
				<PageHeader>No users found</PageHeader>
			</div>
		);
	}
	return (
		<>
			<div className='container p-8 sm:p-16'>
				<PageHeader>All users</PageHeader>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Is Active</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Has Company</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => {
							return (
								<TableRow key={user.id}>
									<TableCell>{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>
										{user.isActive ? 'True' : 'False'}
									</TableCell>
									<TableCell>{user.role}</TableCell>
									<TableCell>
										{user.hasCompany ? 'True' : 'False'}
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
