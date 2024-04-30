"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CatalogMainPage`.
 */
export type CatalogMainPageProps =
	SliceComponentProps<Content.CatalogMainPageSlice>;

/**
 * Component for "CatalogMainPage" Slices.
 */
const CatalogMainPage = ({ slice }: CatalogMainPageProps): JSX.Element => {
	const images = slice.items.map((item: any) => item.categoryimage);

	console.log(images);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="text-center mb-20 max-container padding-container w-full p-10"
		>
			<div className="mb-20">
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						heading1: ({ children }) => (
							<h1 className="heading_mt">{children}</h1>
						),
					}}
				/>{" "}
				<PrismicRichText
					field={slice.primary.descr}
					components={{
						paragraph: ({ children }) => (
							<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm">
								{children}
							</p>
						),
					}}
				/>
			</div>

			<div className="flexCenter flex-wrap gap-12 lg:gap-14">
				{images.map((item, i) => (
					<div key={i} className="flex flex-col">
						<div
							className="relative after:absolute after:-top-[10px] after:-bottom-[10px] 
                    after:-left-[10px] after:-right-[10px] after:border
                     after:border-black/30 after:rounded-md 
                     hover:after:top-[10px] hover:after:bottom-[10px] hover:after:left-[10px] 
                     hover:after:right-[10px] hover:after:bg-black/90
                      hover:after:border-white after:transition-all after:duration-700 group"
						>
							<PrismicNextImage
								field={item}
								className="rounded-md h-[350] w-[255]"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CatalogMainPage;
