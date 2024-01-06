import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitSection from "./Benefit/BenefitSection";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";

export default function Page() {
  return (
    <div className="idk__28">
      <Hero />
      <Problem />
      <BenefitSection />
      <FeaturesAccordion />
    </div>
  );
}
