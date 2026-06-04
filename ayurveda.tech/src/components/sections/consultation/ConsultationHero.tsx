"use client";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function ConsultationHero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <Container className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <StaggerContainer className="max-w-3xl">
          <StaggerItem>
            <Badge variant="accent" className="mb-6">
              ONLINE AYURVEDIC CONSULTATIONS
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-heading text-display font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] mb-6">
              Expert Ayurvedic Care,{" "}
              <span className="gradient-text">From Anywhere.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mb-10">
              Connect with certified Ayurvedic practitioners through secure video
              consultations. Get a personalised wellness plan tailored to your unique
              constitution — without leaving your home.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/consultation" size="lg">
                Book a Consultation
              </Button>
              <Button href="#practitioners" variant="ghost" size="lg">
                Explore Practitioners →
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
