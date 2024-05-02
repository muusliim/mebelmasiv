import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
/**
 * Props for `Catalog`.
 */
export type CatalogProps = SliceComponentProps<Content.CatalogSlice>;

/**
 * Component for "Catalog" Slices.
 */
const Catalog = async ({ slice }: CatalogProps): Promise<JSX.Element> => {
	const client = createClient();
	const categories = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.category) && item.category.uid) {
				return client.getByUID("catalog_cards", item.category.uid);
			}
		})
	);
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="max-container p-10 md:pt-10"
		>
			<div className=" text-center mb-20">
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
				{categories.map((item, i) => (
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
								className="rounded-md h-[350] w-[255]"
								field={item?.data.card_image}
								width={255}
								height={350}
							/>
							<div className="flex flex-col gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-0 transition-all duration-700 group-hover:!scale-100 text-white">
								{item?.data.card_links.map((link, i) => (
									<PrismicNextLink key={link.card_linktext} field={link?.card_link} className="hover:text-beige hover:underline">{link.card_linktext}</PrismicNextLink>
								))}
							</div>
						</div>
						<p className="medium-20 capitalize text-center mt-6">{item?.data.card_name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Catalog;
