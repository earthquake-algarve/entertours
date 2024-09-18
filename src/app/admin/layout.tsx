import { SideNav, NavLink } from '@/components/Nav';

export const dynamic = 'force-dynamic'; //dont cache

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

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
