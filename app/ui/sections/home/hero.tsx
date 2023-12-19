"use client";

import Image from "next/image";
import homeHero from "@/public/matt-hardy-6ArTTluciuA-unsplash.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";

export const Hero = () => {
	const [loaded, setLoaded] = useState(false);

	const triggerAnimation = () => {
		setLoaded(true);
	};

	return (
		<section className="text-center text-slate-100">
			<div className="relative h-[500px] md:h-[700px] lg:h-[900px]">
				<Image
					onLoad={triggerAnimation}
					src={homeHero}
					fill
					alt="Lightly rippling ocean waves"
					className="opacity-80 object-cover"
				/>
				<div className="absolute inset-0 top-2/4 overflow-hidden">
					<div
						className={clsx(
							"text-2xl sm:text-3xl md:text-5xl",
							{ invisible: !loaded },
							{ "animate-slideFromLeft": loaded }
						)}
					>
						World Class Web Solutions
					</div>
					<div
						className={clsx(
							"mt-4 text-lg sm:text-xl md:text-3xl",
							{ invisible: !loaded },
							{ "animate-slideFromRight": loaded }
						)}
					>
						For Creatives & Business
					</div>
					<button
						className={clsx(
							"mt-2 sm:mt-8 mx-auto flex transform items-center rounded-full bg-gradient-to-r from-cws-primary to-cws-bg-1 px-3 py-2 font-medium text-white transition hover:scale-110 ring-1 ring-cws-bg-1 hover:ring-cws-bg-1/50 focus:outline-none",
							{ invisible: !loaded },
							{ "animate-fadeIn": loaded }
						)}
					>
						<span className="px-1">Get Started</span>
						<ArrowRightCircleIcon className="w-7" />
					</button>
				</div>
			</div>
		</section>
	);
};
