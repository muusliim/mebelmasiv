'use client'
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, usePrismicDocumentByUID} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import CatalogItemsContainer from "@/components/CatalogItemsContainer";



export type CatalogCategoryProps =
	SliceComponentProps<Content.CatalogCategorySlice>;

const CatalogCategory = ({ slice }: CatalogCategoryProps): JSX.Element => {

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
							className={ "hover:text-orange-900 hover:underline"}
							
						>
							{slice.primary.prev_link_text}
						</PrismicNextLink>
					<PrismicNextLink
						field={slice.primary.nextlink}
						className="hover:text-orange-900 hover:underline "
					>
						{slice.primary.next_link_text}
					</PrismicNextLink>
				</div>
			</div>
			<CatalogItemsContainer catalogItems={slice.items} />
		</section>
	);
};

export default CatalogCategory;
