import type { Metadata } from "next";
import ConsultationHero from "@/components/sections/consultation/ConsultationHero";
import HowConsultationWorks from "@/components/sections/consultation/HowConsultationWorks";
import ConsultationTypesSection from "@/components/sections/consultation/ConsultationTypesSection";
import PractitionerGrid from "@/components/sections/consultation/PractitionerGrid";
import PricingPackagesSection from "@/components/sections/consultation/PricingPackagesSection";
import ConsultationFAQ from "@/components/sections/consultation/ConsultationFAQ";

export const metadata: Metadata = {
  title: "Online Ayurvedic Consultations — Book Your Dosha Assessment",
  description:
    "Book online Ayurvedic consultations with certified practitioners. Dosha assessment, personalised wellness plans, follow-up support. Start from ₹499.",
  openGraph: {
    title: "Online Ayurvedic Consultations | Ayurveda.Tech",
    description:
      "Expert Ayurvedic care from anywhere. Book your consultation with a certified practitioner today.",
  },
};

export default function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <HowConsultationWorks />
      <ConsultationTypesSection />
      <PractitionerGrid />
      <PricingPackagesSection />
      <ConsultationFAQ />
    </>
  );
}
