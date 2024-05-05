import { CirclePercent } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const DialogPromo = ({ couponLink, coupon}: {couponLink: any, coupon: any}) => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className="fixed lg:bottom-12 md:size-24 size-14 bottom-10 right-0 md:right-16 -translate-x-1/2 md:-translate-y-1/2 hover:scale-110 transition-all delay-200">
					<CirclePercent className="text-red-700 md:size-24 size-14 animate-spin !-z-10 hover:animate-none" />
					<p className="text-red-800 font-nunito md:bold-32 -rotate-12 bold-16 translate-x-2">
						Акция!
					</p>
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] ">
				<DialogHeader>
					<DialogTitle>Акция!</DialogTitle>
					<DialogDescription>
						Предъявив в нашем салоне данный купон Вы получите скидку 5%
					</DialogDescription>
				</DialogHeader>
				<PrismicNextLink field={couponLink}>
					<PrismicNextImage
						field={coupon}
						fallback={<p>Что-то пошло не так...</p>}
					/>
				</PrismicNextLink>
			</DialogContent>
		</Dialog>
	);
};

export default DialogPromo;