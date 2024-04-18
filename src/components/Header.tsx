import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Header = async () => {
	const client = createClient();
	console.log(client);
	const settings = await client.getSingle("settings");

	return (
		<header className="bg-[#dbcbb5]">
			<Link href={"/"}>
				{" "}
				<PrismicNextImage
					className="w-[170px] h-8"
					field={settings.data.og_image}
				/>
			</Link>

			<nav>
				<ul>
					{settings.data.navigation.map(({ label, link }) => (
						<li key={label}>
							<PrismicNextLink field={link}>{label}</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
