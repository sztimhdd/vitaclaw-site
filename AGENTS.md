# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-11
**Commit:** 9f1addc
**Branch:** master

## OVERVIEW
Single-page marketing site for VitaClaw (企业级 AI 数字员工). Vite 6 + React 19 + TypeScript 5.8 frontend, Express 4 API backend. Dark theme, Chinese primary language.

## STRUCTURE
```
vitaclaw-site/
├── src/
│   ├── components/    # 27 React section components
│   ├── data/          # Static data + API adapters
│   ├── App.tsx        # Linear section stack
│   ├── main.tsx       # React entry (StrictMode)
│   └── index.css      # Tailwind imports + design tokens + utility classes
├── server/
│   ├── server.js              # Express: API + static + SPA fallback
│   └── vitaclaw-assistant.js  # Doc chunk retrieval + DeepSeek chat
├── docs/
│   ├── orchestrator/   # Integration specs, deployment docs
│   └── product-docs/   # Chunked doc corpus for assistant
├── .github/workflows/  # CI (lint+build) + deploy (manual → Aliyun)
└── .sisyphus/          # Orchestrator run state (do not edit)
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Add new homepage section | `src/components/` + `src/App.tsx` | See `src/components/AGENTS.md` for patterns |
| Update static data | `src/data/` | Agent news, chat types |
| Modify assistant behavior | `server/vitaclaw-assistant.js` | Chunk scoring, refusal/CTA logic |
| Change design tokens | `src/index.css` `@theme inline` block | No `tailwind.config.js` |
| Add API endpoint | `server.js` | Single-file Express server |
| Understand deployment | `.github/workflows/deploy.yml` | Manual trigger only |
| Read integration specs | `docs/orchestrator/` | OmniGraph contracts, PRDs |

## CODE MAP
| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | component | `src/App.tsx` | Root layout: Navbar → main sections → Footer → StickyCTABar |
| `loadVitaClawChunks` | function | `server/vitaclaw-assistant.js` | Loads + validates chunked doc corpus |
| `retrieveVitaClawContext` | function | `server/vitaclaw-assistant.js` | Keyword scoring + refusal/CTA routing |
| `createVitaClawChatResponse` | function | `server/vitaclaw-assistant.js` | DeepSeek API call with retrieved context |
| `adaptVitaClawAssistantResponse` | function | `src/data/vitaclaw-assistant-chat.ts` | Client-side response validation |
| `adaptAgentNewsExport` | function | `src/data/agent-news-export.ts` | Validates OmniGraph export contract |
| `VitaClawAssistant` | component | `src/components/vitaclaw-assistant.tsx` | Floating chat UI (342 lines) |

## CONVENTIONS
- **Path alias**: `@/` → `./src/*` (tsconfig.json + vite.config.ts)
- **Tailwind v4**: Plugin-based via `@tailwindcss/vite`, tokens in `@theme inline` block — **no** `tailwind.config.js`
- **Fonts**: Inter + JetBrains Mono via Google Fonts CSS `@import`
- **Components**: Named exports, no default exports for components. Plain React (no SSR/RSC).
- **CSS utilities**: Custom classes in `src/index.css` (`.grid-bg`, `.glow`, `.gradient-text`, `.metric-number`, `.gradient-border`). Prefer these over inline Tailwind for complex effects.
- **Animations**: CSS `@keyframes` where possible; `motion` library for scroll-triggered reveals via `<ScrollReveal>`.
- **Responsive**: Mobile-first with Tailwind breakpoints (`md:`, `lg:`). Fluid text via `clamp()`.
- **Quotes**: HTML entities `&ldquo;` `&rdquo;` in JSX, not Unicode.

## ANTI-PATTERNS (THIS PROJECT)
- **DO NOT** build Phase 2 `VitaClaw 知识库` deep-research app unless explicitly assigned.
- **DO NOT** call LightRAG, Cognee, or KG Synthesize — OmniGraph produces data, this site consumes it.
- **DO NOT** add enterprise platform architecture (microservices, message queues, etc).
- **DO NOT** suppress type errors with `as any`, `@ts-ignore`, or `@ts-expect-error`.
- **DO NOT** expose `DEEPSEEK_API_KEY` or `GEMINI_API_KEY` in frontend code or static assets.
- **DO NOT** create `tailwind.config.js` — Tailwind v4 uses CSS-based config.
- **DO NOT** commit `.env.local` or private keys.

## UNIQUE STYLES
- **Dark theme**: Background `#080c14`, foreground `#f0f4f8`, accent blue `#3b82f6`, accent green `#22d3a0`
- **Section pattern**: `max-w-7xl mx-auto py-24 sm:py-32` with badge pill header (`rounded-full border border-white/10 bg-white/5`)
- **Cards**: `rounded-2xl border border-card-border bg-card p-6` with `hover:border-accent/30 transition-all duration-300`
- **CTAs**: Primary buttons get `.glow` (blue) or `.glow-green` class for box-shadow effects
- **Navbar**: Fixed top, transparent at scroll top, `bg-[#080c14]/80 backdrop-blur-xl` on scroll

## COMMANDS
```bash
npm run dev        # Vite dev server (port 3000, host 0.0.0.0)
npm run build      # Vite production build → dist/
npm run lint       # TypeScript type-check (tsc --noEmit)
npm run preview    # Vite preview of production build
npm run start      # Express production server (node server.js)
npm run clean      # Remove dist/
```

## NOTES
- **No test runner**: Test files (`*.test.ts`) use `tsx` for execution but no framework (vitest/jest) is configured.
- **Client-only SPA**: No SSR, no RSC. `"use client"` directive only on `navbar.tsx` and `sticky-cta-bar.tsx`.
- **Env vars**: `GEMINI_API_KEY` (injected at build via vite.config.ts), `DEEPSEEK_API_KEY` (server-side only), `APP_URL`.
- **Deployment**: Manual dispatch via GitHub Actions → Aliyun ECS. Caddy reverse proxy (`/api/*` → Node, `/*` → static `dist/`). See `docs/orchestrator/github-actions-deploy.md`.
- **Phase 1 scope**: Homepage (`VitaClaw 助手` + `Agent 技术动态`) only. Phase 2 requires explicit assignment.
