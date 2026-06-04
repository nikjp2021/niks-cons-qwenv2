"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const teamMembers = [
  { name: "Dr. Sanjay Menon", role: "Chief Ayurvedic Officer", bio: "25+ years of practice. Former head of department at a leading Ayurvedic college. Guides practitioner vetting and clinical standards.", initials: "SM" },
  { name: "Ananya Patel", role: "CEO & Co-Founder", bio: "Technology entrepreneur with a deep personal commitment to Ayurveda. Built the platform to make authentic care accessible.", initials: "AP" },
  { name: "Vaidya Lakshmi Rao", role: "Head of Practitioner Network", bio: "Third-generation Ayurvedic practitioner. Oversees practitioner onboarding, training, and quality assurance.", initials: "LR" },
  { name: "Rohan Desai", role: "CTO & Co-Founder", bio: "Built scalable health platforms for over a decade. Ensures your consultations are secure, seamless, and reliable.", initials: "RD" },
];

export default function TeamSection() {
  return (
    <Section background="light">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>OUR TEAM</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            The People Behind the Platform.
          </h2>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            A diverse team of Ayurvedic experts, technologists, and wellness advocates —
            united by a shared mission.
          </p>
        </div>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <StaggerItem key={member.name}>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <span className="font-heading text-h3 font-bold text-[var(--color-accent)]">{member.initials}</span>
              </div>
              <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
              <p className="font-ui text-ui-sm font-medium text-[var(--color-accent)] mb-3">{member.role}</p>
              <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">{member.bio}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
