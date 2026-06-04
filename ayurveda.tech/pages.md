# Page Architecture — Ayurveda.Tech

**Framework:** Next.js 16 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS v4 + tokens.css + globals.css
**Animation:** Motion (Framer Motion) v12
**Icons:** Lucide React

---

## 1. File Structure

```
app/
├── layout.tsx                    # Root layout — fonts, meta, Navbar, Footer
├── page.tsx                      # Homepage (/)
├── not-found.tsx                 # 404 page
├── loading.tsx                   # Global loading state
├── globals.css                   # Base styles (imports tokens.css)
├── tokens.css                    # Design system (CSS custom properties)
│
├── consultation/
│   ├── page.tsx                  # Consultation page (/consultation)
│   └── loading.tsx               # Consultation loading state
│
├── about/
│   ├── page.tsx                  # About page (/about)
│   └── loading.tsx
│
├── blog/
│   ├── page.tsx                  # Blog listing (/blog)
│   ├── loading.tsx
│   └── [slug]/
│       └── page.tsx              # Blog post (/blog/[slug])
│
├── faq/
│   ├── page.tsx                  # FAQ page (/faq)
│   └── loading.tsx
│
└── contact/
    ├── page.tsx                  # Contact page (/contact)
    └── loading.tsx

components/
├── layout/
│   ├── Navbar.tsx                # Global navigation
│   ├── Footer.tsx                # Global footer
│   ├── MobileMenu.tsx            # Mobile hamburger menu
│   └── SkipLink.tsx              # Accessibility skip link
│
├── sections/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── DoshaIntroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PlatformOverviewSection.tsx
│   │   └── FinalCTASection.tsx
│   │
│   ├── consultation/
│   │   ├── ConsultationHero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ConsultationTypes.tsx
│   │   ├── PractitionerGrid.tsx
│   │   ├── PricingPackages.tsx
│   │   └── ConsultationFAQ.tsx
│   │
│   ├── about/
│   │   ├── MissionStory.tsx
│   │   ├── TeamSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── EcosystemOverview.tsx
│   │   └── Differentiators.tsx
│   │
│   ├── blog/
│   │   ├── BlogHeader.tsx
│   │   ├── FeaturedPost.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SubscribeCTA.tsx
│   │
│   ├── faq/
│   │   ├── FAQHeader.tsx
│   │   ├── FAQCategory.tsx
│   │   ├── FAQSearch.tsx
│   │   └── FAQBottomCTA.tsx
│   │
│   └── contact/
│       ├── ContactHeader.tsx
│       ├── ContactForm.tsx
│       ├── ContactInfo.tsx
│       └── ContactCTA.tsx
│
├── ui/
│   ├── Button.tsx                # Button component (primary, secondary, ghost, sizes)
│   ├── Card.tsx                  # Reusable card component
│   ├── Badge.tsx                 # Badge / tag component
│   ├── Input.tsx                 # Form input component
│   ├── Textarea.tsx              # Form textarea component
│   ├── Select.tsx                # Form select/dropdown
│   ├── Section.tsx               # Section wrapper (label, headline, subheadline)
│   ├── Container.tsx             # Max-width container component
│   ├── TestimonialCard.tsx       # Testimonial display card
│   ├── PractitionerCard.tsx      # Practitioner profile card
│   ├── DoshaCard.tsx             # Dosha intro card
│   ├── BlogCard.tsx              # Blog preview card
│   ├── FAQAccordion.tsx          # Accessible accordion component
│   ├── PricingCard.tsx           # Pricing tier card
│   ├── EcosystemLink.tsx         # Ecosystem portal link card
│   ├── SectionLabel.tsx          # Section label/tag
│   ├── NewsletterForm.tsx        # Email capture form
│   └── SearchInput.tsx           # Search field component
│
└── animations/
    ├── FadeInView.tsx            # Scroll reveal wrapper (opacity + translateY)
    ├── StaggerContainer.tsx      # Staggered children reveal
    ├── StaggerItem.tsx           # Individual stagger child
    └── SpringHover.tsx           # Hover lift animation wrapper

public/
├── images/
│   ├── hero-home.webp            # Homepage hero image
│   ├── hero-consultation.webp    # Consultation hero image
│   ├── dosha-vata.webp           # Vata illustration
│   ├── dosha-pitta.webp          # Pitta illustration
│   ├── dosha-kapha.webp          # Kapha illustration
│   ├── about-team.webp           # Team photo
│   ├── blog-featured.webp        # Featured blog image
│   ├── practitioner-1.webp       # Dr. Priya Sharma
│   ├── practitioner-2.webp       # Vaidya Ramesh Iyer
│   ├── practitioner-3.webp       # Dr. Anjali Nair
│   ├── practitioner-4.webp       # Dr. Vikram Joshi
│   ├── testimonial-1.webp        # Priya M.
│   ├── testimonial-2.webp        # Dr. Arun K.
│   ├── testimonial-3.webp        # Sarah L.
│   └── og-image.webp             # OG default image (1200×630)
├── logo/
│   ├── ayurveda-logo-primary.svg
│   ├── ayurveda-logo-reversed.svg
│   └── ayurveda-logo-monochrome.svg
├── favicon/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
└── robots.txt
```

---

## 2. Route Map

| Path | Page Title | Purpose | Conversion Goal | Sections (in order) |
|------|-----------|---------|-----------------|---------------------|
| `/` | Home | Brand introduction, value prop, dual-path education | Consult-booking (client) / Practitioner signup | Hero, DoshaIntro, HowItWorks, Testimonials, PlatformOverview, FinalCTA |
| `/consultation` | Consultation | Consultation types, practitioners, pricing | Book consultation | Hero, HowItWorks, ConsultationTypes, PractitionerGrid, PricingPackages, FAQ |
| `/about` | About | Trust building, mission, team, values | Practitioner signup, consultation booking | MissionStory, TeamSection, ValuesSection, EcosystemOverview, Differentiators |
| `/blog` | Blog | SEO, content marketing, education | Newsletter subscribe, consultation booking | BlogHeader, FeaturedPost, CategoryFilter, BlogGrid, SubscribeCTA |
| `/faq` | FAQ | Reduce support friction, answer objections | Consultation booking | FAQHeader, FAQSearch, FAQCategory × 5, FAQBottomCTA |
| `/contact` | Contact | Support, inquiries, lead capture | Message submission, consultation booking | ContactHeader, ContactForm + ContactInfo, ContactCTA |

---

## 3. Component Hierarchy

### 3.1 Root Layout (`app/layout.tsx`)

```
<html>
  <body>
    <SkipLink />
    <Navbar />
      ├── Logo (link to /)
      ├── Desktop Nav Links
      │   ├── Home (/)
      │   ├── Consultation (/consultation)
      │   ├── About (/about)
      │   ├── Blog (/blog)
      │   ├── FAQ (/faq)
      │   └── Contact (/contact)
      ├── Dual CTAs
      │   ├── Button "Get Started" (primary) → client.ayurveda.tech
      │   └── Button "Join as Practitioner" (secondary) → consultant.ayurveda.tech
      └── MobileMenu
          ├── Hamburger toggle (≤768px)
          └── Slide-in panel with all nav links + CTAs
    <main>{children}</main>
    <Footer />
      ├── Brand column (logo, tagline, description)
      ├── Quick Links column
      ├── Ecosystem column
      ├── Newsletter + Contact column
      │   └── NewsletterForm (email input + subscribe button)
      └── Bottom bar (copyright + legal links)
  </body>
</html>
```

### 3.2 Homepage (`app/page.tsx`)

```
<HomePage>
  <HeroSection />
    ├── Badge ("Ancient Wisdom for Modern Wellness")
    ├── Headline (staggered reveal — motion, y: 30 → 0)
    ├── Subheadline (staggered reveal)
    └── Dual CTAs (staggered reveal)
      ├── Button "Find Your Practitioner" (primary)
      └── Button "Join as a Practitioner" (secondary)

  <DoshaIntroSection />
    ├── SectionLabel ("KNOW YOUR BODY")
    ├── Headline
    ├── Subheadline
    ├── DoshaCard × 3 (Vata / Pitta / Kapha)
    │   ├── Dosha icon/illustration
    │   ├── Dosha name + element
    │   ├── Description
    │   ├── Characteristics list
    │   ├── Focus areas
    │   └── CTA link
    └── Bottom CTA → Dosha Quiz

  <HowItWorksSection />
    ├── SectionLabel ("HOW IT WORKS")
    ├── Headline
    ├── Subheadline
    ├── Tab toggle (Client / Practitioner)
    └── Step cards × 3 (with icon, number, title, description)

  <TestimonialsSection />
    ├── SectionLabel ("SUCCESS STORIES")
    ├── Headline
    └── TestimonialCard × 3
      ├── Quote
      ├── Author name + role
      └── Avatar (optional)

  <PlatformOverviewSection />
    ├── SectionLabel ("OUR ECOSYSTEM")
    ├── Headline
    ├── Subheadline
    └── EcosystemLink × 4 (Client Portal, Consultant Portal, Library, Store)

  <FinalCTASection />
    ├── Headline
    ├── Subheadline
    ├── Button "Book a Consultation" (primary, large)
    └── Button "Learn More About Practitioners" (secondary)
</HomePage>
```

### 3.3 Consultation Page (`app/consultation/page.tsx`)

```
<ConsultationPage>
  <ConsultationHero />
    ├── Badge ("ONLINE AYURVEDIC CONSULTATIONS")
    ├── Headline
    ├── Subheadline
    ├── Button "Book a Consultation" (primary)
    └── Button "Explore Practitioners" (ghost, scroll anchor)

  <HowItWorks /> (step-by-step process, 6 steps)
    ├── SectionLabel
    ├── Headline
    └── Ordered steps × 6 (icon, number, title, description)

  <ConsultationTypes />
    ├── SectionLabel ("CONSULTATION TYPES")
    ├── Headline
    └── PricingCard × 4 (Dosha Assessment, Wellness Plan, Follow-Up, Seasonal Cleanse)
      ├── Title
      ├── Description
      ├── Duration
      ├── Price
      └── Button "Book Now"

  <PractitionerGrid />
    ├── SectionLabel ("MEET OUR PRACTITIONERS")
    ├── Headline
    ├── Subheadline
    ├── PractitionerCard × 4
    │   ├── Photo
    │   ├── Name + credentials
    │   ├── Specialisation
    │   ├── Experience
    │   └── CTA "View Profile"
    └── Button "View All Practitioners"

  <PricingPackages />
    ├── SectionLabel ("INVEST IN YOUR WELLNESS")
    ├── Headline
    └── PricingCard × 4 (Starter, Balanced, Comprehensive, Seasonal)
      ├── Plan name
      ├── Sessions count
      ├── Price
      ├── Savings label
      ├── Best for description
      └── CTA button

  <ConsultationFAQ /> (inline mini-FAQ)
    ├── Headline
    ├── FAQAccordion × 4
    └── CTA "View Full FAQ"
</ConsultationPage>
```

### 3.4 About Page (`app/about/page.tsx`)

```
<AboutPage>
  <MissionStory />
    ├── Headline ("Bridging Two Worlds")
    ├── Subheadline
    ├── Body paragraphs
    └── Team photo

  <TeamSection />
    ├── SectionLabel
    ├── Headline ("The People Behind the Platform")
    ├── Subheadline
    └── Team member cards × 4 (photo, name, role, bio)

  <ValuesSection />
    ├── SectionLabel
    ├── Headline ("Rooted in Ayurvedic Principles")
    └── Value cards × 5 (Sanskrit name, English translation, what it means)

  <EcosystemOverview />
    ├── SectionLabel
    ├── Headline
    ├── Subheadline
    └── EcosystemLink × 4

  <Differentiators />
    ├── SectionLabel
    ├── Headline ("Why Ayurveda.Tech?")
    ├── Differentiator cards × 5
    └── CTA "Begin Your Journey Today"
</AboutPage>
```

### 3.5 Blog Page (`app/blog/page.tsx`)

```
<BlogPage>
  <BlogHeader />
    ├── Headline ("The Ayurveda.Tech Journal")
    └── Subheadline

  <FeaturedPost />
    ├── Category badge
    ├── Title
    ├── Excerpt
    ├── Author + Date + Read time
    └── Button "Read Article"

  <CategoryFilter />
    └── Filter buttons × 6 (All, Dosha Guides, Wellness Tips, Seasonal, Practitioner Insights, Recipes)

  <BlogGrid />
    └── BlogCard × 9 (3×3 grid, paginated)
      ├── Category badge
      ├── Featured image
      ├── Title
      ├── Excerpt (2-3 lines)
      ├── Author + Date
      └── Link "Read Article"

  <SubscribeCTA />
    ├── Headline
    ├── Body text
    ├── NewsletterForm
    └── Incentive text
</BlogPage>
```

### 3.6 Blog Post (`app/blog/[slug]/page.tsx`)

```
<BlogPostPage>
  <article>
    <header>
      ├── Category badge
      ├── H1 title
      ├── Author + Date + Read time
      └── Featured image
    <Body content (rich text / prose)>
    <footer>
      ├── Share buttons (social)
      └── Related posts
  </article>
</BlogPostPage>
```

### 3.7 FAQ Page (`app/faq/page.tsx`)

```
<FAQPage>
  <FAQHeader />
    ├── Headline ("Questions? We've Got Answers.")
    ├── Subheadline
    └── FAQSearch (search input with icon)

  <FAQSection category="General">
    └── FAQAccordion × 4

  <FAQSection category="Consultations">
    └── FAQAccordion × 5

  <FAQSection category="Dosha">
    └── FAQAccordion × 4

  <FAQSection category="Practitioners">
    └── FAQAccordion × 4

  <FAQSection category="Technical">
    └── FAQAccordion × 5

  <FAQBottomCTA />
    ├── Headline ("Still Have Questions?")
    ├── Body
    ├── Button "Contact Us"
    └── Button "Book a Consultation"
</FAQPage>
```

### 3.8 Contact Page (`app/contact/page.tsx`)

```
<ContactPage>
  <ContactHeader />
    ├── Headline ("Get in Touch")
    └── Subheadline

  <div className="split-layout">
    <ContactForm />
      ├── Input (Name)
      ├── Input (Email)
      ├── Select (Subject)
      ├── Textarea (Message)
      └── Button "Send Message"

    <ContactInfo />
      ├── Email: support@ayurveda.tech
      ├── Response time note
      ├── Quick links × 5
      └── Social links
  </div>

  <ContactCTA />
    ├── Headline ("Ready to Start Your Wellness Journey?")
    ├── Body
    └── Button "Book a Consultation"
</ContactPage>
```

---

## 4. Shared / Reusable Component Inventory

| Component | File | Used On | Props |
|-----------|------|---------|-------|
| Navbar | `layout/Navbar.tsx` | All pages | — (self-contained, client component) |
| Footer | `layout/Footer.tsx` | All pages | — (server component) |
| MobileMenu | `layout/MobileMenu.tsx` | Navbar internal | `isOpen`, `onClose` |
| SkipLink | `layout/SkipLink.tsx` | Layout root | — |
| Button | `ui/Button.tsx` | All pages | `variant: 'primary' | 'secondary' | 'ghost'`, `size: 'sm' | 'md' | 'lg'`, `href?`, `children`, `onClick?`, `external?` |
| Card | `ui/Card.tsx` | All pages | `children`, `className?`, `hover?` |
| Badge | `ui/Badge.tsx` | Hero, Blog, Dosha | `variant: 'default' | 'vata' | 'pitta' | 'kapha'`, `children` |
| Input | `ui/Input.tsx` | Contact, Newsletter | `label`, `type`, `placeholder`, `required`, `error?` |
| Textarea | `ui/Textarea.tsx` | Contact | `label`, `placeholder`, `required` |
| Select | `ui/Select.tsx` | Contact | `label`, `options[]`, `required` |
| Section | `ui/Section.tsx` | All pages | `label?`, `headline`, `subheadline?`, `children`, `background?` |
| Container | `ui/Container.tsx` | All pages | `children`, `as?: 'div' | 'section'`, `className?` |
| SectionLabel | `ui/SectionLabel.tsx` | All sections | `children` |
| DoshaCard | `ui/DoshaCard.tsx` | Homepage | `dosha: 'vata' | 'pitta' | 'kapha'` |
| TestimonialCard | `ui/TestimonialCard.tsx` | Homepage | `quote`, `author`, `role`, `avatar?` |
| PractitionerCard | `ui/PractitionerCard.tsx` | Consultation | `name`, `credentials`, `specialisation`, `experience`, `photo?` |
| PricingCard | `ui/PricingCard.tsx` | Consultation | `title`, `price`, `description`, `features[]`, `cta`, `featured?` |
| BlogCard | `ui/BlogCard.tsx` | Blog | `title`, `excerpt`, `category`, `author`, `date`, `slug` |
| FAQAccordion | `ui/FAQAccordion.tsx` | FAQ, Consultation | `question`, `answer`, `open?` |
| EcosystemLink | `ui/EcosystemLink.tsx` | Home, About | `title`, `description`, `href`, `icon` |
| NewsletterForm | `ui/NewsletterForm.tsx` | Blog, Footer | `incentive?` |
| SearchInput | `ui/SearchInput.tsx` | FAQ | `placeholder`, `onSearch` |

---

## 5. Animation Strategy

### 5.1 Philosophy
Grounded, purposeful, calm — like a slow breath. Every animation serves UX.

### 5.2 Animation Map

| Component | Animation | Implementation | Duration | Easing |
|-----------|-----------|----------------|----------|--------|
| Hero headline | Staggered reveal (fade + y) | StaggerContainer + StaggerItem | 600-800ms total, 200ms stagger | emphasized-decelerate |
| Hero subheadline | Staggered with headline | Part of stagger chain | — | — |
| Hero CTAs | Staggered after text | Staggered last in chain | — | — |
| Section content | Scroll reveal | `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}` | 500-700ms | emphasized-decelerate |
| Dosha cards | Scroll reveal with stagger | StaggerContainer + staggerChildren: 0.15 | 500ms per card | spring (stiffness: 300, damping: 30) |
| Cards (practitioner, blog, pricing, testimonial) | Hover lift | `whileHover={{ y: -4 }}` + enhanced shadow | 200-300ms | standard-productive |
| Buttons | Hover fill / shadow | `whileHover` scale + shadow | 150-200ms | standard-productive |
| FAQ Accordion | Expand / collapse | `layout` prop + height animation | 250-350ms | emphasized-decelerate |
| Mobile menu | Slide in from right | AnimatePresence + x: 100% → 0 | 300ms | emphasized-decelerate |
| Page transitions | Fade | AnimatePresence wrapper | 300ms | ease-in-out |
| Modal (if any) | Scale + fade | scale: 0.95 → 1, opacity: 0 → 1 | 250-350ms | emphasized-decelerate |
| Navbar background | Appear on scroll | IntersectionObserver + backdrop-blur | 200ms | standard-productive |

### 5.3 What NOT to Animate
- Content below the fold before user scrolls to it
- Layout-triggering properties (width, height, top, left)
- Conflicting animations (e.g., bounce + fade on same element)
- Infinite looping animations
- Every element on the page — purpose over decoration

### 5.4 Reduced Motion
- All animations wrapped in `@media (prefers-reduced-motion: reduce)` (handled in tokens.css)
- Motion components should use `{ disableAnimation: true }` fallback
- No critical UX depends on animation

---

## 6. Custom vs. Sourced Components

### Custom Components (Build from scratch)
- All section components (home/*, consultation/*, about/*, blog/*, faq/*, contact/*)
- All UI components (Button, Card, Badge, Input, etc.)
- All animation wrappers (FadeInView, StaggerContainer, StaggerItem, SpringHover)

### 21st.dev / Magic UI Components (Adapt for use)
- None predetermined — evaluate during build. The UI components are straightforward enough to build custom while maintaining design consistency.

---

## 7. Data Flow

| Data Type | Source | Delivery |
|-----------|--------|----------|
| Navigation links | Static config in Navbar | Hardcoded |
| Homepage content | Static content in sections | Hardcoded from content.md |
| Consultation types | Static data | Array of objects |
| Practitioner data | Static placeholders → future API | Hardcoded, replaceable |
| Pricing data | Static data | Array of objects |
| Blog posts | Static → future CMS | Markdown files → future API |
| FAQ data | Static data | Array of objects (category → questions) |
| Contact form | Client-side form | Form submission → email (future API route) |
| Newsletter | Client-side form | Form submission → email service (future integration) |

---

## 8. Performance & SEO Notes

- All pages use `export const dynamic = 'force-static'` where content is static
- Blog posts use `generateStaticParams` for pre-rendering
- Images in `/public/images/` should be WebP format with responsive sizes
- JSON-LD schema on every page:
  - Homepage: `HealthAndBeautyBusiness`
  - Consultation: `Physician` + `MedicalBusiness`
  - Blog: `Article`
  - FAQ: `FAQPage` with `mainEntity` array
  - Contact: `ContactPoint`
- OG meta tags per page (specified in content.md)
- Sitemap generation via `app/sitemap.ts`

---

*End of Page Architecture specification. Ready for build agent execution.*
