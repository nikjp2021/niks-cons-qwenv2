---
name: Nik's Consulting V2
description: AI-first consulting firm website with premium, cinematic design
colors:
  brand-primary: "#14b8a6"
  brand-hover: "#0d9488"
  brand-active: "#0f766e"
  brand-light: "#2dd4bf"
  brand-lighter: "#5eead4"
  cyan: "#06b6d4"
  violet: "#8b5cf6"
  amber: "#f59e0b"
  emerald: "#10b981"
  pink: "#ec4899"
  surface-0: "#09090b"
  surface-1: "#0f0f13"
  surface-2: "#18181b"
  surface-3: "#1e1e24"
  surface-4: "#27272a"
  surface-5: "#3f3f46"
  text-100: "#fafafa"
  text-200: "#e4e4e7"
  text-300: "#a1a1aa"
  text-400: "#71717a"
  text-500: "#52525b"
  success: "#10b981"
  error: "#ef4444"
  warning: "#f59e0b"
  info: "#06b6d4"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 4.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  "2xl": "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
  "5xl": "128px"
components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "24px 48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-light}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-200}"
    rounded: "{rounded.full}"
    padding: "24px 48px"
  card:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.text-100}"
    rounded: "{rounded.2xl}"
    padding: "40px"
  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-100}"
    rounded: "{rounded.xl}"
    padding: "16px 20px"
---

# Design System: Nik's Consulting V2

## 1. Overview

**Creative North Star: "The Cinematic Consultant"**

This design system embodies the confidence and technical precision of a world-class consulting firm, rendered with the cinematic polish of Apple.com. The dark-mode-first approach creates an atmosphere of authority and sophistication, while the teal accent color signals the AI-native, forward-thinking nature of the business.

The system explicitly rejects the generic patterns enumerated in PRODUCT.md: no purple-to-blue gradients, no identical card grids, no Inter as display font, no card-in-card nesting, no animation on every element. Instead, it pursues a restrained elegance where every element earns its place through function and deliberate craft.

**Key Characteristics:**
- Cinematic scale: hero typography reaches 7rem on desktop, creating dramatic visual impact
- Generous whitespace: section padding of 96-144px creates breathing room comparable to premium brand sites
- Refined glass effects: subtle backdrop-blur (20px) with minimal opacity (3-5%) for depth without kitsch
- Purposeful motion: smooth easing curves (Apple-style cubic-bezier) with 400ms durations for buttery transitions
- Tinted neutrals: dark surfaces lean toward the brand teal hue (chroma 0.005-0.01) rather than pure black

## 2. Colors

The palette is built around a saturated teal-cyan primary that carries the brand identity, supported by a carefully curated accent palette for semantic differentiation.

### Primary
- **Deep Teal** (#14b8a6): The signature brand color. Used for primary CTAs, active states, and brand recognition elements. Appears on ≤30% of any given screen to maintain impact.

### Secondary
- **Electric Cyan** (#06b6d4): Secondary highlights, tool integrations, and supplementary visual interest. Used sparingly to complement the primary without competing.

### Tertiary
- **Warm Amber** (#f59e0b): Warnings, star ratings, and process step indicators. Provides warmth to balance the cool teal palette.
- **Living Emerald** (#10b981): Success states, online indicators, and completion signals. Reinforces trust and positive outcomes.
- **Vibrant Violet** (#8b5cf6): Tertiary accent for variety in service cards and expertise badges. Used with restraint.
- **Social Pink** (#ec4899): Social media service indicators and select accent elements.

### Neutral
- **Near Black** (#09090b): Page background in dark mode. Tinted toward teal to avoid the harshness of pure black.
- **Deep Charcoal** (#0f0f13): Card backgrounds, creating subtle depth against the page background.
- **Elevated Surface** (#18181b): Elevated elements like dropdowns and modals.
- **Border Gray** (#1e1e24): Subtle borders and dividers that maintain visual hierarchy without harshness.
- **Muted Element** (#3f3f46): Disabled states and tertiary UI elements.
- **Pure White** (#fafafa): Headlines and primary text in dark mode, ensuring maximum readability.

### Named Rules

**The Tinted Neutrals Rule.** Every neutral in the system is tinted toward the brand teal hue with chroma 0.005-0.01. Pure #000 and #fff are forbidden. This creates visual cohesion and prevents the design from feeling generic.

**The Accent Rarity Rule.** The primary brand color appears on ≤30% of any given screen. Its rarity is the point. Overuse dilutes impact and creates the "AI SaaS template" look this system explicitly rejects.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with Inter, system-ui fallback)
**Body Font:** Inter (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** The pairing combines Plus Jakarta Sans's geometric precision with humanist warmth, conveying technical expertise without coldness. Inter's exceptional readability at small sizes makes it ideal for body text and UI elements. JetBrains Mono provides clear hierarchy for step numbers and technical labels.

### Hierarchy
- **Display** (800, clamp(3.5rem, 9vw, 7rem), 0.95): Hero headlines only. Creates cinematic impact on first viewport.
- **Headline** (800, clamp(2.75rem, 4.5vw, 3.5rem), 1.1): Section headings. Maintains dramatic scale while fitting content flow.
- **Title** (700, clamp(2.25rem, 3.5vw, 2.75rem), 1.2): Card titles and subsection headings.
- **Body** (400, 1.125rem, 1.6): All body text. Max line length 65-75ch for optimal readability.
- **Label** (500, 0.75rem, 1.4, uppercase, 0.05em tracking): Step numbers, badges, and technical labels.

### Named Rules

**The Cinematic Scale Rule.** Hero typography must reach at least 5rem on mobile and 7rem on desktop. This creates the dramatic visual impact that distinguishes premium sites from template-driven designs.

**The Weight Contrast Rule.** Maintain ≥1.25 weight ratio between hierarchy steps. Display (800) to Body (400) provides a 2:1 ratio, ensuring clear visual hierarchy even at a glance.

## 4. Elevation

This system uses a hybrid approach: subtle shadows for depth in dark mode, with glass effects for premium interactive elements. Shadows are structural (defining depth relationships) rather than ambient (creating atmosphere).

### Shadow Vocabulary
- **xs** (`0 1px 2px 0 rgb(0 0 0 / 0.3)`): Subtle depth for small elements like badges and chips.
- **sm** (`0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)`): Card resting state, creating gentle separation from background.
- **md** (`0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)`): Elevated elements like dropdowns and popovers.
- **lg** (`0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)`): Modals and overlays.
- **glow** (`0 0 20px rgba(20, 184, 166, 0.15)`): Brand accent glow on primary CTAs and interactive highlights.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus). This prevents the interface from feeling heavy or dated.

**The Glass Restraint Rule.** Glass effects (backdrop-blur) are reserved for premium interactive elements: the navbar on scroll, primary CTAs, and modal overlays. Never used decoratively or on static content.

## 5. Components

### Buttons
- **Shape:** Full rounded (9999px radius) for primary and ghost variants. Creates a premium, approachable feel.
- **Primary:** Brand teal background (#14b8a6), white text, 24px 48px padding. Hover lifts with translateY(-1px) and subtle glow shadow.
- **Ghost:** Transparent background, text-200 color, same padding as primary. Hover adds surface-1 background tint.
- **Hover/Focus:** 400ms ease-apple transition. Focus uses 2px brand-teal outline with 2px offset.

### Cards
- **Corner Style:** Gently curved (24px radius). Soft enough to feel approachable, structured enough for professional context.
- **Background:** Subtle glass effect (rgba(255, 255, 255, 0.03)) with 20px backdrop-blur. Creates depth without heaviness.
- **Border:** 1px solid rgba(255, 255, 255, 0.06). Almost invisible at rest, becomes visible on hover.
- **Internal Padding:** 40px (generous, Apple-style spacing).
- **Hover:** Background brightens to 0.05 opacity, border becomes 0.1 opacity, translateY(-2px) lift.

### Inputs
- **Style:** Surface-2 background, text-100 color, 16px 20px padding, 16px radius.
- **Focus:** Brand-teal border color with subtle ring (1px brand-teal, 2px offset).
- **Error:** Error-red border with error message below in error color.

### Navigation
- **Style:** Fixed top, glass-card backdrop on scroll (20px blur, surface-0/80 background).
- **Typography:** Plus Jakarta Sans, 500 weight, text-300 color. Hover transitions to text-100.
- **Mobile:** Full-screen overlay with staggered entrance animations.

### Badge Pill
- **Style:** Inline-flex with 6px brand-teal dot indicator, brand-teal text, 0.05em uppercase tracking.
- **Background:** rgba(20, 184, 166, 0.1) with 1px rgba(20, 184, 166, 0.2) border.
- **Font:** JetBrains Mono for technical credibility.

## 6. Do's and Don'ts

### Do:
- **Do** use Plus Jakarta Sans for all display typography. Its geometric precision with humanist warmth conveys the "Bold, Technical, Approachable" personality from PRODUCT.md.
- **Do** maintain the cinematic typography scale (hero text ≥5rem mobile, ≥7rem desktop). This creates the premium feel that distinguishes Nik's Consulting from template-driven competitors.
- **Do** use the tinted neutrals (surface-0 through surface-5) instead of pure black/gray. The subtle teal tint creates visual cohesion.
- **Do** apply generous spacing (section-padding: 96-144px) between major sections. Apple-level whitespace signals confidence and premium positioning.
- **Do** use the glass-card effect sparingly for premium interactive elements only (navbar, CTAs, modals). Restraint prevents the "glassmorphism as default" anti-pattern.
- **Do** animate with smooth easing curves (ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1)) and 400ms durations for buttery transitions.
- **Do** use rounded-full for buttons and rounded-3xl for cards to create the approachable yet premium feel.

### Don't:
- **Don't** use purple-to-blue gradients. PRODUCT.md explicitly lists "Generic SaaS landing pages with purple-to-blue gradients" as an anti-reference.
- **Don't** use Inter or Roboto as the primary display font. PRODUCT.md lists "Sites that use Inter/Roboto as primary display font" as an anti-reference.
- **Don't** create identical card grids with icon + heading + text repeated endlessly. PRODUCT.md lists "Generic template sites with identical card grids" as an anti-reference.
- **Don't** nest cards inside cards. PRODUCT.md lists "card-in-card-in-card nesting" as an anti-reference.
- **Don't** add animation to every element. PRODUCT.md lists "Sites with animation on every element" as an anti-reference.
- **Don't** use glassmorphism decoratively. The Glass Restraint Rule limits glass effects to premium interactive elements only.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent). This is a SaaS cliché that undermines premium positioning.
- **Don't** use side-stripe borders (border-left/right >1px as colored accent). Rewrite with full borders, background tints, or nothing.
- **Don't** use gradient text (background-clip: text with gradient). Use solid colors with weight/size for emphasis.
