import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";
const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
	return (
		<PrismicNextLink
			className={clsx(
				"flex gap-3 m-3 rounded-lg bg-[#461f0d] text-white font-nunito font-bold text-sm lg:text-lg px-10 py-4 hover:bg-[#ac6748] transition-all duration-300",
				className
			)}
			{...restProps}
		/>
	);
};

export default Button;
