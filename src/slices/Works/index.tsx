import Gallery from "@/components/Gallery";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */

const Works = ({ slice }: WorksProps): JSX.Element => {
  const images = slice.items.map((item: any) => {
    return item.gallery_image
  })
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
							<h2 className='heading_mt'>
								{children}
							</h2>
						),
					}}
				/>
        <Gallery images={images}/>
			</div>
		</section>
	);
};

export default Works;
