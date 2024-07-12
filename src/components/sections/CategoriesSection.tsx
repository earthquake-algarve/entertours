import { MdOutlineSurfing, MdOutlineKayaking } from 'react-icons/md';
import { PiPersonSimpleHikeBold } from 'react-icons/pi';
import { FaSailboat, FaBus } from 'react-icons/fa6';
import CategoryCard from '../CategoryCard';
import Link from 'next/link';

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


export default function CategoriesSection() {
	return (
		<section className='flex justify-around items-center bg-orange-300'>
			{categories.map((category) => (
				<Link key={category.id} href='/'>
					<CategoryCard
						title={category.name}
						icon={category.icon}
					/>
				</Link>
			))}
		</section>
	);
}
