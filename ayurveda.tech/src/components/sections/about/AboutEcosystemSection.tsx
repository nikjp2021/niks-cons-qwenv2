"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/data/navigation";

const ecosystemLinks = [
  { title: "Client Portal", desc: "Book consultations, message practitioners, track your journey", href: siteConfig.links.clientPortal },
  { title: "Consultant Portal", desc: "Manage your practice, reach clients, grow your impact", href: siteConfig.links.consultantPortal },
  { title: "Ayurveda Library", desc: "Explore thousands of texts, papers, and educational resources", href: siteConfig.links.library },
  { title: "Ayurveda Store", desc: "Authentic herbs, oils, and wellness products", href: siteConfig.links.store },
];

export default function AboutEcosystemSection() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>OUR ECOSYSTEM</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            One Platform, Infinite Possibilities.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Our ecosystem spans consultations, education, community, and products —
            all working together to support your wellness.
          </p>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ecosystemLinks.map((item) => (
          <StaggerItem key={item.title}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="block no-underline">
              <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="font-body text-body-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                <span className="font-ui text-ui-sm font-medium text-[var(--color-accent)] mt-2 inline-block">Open ↗</span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
