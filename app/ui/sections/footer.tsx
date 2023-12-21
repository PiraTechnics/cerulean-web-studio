import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import LinkedIn from "@/public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
	const links = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Testimonials", href: "/testimonials" },
		{ name: "Contact", href: "/contact" },
	];

	const socials = [
		{ name: "LinkedIn", href: "#", icon: LinkedIn },
		{ name: "Facebook", href: "#", icon: Facebook },
		{ name: "Instagram", href: "#", icon: Instagram },
	];
	const today = new Date();

	return (
		<footer className="bg-slate-300/40 py-4 text-white">
			<div className="flex max-sm:flex-col justify-around max-sm:mx-auto max-sm:items-center max-sm:gap-8">
				<div id="footer-nav" className="flex flex-col text-lg">
					{links.map((link) => {
						return (
							<Link
								key={link.name}
								href={link.href}
								className="text-lg xl:text-lg py-1 hover:underline "
							>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div id="footer-socials" className="flex flex-col justify-center">
					<span className="text-xl text-center">Find us Online</span>
					<div className="flex justify-around gap-4">
						{socials.map((link) => {
							return (
								<Link
									key={link.name}
									href={link.href}
									className="text-lg xl:text-lg py-1 hover:underline "
								>
									<Image src={link.icon} alt={link.name} width={32} />
								</Link>
							);
						})}
					</div>
				</div>
				<div id="footer-contact" className="flex flex-col gap-4 py-4">
					<div className="flex gap-2">
						<MapPinIcon width={30} />
						<p>
							2222 Someplace Blvd #42 <br /> Nowheresville, CA
						</p>
					</div>
					<div className="flex gap-2">
						<PhoneIcon width={28} />
						<p>(555) 555-5555</p>
					</div>
					<div className="flex gap-2">
						<EnvelopeIcon width={28} />
						<p>fakename@testmail.net</p>
					</div>
				</div>
			</div>
			<div id="footer-copyright" className="text-sm text-center mt-4">
				&copy; {today.getFullYear()} - Cerululean Web Studio
			</div>
		</footer>
	);
};
