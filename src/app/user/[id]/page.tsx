import OrdersTable from '@/components/OrdersTable';
import { PageHeader } from '@/components/PageHeader';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getOrdersByUserId } from '@/db/orders/order';
import { getUserById } from '@/db/user/user';
import { notFound } from 'next/navigation';

export default async function UsersManagement({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// Await the params Promise
	const { id } = await params;

	const user = await getUserById(id);
	if (!user) return notFound();

	const orders = await getOrdersByUserId(id);

	return (
		<>
			<div className='container p-16'>
				<PageHeader>Hello, {user.name}</PageHeader>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>

							<TableHead>Company</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							{user.hasCompany ? (
								<TableCell>{user.company?.name}</TableCell>
							) : (
								<TableCell>No company</TableCell>
							)}
						</TableRow>
					</TableBody>
				</Table>

				<div className='mt-8'>
					<PageHeader>My orders</PageHeader>
					<OrdersTable orders={orders} />
				</div>
			</div>
		</>
	);
}
