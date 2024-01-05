import React from "react";
import benefitImage1 from "../assets/benefit-img1.png";
import benefitImage2 from "../assets/benefit-img2.png";
import benefitImage3 from "../assets/benefit-img3.png";

function BenefitSection() {
  return (
    <section className="benefit__section max-w-4xl grid gap-10 mx-auto relative">
      <div className="bg-[#2FC7F7] flex flex-col md:flex-row gap-y-2 py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-40 w-[408px] h-[408px] bg-blue-700 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 hidden md:flex">
          <img src={benefitImage1} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 lg:pl-0 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            User-generated content
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Encourage customers to share photos or videos of themselves using
            the product and tag your brand
          </p>
          <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a>
        </div>
      </div>
      <div className="bg-[#F73090] flex py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-0 w-[408px] h-[408px] bg-lime-400 bg-opacity-50 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            User-generated content
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Encourage customers to share photos or videos of themselves using
            the product and tag your brand
          </p>
          <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a>
        </div>
        <div className="w-full lg:w-1/2 hidden md:flex justify-end">
          <img src={benefitImage2} alt="" />
        </div>
      </div>
      <div className="bg-[#4C30F7] flex py-10 md:pt-10 lg:rounded-xl relative">
        <div className="hidden lg:block absolute top-0 left-40 w-[408px] h-[408px] bg-purple-600 rounded-full blur-[300px]" />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-start justify-center px-20 ">
          <div className="bg-white/20 backdrop-blur-md h-8 w-8 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Influencer collaboration
          </h2>
          <p className="max-w-sm mx-0 text-white">
            Partner with influencers or bloggers who have a strong following in
            your target market to promote the product on their social media
            accounts.
          </p>
          <a
            href=""
            className="bg-white text-sky-300 font-medium px-5 py-2 rounded-lg"
          >
            Join Free
          </a>
        </div>
        <div className="w-full lg:w-1/2 hidden md:flex items-end justify-end">
          <img src={benefitImage3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
