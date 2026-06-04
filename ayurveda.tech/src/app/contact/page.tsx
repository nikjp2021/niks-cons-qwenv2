import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactCTASection from "@/components/sections/contact/ContactCTASection";

export const metadata: Metadata = {
  title: "Contact Us — Ayurveda.Tech",
  description:
    "Get in touch with the Ayurveda.Tech team. Send us a message, book a consultation, or join as a practitioner. We're here to help.",
  openGraph: {
    title: "Contact Ayurveda.Tech",
    description: "Have a question? Reach out to our team. We'd love to hear from you.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactCTASection />
    </>
  );
}
