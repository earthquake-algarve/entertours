import { MdOutlineStarPurple500 } from 'react-icons/md';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Image from 'next/image';

export default function ReviewsSection() {
	return (
		<section className='bg-orange-300 p-16  flex flex-col justify-center items-center gap-8 '>
			<div className='grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<Card className='border-none w-60 flex flex-col justify-center items-center'>
					<CardHeader className='flex flex-col justify-center items-center'>
						<CardTitle>
							<Image
								src='/banner.png'
								alt='reviews'
								width={80}
								height={50}
								className='rounded-full'
							/>
						</CardTitle>
						<CardDescription>Thomas Shelby</CardDescription>
					</CardHeader>
					<CardContent className='flex justify-center items-center text-wrap'>
						This is a review text that can be quite long, so it will
						wrap to the next line if necessary. It should be
						readable and provide feedback on the service or product.
					</CardContent>
					<CardFooter className='flex justify-center items-center'>
						<MdOutlineStarPurple500 color='#FFFF00' size={20} />
						<MdOutlineStarPurple500 color='#FFFF00' size={20} />
						<MdOutlineStarPurple500 color='#FFFF00' size={20} />
						<MdOutlineStarPurple500 color='#FFFF00' size={20} />
						<MdOutlineStarPurple500 color='#FFFF00' size={20} />
						5.0
					</CardFooter>
				</Card>

				{/* <div className='hidden sm:flex'> */}
					<Card className='hidden sm:flex border-none w-60  flex-col justify-center items-center'>
						<CardHeader className='flex flex-col justify-center items-center'>
							<CardTitle>
								<Image
									src='/banner.png'
									alt='reviews'
									width={80}
									height={50}
									className='rounded-full'
								/>
							</CardTitle>
							<CardDescription>James Potter</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center items-center text-wrap'>
							This is a review text that can be quite long, so it
							will wrap to the next line if necessary. It should
							be readable and provide feedback on the service or
							product.
						</CardContent>
						<CardFooter className='flex justify-center items-center'>
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							5.0
						</CardFooter>
					</Card>
					<Card className='hidden sm:flex border-none w-60 flex-col justify-center items-center '>
						<CardHeader className='flex flex-col justify-center items-center'>
							<CardTitle>
								<Image
									src='/banner.png'
									alt='reviews'
									width={80}
									height={50}
									className='rounded-full'
								/>
							</CardTitle>
							<CardDescription>Joel Miller</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center items-center text-wrap'>
							This is a review text that can be quite long, so it
							will wrap to the next line if necessary. It should
							be readable and provide feedback on the service or
							product.
						</CardContent>
						<CardFooter className='flex justify-center items-center'>
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							<MdOutlineStarPurple500 color='#FFFF00' size={20} />
							5.0
						</CardFooter>
					</Card>
				{/* </div> */}
			</div>
		</section>
	);
}
