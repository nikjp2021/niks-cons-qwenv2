export interface Practitioner {
  id: string;
  name: string;
  credentials: string;
  specialisation: string;
  experience: string;
  bio: string;
  photo?: string;
}

export const practitioners: Practitioner[] = [
  {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    credentials: "BAMS, MD (Ayurveda)",
    specialisation: "Panchakarma, Women's Health",
    experience: "12 years",
    bio: "Dr. Priya Sharma specialises in Panchakarma and Women's Health, bringing over a decade of clinical experience to her practice.",
  },
  {
    id: "ramesh-iyer",
    name: "Vaidya Ramesh Iyer",
    credentials: "BAMS, MSc (Ayurvedic Nutrition)",
    specialisation: "Digestive Health, Lifestyle Medicine",
    experience: "18 years",
    bio: "Vaidya Ramesh Iyer combines traditional Ayurvedic knowledge with modern nutritional science for comprehensive digestive health care.",
  },
  {
    id: "anjali-nair",
    name: "Dr. Anjali Nair",
    credentials: "BAMS, PGD (Clinical Dietetics)",
    specialisation: "Skin Health, Stress Management",
    experience: "8 years",
    bio: "Dr. Anjali Nair focuses on the connection between skin health, stress, and overall wellness using personalised Ayurvedic approaches.",
  },
  {
    id: "vikram-joshi",
    name: "Dr. Vikram Joshi",
    credentials: "BAMS, PhD (Ayurvedic Pharmacology)",
    specialisation: "Joint Health, Detox Therapies",
    experience: "15 years",
    bio: "Dr. Vikram Joshi brings deep expertise in Ayurvedic pharmacology and detox therapies for joint and musculoskeletal health.",
  },
];
