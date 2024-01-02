export const GetStarted = () => {
	return (
		<div className="bg-cws-bg-2/50 rounded-md">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-around lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-slate-100">
					Ready to dive in?
					<br />
					Schedule a free consultation today.
				</h2>
				<div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
					<a
						href="#"
						className="rounded-full bg-gradient-to-r from-cws-primary to-cws-bg-1 px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-cws-bg-1 hover:ring-cws-bg-1/50 focus:outline-none text-white"
					>
						Get started
					</a>
					<a
						href="#"
						className="text-sm font-semibold leading-6 text-slate-200"
					>
						Compare Packages <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	);
};
