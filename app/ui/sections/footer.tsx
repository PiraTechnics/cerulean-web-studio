import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Facebook from "@/app/ui/icons/facebook";
import Instagram from "@/app/ui/icons/instagram";
import LinkedIn from "@/app/ui/icons/linkedin";
import Bluesky from "@/app/ui/icons/bluesky";
import FullLogo from "@/public/cerulean.svg";

import Link from "next/link";
import Image from "next/image";
import { contactInformation, pageLinks } from "@/app/constants";

const socials = [
  { name: "LinkedIn", href: "#", icon: <LinkedIn /> },
  { name: "Facebook", href: "#", icon: <Facebook /> },
  { name: "Bluesky", href: "#", icon: <Bluesky /> },
  { name: "Instagram", href: "#", icon: <Instagram /> },
];

const today = new Date();
//should this be declared IN Footer? not sure if/how much overhead it adds or how frequently updated

export const Footer = () => {
  return (
    <footer className="bg-slate-300/40 py-4 text-white lg:rounded-t-lg">
      <div
        id="footer-content"
        className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 my-2"
      >
        <div id="footer-about" className="mb-4 justify-self-center text-center">
          <div className="mb-4 p-1 mx-auto rounded-full bg-white/60 w-56 md:w-48 lg:w-40">
            <Image src={FullLogo} alt="Cerulean Web Studio" />
          </div>
          <p className="px-8 sm:px-32 md:px-16 lg:text-sm lg:px-10">
            We are a full service web agency passionate about delivering an
            exceptional experience for creatives and small businesses looking
            for web solutions.
          </p>
        </div>
        <div id="footer-nav" className="place-self-center">
          <ul className="list-none text-center">
            {pageLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-label={link.name}
                    className="text-xl lg:text-lg py-1 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="footer-location" className="justify-self-center text-center">
          <div className="text-2xl my-4">Location</div>
          <div className="text-lg">{contactInformation.location}</div>
          <p>{contactInformation.address}</p>
          <p>
            {contactInformation.city}, {contactInformation.state}{" "}
            {contactInformation.zip}
          </p>
        </div>
        <div id="footer-socials" className="justify-self-center text-center">
          <div className="text-2xl my-4">Contact</div>
          <div className="flex gap-2 my-4 justify-center">
            {socials.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="p-1.5 rounded-full bg-slate-700 hover:bg-[#00c4cc]"
                >
                  {link.icon}
                </Link>
              );
            })}
          </div>
          <div className="ps-6 text-start">
            <div className="mb-2">
              <PhoneIcon width={24} className="inline me-2" />
              {contactInformation.phone}
            </div>
            <div>
              <EnvelopeIcon width={24} className="inline me-2" />
              {contactInformation.email}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-8" />
      <div id="footer-copyright" className="text-sm text-center mt-4">
        &copy; {today.getFullYear()} - Cerulean Web Studio
      </div>
    </footer>
  );
};
