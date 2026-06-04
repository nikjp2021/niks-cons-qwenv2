"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactFormSection() {
  return (
    <Section background="light">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <ScrollReveal>
            <SectionLabel>CONTACT US</SectionLabel>
            <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
              Send Us a Message.
            </h2>
            <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] mb-6">
              We typically respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-ui text-ui-sm font-semibold text-[var(--color-text-primary)]">Address</p>
                  <p className="font-body text-body-sm text-[var(--color-text-secondary)]">123 Wellness Street, Bangalore, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-ui text-ui-sm font-semibold text-[var(--color-text-primary)]">Email</p>
                  <p className="font-body text-body-sm text-[var(--color-text-secondary)]">hello@ayurveda.tech</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-ui text-ui-sm font-semibold text-[var(--color-text-primary)]">Phone</p>
                  <p className="font-body text-body-sm text-[var(--color-text-secondary)]">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-3">
          <ScrollReveal>
            <form className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block font-ui text-ui-sm font-medium text-[var(--color-text-primary)] mb-1">Full Name</label>
                  <input id="contact-name" type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-body text-body placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-ui text-ui-sm font-medium text-[var(--color-text-primary)] mb-1">Email Address</label>
                  <input id="contact-email" type="email" className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-body text-body placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block font-ui text-ui-sm font-medium text-[var(--color-text-primary)] mb-1">Subject</label>
                <select id="contact-subject" className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-body text-body focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent">
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Support</option>
                  <option value="practitioner">Practitioner Partnership</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-ui text-ui-sm font-medium text-[var(--color-text-primary)] mb-1">Message</label>
                <textarea id="contact-message" rows={5} className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-body text-body placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-y" placeholder="How can we help you?" required />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
