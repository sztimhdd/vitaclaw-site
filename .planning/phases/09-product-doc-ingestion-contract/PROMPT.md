# Child Session Prompt: v1.2 Phase 1 Product Document Ingestion Contract

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Mission

Plan v1.2 Phase 1: VitaClaw product documentation ingestion contract for the
homepage `VitaClaw 助手` product-document Q&A MVP.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `.planning/MILESTONES.md`
8. `src/components/vitaclaw-assistant.tsx`
9. `docs/orchestrator/omnigraph-integration-handoff.md`
10. `docs/orchestrator/vitaclaw-product-doc-ingestion-contract.md`

## Context

- v1.0 homepage assistant is a static bounded FAQ widget.
- v1.1 OmniGraph Agent news integration is locally verified and awaiting
  deployment approval or closeout.
- v1.2 goal is to upgrade `VitaClaw 助手` into a lightweight product-document
  Q&A chatbot.
- The user can provide VitaClaw product documentation as PDFs or Markdown, with
  the first observed file at `/mnt/d/Downloads/VitaClaw-KB.md`.
- DeepSeek API access must never be stored in the repo, docs, logs, frontend
  bundles, static assets, or shared output.
- v1.2 must not use LightRAG, Cognee, KG memory, OmniGraph image rendering,
  customer system access, login, tenancy, or persistent user profiling.
- Future v1.3 may add OmniGraph image citations.
- Future v2 may add LightRAG/Cognee-backed `VitaClaw 知识库`.

## Scope

- Do not implement chat UI.
- Do not call DeepSeek.
- Do not build backend/API.
- Do not deploy.
- Create or update docs/planning only.
- Define how product PDFs and Markdown become assistant-readable reviewed
  product documentation.
- Define source document storage rules.
- Define reviewed Markdown and chunk paths.
- Define safe chunk schema for later chat retrieval.
- Define answer boundaries.
- Define extraction quality verification.
- Prepare the next child-session prompt for v1.2 Phase 2.

## Expected Outputs

1. Current-state summary.
2. Proposed v1.2 docs ingestion structure.
3. Product document ingestion contract.
4. Answer policy and boundary rules.
5. Verification checklist.
6. Child-session prompt for v1.2 Phase 2.
7. Updated relevant `.planning` docs only if needed.

## Constraints

- Keep it small and single-maintainer friendly.
- Prefer Markdown/JSON files and simple scripts over databases.
- No secrets.
- Do not modify `src` business code.
- Do not touch deployment.
- Report changed files, blockers, and residual risks.
