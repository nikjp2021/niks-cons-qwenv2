"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactCTASection() {
  return (
    <section className="cta-gradient relative overflow-hidden">
      <Container className="py-16 md:py-20 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-h2 font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="font-body text-body-lg text-white/80 leading-[var(--lh-body-lg)] max-w-xl mx-auto mb-8">
            Book your first consultation today and discover what authentic Ayurvedic
            care can do for you.
          </p>
          <Button href="/consultation" variant="primary" className="bg-white !text-[var(--color-accent)] hover:!bg-[var(--color-surface-alt)]">
            Book a Consultation →
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
