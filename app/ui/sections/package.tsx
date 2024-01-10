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
      price1: string;
      subLabel1: string;
      price2?: string;
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
    <div className="relative bg-white rounded-md mb-12">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-cws-bg-2 rounded-md" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
        <PackageDetails header={header} features={features} />
        <PackagePricing featureChecklist={featureChecklist} pricing={pricing} />
      </div>
    </div>
  );
};
