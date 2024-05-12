import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<section className="max-container p-10 lg:mb-14 mb-10">
			<div className=" max-container w-full lg:p-10 p-2 lg:mb-14 mb-10">
				<h2 className="heading_mt">Страница не найдена</h2>{" "}
				<Link
					href="/"
					className="hover:text-orange-900 hover:underline text-lg md:text-2xl mt-20 flexCenter text-center items-center gap-1 font-nunito"
				>
					Вернуться на главную <Home size={24} />
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
