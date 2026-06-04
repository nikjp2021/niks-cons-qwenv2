export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        question: "What is Ayurveda.Tech?",
        answer:
          "Ayurveda.Tech is a digital platform that connects wellness seekers with certified Ayurvedic practitioners for online consultations. We also provide an ecosystem of resources including the Global Ayurveda Library, a practitioner portal, and an Ayurvedic products store. Our mission is to make authentic Ayurvedic care accessible to everyone, anywhere.",
      },
      {
        question: "Is Ayurveda.Tech only for people who already know about Ayurveda?",
        answer:
          "Not at all. We welcome everyone — from complete beginners curious about doshas to seasoned practitioners. Our Dosha Assessment consultation is the perfect starting point if you're new to Ayurveda. Our content library and blog also offer plenty of educational resources to help you learn at your own pace.",
      },
      {
        question: "How is Ayurveda.Tech different from other wellness platforms?",
        answer:
          "Three key differences: (1) We focus exclusively on authentic Ayurvedic care — not generic wellness. (2) Every practitioner on our platform is credential-verified. (3) We provide an integrated ecosystem — consultations, library access, products, and community — all working together.",
      },
      {
        question: "Is my health information secure?",
        answer:
          "Absolutely. All consultations are conducted over encrypted video. Your health data is stored securely and never shared without your consent. We comply with applicable data protection regulations.",
      },
    ],
  },
  {
    id: "consultations",
    label: "Consultations",
    questions: [
      {
        question: "How do online consultations work?",
        answer:
          "After you book a consultation, you'll receive a secure video link. At your scheduled time, you'll connect with your practitioner face-to-face online. They'll take your health history, assess your constitution, and provide a personalised wellness plan. No downloads or technical setup required.",
      },
      {
        question: "What happens in a Dosha Assessment?",
        answer:
          "Your practitioner will take a detailed health history, assess your physical and mental characteristics, and determine your Prakriti (unique constitution) and Vikriti (current imbalances). You'll receive a comprehensive understanding of your dominant dosha(s) and practical guidance for restoring balance.",
      },
      {
        question: "How do I prepare for my first consultation?",
        answer:
          "You'll receive a pre-consultation form to fill out. We recommend having a quiet space with good lighting for the video call, keeping a glass of warm water handy, and coming with an open mind. No special preparation is needed.",
      },
      {
        question: "Can I choose my practitioner?",
        answer:
          "Yes. You can browse practitioner profiles, read their credentials and specialisations, and select the one who best matches your needs. You're also welcome to switch practitioners between consultations if you'd like.",
      },
      {
        question: "What if I need to cancel or reschedule?",
        answer:
          "You can reschedule up to 24 hours before your appointment at no charge. Cancellations within 24 hours may be subject to a nominal fee. We understand life happens — contact us at support@ayurveda.tech if you need assistance.",
      },
    ],
  },
  {
    id: "dosha",
    label: "Dosha",
    questions: [
      {
        question: "What are Vata, Pitta, and Kapha?",
        answer:
          "In Ayurveda, Vata, Pitta, and Kapha are the three doshas — biological energies that govern all physical and mental processes. Vata (air and space) controls movement and creativity. Pitta (fire and water) governs digestion and transformation. Kapha (earth and water) provides structure and stability. Everyone has a unique combination of these three.",
      },
      {
        question: "Can my dosha change over time?",
        answer:
          "Your Prakriti (natural constitution) remains stable throughout your life. However, your Vikriti (current state of balance) can shift with seasons, lifestyle, stress, diet, and age. This is why periodic consultations are valuable — to adjust your wellness plan as your needs change.",
      },
      {
        question: "Do I need to know my dosha before booking a consultation?",
        answer:
          "No. Your first Dosha Assessment consultation will determine both your Prakriti and current imbalances. Many clients book specifically to discover their dosha and what it means for their health.",
      },
      {
        question: "Can I have more than one dominant dosha?",
        answer:
          "Yes. Many people are dual-dosha (e.g., Vata-Pitta or Pitta-Kapha). Some are even tri-doshic (all three in balance), though this is rare. Most people have one primary dosha and one secondary.",
      },
    ],
  },
  {
    id: "practitioners",
    label: "Practitioners",
    questions: [
      {
        question: "How are practitioners vetted?",
        answer:
          "Every practitioner undergoes a credential verification process. We verify their degrees (BAMS, MD, PhD, etc.), professional experience, and specialisation. Only qualified practitioners are listed on our platform.",
      },
      {
        question: "I'm an Ayurvedic practitioner. How do I join the platform?",
        answer:
          "Visit consultant.ayurveda.tech to create your profile. You'll need to provide your credentials, areas of specialisation, and consultation offerings. Our team reviews every application to ensure quality standards.",
      },
      {
        question: "What tools do practitioners get on the platform?",
        answer:
          "Practitioners get a complete digital practice management suite: profile creation, scheduling and calendar management, secure video consultations, client progress tracking, payment processing, and client communication tools.",
      },
      {
        question: "Can practitioners set their own prices?",
        answer:
          "Yes. We provide recommended pricing based on consultation type and market data, but practitioners have full control over their rates.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    questions: [
      {
        question: "What equipment do I need for a consultation?",
        answer:
          "A device with a camera and microphone (smartphone, tablet, laptop, or desktop) and a stable internet connection. All consultations work through a web browser — no app download required.",
      },
      {
        question: "Which browsers are supported?",
        answer:
          "We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend Chrome or Firefox.",
      },
      {
        question: "How do I access my consultation recordings or plans?",
        answer:
          "After your consultation, your wellness plan and any resources shared by your practitioner are available in your client portal at client.ayurveda.tech.",
      },
      {
        question: "I'm having trouble with the video call. What should I do?",
        answer:
          "First, check your internet connection and ensure your browser has camera/microphone permissions. If issues persist, contact support@ayurveda.tech and we'll help you resolve it.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Currently, our platform is fully optimised for mobile browsers. A dedicated mobile app is on our roadmap.",
      },
    ],
  },
];
