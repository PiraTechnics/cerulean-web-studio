import Image from "next/image";
import Logo from "@/public/cerulean.svg";

export const CeruleanLogo = () => {
	return (
		<Image
			src={Logo}
			alt="Minimalist Wave Icon with text"
			className="md:w-52 w-44 py-0.5"
		/>
	);
};
