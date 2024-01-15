import { PackagePricing } from "./package-pricing";
import { PackageDetails } from "./package-details";

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
  featureChecklist: string[];
  pricing: {
    header: string;
    options: Array<{
      value: string;
      label: string;
      price1: number;
      subLabel1: string;
      price2?: number;
      subLabel2?: string;
    }>;
  };
};

export const PricePackage = ({
  header,
  features,
  featureChecklist,
  pricing,
}: PackageProps) => {
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
          <PackageDetails header={header} features={features} />
          <PackagePricing
            featureChecklist={featureChecklist}
            pricing={pricing}
          />
        </div>
      </div>
    </section>
  );
};
