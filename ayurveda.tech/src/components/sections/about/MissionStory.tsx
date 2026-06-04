"use client";

import Container from "@/components/ui/Container";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function MissionStory() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <Container className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <StaggerContainer className="max-w-3xl">
          <StaggerItem>
            <h1 className="font-heading text-display font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] mb-6">
              Bridging{" "}
              <span className="gradient-text">Two Worlds.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] mb-6">
              Ayurveda.Tech was born from a simple belief: that ancient healing wisdom
              shouldn&apos;t be locked in textbooks or restricted to in-person visits.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="space-y-4 font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] max-w-2xl">
              <p>
                We built a platform where traditional knowledge meets modern
                accessibility — where certified practitioners can reach clients
                anywhere, and wellness seekers can find guidance they can trust.
              </p>
              <p>
                Our journey began with a realisation: in a world of generic wellness
                advice and quick-fix health solutions, authentic Ayurvedic guidance
                remained out of reach for most people. Either you had to visit a
                practitioner in person, or you had to navigate a maze of unverified
                online information.
              </p>
              <p>
                We saw an opportunity to bridge that gap. By combining the depth of
                5,000 years of Ayurvedic wisdom with the reach of modern technology,
                we created a space where tradition and innovation work together —
                for the benefit of both seekers and practitioners.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
