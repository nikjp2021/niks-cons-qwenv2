"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import EcosystemLink from "@/components/ui/EcosystemLink";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ecosystemItems } from "@/data/ecosystem";

export default function PlatformOverviewSection() {
  return (
    <Section background="alt" id="ecosystem">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel>OUR ECOSYSTEM</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Beyond Consultations — A Complete Wellness Ecosystem.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mx-auto">
            Ayurveda.Tech is more than a booking platform. It&apos;s a growing
            ecosystem of resources, community, and knowledge — all rooted in
            authentic Ayurvedic tradition.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {ecosystemItems.map((item) => (
          <StaggerItem key={item.title}>
            <EcosystemLink
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
