import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
	BsFacebook,
	BsInstagram,
	BsPinterest,
	BsTwitterX,
} from 'react-icons/bs';
import CountrySearchBar from '../CountrySearchBar';

export default function FooterSection() {
	return (
		<section className='p-10 bg-orange-300 flex justify-between'>
			<Card className='bg-orange-300 border-none shadow-none flex flex-col'>
				<CardHeader>
					<CardTitle>Info</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-2'>
					<Link href='' className='w-fit'>
						Contact
					</Link>
					<Link href='' className='w-fit'>
						About us
					</Link>
					<Link href='' className='w-fit'>
						Terms and Conditions
					</Link>
					<Link href='' className='w-fit'>
						Register your company
					</Link>
				</CardContent>
			</Card>
			<Card className='bg-orange-300 border-none shadow-none '>
				<CardHeader>
					<CardTitle>Follow us on</CardTitle>
				</CardHeader>
				<CardContent className='flex gap-3'>
					<Link href=''>
						<BsInstagram size={40} />
					</Link>
					<Link href=''>
						<BsFacebook size={40} />
					</Link>
					<Link href=''>
						<BsPinterest size={40} />
					</Link>
					<Link href=''>
						<BsTwitterX size={40} />
					</Link>
				</CardContent>
			</Card>
			<Card className='bg-orange-300 border-none shadow-none'>
				<CardHeader>
					<CardTitle>Select language</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-2'>
					<CountrySearchBar/>
				</CardContent>
			</Card>
		</section>
	);
}
