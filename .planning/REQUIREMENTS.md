# Requirements: VitaClaw Website OmniGraph Integration

**Defined:** 2026-05-08
**Core Value:** Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.

## v1 Requirements

These requirements cover Product Phase 1 only.

### Foundation

- [ ] **FOUND-01**: The repo contains `.planning` project, requirements, roadmap, state, research summary, and phase prompt artifacts for the OmniGraph integration.
- [ ] **FOUND-02**: Phase 1 and Phase 2 boundaries are documented so child sessions do not silently implement deferred scope.
- [ ] **FOUND-03**: Child-session prompts define scope, files likely to change, verification commands, reporting format, blockers, and risks.
- [ ] **FOUND-04**: Planning artifacts are based on `AGENTS.md`, `CLAUDE.md`, `docs/orchestrator/omnigraph-integration-handoff.md`, and `docs/orchestrator/new-codex-session-kickstarter.md`.

### Agent News

- [ ] **NEWS-01**: User can see an early-homepage section named `Agent 技术动态` or equivalent.
- [ ] **NEWS-02**: The section displays exactly 5 curated Agent intelligence items.
- [ ] **NEWS-03**: Each item includes original title, original source URL, 1-2 sentence Chinese SEO-friendly summary, and tags.
- [ ] **NEWS-04**: Clicking an item title opens the original source URL.
- [ ] **NEWS-05**: Phase 1 uses a minimal static JSON fixture or local typed data contract that can later be replaced by daily OmniGraph output.
- [ ] **NEWS-06**: The section includes a light caveat that automatic summaries are for convenience and source articles remain authoritative.
- [ ] **NEWS-07**: Phase 1 does not create station-side article detail pages.

### Assistant

- [ ] **ASSIST-01**: User can access a right-bottom floating `VitaClaw 助手` from the homepage.
- [ ] **ASSIST-02**: The assistant presents itself as a presales scenario consultant for enterprise office cross-system workflows.
- [ ] **ASSIST-03**: FAQ buttons cover approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
- [ ] **ASSIST-04**: Phase 1 assistant responses are simple, static, clearly bounded, and do not call LightRAG, Cognee, or KG Synthesize.
- [ ] **ASSIST-05**: The assistant offers soft lead-capture paths such as `预约演示`, `获取方案`, or `留下企业邮箱` without gating the conversation.
- [ ] **ASSIST-06**: The assistant uses light expectation-setting copy rather than heavy enterprise access controls.

### Verification

- [ ] **VERIFY-01**: `npm run lint` passes before a Phase 1 implementation is accepted.
- [ ] **VERIFY-02**: `npm run build` passes before a Phase 1 implementation is accepted.
- [ ] **VERIFY-03**: Desktop and mobile homepage behavior is verified with Playwright after UI work exists.
- [ ] **VERIFY-04**: Verification confirms no secrets were added and no production deployment happened without explicit user approval.
- [ ] **VERIFY-05**: Deployment steps remain documented as a child-session prompt until the user explicitly authorizes deployment.

## v2 Requirements

Deferred to a future release and not mapped to the current roadmap.

### Knowledge Base

- **KB-01**: User can open `VitaClaw 知识库` as a new-tab single-page web app.
- **KB-02**: Default mode supports LightRAG/Cognee knowledge-graph chat.
- **KB-03**: Optional `深度研究报告` mode produces cited technical reports.
- **KB-04**: Generated reports can be downloaded as Markdown or PDF.
- **KB-05**: Reports are not automatically published.

## Out of Scope

| Feature | Reason |
|---------|--------|
| `VitaClaw 知识库` Phase 2 app | Explicitly deferred until assigned |
| Homepage LightRAG/Cognee/KG integration | Phase 1 assistant must stay static and bounded |
| Station-side news detail pages | Phase 1 titles open original article URLs |
| Login, tenancy, billing, database, admin review | Enterprise platform architecture is unnecessary for this public MVP |
| Production deployment during initialization | User explicitly said not to deploy |
| UI implementation during initialization | User explicitly said not to implement UI |
| `src` business-code changes during initialization | User explicitly said not to modify `src` |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| NEWS-01 | Phase 2 | Pending |
| NEWS-02 | Phase 2 | Pending |
| NEWS-03 | Phase 2 | Pending |
| NEWS-04 | Phase 2 | Pending |
| NEWS-05 | Phase 2 | Pending |
| NEWS-06 | Phase 2 | Pending |
| NEWS-07 | Phase 2 | Pending |
| ASSIST-01 | Phase 3 | Pending |
| ASSIST-02 | Phase 3 | Pending |
| ASSIST-03 | Phase 3 | Pending |
| ASSIST-04 | Phase 3 | Pending |
| ASSIST-05 | Phase 3 | Pending |
| ASSIST-06 | Phase 3 | Pending |
| VERIFY-01 | Phase 4 | Pending |
| VERIFY-02 | Phase 4 | Pending |
| VERIFY-03 | Phase 4 | Pending |
| VERIFY-04 | Phase 4 | Pending |
| VERIFY-05 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0

---
*Requirements defined: 2026-05-08*
*Last updated: 2026-05-08 after initialization*
