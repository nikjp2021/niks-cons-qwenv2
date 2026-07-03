# Pages — Nik's Consulting V2

## Route Map

| Route | Page | Priority | Purpose | Conversion Goal |
|---|---|---|---|---|
| `/` | Home | P0 | Brand introduction, service overview, social proof | Get a Free Quote |
| `/services` | Services | P0 | Detailed service catalog with features | Get Started (per service) |
| `/case-studies` | Case Studies | P0 | Proof of results with measurable outcomes | Start Your Project |
| `/about` | About | P0 | Team credibility, founder story, expertise | Get a Free Quote |
| `/contact` | Contact | P0 | Direct communication channel | Send Message / Schedule Call |
| `/get-a-quote` | Get a Quote | P0 | Primary conversion — lead capture form | Submit Quote Request |
| `/blog` | Blog | P1 | Content marketing, SEO, thought leadership | Newsletter signup |
| `/training` | Training | P1 | AI training programs, course offerings | Book a Training |
| `/internship` | Internship | P1 | Gifted internship program, talent acquisition | Apply for Internship |
| `/bootstrap-maverick` | Bootstrap Maverick | P1 | AI brainstorming tool landing page | Start Brainstorming Free |

---

## Shared Components

### Navbar
- **Type:** Sticky top, glass-card backdrop on scroll
- **Content:** Logo (left), nav links (center), CTA + theme toggle (right)
- **Nav links:** Home, Bootstrap Maverick, Services (dropdown: Our Services, Case Studies), Training (dropdown: AI Training, Gifted Internship), About, Blog, Contact
- **CTA:** "Get a Quote" pill button → `/get-a-quote`
- **Mobile:** Hamburger icon → full-screen overlay menu
- **Theme toggle:** Sun/Moon icon, toggles `.light` class on `<html>`
- **Animation:** Fade-in on mount, glass blur on scroll

### Footer
- **Layout:** 4-column grid (Brand + Newsletter | Services links | Company links | Contact info)
- **Content:** Brand tagline, newsletter email input, service links, company links, email/phone/location
- **WhatsApp button:** Fixed bottom-right floating circle button
- **Bottom bar:** Copyright + "Built with passion" tagline
- **Animation:** Static (no scroll reveal — footer is always visible at bottom)

---

## Page 1: Home (`/`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── BadgePill ("AI-First Consulting")
│   ├── Headline (h1, staggered word reveal)
│   ├── Subheadline (fade-up delay)
│   ├── CTAButton × 2 (Get a Free Quote, Explore Services)
│   └── MetricsRow (300% ROI | 15+ Countries | 50+ Projects — counter animation)
├── MarqueeSection
│   └── ScrollingMarquee (infinite horizontal, keywords)
├── StatsSection
│   ├── SectionHeader ("Real Businesses, Real Outcomes")
│   └── CounterGrid (4 animated counters)
├── ServicesSection
│   ├── SectionHeader (headline + description)
│   └── ServiceCardGrid (3×2 grid, staggered reveal)
│       └── ServiceCard × 6 (icon, title, description, "Learn more" link)
├── ToolsSection
│   └── LogoStrip (8 tool logos, infinite scroll or static grid)
├── ProcessSection
│   ├── SectionHeader ("How We Work")
│   └── ProcessCardRow (4 horizontal cards, staggered)
│       └── ProcessCard × 4 (step number, title, description)
├── CaseStudiesPreview
│   ├── SectionHeader
│   └── CaseStudyCardGrid (3 featured cards)
│       └── CaseStudyCard × 3 (image, badge, title, results, tags)
├── TestimonialsSection
│   ├── SectionHeader ("What Our Clients Say")
│   └── TestimonialCardGrid (3 cards)
│       └── TestimonialCard × 3 (stars, quote, avatar, name/role)
├── FinalCTASection
│   ├── Headline
│   ├── Description
│   ├── CTAButton × 2
│   └── BadgeRow (Free consultation · No commitment · Response within 24h)
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger | Physics |
|---|---|---|---|
| Hero | Staggered word reveal (headline), fade-up (subhead, CTAs) | On mount | `ease-out-expo`, 300ms stagger |
| Marquee | Infinite horizontal translate | Always running | `linear`, 30s loop |
| Stats | Counter animation (0 → value) | `whileInView` | `ease-out-quart`, 2s |
| Services Grid | Staggered fade-up (cards) | `whileInView`, once | Spring: stiffness 200, damping 25 |
| Tools | Static or subtle fade-in | `whileInView`, once | `ease-out`, 300ms |
| Process | Staggered fade-up (cards) | `whileInView`, once | Spring: stiffness 200, damping 25 |
| Case Studies | Staggered scale-in (cards) | `whileInView`, once | Spring: stiffness 200, damping 25 |
| Testimonials | Staggered fade-up | `whileInView`, once | Spring: stiffness 200, damping 25 |
| Final CTA | Fade-up (all elements) | `whileInView`, once | `ease-out-expo`, 400ms |

### Section Details
1. **Hero** — Full viewport height, hero-gradient background, centered content
2. **Marquee** — 50% viewport width items, duplicated for seamless loop
3. **Stats** — 4-column grid, monospace numbers, brand-500 accent
4. **Services** — 3-column grid (2 on tablet, 1 on mobile), glass-card style
5. **Tools** — Horizontal logo strip, grayscale with hover color
6. **Process** — 4-column grid (2 on tablet), step numbers in mono font
7. **Case Studies** — 3-column grid, category badge, result metrics
8. **Testimonials** — 3-column grid, star ratings, avatar initials
9. **Final CTA** — Full-width, hero-gradient background, centered

---

## Page 2: Services (`/services`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── Headline ("OUR SERVICES")
│   └── Description
├── ServiceDetailSection × 6
│   ├── ServiceNumber (01–06, mono font)
│   ├── ServiceTitle (h2)
│   ├── ServiceDescription
│   ├── FeatureList (6 items with check icons)
│   └── CTAButton ("Get Started")
├── CrossSellCTA
│   ├── Headline ("See Our Work in Action")
│   ├── Description
│   └── CTAButton ("View Case Studies")
├── BottomCTA
│   ├── Headline ("Not sure which service you need?")
│   ├── Description
│   └── CTAButton ("Book a Free Consultation")
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger |
|---|---|---|
| Hero | Fade-up headline + description | On mount |
| Service blocks | Alternating left/right fade-in | `whileInView`, once |
| Cross-sell CTA | Fade-up | `whileInView`, once |
| Bottom CTA | Fade-up | `whileInView`, once |

### Section Details
1. **Hero** — Standard page hero with gradient background
2. **Service blocks** — Full-width alternating layout (odd: content left, even: content right), each with anchored ID for deep linking
3. **Cross-sell** — Teal-accented CTA section linking to case studies
4. **Bottom CTA** — Final conversion push

---

## Page 3: Case Studies (`/case-studies`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── Headline ("CASE STUDIES")
│   └── Description
├── CaseStudyGrid
│   └── CaseStudyCard × 6
│       ├── CategoryBadge
│       ├── Title (h3)
│       ├── Location
│       ├── ChallengeDescription
│       ├── SolutionDescription
│       ├── ResultsList (3-4 metric items)
│       └── TagRow
├── BottomCTA
│   ├── Headline ("Want to be our next success story?")
│   ├── Description
│   └── CTAButton ("Start Your Project")
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger |
|---|---|---|
| Hero | Fade-up | On mount |
| Case study cards | Staggered fade-up | `whileInView`, once |
| Bottom CTA | Fade-up | `whileInView`, once |

### Section Details
1. **Hero** — Standard page hero
2. **Case study grid** — 2-column grid (1 on mobile), each card expandable or full-bleed
3. **Bottom CTA** — Conversion section

---

## Page 4: About (`/about`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── Headline ("ABOUT NIK'S CONSULTING")
│   └── Tagline
├── CompanyStorySection
│   ├── Headline ("Empowering Businesses Through AI & Technology")
│   └── BodyText (full narrative)
├── StatsSection
│   └── StatItem × 4 (15+ Countries, 50+ Projects, 10+ Years, 300% Satisfaction)
├── MissionVisionSection
│   ├── VisionBlock
│   └── MissionBlock
├── FounderSection
│   ├── FounderCard
│   │   ├── Avatar/Photo
│   │   ├── Name + Title
│   │   ├── Bio
│   │   └── TagRow (expertise areas)
├── TeamSection
│   ├── SectionHeader
│   └── TeamCardGrid (3 cards)
│       └── TeamCard × 3 (avatar, name, role)
├── ExpertiseSection
│   ├── SectionHeader
│   └── ExpertiseBadgeGrid (6 badges)
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger |
|---|---|---|
| Hero | Fade-up | On mount |
| Company Story | Fade-up | `whileInView`, once |
| Stats | Counter animation | `whileInView`, once |
| Mission/Vision | Fade-up (2-column) | `whileInView`, once |
| Founder | Scale-in + fade | `whileInView`, once |
| Team Grid | Staggered fade-up | `whileInView`, once |
| Expertise | Staggered fade-up | `whileInView`, once |

---

## Page 5: Contact (`/contact`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── Headline ("GET IN TOUCH")
│   └── Description
├── ContactContent (2-column layout)
│   ├── ContactForm
│   │   ├── InputField (First Name)
│   │   ├── InputField (Last Name)
│   │   ├── InputField (Email)
│   │   ├── InputField (Phone)
│   │   ├── SelectField (Service Interested In)
│   │   ├── TextareaField (Message)
│   │   └── SubmitButton ("Send Message")
│   └── ContactSidebar
│       ├── ContactInfoCard (Email, Phone, WhatsApp)
│       └── ScheduleCard ("Prefer a Conversation?" + booking link)
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger |
|---|---|---|
| Hero | Fade-up | On mount |
| Form | Fade-in from left | `whileInView`, once |
| Sidebar | Fade-in from right | `whileInView`, once |

---

## Page 6: Get a Quote (`/get-a-quote`)

### Component Tree
```
Layout
├── Navbar
├── HeroSection
│   ├── Headline ("GET A FREE QUOTE")
│   └── Description
├── QuoteFormSection
│   ├── StepIndicator (1/3, 2/3, 3/3)
│   ├── Step1Form (Your Information)
│   │   ├── InputField × 4 (First Name, Last Name, Email, Phone)
│   │   └── NextButton
│   ├── Step2Form (Your Business)
│   │   ├── InputField (Company Name)
│   │   ├── InputField (Website)
│   │   ├── SelectField (Industry)
│   │   ├── InputField (Location)
│   │   └── BackButton + NextButton
│   ├── Step3Form (Project Details)
│   │   ├── SelectField (Service Needed)
│   │   ├── SelectField (Budget)
│   │   ├── SelectField (Timeline)
│   │   ├── TextareaField (Description)
│   │   └── BackButton + SubmitButton
│   └── SuccessState (after submission)
├── WhatHappensNext
│   ├── SectionHeader
│   └── StepCard × 4 (Review, Consultation, Proposal, Kickoff)
├── AlternativeCTA
│   ├── ScheduleCallButton
│   └── WhatsAppButton
├── Assurances
│   └── "100% Satisfaction · Free consultation. No obligations. We respond within 24 hours."
└── Footer
```

### Animation Strategy
| Section | Animation | Trigger |
|---|---|---|
| Hero | Fade-up | On mount |
| Form steps | Slide-in (left/right) on step change | AnimatePresence |
| Step indicator | Progress bar fill | On step change |
| What Happens Next | Staggered fade-up | `whileInView`, once |
| Alternative CTAs | Fade-up | `whileInView`, once |

---

## Reusable Component Inventory

| Component | Used In | Description |
|---|---|---|
| `Navbar` | All pages | Sticky top nav with glass blur, mobile menu, theme toggle |
| `Footer` | All pages | 4-column footer with newsletter, links, contact |
| `SectionContainer` | All pages | Max-width wrapper with responsive padding |
| `SectionHeader` | Most pages | Badge pill + headline + description pattern |
| `BadgePill` | Home, Services | Section label with dot indicator |
| `CTAButton` | All pages | Primary/secondary button with hover glow |
| `MagneticButton` | Home hero, CTAs | Magnetic hover effect on primary CTAs |
| `ServiceCard` | Home | Icon + title + description + link |
| `ServiceDetailBlock` | Services | Full service layout with features |
| `CaseStudyCard` | Home, Case Studies | Case study preview with results |
| `TestimonialCard` | Home | Star rating + quote + avatar |
| `ProcessCard` | Home, Get a Quote | Step number + title + description |
| `Counter` | Home stats | Animated number counter |
| `ScrollReveal` | All sections | Viewport-triggered fade-up wrapper |
| `StaggerContainer` | Card grids | Staggered child animation container |
| `StaggerItem` | Card grids | Individual staggered item |
| `TeamCard` | About | Avatar + name + role |
| `FounderCard` | About | Photo + bio + tags |
| `ContactForm` | Contact | Multi-field form with validation |
| `QuoteForm` | Get a Quote | Multi-step form with progress |
| `StepIndicator` | Get a Quote | 3-step progress bar |
| `LogoStrip` | Home | Tool/partner logos |
| `WhatsAppButton` | All pages (floating) | Fixed bottom-right chat button |
| `ThemeToggle` | Navbar | Light/dark mode switch |
| `ScrollingMarquee` | Home | Infinite horizontal keyword scroll |
| `InputField` | Contact, Quote | Styled form input |
| `SelectField` | Contact, Quote | Styled dropdown select |
| `TextareaField` | Contact, Quote | Styled textarea |

---

## Global Animation Spec

### Import Pattern
```tsx
// React Client Components
import { motion, AnimatePresence } from "motion/react"

// React Server Components (if needed)
import { motion } from "motion/react-client"
```

### Spring Physics Presets
```tsx
const springs = {
  default:  { type: "spring", stiffness: 300, damping: 30 },
  bouncy:   { type: "spring", stiffness: 200, damping: 20 },
  stiff:    { type: "spring", stiffness: 400, damping: 30 },
  smooth:   { type: "spring", stiffness: 100, damping: 20 },
  card:     { type: "spring", stiffness: 200, damping: 25 },
}
```

### Common Variants
```tsx
// ScrollReveal — fade up on viewport entry
const revealVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// StaggerContainer — parent staggers children
const staggerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// StaggerItem — individual item in stagger
const staggerItemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Hero word reveal — staggered word-by-word
const wordVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}
```

### Performance Rules
- **GPU-only:** Animate `transform` and `opacity` exclusively
- **No layout triggers:** Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- **will-change:** Apply sparingly to elements that will animate
- **AnimatePresence:** Wrap ALL conditional renders for smooth exit animations
- **viewport={{ once: true }}:** All scroll reveals trigger once only
