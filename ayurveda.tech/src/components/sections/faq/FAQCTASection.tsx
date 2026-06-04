"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FAQCTASection() {
  return (
    <section className="cta-gradient relative overflow-hidden">
      <Container className="py-16 md:py-20 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-h2 font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="font-body text-body-lg text-white/80 leading-[var(--lh-body-lg)] max-w-xl mx-auto mb-8">
            We&apos;re here to help. Reach out to our support team and we&apos;ll get back
            to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" className="bg-white !text-[var(--color-accent)] hover:!bg-[var(--color-surface-alt)]">
              Contact Us →
            </Button>
            <Button href="/consultation" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              Book a Consultation →
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
