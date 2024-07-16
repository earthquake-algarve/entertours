import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";


export default function LogoutButton() {
  return (
		<Button onClick={() => signOut()} className='flex bg-transparent hover:bg-transparent text-black p-2'>
			<LogOut className='mr-2 h-4 w-4' />
			<p>Logout</p>
		</Button>
  );
}
