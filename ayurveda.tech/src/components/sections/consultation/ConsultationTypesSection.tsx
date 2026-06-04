"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingCard from "@/components/ui/PricingCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { consultationTypes } from "@/data/consultations";

export default function ConsultationTypesSection() {
  return (
    <Section background="alt">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>CONSULTATION TYPES</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Care That Adapts to Your Needs.
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {consultationTypes.map((ct) => (
          <StaggerItem key={ct.id}>
            <PricingCard
              title={ct.title}
              description={ct.description}
              duration={ct.duration}
              price={ct.price}
              cta={ct.cta}
              featured={ct.featured}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
