'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Building, LogIn, ShieldCheck, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function LoginDropdown() {
	const { data: session, status } = useSession();

	// Don't render anything until we know the session status
	if (status === 'loading') {
		return (
			<div className='flex items-center justify-center w-8 h-8'>
				<User className='animate-pulse' />
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<User />
			</DropdownMenuTrigger>
			{status === 'authenticated' && session ? (
				<DropdownMenuContent>
					<DropdownMenuLabel>
						Welcome, {session.user?.name || session.user?.email}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link
							href={`/user/${session.user.id}`}
							className='flex'>
							<User className='mr-2 h-4 w-4' />
							<p>My account</p>
						</Link>
					</DropdownMenuItem>
					{session?.user?.role === 'ADMIN' && (
						<DropdownMenuItem asChild>
							<Link href='/admin' className='flex'>
								<ShieldCheck className='mr-2 h-4 w-4' />
								<p>Admin</p>
							</Link>
						</DropdownMenuItem>
					)}
					<DropdownMenuItem asChild>
						{session?.user?.hasCompany ? (
							<Link href='/company/profile' className='flex'>
								<Building className='mr-2 h-4 w-4' />
								<p>My Company</p>
							</Link>
						) : (
							<Link href='/company/register' className='flex'>
								<Building className='mr-2 h-4 w-4' />
								<p>Register your company</p>
							</Link>
						)}
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<LogoutButton />
					</DropdownMenuItem>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent>
					<DropdownMenuLabel>Welcome</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link
							// href='/api/auth/signin'
							href='/login'
							className='flex'>
							<LogIn className='mr-2 h-4 w-4' />
							<p>Login</p>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
}
