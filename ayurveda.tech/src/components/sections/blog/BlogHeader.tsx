"use client";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function BlogHeader() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <Container className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
        <StaggerContainer className="max-w-3xl">
          <StaggerItem>
            <Badge variant="accent" className="mb-6">AYURVEDA.TECH BLOG</Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-heading text-display font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] mb-6">
              Ayurvedic Wisdom,{" "}
              <span className="gradient-text">Delivered Weekly.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mb-6">
              Expert insights on doshas, diet, daily routines, herbal remedies, and
              living an Ayurvedic lifestyle in the modern world.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
