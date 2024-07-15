import BannerSection from '@/components/sections/BannerSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import CarouselSection from '@/components/sections/CarouselSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CitiesSection from '@/components/sections/CitiesSection';
import Redirect from '@/components/Redirect';
import { getServerSession } from 'next-auth';
import authOptions from './api/auth/[...nextauth]/authOptions';

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session)
		
		return (
			<Redirect/>
		);
		
	return (
		<>
			<BannerSection />
			<CategoriesSection />
			<CarouselSection />
			<ReviewsSection />
			<CitiesSection />
		</>
	);
}
