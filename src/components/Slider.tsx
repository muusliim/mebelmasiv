'use client'
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { PrismicNextImage } from "@prismicio/next";
const Slider = ({ firstImage, secondImage }: { firstImage: any, secondImage: any }) => {
	return (
		<Carousel
			className="w-full max-w-max overflow-hidden"
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[Autoplay({ delay: 3000 })]}
		>
			<CarouselContent>
				{[firstImage, secondImage].map((item, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-auto items-center justify-center p-4">
									<span className="text-4xl font-semibold">
										<PrismicNextImage field={item} />
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default Slider;
