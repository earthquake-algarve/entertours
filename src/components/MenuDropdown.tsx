'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

export default function MenuDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<AlignJustify data-testid='dropdown-menu' />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Menu</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href='/tours' data-testid='dropdown-menu-tours'>
						Tours
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link
						href='/locations' data-testid='dropdown-menu-locations'>
						Locations
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link
						href='/categories'	data-testid='dropdown-menu-categories'>
						Categories
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
