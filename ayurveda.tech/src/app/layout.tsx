import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Lora, Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import { baseMetadata } from "@/data/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading-alt",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ebGaramond.variable} ${lora.variable} ${notoSans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFBF5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Ayurveda.Tech",
              url: "https://ayurveda.tech",
              email: "support@ayurveda.tech",
              description: "Ancient Wisdom for Modern Wellness — Online Ayurvedic Consultations",
              areaServed: "Worldwide",
              medicalSpecialty: "Ayurvedic Medicine",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-text-primary)] antialiased">
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
