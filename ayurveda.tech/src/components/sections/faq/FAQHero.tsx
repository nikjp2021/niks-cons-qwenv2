"use client";

import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FAQHero() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-8">
          <h1 className="font-heading text-h1 font-bold text-[var(--color-text-primary)] mb-4">
            Questions? We&apos;ve Got Answers.
          </h1>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
            Everything you need to know about Ayurveda.Tech, consultations, doshas,
            and more.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
