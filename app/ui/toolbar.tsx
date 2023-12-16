import { SunIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

const iconStyle = "h-9 w-9 text-black";

export const ToolBar = () => {
	return (
		<div className="px-4 flex gap-2">
			<Bars3Icon className={`${iconStyle} md:hidden`} />
			<SunIcon className={iconStyle} />
		</div>
	);
};
