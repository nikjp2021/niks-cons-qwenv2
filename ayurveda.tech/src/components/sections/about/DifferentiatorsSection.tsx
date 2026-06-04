"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const differentiators = [
  { title: "Verified Practitioners", desc: "Every practitioner is credential-verified and reviewed. No unqualified listings." },
  { title: "End-to-End Platform", desc: "Booking, payments, video consultations, follow-ups — all in one place." },
  { title: "Personalised Plans", desc: "Not generic advice — every plan is built around your unique dosha and needs." },
  { title: "Global Library Access", desc: "Free access to one of the world's largest digital Ayurveda libraries." },
  { title: "Dual Community", desc: "Whether you seek wellness or offer it, you belong here." },
];

export default function DifferentiatorsSection() {
  return (
    <Section background="alt">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>WHY AYURVEDA.TECH</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Why Ayurveda.Tech?
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {differentiators.map((d) => (
          <StaggerItem key={d.title}>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)]">
              <h3 className="font-heading text-h4 font-semibold text-[var(--color-primary)] mb-2">{d.title}</h3>
              <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">{d.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ScrollReveal className="text-center mt-10">
        <Button href="/consultation">Begin Your Journey Today →</Button>
      </ScrollReveal>
    </Section>
  );
}
