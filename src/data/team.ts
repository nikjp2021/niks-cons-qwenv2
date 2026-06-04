export interface TeamMember {
  name: string;
  nickname?: string;
  role: string;
  headline?: string;
  bio: string;
  initials: string;
  accentColor: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Nikhil Tiwari',
    nickname: 'Nik',
    role: 'Founder & Fractional CPO',
    headline: 'Agentic AI Builder | Xiaomi MiMo Grant Winner | PhD Candidate',
    bio: 'I build products with AI — not theory, working systems. 10+ years in product management. PhD candidate at Shizuoka University, Japan. I ship agentic AI systems, architect AI for health tech (telehealth, HIPAA). Previously at Expedia ($2M budget, 3K agents) and founder of MyTegami.win (5K users, NPS 72). Won the 2026 Xiaomi MiMo Builders Grant.',
    initials: 'NT',
    accentColor: '#14b8a6',
    linkedin: 'https://www.linkedin.com/in/ntiwari1',
  },
  {
    name: 'Pierre Lisboa de Carvalho',
    role: 'DX Officer & Automation Engineer',
    bio: 'Specialist in digital transformation strategy and AI automation engineering. Designs and implements intelligent workflows that streamline operations and drive efficiency.',
    initials: 'PC',
    accentColor: '#7c3aed',
    linkedin: '#',
  },
  {
    name: 'Ebele Egbuna',
    role: 'UI/UX Designer',
    bio: 'Creative UI/UX designer focused on crafting intuitive, user-centered digital experiences. Combines design thinking with AI-powered tools to deliver stunning, conversion-optimized interfaces.',
    initials: 'EE',
    accentColor: '#f43f5e',
    linkedin: '#',
  },
  {
    name: 'Bintang Wijaya',
    role: 'Full Stack Developer',
    bio: 'Versatile full stack developer with expertise in modern web technologies and AI integration. Builds robust, scalable applications that power digital transformation.',
    initials: 'BW',
    accentColor: '#0ea5e9',
    linkedin: '#',
  },
];
