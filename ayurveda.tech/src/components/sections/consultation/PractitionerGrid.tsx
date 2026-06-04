"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import PractitionerCard from "@/components/ui/PractitionerCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { practitioners } from "@/data/practitioners";

export default function PractitionerGrid() {
  return (
    <Section background="light" id="practitioners">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>MEET OUR PRACTITIONERS</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Guided by Experts, Rooted in Tradition.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every practitioner on our platform is verified, certified, and committed
            to authentic Ayurvedic care.
          </p>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {practitioners.map((p) => (
          <StaggerItem key={p.id}>
            <PractitionerCard
              name={p.name}
              credentials={p.credentials}
              specialisation={p.specialisation}
              experience={p.experience}
              bio={p.bio}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
