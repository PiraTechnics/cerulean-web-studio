"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/20/solid";

export const Toggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		//return skeleton to avoid layout shift flicker
		return <div className="h-6 w-12"></div>;
	}

	return (
		<Switch
			onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
			className={`${
				resolvedTheme === "light" ? "bg-cws-primary" : "bg-cws-bg-2"
			}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
		>
			<span className="sr-only">Use setting</span>
			<span
				aria-hidden="true"
				className={`${
					resolvedTheme === "light"
						? "translate-x-6 rotate-90"
						: "translate-x-0"
				}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-200 ease-in-out p-0.5`}
			>
				{resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
			</span>
		</Switch>
	);
};
