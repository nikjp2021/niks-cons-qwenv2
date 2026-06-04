"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ConsultationFAQ() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-8">
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Questions About Consultations?
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="max-w-2xl mx-auto bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8">
          <FAQAccordion
            question="Do I need to know my dosha before booking?"
            answer="Not at all. Your first Dosha Assessment consultation will determine your Prakriti (unique constitution) and current imbalances. Many clients book their first session precisely to discover their dosha."
          />
          <FAQAccordion
            question="What happens after I book?"
            answer="You'll receive a confirmation email with a link to your secure video consultation. You'll also get a pre-consultation form to help your practitioner understand your health history and goals."
          />
          <FAQAccordion
            question="Are the consultations covered by insurance?"
            answer="Coverage varies by provider and region. We provide detailed invoices that you can submit to your insurance company for potential reimbursement."
          />
          <FAQAccordion
            question="What if I need to reschedule?"
            answer="You can reschedule up to 24 hours before your appointment at no charge. Late cancellations may incur a nominal fee."
          />
        </div>
      </ScrollReveal>
      <ScrollReveal className="text-center mt-8">
        <Button href="/faq" variant="ghost">
          View Full FAQ →
        </Button>
      </ScrollReveal>
    </Section>
  );
}
