"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/data/navigation";

const clientSteps = [
  {
    step: "1",
    title: "Discover",
    desc: "Take our dosha quiz, explore practitioner profiles, and learn what Ayurveda can do for you.",
  },
  {
    step: "2",
    title: "Connect",
    desc: "Book a video consultation that fits your schedule. Meet with your practitioner face-to-face, online.",
  },
  {
    step: "3",
    title: "Thrive",
    desc: "Receive your personalised wellness plan — diet, lifestyle, herbal recommendations — with ongoing support.",
  },
];

const practitionerSteps = [
  {
    step: "1",
    title: "Join",
    desc: "Create your profile, set your consultation offerings, and define your practice hours — all in minutes.",
  },
  {
    step: "2",
    title: "Connect",
    desc: "Manage bookings, conduct secure video sessions, track client progress, and handle payments — all in one place.",
  },
  {
    step: "3",
    title: "Grow",
    desc: "Reach clients beyond your local community. Build your reputation with ratings, testimonials, and our platform's audience.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section background="alt" id="how-it-works">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Two Journeys. One Platform.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-2xl mx-auto">
            Whether you&apos;re seeking wellness or offering it — Ayurveda.Tech
            meets you where you are.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Client Path */}
        <ScrollReveal>
          <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-sm)]">
            <h3 className="font-heading text-h3 font-semibold text-[var(--color-accent)] mb-6">
              For Wellness Seekers
            </h3>
            <div className="space-y-6">
              {clientSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-heading text-h4 font-bold shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/consultation">Book Your First Consultation →</Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Practitioner Path */}
        <ScrollReveal delay={0.15}>
          <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-sm)]">
            <h3 className="font-heading text-h3 font-semibold text-[var(--color-primary)] mb-6">
              For Practitioners
            </h3>
            <div className="space-y-6">
              {practitionerSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-heading text-h4 font-bold shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                href={siteConfig.links.consultantPortal}
                variant="secondary"
                external
              >
                Start Your Practice →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
