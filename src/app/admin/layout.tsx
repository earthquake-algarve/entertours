import { AdminNav, NavLink } from '@/components/Nav';

export const dynamic = 'force-dynamic';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AdminNav>
				<NavLink href='/admin'>Dashboard</NavLink>
				<NavLink href='/admin/products'>Products</NavLink>
				<NavLink href='/admin/users'>Customers</NavLink>
				<NavLink href='/admin/orders'>Sales</NavLink>
				<NavLink href='/admin/myprofile'>My profile</NavLink>
			</AdminNav>
            
			<div className='container my-6'>{children}</div>
		</>
	);
}
