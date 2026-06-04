import type { Metadata } from "next";

export const siteConfig = {
  name: "Ayurveda.Tech",
  tagline: "Ancient Wisdom for Modern Wellness",
  description:
    "Bridging traditional Ayurvedic wisdom with modern technology — making authentic care accessible to everyone, everywhere.",
  url: "https://ayurveda.tech",
  email: "support@ayurveda.tech",
  copyright: `© ${new Date().getFullYear()} Ayurveda.Tech. All rights reserved.`,
  links: {
    clientPortal: "https://client.ayurveda.tech",
    consultantPortal: "https://consultant.ayurveda.tech",
    library: "https://ayurvedalibrary.org",
    store: "https://explore.santhigramayurveda.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Consultation", href: "/consultation" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const baseMetadata: Metadata = {
  title: {
    default: "Ayurveda.Tech — Ancient Wisdom for Modern Wellness | Online Ayurvedic Consultations",
    template: "%s | Ayurveda.Tech",
  },
  description:
    "Discover personalised Ayurvedic care online. Connect with certified practitioners, explore your dosha (Vata, Pitta, Kapha), and begin your wellness journey. Book your consultation today.",
  metadataBase: new URL("https://ayurveda.tech"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ayurveda.Tech",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};
