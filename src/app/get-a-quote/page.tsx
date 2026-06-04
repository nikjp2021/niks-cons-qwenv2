'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Rocket, FileText, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { StepIndicator } from '@/components/ui/StepIndicator';
import { Input, Textarea, Select } from '@/components/ui/FormElements';

const steps = ['Your Info', 'Business', 'Project'];

const processItems = [
  { icon: <FileText className="w-5 h-5" />, title: 'Review', desc: 'We review your project details within 24 hours.', color: '#14b8a6' },
  { icon: <Phone className="w-5 h-5" />, title: 'Consultation', desc: 'We schedule a free call to discuss your needs.', color: '#0ea5e9' },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Proposal', desc: 'You receive a detailed proposal with pricing.', color: '#7c3aed' },
  { icon: <Rocket className="w-5 h-5" />, title: 'Kickoff', desc: 'Once approved, we begin your project immediately.', color: '#f59e0b' },
];

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero — Asymmetric with image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GradientOrb color="rgba(124, 58, 237, 0.08)" size={500} top="-200px" left="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-[var(--text-100)]">
                Get a free quote
              </h1>
              <p className="text-xl text-[var(--text-300)] leading-relaxed">
                Tell us about your project and we&apos;ll create a tailored AI-powered proposal with pricing within 24 hours.
              </p>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/ai-automation.png"
                  alt="AI automation and data processing for project planning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form + Process */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[var(--color-emerald)]" />
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-3 text-[var(--text-100)]">Quote request sent!</h3>
                  <p className="text-lg text-[var(--text-300)] mb-8 max-w-md mx-auto">
                    We&apos;ll review your project and get back to you with a tailored proposal within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-semibold text-sm"
                    >
                      Chat on WhatsApp
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--surface-4)] text-[var(--text-200)] font-semibold text-sm"
                    >
                      Schedule a Call <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-[var(--text-100)]">Quote Request</h2>
                      <p className="text-sm text-[var(--text-400)] mt-1">Step {currentStep + 1} of 3</p>
                    </div>
                    <StepIndicator steps={steps} currentStep={currentStep} />
                  </div>

                  {/* Step 1: Your Info */}
                  {currentStep === 0 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input label="First Name" placeholder="John" required />
                        <Input label="Last Name" placeholder="Doe" required />
                      </div>
                      <Input label="Email" type="email" placeholder="john@company.com" required />
                      <Input label="Phone" type="tel" placeholder="+1 (234) 567-890" />
                    </div>
                  )}

                  {/* Step 2: Business */}
                  {currentStep === 1 && (
                    <div className="space-y-5">
                      <Input label="Company Name" placeholder="Acme Inc." />
                      <Input label="Current Website" placeholder="https://yoursite.com" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input label="Industry" placeholder="e.g., Healthcare, E-commerce" />
                        <Input label="Location" placeholder="e.g., New York, USA" />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project */}
                  {currentStep === 2 && (
                    <div className="space-y-5">
                      <Select label="Service Needed" required>
                        <option value="">Select a service...</option>
                        <option>AI Solutions & Agentic AI</option>
                        <option>AI Automation</option>
                        <option>Digital Transformation</option>
                        <option>Website & App Development</option>
                        <option>AI-Powered Social Media</option>
                        <option>Agile Project Management</option>
                        <option>Multiple Services</option>
                      </Select>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Select label="Estimated Budget">
                          <option value="">Select budget range...</option>
                          <option>Under $500</option>
                          <option>$500 - $1,000</option>
                          <option>$1,000 - $2,500</option>
                          <option>$2,500 - $5,000</option>
                          <option>$5,000+</option>
                          <option>Not sure yet</option>
                        </Select>
                        <Select label="Preferred Timeline">
                          <option value="">Select timeline...</option>
                          <option>ASAP</option>
                          <option>Within 1 month</option>
                          <option>1-3 months</option>
                          <option>3-6 months</option>
                          <option>Flexible</option>
                        </Select>
                      </div>
                      <Textarea label="Project Description" rows={5} placeholder="Describe your project, goals, and any specific requirements..." required />
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--surface-3)]/30">
                    {currentStep > 0 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(s => s - 1)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-300)] hover:text-[var(--text-100)] transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : <div />}

                    {currentStep < 2 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(s => s + 1)}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-sm hover:bg-[var(--color-brand-400)] transition-colors"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ) : (
                      <MagneticButton
                        type="submit"
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7c3aed] text-white font-semibold rounded-xl text-sm hover:bg-[#6d28d9] transition-colors"
                      >
                        Submit Quote Request
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </MagneticButton>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* What Happens Next */}
                <div className="p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30">
                  <h3 className="font-display font-bold text-lg mb-6 text-[var(--text-100)]">What happens next?</h3>
                  <div className="space-y-5">
                    {processItems.map((item, i) => (
                      <div key={item.title} className="flex gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `color-mix(in srgb, ${item.color} 12%, transparent)`, color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--text-100)] mb-0.5">
                            {item.title}
                          </div>
                          <p className="text-xs text-[var(--text-400)]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assurances */}
                <div className="p-7 rounded-2xl bg-[var(--surface-2)] border border-[var(--color-brand-500)]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-500)]" />
                    <span className="font-semibold text-[var(--text-100)]">100% Satisfaction</span>
                  </div>
                  <p className="text-sm text-[var(--text-300)]">
                    Free consultation. No obligations. We respond within 24 hours.
                  </p>
                </div>

                {/* Alternative CTAs */}
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 hover:border-[var(--surface-4)] transition-all text-sm font-medium text-[var(--text-200)]"
                  >
                    <Phone className="w-4 h-4 text-[var(--text-400)]" />
                    Schedule a Call
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15 hover:border-[#25D366]/30 transition-all text-sm font-medium text-[#25D366]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
