'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, Calendar, ArrowRight, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Input, Textarea, Select } from '@/components/ui/FormElements';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={500} top="-200px" right="-100px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-4">Contact</span>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-[var(--text-100)]">
                Get in touch
              </h1>
              <p className="text-xl text-[var(--text-300)] leading-relaxed">
                Have a project in mind? Let&apos;s talk about how we can help transform your business with AI-powered solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/workspace.webp"
                  alt="Modern workspace ready for collaboration on AI projects"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="glass-card p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3 text-[var(--text-100)]">Message sent!</h3>
                    <p className="text-[var(--text-300)]">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card space-y-6 p-8 sm:p-10">
                    <div>
                      <h2 className="font-display font-bold text-2xl mb-2 text-[var(--text-100)]">Send us a message</h2>
                      <p className="text-sm text-[var(--text-400)]">Fill out the form and we&apos;ll respond within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input label="First Name" placeholder="John" required />
                      <Input label="Last Name" placeholder="Doe" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input label="Email" type="email" placeholder="john@company.com" required />
                      <Input label="Phone" type="tel" placeholder="+1 (234) 567-890" />
                    </div>
                    <Select label="Service Interested In" required>
                      <option value="">Select a service...</option>
                      <option>AI Solutions & Agentic AI</option>
                      <option>AI Automation</option>
                      <option>Digital Transformation</option>
                      <option>Website & App Development</option>
                      <option>AI-Powered Social Media</option>
                      <option>Agile Project Management</option>
                      <option>Other</option>
                    </Select>
                    <Textarea label="Message" rows={5} placeholder="Tell us about your project..." required />
                    <MagneticButton
                      type="submit"
                      className="glow-button group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 font-semibold rounded-xl text-base text-white"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </MagneticButton>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="glass-card p-7">
                    <h3 className="font-display font-bold text-lg mb-5 text-[var(--text-100)]">Contact Info</h3>
                    <div className="space-y-4">
                      <a href="mailto:info@niksconsulting.com" className="flex items-center gap-4 text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-[var(--surface-2)] flex items-center justify-center">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--text-400)] mb-0.5">Email</div>
                          <div className="text-sm font-medium">info@niksconsulting.com</div>
                        </div>
                      </a>
                      <a href="tel:+1234567890" className="flex items-center gap-4 text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-[var(--surface-2)] flex items-center justify-center">
                          <Phone className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--text-400)] mb-0.5">Phone</div>
                          <div className="text-sm font-medium">+1 (234) 567-890</div>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-[var(--text-300)] hover:text-[#25D366] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                          <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--text-400)] mb-0.5">WhatsApp</div>
                          <div className="text-sm font-medium">Chat with us instantly</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="glass-card p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-[var(--color-brand-500)]" />
                      <h3 className="font-display font-bold text-lg text-[var(--text-100)]">Schedule a Call</h3>
                    </div>
                    <p className="text-sm text-[var(--text-300)] mb-5">
                      Book a free 30-minute consultation to discuss your project.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all"
                    >
                      Open Scheduling Page <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Response Time */}
                  <div className="glass-card flex items-center gap-3 p-5">
                    <Clock className="w-5 h-5 text-[var(--color-emerald)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--text-200)]">Response within 24 hours</div>
                      <div className="text-xs text-[var(--text-400)]">We typically respond much faster</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
