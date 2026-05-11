# Child Session Prompt: Website news adapter

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `docs/orchestrator/omnigraph-agent-news-contract.md`
8. `src/data/agent-news.ts`
9. `src/components/agent-news.tsx`
10. `src/App.tsx`

## Goal

Update `Agent 技术动态` so the website can consume a static OmniGraph export JSON while retaining the existing local typed data as safe fallback.

## UI Design Requirements

Before making layout, visual hierarchy, responsive behavior, interaction, accessibility, or visual QA decisions, use both project-required UI skills:

- `frontend-design`
- `ui-ux-pro-max`

For browser verification, use `playwright` by default.

## Scope

- Implement a small adapter/validator for the contract defined in Phase 5.
- Add representative static export data at the agreed path, likely `public/data/agent-news.json`.
- Keep `src/data/agent-news.ts` as safe fallback data.
- Ensure valid export data renders exactly 5 items.
- Ensure absent or invalid export data falls back safely without white-screening.
- Keep existing section layout stable unless data fields require minor display adjustments.
- Preserve original-source external links and source-authority caveat.

## Do Not Do

- Do not add backend services, database, auth, scheduler, admin review UI, or article detail pages.
- Do not import OmniGraph code.
- Do not implement `VitaClaw 知识库`.
- Do not upgrade `VitaClaw 助手` to free-form chat.
- Do not deploy.

## Suggested Files

Inspect first, then choose the smallest change set. Likely candidates:

- `src/components/agent-news.tsx`
- `src/data/agent-news.ts`
- `src/data/` or `src/lib/` for a small validator/adapter
- `public/data/agent-news.json`
- `docs/orchestrator/omnigraph-agent-news-contract.md` only if small clarifications are needed

## Success Criteria

1. ADAPTER-01 through ADAPTER-05 are satisfied.
2. `Agent 技术动态` renders from valid export data.
3. Invalid/missing export data falls back to the existing 5 local items.
4. Desktop and expanded mobile states still show exactly 5 items.
5. No backend or OmniGraph code import is introduced.

## Verification

Run:

```bash
npm run lint
npm run build
```

Use Playwright to verify desktop and mobile `Agent 技术动态` rendering, source links, caveat, no horizontal overflow, and fallback behavior if practical.

Do not deploy.

## Report Back

Return:

- Changed files
- Adapter shape
- Export path
- Fallback behavior
- Verification commands and results
- Playwright coverage summary
- Blockers or decisions needed
- Residual risks

