import { Hero } from "../ui/sections/home/hero";
import { baskerville } from "../layout";
import { Intro } from "../ui/sections/home/intro";

export default function Home() {
	return (
		<article>
			<div className={baskerville.className}>
				<Hero />
			</div>
			<Intro />
		</article>
	);
}
