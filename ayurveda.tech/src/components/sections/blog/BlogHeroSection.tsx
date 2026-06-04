"use client";

import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function BlogHeroSection() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="font-heading text-h1 font-bold text-[var(--color-text-primary)] mb-4">
            The Ayurveda.Tech Journal.
          </h1>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mx-auto">
            Explore dosha guides, seasonal wellness tips, practitioner insights, and
            the latest in Ayurvedic living — written by experts, for modern lives.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
