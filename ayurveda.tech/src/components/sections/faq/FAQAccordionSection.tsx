"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { faqCategories } from "@/data/faq";
import { faqCategories as faqData } from "@/data/faq";

const categoryLabels: Record<string, string> = {
  general: "General Questions",
  consultations: "Consultations & Booking",
  practitioners: "Practitioners & Quality",
  dosha: "Dosha & Assessments",
  technical: "Technical & Privacy",
};

export default function FAQAccordionSection() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Everything You Need to Know.
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto space-y-8">
        {faqCategories.map((category) => (
          <ScrollReveal key={category.id}>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8">
              <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-4">
                {category.label}
              </h3>
              {category.questions.map((item, index) => (
                <FAQAccordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
