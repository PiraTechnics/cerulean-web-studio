import { services } from "@/app/data";
import Link from "next/link";

export const OurServices = () => {
  return (
    <section className="text-slate-100 px-8">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div
          id="intro-content"
          className="bg-cws-bg-2/50 rounded-xl py-8 px-2 h-fit xl:w-1/3"
        >
          <div className="text-4xl text-center ">What We Do</div>
          <div className="mt-4 px-8 text-lg">
            Whether you are an established business looking to update your web
            presence, a brand new enterprise looking for a digital foothold, or
            a creative in need of a stylish custom portfolio, Cerulean Web
            Studio has you covered.
          </div>
        </div>
        <div
          id="intro-key"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 bg-white/40 rounded-xl p-4 gap-6 font-sans min-w-fit max-w-full justify-center xl:text-lg text-white"
        >
          {services.map((entry) => {
            return (
              <Link
                key={entry.name}
                href={`#${entry.link}`}
                className="flex items-center gap-4 rounded-lg px-2 py-0.5 hover:text-cws-primary hover:bg-white/70"
              >
                <div className="w-10">
                  <entry.icon />
                </div>
                <p>{entry.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="my-16 flex flex-col gap-8 lg:w-5/6 xl:w-2/3 mx-auto">
        {services.map((entry) => {
          return (
            <div
              key={`${entry.name}-content`}
              id={entry.link}
              className="bg-cws-bg-2/50 rounded-xl p-8 shadow-lg"
            >
              <div className="text-3xl font-semibold mb-4 underline tracking-wide">
                {entry.name}
              </div>
              <div className="text-lg text-slate-200">{entry.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
