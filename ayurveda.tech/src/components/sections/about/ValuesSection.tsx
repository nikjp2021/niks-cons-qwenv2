"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  {
    icon: "authenticity",
    title: "Authenticity",
    description: "We only work with certified, verified practitioners who follow genuine Ayurvedic principles. No shortcuts.",
  },
  {
    icon: "accessibility",
    title: "Accessibility",
    description: "Quality Ayurvedic care should not be limited by geography. We make it available to anyone with an internet connection.",
  },
  {
    icon: "integrity",
    title: "Integrity",
    description: "Transparent pricing, honest guidance, and no unnecessary upselling. Your wellness is our only priority.",
  },
  {
    icon: "innovation",
    title: "Innovation",
    description: "We embrace technology to enhance — not replace — the wisdom of Ayurveda. Better tools for better outcomes.",
  },
  {
    icon: "community",
    title: "Community",
    description: "We are building a global community of practitioners and seekers. Collaboration over competition.",
  },
  {
    icon: "sustainability",
    title: "Sustainability",
    description: "Ayurveda is inherently sustainable. We are committed to eco-friendly practices in every aspect of our operations.",
  },
];

function ValueIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    authenticity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accessibility: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
      </svg>
    ),
    integrity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    innovation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    sustainability: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  };
  return (
    <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-4">
      {iconMap[icon] || <div className="w-8 h-8" />}
    </div>
  );
}

export default function ValuesSection() {
  return (
    <Section background="alt">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>OUR VALUES</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Principles That Guide Us.
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {values.map((v) => (
          <StaggerItem key={v.title}>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
              <ValueIcon icon={v.icon} />
              <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-2">{v.title}</h3>
              <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">{v.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
