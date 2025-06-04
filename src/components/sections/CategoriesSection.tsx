import { MdOutlineSurfing, MdOutlineKayaking } from 'react-icons/md';
import { PiPersonSimpleHikeBold } from 'react-icons/pi';
import { FaSailboat, FaBus } from 'react-icons/fa6';
import CategoryCard from '../CategoryCard';
import Link from 'next/link';
import { OutlineButton } from '../OutlineButton';
import { ArrowRight } from 'lucide-react';
import { getCategories } from '@/db/category/category';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
	{
		id: '1',
		name: 'Boats',
		icon: <FaSailboat size={40} className='mt-1' />,
	},
	{
		id: '2',
		name: 'Surf',
		icon: <MdOutlineSurfing size={40} className='mt-1' />,
	},
	{
		id: '3',
		name: 'Kayak',
		icon: <MdOutlineKayaking size={40} className='mt-1' />,
	},
	{
		id: '4',
		name: 'Hiking',
		icon: <PiPersonSimpleHikeBold size={40} className='mt-1' />,
	},
	{
		id: '5',
		name: 'City Tour',
		icon: <FaBus size={40} className='mt-1' />,
	},
];

export default async function CategoriesSection() {
	// const categories = await getCategories();
	return (
		<section className='p-4 flex flex-col bg-orange-300'>
			<div className='flex justify-around items-center'>
				{categories.map((category) => (
					<Link key={category.id} href={`/categories/${category.id}`}>
						<Card className='bg-orange-300 border-none mt-1'>
							<CardContent className='flex flex-col justify-center items-center'>
								<span className='font-bold items-center '>
									{category.name}
								</span>
								{/* <FaBus size={40} className='mt-1' /> */}
								{category.icon}
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
			{/* <div className='flex justify-center items-center'>
				<OutlineButton asChild={true}>
					<Link href={`/categories/${category.id}`}>
						All categories <ArrowRight />
					</Link>
				</OutlineButton>
			</div> */}
		</section>
	);
}
