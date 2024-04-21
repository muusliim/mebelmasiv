import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Rocket, ShieldCheck, ThumbsUp, Zap } from "lucide-react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
	const icons = {
		experience: <Rocket className="w-20 h-20 text-secondaryText" />,
		efficiency: <Zap className="w-20 h-20 text-secondaryText" />,
		quality: <ThumbsUp className="w-20 h-20 text-secondaryText" />,
	};
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="max-container p-10 mb-20">
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						heading2: ({ children }) => (
							<h2 className="md:text-7xl font-nunito regular-32 leading-tight tracking-tight text-[#461f0d] mt-10 mb-12 text-center">
								{children}
							</h2>
						),
					}}
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
					{slice.items.map((item, i) => (
						<div key={i} className="flex flex-col items-center gap-2">
							{item.icon && <>{icons[item.icon]}</>}
							<PrismicRichText
								field={item.title}
								components={{
									heading3: ({ children }) => (
										<strong className="text-2xl ">{children}</strong>
									),
								}}
							/>
							<PrismicRichText field={item.descr} components={{ paragraph: ({ children }) => <p className="lg:text-lg lg:mt-5 mt-2">{children}</p> }} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
