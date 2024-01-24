"use client";

import { PackagePricing } from "./package-pricing";
import { PackageDetails } from "./package-details";
import { packageDetails, packagePricing } from "@/app/data";

export const PricePackage = () => {
  return (
    <section className="mt-2 mb-8">
      <div
        id="margin-wrapper"
        className="relative isolate rounded-lg bg-cws-bg-2/50 text-slate-100"
      >
        <div
          id="content-container"
          className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
        >
          <PackageDetails
            header={packageDetails.header}
            features={packageDetails.features}
          />
          <PackagePricing
            header={packagePricing.header}
            featureChecklist={packagePricing.featureChecklist}
            options={packagePricing.options}
          />
        </div>
      </div>
    </section>
  );
};
