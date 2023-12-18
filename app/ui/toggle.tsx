import { useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/20/solid";

export const Toggle = () => {
	const [enabled, setEnabled] = useState(true);
	// note: need to tie this to dark/light mode in browser prefs, use LocalStorage to store preference

	return (
		<div>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? "bg-cws-primary" : "bg-cws-bg-2"}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${enabled ? "translate-x-6 rotate-90" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-200 ease-in-out p-0.5`}
				>
					{enabled ? <SunIcon /> : <MoonIcon />}
				</span>
			</Switch>
		</div>
	);
};
