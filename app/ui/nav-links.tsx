//import { usePathname } from "next/navigation";
//import clsx from "clsx";
import Link from "next/link";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Testimonials", href: "/testimonials" },
	{ name: "Contact", href: "/contact" },
];

export const NavLinks = () => {
	//const pathName = usePathname();

	return (
		<div className="flex gap-6">
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.name}
						className="text-slate-500 text-xl font-semibold"
					>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
};
