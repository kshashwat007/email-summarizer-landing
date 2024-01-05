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

const Hero = () => {
  return (
    <div className="hero-landing">
      <Header />
      <div className="main-hero-section max-w-5xl relative flex flex-col gap-y-2 items-center justify-center mx-auto py-14 px-10 md:px-10 xl:px-0">
        <div className="hero-content lg:px-5 flex flex-col items-center gap-y-5 ">
          <Image src={chat} className="absolute top-0 left-0" alt="" />
          <Image src={calender} className="absolute top-0 right-0" alt="" />
          <Image src={tabler} className="absolute bottom-0 left-0" alt="" />
          <Image src={ganalytics} className="absolute bottom-0 right-0" alt="" />

          <h1 className="text-4xl text-white md:text-5xl xl:text-[60px] leading-[1.2] md:max-w-xl mx-auto text-center lg:max-w-3xl font-semibold">
            Unlock the Power of Your Inbox
          </h1>
          <p className="text-sm lg:text-lg max-w-[16rem] mx-auto md:max-w-xl md:mx-auto lg:max-w-2xl text-white text-center">
            Experience Email Like Never Before with AI-Powered Summaries
          </p>
          <ButtonLead />
          {/* <button className="bg-black text-white w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
            Get Started
          </button> */}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <Image src={heroImage} className="rounded-xl" alt="" />
      </div>
    </div>
  );
};

export default Hero;
