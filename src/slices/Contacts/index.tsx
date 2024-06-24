import Map from "@/components/Map";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `Contacts`.
 */
export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

/**
 * Component for "Contacts" Slices.
 */
const Contacts = ({ slice }: ContactsProps): JSX.Element => {
	const classForLinks =
		"lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm hover:text-[#461f0d] hover:underline";
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="max-container p-10 md:pt-16">
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
					<Map />
					<div className="flex flex-col">
						<Link
							href="https://maps.app.goo.gl/gehHRJCnScy3fE4T9"
							target="_blank"
							className={classForLinks}
						>
							Санкт-Петербург, Благодатная улица, дом 35
						</Link>
						<div className="flex flex-col">
							<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm">
								Контактные телефоны:
							</p>
							<div className="flex gap-4">
								<Link href="tel:+78123691383" className={classForLinks}>
									(812) 369-13-83
								</Link>
								<Link href="tel:+79313576050" className={classForLinks}>
									8 (931) 357-60-50
								</Link>
							</div>
						</div>
						<Link
							href="mailto:mebelmasiv@mail.ru"
							className={classForLinks}	
						>
							E-mail: mebelmasiv@mail.ru
						</Link>

						<p className="lg:text-lg lg:ml-7 lg:mt-5 mt-2 text-sm"><b>Pежим работы:</b> ПН - СБ 10:00 - 20:00; ВС 11:00 - 19:00</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
