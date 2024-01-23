import { highlights } from "@/app/data";

export const Mission = () => {
  return (
    <section className="text-center text-slate-100 bg-cws-bg-2/50 my-4 sm:my-6 rounded-md py-16 px-8 sm:px-32 md:px-16 lg:px-4">
      <div className="text-5xl sm:text-4xl mb-16">Our Mission</div>
      <div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-16 lg:gap-8 px-2">
        {highlights.map((highlight) => {
          return (
            <div
              key={highlight.id}
              className="flex flex-col items-center gap-2"
            >
              <highlight.icon className="w-16 p-1 rounded-xl bg-gradient-to-r from-cws-primary to-cws-bg-1 ring-cws-bg-1" />
              <div className="text-3xl lg:text-2xl font-semibold bg-gradient-to-r from-cws-primary to-cws-bg-1 text-transparent bg-clip-text">
                {highlight.label}
              </div>
              <div className="md:text-start text-xl md:text-lg lg:text-base">
                {highlight.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
