import AdminCards from "@/components/AdminCards";
import OrdersTable from "@/components/OrdersTable";
import { PageHeader } from "@/components/PageHeader";
import { getOrders } from "@/db/orders/order";
import { formatCurrency } from "@/lib/formatters";

export default async function SalesPage() {
	const orders = await getOrders()
	
		const totalOrders = orders.length;
		const totalRevenue =
			orders.reduce((sum, order) => sum + (order.pricePaidInCents || 0), 0) /
			100;
		return (
			<div className='container p-16'>
				<PageHeader>Sales Management</PageHeader>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
					<AdminCards
						title='Total orders'
						amount={totalOrders}
						backgroundColor='bg-orange-100'
						cardRedirectTo=''
					/>
					<AdminCards
						title='Total revenue'
						amount={formatCurrency(totalRevenue)}
						backgroundColor='bg-orange-100'
						cardRedirectTo=''
					/>
				</div>
				<PageHeader>Orders</PageHeader>
				<OrdersTable orders={orders} />
			</div>
		);
}
