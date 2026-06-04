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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.08)" size={500} top="-200px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="max-w-3xl">
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-[var(--text-100)]">
              Real businesses, real outcomes
            </h1>
            <p className="text-xl text-[var(--text-300)] leading-relaxed">
              See how AI-powered solutions have transformed operations and driven growth for businesses across 15+ countries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies — Alternating layouts */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <StaggerContainer className="space-y-8" staggerDelay={0.08}>
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <StaggerItem key={cs.id}>
                  <div
                    id={cs.id}
                    className="scroll-mt-28 relative rounded-3xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 overflow-hidden group hover:border-[var(--surface-4)] transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image — alternates sides */}
                      <div className={`relative aspect-[16/9] lg:aspect-auto ${!isEven ? 'lg:order-2' : ''}`}>
                        <Image
                          src={csImages[i % csImages.length]}
                          alt={csAlts[i % csAlts.length]}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(${isEven ? '135deg' : '225deg'}, color-mix(in srgb, ${cs.accentColor} 20%, transparent) 0%, transparent 50%)`,
                          }}
                        />
                        <span
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm"
                          style={{
                            background: `color-mix(in srgb, ${cs.accentColor} 20%, transparent)`,
                            color: cs.accentColor,
                          }}
                        >
                          {cs.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs text-[var(--text-500)]">{cs.location}</span>
                          <span className="text-lg">{cs.icon}</span>
                        </div>

                        <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4 text-[var(--text-100)]">
                          {cs.title}
                        </h2>

                        <p className="text-[var(--text-300)] leading-relaxed mb-6">
                          {cs.challenge}
                        </p>

                        <div className="space-y-3 mb-6">
                          {cs.results.map((result, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <TrendingUp
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: cs.accentColor }}
                              />
                              <span className="text-sm text-[var(--text-200)]">{result}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-2)] text-[var(--text-400)] border border-[var(--surface-3)]/30"
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

      {/* Bottom CTA — Asymmetric */}
      <section className="py-20 lg:py-28 bg-[var(--surface-1)]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
              <div>
                <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-5 text-[var(--text-100)]">
                  Want to be our next success story?
                </h2>
                <p className="text-lg text-[var(--text-300)] leading-relaxed mb-8 max-w-xl">
                  Let&apos;s discuss your project and create a tailored strategy for your business.
                </p>
                <MagneticButton
                  href="/get-a-quote"
                  className="group inline-flex items-center gap-2.5 px-10 py-5 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-lg hover:bg-[var(--color-brand-400)] transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/workspace.webp"
                    alt="Modern workspace ready for your next AI project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
