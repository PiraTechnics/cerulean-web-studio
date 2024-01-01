"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Contact", href: "/contact" },
];

export const NavLinks = () => {
	const pathname = usePathname();

	return (
		<div className="flex gap-4 lg:gap-6 max-md:hidden">
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"font-sans lg:text-lg xl:text-xl py-5 font-semibold hover:text-[#66e4e9]",
							{
								"text-[#00c4cc] border-b-4 border-[#00c4cc]":
									pathname === link.href,
							}
						)}
					>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
};
