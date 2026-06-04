export interface Dosha {
  id: "vata" | "pitta" | "kapha";
  name: string;
  elements: string;
  description: string;
  characteristics: string;
  focusAreas: string;
  cta: string;
  color: string;
  lightColor: string;
}

export const doshas: Dosha[] = [
  {
    id: "vata",
    name: "Vata",
    elements: "Air & Space",
    description:
      "Vata governs movement, breath, and creativity. When balanced, you feel energised and adaptable. When out of balance, anxiety and restlessness arise.",
    characteristics: "Light, dry, cool, mobile",
    focusAreas: "Sleep routines, anxiety management, digestive health",
    cta: "Learn About Vata →",
    color: "var(--color-vata)",
    lightColor: "var(--color-vata-light)",
  },
  {
    id: "pitta",
    name: "Pitta",
    elements: "Fire & Water",
    description:
      "Pitta governs digestion, metabolism, and transformation. When balanced, you're focused and warm-hearted. When out of balance, irritability and inflammation emerge.",
    characteristics: "Sharp, hot, oily, intense",
    focusAreas: "Anti-inflammatory care, skin health, stress reduction",
    cta: "Learn About Pitta →",
    color: "var(--color-pitta)",
    lightColor: "var(--color-pitta-light)",
  },
  {
    id: "kapha",
    name: "Kapha",
    elements: "Earth & Water",
    description:
      "Kapha governs structure, stability, and immunity. When balanced, you're calm and strong. When out of balance, sluggishness and weight gain can occur.",
    characteristics: "Heavy, slow, cool, steady",
    focusAreas: "Weight management, seasonal detox, exercise guidance",
    cta: "Learn About Kapha →",
    color: "var(--color-kapha)",
    lightColor: "var(--color-kapha-light)",
  },
];
