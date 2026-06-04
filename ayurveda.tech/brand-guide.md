# Brand Visual Guide — Ayurveda.Tech

**Brand:** Ayurveda.Tech | **Tagline:** "Ancient Wisdom for Modern Wellness"  
**Personality:** grounded, progressive, trusted  
**Design Principle:** Heritage meets clarity — serif warmth with modern structure

---

## 1. Color Palette

### 1.1 Primary Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Primary** | `#8B5A2B` | `#A67B4A` | Headlines, primary buttons, brand elements |
| **Primary Hover** | `#7A4E24` | `#936D3E` | Button hover states |
| **Primary Light** | `#D4A574` | `#C4956A` | Backgrounds, subtle accents |

### 1.2 Secondary / Accent Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Accent** | `#2D6A4F` | `#40916C` | CTAs, links, success indicators, accent elements |
| **Accent Hover** | `#245A42` | `#36805A` | Link hover, button hover |
| **Accent Light** | `#95D5B2` | `#74C69D` | Badges, background fills, dosha Kapha |

### 1.3 Surface & Background Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Surface** | `#FFFBF5` | `#1C1917` | Main page background |
| **Surface Alt** | `#F5EDE3` | `#292524` | Alternate sections, cards |
| **Surface Card** | `#FFFFFF` | `#2A2725` | Cards, modals, elevated elements |
| **Surface Inverted** | `#1C1917` | `#FFFBF5` | Dark sections on light mode |

### 1.4 Text Colors

| Token | Light Mode | Dark Mode | WCAG AA |
|---|---|---|---|
| **Text Primary** | `#1C1917` | `#F5F0EB` | ✅ Pass |
| **Text Secondary** | `#57534E` | `#A8A29E` | ✅ Pass |
| **Text Muted** | `#8B8783` | `#78736E` | ⚠️ Large text only |
| **Text On Primary** | `#FFFFFF` | `#1C1917` | ✅ Pass |
| **Text On Accent** | `#FFFFFF` | `#FFFFFF` | ✅ Pass |
| **Text Link** | `#2D6A4F` | `#52B788` | ✅ Pass |

### 1.5 Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Success** | `#2D6A4F` | `#52B788` | Success messages, confirmed booking |
| **Warning** | `#D48A3A` | `#EAAA5E` | Warnings, attention needed |
| **Error** | `#B33A3A` | `#E06060` | Errors, validation failures |
| **Info** | `#4A7B9D` | `#6B9FC0` | Informational messages |

### 1.6 Neutral / Border Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Border** | `#D6CDBE` | `#3C352E` | Card borders, dividers |
| **Border Light** | `#E8DFD3` | `#2A2520` | Subtle separators |
| **Shadow** | `rgba(28,25,23,0.08)` | `rgba(0,0,0,0.3)` | Drop shadows |

---

### Color Usage Rules
- Primary amber-brown for **brand elements, headlines, and main CTAs**
- Forest green accent for **interactive elements, links, and secondary CTAs**
- Cream/warm white surface for **backgrounds** — never use pure `#FFFFFF`
- Text must be `#1C1917` (warm black, not pure `#000000`)
- Never use purple, blue, or cool tones — they conflict with the warm Ayurvedic palette
- Ensure 4.5:1 minimum contrast on all text/background pairs (verified above)

---

## 2. Typography

### 2.1 Font Stack

| Role | Font | Fallback | Weight Range | Characteristics |
|---|---|---|---|---|
| **Heading Primary** | Playfair Display | Georgia, serif | 400–800 | Elegant, high-contrast serif — heritage + luxury |
| **Heading Secondary** | EB Garamond | Georgia, serif | 400–600 | Traditional, scholarly — authority + tradition |
| **Body** | Lora | Georgia, serif | 400–700 | Readable serif with warmth — comfortable long reads |
| **UI / Sans-serif** | Noto Sans | Arial, sans-serif | 300–700 | Clean, neutral sans-serif — modern interface clarity |

### 2.2 Font Size Scale

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--fs-display` | 72px / 4.5rem | 1.1 | Hero headline (desktop) |
| `--fs-display-mobile` | 40px / 2.5rem | 1.15 | Hero headline (mobile) |
| `--fs-h1` | 48px / 3rem | 1.15 | Page titles |
| `--fs-h2` | 36px / 2.25rem | 1.2 | Section headings |
| `--fs-h3` | 28px / 1.75rem | 1.25 | Card headings |
| `--fs-h4` | 22px / 1.375rem | 1.3 | Sub-section headings |
| `--fs-body-lg` | 20px / 1.25rem | 1.6 | Large body / intro text |
| `--fs-body` | 18px / 1.125rem | 1.65 | Body text |
| `--fs-body-sm` | 16px / 1rem | 1.6 | Small body / captions |
| `--fs-ui` | 16px / 1rem | 1.4 | UI labels / nav items |
| `--fs-ui-sm` | 14px / 0.875rem | 1.4 | Button text / badges |
| `--fs-caption` | 12px / 0.75rem | 1.4 | Captions / footnotes |

### 2.3 Typography Rules

| Rule | Specification |
|---|---|
| **Heading case** | Title Case for hero, headings, CTAs |
| **Body case** | Sentence case throughout |
| **Letter-spacing (headings)** | Playfair Display: `+0.02em` at display sizes; `+0.01em` at h2–h4 |
| **Letter-spacing (body)** | Lora: normal (0); Noto Sans: `+0.01em` |
| **Max line length** | 75 characters for body text |
| **Hyphenation** | Don't hyphenate headings; use auto for body |

### 2.4 Font Assignment by Element

| Element | Font | Weight |
|---|---|---|
| Hero headline | Playfair Display | 700 |
| H1 page title | Playfair Display | 700 |
| H2 section heading | Playfair Display | 600 |
| H3 card heading | Playfair Display / EB Garamond | 600 |
| H4 sub-heading | EB Garamond | 500 (italic optional) |
| Body text | Lora | 400 |
| Large intro | Lora | 400 (italic for pull quotes) |
| Nav link | Noto Sans | 500 |
| Button text | Noto Sans | 600 |
| Label / caption | Noto Sans | 400 |
| Blog meta | Noto Sans | 400 |
| Testimonial text | Lora | 400 (italic) |

---

## 3. Spacing Scale

Base unit: 4px. Tokens follow a linear+geometric hybrid scale for flexibility.

| Token | Value | Typical Usage |
|---|---|---|
| `--space-1` | 4px | Icon padding, tiny gaps |
| `--space-2` | 8px | Button padding (horizontal), tight spacing |
| `--space-3` | 12px | Card inner padding (tight) |
| `--space-4` | 16px | Standard padding, gap between elements |
| `--space-5` | 20px | Section inner padding (tight) |
| `--space-6` | 24px | Standard section padding, card gap |
| `--space-8` | 32px | Large padding, section margin |
| `--space-10` | 40px | Section separation, hero padding |
| `--space-12` | 48px | Large section spacing |
| `--space-16` | 64px | Page section gaps |
| `--space-20` | 80px | Major section margins |
| `--space-24` | 96px | Hero section padding, page-level spacing |

### Layout Grid
- **Max content width:** 1280px
- **Content padding:** `--space-6` (24px) mobile, `--space-10` (40px) desktop
- **Gutter:** 24px (mobile), 32px (tablet), 40px (desktop)
- **Column count:** 4 (mobile), 8 (tablet), 12 (desktop)

---

## 4. Motion & Animation Principles

### 4.1 Philosophy
Animations at Ayurveda.Tech should feel **grounded, purposeful, and calm** — like a slow breath, not a sudden startle. Every animation serves the user experience: guiding attention, revealing information, or creating a moment of delight.

### 4.2 Duration & Timing

| Context | Duration | Notes |
|---|---|---|
| Hero entrance (staggered) | 600–800ms | 200ms between each element |
| Scroll reveal (sections) | 500–700ms | Opacity + translateY |
| Hover (cards) | 200–300ms | Quick, responsive |
| Hover (buttons) | 150–200ms | Instant feedback |
| Page load / transition | 300–500ms | Fade transition |
| Modal / overlay | 250–350ms | Scale + fade |
| Exit animations | 200–250ms | Faster than entry |

### 4.3 Easing Curves

| Curve | cubic-bezier() | Context |
|---|---|---|
| **emphasized-decelerate** | `(0.16, 1, 0.3, 1)` | Entrances, reveals — natural settling |
| **emphasized-accelerate** | `(0.7, 0, 0.84, 0)` | Exits, dismissals — getting out of the way |
| **standard-productive** | `(0.2, 0, 0, 1)` | UI interactions — buttons, hover states |
| **spring-natural** | `{ stiffness: 300, damping: 30 }` | Spring-based micro-interactions |

### 4.4 Animation Patterns

| Pattern | Implementation | Elements |
|---|---|---|
| **Staggered reveal** | `staggerChildren: 0.15` with `y: 30 → 0, opacity: 0 → 1` | Hero headline + subhead + CTA |
| **Scroll reveal** | `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}` | Section content, cards |
| **Card hover lift** | `whileHover={{ y: -4, boxShadow: enhanced }}` | Practitioner cards, dosha cards, blog cards |
| **Button fill** | Hover: background slides to accent color | All CTA buttons |
| **Accordion expand** | Height animation with `layout` prop | FAQ section |
| **Modal enter** | Scale 0.95→1 + fade 0→1 | Booking modals, notifications |
| **Smooth scroll** | `scroll-behavior: smooth` | Anchor links, nav |

### 4.5 What NOT to Animate
- Don't animate every element — purpose over decoration
- Don't use conflicting animations simultaneously (e.g., bounce + fade)
- Don't animate layout-triggering properties (width, height, top, left)
- Don't loop animations indefinitely — respect user preference for reduced motion
- Don't animate important content behind the fold before user reaches it

### 4.6 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Logo Usage Guidelines

### 5.1 Logo Composition
The Ayurveda.Tech logo consists of:
1. **Symbol/Icon** (optional) — A mark combining a leaf motif with a subtle tech accent (to be designed)
2. **Wordmark** — "Ayurveda" in Playfair Display (serif, heritage), ".Tech" in Noto Sans (sans-serif, modern)

### 5.2 Logo Clear Space
- Minimum clear space: equal to the height of the letter "A" in the logo, on all sides
- No text or graphic elements should intrude into this space

### 5.3 Logo Minimum Sizes
- **Desktop:** 200px wide (wordmark), 160px (symbol + wordmark)
- **Mobile:** 140px wide (wordmark), 120px (symbol + wordmark)
- **Favicon:** 32×32px (use symbol only)

### 5.4 Logo Color Variants
| Variant | Background | File Needed |
|---|---|---|
| **Primary** | Light surfaces (cream, white) | ayurveda-logo-primary.svg |
| **Reversed** | Dark surfaces (brown, dark green) | ayurveda-logo-reversed.svg |
| **Monochrome** | Any — when color isn't available | ayurveda-logo-monochrome.svg |

### 5.5 Logo Don'ts
- Don't stretch, squash, or rotate the logo
- Don't change logo colors outside the approved palette
- Don't add drop shadows or effects
- Don't place on busy/noisy backgrounds without sufficient contrast
- Don't rearrange the wordmark (Ayurveda must stay serif, .Tech must stay sans-serif)

---

## 6. Component Styling Guidelines

### 6.1 Buttons

| Property | Primary | Secondary | Ghost |
|---|---|---|---|
| **Background** | `--accent` (#2D6A4F) | Transparent | Transparent |
| **Text** | `--text-on-accent` (#FFF) | `--accent` | `--text-primary` |
| **Border** | None | 2px solid `--accent` | 2px solid `--border` |
| **Hover bg** | `--accent-hover` (#245A42) | `--accent-light` (20% opacity) | `--surface-alt` |
| **Font** | Noto Sans 600 | Noto Sans 600 | Noto Sans 600 |
| **Padding** | 14px 32px | 14px 32px | 14px 32px |
| **Radius** | 8px | 8px | 8px |

### 6.2 Cards

| Element | Value |
|---|---|
| **Background** | `--surface-card` |
| **Border** | 1px solid `--border` |
| **Border radius** | 12px |
| **Padding** | 24px (standard), 32px (large) |
| **Shadow** | 0 2px 8px `--shadow` |
| **Hover** | y: -4px, shadow: 0 8px 24px `--shadow` |
| **Transition** | 200ms ease |

### 6.3 Inputs & Forms

| Element | Value |
|---|---|
| **Background** | `--surface-card` |
| **Border** | 2px solid `--border` |
| **Border radius** | 8px |
| **Padding** | 14px 16px |
| **Font** | Noto Sans 400, 16px |
| **Focus** | border `--accent`, ring 3px `--accent-light` (30% opacity) |
| **Label font** | Noto Sans 500, 14px |
| **Error** | border `--error`, red text |

### 6.4 Navigation

| Element | Value |
|---|---|
| **Background** | `--surface` with blur (backdrop-filter: blur(12px)) |
| **Border bottom** | 1px solid `--border` |
| **Link font** | Noto Sans 500, 16px |
| **Active indicator** | 2px underline in `--accent` |
| **Mobile breakpoint** | 768px (hamburger appears) |
| **Sticky** | Yes, scrolls with page |

---

## 7. Photography & Imagery Direction

### 7.1 Image Style
- **Warm, natural light** — golden hour tones, soft shadows
- **Authentic moments** — real consultations, genuine practitioner-client interactions
- **Natural elements** — herbs, plants, organic textures
- **Diverse representation** — all ages, body types, and ethnicities
- **Avoid:** clinical sterility, stock-photo feeling, overly filtered images

### 7.2 Image Treatments
- Warm amber-toned overlay for hero and feature images
- Subtle vignette on section backgrounds
- Desaturated green tone for botanical/educational imagery
- No heavy Instagram-style filters

### 7.3 Dosha Visuals

| Dosha | Color Association | Imagery Direction |
|---|---|---|
| **Vata** | Warm neutrals, sand, beige | Air, movement, wind, dry leaves |
| **Pitta** | Cool greens, white | Fire, sun, water, red/orange elements |
| **Kapha** | Deep greens, earth tones | Earth, water, flowers, lush growth |

### 7.4 Iconography
- Style: Line-art with rounded terminals, 2px stroke weight
- Color: `--primary` or `--accent` depending on context
- Size: 24×24px standard, 32×32px for feature icons
- Source: Lucide React (as specified in tech stack)
- Custom icons where needed: dosha symbols, leaf, lotus, tech-inspired wellness icons
- No filled icons except for active states and social media

---

## 8. Texture & Materials Guide

### 8.1 Subtle Background Textures
- Warm paper/linen texture for hero and section backgrounds (CSS: noise filter)
- Subtle radial gradients from `--primary-light` for depth
- Herbal leaf pattern (very subtle, < 5% opacity) for decorative sections

### 8.2 Glass / Frosted Effects
- Backdrop blur for sticky nav: `backdrop-filter: blur(12px) saturate(1.1)`
- Glass cards: semi-transparent `--surface-card` with subtle `--shadow`
- Use sparingly — one glass element per page maximum

### 8.3 Gradient Usage
- Hero sections: warm radial gradient from `#FFFBF5` to `#F5EDE3`
- CTA sections: subtle green gradient from `--accent` to `--accent-hover`
- No multi-color gradients, no purple-to-blue (anti-pattern)
- No harsh gradient stops — smooth transitions only

### 8.4 Shadows
| Level | Shadow Token | Usage |
|---|---|---|
| **Low** | `0 1px 3px rgba(28,25,23,0.08)` | Subtle card separation |
| **Medium** | `0 4px 12px rgba(28,25,23,0.1)` | Elevated cards, dropdowns |
| **High** | `0 8px 24px rgba(28,25,23,0.12)` | Modals, floating elements |

---

## 9. Brand Application Rules

### 9.1 Dos & Don'ts

| ✓ Do | ✗ Don't |
|---|---|
| Use warm, earthy tones throughout | Use pure black (#000) or pure white (#FFF) |
| Lead with Playfair Display for headings | Use Inter, Space Grotesk, or system-ui |
| Maintain generous white space | Clutter the layout with dense content |
| Use Lora for body text above 16px | Use body text below 16px |
| Show both audience paths clearly | Hide pricing behind registration |
| Use authentic, warm photography | Use generic medical stock photos |
| Keep animation subtle and purposeful | Over-animate or loop without purpose |
| Use consistent terminology | Mix Ayurvedic and generic wellness language |
| Link to ecosystem portals in new tabs | Redirect away from main site without warning |

### 9.2 WCAG Compliance Checklist
- [ ] All text/background combos meet 4.5:1 minimum contrast ratio
- [ ] Interactive elements have visible focus states
- [ ] All images include descriptive alt text
- [ ] Touch targets minimum 44×44px on mobile
- [ ] Form fields have clear labels and error messages
- [ ] Navigation is keyboard-accessible
- [ ] Reduced motion preference is respected
- [ ] Color is not the only indicator of meaning or state

---

## 10. Specs for Development Handoff

### CSS Custom Properties (tokens.css)
All brand tokens should be available as CSS custom properties in a single source-of-truth file:

```css
:root {
  /* Colors */
  --color-primary: #8B5A2B;
  --color-primary-hover: #7A4E24;
  --color-accent: #2D6A4F;
  --color-accent-hover: #245A42;
  --color-surface: #FFFBF5;
  --color-surface-alt: #F5EDE3;
  --color-text-primary: #1C1917;
  --color-text-secondary: #57534E;
  
  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-heading-alt: 'EB Garamond', Georgia, serif;
  --font-body: 'Lora', Georgia, serif;
  --font-ui: 'Noto Sans', Arial, sans-serif;
  
  /* Font sizes */
  --fs-display: clamp(2.5rem, 5vw, 4.5rem);
  --fs-h1: clamp(2rem, 3.5vw, 3rem);
  /* ... etc */
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  /* ... through --space-24: 96px */
  
  /* Animation */
  --ease-emphasized-decelerate: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 600ms;
  
  /* Layout */
  --max-width: 1280px;
  --content-padding: clamp(1.5rem, 3vw, 2.5rem);
}
```
