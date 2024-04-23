"use client";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { PrismicNextImage } from "@prismicio/next";
const Slider = ({ images }: any): JSX.Element => {
	return (
		<Carousel
			className="w-full max-w-xs max-md:w-[70%] max-md:overflow-hidden "
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[Autoplay({ delay: 2000 })]}
		>
			<CarouselContent>
				{images.map((item: any, index: any) => (
					<CarouselItem key={index}>
						<div>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-3">
									<span className="text-4xl font-semibold">
										<PrismicNextImage field={item} />
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
};

export default Slider;
