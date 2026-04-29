@AGENTS.md

# Frontend Design Guidelines — Vitaclaw Site

## Tech Stack
- **Framework**: Next.js 16 (App Router), TypeScript
- **Styling**: Tailwind CSS v4 (`@theme`, no `tailwind.config.js`)
- **Deployment**: Railway (Nixpacks, Node.js 22 via `nixpacks.toml`)

## Design System (Vercel-inspired Dark Theme)
- **Background**: `#000000` (black), section alt: `#050505`
- **Text**: `#fafafa` (foreground), `#a1a1aa` (muted)
- **Accent**: `#2563eb` (blue), hover: `#1d4ed8`
- **Cards**: `#0a0a0a` bg, `#18181b` borders

## Component Patterns
- **Use shadcn/ui components** where applicable (button, card, navigation, dialog)
- **Sections**: full-width, max-w-7xl container, py-24/sm:py-32 spacing
- **Section headers**: badge pill + h2 + subtitle pattern
- **Metric displays**: grid layout with large numbers and small labels
- **Cards**: rounded-2xl, border, p-6/p-8, hover:border-accent/30 transition
- **CTAs**: glow box-shadow effect on primary buttons
- **Navbar**: fixed top, bg-black/80 backdrop-blur-xl on scroll, transparent initially

## Content & Typography
- **Language**: Chinese (zh-CN) primary, English for product names/tech terms
- **Font**: Geist (next/font/google), auto-loaded via create-next-app
- **Headings**: gradient-text or gradient-text-blue for key headlines
- **HTML entities**: use `&ldquo;` `&rdquo;` for Chinese quotes in JSX text

## Responsive Design
- Mobile-first: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-4`
- Text: `text-3xl` → `sm:text-4xl` → `md:text-7xl` hierarchy
- Navigation: hidden md:flex for desktop menu, hamburger on mobile if needed
- Padding: `px-4 sm:px-6 lg:px-8` for consistent container spacing

## Best Practices
- **Static export** (output: standalone for Railway compatibility)
- **No external fonts** beyond Geist (bundled with Next.js)
- **Grid backgrounds**: `grid-bg` CSS class for subtle dot-grid overlay
- **Gradient borders**: use `gradient-border` CSS class, not inline SVG
- **Client components**: only where interactivity needed (navbar scroll, etc.)
- **Spacing**: consistent 8px/4px grid (Tailwind defaults)
- **No runtime JS dependencies** — pure CSS animations where possible
