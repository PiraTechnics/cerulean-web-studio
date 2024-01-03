import { Hero } from "@/app/ui/sections/hero";
import { Intro } from "@/app/ui/sections/intro";
import { WhyUs } from "@/app/ui/sections/why-us";

export default function Home() {
	return (
		<article>
			<Hero />
			<Intro />
			<WhyUs />
		</article>
	);
}
