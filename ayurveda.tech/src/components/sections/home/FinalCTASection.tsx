"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FinalCTASection() {
  return (
    <section className="cta-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'var(--texture-noise)' }}
      />
      <Container className="py-20 md:py-28 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-h2 font-bold text-[var(--color-text-on-accent)] mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-on-accent)]/80 leading-[var(--lh-body-lg)] max-w-xl mx-auto mb-8">
            Your first consultation is your opportunity to understand your unique
            constitution and create a plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/consultation"
              variant="primary"
              size="lg"
              className="bg-white !text-[var(--color-accent)] hover:bg-[var(--color-surface-alt)] !shadow-lg"
            >
              Book a Consultation — Starting at ₹499
            </Button>
            <Button href="/about" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              Learn More About Our Practitioners →
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
