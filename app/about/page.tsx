import { Mission } from "@/app/ui/sections/mission";
import { OwnerProfile } from "@/app/ui/sections/owner-profile";
import { about } from "@/app/data";

export default function About() {
  return (
    <div className="mb-8">
      <section className="px-6 py-24 sm:py-32 lg:px-8 text-slate-100">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-6xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8">{about}</p>
        </div>
      </section>
      <Mission />
      <OwnerProfile />
    </div>
  );
}
