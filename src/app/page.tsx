import HeroSection from "@/components/HeroSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <DifferenceSection />
      <ProcessSection />
      <StatsSection />
      <ServicesSection />
      <FaqSection />
      <CallToAction />
    </>
  );
}
