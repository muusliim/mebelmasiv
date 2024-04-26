import Button from "@/components/Button";
import Slider from "@/components/Slider";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Images } from "lucide-react";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
	SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
	const images = slice.items.map((item) => item.imageslider);
	return (
		<section
			className="bg-secondaryText/5 overflow-hidden"
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="max-container w-full p-10 mb-20 grid md:grid-cols-2 place-items-center lg:gap-10 ">
				<Slider images={images} />
				<div className="md:order-first overflow-hidden">
					<PrismicRichText
						field={slice.primary.heading}
						components={{
							heading2: ({ children }) => (
								<h2 className="md:text-7xl text-2xl font-nunito regular-28 leading-tight tracking-tight text-[#461f0d] mt-10 lg:mb-12 mb-6 text-center">
									{children}
								</h2>
							),
						}}
					/>
					<PrismicRichText
						field={slice.primary.body}
						components={{
							paragraph: ({ children }) => (
								<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm ">{children}</p>
							),
						}}
					/>
					<Button
						field={slice.primary.buttonlink}
						className="w-max mt-14 lg:ml-7"
					>
						<p>{slice.primary.button_text }</p><Images />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default TextWithImage;
