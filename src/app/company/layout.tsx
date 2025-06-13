import { NavLink, SideNav, TopNav } from '@/components/Nav';
import getSession from '@/lib/session/session';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getSession();

	if (!session?.user.hasCompany) {
		redirect('/company/register');
	}

	return (
		<div className='flex flex-col sm:flex-row h-screen'>
			<aside className='hidden sm:flex  flex-shrink-0 font-sans antialiased overflow-y-hidden overflow-x-hidden'>
				<SideNav>
					<NavLink href='/company/profile'>Company profile</NavLink>
					<NavLink href='/company/tours'>Tours</NavLink>
					<NavLink href='/company/sales'>Sales</NavLink>
					<NavLink href='/company/finance'>Finance</NavLink>
				</SideNav>
			</aside>
			<div className='sm:hidden w-full'>
				<TopNav>
					<NavLink href='/company/profile'>Company profile</NavLink>
					<NavLink href='/company/tours'>Tours</NavLink>
					<NavLink href='/company/sales'>Sales</NavLink>
					<NavLink href='/company/finance'>Finance</NavLink>
				</TopNav>
			</div>
			<div className='my-6'>{children}</div>
		</div>
	);
}
