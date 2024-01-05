"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

const frequencies = [
	{ value: "onetime", label: "Flate Rate", priceSuffix: "" },
	{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];

export const PriceToggle = () => {
	const [frequency, setFrequency] = useState(frequencies[0]);

	return (
		<div className="mt-8 flex justify-center">
			<RadioGroup
				value={frequency}
				onChange={setFrequency}
				className="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 bg-white"
			>
				<RadioGroup.Label className="sr-only">
					Payment frequency
				</RadioGroup.Label>
				{frequencies.map((option) => (
					<RadioGroup.Option
						key={option.value}
						value={option}
						className={({ checked }) =>
							clsx(
								checked ? "bg-cws-bg-2 text-white" : "text-black",
								"cursor-pointer rounded-full px-2.5 py-1"
							)
						}
					>
						<span>{option.label}</span>
					</RadioGroup.Option>
				))}
			</RadioGroup>
		</div>
	);
};
