import { CeruleanLogo } from "../icons/cerulean-logo";
import { NavLinks } from "../components/nav-links";
import { ToolBar } from "../components/toolbar";

export const Header = () => {
  return (
    <header className="fixed w-full max-w-screen-2xl top-0 z-10 bg-[#cce4ea]  lg:rounded-b-lg h-fit shadow-xl text-black">
      <nav className="flex px-4 items-center justify-between h-full mx-auto">
        <CeruleanLogo />
        <NavLinks />
        <ToolBar />
      </nav>
    </header>
  );
};
