"use client";

import Image from "next/image";
import homeHero from "@/public/matt-hardy-6ArTTluciuA-unsplash.jpg";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  const triggerAnimation = () => {
    setLoaded(true);
  };

  return (
    <section className="text-center text-slate-100">
      <div className="relative h-[500px] md:h-[600px] lg:h-[800px]">
        <Image
          onLoad={triggerAnimation}
          src={homeHero}
          priority
          fill
          alt="Lightly rippling ocean waves"
          className="opacity-80 object-cover"
        />
        <div className="absolute inset-0 top-2/4 overflow-hidden">
          <div
            className={clsx(
              "text-2xl sm:text-3xl md:text-5xl",
              { invisible: !loaded },
              { "animate-slideFromLeft": loaded },
            )}
          >
            World Class Web Solutions
          </div>
          <div
            className={clsx(
              "mt-4 text-lg sm:text-xl md:text-3xl",
              { invisible: !loaded },
              { "animate-slideFromRight": loaded },
            )}
          >
            For Creatives & Business
          </div>
          <a
            href="#get-started"
            className={clsx(
              { invisible: !loaded },
              { "animate-fadeIn": loaded },
            )}
          >
            <button className="mt-2 sm:mt-8 mx-auto flex transform items-center rounded-full bg-gradient-to-r from-cws-primary to-cws-bg-1 px-3 py-2 font-medium text-white transition hover:ring-1 hover:ring-cws-primary hover:scale-105">
              <span className="px-1">Get Started</span>
              <ArrowDownCircleIcon className="w-7" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
