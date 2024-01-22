import { Hero } from "@/app/ui/sections/hero";
import { Intro } from "@/app/ui/sections/intro";
import { WhyUs } from "@/app/ui/sections/why-us";
import { GetStarted } from "@/app/ui/sections/get-started";

export default function Home() {
  return (
    <div className="mb-8">
      <Hero />
      <Intro />
      <WhyUs />
      <GetStarted />
    </div>
  );
}
