# State: VitaClaw Website OmniGraph Integration

**Initialized:** 2026-05-08
**Runtime:** Codex
**Working Directory:** `/home/sztimhdd/vitaclaw-site`

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-05-08)

**Core value:** Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.
**Current focus:** Phase 1: Foundation/docs

## Current Status

| Phase | Status | Progress |
|-------|--------|----------|
| 1. Foundation/docs | In Progress | Planning artifacts initialized |
| 2. Agent 技术动态 | Pending | Not started |
| 3. VitaClaw 助手 | Pending | Not started |
| 4. Verification/deploy | Pending | Not started |

## Operating Assumptions

- The user wants this Codex session to act as the main GSD orchestrator.
- Child sessions are opened manually by the user and should receive decision-complete prompts.
- Planning docs are committed/tracked in git unless the user says otherwise.
- Future implementation should be sequential by default to avoid conflicting homepage composition edits.
- Product Phase 1 has no backend, database, login, billing, tenancy, or internal article pages.

## Hard Guardrails

- Do not write planning artifacts into `OmniGraph-Vault`.
- Do not put secrets in this repo.
- Do not implement Phase 2 without explicit assignment.
- Do not make the Phase 1 homepage assistant call LightRAG, Cognee, or KG Synthesize.
- Do not deploy unless the user explicitly approves deployment.
- Do not modify `src` during project initialization.

## Next Step

Run planning or execution for Phase 1 Foundation/docs:

```bash
$gsd-plan-phase 1
```

For manual child-session execution, use:

```text
.planning/phases/01-foundation-docs/PROMPT.md
```

---
*Last updated: 2026-05-08 after initialization*
