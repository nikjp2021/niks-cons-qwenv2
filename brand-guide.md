# Brand Guide — Nik's Consulting

## Color Palette

### Primary Brand (Teal/Cyan)
| Token | Hex (Light) | Hex (Dark) | Usage |
|-------|-------------|------------|-------|
| `--color-brand-50` | `#f0fdfa` | `#f0fdfa` | Tint backgrounds |
| `--color-brand-100` | `#ccfbf1` | `#ccfbf1` | Light accents |
| `--color-brand-200` | `#99f6e4` | `#99f6e4` | Hover states |
| `--color-brand-300` | `#5eead4` | `#5eead4` | Active states |
| `--color-brand-400` | `#2dd4bf` | `#2dd4bf` | Secondary CTA |
| `--color-brand-500` | `#14b8a6` | `#14b8a6` | **Primary brand color** |
| `--color-brand-600` | `#0d9488` | `#0d9488` | Primary hover |
| `--color-brand-700` | `#0f766e` | `#0f766e` | Primary active |
| `--color-brand-800` | `#115e59` | `#115e59` | Dark accent |
| `--color-brand-900` | `#134e4a` | `#134e4a` | Darkest accent |

### Accent Palette
| Token | Hex (Light/Dark) | Usage |
|-------|------------------|-------|
| `--color-cyan` | `#06b6d4` | Secondary highlights |
| `--color-violet` | `#8b5cf6` | Tertiary / test accent |
| `--color-amber` | `#f59e0b` | Warnings, ratings, process step 4 |
| `--color-emerald` | `#10b981` | Success, online status |
| `--color-pink` | `#ec4899` | Social media service |

### Surface (Backgrounds)
| Token | Hex (Light Mode) | Hex (Dark Mode) | Usage |
|-------|------------------|-----------------|-------|
| `--surface-0` | `#fafaf9` | `#09090b` | Page background |
| `--surface-1` | `#f4f4f5` | `#0f0f13` | Card backgrounds |
| `--surface-2` | `#ffffff` | `#18181b` | Elevated surfaces |
| `--surface-3` | `#e4e4e7` | `#1e1e24` | Borders, dividers |
| `--surface-4` | `#d4d4d8` | `#27272a` | Subtle borders |
| `--surface-5` | `#a1a1aa` | `#3f3f46` | Muted elements |

### Text
| Token | Hex (Light Mode) | Hex (Dark Mode) | Usage |
|-------|------------------|-----------------|-------|
| `--text-100` | `#09090b` | `#fafafa` | Headlines |
| `--text-200` | `#18181b` | `#e4e4e7` | Body text |
| `--text-300` | `#52525b` | `#a1a1aa` | Descriptions |
| `--text-400` | `#71717a` | `#71717a` | Muted / captions |
| `--text-500` | `#a1a1aa` | `#52525b` | Disabled |

### Semantic Colors
| Token | Hex (Light Mode) | Hex (Dark Mode) | Usage |
|-------|------------------|-----------------|-------|
| `--color-success` | `#10b981` | `#34d399` | Success states |
| `--color-error` | `#ef4444` | `#f87171` | Error states |
| `--color-warning` | `#f59e0b` | `#fbbf24` | Warning states |
| `--color-info` | `#06b6d4` | `#67e8f9` | Info states |

## Typography

### Font Pairing
- **Heading Font:** `Plus Jakarta Sans` - A distinctive, geometric sans-serif with humanist touches that conveys technical precision and approachability
- **Body Font:** `Inter` - Highly readable, neutral sans-serif optimized for UI and long-form reading

### Font Scale
| Token | Value (px) | Usage |
|-------|------------|-------|
| `--text-xs` | 12px | Badges, tiny labels |
| `--text-sm` | 14px | Captions, card body |
| `--text-base` | 16px | Body text |
| `--text-lg` | 18px | Lead paragraphs |
| `--text-xl` | 20px | Subheadings |
| `--text-2xl` | 24px | Card titles |
| `--text-3xl` | 30px | Section subtitles |
| `--text-4xl` | 36px | Section headings (mobile) |
| `--text-5xl` | 48px | Section headings |
| `--text-6xl` | 60px | Hero headings (desktop) |
| `--text-7xl` | 72px | Hero headings (xl) |

### Typography Rules
- Heading font (`Plus Jakarta Sans`) used for all headings (h1-h6)
- Body font (`Inter`) used for all body text, captions, and UI elements
- Line height: 1.5 for body text, 1.2-1.3 for headings
- Letter tracking: -0.025em for headings, 0 for body text
- Font weight hierarchy: 
  - Headings: 600-800 (Bold to ExtraBold)
  - Body: 400-500 (Regular to Medium)

## Spacing Scale
(Base: 4px = 0.25rem)

| Token | Value (px) | Value (rem) | Usage |
|-------|------------|-------------|-------|
| `--space-1` | 4px | 0.25rem | Hairline spacing |
| `--space-2` | 8px | 0.5rem | Tight spacing |
| `--space-3` | 12px | 0.75rem | Compact spacing |
| `--space-4` | 16px | 1rem | Default spacing |
| `--space-5` | 20px | 1.25rem | Small spacing |
| `--space-6` | 24px | 1.5rem | Standard spacing |
| `--space-8` | 32px | 2rem | Medium spacing |
| `--space-10` | 40px | 2.5rem | Large spacing |
| `--space-12` | 48px | 3rem | Extra large spacing |
| `--space-16` | 64px | 4rem | Section padding |
| `--space-20` | 80px | 5rem | Section margins |
| `--space-24` | 96px | 6rem | Large section margins |
| `--space-28` | 112px | 7rem | Page sections |
| `--space-32` | 128px | 8rem | Page padding |

## Motion Principles

### Durations
| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions, button presses |
| `--duration-normal` | 300ms | Standard transitions, hover states |
| `--duration-slow` | 500ms | Page transitions, modal animations |

### Easing Functions
| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero entrances, bold movements |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Scroll reveals, card interactions |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Balanced transitions |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Entrance animations |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exit animations |

### Spring Physics (for natural motion)
```css
/* Default spring */
transition: 
  type: "spring",
  stiffness: 300,
  damping: 30
/* Bouncier spring */
transition: 
  type: "spring",
  stiffness: 200,
  damping: 20
/* Stiffer spring */
transition: 
  type: "spring",
  stiffness: 400,
  damping: 30
```

### Motion Guidelines
- **Hero entrance**: Staggered reveal with `--ease-out-expo` and `--duration-normal`
- **Scroll reveals**: `--ease-out-quart` with `--duration-normal`, viewport-triggered once
- **Hover states**: `--duration-fast` with scale/translate transforms only
- **Press states**: `--duration-fast` with scale(0.95) transform
- **Page transitions**: Fade + slide with `--duration-slow` and `--ease-out-expo`
- **Performance**: Animate only transform and opacity properties (GPU-composited)

## Logo Usage Guidelines

### Primary Logo
- **Icon + Wordmark**: Preferred usage on dark backgrounds (`--surface-0` or `--surface-1`)
- **Icon Only**: For favicons, app icons, and space-constrained contexts
- **Wordmark Only**: For contexts where icon recognition is established

### Clear Space
- Minimum clear space around logo: height of "N" in logotype
- No other elements should invade this space

### Minimum Size
- Digital: 24px height minimum
- Print: 0.25in height minimum

### Color Variations
1. **Primary**: Logo in `--color-brand-500` on `--surface-0` (dark mode)
2. **Reversed**: Logo in `--surface-0` on `--color-brand-500`
3. **Monochrome**: Logo in `--text-100` on any background (passing WCAG AA)
4. **Single Color**: Logo in `--color-brand-500` on white or `--surface-0`

### Incorrect Usage
- Do not stretch, skew, or distort the logo
- Do not change logo colors outside of defined palette
- Do not place logo on busy backgrounds that reduce legibility
- Do not add effects (shadows, outlines, gradients) to logo
- Do not rotate or animate logo excessively

## Texture/Materials Guide

### Glass Effects
```css
/* Frosted glass */
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

/* Dark mode glass */
background: rgba(0, 0, 0, 0.25);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
```

### Gradient Usage (Restricted)
*Per brand brief: NO generic gradients, NO purple-to-blue*
- **Allowed**: Subtle brand teal gradients for accent elements only
- **Example**: `background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);`
- **Usage**: Limited to small accent elements (under 100px height/width)
- **Never**: Large background gradients or gradients that reduce text contrast

### Shadow Patterns
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 1px 0 rgb(0 0 0 / 0.07)` | Elevation 1 |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Elevation 2 (cards) |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Elevation 3 (modals) |
| `--shadow-glow` | `0 0 20px rgba(20, 184, 166, 0.15)` | Brand accent glow |

### Surface Textures
- **Primary**: Flat surfaces with subtle shadows for depth
- **Secondary**: Very fine noise texture (1-2% opacity) on large surfaces to prevent banding
- **Tertiary**: Subtle grid patterns (0.5px lines at 8% opacity) for technical sections
- **Avoid**: Heavy textures, patterns that compete with content, or skeuomorphic elements

## Accessibility Notes
- All color combinations meet WCAG AA minimum contrast
- Body text (`--text-200` on `--surface-1`) achieves WCAG AAA contrast in both modes
- Focus states use `--color-brand-500` with 2px outline
- Interactive elements have minimum 44x44px touch target
- Motion respects `prefers-reduced-motion` media query

## Implementation Rules
1. **Zero hardcoded values**: All colors, spacing, typography from tokens
2. **Theme aware**: All components work in both light and dark modes
3. **Performance first**: Animations use transform/opacity only
4. **Accessibility by design**: Contrast, focus, and screen reader considerations built-in
5. **Consistent application**: Tokens used uniformly across all components and pages