import Button from "@/components/Button";
import Slider from "@/components/Slider";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Images } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
	SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */

const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
	const images = slice.items.map((item: any) => {
		if (slice.variation === "default" && item.imageslider) {
			return item.imageslider;
		} else {
			return null;
		}
	});
	const headers = slice.items.map((item: any) => {
		if (slice.variation === "noSlider" && item.header_advantages) {
			return item.header_advantages;
		} else {
			return null;
		}
	});

	const advantages = slice.items.map((item: any) => {
		if (slice.variation === "noSlider" && item.descr_advantages) {
			return item.descr_advantages;
		} else {
			return null;
		}
	});
	return (
		<section
			className=" overflow-hidden"
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{slice.variation === "default" ? (
				<div className="max-container w-full p-10 md:mb-20 grid md:grid-cols-2 place-items-center lg:gap-10 lg:pr-0">
					<Slider images={images} />
					<div className="md:order-first overflow-hidden">
						<PrismicRichText
							field={slice.primary.heading}
							components={{
								heading2: ({ children }) => (
									<h2 className="heading">
										{children}
									</h2>
								),
							}}
						/>
						<PrismicRichText
							field={slice.primary.body}
							components={{
								paragraph: ({ children }) => (
									<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm ">
										{children}
									</p>
								),
							}}
						/>
						<Button
							field={slice.primary.buttonlink}
							className="w-max mt-14 lg:ml-7 items-center"
						>
							<p>{slice.primary.button_text}</p>
							<Images />
						</Button>
					</div>
				</div>
			) : (
				<div className="max-container w-full md:p-10 pt-6 mb-20">
					<PrismicRichText
						field={slice.primary.heading}
						components={{
							heading2: ({ children }) => (
								<h2 className="heading_mt">
									{children}
								</h2>
							),
						}}
					/>
					<div className="flex justify-center w-full">
						<PrismicNextImage field={slice.primary.collage_photo} />
					</div>
					<div className="grid lg:grid-cols-2 justify-center mt-10 gap-12">
						<div>
							<PrismicRichText
								field={slice.primary.body}
								components={{
									paragraph: ({ children }) => (
										<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm px-10">
											{children}
										</p>
									),
								}}
							/>
						</div>
						<div className="px-10">
							<h3 className="text-3xl font-nunito text-secondaryText text-center">
								{slice.primary.heading_advantages}
							</h3>
							{headers.map((header, index) => {
								return (
								<Accordion key={index} type="single" collapsible className="w-full mt-6">
									<AccordionItem className="w-full bg-secondaryText/5 px-2" value={`item-${index}`}>
										<AccordionTrigger className="lg:text-xl text-[14px]">{header[0].text}</AccordionTrigger>
										<AccordionContent>
											{advantages[index][0].text}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default TextWithImage;
