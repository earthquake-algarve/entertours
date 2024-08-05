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
	const { data: session } = useSession();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<User />
			</DropdownMenuTrigger>
			{session ? (
				<DropdownMenuContent>
					<DropdownMenuLabel>
						Welcome,{' '}
						{session.user?.name
							? session.user?.name
							: session.user?.email}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link href='/' className='flex'>
							<User className='mr-2 h-4 w-4' />
							<p>My profile</p>
						</Link>
					</DropdownMenuItem>
					{session?.user?.role && (
						<>
							<DropdownMenuItem asChild>
								<Link href='/admin' className='flex'>
									<ShieldCheck className='mr-2 h-4 w-4' />
									<p>Admin</p>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href='/company/register' className='flex'>
									<Building className='mr-2 h-4 w-4' />
									<p>Company</p>
								</Link>
							</DropdownMenuItem>
						</>
					)}

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
