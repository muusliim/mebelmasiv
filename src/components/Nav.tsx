"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

const Nav = ({ containerStyle, linkStyle, underlineStyle, theref } : any) => {

    const navData = [
        { name: "Главная", path: "/" },
        { name: "О нас", path: "/about" },
		{name: "Наши работы", path: "/works"},
        { name: "Каталог", path: "/shop" },
        { name: "Контакты", path: "/contacts" },
      ];

	const path = usePathname();
	return (
		<nav ref={theref} className={`${containerStyle}`}>
			{navData.map((link, i) => (
				<Link
					key={i}
					href={link.path}
					className={`${link.path === path && "text-white "} ${linkStyle}`}
				>
					{link.path === path && (
						<motion.span
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							transition={{ type: "spring" }}
							layoutId="underline"
							className={`${underlineStyle}`}
						/>
					)}
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
