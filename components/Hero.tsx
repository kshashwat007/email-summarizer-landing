import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Header from "./Header";
import heroImage from "../public/assets/heroImage.png"
import chat from "../public/assets/chat.svg";
import calender from "../public/assets/calender.svg";
import tabler from "../public/assets/tabler.svg";
import ganalytics from "../public/assets/ganalytics.svg";
import ButtonLead from "@/components/ButtonLead";
// import VectorLine from '../public/assets/Vector 148.png'

const Hero = () => {
  return (
    <div className="hero-landing">
      <Header />
      <div className="main-hero-section max-w-5xl relative flex flex-col gap-y-2 items-center justify-center mx-auto py-14 px-10 md:px-10 xl:px-0 font-mono">
        <div className="hero-content lg:px-5 flex flex-col items-center gap-y-5 ">
          <Image src={chat} className="absolute top-0 left-0" alt="" />
          <Image src={calender} className="absolute top-0 right-0" alt="" />
          <Image src={tabler} className="absolute bottom-0 left-0" alt="" />
          <Image src={ganalytics} className="absolute bottom-0 right-0" alt="" />

          <h1 className="text-2xl text-black md:text-5xl xl:text-[60px] leading-[1.2] md:max-w-xl mx-auto text-center lg:max-w-3xl font-semibold">
            Turn lenghty emails into actionable summaries.
          </h1>
          <p className="text-md lg:text-lg max-w-[16rem] mx-auto md:max-w-xl md:mx-auto lg:max-w-2xl text-black text-center">
            Let AI summarize your unread emails into actionable task lists. Do more, read less.
          </p>
          

          <ButtonLead />
          <TestimonialsAvatars />
          {/* <button className="bg-black text-white w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
            Get Started
          </button> */}
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-5 lg:p-10 max-w-6xl h-xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <Image src={heroImage} className="rounded-xl" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
      {/* <div className="flex items-baseline">
        <div className="flex flex-col items-center">
          <span className="font-bold text-purple-600 font-mono" style={{ fontSize: '45px' }}>Three</span>
          <Image src={VectorLine} alt="Decorative squiggly line" />
        </div>
        <span className="text-black pl-4 font-mono" style={{ fontSize: '45px' }}> easy steps</span>
      </div> */}
    </div>
    </div>
  );
};

export default Hero;
