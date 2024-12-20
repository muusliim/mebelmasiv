import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CatalogItemProps {
	image: any;
	heading: string;
	descrFirst: string;
	descrSecond: string;
	descrThird: string;
	price: string | number | null;
}

const CatalogItem = ({
	image,
	heading,
	descrFirst,
	descrSecond,
	descrThird,
	price,
} : CatalogItemProps) => {
	return (
		<Card className="mx-5 w-[300px] lg:w-[350px]">
			<CardHeader>
				<CardTitle>{heading}</CardTitle>
			</CardHeader>
			{image && (
				<PrismicNextImage
					field={image}
					className="mx-auto"
					placeholder="blur"
					blurDataURL={"/assets/images/logo_small.png"}
				/>
			)}
			<CardContent className="mt-2">
				<CardDescription>{descrFirst}</CardDescription>
				<CardDescription>{descrSecond}</CardDescription>
				<CardDescription>{descrThird}</CardDescription>
			</CardContent>
			{price && (
				<CardFooter className="flex justify-between">{price}</CardFooter>
			)}
		</Card>
	);
};

export default CatalogItem;
