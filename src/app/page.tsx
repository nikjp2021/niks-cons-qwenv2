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
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #14b8a6, #7c3aed, #f59e0b)',
        }}
      />

      {/* ═══════════════════════════════════════════════════
          HERO — Full-bleed video, centered content
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%2307070b'/%3E%3C/svg%3E"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Scrim: dark center fades out toward edges */}
        <div className="absolute inset-0 bg-[var(--surface-0)]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--surface-0)/60_0%,transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5 sm:px-8">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/80 mb-10 border border-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] animate-pulse" />
              AI-First Consulting
            </span>
          </FadeIn>

          <div className="mb-10">
            <TextReveal
              as="h1"
              className="font-display font-black text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em] text-white"
              delay={0.2}
              staggerDelay={0.05}
            >
              We build AI solutions that actually ship.
            </TextReveal>
          </div>

          <FadeIn delay={0.8}>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-14 text-white/70">
              Digital transformation partner for startups and SMEs. Agentic AI, automation,
              and lean strategies that turn complexity into growth.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <MagneticButton
                href="/get-a-quote"
                className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-lg hover:bg-[var(--color-brand-400)] transition-colors duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-white font-semibold rounded-xl text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
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
                  <div className="font-display font-black text-3xl sm:text-4xl text-white">
                    <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
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
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-white/50" />
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
            <span key={item} className="inline-flex items-center gap-4 mx-6 text-sm text-[var(--text-500)]">
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--surface-4)]" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Hero feature + alternating detail rows
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <GradientOrb color="rgba(124, 58, 237, 0.06)" size={600} top="0" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section header */}
          <ScrollReveal className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
                  What we build
                </h2>
                <p className="text-lg text-[var(--text-300)] leading-relaxed mt-5">
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

          {/* Featured service — large asymmetric */}
          <ScrollReveal className="mb-12">
            <Link
              href={`/services#${services[0].id}`}
              className="group relative block rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--surface-3)]/40 hover:border-[var(--surface-4)] transition-all duration-500"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src="/images/ai-automation.webp"
                    alt="AI-powered automation workflow processing data in real-time"
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <span
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `color-mix(in srgb, ${services[0].accentColor} 12%, transparent)`,
                      color: services[0].accentColor,
                    }}
                  >
                    {serviceIcons[services[0].icon]}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-[var(--text-100)]">
                    {services[0].title}
                  </h3>
                  <p className="text-[var(--text-300)] leading-relaxed mb-8 max-w-md text-lg">
                    {services[0].shortDesc}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color: services[0].accentColor }}
                  >
                    Explore this service
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining services — varied 2-col grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.06}>
            {services.slice(1).map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/40 hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${service.accentColor} 8%, transparent) 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
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
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-2.5"
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
          TOOLS — Split layout
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 border-y border-[var(--surface-3)]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <ScrollReveal>
              <p className="text-sm font-semibold text-[var(--color-brand-500)] mb-4">Integrated ecosystem</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-5 text-[var(--text-100)]">
                The tools you already use, supercharged with AI
              </h2>
              <p className="text-[var(--text-300)] leading-relaxed mb-10 text-lg">
                We don&apos;t replace your stack — we make it smarter. Every integration is battle-tested across 50+ client deployments.
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--surface-1)] border border-[var(--surface-3)]/30 text-[var(--text-300)] text-sm font-medium hover:border-[var(--surface-4)] hover:text-[var(--text-200)] transition-all"
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
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <GradientOrb color="rgba(245, 158, 11, 0.05)" size={500} bottom="-100px" left="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="mb-20 max-w-2xl">
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
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
          CASE STUDIES — 2-col large cards
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 bg-[var(--surface-1)]/50 overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.05)" size={500} top="-100px" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
                Real businesses, real outcomes
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
                    className="group block rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--surface-3)]/30 hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 h-full"
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
          TESTIMONIALS — Big quote + mini cards
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <GradientOrb color="rgba(16, 185, 129, 0.05)" size={500} bottom="-100px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-center">
            {/* Image */}
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/team-collab.webp"
                  alt="Client team celebrating successful AI implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal>
              <Quote className="w-14 h-14 text-[var(--color-brand-500)]/20 mb-8" />
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-[var(--text-100)] mb-10">
                &ldquo;{testimonials[0].content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mb-12">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: testimonials[0].accentColor }}
                >
                  {testimonials[0].name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-100)]">{testimonials[0].name}</div>
                  <div className="text-xs text-[var(--text-400)]">{testimonials[0].role}, {testimonials[0].company}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {testimonials.slice(1).map((t) => (
                  <div key={t.id} className="flex-1 p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed mb-3">
                      &ldquo;{t.content.slice(0, 100)}...&rdquo;
                    </p>
                    <div className="text-xs text-[var(--text-400)]">
                      <span className="font-semibold text-[var(--text-200)]">{t.name}</span>, {t.company}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Asymmetric with image
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={600} top="50%" left="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="relative rounded-3xl border border-[var(--surface-3)]/30 overflow-hidden">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative p-10 sm:p-16 lg:p-20">
                  <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-6 text-[var(--text-100)]">
                    Ready to build something extraordinary?
                  </h2>
                  <p className="text-lg leading-relaxed text-[var(--text-300)] mb-12 max-w-lg">
                    Book a free consultation. We&apos;ll show you exactly how AI can transform your operations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <MagneticButton
                      href="/get-a-quote"
                      className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-base hover:bg-[var(--color-brand-400)] transition-colors duration-300"
                    >
                      Get a Free Quote
                      <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                    <MagneticButton
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--surface-4)] text-[var(--text-200)] font-semibold rounded-xl text-base hover:border-[var(--surface-5)] transition-all duration-300"
                    >
                      Get in Touch
                    </MagneticButton>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-[var(--text-400)]">
                    {['Free consultation', 'No commitment', 'Response within 24h'].map((badge) => (
                      <span key={badge} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-emerald)]" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <Image
                    src="/images/data-analytics.webp"
                    alt="Data analytics dashboard showing AI-powered business insights"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-1)]/60 to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
