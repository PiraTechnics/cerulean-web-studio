import { ThumbnailCard } from "@/app/ui/components/thumbnail-card";
import { SEO, portfolioCards } from "@/app/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio" + " | " + SEO.siteName,
};

export default function Portfolio() {
  return (
    <section className="mb-4 lg:mb-8">
      <div className="my-10 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Sample Portfolio
            </p>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg sm:text-xl leading-8">
            Click below to see some of our past work
          </p>
        </div>
      </div>
      <div className="bg-cws-bg-2/50 m-2 rounded-md p-8 sm:p-8 md:p-16 grid gap-6 md:gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {portfolioCards.map((card) => {
          return (
            <ThumbnailCard
              key={card.id}
              img={card.src}
              link={card.link}
              alt={card.alt}
            />
          );
        })}
      </div>
    </section>
  );
}
