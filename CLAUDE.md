# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Start prod**: `npm run start`
- **Lint**: `npm run lint` (ESLint 9, flat config: `eslint.config.mjs` with `eslint-config-next` core-web-vitals + typescript)

## Tech Stack

- Next.js 16 (App Router), TypeScript 5, React 19
- Tailwind CSS v4 (plugin-based via `@tailwindcss/postcss`, no `tailwind.config.js`)
- Font: Geist + Geist Mono (bundled via `next/font/google`)
- Deployment: Railway via Nixpacks (Node.js 22, npm 11, `nixpacks.toml`)

## Architecture

Single-page marketing site. Everything renders on the home page (`src/app/page.tsx`) via a linear stack of section components.

- **`src/app/layout.tsx`** — Root layout: HTML lang="zh-CN", metadata (title/OG), imports Geist fonts, renders `<Navbar />` + `<main>{children}</main>` + `<Footer />`
- **`src/app/page.tsx`** — Home page composes sections in order: Hero → PainPoints → LobsterBox → IntegrationInterface → Workflow → Architecture → DevExperience → Trust → Business → CTA → Footer
- **`src/components/*.tsx`** — One file per section; everything is a named export React component
- **`src/app/globals.css`** — Tailwind import + `@theme inline` block defining design tokens + utility classes (`.grid-bg`, `.glow`, `.gradient-text`, `.gradient-border`, etc.)

**Server vs Client components**: Most components are server components by default. Only `navbar.tsx` is a client component (`"use client"` directive) because it uses `useState`/`useEffect` for scroll detection.

## Design System (Vercel-inspired Dark Theme)

- **Background**: `#000000` (black), section alt: `#050505`
- **Text**: `#fafafa` (foreground), `#a1a1aa` (muted)
- **Accent**: `#2563eb` (blue), hover: `#1d4ed8`
- **Cards**: `#0a0a0a` bg, `#18181b` borders

CSS variables defined in `globals.css` via `@theme inline` — use Tailwind utility classes like `bg-background`, `text-muted`, `bg-card`, `border-card-border`, etc.

## Component Patterns

- **Sections**: full-width, `max-w-7xl` container, `py-24 sm:py-32` spacing
- **Section headers**: badge pill (`rounded-full border border-white/10 bg-white/5`) + h2 + subtitle pattern
- **Metric displays**: grid layout with large numbers (`text-3xl sm:text-4xl font-bold`) and small labels (`text-sm text-muted`)
- **Cards**: `rounded-2xl border border-card-border bg-card p-6`, `hover:border-accent/30 transition-all duration-300`
- **CTAs**: `glow` CSS class for box-shadow effect on primary buttons
- **Navbar**: fixed top, `bg-black/80 backdrop-blur-xl` on scroll, `bg-transparent` initially

## Content & Typography

- **Language**: Chinese (zh-CN) primary, English for product names/tech terms
- **Headings**: `gradient-text` or `gradient-text-blue` CSS classes for key headlines
- **Quotes**: use `&ldquo;` `&rdquo;` HTML entities in JSX text

## Responsive Design

- Mobile-first: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-4`
- Text: `text-3xl` → `sm:text-4xl` → `md:text-7xl` hierarchy
- Navigation: `hidden md:flex` for desktop menu
- Padding: `px-4 sm:px-6 lg:px-8`

## CSS Utilities (globals.css)

- `.grid-bg` — subtle dot-grid overlay background
- `.glow` / `.glow-green` — colored box-shadow glow effects
- `.gradient-text` / `.gradient-text-blue` / `.gradient-text-green` — gradient text via background-clip
- `.gradient-border` — 1px gradient border via `::before` pseudo-element with mask
- `scroll-behavior: smooth` on `<html>` — anchor links animate

## Conventions

- `@/` path alias maps to `./src/*` (configured in tsconfig)
- `output: "standalone"` in `next.config.ts` (for Railway compatibility)
- No external fonts beyond Geist
- Pure CSS animations where possible; no runtime JS animation libraries
- No `tailwind.config.js` — all theme customization is in `globals.css` `@theme inline` block
