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

## Report Back

Return:

- Changed files
- Verification commands and results
- Data contract shape
- Any blockers or product decisions needed
- Residual risks
