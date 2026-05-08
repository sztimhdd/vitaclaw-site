# Stack Research: VitaClaw Website OmniGraph Integration

**Source basis:** Local repo instructions and orchestrator handoff documents, not external research.
**Date:** 2026-05-08

## Current Stack

- Vite 6
- React 19
- TypeScript 5.8
- Tailwind CSS v4 via `@tailwindcss/vite`
- `motion` for scroll reveal patterns
- `lucide-react` for icons
- Vite static build served by Caddy in production

## Recommendation

Use the existing frontend stack and patterns. Do not introduce routing, database, server runtime, enterprise auth, or a custom data pipeline for Phase 1.

For `Agent 技术动态`, start with a minimal local fixture or typed data module that can later be swapped for generated daily JSON from OmniGraph.

For `VitaClaw 助手`, use local bounded state and static responses until product documentation and function specs exist.

## Do Not Use In Phase 1

- LightRAG
- Cognee
- KG Synthesize
- Station-side article detail routes
- Backend persistence
- Login, tenancy, billing, or admin review systems

## Confidence

High. These recommendations come directly from `AGENTS.md`, `CLAUDE.md`, and the orchestrator handoff.
