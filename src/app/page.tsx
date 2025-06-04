import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import CarouselSection from '@/components/sections/CarouselSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationsSection from '@/components/sections/LocationsSection';
import React from 'react';

export default async function Home() {
	return (
		<>
			<HeroSection />
			<CategoriesSection />
			<CarouselSection />
			<ReviewsSection />
			<LocationsSection />
		</>
	);
}
