# Pitfalls Research: VitaClaw Website OmniGraph Integration

**Source basis:** Local repo instructions and orchestrator handoff documents, not external research.
**Date:** 2026-05-08

## Pitfalls To Avoid

### Building Phase 2 Too Early

**Warning sign:** A task adds `VitaClaw 知识库`, deep research reports, citations, or knowledge-graph chat.

**Prevention:** Keep all Phase 2 work in `.planning/REQUIREMENTS.md` v2 only until explicitly assigned.

### Turning The Website Into OmniGraph

**Warning sign:** Website code imports OmniGraph internals or assumes LightRAG/Cognee storage paths.

**Prevention:** Use a small data/API contract. OmniGraph produces data; the website consumes it.

### Over-Engineering The News Pipeline

**Warning sign:** Phase 1 adds schedulers, database tables, admin queues, moderation dashboards, or detail pages.

**Prevention:** Start from a static fixture or local typed contract and replace it later with daily JSON output.

### Over-Promising The Assistant

**Warning sign:** Assistant copy implies full product RAG or authoritative technical answers before product docs exist.

**Prevention:** Use light caveats and static presales scenario guidance.

### Deploying Without Explicit Approval

**Warning sign:** A child session runs server copy, restart, Caddy, or production commands as part of verification.

**Prevention:** Verification phase prepares deployment instructions but does not deploy unless the user explicitly approves.

## Confidence

High. These pitfalls are directly called out by the handoff and repo instructions.
