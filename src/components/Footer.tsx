import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
	const client = createClient();
	const footerSettings = await client.getSingle("footer");

	const FOOTER_LINKS = [
		{
			title: "Разделы",
			links: ["Главная", "О нас", "Каталог", "Контакты"],
			linkUrl: ["/", "/about", "/shop", "/contact"],
		},
		{
			title: "Наши контакты",
			links: [
				footerSettings.data.telephone,
				footerSettings.data.telephone_2,
				footerSettings.data.adress,
			],
		},
		{
			title: "Информация",
			links: [footerSettings.data.information],
		},
	];

	return (
		<footer className="flexCenter bg-secondaryText">
			<div className="padding-container max-container flex w-full bg-inherit flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<div className="mb-6">
						<Link href={"/"}>
							<Image
								src={"/assets/images/logo.png"}
								alt="footerLogo"
								className="mt-6 w-auto h-auto"
								height={252}
								width={252}
							/>
						</Link>
						<p className="max-w-xs text-primary pt-8"></p>
						<div className="border-[0.5px] bg-gray-30"></div>
					</div>
				</div>
				<div className="flex gap-10 sm:justify-center max-md:flex-wrap">
					{FOOTER_LINKS.map((elem, i) => (
						<div key={i} className="w-full">
							<ul className="text-white flex flex-col gap-4 regular-14">
								<div className="flex flex-col gap-5">
									<h4 className="bold-18">{elem.title}</h4>
								</div>
								{elem.links.map((link, i) =>
									elem.linkUrl ? (
										<Link
											href={elem.linkUrl[i]}
											key={link}
											className="hover:text-beige w-16"
										>
											{link}
										</Link>
									) : (
										<li key={link}>
											{link}
										</li>
									)
								)}
							</ul>
						</div>
					))}
				</div>
				<div className="border-[0.5px] bg-gray-30"></div>
				<p className="text-center regular-14 text-white pb-4">
					{new Date().getFullYear()} Мебель-массив | Все права защищены.
				</p>
			</div>
		</footer>
	);
};
// <footer>
//     <div>
//     <p>Наш телефон:</p>
// 	<Link href={"tel:" + footerSettings.data.telephone}>{footerSettings.data.telephone}</Link>
// 	<Link href={"tel:" + footerSettings.data.telephone_2}>{footerSettings.data.telephone_2}</Link>
//     </div>
// 	<div>
// 		{new Date().getFullYear()} ©{" "}
// 		<PrismicRichText field={footerSettings.data.information} />
//     </div>
// 	<div>
//         {footerSettings.data.adress}
// 	</div>
// </footer>

export default Footer;
