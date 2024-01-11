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
};

export const PackageDetails = ({ header, features }: detailsProps) => {
  return (
    <div
      id="content-details"
      className="relative px-6 sm:pt-32 lg:static lg:px-8 py-28"
    >
      <div
        id="white-overlay"
        className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-[#cce4ea] lg:w-1/2 lg:rounded-l-lg max-lg:rounded-t-lg"
      ></div>
      <div className="mx-auto max-w-lg lg:mx-0 text-black">
        <h2 className="text-xl md:text-2xl font-semibold text-cws-primary">
          {header.superscript}
        </h2>
        <p className="mt-2 text-2xl font-bold sm:text-3xl sm:tracking-tight">
          {header.title}
        </p>
        <dl className="mt-12 space-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1 shadow-md">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 underline text-black">
                  {feature.name}
                </p>
              </dt>
              <dd className="ml-16 mt-2 text-black">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
