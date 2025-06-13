import { SideNav, NavLink, TopNav } from '@/components/Nav';

export const dynamic = 'force-dynamic'; //dont cache

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col sm:flex-row h-screen w-screen'>
			<aside className='hidden sm:flex  flex-shrink-0 font-sans antialiased overflow-y-hidden overflow-x-hidden'>
				<SideNav>
					<NavLink href='/admin'>Dashboard</NavLink>
					<NavLink href='/admin/users'>Users</NavLink>
					<NavLink href='/admin/companies'>Companies</NavLink>
					<NavLink href='/admin/tours'>Tours</NavLink>
					<NavLink href='/admin/sales'>Sales</NavLink>
				</SideNav>
			</aside>
			<div className='sm:hidden w-full'>
				<TopNav>
					<NavLink href='/admin'>Dashboard</NavLink>
					<NavLink href='/admin/users'>Users</NavLink>
					<NavLink href='/admin/companies'>Companies</NavLink>
					<NavLink href='/admin/tours'>Tours</NavLink>
					<NavLink href='/admin/sales'>Sales</NavLink>
				</TopNav>
			</div>
			<div className='my-6'>{children}</div>
		</div>
	);
}
