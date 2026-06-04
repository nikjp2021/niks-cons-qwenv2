'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Brain, Bot, Zap, Globe, Share2, Kanban,
  Search, Target, Hammer, TrendingUp, Star,
  MessageSquare, MessageCircle, Send, Headphones, Workflow,
  Sparkles, Calendar, BarChart3, Quote, CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Counter } from '@/components/animations/Counter';
import { TextReveal, FadeIn } from '@/components/animations/TextReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Marquee } from '@/components/animations/Marquee';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
import { processSteps, tools } from '@/data/stats';

const serviceIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Share2: <Share2 className="w-7 h-7" />,
  Kanban: <Kanban className="w-7 h-7" />,
};

const processIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

const toolIcons: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left"
        style={{
          scaleX,
          background: 'var(--color-brand-500)',
          zIndex: 'var(--z-max)',
        }}
      />

      {/* ═══════════════════════════════════════════════════
          HERO — Gradient background, centered content
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <GradientOrb color="rgba(20, 184, 166, 0.12)" size={600} top="-200px" right="-200px" />
        <GradientOrb color="rgba(6, 182, 212, 0.08)" size={400} bottom="-100px" left="-100px" />

        <div className="relative z-10 text-center section-container" style={{ maxWidth: 'var(--container-narrow)' }}>
          <FadeIn delay={0}>
            <span className="badge-pill mb-8">
              AI-First Consulting
            </span>
          </FadeIn>

          <div className="mb-10">
            <TextReveal
              as="h1"
              className="font-display font-extrabold text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-tight text-[var(--text-100)]"
              delay={0.2}
              staggerDelay={0.05}
            >
              We build AI-powered solutions that actually ship.
            </TextReveal>
          </div>

          <FadeIn delay={0.8}>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-14 text-[var(--text-300)]">
              Digital transformation partner for startups and SMEs. Agentic AI, automation,
              and lean strategies that turn complexity into growth.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <MagneticButton
                href="/get-a-quote"
                className="glow-button group inline-flex items-center justify-center gap-2.5 px-10 py-5 font-semibold rounded-xl text-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-[var(--surface-4)] text-[var(--text-200)] font-semibold rounded-xl text-lg hover:border-[var(--surface-5)] hover:bg-[var(--surface-1)] transition-all duration-[var(--duration-normal)]"
              >
                Explore Services
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div className="flex items-center justify-center gap-16">
              {[
                { value: 300, suffix: '%', label: 'Average ROI' },
                { value: 15, suffix: '+', label: 'Countries' },
                { value: 50, suffix: '+', label: 'Projects' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text">
                    <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-xs text-[var(--text-400)] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--surface-4)] flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-[var(--text-400)]" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE STRIP
          ═══════════════════════════════════════════════════ */}
      <section className="py-5 border-y border-[var(--surface-3)]/20 bg-[var(--surface-1)]/30">
        <Marquee speed={35}>
          {[
            'AI-First Consulting', 'Digital Transformation', 'Agentic AI', 'Automation',
            'Web Development', 'Social Media Strategy', 'Agile Management', 'Growth Engineering',
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-4 mx-6 text-sm text-[var(--text-400)]">
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--surface-4)]" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS — Real outcomes
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <div className="text-center">
              <span className="badge-pill mb-4">Proven Results</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--text-100)]">
                Real businesses, real outcomes
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { value: 300, suffix: '%', label: 'Average ROI', color: 'var(--color-brand-500)' },
              { value: 50, suffix: '+', label: 'Projects Delivered', color: 'var(--color-cyan)' },
              { value: 15, suffix: '+', label: 'Countries Served', color: 'var(--color-emerald)' },
              { value: 10, suffix: '+', label: 'Years Experience', color: 'var(--color-amber)' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass-card p-6 text-center">
                  <div className="font-display font-extrabold text-4xl sm:text-5xl mb-2" style={{ color: stat.color }}>
                    <Counter target={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <div className="text-sm text-[var(--text-400)]">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — 3×2 grid with glass cards
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(20, 184, 166, 0.06)" size={600} top="0" right="-200px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div className="max-w-2xl">
                <span className="badge-pill mb-4">What We Do</span>
                <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--text-100)]">
                  AI-powered solutions for modern businesses
                </h2>
                <p className="text-lg text-[var(--text-300)] mt-5 leading-relaxed">
                  From intelligent automation to full digital transformation — we deliver measurable results, not slide decks.
                </p>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all shrink-0"
              >
                All services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block p-8 glass-card hover:border-[var(--surface-4)] transition-all duration-[var(--duration-normal)] hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${service.accentColor} 8%, transparent) 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-[var(--duration-normal)]"
                      style={{
                        background: `color-mix(in srgb, ${service.accentColor} 12%, transparent)`,
                        color: service.accentColor,
                      }}
                    >
                      {serviceIcons[service.icon]}
                    </span>
                    <h3 className="font-display font-bold text-xl mb-3 text-[var(--text-100)]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-400)] mb-6">
                      {service.shortDesc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-[var(--duration-normal)] group-hover:gap-2.5"
                      style={{ color: service.accentColor }}
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TOOLS — Integrated ecosystem
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding border-y border-[var(--surface-3)]/20 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-4">Integrated Ecosystem</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-5 text-[var(--text-100)]">
                The tools you already use, supercharged with AI
              </h2>
              <p className="text-[var(--text-300)] leading-relaxed mb-10 text-lg">
                We don&apos;t replace your stack — we make it smarter. Every integration is battle-tested across 50+ client deployments.
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 glass-card text-[var(--text-300)] text-sm font-medium hover:border-[var(--surface-4)] hover:text-[var(--text-200)] transition-all"
                  >
                    {toolIcons[tool.icon]}
                    {tool.name}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/data-analytics.webp"
                  alt="Analytics dashboard showing integrated tools and performance metrics"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — 4-step with connecting line
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(245, 158, 11, 0.05)" size={500} bottom="-100px" left="-200px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-16 max-w-2xl">
            <span className="badge-pill mb-4">Our Process</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--text-100)]">
              How we work
            </h2>
            <p className="text-lg text-[var(--text-300)] mt-5 leading-relaxed">
              A proven process enhanced by AI. Four steps from discovery to scale.
            </p>
          </ScrollReveal>

          <StaggerContainer className="relative" staggerDelay={0.1}>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--surface-4)] to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-8 border-2"
                      style={{
                        borderColor: step.color,
                        background: `color-mix(in srgb, ${step.color} 12%, var(--surface-0))`,
                        color: step.color,
                      }}
                    >
                      {processIcons[step.icon]}
                    </div>
                    <span className="font-mono text-xs font-semibold block mb-3" style={{ color: step.color }}>
                      {step.step}
                    </span>
                    <h3 className="font-display font-bold text-xl mb-3 text-[var(--text-100)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-400)]">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CASE STUDIES — Featured results
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--surface-1)]/50 relative overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.05)" size={500} top="-100px" right="-200px" />

        <div className="relative section-container">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="badge-pill mb-4">Case Studies</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--text-100)]">
                Success stories
              </h2>
              <p className="text-lg text-[var(--text-300)] leading-relaxed mt-5">
                See how AI-powered solutions have transformed operations and driven growth for our clients.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all shrink-0"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.1}>
            {caseStudies.slice(0, 4).map((cs, i) => {
              const images = [
                '/images/workspace.webp',
                '/images/team-collab.webp',
                '/images/ai-network.webp',
                '/images/ai-dashboard.webp',
              ];
              const altTexts = [
                'AI-powered logistics dashboard with real-time analytics',
                'Streamlined business operations and team collaboration',
                'Digital transformation with AI network infrastructure',
                'Business intelligence dashboard showing growth metrics',
              ];
              return (
                <StaggerItem key={cs.id}>
                  <Link
                    href={`/case-studies#${cs.id}`}
                    className="group block rounded-2xl overflow-hidden glass-card hover:border-[var(--surface-4)] transition-all duration-[var(--duration-normal)] hover:-translate-y-1 h-full"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={images[i % images.length]}
                        alt={altTexts[i % altTexts.length]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-transparent to-transparent" />
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
                    <div className="p-7">
                      <h3 className="font-display font-bold text-lg mb-2 text-[var(--text-100)] leading-tight">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed mb-5">
                        {cs.challenge.slice(0, 120)}...
                      </p>
                      <div className="flex items-center gap-5">
                        {cs.results.slice(0, 2).map((result, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: cs.accentColor }}>
                            <TrendingUp className="w-3 h-3" />
                            {result.length > 35 ? result.slice(0, 35) + '...' : result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Social proof
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(16, 185, 129, 0.05)" size={500} bottom="-100px" right="-100px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-16 text-center">
            <span className="badge-pill mb-4">Testimonials</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--text-100)]">
              What our clients say
            </h2>
            <p className="text-lg text-[var(--text-300)] mt-5 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <div className="glass-card p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[var(--color-brand-500)]/20 mb-4" />
                  <p className="text-[var(--text-300)] leading-relaxed mb-6 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--surface-3)]/30">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: t.accentColor }}
                    >
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-100)]">{t.name}</div>
                      <div className="text-xs text-[var(--text-400)]">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA — Conversion focused
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={600} top="50%" left="-100px" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="glass-card p-10 sm:p-16 lg:p-20 text-center">
              <span className="badge-pill mb-6">Ready to Start?</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-6 text-[var(--text-100)]">
                Ready to build something extraordinary?
              </h2>
              <p className="text-lg leading-relaxed text-[var(--text-300)] mb-12 max-w-lg mx-auto">
                Book a free consultation. We&apos;ll show you exactly how AI can transform your operations and accelerate growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <MagneticButton
                  href="/get-a-quote"
                  className="glow-button group inline-flex items-center justify-center gap-2.5 px-8 py-4 font-semibold rounded-xl text-base"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--surface-4)] text-[var(--text-200)] font-semibold rounded-xl text-base hover:border-[var(--surface-5)] transition-all duration-[var(--duration-normal)]"
                >
                  Get in Touch
                </MagneticButton>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-sm text-[var(--text-400)]">
                {['Free consultation', 'No commitment', 'Response within 24h'].map((badge) => (
                  <span key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-emerald)]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
