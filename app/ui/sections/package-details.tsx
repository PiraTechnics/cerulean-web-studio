type detailsProps = {
    header: {
		superscript: string;
		title: string;
	};
	features: Array<{
		name: string;
		icon: HeroIcon;
		description: string;
		
	}>;
}

export const PackageDetails = ({header, features}: detailsProps) => {
    return (
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
    )
}