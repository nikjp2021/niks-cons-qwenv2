export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "client-1",
    quote:
      "I'd struggled with digestive issues for years. My Ayurveda.Tech consultant didn't just prescribe — she taught me to understand my body. For the first time, I feel in control of my health.",
    author: "Priya M.",
    role: "Wellness Seeker",
  },
  {
    id: "practitioner-1",
    quote:
      "Joining Ayurveda.Tech transformed my practice. I went from seeing 10 clients a week locally to 30+ online. The platform handles scheduling, payments, and follow-ups — I just focus on healing.",
    author: "Dr. Arun K.",
    role: "BAMS, Ayurvedic Practitioner",
  },
  {
    id: "client-2",
    quote:
      "I was sceptical about online health consultations, but the depth of care I received was remarkable. My practitioner created a plan that fit my lifestyle as a working parent. Six months later, I feel like a different person.",
    author: "Sarah L.",
    role: "Wellness Seeker",
  },
];
