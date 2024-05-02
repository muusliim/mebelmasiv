import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import CatalogItems from "../../components/CatalogItems";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CatalogCategory`.
 */
export type CatalogCategoryProps =
	SliceComponentProps<Content.CatalogCategorySlice>;

/**
 * Component for "CatalogCategory" Slices.
 */
const CatalogCategory = ({ slice }: CatalogCategoryProps): JSX.Element => {
	const image = slice.items.map((item: any) => item.ctgimage);

	console.log(slice.items.length);
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="max-container p-6 lg:mb-14 mb-10"
		>
			<div className="max-container w-full lg:p-10 p-2 lg:mb-14 mb-10">
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						heading2: ({ children }) => (
							<h2 className="heading_mt">{children}</h2>
						),
					}}
				/>
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
				<div className="flex justify-center gap-10 mt-10 text-sm font-nunito">
					<PrismicNextLink
						field={slice.primary.prevlink}
						className="hover:text-orange-900 hover:underline"
					>
						{slice.primary.prev_link_text}
					</PrismicNextLink>
					<PrismicNextLink
						field={slice.primary.nextlink}
						className="hover:text-orange-900 hover:underline"
					>
						{slice.primary.next_link_text}
					</PrismicNextLink>
				</div>
			</div>
			<div className="flexCenter flex-wrap gap-12 lg:gap-14">
				{slice.items.map((item: any, i) => (
					<div key={slice.items[i].ctgheading}>
						<CatalogItems
							image={item.ctgimage}
							heading={slice.items[i].ctgheading}
							descrFirst={slice.items[i].ctgdescr}
							descrSecond={slice.items[i].ctgdescr_2}
							descrThird={slice.items[i].ctgdescr_3}
							price={slice.items[i].price}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default CatalogCategory;
