import { NavLink, SideNav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOptions from "../api/auth/[...nextauth]/authOptions";

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authOptions);
	console.log(session);

	if (!session) {
		return (
			<div className='container p-4 flex flex-col space-y-6'>
				<span className='text-3xl'>
					You are not authorized to view this page.
				</span>
				<Button className='bg-orange-300 hover:bg-orange-300 text-black'  asChild>
					<Link href='/'>Back to Home page</Link>
				</Button>
			</div>
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
