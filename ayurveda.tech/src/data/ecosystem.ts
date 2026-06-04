export interface EcosystemItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const ecosystemItems: EcosystemItem[] = [
  {
    title: "Client Portal",
    description: "Book consultations, message your practitioner, track your wellness journey.",
    href: "https://client.ayurveda.tech",
    icon: "User",
  },
  {
    title: "Consultant Portal",
    description: "Manage your practice, reach new clients, grow your impact.",
    href: "https://consultant.ayurveda.tech",
    icon: "Briefcase",
  },
  {
    title: "Global Library",
    description: "Explore thousands of Ayurvedic texts, research papers, and educational resources.",
    href: "https://ayurvedalibrary.org",
    icon: "Book",
  },
  {
    title: "Ayurveda Store",
    description: "Discover authentic Ayurvedic products — herbs, oils, and wellness essentials.",
    href: "https://explore.santhigramayurveda.com",
    icon: "ShoppingBag",
  },
];
