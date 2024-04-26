import Map from "@/components/Map";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contacts`.
 */
export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

/**
 * Component for "Contacts" Slices.
 */
const Contacts = ({ slice }: ContactsProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="max-container p-10 pt-14 mb-20">
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
				<Map latitude={slice.primary.geoposition.latitude} longitude={slice.primary.geoposition.longitude}/>
					<div>
						<PrismicRichText
							field={slice.primary.body}
							components={{
								paragraph: ({ children }) => (
									<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm ">
										{children}
									</p>
								),
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
