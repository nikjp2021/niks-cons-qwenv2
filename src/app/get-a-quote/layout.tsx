import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote — Nik's Consulting",
  description:
    "Tell us about your project and we'll create a tailored AI-powered proposal with pricing within 24 hours.",
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
