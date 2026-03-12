import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <SelectedWorkSection />
      <DifferenceSection />
      <ProcessSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToAction />
    </>
  );
}
