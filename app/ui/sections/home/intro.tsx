import Image from "next/image";
import IdeaImg from "@/public/idea.svg";
import BuildingImg from "@/public/building.svg";
import FinishedImg from "@/public/finished.svg";

export const Intro = () => {
	return (
		<section className="">
			<div className=" flex flex-col sm:flex-row p-12 gap-4 md:gap-10 lg:gap-16 xl:gap-32 text-center text-slate-300">
				<div className="flex flex-col">
					<Image src={IdeaImg} alt="communicating and idea" />
					<div className="text-2xl font-bold">1.</div>
					<span className="text-lg">Tell us your idea</span>
				</div>
				<div className="flex flex-col">
					<Image src={BuildingImg} alt="communicating and idea" />
					<div className="text-2xl font-bold">2.</div>
					<span className="text-lg">We&#39;ll Build it for you</span>
				</div>
				<div className="flex flex-col">
					<Image src={FinishedImg} alt="communicating and idea" />
					<div className="text-2xl font-bold">3.</div>
					<span className="text-lg">Enjoy the Results!</span>
				</div>
			</div>
		</section>
	);
};
