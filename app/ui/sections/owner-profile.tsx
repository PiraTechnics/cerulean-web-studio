import Image from "next/image";
import { ownerInfo } from "@/app/data";

/* const person = {
  name: "Devin Younge",
  role: "Designer & Developer",
  imageUrl: profile_img,
  bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  twitterUrl: "#",
  linkedinUrl: "#",
}; */

export const OwnerProfile = () => {
  return (
    <section className="py-12 text-slate-100">
      <div className="mx-auto p-12 max-w-7xl flex flex-col gap-8">
        <h2 className="text-3xl tracking-tight sm:text-4xl text-center">
          Meet the Owner
        </h2>
        <div className=" bg-cws-bg-2/50 flex flex-col gap-10 py-10 px-8 rounded-2xl sm:flex-row">
          <Image
            className="aspect-[4/5] w-52 rounded-2xl object-cover"
            src={ownerInfo.profile}
            alt={ownerInfo.profileAlt}
          />
          <div className="max-w-xl flex-auto">
            <h3 className="text-2xl font-semibold leading-8 tracking-tight">
              {ownerInfo.name}
            </h3>
            <p className="leading-7 text-slate-300">{ownerInfo.title}</p>
            <p className="mt-6 text-base leading-7 text-slate-300">
              {ownerInfo.description}
            </p>
            <div className="mt-4 flex gap-0.5">
              {ownerInfo.socials.map((entry) => {
                return (
                  <a
                    key={entry.id}
                    href={entry.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-1 rounded-full hover:bg-cws-bg-1"
                  >
                    <entry.icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
