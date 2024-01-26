import Image from "next/image";
import Logo from "@/public/CWS-title-only.png";

export const CeruleanLogo = () => {
  return (
    <Image src={Logo} alt="Cerulean Web Studio" className="md:w-52 w-44 py-1" />
  );
};
