import { SideNav, NavLink } from '@/components/Nav';
import authOptions from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; //dont cache

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authOptions);
	console.log(session);

	if (session?.user?.role !== 'ADMIN') {
		return (
			<div className='container p-4 flex flex-col space-y-6'>
				<span className='text-3xl'>You are not authorized to view this page.</span>
				<Button asChild>
					<Link href='/'>Back to Home page</Link>
				</Button>
			</div>
		);
	}
	return (
		<aside className='min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex'>
			<SideNav>
				<NavLink href='/admin'>Dashboard</NavLink>
				<NavLink href='/admin/users'>Users</NavLink>
			</SideNav>

			<div className='container my-6'>{children}</div>
		</aside>
	);
}
