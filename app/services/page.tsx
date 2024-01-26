import { OurServices } from "@/app/ui/sections/our-services";
import { GetStarted } from "@/app/ui/sections/get-started";
import { Metadata } from "next";
import { SEO } from "../data";

export const metadata: Metadata = {
  title: "Our Services" + " | " + SEO.siteName,
};

export default function Services() {
  return (
    <div className="mt-16 mb-8">
      <OurServices />
      <GetStarted />
    </div>
  );
}
