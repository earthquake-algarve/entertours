'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';
import SearchBar from '@/components/ToursSearchBar';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const LoginDropdown = dynamic(() => import('./LoginDropdown'), {
	ssr: false,
	loading: () => (
		<div className='flex items-center justify-center w-8 h-8'>
			<Loader2 className='h-4 w-4 animate-spin' />
		</div>
	),
});

const MenuDropdown = dynamic(() => import('./MenuDropdown'), {
	ssr: false,
	loading: () => (
		<div className='flex items-center justify-center w-8 h-8'>
			<Loader2 className='h-4 w-4 animate-spin' />
		</div>
	),
});

export function CustomerNav() {
	return (
		<nav className='bg-orange-300 flex justify-between items-center px-4 w-full pointer-events-auto'>
			<div>
				<Link href='/'>
					<Image
						src='/logo.png'
						width={70}
						height={40}
						alt='logo'
						data-testid='logo-link'
					/>
				</Link>
			</div>

			<div className='hidden sm:block'>
				<SearchBar />
			</div>

			<div className='flex space-x-1 mr-1'>
				<LoginDropdown />
				<MenuDropdown />
			</div>
		</nav>
	);
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
	const pathname = usePathname();
	return (
		<Link
			{...props}
			className={cn(
				'p-2 sm:p-4 hover:bg-secondary focus-visible:bg-secondary rounded-lg',
				pathname === props.href && 'bg-background text-foreground',
			)}
		/>
	);
}

export function SideNav({ children }: { children: ReactNode }) {
	return (
		<nav className='bg-orange-300 text-secondary-foreground flex flex-col justify-center px-4 '>
			{children}
		</nav>
	);
}

export function TopNav ({ children }: { children: ReactNode }) {
	return (
		<nav className='bg-orange-300 text-secondary-foreground w-full flex flex-wrap justify-between items-center p-3 mb-4'>
			{children}
		</nav>
	);
}
