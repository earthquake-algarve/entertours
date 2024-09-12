import { NavLink, SideNav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import NotAuthorized from "@/components/NotAuthorized";

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return (
			<NotAuthorized/>
		);
	}
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
