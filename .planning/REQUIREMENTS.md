# Requirements: VitaClaw Website OmniGraph Integration

**Defined:** 2026-05-08
**Core Value:** Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.

## v1 Requirements

These requirements cover Product Phase 1 only.

### Foundation

- [x] **FOUND-01**: The repo contains `.planning` project, requirements, roadmap, state, research summary, and phase prompt artifacts for the OmniGraph integration.
- [x] **FOUND-02**: Phase 1 and Phase 2 boundaries are documented so child sessions do not silently implement deferred scope.
- [x] **FOUND-03**: Child-session prompts define scope, files likely to change, verification commands, reporting format, blockers, and risks.
- [x] **FOUND-04**: Planning artifacts are based on `AGENTS.md`, `CLAUDE.md`, `docs/orchestrator/omnigraph-integration-handoff.md`, and `docs/orchestrator/new-codex-session-kickstarter.md`.

### Agent News

- [x] **NEWS-01**: User can see an early-homepage section named `Agent 技术动态` or equivalent.
- [x] **NEWS-02**: The section displays exactly 5 curated Agent intelligence items.
- [x] **NEWS-03**: Each item includes original title, original source URL, 1-2 sentence Chinese SEO-friendly summary, and tags.
- [x] **NEWS-04**: Clicking an item title opens the original source URL.
- [x] **NEWS-05**: Phase 1 uses a minimal static JSON fixture or local typed data contract that can later be replaced by daily OmniGraph output.
- [x] **NEWS-06**: The section includes a light caveat that automatic summaries are for convenience and source articles remain authoritative.
- [x] **NEWS-07**: Phase 1 does not create station-side article detail pages.

### Assistant

- [x] **ASSIST-01**: User can access a right-bottom floating `VitaClaw 助手` from the homepage.
- [x] **ASSIST-02**: The assistant presents itself as a presales scenario consultant for enterprise office cross-system workflows.
- [x] **ASSIST-03**: FAQ buttons cover approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
- [x] **ASSIST-04**: Phase 1 assistant responses are simple, static, clearly bounded, and do not call LightRAG, Cognee, or KG Synthesize.
- [x] **ASSIST-05**: The assistant offers soft lead-capture paths such as `预约演示`, `获取方案`, or `留下企业邮箱` without gating the conversation.
- [x] **ASSIST-06**: The assistant uses light expectation-setting copy rather than heavy enterprise access controls.

### Verification

- [x] **VERIFY-01**: `npm run lint` passes before a Phase 1 implementation is accepted.
- [x] **VERIFY-02**: `npm run build` passes before a Phase 1 implementation is accepted.
- [x] **VERIFY-03**: Desktop and mobile homepage behavior is verified with Playwright after UI work exists.
- [x] **VERIFY-04**: Verification confirms no secrets were added and no production deployment happened without explicit user approval.
- [x] **VERIFY-05**: Deployment steps remain documented as a child-session prompt until the user explicitly authorizes deployment.

## Future Requirements

Deferred to future milestones and not mapped to the active v1.1 execution phases.

### v1.1.2 Agent News Image Enrichment

- **IMAGE-01**: Contract docs define optional image fields for Agent news items.
- **IMAGE-02**: Website adapter accepts valid image metadata from static JSON.
- **IMAGE-03**: Invalid image metadata does not invalidate otherwise valid article data.
- **IMAGE-04**: `Agent 技术动态` still renders exactly 5 articles.
- **IMAGE-05**: Main `今日重点` card displays a valid image when provided.
- **IMAGE-06**: Missing, invalid, or failed image falls back to current no-image display without white-screening.
- **IMAGE-07**: Source-authority caveat remains visible.
- **IMAGE-08**: Original source links remain external and unchanged.
- **IMAGE-09**: Desktop and mobile expanded states have no horizontal overflow.
- **IMAGE-10**: No backend, database, auth, scheduler, admin UI, article detail page, or OmniGraph code import is introduced.

### v1.2 Product-Document Assistant

- [x] **DOCINGEST-01**: The repo documents where raw product PDFs, reviewed Markdown, and retrieval chunks should live for v1.2.
- [x] **DOCINGEST-02**: The ingestion contract defines a safe chunk schema for product-document retrieval.
- [x] **DOCINGEST-03**: The ingestion contract defines assistant answer boundaries, refusal cases, and CTA redirects.
- [x] **DOCINGEST-04**: The ingestion contract defines document extraction and chunk-quality verification steps.
- [x] **DOCQA-01**: User can ask natural-language product questions in `VitaClaw 助手`.
- [x] **DOCQA-02**: The assistant answers from official VitaClaw product documentation derived from user-provided documentation files.
- [x] **DOCQA-03**: DeepSeek API access is kept server-side; no API key is exposed in frontend bundles, static assets, logs, or docs.
- [x] **DOCQA-04**: The assistant clearly refuses or redirects when the answer is not covered by product documentation.
- [x] **DOCQA-05**: The assistant keeps soft CTA paths and does not require login, tenancy, or heavy enterprise gates for public homepage use.
- [x] **DOCQA-06**: The first chat MVP does not use LightRAG, Cognee, KG memory, OmniGraph image rendering, customer data, or persistent user profiling.
- [ ] **DOCQA-07**: Production deployment uses a runtime that can serve `/api/vitaclaw-assistant/chat`; static-only Caddy `dist/` hosting is not sufficient for v1.2.

### v1.3 OmniGraph Media Citations

- **MEDIA-01**: Assistant answers can include approved OmniGraph image references when relevant.
- **MEDIA-02**: Each image includes a validated URL, alt text, source title or source URL, and attribution metadata.
- **MEDIA-03**: The website only renders image URLs from approved static paths or an allowlisted media host.
- **MEDIA-04**: The assistant does not render arbitrary user-provided image URLs.
- **MEDIA-05**: AI image generation remains out of scope for this milestone.

### v2 Knowledge Base

- **KB-01**: User can open `VitaClaw 知识库` as a new-tab single-page web app.
- **KB-02**: Default mode supports LightRAG/Cognee knowledge-graph chat.
- **KB-03**: Optional `深度研究报告` mode produces cited technical reports.
- **KB-04**: Generated reports can be downloaded as Markdown or PDF.
- **KB-05**: Reports are not automatically published.
- **KB-06**: Cognee-style memory, if enabled, has explicit scope, retention, deletion, and user-consent boundaries.

## v1.1 Requirements

These requirements cover the OmniGraph Agent 情报数据整合 milestone.

### Contract

- [x] **CONTRACT-01**: The repo documents the website-facing OmniGraph Agent news export contract.
- [x] **CONTRACT-02**: The contract requires exactly 5 items for homepage display.
- [x] **CONTRACT-03**: Each export item includes original title, original URL, Chinese summary, tags, source/domain, layer, curation status, and timestamp metadata when available.
- [x] **CONTRACT-04**: The contract only permits OmniGraph Layer 1 or Layer 2 articles with passed curation status.
- [x] **CONTRACT-05**: The contract defines validation and fallback behavior for missing, malformed, non-5-item, invalid-URL, or incomplete data.

### Website Adapter

- [x] **ADAPTER-01**: The website can consume a static OmniGraph export JSON without importing OmniGraph code.
- [x] **ADAPTER-02**: The existing typed local news data remains as a safe fallback if the export is absent or invalid.
- [x] **ADAPTER-03**: `Agent 技术动态` still renders exactly 5 items on desktop and expanded mobile states.
- [x] **ADAPTER-04**: The source-authority caveat remains visible.
- [x] **ADAPTER-05**: The adapter keeps the current homepage layout stable and does not introduce backend, database, auth, scheduler, or admin UI.

### OmniGraph Export Handoff

- [x] **EXPORT-01**: A child-session prompt defines how the OmniGraph side should generate the website contract export.
- [x] **EXPORT-02**: The handoff keeps OmniGraph as producer and VitaClaw website as consumer/presentation layer.
- [x] **EXPORT-03**: The handoff defines where the generated file should be placed or copied for local build and Aliyun deployment.
- [x] **EXPORT-04**: The handoff avoids writing website planning artifacts into `OmniGraph-Vault`.

### Integration Verification

- [x] **INTVERIFY-01**: `npm run lint` passes with the adapter and representative export data.
- [x] **INTVERIFY-02**: `npm run build` passes with the adapter and representative export data.
- [x] **INTVERIFY-03**: Playwright verifies desktop and mobile `Agent 技术动态` display from export-backed data.
- [x] **INTVERIFY-04**: Verification confirms no secrets, server credentials, or OmniGraph internals were added to the website repo.
- [x] **INTVERIFY-05**: If deployment is explicitly approved, Aliyun production shows the export-backed Agent news and `/health` plus `/healthz` remain healthy.

## Out of Scope

| Feature | Reason |
|---------|--------|
| `VitaClaw 知识库` Phase 2 app | Explicitly deferred until assigned |
| Homepage LightRAG/Cognee/KG integration | Phase 1 assistant must stay static and bounded |
| LightRAG/Cognee/KG in v1.2 product-doc chat | Product-document Q&A should ship before the heavier knowledge-base architecture |
| OmniGraph images in v1.2 product-doc chat | Media citation should be a separate v1.3 milestone with explicit URL safety rules |
| Agent news images in current v1.1 deployment | Image support is a planned v1.1.2 enhancement and not part of the deployed v1.1 contract/adapter behavior |
| Station-side news detail pages | Phase 1 titles open original article URLs |
| Login, tenancy, billing, database, admin review | Enterprise platform architecture is unnecessary for this public MVP |
| Production deployment during initialization | User explicitly said not to deploy |
| UI implementation during initialization | User explicitly said not to implement UI |
| `src` business-code changes during initialization | User explicitly said not to modify `src` |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Complete |
| FOUND-03 | Phase 1 | Complete |
| FOUND-04 | Phase 1 | Complete |
| NEWS-01 | Phase 2 | Complete |
| NEWS-02 | Phase 2 | Complete |
| NEWS-03 | Phase 2 | Complete |
| NEWS-04 | Phase 2 | Complete |
| NEWS-05 | Phase 2 | Complete |
| NEWS-06 | Phase 2 | Complete |
| NEWS-07 | Phase 2 | Complete |
| ASSIST-01 | Phase 3 | Complete |
| ASSIST-02 | Phase 3 | Complete |
| ASSIST-03 | Phase 3 | Complete |
| ASSIST-04 | Phase 3 | Complete |
| ASSIST-05 | Phase 3 | Complete |
| ASSIST-06 | Phase 3 | Complete |
| VERIFY-01 | Phase 4 | Complete |
| VERIFY-02 | Phase 4 | Complete |
| VERIFY-03 | Phase 4 | Complete |
| VERIFY-04 | Phase 4 | Complete |
| VERIFY-05 | Phase 4 | Complete |
| CONTRACT-01 | Phase 5 | Complete |
| CONTRACT-02 | Phase 5 | Complete |
| CONTRACT-03 | Phase 5 | Complete |
| CONTRACT-04 | Phase 5 | Complete |
| CONTRACT-05 | Phase 5 | Complete |
| ADAPTER-01 | Phase 6 | Complete |
| ADAPTER-02 | Phase 6 | Complete |
| ADAPTER-03 | Phase 6 | Complete |
| ADAPTER-04 | Phase 6 | Complete |
| ADAPTER-05 | Phase 6 | Complete |
| EXPORT-01 | Phase 7 | Complete |
| EXPORT-02 | Phase 7 | Complete |
| EXPORT-03 | Phase 7 | Complete |
| EXPORT-04 | Phase 7 | Complete |
| INTVERIFY-01 | Phase 8 | Complete |
| INTVERIFY-02 | Phase 8 | Complete |
| INTVERIFY-03 | Phase 8 | Complete |
| INTVERIFY-04 | Phase 8 | Complete |
| INTVERIFY-05 | Phase 8 | Complete |
| DOCINGEST-01 | v1.2 Phase 1 | Complete |
| DOCINGEST-02 | v1.2 Phase 1 | Complete |
| DOCINGEST-03 | v1.2 Phase 1 | Complete |
| DOCINGEST-04 | v1.2 Phase 1 | Complete |
| DOCQA-01 | v1.2 Checkpoint 3 | Complete |
| DOCQA-02 | v1.2 Checkpoint 3 | Complete |
| DOCQA-03 | v1.2 Checkpoint 4 | Complete |
| DOCQA-04 | v1.2 Checkpoint 3 | Complete |
| DOCQA-05 | v1.2 Checkpoint 3 | Complete |
| DOCQA-06 | v1.2 Checkpoint 4 | Complete |
| DOCQA-07 | v1.2 Deployment | Pending API runtime plan |

**Coverage:**
- v1 requirements: 22 total, all complete
- v1.1 requirements: 19 total, all complete
- v1.1.2 planned requirements: 10 total, pending
- v1.2 requirements: 11 total, 10 complete, 1 pending API runtime deployment plan
- Mapped to phases: 52
- Unmapped: 0

---
*Requirements defined: 2026-05-08*
*Last updated: 2026-05-10 after v1.2 local verification*
