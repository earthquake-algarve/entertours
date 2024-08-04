"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"
import SearchBar from "@/components/ToursSearchBar";
import LoginDropdown from "@/components/LoginDropdown";
import MenuDropdown from "@/components/MenuDropdown";

export function CustomerNav() {
	return (
		<nav className="bg-orange-300 flex justify-between items-center px-4 w-full">
			<div>
				<Link href="/">
					<Image src="/logo.png" width={70} height={40} alt='logo' />
				</Link>

			</div>
			<div>
				<SearchBar />
			</div>
			<div className="flex space-x-1 mr-1">
				<LoginDropdown />
				<MenuDropdown />
			</div>
		</nav>
	)
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
	const pathname = usePathname();
	return (
		<Link
			{...props}
			className={cn(
				'p-4 hover:bg-secondary focus-visible:bg-secondary rounded-lg',
				pathname === props.href && 'bg-background text-foreground',
			)}
		/>
	);
}

export function AdminNav({ children }: { children: ReactNode }) {
	return (
		<nav className='bg-orange-300 text-secondary-foreground flex flex-col justify-center px-4'>
			{children}
		</nav>
	);
}