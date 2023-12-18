"use client";

import { BurgerBar } from "./burger-bar";
import { Toggle } from "./toggle";

export const ToolBar = () => {
	return (
		<div className="px-4 flex gap-4">
			<div className="md:hidden pt-1.5">
				<BurgerBar />
			</div>
			<Toggle />
		</div>
	);
};
