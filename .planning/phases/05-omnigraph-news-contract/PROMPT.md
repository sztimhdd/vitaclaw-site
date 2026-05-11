# Child Session Prompt: OmniGraph news contract

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `src/data/agent-news.ts`
8. `src/components/agent-news.tsx`
9. `docs/orchestrator/omnigraph-integration-handoff.md`

## Goal

Define the website-facing OmniGraph `Agent 技术动态` export contract and validation/fallback rules.

## Scope

- Create a contract document for the static JSON export consumed by the website.
- Define the canonical export path, recommended as `public/data/agent-news.json` unless implementation context shows a better static path.
- Define a minimal schema for exactly 5 items.
- Include fields for original title, URL, Chinese summary, tags, source/domain, layer, curation status, and timestamp metadata when available.
- Define eligibility: OmniGraph Layer 1 or Layer 2, passed curation status only.
- Define invalid-data handling: missing file, malformed JSON, not exactly 5 items, invalid URL, missing summary/tags, non-passed status, unsupported layer.
- State that the website is a consumer/presentation layer and must not import OmniGraph code.

## Do Not Do

- Do not implement the website adapter in this phase.
- Do not modify OmniGraph repo code in this phase.
- Do not create backend services, database tables, schedulers, admin UI, or article detail pages.
- Do not deploy.
- Do not store secrets, server passwords, private keys, or tokens.

## Suggested Files

Inspect first, then choose the smallest docs change set. Likely candidates:

- `docs/orchestrator/omnigraph-agent-news-contract.md`
- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`

## Success Criteria

1. CONTRACT-01 through CONTRACT-05 are satisfied.
2. The contract is specific enough for both website and OmniGraph child sessions to implement independently.
3. Fallback behavior is explicit.
4. Boundaries are explicit: data-file contract only, no direct code import.

## Verification

Run:

```bash
git diff -- docs .planning
git diff --check
git status --short
```

Do not run deployment commands.

## Report Back

Return:

- Changed files
- Contract path
- Schema summary
- Validation/fallback rules
- Blockers or decisions needed
- Residual risks

