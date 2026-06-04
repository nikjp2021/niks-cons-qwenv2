"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  { sanskrit: "Prakriti", english: "Unique Constitution", meaning: "No two people are alike. Your wellness plan is built around YOUR unique body-mind type." },
  { sanskrit: "Nidana Parivarjana", english: "Avoid the Cause", meaning: "We don't just treat symptoms. We identify and address the root causes of imbalance." },
  { sanskrit: "Swasthasya Swasthya Rakshanam", english: "Preserve Health", meaning: "True wellness is proactive. We help you maintain balance before disease takes hold." },
  { sanskrit: "Shareeram, Indriyam, Satvam, Atma", english: "Body, Senses, Mind, Spirit", meaning: "We look at the whole you — not just isolated symptoms or complaints." },
  { sanskrit: "Brahma Muhurta", english: "The Hour of Creation", meaning: "Both our practitioners and platform evolve constantly, guided by new research and ancient texts." },
];

export default function SanskritValuesSection() {
  return (
    <Section background="alt">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>OUR VALUES</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Rooted in Ayurvedic Principles.
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="max-w-4xl mx-auto space-y-4">
        {values.map((v) => (
          <StaggerItem key={v.sanskrit}>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/3">
                <p className="font-heading text-h4 font-bold text-[var(--color-primary)]">{v.sanskrit}</p>
                <p className="font-ui text-ui-sm font-medium text-[var(--color-accent)]">{v.english}</p>
              </div>
              <p className="font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] md:w-2/3">
                {v.meaning}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
