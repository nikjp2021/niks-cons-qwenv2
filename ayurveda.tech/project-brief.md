# Project Brief: Ayurveda.Tech

## Brand Identity
- **Brand name**: Ayurveda.Tech
- **Tagline**: "Ancient Wisdom for Modern Wellness"
- **Brand personality**: grounded, progressive, trusted
- **Tone**: warm-authoritative — professional but inviting, mixing educational authority with accessible language; the voice of a wise guide who bridges tradition and technology

## Visual Direction
- **Primary color**: `#8B5A2B` (amber-brown — earth, rootedness, warmth)
- **Primary color (dark)**: `#6B4423` (deepened amber-brown)
- **Accent color**: `#2D6A4F` (forest green — vitality, nature, healing)
- **Accent color (dark)**: `#1B4332` (deep forest green)
- **Dark mode**: no — light mode first; dark mode toggle can be added later per WCAG AA contrast requirements
- **Style preferences**:
  1. Serif-dominant typography (Playfair Display / EB Garamond for headings) paired with clean sans-serif body text — heritage meets modern clarity
  2. Warm earthy color palette with amber-brown and forest green — grounded, natural, healing-focused
  3. Content-forward layout with dosha education, consultation pathways, and wellness library — knowledge as conversion driver

## Audience & Goal
- **Target audience**: Health-conscious individuals aged 25–55 seeking authentic Ayurvedic wellness guidance online, plus Ayurvedic practitioners and consultants looking for a digital platform to offer consultations and grow their practice
- **Conversion goal**: consult-booking — the primary action is registering and booking an Ayurvedic consultation (client path) or joining as a practitioner (consultant path)
- **Primary CTA**: "Register / Get Started" — with dual-path entry clarifying client vs. consultant journeys

## Pages to Build

| Path | Key Sections | Primary CTA |
|---|---|---|
| `/` | hero (value prop), dosha intro (Vata/Pitta/Kapha), how it works (dual path), testimonials, platform overview, CTA | Register / Get Started |
| `/consultation` | consultation overview, how online consultations work, types (dosha assessment, wellness plans, follow-ups), practitioner profiles, booking flow, pricing/packages | Book Consultation |
| `/about` | mission & story, team/practitioners, values (Ayurvedic principles), ecosystem overview (client, consultant, library), differentiators | Join Us / Get Started |
| `/blog` | blog listing grid, featured post ("Embracing Ayurveda: Ancient Wisdom for Modern Life"), category filters (dosha guides, wellness tips, seasonal routines), subscribe CTA | Subscribe / Read More |
| `/faq` | consolidated FAQ (no external redirect), categories (general, consultations, dosha, practitioners, technical), searchable accordion layout | Book Consultation |
| `/contact` | contact form (name, email, subject, message), direct email (support@ayurveda.tech), ecosystem links (client portal, consultant portal, library), office/location info | Send Message |

## Integrations

| Service | Status | Detail |
|---|---|---|
| Freshdesk (Knowledge Base) | detected — replace with on-site FAQ | Current FAQ at santhigramfoundation.freshdesk.com — consolidate into built-in `/faq` page |
| client.ayurveda.tech | external portal | Registration/Login for client consultations — link to from primary CTA |
| consultant.ayurveda.tech | external portal | Registration/Login for practitioners — link to from consultant path |
| ayurvedalibrary.org | external resource | Global Online Ayurveda Library — link as educational resource and SEO moat |
| explore.santhigramayurveda.com | external store | Product/storefront — link from relevant sections |
| Calendly / booking system | placeholder — integration pending | Online consultation booking flow needs scheduling tool (Calendly or custom) |
| GA4 / analytics | not detected — needs setup | No analytics tracking present; install GA4 for conversion measurement |
| Schema.org markup | not detected — needs implementation | Add HealthAndBeautyBusiness, Physician, FAQ, Article, BreadcrumbList schemas |
| Social meta / OG tags | not detected — needs implementation | Add Open Graph and Twitter Card tags for social sharing |

## Tech Stack (New Build)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) v12 |
| Typography | Playfair Display / EB Garamond (headings), Lora (body), Noto Sans (UI/body fallback) |
| Icons | Lucide React |
| Language | TypeScript |

## Gaps to Fix

1. **No blog or content marketing engine** — only one blog post exists; build a structured content engine around dosha types (Vata/Pitta/Kapha), seasonal routines, and wellness guides for high-intent SEO topics
2. **FAQ redirects to external Freshdesk** — breaks user experience; consolidate FAQ on-site via the `/faq` page with searchable accordion layout
3. **No social proof / testimonials** — homepage lacks concrete customer stories with outcomes; add testimonial section with practitioner success stories
4. **Dual-path CTA confusion** — client vs. consultant paths lack clarifying copy and distinct value propositions; add "How It Works" step-by-step for both audiences
5. **Pricing not visible** — visitors cannot determine consultation costs before committing to registration; add transparent pricing tiers or consultation packages
6. **No About / Team page** — missing trust-building content; create `/about` with practitioner profiles, mission, and founder story
7. **Missing JSON-LD schema** — implement HealthAndBeautyBusiness, Physician, FAQ, Article, BreadcrumbList for rich search results
8. **No analytics tracking** — no GA4, Pixel, or event tracking detected; install analytics for conversion measurement and audience insights
9. **No email capture / newsletter** — missing retargeting and audience-building opportunity; add newsletter signup with lead magnet (dosha e-guide)
10. **No OG / social meta tags** — add Open Graph and Twitter Card meta tags for social sharing optimization
11. **No mobile-responsive indicators detected** — critical for health/wellness audience; ensure responsive design at 375px, 768px, 1280px, 1440px
12. **Multiple draft/homepage versions (15+)** — indicates prolonged redesign limbo; commit to one clean, conversion-optimized homepage

## Notes
- **Two-sided marketplace**: Each page must clearly signal value for both audiences — wellness seekers and Ayurvedic practitioners — without causing decision paralysis
- **Domain ecosystem**: The main site (ayurveda.tech) is the hub linking to client.ayurveda.tech (consultations), consultant.ayurveda.tech (practitioner portal), ayurvedalibrary.org (education), and explore.santhigramayurveda.com (store). External links should open in new tabs where appropriate
- **Typography nuance**: Heading stack should lead with Playfair Display (heritage/luxury) with EB Garamond as secondary (tradition/authority); Lora is the primary body font with Noto Sans as UI fallback — this serif-to-sans-serif bridge mirrors the ancient-to-modern brand promise
- **Copyright year**: 2025 (as observed on original site)
- **Contact email**: support@ayurveda.tech — primary support contact
- **Framework recommendation**: Next.js 16 with App Router for SEO, performance, and future scalability; Tailwind CSS v4 for rapid, consistent styling; Motion v12 for purposeful animation (hero entrance, scroll reveals, hover states — not over-animated)
- **Page-data extraction was incomplete** — individual page extractions were not available; page structure and section definitions in this brief are synthesized from sitemap analysis, brand inference, and intended page architecture
