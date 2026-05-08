# AGENTS.md

This is a standard guidance file for AI coding agents working in this repository.

See CLAUDE.md for project-specific instructions, tech stack, and conventions.

## OmniGraph Integration Operating Principles

For the OmniGraph + VitaClaw website integration, agents must optimize for a
single-maintainer MVP:

- Keep code small, explicit, and easy to delete.
- Prefer common libraries and existing project patterns over custom frameworks.
- Avoid enterprise platform architecture unless the current milestone requires it.
- Phase 1 scope is the homepage `VitaClaw 助手` and `Agent 技术动态`; do not build
  the Phase 2 `VitaClaw 知识库` deep-research app unless explicitly assigned.
- The homepage assistant must not call LightRAG, Cognee, or KG Synthesize in
  Phase 1.
- Treat OmniGraph as the producer of curated Agent intelligence data and this
  website as the consumer/presentation layer.
- Keep public AI features lightly bounded with clear user-facing caveats rather
  than hard enterprise gates.

Before starting OmniGraph integration work, read:

- `docs/orchestrator/omnigraph-integration-handoff.md`
- `docs/orchestrator/new-codex-session-kickstarter.md`
