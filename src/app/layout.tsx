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
			settings.data.meta_desciption || "Мебель-массив. Мебель из сосны.",
		openGraph: {
			images: [settings.data.og_image.url || ""],
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
