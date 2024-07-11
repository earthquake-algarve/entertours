import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User } from "lucide-react"
import Link from "next/link"

export default function Login() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger><User /></DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Welcome, Fulano</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="/" className="flex">
						<User className="mr-2 h-4 w-4" />
						<p>My profile</p>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/" className="flex">
						<LogOut className="mr-2 h-4 w-4" />
						<p>Logout</p>
					</Link>
						
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
