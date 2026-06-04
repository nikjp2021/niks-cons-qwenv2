"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { pricingPackages } from "@/data/consultations";

export default function PricingPackagesSection() {
  return (
    <Section background="alt" id="pricing">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>INVEST IN YOUR WELLNESS</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Transparent Pricing, No Surprises.
          </h2>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPackages.map((pkg) => (
          <StaggerItem key={pkg.id}>
            <div
              className={`bg-[var(--color-surface-card)] border rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)] ${
                pkg.featured
                  ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {pkg.featured && (
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[var(--color-accent)] text-white font-ui text-caption font-semibold">
                  BEST VALUE
                </span>
              )}
              <h3 className="font-heading text-h3 font-bold text-[var(--color-text-primary)] mb-1">
                {pkg.plan}
              </h3>
              <p className="font-ui text-ui-sm text-[var(--color-text-muted)] mb-1">{pkg.sessions}</p>
              <p className="font-ui text-ui-sm text-[var(--color-accent)] font-semibold mb-3">{pkg.savings}</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-heading text-h2 font-bold text-[var(--color-primary)]">{pkg.price}</span>
              </div>
              <p className="font-body text-body-sm text-[var(--color-text-secondary)] mb-4">
                {pkg.bestFor}
              </p>
              <Button
                variant={pkg.featured ? "primary" : "secondary"}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
