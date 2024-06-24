import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import clsx from "clsx";
import { Inter, Nunito, Cuprum } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["cyrillic"],
	variable: "--font-inter",
	display: "swap",
});
const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	display: "swap",
});
const cuprum = Cuprum({
	subsets: ["cyrillic"],
	variable: "--font-cuprum",
	display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return {
		title: settings.data.site_title || "Fallback",
		description:
		settings.data.meta_desciption || "Мебель-массив. Мебель из сосны. Мебель на заказ г.СПб.",
		keywords: ["Мебель из сосны", "Мебель на заказ г.СПб.", "Мебель-массив", "Мебель из массива дерева", "Заказать мебель СПб", "Заказ мебели из дерева", "Сосна мебель СПб", "Мебель из сосны в Санкт-Петербурге", "Мебель сосна, береза, дуб"],
		alternates:{
			canonical: "https://mebelmassive.com",
		},
		openGraph: {
			images: [settings.data.og_image.url || ""],
			type: "website",
			locale: "ru_RU",
			url: "https://mebelmassive.com",
		},
		verification: {
			yandex: "5d8facde203b0ee2",
		},
		applicationName: "mebelmassive.com",
		authors: [{ name: "Мебель-массив", url: "https://mebelmassive.com" }],
		publisher: "Мебель-массив",
		icons: {
			shortcut: "/favicon.ico",
			apple: "/favicon.ico",
			icon: "/favicon.ico",
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ru"
			className={clsx(nunito.variable, cuprum.variable, inter.variable)}
		>
			<body>
				<Header />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
