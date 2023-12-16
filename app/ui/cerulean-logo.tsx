import Image from "next/image";

export const CeruleanLogo = ({ size = 75 }) => {
	return (
		<Image
			src="/cerulean.svg"
			alt={"Minimalist Wave Icon with text"}
			width={size * 3}
			height={size}
		/>
	);
};
