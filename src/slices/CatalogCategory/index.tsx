import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CatalogCategory`.
 */
export type CatalogCategoryProps =
	SliceComponentProps<Content.CatalogCategorySlice>;

/**
 * Component for "CatalogCategory" Slices.
 */
const CatalogCategory = ({ slice }: CatalogCategoryProps): JSX.Element => {

  
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="max-container w-full p-10 mb-20 ">
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
			</div>
		</section>
	);
};

export default CatalogCategory;
