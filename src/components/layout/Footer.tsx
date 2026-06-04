'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const serviceLinks = [
  { label: 'AI Solutions & Agentic AI', href: '/services#ai-solutions' },
  { label: 'AI Automation', href: '/services#ai-automation' },
  { label: 'Digital Transformation', href: '/services#digital-transformation' },
  { label: 'Website & App Development', href: '/services#website-development' },
  { label: 'AI-Powered Social Media', href: '/services#ai-social-media' },
  { label: 'Agile Project Management', href: '/services#agile-management' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[var(--surface-1)] border-t border-[var(--surface-3)]/30">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(20,184,166,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-brand-500)] flex items-center justify-center font-display font-black text-white text-sm">
                N
              </div>
              <span className="font-display font-bold text-[var(--text-100)] text-lg">Nik&apos;s</span>
            </Link>
            <p className="text-sm text-[var(--text-400)] leading-relaxed mb-6">
              Pioneers in AI Solutions & Innovation. We deliver AI-powered solutions, agentic workflows, and digital transformation for startups and SMEs.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-[var(--text-200)] mb-3">Stay Updated</h4>
              {subscribed ? (
                <p className="text-sm text-[var(--color-emerald)] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks! We&apos;ll keep you updated.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-3.5 py-2.5 rounded-lg bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] text-sm placeholder:text-[var(--text-500)] focus:outline-none focus:border-[var(--color-brand-500)] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-[var(--color-brand-500)] text-white text-sm font-semibold hover:bg-[var(--color-brand-600)] transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-400)] mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-400)] mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-400)] mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@niksconsulting.com" className="flex items-center gap-3 text-sm text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors">
                  <Mail className="w-4 h-4 text-[var(--text-500)]" />
                  info@niksconsulting.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-[var(--text-300)] hover:text-[var(--color-brand-500)] transition-colors">
                  <Phone className="w-4 h-4 text-[var(--text-500)]" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--surface-3)]/30">
          <p className="text-xs text-[var(--text-500)]">
            &copy; 2026 Nik&apos;s Consulting. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-500)]">
            Built with passion by Nik&apos;s Consulting
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
}
