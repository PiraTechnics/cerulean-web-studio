import {
	PaintBrushIcon,
	RocketLaunchIcon,
	CurrencyDollarIcon,
	ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export const WhyUs = () => {
	return (
		<section className="text-center text-slate-100 py-24 px-8 sm:px-32 md:px-16 lg:px-4">
			<div className="text-3xl mb-16">Why Choose Us?</div>
			<div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-16 lg:gap-8 px-2">
				<div className="flex flex-col items-center gap-2">
					<PaintBrushIcon className="w-16 p-1 rounded-xl bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1" />
					<div className="text-2xl font-semibold bg-gradient-to-r from-cws-primary to-cws-bg-1 text-transparent bg-clip-text">
						Bespoke Design{" "}
					</div>
					<div className="text-start">
						A unique web experience stands out amongst the rest. Templates are
						only a starting point for us -- never the end. Whether you prefer a
						minial design, consider your website a canvas on which to paint, or
						something in between, we&apos;ve got you covered.
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<RocketLaunchIcon className="w-16 p-1 rounded-xl bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1" />
					<div className="text-2xl font-semibold bg-gradient-to-r from-cws-primary to-cws-bg-1 text-transparent bg-clip-text">
						Speedy Performance
					</div>
					<div className="text-start">
						First impressions are key -- studies show that users stay on a
						fast-loading website far more frequently than a slow one.
						That&apos;s why we build our web solutions with performance in mind,
						using the latest tools and coding best practices.{" "}
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<ChatBubbleLeftRightIcon className="w-16 p-1 rounded-xl bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1" />
					<div className="text-2xl font-semibold bg-gradient-to-r from-cws-primary to-cws-bg-1 text-transparent bg-clip-text">
						Clear Communication
					</div>
					<div className="text-start">
						A successful business is built on trust, so we want to be sure to
						earn and keep yours. Throughout every step of the process we keep
						you as informed as you prefer, and make sure we are on the same page
						for design, changes, and timelines.
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<CurrencyDollarIcon className="w-16 p-1 rounded-xl bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1" />
					<div className="text-2xl font-semibold bg-gradient-to-r from-cws-primary to-cws-bg-1 text-transparent bg-clip-text">
						Affordable Options
					</div>
					<div className="text-start">
						A quality website doesn&apos;t have to break the bank. We offer
						afforable options for design, hosting, and maintainence, all in
						house. Choose from any of our packages, or consult for a customized
						offering.
					</div>
				</div>
			</div>
		</section>
	);
};
