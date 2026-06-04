import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Nik's Consulting — AI-First Solutions That Ship",
    template: "%s | Nik's Consulting",
  },
  description:
    "Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.",
  keywords: [
    "AI consulting",
    "digital transformation",
    "agentic AI",
    "automation",
    "web development",
    "startup consulting",
    "SME consulting",
    "AI solutions",
  ],
  authors: [{ name: "Nik's Consulting" }],
  openGraph: {
    title: "Nik's Consulting — AI-First Solutions That Ship",
    description:
      "Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.",
    url: "https://niksconsulting.com",
    siteName: "Nik's Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nik's Consulting — AI-First Solutions That Ship",
    description:
      "Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nik's Consulting",
              url: "https://niksconsulting.com",
              description:
                "AI-first consulting for startups and SMEs. Agentic AI, automation, and digital transformation.",
              foundingDate: "2016",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-234-567-890",
                contactType: "customer service",
                email: "info@niksconsulting.com",
              },
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
