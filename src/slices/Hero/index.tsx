import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { CirclePercent, MousePointerClick } from "lucide-react";
import Button from "@/components/Button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import DialogPromo from "@/components/Promotion";

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
			className=" max-container-hero h-[100vh] w-full flex justify-center items-center"
			style={{
				background: `center center / cover no-repeat url(${slice.primary.bg_image.url})`,
			}}
		>
			<div className="w-full h-full flex flex-col justify-evenly items-center py-12 max-md:py-12">
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						heading1: ({ children }) => (
							<h1 className="text-4xl md:text-7xl font-cuprum font-bold leading-tight tracking-tight text-[#461f0d]">
								{children}
							</h1>
						),
					}}
				/>
				<PrismicRichText
					field={slice.primary.body}
					components={{
						paragraph: ({ children }) => (
							<p className="text-[#2b2725] text-center font-cuprum md:text-2xl text-lg font-semibold md:leading-10 mb-4 md:w-9/12 px-8">
								{children}
							</p>
						),
					}}
				/>
				<Button
					field={slice.primary.button_link}
					className="flex gap-3 m-3 rounded-lg bg-[#461f0d] text-white font-nunito font-bold text-lg px-10 py-4 hover:bg-[#ac6748] items-center"
				>
					{slice.primary.button_text} <MousePointerClick />
				</Button>

				<DialogPromo couponLink={slice.primary.couponlink} coupon={slice.primary.coupon}/>
			</div>
		</section>
	);
};

export default Hero;
