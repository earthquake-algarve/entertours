import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { getLocations } from '@/db/locations/location';
import LocationCarousel from '../LocationCarousel';
import { Location } from '@/generated/prisma';

export default async function LocationsSection() {
	const locations: Location[] = (await getLocations()) ?? [];
	if (!locations || locations.length === 0) {
		return <p>No locations available at the moment.</p>;
	}

	return (
		<section className='p-4 flex flex-col justify-center items-center '>
			<LocationCarousel locations={locations} />

			<Button
				asChild
				className='w-fit bg-orange-300 text-black shadow-lg hover:bg-orange-300'>
				<Link href='/locations'>
					<span>See all locations</span>
					<ArrowRight />
				</Link>
			</Button>
		</section>
	);
}
