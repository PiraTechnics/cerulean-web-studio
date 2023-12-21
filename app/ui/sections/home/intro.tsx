import Image from "next/image";
import IdeaImg from "@/public/idea.svg";
import BuildingImg from "@/public/building.svg";
import FinishedImg from "@/public/finished.svg";

export const Intro = () => {
	return (
		<section className="">
			<div className=" flex flex-col sm:flex-row p-12 gap-4 md:gap-10 lg:gap-16 xl:gap-32 text-center text-slate-100">
				<div className="flex flex-col bg-white/40 rounded-xl pb-4 px-2">
					<Image src={IdeaImg} alt="communicating and idea" />
					<div className="text-3xl font-bold">1.</div>
					<span className="text-2xl">Tell us your idea</span>
				</div>
				<div className="flex flex-col bg-white/40 rounded-xl pb-4 px-2">
					<Image src={BuildingImg} alt="working on the computer" />
					<div className="text-3xl font-bold">2.</div>
					<span className="text-2xl">We&#39;ll build it for you</span>
				</div>
				<div className="flex flex-col bg-white/40 rounded-xl pb-4 px-2">
					<Image src={FinishedImg} alt="Enoying a web browsing experience" />
					<div className="text-3xl font-bold">3.</div>
					<span className="text-2xl">Enjoy the Results!</span>
				</div>
			</div>
		</section>
	);
};
