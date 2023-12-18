import { CeruleanLogo } from "./cerulean-logo";
import { NavLinks } from "./nav-links";
import { ToolBar } from "./toolbar";

export const HeaderNav = () => {
	return (
		<header className="sticky top-0 z-10 bg-white h-fit shadow-lg border-b border-e  border-slate-400">
			<nav className="flex px-2 items-center justify-between h-full max-w-screen-2xl mx-auto">
				<CeruleanLogo />
				<NavLinks />
				<ToolBar />
			</nav>
		</header>
	);
};
