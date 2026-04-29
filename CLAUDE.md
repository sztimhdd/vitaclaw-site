# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- **Dev server**: `npm run dev` (Vite, port 3000, host 0.0.0.0)
- **Build**: `npm run build` (Vite build)
- **Preview**: `npm run preview` (Vite preview)
- **Lint**: `npm run lint` (TypeScript type-check: `tsc --noEmit`)

## Tech Stack

- Vite 6, React 19, TypeScript 5.8
- Tailwind CSS v4 (plugin-based via `@tailwindcss/vite`, no `tailwind.config.js`)
- Font: Inter + JetBrains Mono (Google Fonts via CSS `@import`)
- Runtime dependencies: `@google/genai`, `express`, `dotenv`, `motion`, `lucide-react`

## Architecture

Single-page marketing site. Everything renders via `src/App.tsx` as a linear stack of section components.

- **`index.html`** — Entry HTML: `<html lang="en">`, `<div id="root">`, loads `src/main.tsx`
- **`src/main.tsx`** — React entry point: creates root, renders `<App />` in StrictMode
- **`src/App.tsx`** — Main app: `<Navbar />` + `<main>` (Hero → TrustCases → PainPoints → PersonaSplit → IntegrationInterface → Workflow → Architecture → LobsterBox → Trust → DevExperience → Business → CTA) + `<Footer />` + `<StickyCTABar />`
- **`src/components/*.tsx`** — 26 section/utility components; each is a named export
- **`src/index.css`** — Tailwind `@import` + `@theme inline` block defining design tokens + utility classes
- **`vite.config.ts`** — Vite config: React plugin, Tailwind plugin, `@/` path alias, HMR config

**Client components**: Only `navbar.tsx` and `sticky-cta-bar.tsx` use `"use client"` (for `useState`/`useEffect` scroll detection). All other components are plain React components (no directives needed in Vite).

## Design System (Dark Theme)

- **Background**: `#080c14` (deep navy-black), section alt: `#0d1117`
- **Text**: `#f0f4f8` (foreground), `#8b929e` (muted), `#4a5160` (muted-foreground)
- **Accent**: `#3b82f6` (blue), hover: `#2563eb`
- **Accent green**: `#22d3a0`, hover: `#14b88a`
- **Cards**: `rgba(255,255,255,0.04)` bg, `rgba(255,255,255,0.07)` borders

CSS variables defined in `src/index.css` via `@theme inline` — use Tailwind utility classes like `bg-background`, `text-muted`, `bg-card`, `border-card-border`, etc.

## Component Patterns

- **Sections**: full-width, `max-w-7xl` container, `py-24 sm:py-32` spacing
- **Section headers**: badge pill (`rounded-full border border-white/10 bg-white/5`) + h2 + subtitle pattern
- **Metric displays**: `metric-number` CSS class (clamp-based responsive sizing, tabular-nums, tight tracking)
- **Cards**: `rounded-2xl border border-card-border bg-card p-6`, `hover:border-accent/30 transition-all duration-300`
- **CTAs**: `glow` / `glow-green` CSS classes for box-shadow effects on primary buttons
- **Navbar**: fixed top, `bg-[#080c14]/80 backdrop-blur-xl` on scroll, `bg-transparent` initially
- **Scroll animations**: `<ScrollReveal>` wrapper component (uses `motion` library)

## Content & Typography

- **Language**: Chinese (zh-CN) primary, English for product names/tech terms
- **Headings**: `gradient-text`, `gradient-text-blue`, or `gradient-text-green` CSS classes
- **Quotes**: use `&ldquo;` `&rdquo;` HTML entities in JSX text

## Responsive Design

- Mobile-first: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-4`
- Text: `text-[clamp(28px,4vw,52px)]` approach for fluid headings
- Navigation: `hidden md:flex` for desktop menu
- Padding: `px-4 sm:px-6 lg:px-8`

## CSS Utilities (src/index.css)

- `.grid-bg` — 48px dot-grid overlay background
- `.radial-glow` / `.radial-glow-center` — radial gradient glow overlays
- `.bottom-fade` — linear gradient fade to background color
- `.glow` / `.glow-green` — colored box-shadow glow effects
- `.glow-text` — text-shadow glow effect
- `.gradient-text` / `.gradient-text-blue` / `.gradient-text-green` — gradient text via background-clip
- `.gradient-border` — 1px gradient border via `::before` pseudo-element with mask
- `.metric-number` — fluid metric number sizing
- `@keyframes marquee` — horizontal marquee animation
- `scroll-behavior: smooth` on `<html>` — anchor links animate

## Conventions

- `@/` path alias maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`)
- `@theme inline` block in `src/index.css` for all design token customization (no `tailwind.config.js`)
- Pure CSS animations where possible; `motion` library for scroll-triggered reveals
- No SSR / RSC — this is a pure client-side SPA (Vite)
- Environment variables: `GEMINI_API_KEY` and `APP_URL` (see `.env.example`)
