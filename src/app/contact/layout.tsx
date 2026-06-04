import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nik's Consulting",
  description:
    "Get in touch with Nik's Consulting. Have a project in mind? Let's talk about how we can help transform your business with AI-powered solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
