import type { Metadata } from "next";
import MissionStory from "@/components/sections/about/MissionStory";
import TeamSection from "@/components/sections/about/TeamSection";
import SanskritValuesSection from "@/components/sections/about/SanskritValuesSection";
import AboutEcosystemSection from "@/components/sections/about/AboutEcosystemSection";
import DifferentiatorsSection from "@/components/sections/about/DifferentiatorsSection";

export const metadata: Metadata = {
  title: "About Ayurveda.Tech — Our Mission, Team & Values",
  description:
    "Learn about Ayurveda.Tech's mission to bridge ancient Ayurvedic wisdom with modern technology. Meet our team of certified practitioners and discover our values.",
  openGraph: {
    title: "About Ayurveda.Tech — Bridging Ancient Wisdom & Modern Wellness",
    description:
      "Meet the team behind Ayurveda.Tech and discover how we're making authentic Ayurvedic care accessible to everyone.",
  },
};

export default function AboutPage() {
  return (
    <>
      <MissionStory />
      <TeamSection />
      <SanskritValuesSection />
      <AboutEcosystemSection />
      <DifferentiatorsSection />
    </>
  );
}
