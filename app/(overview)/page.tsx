"use client";

import Image from "next/image";
import homeHero from "@/public/matt-hardy-6ArTTluciuA-unsplash.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	const triggerAnimation = () => {
		setLoaded(true);
	};

	return (
		<>
			<section className="bg-slate-800 text-center text-slate-100">
				<div className="relative">
					<Image
						onLoad={triggerAnimation}
						src={homeHero}
						alt="Lightly rippling ocean waves"
						className="opacity-70 object-cover"
					/>
					<div className="absolute inset-0 top-2/4 overflow-hidden">
						<div
							className={clsx(
								"text-5xl",
								{ invisible: !loaded },
								{ "animate-slideFromLeft": loaded }
							)}
						>
							World Class Web Design
						</div>
						<div
							className={clsx(
								"text-3xl",
								{ invisible: !loaded },
								{ "animate-slideFromRight": loaded }
							)}
						>
							Reasonable Prices
						</div>
						<button
							className={clsx(
								"mt-8 mx-auto flex transform items-center rounded-full bg-gradient-to-r from-cws-primary to-cws-bg-1 px-3 py-2 font-medium text-white transition hover:scale-110 ring-1 ring-cws-bg-1 hover:ring-cws-bg-1/50 focus:outline-none",
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
		</>
	);
}
