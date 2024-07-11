import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const cities = ["Lagos" , "Carvoeiro", "Sagres" , "Lisboa"  ]

export default function CitiesSection() {
    return (
		<section className='p-11 flex flex-col justify-center items-center gap-8'>
			<div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">

				{cities.map((city, index) =>(
					<Link href="/" key={index}>
						<Card  className='border-none w-60 flex flex-col justify-center items-center shadow-none' >
							<CardHeader className="flex flex-col justify-center items-center gap-4 ">
								<CardTitle >
									<Image src="/banner.png" alt='reviews' width={250} height={130} className="rounded-full border-4 object-cover " />
								</CardTitle>
								<CardDescription className='font-semibold'>{city}</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
			<Button asChild className="w-fit bg-orange-300 text-black shadow-lg hover:bg-orange-300">
				<Link href="/locations">
					<span>See all locations</span>
					<ArrowRight />
				</Link>
			</Button>
        </section>
    )
}
