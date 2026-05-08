# VitaClaw Website OmniGraph Integration

## What This Is

VitaClaw is a Chinese-first Vite + React single-page marketing website for presenting enterprise office automation scenarios. This project initializes the GSD planning structure for integrating OmniGraph-curated Agent intelligence into the website without turning the site into the OmniGraph application itself.

OmniGraph remains the producer of curated Agent intelligence data. The VitaClaw website is the consumer and presentation layer for Phase 1 homepage experiences.

## Core Value

Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.

## Requirements

### Validated

- ✓ Existing Vite + React marketing site renders as a single-page linear homepage — existing repo state.
- ✓ Existing project instructions define MVP, single-maintainer, and OmniGraph boundary principles — `AGENTS.md` and `CLAUDE.md`.

### Active

- [ ] Establish durable GSD planning artifacts for the VitaClaw website OmniGraph integration.
- [ ] Add an early-homepage `Agent 技术动态` section that displays exactly 5 curated OmniGraph Layer 1/2 passed articles.
- [ ] Add a right-bottom floating `VitaClaw 助手` as a lightly bounded presales scenario consultant.
- [ ] Verify the Phase 1 website with lint, build, and responsive checks before any deployment.
- [ ] Keep deployment as an explicit later action, not part of initialization.

### Out of Scope

- `VitaClaw 知识库` deep-research app — deferred to Phase 2 and requires explicit assignment.
- LightRAG, Cognee, or KG Synthesize calls from the homepage assistant — prohibited in Phase 1.
- Station-side article detail pages — Phase 1 news titles open original source URLs only.
- Login, tenancy, billing, database, admin review, or enterprise access gates — not needed for public Phase 1 MVP.
- Production deployment during project initialization — user explicitly said not to deploy.
- UI or `src` business-code implementation during initialization — user explicitly said not to implement UI or modify `src`.

## Context

The repository is `sztimhdd/vitaclaw-site`, locally checked out at `/home/sztimhdd/vitaclaw-site`. Production is currently served from an Aliyun host at `101.133.154.49` using Caddy static hosting of Vite `dist`, but local development should happen in this repo rather than the production path.

The current site is a pure client-side Vite SPA. `src/App.tsx` renders `<Navbar />`, a linear stack of homepage sections, `<Footer />`, and `<StickyCTABar />`. The stack and visual system are documented in `CLAUDE.md`: Vite 6, React 19, TypeScript 5.8, Tailwind CSS v4, `motion`, and `lucide-react`.

OmniGraph is a separate repo: `sztimhdd/OmniGraph-Vault`. It is responsible for ingesting, filtering, storing, and exporting Agent intelligence. The website must consume a small data/API contract and must not import OmniGraph code directly.

Phase 1 homepage assistant decisions are already locked:

- User-facing name: `VitaClaw 助手`.
- Hidden implementation brand: Hermes may power it later, but `Hermes` is not the public primary name.
- Role: presales scenario consultant.
- Scenario focus: general enterprise office cross-system workflows.
- FAQ buttons emphasize approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
- Until product docs exist, behavior stays simple, static, and clearly bounded.
- Lead capture is soft: offer `预约演示`, `获取方案`, or `留下企业邮箱` without blocking conversation.

Phase 1 Agent news decisions are already locked:

- Homepage section name: `Agent 技术动态` or equivalent.
- It appears early on the homepage.
- It displays exactly 5 curated items.
- Source scope is only OmniGraph Layer 1 and Layer 2 passed articles.
- Publishing mode is fully automatic and daily in the eventual production pipeline.
- Each item includes original title, original URL, 1-2 sentence Chinese SEO-friendly summary, and tags.
- Clicking a title opens the original article URL.
- The site shows a light caveat that summaries are automatic and source articles remain authoritative.

## Constraints

- **Workspace**: All planning artifacts belong in `/home/sztimhdd/vitaclaw-site` — this is the website repo, not `OmniGraph-Vault`.
- **Scope**: Product Phase 1 only includes Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy readiness.
- **Implementation**: This initialization must not implement UI, modify `src`, or deploy.
- **Architecture**: Keep code small, explicit, easy to delete, and aligned with existing Vite/React patterns.
- **Data Boundary**: OmniGraph produces curated data; the website consumes exported data through a minimal contract.
- **Security**: Do not store server passwords, API keys, or other secrets in the repo.
- **Public Access**: Phase 1 features are public and use light caveats rather than hard enterprise gates.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use `.planning` as the main orchestrator memory | User wants this Codex session to act as GSD orchestrator for the website repo | Pending |
| Split Product Phase 1 into four GSD workstreams | Matches the handoff and keeps child sessions bounded | Pending |
| Start Agent news from a static JSON fixture or typed local contract | Minimizes pipeline complexity until OmniGraph export shape is final | Pending |
| Keep `VitaClaw 助手` static and bounded in Phase 1 | Product docs/specs are not yet available for real RAG | Pending |
| Defer deployment to an explicit later task | User said not to deploy during initialization | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? Move to Out of Scope with reason.
2. Requirements validated? Move to Validated with phase reference.
3. New requirements emerged? Add to Active.
4. Decisions to log? Add to Key Decisions.
5. "What This Is" still accurate? Update if drifted.

**After each milestone**:
1. Full review of all sections.
2. Core Value check: still the right priority?
3. Audit Out of Scope: reasons still valid?
4. Update Context with current state.

---
*Last updated: 2026-05-08 after initialization*
