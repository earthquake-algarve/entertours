import BannerSection from '@/components/sections/BannerSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import CarouselSection from '@/components/sections/CarouselSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationsSection from '@/components/sections/LocationsSection';
import React from 'react';

export default async function Home() {
	return (
		<>
			<BannerSection />
			<CategoriesSection />
			<CarouselSection />
			<ReviewsSection />
			<LocationsSection />
		</>
	);
}
