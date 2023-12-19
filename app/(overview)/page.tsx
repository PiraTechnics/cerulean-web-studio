import Image from "next/image";
import homeHero from "@/public/matt-hardy-6ArTTluciuA-unsplash.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
	return (
		<section className="bg-slate-800 relative text-center text-slate-100">
			<Image
				src={homeHero}
				alt="Lightly rippling ocean waves"
				placeholder="blur"
				className="opacity-70 object-cover"
			/>
			<div className="absolute inset-0 top-2/4 overflow-hidden">
				<div className="text-5xl animate-slideFromLeft">
					World Class Web Design
				</div>
				<div className="text-3xl animate-slideFromRight">Reasonable Prices</div>
				<button className="mt-8 mx-auto flex transform items-center rounded-full bg-gradient-to-r from-cws-primary to-cws-bg-1 px-3 py-2 font-medium text-white transition hover:scale-110 ring-1 ring-cws-bg-1 hover:ring-cws-bg-1/50 focus:outline-none animate-fadeIn">
					<span className="px-1">Get Started</span>
					<ArrowRightCircleIcon className="w-7" />
				</button>
			</div>
		</section>
	);
}
