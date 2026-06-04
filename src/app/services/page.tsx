'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Brain, Bot, Zap, Globe, Share2, Kanban, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/data/services';

const serviceIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Share2: <Share2 className="w-7 h-7" />,
  Kanban: <Kanban className="w-7 h-7" />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb color="rgba(20, 184, 166, 0.1)" size={600} top="-200px" left="-200px" />
        <GradientOrb color="rgba(124, 58, 237, 0.06)" size={400} bottom="-100px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="max-w-3xl">
            <Badge color="#14b8a6">Our Services</Badge>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mt-6 mb-6 text-[var(--text-100)]">
              AI-powered solutions
            </h1>
            <p className="text-xl text-[var(--text-300)] leading-relaxed">
              Digital transformation services designed to revolutionize your business — from agentic AI to intelligent automation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div
                  id={service.id}
                  className="scroll-mt-28 relative rounded-3xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 overflow-hidden group"
                >
                  {/* Top color bar */}
                  <div
                    className="h-1"
                    style={{
                      background: `linear-gradient(90deg, ${service.gradientFrom}, ${service.gradientTo})`,
                    }}
                  />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 20% 30%, color-mix(in srgb, ${service.accentColor} 5%, transparent) 0%, transparent 50%)`,
                    }}
                  />

                  <div className="relative p-8 sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Left */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{
                              background: `color-mix(in srgb, ${service.accentColor} 12%, transparent)`,
                              color: service.accentColor,
                            }}
                          >
                            {serviceIcons[service.icon]}
                          </span>
                          <span className="font-mono text-sm text-[var(--text-500)]">
                            0{i + 1}
                          </span>
                        </div>

                        <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-5 text-[var(--text-100)]">
                          {service.title}
                        </h2>
                        <p className="text-lg text-[var(--text-300)] leading-relaxed mb-8">
                          {service.description}
                        </p>

                        <MagneticButton
                          href="/get-a-quote"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                          strength={0.1}
                        >
                          <span
                            style={{
                              background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                            }}
                            className="absolute inset-0 rounded-xl"
                          />
                          <span className="relative flex items-center gap-2">
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </MagneticButton>
                      </div>

                      {/* Right — Features */}
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-400)] mb-6">
                          What&apos;s Included
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-2)]/50 border border-[var(--surface-3)]/20"
                            >
                              <CheckCircle2
                                className="w-5 h-5 shrink-0 mt-0.5"
                                style={{ color: service.accentColor }}
                              />
                              <span className="text-sm text-[var(--text-200)]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell CTA */}
      <section className="py-20 lg:py-28 bg-[var(--surface-1)]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-10 rounded-2xl bg-[var(--surface-2)] border border-[var(--surface-3)]/30">
                <h3 className="font-display font-bold text-2xl mb-3 text-[var(--text-100)]">
                  See our work in action
                </h3>
                <p className="text-[var(--text-300)] mb-6">
                  Explore 6 real case studies — from AI-powered triage in Japan to e-commerce automation in Brazil.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all"
                >
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-10 rounded-2xl bg-gradient-to-br from-[#14b8a6]/10 to-[#06b6d4]/10 border border-[#14b8a6]/20">
                <h3 className="font-display font-bold text-2xl mb-3 text-[var(--text-100)]">
                  Not sure which service you need?
                </h3>
                <p className="text-[var(--text-300)] mb-6">
                  Book a free consultation and we&apos;ll help you identify the best solutions for your business.
                </p>
                <MagneticButton
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold text-sm"
                >
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
