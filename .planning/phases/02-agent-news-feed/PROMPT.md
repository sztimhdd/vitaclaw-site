# Child Session Prompt: Agent 技术动态 UI/data contract

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/research/SUMMARY.md`
7. `src/App.tsx`
8. Existing nearby section components in `src/components/`

## Goal

Implement the Product Phase 1 `Agent 技术动态` homepage section with a minimal replaceable data contract.

## UI Design Requirements

Before making layout, visual hierarchy, responsive behavior, interaction, accessibility, or visual QA decisions, use both project-required UI skills:

- `frontend-design`
- `ui-ux-pro-max`

Use them to keep the section production-grade, consistent with the existing site, and suitable for a calm Chinese-first SaaS marketing page. After implementation, verify desktop and mobile behavior with Playwright when the app is runnable.

For browser verification, use the installed Codex skills:

- `playwright` for desktop/mobile page checks, snapshots, screenshots, and link behavior.
- `playwright-interactive` if iterative visual debugging is needed.
- `screenshot` only as a fallback when Playwright capture is not enough.

## Orchestrator Design Decision

Implement this section as an early but non-disruptive homepage intelligence block:

- Insert it after `<TrustCases />` and before `<PainPoints />` in `src/App.tsx`.
- Use a local typed data file, such as `src/data/agent-news.ts`, with exactly 5 placeholder items.
- Add a focused section component, such as `src/components/agent-news.tsx`.
- Use the existing dark SaaS visual system: `max-w-7xl`, `py-24 sm:py-32`, subtle grid/glow background, white/blue/green accents, and `ScrollReveal`.
- Recommended layout: one larger lead item plus four compact items on desktop; single-column stacked cards on mobile.
- Keep the section informational, not promotional. It should read like curated Agent intelligence, not a blog index or product hero.
- Use lucide icons where icons are needed, especially for external-link affordances.
- External links must use `target="_blank"` and `rel="noopener noreferrer"`.
- Include concise caveat copy that summaries are automatically organized for convenience and the original source remains authoritative.
- Do not add runtime loading, fetch, retry, empty, or error states for Phase 1 because the data source is a static TS fixture.

## Scope

- Add an early-homepage section named `Agent 技术动态` or equivalent.
- Render exactly 5 curated items.
- Each item must include original title, original URL, 1-2 sentence Chinese SEO-friendly summary, and tags.
- Title clicks open the original source URL.
- Use a static fixture or local typed data contract that can later be replaced by OmniGraph daily JSON.
- Add light caveat copy that automatic summaries are for convenience and source articles remain authoritative.
- Match existing Vite/React/Tailwind/component style.

## Do Not Do

- Do not create station-side article detail pages.
- Do not add database, admin review, scheduler, auth, or backend pipeline.
- Do not import OmniGraph code.
- Do not implement the assistant in this session.
- Do not deploy.

## Suggested Files

Inspect first, then choose the smallest change set. Likely candidates:

- `src/App.tsx`
- `src/components/`
- A small local fixture or typed data file if that matches existing patterns

## Success Criteria

1. NEWS-01 through NEWS-07 are satisfied.
2. The section appears early on the homepage.
3. The data contract is obvious and easy to replace.
4. The UI remains consistent with existing dark-theme section patterns.

## Verification

Run:

```bash
npm run lint
npm run build
```

If a dev server is needed for visual verification, start it locally and use Playwright to check desktop and mobile views. Do not deploy.

Prefer `playwright` skill workflows for browser evidence. If using `playwright-interactive`, confirm the session has `js_repl` enabled; otherwise fall back to `playwright` CLI workflows.

## Report Back

Return:

- Changed files
- Verification commands and results
- Data contract shape
- Any blockers or product decisions needed
- Residual risks
