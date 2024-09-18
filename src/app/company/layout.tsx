import { NavLink, SideNav } from "@/components/Nav";

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<aside className='min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex'>
			<SideNav>
				<NavLink href='/company/profile'>Company profile</NavLink>
				<NavLink href='/company/tours'>Tours</NavLink>
				<NavLink href='/'>Sales</NavLink>
				<NavLink href='/'>Finance</NavLink>
			</SideNav>

			<div className="container">{children}</div>
		</aside>
	);
}
