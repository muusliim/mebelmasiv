"use client";

import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import { useOutSideAlerter } from "@/app/hooks/useOutsideAlerter";
import { CircleX, Menu } from "lucide-react";

const Header = () => {
	const { isShow, ref, setIsShow } = useOutSideAlerter(false);

	const onToggleMenu = () => setIsShow(!isShow);

	return (
		<header
			className="padding-container max-container flexBetween w-[90%] bg-[#d9c7b1]/70 
		mx-auto fixed top-8 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg gap-2 backdrop-blur-[3px]"
		>
			<Link href={"/"}>
				<Image src={"/assets/images/logo.png"} alt="logo" height={250} width={250} className="cursor-pointer w-auto h-auto" />
			</Link>

			<Nav
				containerStyle={
					isShow
						? "flex flex-col justify-center p-12 fixed bg-[#d9c7b1]/70 top-20 bg-[#d9c7b1]/90 shadow-lg rounded-lg transition-all duration-300 right-0"
						: "hidden lg:flex lg:gap-6 xl:gap-14 "
				}
				linkStyle={
					isShow
						? "uppercase my-4 text-sm font-bold relative hover:text-white "
						: "uppercase text-sm font-bold relative hover:text-secondary"
				}
				underlineStyle={
					isShow
						? "absolute left-0 top-[100%] h-[2px] bg-secondaryText w-[100%]"
						: "absolute left-0 top-[100%] h-[2px] bg-secondaryText w-[100%]"
				}
				theref={ref}
			/>

			<div className="flex gap-4 lg:gap-8">
				{!isShow ? (
					<Menu
						className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"
						onClick={onToggleMenu}
					/>
				) : (
					<CircleX
						className="lg:hidden inline-block cursor-pointer medium-15 hover:text-secondary"
						onClick={onToggleMenu}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
