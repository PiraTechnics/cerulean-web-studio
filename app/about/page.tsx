import { OwnerProfile } from "@/app/ui/sections/owner-profile";
import { SEO, about } from "@/app/data";
import { Pitch } from "../ui/sections/pitch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us" + " | " + SEO.siteName,
};

export default function About() {
  return (
    <div className="mb-8">
      <section className="px-6 py-16 sm:py-24 lg:px-8 text-slate-100">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-6xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8">{about}</p>
        </div>
      </section>
      <section className="text-center text-slate-100 bg-cws-bg-2/50 my-4 sm:my-6 rounded-md py-16 px-8 sm:px-32 md:px-16 lg:px-4">
        <div className="text-5xl sm:text-4xl mb-16">Our Mission</div>
        <Pitch />
      </section>
      <OwnerProfile />
    </div>
  );
}
