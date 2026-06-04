"use client";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { siteConfig } from "@/data/navigation";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'var(--texture-noise)' }}
      />
      <Container className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <StaggerContainer className="max-w-3xl mx-auto text-center">
          <StaggerItem>
            <Badge variant="accent" className="mb-6">
              Ancient Wisdom for Modern Wellness
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-heading text-display font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] tracking-[var(--ls-display)] mb-6">
              Your Health, Guided by 5,000 Years of Wisdom —{" "}
              <span className="gradient-text">Delivered for Today&apos;s World.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mx-auto mb-10">
              Find your balance with personalised Ayurvedic care from certified
              practitioners. Discover your dosha, book an online consultation,
              and begin a wellness journey rooted in tradition — made possible
              by technology.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/consultation" size="lg">
                Find Your Practitioner
              </Button>
              <Button
                href={siteConfig.links.consultantPortal}
                variant="outline"
                size="lg"
                external
              >
                Join as a Practitioner
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
      <div className="h-8 bg-gradient-to-b from-transparent to-[var(--color-surface)]" />
    </section>
  );
}
