import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nik's Consulting — AI-First Solutions That Ship",
  description:
    "Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.",
  keywords: [
    "AI consulting",
    "digital transformation",
    "agentic AI",
    "automation",
    "web development",
    "startup consulting",
  ],
  openGraph: {
    title: "Nik's Consulting — AI-First Solutions That Ship",
    description:
      "Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.",
    url: "https://niksconsulting.com",
    siteName: "Nik's Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
