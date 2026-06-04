import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Nik's Consulting",
  description:
    "AI-powered solutions and digital transformation services designed to revolutionize your business — from agentic AI to intelligent automation.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
