# Roadmap: VitaClaw Website OmniGraph Integration

**Created:** 2026-05-08
**Project Mode:** MVP
**Current Milestone:** Product Phase 1

Product Phase 1 is intentionally narrow: Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy readiness. Phase 2 `VitaClaw 知识库` is not part of this roadmap.

## Phase Summary

| # | Phase | Goal | Requirements |
|---|-------|------|--------------|
| 1 | Foundation/docs | Establish GSD orchestration context and child-session prompts without touching UI code | FOUND-01, FOUND-02, FOUND-03, FOUND-04 |
| 2 | Agent 技术动态 | Add the homepage news surface and minimal data contract | NEWS-01, NEWS-02, NEWS-03, NEWS-04, NEWS-05, NEWS-06, NEWS-07 |
| 3 | VitaClaw 助手 | Add the bounded floating assistant placeholder behavior | ASSIST-01, ASSIST-02, ASSIST-03, ASSIST-04, ASSIST-05, ASSIST-06 |
| 4 | Verification/deploy | Verify implementation and prepare deployment handoff without deploying unless instructed | VERIFY-01, VERIFY-02, VERIFY-03, VERIFY-04, VERIFY-05 |

## Phases

### Phase 1: Foundation/docs

**Goal:** Establish the GSD project structure, current-state memory, and child-session prompts for Product Phase 1.
**Mode:** mvp

**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04

**Success Criteria**:
1. `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md`, `.planning/STATE.md`, and `.planning/research/SUMMARY.md` exist.
2. Phase directories exist for Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy.
3. Each phase directory contains a child-session prompt that keeps scope bounded and asks for changed files, verification commands, risks, and blockers.
4. No `src` business code, UI implementation, or deployment changes are made during this phase.

**Notes**:
- This phase is planning-only.
- `AGENTS.md` already contains OmniGraph MVP operating principles and is treated as source context.

### Phase 2: Agent 技术动态

**Goal:** Add an early-homepage news surface for 5 curated Agent intelligence items using a minimal replaceable data contract.
**Mode:** mvp

**Requirements:** NEWS-01, NEWS-02, NEWS-03, NEWS-04, NEWS-05, NEWS-06, NEWS-07

**Success Criteria**:
1. Homepage includes an early `Agent 技术动态` section consistent with the existing Vite/React/Tailwind design system.
2. Exactly 5 items render from a minimal local fixture or typed data contract.
3. Each item shows original title, original URL, Chinese SEO summary, and tags.
4. Title links open the original source URL; no internal article detail pages are created.
5. Copy includes a light caveat that summaries are automatic and sources remain authoritative.

**Notes**:
- Do not build the daily OmniGraph export pipeline until the export shape is confirmed.
- Keep the data contract easy to replace with generated daily JSON.

### Phase 3: VitaClaw 助手

**Goal:** Add a right-bottom floating `VitaClaw 助手` that behaves as a bounded presales scenario consultant.
**Mode:** mvp

**Requirements:** ASSIST-01, ASSIST-02, ASSIST-03, ASSIST-04, ASSIST-05, ASSIST-06

**Success Criteria**:
1. A right-bottom floating assistant entry point is available on the homepage.
2. Assistant copy presents `VitaClaw 助手`, not Hermes, as the public-facing name.
3. FAQ buttons cover approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
4. Responses are static or locally bounded and never call LightRAG, Cognee, KG Synthesize, or product-doc RAG.
5. The assistant offers soft lead-capture paths without blocking conversation.

**Notes**:
- Real RAG waits for VitaClaw product documentation and function specs.
- Public AI surfaces should set expectations lightly rather than adding heavy gates.

### Phase 4: Verification/deploy

**Goal:** Verify Phase 1 implementation quality and prepare deployment instructions while keeping actual deployment behind explicit approval.
**Mode:** mvp

**Requirements:** VERIFY-01, VERIFY-02, VERIFY-03, VERIFY-04, VERIFY-05

**Success Criteria**:
1. `npm run lint` passes.
2. `npm run build` passes.
3. Playwright checks cover desktop and mobile homepage states after UI implementation exists.
4. Review confirms no secrets, no server credentials, and no unapproved production deployment.
5. Deployment prompt documents the Aliyun/Caddy static host context but requires explicit user approval before any deploy action.

**Notes**:
- Production path observed earlier: `/opt/vitaclaw/control-plane/vitaclaw-site`.
- Public URL observed earlier: `http://101.133.154.49/`.
- Do not deploy from this phase unless the user explicitly says to deploy.

## Coverage

- v1 requirements: 22 total
- Requirements mapped: 22
- Unmapped: 0

---
*Roadmap created: 2026-05-08*
*Last updated: 2026-05-08 after initialization*
