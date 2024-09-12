import { SideNav, NavLink } from '@/components/Nav';
import { getCategories } from '@/db/dbActions';


export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    const categories = await getCategories();

	return (
		<aside className='min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex'>
			<SideNav>
                {categories.map((category) => (
                    <NavLink href={`/categories/${category.id}`} key={category.id}>{category.name}</NavLink>

                ))}
			</SideNav>

			<div className='container my-6'>{children}</div>
		</aside>
	);
}
