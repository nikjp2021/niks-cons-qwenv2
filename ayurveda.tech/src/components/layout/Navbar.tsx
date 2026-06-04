"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/navigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[var(--z-navbar)] transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-surface)]/85 backdrop-blur-xl shadow-[var(--shadow-sm)] border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-0.5 no-underline"
          >
            <span
              className="font-heading text-h3 font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ayurveda
            </span>
            <span
              className="font-ui text-h4 font-medium text-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              .Tech
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-ui text-ui-sm font-medium transition-colors duration-200 no-underline relative ${
                  isActive(link.href)
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.links.clientPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-text-on-accent)] rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold shadow-[var(--shadow-button)] hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-button-hover)] transition-all duration-200 no-underline"
            >
              Get Started
            </a>
            <a
              href={siteConfig.links.consultantPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-text-on-accent)] transition-all duration-200 no-underline"
            >
              Join as a Practitioner
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[var(--z-overlay)] md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[var(--color-surface)] z-[var(--z-modal)] md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
                <span className="font-heading text-h4 font-bold text-[var(--color-text-primary)]">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg font-ui text-ui font-medium transition-colors duration-200 no-underline ${
                        isActive(link.href)
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 border-t border-[var(--color-border)] space-y-3">
                <a
                  href={siteConfig.links.clientPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-[var(--color-accent)] text-[var(--color-text-on-accent)] rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold shadow-[var(--shadow-button)] hover:bg-[var(--color-accent-hover)] transition-all duration-200 no-underline"
                >
                  Get Started
                </a>
                <a
                  href={siteConfig.links.consultantPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-text-on-accent)] transition-all duration-200 no-underline"
                >
                  Join as a Practitioner
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
