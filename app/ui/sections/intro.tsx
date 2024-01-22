import Image from "next/image";
import { ourProcess } from "@/app/data";

export const Intro = () => {
  return (
    <section className="my-8 text-white text-center bg-white/40 rounded-md px-4 py-8 mx-4">
      <h2 className="text-4xl sm:text-3xl">Easy & Hassle-free</h2>
      <hr className="max-w-64 mx-auto my-1" />
      <h3 className="text-2xl sm:text-xl">Our process in three easy steps</h3>
      <div className="my-2 grid grid-cols-1 sm:grid-cols-3 p-6 gap-4 md:gap-10 lg:gap-16 xl:gap-32 ">
        {ourProcess.map((entry) => {
          return (
            <div
              key={entry.id}
              className="flex flex-col rounded-xl p-2 gap-2 transition ease-in-out hover:scale-105 duration-200 hover:ring-4 ring-cws-bg-2/80"
            >
              <Image src={entry.imgSrc} alt={entry.imgAlt} />
              <span className="text-3xl sm:text-2xl">{entry.label}</span>
              <span className="text-slate-100 text-lg sm:text-base">
                {entry.description}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
