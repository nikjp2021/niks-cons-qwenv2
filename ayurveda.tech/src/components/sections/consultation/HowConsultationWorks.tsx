"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const steps = [
  { step: "1", title: "Choose Your Service", desc: "Browse consultation types and select what fits your needs." },
  { step: "2", title: "Select a Practitioner", desc: "Read profiles, credentials, and client reviews. Find your match." },
  { step: "3", title: "Book a Time", desc: "Choose a slot that works for you. Instant confirmation." },
  { step: "4", title: "Meet Online", desc: "Connect via secure video. Your consultation, face-to-face." },
  { step: "5", title: "Get Your Plan", desc: "Receive a personalised wellness plan with diet, lifestyle, and herbal guidance." },
  { step: "6", title: "Follow Up", desc: "Schedule follow-ups and track your progress with ongoing support." },
];

export default function HowConsultationWorks() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Your Consultation, Step by Step.
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="max-w-3xl mx-auto">
        {steps.map((item) => (
          <StaggerItem key={item.step}>
            <div className="flex gap-4 mb-6 pb-6 border-b border-[var(--color-border)] last:border-0">
              <span className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-heading text-h4 font-bold shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-body text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
