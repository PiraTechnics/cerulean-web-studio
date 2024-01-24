import { SEO } from "@/app/data";
import { PricePackage } from "@/app/ui/sections/package";
import { AddOns } from "@/app/ui/sections/package-addons";
import { GetStarted } from "@/app/ui/sections/get-started";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing" + " | " + SEO.siteName,
};

export default function Pricing() {
  return (
    <section className="mb-4 lg:mb-8">
      <div className="mt-16 py-12 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Pricing for teams of all sizes
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8">
            We offer affordable plans for all budgets, with features and add-ons
            for engaging your audience, creating customer loyalty, driving
            sales, and more.
          </p>
        </div>
      </div>
      <PricePackage />
      <AddOns />
      <GetStarted />
    </section>
  );
}
