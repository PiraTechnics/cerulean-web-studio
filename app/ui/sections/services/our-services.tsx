import {
	DevicePhoneMobileIcon,
	CircleStackIcon,
	CodeBracketIcon,
	WrenchScrewdriverIcon,
	PresentationChartLineIcon,
	BanknotesIcon,
	PaintBrushIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const OurServices = () => {
	const servicesKey = [
		{ name: "Web Design", link: "design", icon: <PaintBrushIcon /> },
		{
			name: "Mobile Optimization",
			link: "mobile",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			name: "Ecommerce Integration",
			link: "ecommerce",
			icon: <BanknotesIcon />,
		},
		{
			name: "Search Engine Optimization",
			link: "seo",
			icon: <PresentationChartLineIcon />,
		},
		{
			name: "Application Development",
			link: "development",
			icon: <CodeBracketIcon />,
		},
		{ name: "Managed Hosting", link: "hosting", icon: <CircleStackIcon /> },
		{
			name: "Updates & Maintainence",
			link: "maintainence",
			icon: <WrenchScrewdriverIcon />,
		},
	];

	const textPlaceholder =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat augue purus, id tincidunt ex volutpat a. Maecenas id tortor et ex eleifend sollicitudin ultricies non eros. Suspendisse sed hendrerit massa, vel interdum diam. Integer pharetra dignissim sodales. Cras luctus aliquet consectetur. Cras luctus et turpis nec consectetur. Quisque ut odio in eros venenatis ullamcorper. Duis tincidunt lacus quis risus pellentesque, eget convallis mauris accumsan. Nunc ultrices interdum ligula et consequat. Donec justo mauris, aliquet nec dolor non, blandit imperdiet justo. Etiam nibh elit, efficitur quis tellus sed, gravida imperdiet magna. Phasellus consequat elit justo, consectetur ornare tortor consequat eu. Morbi eleifend sapien aliquet ullamcorper cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis ex sit amet diam pulvinar rutrum vitae vitae dolor. Donec magna augue, molestie ut neque eu, vehicula posuere diam. Proin rutrum lorem quis leo gravida vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi mollis libero eu tellus rhoncus convallis. Etiam ullamcorper ut ipsum quis feugiat. Duis ut diam lorem. Sed consectetur, urna vitae sollicitudin congue, tellus leo viverra metus, at luctus libero tortor ac est. Donec efficitur tincidunt velit eu imperdiet. Vivamus pharetra cursus sagittis.";

	return (
		<section className="text-slate-100 px-8">
			<div className="flex flex-col md:flex-row gap-8  xl:px-32 2xl:px-64 items-center">
				<div
					id="intro-content"
					className="bg-cws-bg-2/50 rounded-xl py-8 px-2 h-fit"
				>
					<div className="text-4xl text-center ">What We Do</div>
					<div className="mt-4 px-8">
						Whether you are an established business looking to update your web
						presence, a brand new enterprise looking for a digital foothold, or
						a creative in need of a stylish custom portfolio, Cerulean Web
						Studio has you covered.
					</div>
				</div>
				<div
					id="intro-key"
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 bg-white/40 rounded-xl p-4 gap-6 font-sans min-w-fit max-w-full justify-center"
				>
					{servicesKey.map((entry) => {
						return (
							<Link
								key={entry.name}
								href={`#${entry.link}`}
								className="flex items-center gap-4 rounded-lg px-2 py-0.5 hover:text-cws-primary hover:bg-white/70"
							>
								<div className="w-10">{entry.icon}</div>
								<p>{entry.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="my-16 flex flex-col gap-8 px-2">
				{servicesKey.map((entry) => {
					return (
						<div
							key={`${entry.name}-content`}
							id={entry.link}
							className="bg-cws-bg-2/50 rounded-xl p-4 shadow-lg"
						>
							<div className="text-3xl font-semibold mb-4">{entry.name}</div>
							<div>{textPlaceholder}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
