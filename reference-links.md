# Reference Links — Nik's Consulting V2

## Primary Reference
- **Live Site:** https://niksconsulting.vercel.app
- **Pages studied:** Home, Services, Case Studies, About, Contact, Get a Quote

## Existing Codebase (V1 — reference for patterns)
- **Path:** `/home/nikhil/Claude-Fl/V2-Niksconsulting/niks-consulting-website/`
- **Tech stack:** Next.js 16, React 19, Tailwind v4, Motion v12, TypeScript, Lucide React
- **Structure:** App Router, data/ folder for content, components/animations/ for motion utilities
- **Design tokens:** `src/styles/tokens.css` (dark mode primary, teal/cyan brand)

## Key Design Observations from Reference
1. Dark-mode-first design with `#09090b` base
2. Teal (`#14b8a6`) as primary accent throughout
3. Subtle radial gradient overlays on hero and CTA sections
4. Badge pills with dot indicators for section labels
5. Card hover: translate-y, border color change, no heavy shadows
6. Consistent max-w-6xl container with px-5/8/12 responsive padding
7. Font: Plus Jakarta Sans for display, system fallback for body
8. Monospace (`JetBrains Mono`) for step numbers
9. Avatar initials with colored backgrounds (no actual photos)
10. Magnetic hover effect on CTA buttons
11. Counter animation for metrics (animate on scroll into view)
12. Staggered reveal for card grids

## Animation Stack
- `motion/react` (NOT `framer-motion`) — correct import for React 19
- `ScrollReveal` component wrapping each section
- `StaggerContainer` + `StaggerItem` for card grids
- `MagneticButton` for CTAs
- `Counter` for animated numbers
- Custom ease: `[0.22, 1, 0.36, 1]` throughout
