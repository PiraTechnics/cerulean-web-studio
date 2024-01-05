import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
//import { PriceToggle } from "@/app/ui/components/price-toggle";

type PackageProps = {
	header: {
		superscript: string;
		title: string;
	};
	features: Array<{
		name: string;
		icon: HeroIcon;
		description: string;
	}>;
	pricing: {
		header: string;
		price1: string;
		label1: string;
		price2?: string;
		label2?: string;
	};
	checklist: string[];
};

export const PricePackage = ({
	header,
	features,
	pricing,
	checklist,
}: PackageProps) => {
	return (
		<div className="relative bg-white rounded-md">
			<div className="absolute inset-0" aria-hidden="true">
				<div className="absolute inset-y-0 right-0 w-1/2 bg-cws-bg-2 rounded-md" />
			</div>
			<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
				<div className="bg-white px-6 py-16 sm:py-24 lg:px-0 lg:pr-8">
					<div className="mx-auto max-w-lg lg:mx-0">
						<h2 className="text-xl font-semibold text-cws-primary">
							{header.superscript}
						</h2>
						<p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl sm:tracking-tight">
							{header.title}
						</p>
						<dl className="mt-12 space-y-10">
							{features.map((feature) => (
								<div key={feature.name} className="relative">
									<dt>
										<div className="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1 shadow-md">
											<feature.icon
												className="h-6 w-6 text-white "
												aria-hidden="true"
											/>
										</div>
										<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
											{feature.name}
										</p>
									</dt>
									<dd className="ml-16 mt-2 text-slate-600">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<div className="bg-cws-bg-2 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
					<div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
						<div className="mb-8">
							<h2 className="text-slate-200 text-center text-2xl">
								{pricing.header}
							</h2>
							{/* <PriceToggle /> */}
						</div>
						<div>
							<h2 className="sr-only">Price</h2>
							<p className="relative flex flex-col sm:flex-row justify-around gap-2">
								<span className="flex flex-col text-center">
									<span className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
										{pricing.price1}
									</span>
									<span className="mt-2 text-lg font-medium text-slate-300">
										{pricing.label1}
									</span>
									<span className="sr-only">plus</span>
								</span>
								{pricing.label2 && pricing.price2 && (
									<>
										<span
											className="pointer-events-none flex h-12 items-center justify-center"
											aria-hidden="true"
										>
											<PlusIcon
												className="h-6 w-6 text-slate-200"
												aria-hidden="true"
											/>
										</span>
										<span>
											<span className="flex flex-col text-center">
												<span className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
													{pricing.price2}
												</span>
												<span className="mt-2 font-medium text-lg text-slate-300">
													{pricing.label2}
												</span>
											</span>
										</span>
									</>
								)}
							</p>
						</div>
						<ul
							role="list"
							className="grid gap-px overflow-hidden rounded sm:grid-cols-2 w-fit mx-auto"
						>
							{checklist.map((item) => (
								<li
									key={item}
									className="flex items-center space-x-3 bg-cws-primary/80 px-8 py-4 text-white"
								>
									<CheckIcon
										className="h-6 w-6 text-slate-200"
										aria-hidden="true"
									/>
									<span>{item}</span>
								</li>
							))}
						</ul>
						<a
							href="#"
							className="flex w-fit mx-auto items-center justify-center rounded-lg border border-transparent bg-gradient-to-r from-cws-primary/90 to-cws-bg-1/90 ring-cws-bg-1 shadow-md px-8 py-4 text-xl leading-6 text-slate-100 md:px-10 hover:from-cws-primary/100 hover:to-cws-bg-1/100"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
