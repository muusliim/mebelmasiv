import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Footer = async () => {
	const client = createClient();
	const footerSettings = await client.getSingle("footer");
	return (
		<footer>
            <div>
            <p>Наш телефон:</p>
			<Link href={"tel:" + footerSettings.data.telephone}>{footerSettings.data.telephone}</Link>
			<Link href={"tel:" + footerSettings.data.telephone_2}>{footerSettings.data.telephone_2}</Link>
            </div>
			<div>
				{new Date().getFullYear()} ©{" "}
				<PrismicRichText field={footerSettings.data.information} />
            </div>
			<div>
                {footerSettings.data.adress}
			</div>
		</footer>
	);
};

export default Footer;
