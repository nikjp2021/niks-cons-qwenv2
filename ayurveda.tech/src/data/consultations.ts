export interface ConsultationType {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  cta: string;
  featured?: boolean;
}

export const consultationTypes: ConsultationType[] = [
  {
    id: "dosha-assessment",
    title: "Dosha Assessment",
    description:
      "Discover your Prakriti (unique constitution) and current Vikriti (imbalances). Includes comprehensive dosha analysis and foundational wellness guidance.",
    duration: "60 min",
    price: "₹499",
    cta: "Book Now",
  },
  {
    id: "wellness-plan",
    title: "Wellness Plan",
    description:
      "A deep-dive consultation for ongoing health concerns. Receive a fully personalised diet, lifestyle, herbal, and daily routine plan.",
    duration: "90 min",
    price: "₹999",
    cta: "Book Now",
    featured: true,
  },
  {
    id: "follow-up",
    title: "Follow-Up Session",
    description:
      "Track your progress, adjust your plan, and get continued guidance from your practitioner.",
    duration: "30 min",
    price: "₹299",
    cta: "Book Now",
  },
  {
    id: "seasonal-cleanse",
    title: "Seasonal Cleanse",
    description:
      "Prepare for seasonal transitions with a guided detox and rejuvenation protocol tailored to your dosha.",
    duration: "60 min + plan",
    price: "₹799",
    cta: "Book Now",
  },
];

export interface PricingPackage {
  id: string;
  plan: string;
  sessions: string;
  price: string;
  savings: string;
  bestFor: string;
  featured?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    plan: "Starter",
    sessions: "1 consultation",
    price: "₹499",
    savings: "—",
    bestFor: "First-time visitors, dosha assessment",
  },
  {
    id: "balanced",
    plan: "Balanced",
    sessions: "3 sessions (assessment + 2 follow-ups)",
    price: "₹1,299",
    savings: "Save ₹198",
    bestFor: "Ongoing wellness support",
    featured: true,
  },
  {
    id: "comprehensive",
    plan: "Comprehensive",
    sessions: "6 sessions (assessment + 5 follow-ups)",
    price: "₹2,499",
    savings: "Save ₹495",
    bestFor: "Chronic concerns, deep transformation",
  },
  {
    id: "seasonal",
    plan: "Seasonal",
    sessions: "4 sessions per year (quarterly)",
    price: "₹1,799",
    savings: "Save ₹397",
    bestFor: "Year-round preventive care",
  },
];
