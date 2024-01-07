import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitSection from "./Benefit/BenefitSection";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import Testimonials3 from "@/components/Testimonials3";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="idk__28">
      <Hero />
      <Problem />
      <BenefitSection />
      <FeaturesAccordion />
      {/* <Testimonials3 /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
