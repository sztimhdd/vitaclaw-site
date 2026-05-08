# Research Summary: VitaClaw Website OmniGraph Integration

**Date:** 2026-05-08
**Method:** Local-source synthesis from `AGENTS.md`, `CLAUDE.md`, `docs/orchestrator/omnigraph-integration-handoff.md`, and `docs/orchestrator/new-codex-session-kickstarter.md`.

## Key Findings

**Stack:** Keep the existing Vite 6 + React 19 + TypeScript + Tailwind v4 SPA stack. Phase 1 does not need routing, database, auth, or a backend runtime.

**Table Stakes:** Product Phase 1 consists only of Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy readiness.

**Watch Out For:** Do not build `VitaClaw 知识库`, do not call LightRAG/Cognee/KG from the assistant, do not create internal article detail pages, and do not deploy without explicit approval.

## Product Boundary

OmniGraph is the producer of curated Agent intelligence. The VitaClaw website is a presentation-layer consumer. Phase 1 should validate the homepage surfaces and data contract before investing in automation or platform architecture.

## Recommended Implementation Sequence

1. Finalize planning and child-session prompts.
2. Build `Agent 技术动态` with a replaceable static data contract.
3. Build `VitaClaw 助手` with static bounded responses and soft lead capture.
4. Run lint/build/Playwright verification and prepare deployment handoff.

## Open Inputs

- Exact OmniGraph Layer 1/2 daily export shape.
- VitaClaw product documentation and function specs for future real RAG.
- Final deployment authorization.

---
*Last updated: 2026-05-08 after initialization*
