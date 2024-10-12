import { SideNav, NavLink } from '@/components/Nav';
import { getLocations } from '@/db/locations/location';

export default async function LocationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const locations = await getLocations()

	return (
		<aside className='min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex'>
			<SideNav>
                {locations.map((location) => (
                    <NavLink href={`/locations/${location.id}`} key={location.id}>{location.name}</NavLink>

                ))}
			</SideNav>

			<div className='container my-6'>{children}</div>
		</aside>
	);
}
