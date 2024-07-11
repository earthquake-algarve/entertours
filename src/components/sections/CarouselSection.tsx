'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import HomeCard from "@/components/HomeCard";
import Autoplay from "embla-carousel-autoplay"

export default function CarouselSection() {
    return (
        <section className="p-16">
            <Carousel plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}>
                <CarouselContent>
                    {Array.from({ length: 6 }, (_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5"><HomeCard /></CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
