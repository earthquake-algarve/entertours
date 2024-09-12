import { SideNav, NavLink } from '@/components/Nav';
import authOptions from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import NotAuthorized from '@/components/NotAuthorized';

export const dynamic = 'force-dynamic'; //dont cache

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authOptions);

	if (session?.user?.role !== 'ADMIN') {
		return (
			<NotAuthorized/>
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
