# Design Tokens — Nik's Consulting V2

## Colors

### Brand (Teal/Cyan)
| Token | Value | Usage |
|---|---|---|
| `--color-brand-50` | `#f0fdfa` | Tint backgrounds |
| `--color-brand-100` | `#ccfbf1` | Light accents |
| `--color-brand-200` | `#99f6e4` | Hover states |
| `--color-brand-300` | `#5eead4` | Active states |
| `--color-brand-400` | `#2dd4bf` | Secondary CTA |
| `--color-brand-500` | `#14b8a6` | Primary brand |
| `--color-brand-600` | `#0d9488` | Primary hover |
| `--color-brand-700` | `#0f766e` | Primary active |
| `--color-brand-800` | `#115e59` | Dark accent |
| `--color-brand-900` | `#134e4a` | Darkest accent |

### Accent Palette
| Token | Value | Usage |
|---|---|---|
| `--color-cyan` | `#06b6d4` | Secondary highlights |
| `--color-violet` | `#8b5cf6` | Tertiary / test accent |
| `--color-amber` | `#f59e0b` | Warnings, ratings, process step 4 |
| `--color-emerald` | `#10b981` | Success, online status |
| `--color-pink` | `#ec4899` | Social media service |

### Surface (Dark Mode — Default)
| Token | Value | Usage |
|---|---|---|
| `--surface-0` | `#09090b` | Page background |
| `--surface-1` | `#0f0f13` | Card backgrounds |
| `--surface-2` | `#18181b` | Elevated surfaces |
| `--surface-3` | `#1e1e24` | Borders, dividers |
| `--surface-4` | `#27272a` | Subtle borders |
| `--surface-5` | `#3f3f46` | Muted elements |

### Surface (Light Mode)
| Token | Value |
|---|---|
| `--surface-0` | `#fafaf9` |
| `--surface-1` | `#f4f4f5` |
| `--surface-2` | `#ffffff` |
| `--surface-3` | `#e4e4e7` |
| `--surface-4` | `#d4d4d8` |
| `--surface-5` | `#a1a1aa` |

### Text (Dark Mode — Default)
| Token | Value | Usage |
|---|---|---|
| `--text-100` | `#fafafa` | Headlines |
| `--text-200` | `#e4e4e7` | Body text |
| `--text-300` | `#a1a1aa` | Descriptions |
| `--text-400` | `#71717a` | Muted / captions |
| `--text-500` | `#52525b` | Disabled |

### Text (Light Mode)
| Token | Value |
|---|---|
| `--text-100` | `#09090b` |
| `--text-200` | `#18181b` |
| `--text-300` | `#52525b` |
| `--text-400` | `#71717a` |
| `--text-500` | `#a1a1aa` |

## Typography

### Font Stack
- **Display:** `'Plus Jakarta Sans', 'Inter', system-ui, sans-serif`
- **Body:** `'Inter', system-ui, sans-serif`
- **Mono:** `'JetBrains Mono', ui-monospace, monospace`

**NOTE:** The CLAUDE.md anti-pattern says "Never use Inter" as primary display font. The existing codebase uses Plus Jakarta Sans as the display font with Inter as body fallback. We will keep this — Inter is only the body font, not the display font. If the user wants a more distinctive display font, we can swap to Sora, Cabinet Grotesk, or General Sans.

### Font Scale
| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `0.75rem` (12px) | Badges, tiny labels |
| `--text-sm` | `0.875rem` (14px) | Captions, card body |
| `--text-base` | `1rem` (16px) | Body text |
| `--text-lg` | `1.125rem` (18px) | Lead paragraphs |
| `--text-xl` | `1.25rem` (20px) | Subheadings |
| `--text-2xl` | `1.5rem` (24px) | Card titles |
| `--text-3xl` | `1.875rem` (30px) | Section subtitles |
| `--text-4xl` | `2.25rem` (36px) | Section headings (mobile) |
| `--text-5xl` | `3rem` (48px) | Section headings |
| `--text-6xl` | `3.75rem` (60px) | Hero headings (desktop) |
| `--text-7xl` | `4.5rem` (72px) | Hero headings (xl) |

## Spacing Scale
| Token | Value |
|---|---|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-20` | `5rem` |
| `--space-24` | `6rem` |
| `--space-28` | `7rem` |
| `--space-32` | `8rem` |

## Border Radius
| Token | Value |
|---|---|
| `--radius-sm` | `0.375rem` |
| `--radius-md` | `0.5rem` |
| `--radius-lg` | `0.75rem` |
| `--radius-xl` | `1rem` |
| `--radius-2xl` | `1.5rem` |
| `--radius-full` | `9999px` |

## Shadows
| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| `--shadow-glow` | `0 0 20px rgba(20, 184, 166, 0.15)` |

## Motion Tokens
| Token | Value |
|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--duration-fast` | `150ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `500ms` |
