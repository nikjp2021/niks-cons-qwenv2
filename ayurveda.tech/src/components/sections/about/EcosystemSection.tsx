"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ecosystemFeatures = [
  {
    title: "Secure Video Platform",
    desc: "HIPAA-compliant, end-to-end encrypted video consultations that work seamlessly across devices.",
  },
  {
    title: "Unified Health Profile",
    desc: "Your dosha assessment, consultation history, wellness plans, and progress — all in one place.",
  },
  {
    title: "Smart Practitioner Matching",
    desc: "Our algorithm suggests the best practitioner match based on your unique health needs and goals.",
  },
  {
    title: "Community Forums",
    desc: "Connect with fellow wellness seekers, share experiences, and learn from community wisdom.",
  },
  {
    title: "Resource Library",
    desc: "Curated articles, guides, and video content on Ayurvedic principles, diet, lifestyle, and more.",
  },
  {
    title: "Follow-up & Progress Tools",
    desc: "Stay on track with scheduled follow-ups, progress tracking, and ongoing support from your practitioner.",
  },
];

export default function EcosystemSection() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>PLATFORM ECOSYSTEM</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Everything You Need, One Platform.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Beyond consultations, Ayurveda.Tech is a complete wellness ecosystem
            designed to support your journey every step of the way.
          </p>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        {ecosystemFeatures.map((f) => (
          <StaggerItem key={f.title}>
            <div className="border border-[var(--color-border)] rounded-[var(--radius-card)] p-5 bg-[var(--color-surface-card)]">
              <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-2">{f.title}</h3>
              <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ScrollReveal className="text-center">
        <Button href="/consultation" size="lg">
          Experience the Platform
        </Button>
      </ScrollReveal>
    </Section>
  );
}
