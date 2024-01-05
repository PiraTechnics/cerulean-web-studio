import { PricePackage } from "@/app/ui/sections/package";
import {
	ViewColumnsIcon,
	RocketLaunchIcon,
	CircleStackIcon,
	PencilSquareIcon,
} from "@heroicons/react/24/outline";

const packageData = {
	header: {
		superscript: "Full-featured",
		title: "Business & Portfolio Websites",
	},
	features: [
		{
			name: "Fast & Responsive",
			icon: RocketLaunchIcon as HeroIcon,
			description:
				"Developed on modern web frameworks, our sites are speedy and beautiful on any screen, no matter the size.",
		},
		{
			name: "5 Pages Included",
			icon: ViewColumnsIcon as HeroIcon,
			description:
				"Choose from a variety of templates, or build from scratch! Additional pages can be added anytime, starting at $100/page.",
		},
		{
			name: "Managed Hosting",
			icon: CircleStackIcon as HeroIcon,
			description:
				"Reliable and secure web hosting provided on a monthly basis; uptime monitoring and technical support included.",
		},
		{
			name: "Easy to Edit",
			icon: PencilSquareIcon as HeroIcon,
			description:
				"Includes a lightweight Content Management System (CMS) tailored to your needs, making editing content a breeze!",
		},
	],
	pricing: {
		header: "Site Design & Hosting",
		price1: "$1200",
		label1: "One-Time",
		price2: "$5",
		label2: "Per Month",
	},
	checklist: [
		"Full Custom Design",
		"High Performance",
		"Mobile & Desktop",
		"SEO Friendly",
		"On-Call Support",
		"Affordable Add-ons",
	],
};

export default function Pricing() {
	return (
		<article>
			<div className="py-24 sm:py-32 text-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
							Pricing plans for teams of&nbsp;all&nbsp;sizes
						</p>
					</div>
					<p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8">
						Choose an affordable plan that’s packed with the best features for
						engaging your audience, creating customer loyalty, and driving
						sales.
					</p>
				</div>
			</div>
			<PricePackage
				header={packageData.header}
				features={packageData.features}
				checklist={packageData.checklist}
				pricing={packageData.pricing}
			/>
		</article>
	);
}
