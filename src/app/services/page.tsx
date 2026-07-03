'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Bot, Zap, Globe, Share2, Kanban, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { services } from '@/data/services';

const serviceIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Share2: <Share2 className="w-8 h-8" />,
  Kanban: <Kanban className="w-8 h-8" />,
};

const serviceImages = [
  '/images/ai-dashboard.webp',
  '/images/ai-automation.webp',
  '/images/data-analytics.webp',
  '/images/workspace.webp',
  '/images/team-collab.webp',
  '/images/ai-network.webp',
];

const serviceAlts = [
  'AI analytics dashboard with real-time data processing',
  'Automated data pipeline and machine learning workflow',
  'Business intelligence dashboard on laptop screen',
  'Data visualization for business decision making',
  'Modern workspace with integrated digital tools',
  'Team collaborating on AI-powered platform development',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(20, 184, 166, 0.12)" size={900} top="-400px" left="-400px" />

        <div className="relative section-container">
          <ScrollReveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-500)]/20 bg-[var(--color-brand-500)]/5 mb-8">
              <span className="text-sm font-medium text-[var(--color-brand-400)]">Our Services</span>
            </div>
            <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.04em] mb-8 text-[var(--text-100)]">
              AI-powered solutions for modern businesses
            </h1>
            <p className="text-2xl text-[var(--text-300)] leading-relaxed font-light">
              Digital transformation services designed to revolutionize your business — from agentic AI to intelligent automation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Details — Premium alternating layouts */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-12">
            {services.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.id}>
                  <div
                    id={service.id}
                    className="scroll-mt-32 relative rounded-3xl glass-card overflow-hidden group"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at ${isEven ? '20%' : '80%'} 30%, color-mix(in srgb, ${service.accentColor} 4%, transparent) 0%, transparent 50%)`,
                      }}
                    />

                    <div className="relative p-10 sm:p-14 lg:p-20">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                        {/* Content */}
                        <div className="lg:[direction:ltr]">
                          <div className="flex items-center gap-5 mb-8">
                            <span
                              className="w-16 h-16 rounded-2xl flex items-center justify-center"
                              style={{
                                background: `color-mix(in srgb, ${service.accentColor} 10%, transparent)`,
                                color: service.accentColor,
                              }}
                            >
                              {serviceIcons[service.icon]}
                            </span>
                            <span className="font-mono text-sm font-semibold" style={{ color: service.accentColor }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>

                          <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-6 text-[var(--text-100)]">
                            {service.title}
                          </h2>
                          <p className="text-xl text-[var(--text-300)] leading-relaxed mb-10 font-light">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {service.features.map((feature, j) => (
                              <div
                                key={j}
                                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-2)]/30"
                              >
                                <CheckCircle2
                                  className="w-5 h-5 shrink-0 mt-0.5"
                                  style={{ color: service.accentColor }}
                                />
                                <span className="text-base text-[var(--text-300)]">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <MagneticButton
                            href="/get-a-quote"
                            className="glow-button inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full text-white"
                          >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                          </MagneticButton>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:[direction:ltr]">
                          <Image
                            src={serviceImages[i % serviceImages.length]}
                            alt={serviceAlts[i % serviceAlts.length]}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(135deg, color-mix(in srgb, ${service.accentColor} 10%, transparent) 0%, transparent 50%)`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sell CTA */}
      <section className="section-padding bg-[var(--surface-1)]/30">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-500)]/5 via-transparent to-[var(--color-cyan)]/5" />
              <div className="relative">
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl mb-4 text-[var(--text-100)]">
                  Not sure which service you need?
                </h3>
                <p className="text-[var(--text-300)] mb-8 text-lg font-light max-w-lg mx-auto">
                  Book a free consultation and we&apos;ll help you identify the best solutions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    href="/get-a-quote"
                    className="glow-button group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full text-white"
                  >
                    Book a Free Consultation <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  <MagneticButton
                    href="/case-studies"
                    className="ghost-button group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full"
                  >
                    View Case Studies
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
