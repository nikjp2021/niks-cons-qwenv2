'use client';

import Image from 'next/image';
import { Globe, Bot, Kanban, Zap, Cloud, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { Counter } from '@/components/animations/Counter';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { team } from '@/data/team';

const expertiseIcons: Record<string, React.ReactNode> = {
  'AI & Agentic AI': <Bot className="w-6 h-6" />,
  'AI Automation': <Zap className="w-6 h-6" />,
  'Agile Scrum': <Kanban className="w-6 h-6" />,
  'Digital Transformation': <Globe className="w-6 h-6" />,
  'Product Management': <BarChart3 className="w-6 h-6" />,
  'Cloud & DevOps': <Cloud className="w-6 h-6" />,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={800} top="-300px" left="-300px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">About Us</span>
              <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.04em] mb-8 text-[var(--text-100)]">
                Pioneers in AI solutions & innovation
              </h1>
              <p className="text-2xl text-[var(--text-300)] leading-relaxed font-light">
                Empowering businesses worldwide with agentic AI, automation, and digital transformation.
              </p>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/team-collab.webp"
                  alt="Team collaborating on AI-powered digital transformation projects"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">Our Story</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-8 text-[var(--text-100)]">
                Empowering businesses through AI & technology
              </h2>
              <div className="space-y-6 text-[var(--text-300)] leading-relaxed text-lg font-light">
                <p>
                  At Nik&apos;s Consulting, we believe that every business — regardless of size — deserves access to AI-powered solutions and modern digital strategy. Founded by Nikhil Tiwari, our consulting firm specializes in helping businesses navigate the complex landscape of AI, agentic workflows, and digital transformation.
                </p>
                <p>
                  From building AI-powered applications and intelligent automation to crafting data-driven social media strategies and implementing agile project management, we provide end-to-end solutions that drive real business results.
                </p>
                <p>
                  Our approach is simple: we listen, strategize, execute, and optimize with AI at the core. We don&apos;t just build technology — we build intelligent systems and partnerships that help your business grow.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-8">
                {[
                  { value: 15, suffix: '+', label: 'Countries Served', color: 'var(--color-brand-500)' },
                  { value: 50, suffix: '+', label: 'Projects Delivered', color: 'var(--color-cyan)' },
                  { value: 10, suffix: '+', label: 'Years Experience', color: 'var(--color-emerald)' },
                  { value: 300, suffix: '%', label: 'Client Satisfaction', color: 'var(--color-amber)' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card flex items-center gap-6 p-8"
                  >
                    <div className="font-display font-extrabold text-4xl shrink-0" style={{ color: stat.color }}>
                      <Counter target={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <div className="text-base text-[var(--text-400)] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--surface-1)]/30">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Mission & Vision
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="glass-card p-10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-500)]/10 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[var(--color-brand-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-[var(--text-100)]">Our Vision</h3>
                <p className="text-[var(--text-300)] leading-relaxed text-lg font-light">
                  To be the trusted AI and technology partner for small and medium businesses worldwide, making cutting-edge AI solutions, agentic workflows, and digital transformation accessible and affordable.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-cyan)]/10 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[var(--color-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-[var(--text-100)]">Our Mission</h3>
                <p className="text-[var(--text-300)] leading-relaxed text-lg font-light">
                  To empower businesses with AI-powered solutions, intelligent automation, and strategic digital consulting. We combine technical expertise with business acumen to deliver agentic workflows and intelligent systems that drive growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/ai-network.webp"
                    alt="Nikhil Tiwari, Founder of Nik's Consulting, working on AI solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <span className="badge-pill mb-4 inline-flex">Founder</span>
                <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-4 text-[var(--text-100)]">
                  Nikhil Tiwari
                </h2>
                <p className="text-xl text-[var(--text-300)] mb-3 font-light">Founder & Fractional CPO</p>
                <p className="text-base text-[var(--text-400)] mb-8">
                  Agentic AI Builder | Xiaomi MiMo Grant Winner | PhD Candidate
                </p>
                <p className="text-[var(--text-300)] leading-relaxed mb-8 text-lg font-light">
                  {team[0].bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Agentic AI', 'Health Tech', 'Product Strategy', 'LLM Systems', 'Web3', 'PhD Research'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-xl text-sm font-medium glass-card text-[var(--text-300)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[var(--surface-1)]/30">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <span className="badge-pill mb-4 inline-flex">Our Team</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              The people behind the innovation
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {team.slice(1).map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass-card p-10 group">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 font-display font-bold text-2xl text-white"
                    style={{ background: member.accentColor }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-[var(--text-100)]">{member.name}</h3>
                  <p className="text-base text-[var(--text-400)] mb-6">{member.role}</p>
                  <p className="text-base text-[var(--text-300)] leading-relaxed font-light">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <span className="badge-pill mb-4 inline-flex">Expertise</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Areas of Expertise
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'AI & Agentic AI', color: 'var(--color-brand-500)' },
                { name: 'AI Automation', color: 'var(--color-cyan)' },
                { name: 'Agile Scrum', color: 'var(--color-amber)' },
                { name: 'Digital Transformation', color: 'var(--color-violet)' },
                { name: 'Product Management', color: 'var(--color-pink)' },
                { name: 'Cloud & DevOps', color: 'var(--color-emerald)' },
              ].map((exp) => (
                <span
                  key={exp.name}
                  className="inline-flex items-center gap-3 px-6 py-4 glass-card text-[var(--text-200)] font-medium"
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `color-mix(in srgb, ${exp.color} 10%, transparent)`, color: exp.color }}
                  >
                    {expertiseIcons[exp.name]}
                  </span>
                  {exp.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
