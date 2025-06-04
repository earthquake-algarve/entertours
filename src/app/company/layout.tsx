import { NavLink, SideNav } from '@/components/Nav';
import getSession from '@/lib/session/session';

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getSession();

	return (
		<aside className='min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex'>
			{session?.user.hasCompany ? (
				<>
					<SideNav>
						<NavLink href='/company/profile'>
							Company profile
						</NavLink>
						<NavLink href='/company/tours'>Tours</NavLink>
						<NavLink href='/company/sales'>Sales</NavLink>
						<NavLink href='/company/finance'>Finance</NavLink>
					</SideNav>
					<div className='container'>{children}</div>
				</>
			) : (
				<div className='container'>{children}</div>
			)}
		</aside>
	);
}
