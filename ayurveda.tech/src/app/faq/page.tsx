import type { Metadata } from "next";
import FAQHero from "@/components/sections/faq/FAQHero";
import FAQMainSection from "@/components/sections/faq/FAQMainSection";
import FAQCTASection from "@/components/sections/faq/FAQCTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Ayurveda.Tech",
  description:
    "Find answers to common questions about Ayurveda.Tech, online consultations, doshas (Vata/Pitta/Kapha), practitioner qualifications, and more.",
  openGraph: {
    title: "FAQ | Ayurveda.Tech",
    description:
      "Everything you need to know about Ayurveda.Tech consultations, doshas, and our platform.",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQMainSection />
      <FAQCTASection />
    </>
  );
}
