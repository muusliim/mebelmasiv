import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MousePointerClick } from "lucide-react";
import Slider from "@/components/Slider";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-col items-center md:p-20 p-3"
		>
			<PrismicRichText
				field={slice.primary.heading}
				components={{
					heading1: ({ children }) => (
						<h1 className="text-4xl md:text-7xl font-nunito font-bold leading-tight tracking-tight text-slate-700 mb-5">
							{children}
						</h1>
					),
				}}
			/>
			<PrismicRichText
				field={slice.primary.body}
				components={{
					paragraph: ({ children }) => (
						<p className="text-[#333e4e] font-nunitoSans md:text-2xl text-lg font-medium md:leading-10 mb-4 max-md:max-w-3xl ">
							{children}
						</p>
					),
				}}
			/>
			<PrismicNextLink
				field={slice.primary.button_link}
				className="flex gap-3 m-3 rounded-lg bg-[#333e4e] text-white font-nunito font-bold text-lg px-10 py-4 hover:bg-[#4c5c74] hover:text-white"
			>
				{slice.primary.button_text} <MousePointerClick />
			</PrismicNextLink>
			<Slider
				firstImage={slice.primary.image}
				secondImage={slice.primary.image_2}
			/>
		</section>
	);
};

export default Hero;
