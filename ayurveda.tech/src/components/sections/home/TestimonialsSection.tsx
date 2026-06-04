"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section background="light" id="testimonials">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel>SUCCESS STORIES</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Real People, Real Results.
          </h2>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <StaggerItem key={t.id}>
            <TestimonialCard
              quote={t.quote}
              author={t.author}
              role={t.role}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal className="text-center mt-10">
        <Button href="/about" variant="ghost">
          Read More Success Stories →
        </Button>
      </ScrollReveal>
    </Section>
  );
}
