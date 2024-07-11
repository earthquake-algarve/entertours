import { MdOutlineSurfing, MdOutlineKayaking } from 'react-icons/md';
import { PiPersonSimpleHikeBold } from 'react-icons/pi';
import { FaSailboat, FaBus } from 'react-icons/fa6';
import CategoryCard from '../CategoryCard';

const categories = [
	{
		name: 'Boats',
		icon: <FaSailboat size={40} className='mt-1' />,
	},
	{
		name: 'Surf',
		icon: <MdOutlineSurfing size={40} className='mt-1' />,
	},
	{
		name: 'Kayak',
		icon: <MdOutlineKayaking size={40} className='mt-1' />,
	},
	{
		name: 'Hiking',
		icon: <PiPersonSimpleHikeBold size={40} className='mt-1' />,
	},
	{
		name: 'City Tour',
		icon: <FaBus size={40} className='mt-1' />,
	},
];


export default function CategoriesSection() {
	return (
		<section className='flex justify-around items-center bg-orange-300'>
			{categories.map((category, index) => (
				<CategoryCard
                    key={index}
					title={category.name}
					icon={category.icon}
				/>
			))}
		</section>
	);
}
