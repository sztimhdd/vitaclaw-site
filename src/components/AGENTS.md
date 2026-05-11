# src/components/

Homepage section components for the VitaClaw marketing site. 27 React components, all named exports.

## WHERE TO LOOK
| Pattern | Files | Notes |
|---------|-------|-------|
| Full-width section | `hero.tsx`, `trust-cases.tsx`, `pain-points.tsx`, `architecture.tsx`, `trust.tsx`, `business.tsx`, `cta.tsx` | Each self-contained with own layout |
| Card grid | `trust-cases.tsx` (via `trust-case-card.tsx`), `persona-split.tsx` (via `persona-card.tsx`) | Uses responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| Metric display | `metric-card.tsx`, `trust.tsx` | Uses `.metric-number` CSS class |
| Utility wrapper | `scroll-reveal.tsx` | Wraps `motion` library for scroll-triggered animations |
| Media | `screenshot-img.tsx`, `product-screenshot.tsx`, `hero-particles.tsx` | Image/video/particle display |
| Interactive UI | `vitaclaw-assistant.tsx`, `navbar.tsx`, `sticky-cta-bar.tsx` | Stateful components with user interaction |
| Shared/misc | `audience-bar.tsx`, `capabilities.tsx`, `footer.tsx`, `integration-interface.tsx`, `lobster-box.tsx`, `workflow.tsx`, `dev-experience.tsx`, `agent-news.tsx`, `trust-bar.tsx` | Full-width sections with unique layouts |

## CONVENTIONS
- **Named exports only**: `export function ComponentName()`. No `export default`.
- **Section markup**: `{/* id-name */}` comment before each section in App.tsx for navigation.
- **Section container**: `<section className="relative overflow-hidden">` → inner `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">`
- **Section header**: Badge pill (`<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-accent">`) → `<h2 className="gradient-text ...">` → `<p className="text-muted ...">`
- **Cards**: `rounded-2xl border border-card-border bg-card p-6` with hover: `hover:border-accent/30 transition-all duration-300`
- **CTA buttons**: `<button className="glow ...">` (blue) or `<button className="glow-green ...">` (green)
- **Scroll reveal**: Wrap sections in `<ScrollReveal>` for entrance animations.
- **Responsive**: Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`. Text: `clamp()`-based fluid sizing.

## ANTI-PATTERNS
- **DO NOT** add `"use client"` directive — only `navbar.tsx` and `sticky-cta-bar.tsx` need it.
- **DO NOT** use `export default` — breaks consistency with all 27 existing components.
- **DO NOT** add new CSS classes without appending to `src/index.css` — Tailwind utilities only for most styling.

## UNIQUE STYLES
- **Grid background**: Add `className="grid-bg"` for 48px dot-grid overlay effect.
- **Glow effects**: Use `.glow` (blue), `.glow-green`, `.glow-text` classes defined in `src/index.css`.
- **Gradient text**: Headings use `.gradient-text`, `.gradient-text-blue`, or `.gradient-text-green`.
- **Gradient border**: `.gradient-border` class on container for 1px gradient border via pseudo-element.
- **Radial glow**: `.radial-glow` / `.radial-glow-center` for section background overlays.
- **Metric numbers**: `.metric-number` for fluid, tabular-nums metric display.
