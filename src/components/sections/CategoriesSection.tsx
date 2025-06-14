import { MdOutlineSurfing, MdOutlineKayaking } from 'react-icons/md';
import { PiPersonSimpleHikeBold, PiSoccerBallBold } from 'react-icons/pi';
import { FaSailboat, FaBus } from 'react-icons/fa6';
import Link from 'next/link';
import { OutlineButton } from '../OutlineButton';
import { ArrowRight } from 'lucide-react';
import { getCategories } from '@/db/category/category';
import { Card, CardContent } from '@/components/ui/card';
import CategoryCarousel from '../CategoryCarousel';
import { BsBalloon } from 'react-icons/bs';

// const categories = [
// 	{
// 		id: '1',
// 		name: 'Boats',
// 		icon: <FaSailboat size={40} className='mt-1' />,
// 	},
// 	{
// 		id: '2',
// 		name: 'Surf',
// 		icon: <MdOutlineSurfing size={40} className='mt-1' />,
// 	},
// 	{
// 		id: '3',
// 		name: 'Kayak',
// 		icon: <MdOutlineKayaking size={40} className='mt-1' />,
// 	},
// 	{
// 		id: '4',
// 		name: 'Hiking',
// 		icon: <PiPersonSimpleHikeBold size={40} className='mt-1' />,
// 	},
// 	{
// 		id: '5',
// 		name: 'City Tour',
// 		icon: <FaBus size={40} className='mt-1' />,
// 	},
// 	{
// 		id: '6',
// 		name: 'Football Games',
// 		icon: <PiSoccerBallBold size={40} className='mt-1' />,
// 	},
// ];

export default async function CategoriesSection() {
	const categories = (await getCategories()) ?? [];
	if(!categories || categories.length === 0) return <p>No categories available</p>;
	return (
		<section className='p-4 flex flex-col bg-orange-300 '>
			<div className='flex justify-around items-center'>

				<CategoryCarousel categories={categories} />
			</div>
		</section>
	);
}
