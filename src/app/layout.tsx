import type { Metadata } from "next";
import clsx from "clsx";
import { Inter, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

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
const nunitoSans = Nunito_Sans({
	subsets: ["cyrillic"],
	variable: "--font-nunito-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Мебель из сосны",
	description: "Мебель из сосны",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html className={clsx(nunito.variable, nunitoSans.variable, inter.variable)} lang="ru">
			<body >{children}</body>
		</html>
	);
}
