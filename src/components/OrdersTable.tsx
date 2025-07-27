import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { OrdersWithRelations } from '@/types/ordersRelations';
import { formatCurrency, formatDate } from '@/lib/formatters';
import Link from 'next/link';

type OrdersTableProps = {
	orders: OrdersWithRelations[];
};

export default function OrdersTable({ orders }: OrdersTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Tour</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{orders.length === 0 ? (
					<p>No orders found...</p>
				) : (
					orders.map((order) => (
						<TableRow key={order.id}>
							<TableCell>
								<Link href={`/tours/${order.tour.id}`}>
									{order.tour.name}
								</Link>
							</TableCell>

							<TableCell>
								{formatCurrency(order.pricePaidInCents / 100)}
							</TableCell>
							<TableCell>{formatDate(order.createdAt)}</TableCell>
						</TableRow>
					))
				)}
			</TableBody>
		</Table>
	);
}
