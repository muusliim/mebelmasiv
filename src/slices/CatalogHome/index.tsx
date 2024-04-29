"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CatalogHome`.
 */
export type CatalogHomeProps = SliceComponentProps<Content.CatalogHomeSlice>;

/**
 * Component for "CatalogHome" Slices.
 */
const CatalogHome = ({ slice }: CatalogHomeProps): JSX.Element => {
	const images = slice.items.map((item: any) => item.categoryimage);
	const text = slice.items.map((item: any) => item.categorytext);
	const links = slice.items.map((item: any) => item.categorylink);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className=" py-10 xl:py-30 bg-secondaryText/5 "
		>
			<div className="text-center mb-20 max-container padding-container">
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						heading2: ({ children }) => (
							<h2 className="heading_mt">{children}</h2>
						),
					}}
				/>{" "}
				<PrismicRichText field={slice.primary.descr} components={{
          paragraph: ({ children }) => <p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm">{children}</p>
        }}/>
				<div className="flexCenter flex-wrap gap-12 lg:gap-14 mt-14">
					{images.map((item, i) => (
						<div key={i} className="flexCenter flex-col gap-8">
							<PrismicNextLink field={links[i]}>
								<div
									className="relative after:absolute after:-top-[10px] after:-bottom-[10px] 
              after:-left-[10px] after:-right-[10px] after:border
               after:border-secondary after:rounded-full 
               hover:after:top-[10px] hover:after:bottom-[10px] hover:after:left-[10px] 
               hover:after:right-[10px] hover:after:bg-black/30
                hover:after:border-white after:transition-all after:duration-700 "
								>
									<PrismicNextImage
										field={item}
										className="rounded-full h-36 w-36"
									/>
								</div>
								<p className="bold-20 capitalize mt-3 hover:text-secondaryText">
									{text[i]}
								</p>
							</PrismicNextLink>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CatalogHome;
