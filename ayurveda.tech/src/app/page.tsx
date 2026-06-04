import HeroSection from "@/components/sections/home/HeroSection";
import DoshaIntroSection from "@/components/sections/home/DoshaIntroSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import PlatformOverviewSection from "@/components/sections/home/PlatformOverviewSection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DoshaIntroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PlatformOverviewSection />
      <FinalCTASection />
    </>
  );
}
