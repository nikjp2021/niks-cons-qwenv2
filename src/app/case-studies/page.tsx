'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { caseStudies } from '@/data/caseStudies';

const csImages = [
  '/images/workspace.webp',
  '/images/team-collab.webp',
  '/images/ai-network.webp',
  '/images/ai-dashboard.webp',
  '/images/data-analytics.webp',
  '/images/ai-automation.webp',
];

const csAlts = [
  'AI-powered logistics dashboard with real-time tracking',
  'Streamlined business operations workspace',
  'Team implementing AI automation workflow',
  'Business intelligence analytics display',
  'Modern digital transformation interface',
  'Data processing automation system',
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(244, 63, 94, 0.08)" size={600} top="-200px" right="-100px" />

        <div className="relative section-container">
          <ScrollReveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-500)]/20 bg-[var(--color-brand-500)]/5 mb-8">
              <span className="text-sm font-medium text-[var(--color-brand-400)]">Case Studies</span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-[var(--text-100)]">
              Real businesses, real outcomes
            </h1>
            <p className="text-xl text-[var(--text-300)] leading-relaxed">
              See how AI-powered solutions have transformed operations and driven growth for businesses across 15+ countries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies — Alternating layouts */}
      <section className="section-padding">
        <div className="section-container">
          <StaggerContainer className="space-y-16" staggerDelay={0.08}>
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <StaggerItem key={cs.id}>
                  <div
                    id={cs.id}
                    className="scroll-mt-28 relative rounded-3xl glass-card overflow-hidden group hover:border-[var(--surface-4)] transition-all duration-[var(--duration-normal)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
                      {/* Image — alternates sides */}
                      <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="absolute inset-0">
                          <Image
                            src={csImages[i % csImages.length]}
                            alt={csAlts[i % csAlts.length]}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(${isEven ? '135deg' : '225deg'}, color-mix(in srgb, ${cs.accentColor} 15%, transparent) 0%, transparent 50%)`,
                          }}
                        />
                        <span
                          className="absolute top-6 left-6 px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm"
                          style={{
                            background: `color-mix(in srgb, ${cs.accentColor} 20%, transparent)`,
                            color: cs.accentColor,
                          }}
                        >
                          {cs.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-10 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="text-xs text-[var(--text-400)] font-medium">{cs.location}</span>
                          <span className="text-lg">{cs.icon}</span>
                        </div>

                        <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-6 text-[var(--text-100)]">
                          {cs.title}
                        </h2>

                        <p className="text-[var(--text-300)] leading-relaxed mb-8 text-base">
                          {cs.challenge}
                        </p>

                        <div className="space-y-4 mb-8">
                          {cs.results.map((result, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <TrendingUp
                                className="w-4 h-4 shrink-0 mt-1"
                                style={{ color: cs.accentColor }}
                              />
                              <span className="text-sm text-[var(--text-200)] leading-relaxed">{result}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--surface-2)] text-[var(--text-400)] border border-[var(--surface-3)]/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-[var(--surface-1)]/50">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-500)]/5 via-transparent to-[var(--color-cyan)]/5" />
              <div className="relative">
                <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-5 text-[var(--text-100)]">
                  Want to be our next success story?
                </h2>
                <p className="text-lg text-[var(--text-300)] leading-relaxed mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss your project and create a tailored strategy for your business.
                </p>
                <MagneticButton
                  href="/get-a-quote"
                  className="glow-button group inline-flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 font-semibold rounded-full text-base sm:text-lg whitespace-nowrap"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
