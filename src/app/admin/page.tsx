import AdminCards from '@/components/AdminCards';
import { PageHeader } from '@/components/PageHeader';

export default async function AdminPage() {
	return (
		//create some charts to show some data regarding
		//number of users, total sales, etc...
		<div className='w-full p-8 flex flex-col gap-12'>
			<PageHeader>Dashboard</PageHeader>

			<div className='grid grid-cols-1 gap-10 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				<AdminCards
					title={'Total users'}
					amount={12}
					backgroundColor={'bg-green-200'}
					cardRedirectTo={`/admin/users`}
				/>
				<AdminCards
					title={'Total companies'}
					amount={12}
					backgroundColor={'bg-orange-200'}
					cardRedirectTo={`/admin/companies`}
				/>
				<AdminCards
					title={'Total tours'}
					amount={12}
					backgroundColor={'bg-red-200'}
					cardRedirectTo={`/admin/tours`}
				/>
				<AdminCards
					title={'Total sales'}
					amount={12}
					backgroundColor={'bg-blue-200'}
					cardRedirectTo={`/admin/sales`}
				/>
			</div>

			<div>some charts here</div>
		</div>
	);
}
