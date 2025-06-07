import { SideNav, NavLink } from '@/components/Nav';
import { getCategories } from '@/db/category/category';


export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    const categories = await getCategories();
	if (!categories || categories.length === 0) {
		return (
			<div className='container p-16'>
				<h1 className='text-2xl font-bold'>No categories found</h1>
			</div>
		);
	}

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
