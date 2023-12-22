import { Hero } from "@/app/ui/sections/home/hero";
import { Intro } from "@/app/ui/sections/home/intro";
import { WhyUs } from "@/app/ui/sections/home/why-us";

export default function Home() {
	return (
		<article>
			<Hero />
			<Intro />
			<WhyUs />
		</article>
	);
}
