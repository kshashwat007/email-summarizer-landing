import React from "react";
import benefitImage1 from "../../public/assets/benefit-img1.png"
import benefitImage2 from "../../public/assets/benefit-img2.png";
import benefitImage3 from "../../public/assets/benefit-img3.png";
import VectorLine from '../../public/assets/Vector 148.png'
import Image from "next/image";

function BenefitSection() {
  return (
    <section className="benefit__section max-w-4xl mx-auto relative mt-12 flex flex-col gap-8">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-bold text-purple-600 font-mono" style={{ fontSize: '45px' }}>Three</span>
          <Image src={VectorLine} alt="Decorative squiggly line" />
        </div>
        <span className="text-black pl-4 font-mono pb-2" style={{ fontSize: '45px' }}> easy steps</span>
      </div>
      <div className="bg-[#2FC7F7] flex flex-col md:flex-row gap-y-2 py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-40 w-[408px] h-[408px] bg-blue-700 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 hidden md:flex">
          <Image src={benefitImage1} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 lg:pl-0 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Connect your inbox
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Connect by logging in using your google account and add your OpenAI key.
          </p>
          {/* <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a> */}
        </div>
      </div>
      <div className="bg-[#F73090] flex py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-0 w-[408px] h-[408px] bg-lime-400 bg-opacity-50 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Fetch Unread Emails
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Our system automatically retrieves unread emails from your primary inbox for the past week. This ensures you get summaries of the most recent and relevant emails
          </p>
          {/* <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a> */}
        </div>
        <div className="w-full lg:w-1/2 hidden md:flex justify-end">
          <Image src={benefitImage2} alt="" />
        </div>
      </div>
      <div className="bg-[#4C30F7] flex py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-40 w-[408px] h-[408px] bg-purple-600 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Receive Summaries and Action items
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Relax as our AI processes your emails. You will start receiving concise summaries and action items on a periodic basis.
          </p>
          {/* <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a> */}
        </div>
        <div className="w-full lg:w-1/2 hidden md:flex items-end justify-end">
          <Image src={benefitImage3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
