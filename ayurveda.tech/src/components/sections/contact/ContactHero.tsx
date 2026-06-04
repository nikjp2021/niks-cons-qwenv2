"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactHero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <Container className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <ScrollReveal>
          <h1 className="font-heading text-display font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] mb-4">
            Get in <span className="gradient-text">Touch.</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-xl">
            Have a question, feedback, or need assistance? We&apos;d love to hear from you.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
