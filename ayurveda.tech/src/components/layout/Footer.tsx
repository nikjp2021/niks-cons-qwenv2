import Link from "next/link";
import { siteConfig } from "@/data/navigation";
import NewsletterForm from "@/components/ui/NewsletterForm";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Consultations", href: "/consultation" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const ecosystemLinks = [
  { label: "Client Portal", href: siteConfig.links.clientPortal },
  { label: "Consultant Portal", href: siteConfig.links.consultantPortal },
  { label: "Ayurveda Library", href: siteConfig.links.library },
  { label: "Ayurveda Store", href: siteConfig.links.store },
];

const forClients = [
  { label: "Book a Consultation", href: "/consultation" },
  { label: "Find a Practitioner", href: "/consultation#practitioners" },
  { label: "Dosha Quiz", href: "/consultation#dosha-assessment" },
  { label: "Pricing", href: "/consultation#pricing" },
];

const forConsultants = [
  { label: "Join as Practitioner", href: siteConfig.links.consultantPortal, external: true },
  { label: "About the Platform", href: "/about" },
  { label: "FAQ for Practitioners", href: "/faq#practitioners" },
];

export default function Footer() {
  const renderLink = (
    label: string,
    href: string,
    external?: boolean
  ) => {
    if (external || href.startsWith("http")) {
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui text-ui-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 no-underline"
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        key={href}
        href={href}
        className="font-ui text-ui-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 no-underline"
      >
        {label}
      </Link>
    );
  };

  const renderLinkList = (
    items: { label: string; href: string; external?: boolean }[]
  ) => (
    <>
      {items.map((item) => renderLink(item.label, item.href, item.external))}
    </>
  );

  return (
    <footer className="bg-[var(--color-surface-alt)] border-t border-[var(--color-border)]">
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-0.5 no-underline mb-4">
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
            <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)] max-w-[30ch] mb-4">
              {siteConfig.tagline}
            </p>
            <p className="font-body text-body-sm text-[var(--color-text-muted)] leading-[var(--lh-body)] max-w-[35ch]">
              Bridging traditional Ayurvedic wisdom with modern technology — making authentic care accessible to everyone, everywhere.
            </p>
          </div>

          {/* Column 2: For Clients */}
          <div>
            <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-4">
              For Clients
            </h4>
            <nav className="flex flex-col gap-3">
              {renderLinkList(forClients)}
            </nav>
          </div>

          {/* Column 3: For Consultants & Ecosystem */}
          <div>
            <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-4">
              For Consultants
            </h4>
            <nav className="flex flex-col gap-3 mb-6">
              {renderLinkList(forConsultants)}
            </nav>
            <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-4">
              Our Ecosystem
            </h4>
            <nav className="flex flex-col gap-3">
              {renderLinkList(ecosystemLinks)}
            </nav>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-4">
              Stay Connected
            </h4>
            <p className="font-body text-body-sm text-[var(--color-text-secondary)] mb-4">
              Get wellness tips and seasonal guides delivered to your inbox.
            </p>
            <NewsletterForm incentive="Subscribe and get your free Dosha Guide PDF." />
            <div className="mt-6">
              <p className="font-ui text-ui-sm font-medium text-[var(--color-text-primary)] mb-2">
                Contact
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-ui text-ui-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors no-underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ui text-ui-sm text-[var(--color-text-muted)]">
            {siteConfig.copyright}
          </p>
          <nav className="flex items-center gap-6">
            <span className="font-ui text-ui-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="font-ui text-ui-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="font-ui text-ui-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              Cookie Policy
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
