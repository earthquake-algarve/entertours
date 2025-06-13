import AdminCardsCarousel from '@/components/AdminCardsCarousel';
import { PageHeader } from '@/components/PageHeader';

export default async function AdminPage() {
	return (
		//create some charts to show some data regarding
		//number of users, total sales, etc...
		<div className='flex flex-col p-6  gap-12'>
			<PageHeader>Dashboard</PageHeader>

			<div className='flex justify-center items-center w-screen'>
				<AdminCardsCarousel />
			</div>
			<div>some charts here</div>
		</div>
	);
}
