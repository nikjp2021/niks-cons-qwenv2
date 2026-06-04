export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "embracing-ayurveda",
    title: "Embracing Ayurveda: Ancient Wisdom for Modern Life",
    excerpt:
      "In a world of quick fixes and generic health advice, Ayurveda offers something radically different — a personalised approach rooted in 5,000 years of wisdom.",
    category: "Dosha Guides",
    author: "Dr. Sanjay Menon",
    date: "January 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "spring-cleaning-for-kapha",
    title: "Spring Cleaning for Kapha: A Seasonal Detox Guide",
    excerpt:
      "As winter melts into spring, Kapha dosha accumulates. Here's how to navigate this seasonal transition with lightness, energy, and balance.",
    category: "Seasonal Routines",
    author: "Vaidya Lakshmi Rao",
    date: "March 2025",
    readTime: "6 min",
  },
  {
    slug: "understanding-agni",
    title: "Understanding Agni: Your Digestive Fire and Why It Matters",
    excerpt:
      "In Ayurveda, strong digestion (Agni) is the foundation of health. Learn how to assess your digestive fire and keep it burning bright.",
    category: "Wellness Tips",
    author: "Dr. Priya Sharma",
    date: "February 2025",
    readTime: "5 min",
  },
  {
    slug: "vata-balancing-autumn",
    title: "Vata-Balancing Routines for Autumn: Stay Grounded When the Winds Change",
    excerpt:
      "As Vata season approaches, learn simple daily practices — from warm oil massage to grounding foods — that keep you balanced.",
    category: "Dosha Guides",
    author: "Dr. Anjali Nair",
    date: "September 2025",
    readTime: "7 min",
  },
];

export const blogCategories = [
  "All",
  "Dosha Guides",
  "Wellness Tips",
  "Seasonal Routines",
  "Practitioner Insights",
  "Recipes & Remedies",
];
