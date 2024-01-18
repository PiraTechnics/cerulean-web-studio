import {
  CheckIcon,
  PlusIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

type pricingProps = {
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

export const PackagePricing = ({ featureChecklist, pricing }: pricingProps) => {
  const [frequency, setFrequency] = useState(pricing.options[0]);

  return (
    <div className="px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
      <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
        <div className="mb-8">
          <h2 className="text-white text-center text-2xl">{pricing.header}</h2>
          <div className="py-4 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-0.5 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 bg-white"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {pricing.options.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    clsx(
                      checked ? "bg-cws-bg-2/90 text-white" : "text-black",
                      "cursor-pointer rounded-full px-2.5 py-1"
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </div>
        <PriceOption option={frequency} />
        <ul
          role="list"
          className="grid gap-px overflow-hidden rounded sm:grid-cols-2 w-fit mx-auto"
        >
          {featureChecklist.map((item) => (
            <li
              key={item}
              className="flex items-center space-x-3 bg-cws-primary/80 px-8 py-4 text-white"
            >
              <CheckIcon
                className="h-6 w-6 text-slate-100"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-slate-300 text-center mt-2">
          *Prices are estimates only. Subscription plan minimum 6 month
          contract.
        </div>
      </div>
    </div>
  );
};

type priceProps = {
  option: {
    value: string;
    label: string;
    price1: number;
    subLabel1: string;
    price2?: number;
    subLabel2?: string;
  };
};

const PriceOption = ({ option }: priceProps) => {
  return (
    <div>
      <h2 className="sr-only">Price</h2>
      <p className="relative flex flex-col sm:flex-row justify-center gap-4 sm:gap-16">
        <span className="flex flex-col text-center">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            ${option.price1}
          </span>
          <span className="mt-2 text-lg font-medium text-slate-100">
            {option.subLabel1}
          </span>
          <span className="sr-only">plus</span>
        </span>
        {option.subLabel2 && option.price2 && (
          <>
            <span
              className="pointer-events-none flex h-12 items-center justify-center"
              aria-hidden="true"
            >
              <PlusIcon
                className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                aria-hidden="true"
              />
            </span>
            <span>
              <span className="flex flex-col text-center">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  ${option.price2}
                </span>
                <span className="mt-2 font-medium text-lg text-slate-100">
                  {option.subLabel2}
                </span>
              </span>
            </span>
          </>
        )}
      </p>
    </div>
  );
};
