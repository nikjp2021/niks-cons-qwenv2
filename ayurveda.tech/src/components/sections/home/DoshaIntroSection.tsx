"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import DoshaCard from "@/components/ui/DoshaCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { doshas } from "@/data/doshas";

export default function DoshaIntroSection() {
  return (
    <Section background="light" id="doshas">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel>KNOW YOUR BODY</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Your Body Has a Blueprint. It&apos;s Called Your Dosha.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mx-auto">
            Vata, Pitta, Kapha — three energies that shape your physical,
            mental, and emotional health. Understanding your dominant dosha is
            the first step toward balanced, personalised wellness.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {doshas.map((dosha) => (
          <StaggerItem key={dosha.id}>
            <DoshaCard
              dosha={dosha.id}
              name={dosha.name}
              elements={dosha.elements}
              description={dosha.description}
              characteristics={dosha.characteristics}
              focusAreas={dosha.focusAreas}
              cta={dosha.cta}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal className="text-center mt-10">
        <p className="font-body text-body text-[var(--color-text-secondary)] mb-4">
          Not sure where to start?
        </p>
        <Button href="/consultation#dosha-assessment" variant="ghost">
          Take the Dosha Quiz →
        </Button>
      </ScrollReveal>
    </Section>
  );
}
