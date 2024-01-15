"use client";

import { PricePackage } from "@/app/ui/sections/package";
import { AddOns } from "@/app/ui/sections/package-addons";
import { packageDetails, packagePricing } from "@/app/data";

export default function Pricing() {
  return (
    <section>
      <div className="mt-16 py-12 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Pricing for teams of all sizes
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
        header={packageDetails.header}
        features={packageDetails.features}
        featureChecklist={packageDetails.featureChecklist}
        pricing={packagePricing}
      />
      <AddOns addOns={packagePricing.addOns} />
    </section>
  );
}
