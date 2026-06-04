'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, FileText, Phone, Rocket } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Badge } from '@/components/ui/Badge';
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
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GradientOrb color="rgba(124, 58, 237, 0.08)" size={500} top="-200px" left="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="max-w-3xl">
            <Badge color="#7c3aed">Free Quote</Badge>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mt-6 mb-6 text-[var(--text-100)]">
              Get a free quote
            </h1>
            <p className="text-xl text-[var(--text-300)] leading-relaxed">
              Tell us about your project and we&apos;ll create a tailored AI-powered proposal with pricing within 24 hours.
            </p>
          </ScrollReveal>
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
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-shadow"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ) : (
                      <MagneticButton
                        type="submit"
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-[#7c3aed]/20 transition-shadow"
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
                            <span className="text-[var(--text-500)] mr-1">{String(i + 1).padStart(2, '0')}.</span>
                            {item.title}
                          </div>
                          <p className="text-xs text-[var(--text-400)]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assurances */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#14b8a6]/10 to-[#06b6d4]/5 border border-[#14b8a6]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#14b8a6]" />
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
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
