import { Hero } from "@/app/ui/sections/hero";
import { Intro } from "@/app/ui/sections/intro";
import { Pitch } from "@/app/ui/sections/pitch";
import { GetStarted } from "@/app/ui/sections/get-started";

export default function Home() {
  return (
    <div className="-mt-24 mb-8">
      <Hero />
      <Intro />
      <section className="text-center text-slate-100 bg-cws-bg-2/50 my-4 sm:my-6 rounded-md py-16 px-8 sm:px-32 md:px-16 lg:px-4">
        <div className="text-5xl sm:text-4xl mb-16">Why Choose Us?</div>
        <Pitch />
      </section>
      <GetStarted />
    </div>
  );
}
