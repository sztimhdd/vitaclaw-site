# Roadmap: VitaClaw Website OmniGraph Integration

**Created:** 2026-05-08
**Project Mode:** MVP
**Current Milestones:** v1.2 (pending deploy) + v2.0 知识库 (planning)

Product Phase 1 and v1.1 are complete and deployed. Milestone v1.2 is locally verified and upgrades the homepage `VitaClaw 助手` into a product-document Q&A chatbot. v1.2.1 has prepared the production Node API runtime plan and deploy workflow update, but production deployment still requires explicit approval and one-time Aliyun systemd/Caddy setup. A new parallel track was opened: **v2.0 知识库 MVP** — a knowledge base website (SEO文集 + RAG问答) consuming OmniGraph's curated article corpus and LightRAG synthesis.

Future roadmap intent now splits into two tracks:
- **SaaS site** (vitaclaw-site): v1.1.2 images, v1.2 Q&A deploy, v1.3 media citations
- **Knowledge Base** (new Python+Jinja2 SSG site): v2.0 SEO文集 + RAG问答引擎

## Phase Summary

| # | Phase | Goal | Requirements |
|---|-------|------|--------------|
| 1 | Foundation/docs | Establish GSD orchestration context and child-session prompts without touching UI code | FOUND-01, FOUND-02, FOUND-03, FOUND-04 |
| 2 | Agent 技术动态 | Add the homepage news surface and minimal data contract | NEWS-01, NEWS-02, NEWS-03, NEWS-04, NEWS-05, NEWS-06, NEWS-07 |
| 3 | VitaClaw 助手 | Add the bounded floating assistant placeholder behavior | ASSIST-01, ASSIST-02, ASSIST-03, ASSIST-04, ASSIST-05, ASSIST-06 |
| 4 | Verification/deploy | Verify implementation and prepare deployment handoff without deploying unless instructed | VERIFY-01, VERIFY-02, VERIFY-03, VERIFY-04, VERIFY-05 |
| 5 | OmniGraph news contract | Define the static export contract, validation rules, and fallback behavior | CONTRACT-01, CONTRACT-02, CONTRACT-03, CONTRACT-04, CONTRACT-05 |
| 6 | Website news adapter | Consume export-backed static data while preserving safe fallback | ADAPTER-01, ADAPTER-02, ADAPTER-03, ADAPTER-04, ADAPTER-05 |
| 7 | OmniGraph export producer handoff | Prepare the OmniGraph-side generation/copy handoff without coupling repos | EXPORT-01, EXPORT-02, EXPORT-03, EXPORT-04 |
| 8 | Integration verification/deploy | Verify export-backed news locally and prepare or perform approved deployment | INTVERIFY-01, INTVERIFY-02, INTVERIFY-03, INTVERIFY-04, INTVERIFY-05 |
| KB | Knowledge Base v2.0 (KB MVP) | SEO文集 + RAG问答引擎 | KB-01, KB-02, KB-03, KB-04 |

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
- Completed on 2026-05-08; proceed to Phase 2 without modifying Phase 1 scope.

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
- Completed on 2026-05-08 with `src/components/agent-news.tsx` and `src/data/agent-news.ts`.
- Mobile default collapsed state is accepted as responsive behavior; the full 5 items render in expanded state.

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
- Completed on 2026-05-08 with `src/components/vitaclaw-assistant.tsx`.
- Assistant copy is accepted as product-safe placeholder language; final sales wording may still receive product-owner polish.

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
- Completed on 2026-05-08 without deployment or production write commands.
- Aliyun access should use SSH key configuration outside the repo; do not write passwords, private keys, or server secrets into planning docs.

### Phase 5: OmniGraph news contract

**Goal:** Define the exact static data contract that OmniGraph exports and the website consumes.
**Mode:** mvp

**Requirements:** CONTRACT-01, CONTRACT-02, CONTRACT-03, CONTRACT-04, CONTRACT-05

**Success Criteria**:
1. A contract document exists in the website repo and names the canonical export file path.
2. The schema covers exactly 5 items and required fields for title, URL, summary, tags, source/domain, layer, status, and timestamps when available.
3. Validation rules explicitly reject missing, malformed, non-5-item, invalid-URL, non-passed, or non-Layer-1/2 data.
4. Fallback behavior is defined so bad data never white-screens the homepage.
5. Boundaries are explicit: OmniGraph produces data, website consumes data, no direct code import.

**Notes**:
- Keep this docs-first and implementation-light.
- Prefer JSON as the integration boundary.
- Completed on 2026-05-09 with `docs/orchestrator/omnigraph-agent-news-contract.md`.
- Canonical export path is `public/data/agent-news.json`, served as `/data/agent-news.json`.
- Validation is all-or-nothing; invalid exports fall back to the existing local typed data.

### Phase 6: Website news adapter

**Goal:** Update the website to consume the static OmniGraph export while keeping the existing local typed data as fallback.
**Mode:** mvp

**Requirements:** ADAPTER-01, ADAPTER-02, ADAPTER-03, ADAPTER-04, ADAPTER-05

**Success Criteria**:
1. `Agent 技术动态` can render from the export JSON path.
2. If export data is absent or invalid, the section falls back to the existing 5 local placeholder items.
3. Desktop still shows exactly 5 items; mobile expanded state still shows exactly 5 items.
4. Source-authority caveat remains visible.
5. No backend, database, auth, scheduler, admin UI, or OmniGraph code import is introduced.

**Notes**:
- Keep adapter code small and easy to delete.
- Do not redesign the already deployed section unless required for data fields.
- Completed on 2026-05-09 with `src/data/agent-news-export.ts`, `public/data/agent-news.json`, and adapter integration in `src/components/agent-news.tsx`.
- The website now keeps the local typed 5-item fallback and only swaps to export-backed data when `/data/agent-news.json` validates.
- Static export data is still representative fixture data until the OmniGraph producer writes the real daily export.

### Phase 7: OmniGraph export producer handoff

**Goal:** Prepare the OmniGraph-side handoff for producing website-ready Agent news export data.
**Mode:** mvp

**Requirements:** EXPORT-01, EXPORT-02, EXPORT-03, EXPORT-04

**Success Criteria**:
1. A child prompt gives an OmniGraph session enough context to generate the website contract export.
2. The handoff states that only Layer 1/2 passed articles are eligible.
3. The handoff defines where the generated JSON should be copied in the website repo or deploy artifact.
4. The handoff avoids writing website planning artifacts into `OmniGraph-Vault`.

**Notes**:
- The child session may need to work in `/home/sztimhdd/OmniGraph-Vault` if available.
- Keep cross-repo coupling at the data-file boundary.
- Completed on 2026-05-09 with `docs/orchestrator/omnigraph-export-producer-handoff.md` in the website repo and `scripts/export_vitaclaw_agent_news.py` in the OmniGraph repo.
- The exporter maps OmniGraph `layer2_verdict='ok'` to website `curationStatus='passed'`, emits exactly 5 items, and writes to `public/data/agent-news.json` when run with the documented command.
- Current exporter intentionally excludes Layer 1-only candidates until a product decision weakens that gate.

### Phase 8: Integration verification/deploy

**Goal:** Verify export-backed Agent news locally and prepare or perform deployment only if explicitly approved.
**Mode:** mvp

**Requirements:** INTVERIFY-01, INTVERIFY-02, INTVERIFY-03, INTVERIFY-04, INTVERIFY-05

**Success Criteria**:
1. `npm run lint` passes.
2. `npm run build` passes.
3. Playwright verifies desktop/mobile news rendering from export-backed data.
4. Secret/scope scan confirms no credentials or OmniGraph internals entered the website repo.
5. If deployment is explicitly approved, Aliyun production shows the export-backed news and health endpoints pass.

**Notes**:
- Do not deploy without explicit approval in the active session.
- Use SSH key access configured outside the repo.
- Local verification completed on 2026-05-09 with real local OmniGraph data exported from `/home/sztimhdd/OmniGraph-Vault/data/kol_scan.db`.
- `npm run lint`, `npm run build`, desktop/mobile Playwright, fallback behavior, external link attributes, and secret/scope scans passed.
- Production `/health` and `/healthz` passed as read-only checks.
- Production deployment completed after approval with backup `dist.backup.20260510-074957`.
- Production `/health`, `/healthz`, `/data/agent-news.json`, desktop navbar, and `Agent 技术动态` checks passed.

## Planned Future Milestones

These milestones are intentionally not part of the active v1.1 execution plan. They record the intended product direction so future child sessions do not collapse the assistant MVP, OmniGraph media, and knowledge-base scope into one oversized implementation.

### v1.1.2: Agent News Image Enrichment

**Goal:** Extend the static OmniGraph Agent news contract and website rendering
to support optional article images while preserving static-site boundaries and
fallback safety.

**User Story:**
1. A visitor scrolls to `Agent 技术动态`.
2. The `今日重点` card shows a relevant article image when OmniGraph provides a
   valid static image asset.
3. If the image is missing, invalid, or fails to load, the card remains usable as
   the current text-only presentation.

**Expected Phases:**
1. Contract and producer handoff update: add optional image fields and static
   asset path rules.
2. OmniGraph producer image output: copy or publish suitable images into
   `public/data/agent-news-images/` and write safe references into
   `public/data/agent-news.json`.
3. Website adapter and UI: validate optional image metadata and render the main
   `今日重点` image with safe fallback.
4. Verification: lint, build, Playwright desktop/mobile image/missing/broken
   states, source links, caveat, and no horizontal overflow.

**Non-Goals:**
- No backend service, database, auth, scheduler, admin UI, or article detail
  page.
- No website-side crawling, screenshotting, image downloading, transcoding, or
  compression.
- No direct website reads from OmniGraph repo paths or internal storage.
- No `VitaClaw 助手` changes.
- No deployment unless explicitly approved in the active session.

**Design Notes:**
- Use `frontend-design` and `ui-ux-pro-max`.
- First stage prioritizes the `今日重点` main card only; the four compact cards
  may remain text-only.
- Use fixed `aspect-ratio`, width/height metadata, and `loading="lazy"` to avoid
  layout shift and unnecessary mobile work.

### v1.2: VitaClaw 助手产品文档问答 MVP

**Goal:** Upgrade the homepage `VitaClaw 助手` from static FAQ buttons to a lightweight chat assistant that answers visitor questions from official VitaClaw product documentation.

**User Story:**
1. A visitor opens the VitaClaw homepage.
2. They open `VitaClaw 助手`.
3. They ask a natural-language question about VitaClaw scenarios, product capabilities, deployment, integration, security posture, or demo/trial next steps.
4. The assistant answers using only official product documentation and clearly says when the answer is not covered.
5. The assistant keeps soft CTA paths such as `预约演示`, `获取方案`, or `留下企业邮箱`.

**Expected Phases:**
1. Product documentation ingestion contract: convert user-provided PDF or Markdown to reviewed Markdown/chunks and define answer boundaries.
2. Lightweight chat API: add a small server-side endpoint that keeps the DeepSeek API key off the frontend and calls an OpenAI-compatible DeepSeek endpoint.
3. Assistant chat UI: replace the static FAQ-only body with a mobile-safe message list and input using `frontend-design` and `ui-ux-pro-max`.
4. Verification/security/deploy: run lint, build, Playwright desktop/mobile chat checks, secret scan, and approved deployment only.

**Phase 1 Contract:**
- Completed in `docs/orchestrator/vitaclaw-product-doc-ingestion-contract.md`.
- Default source rule: keep raw PDFs outside the repo unless explicitly approved as public-safe.
- Reviewed Markdown path: `docs/product-docs/reviewed/vitaclaw-kb.md`.
- Retrieval chunk path: `docs/product-docs/chunks/vitaclaw-doc-chunks.json`.
- Retrieval chunks stay outside `public/`; the later chat API should read them server-side.

**Local Verification Status:**
- Completed on 2026-05-10 through `npm run build` plus `npm start`.
- `VitaClaw 助手` calls `/api/vitaclaw-assistant/chat`, renders answer/CTA/refusal/fallback states, and preserves soft CTA paths.
- Playwright verified desktop answer, CTA, refusal, and mobile answer/close/no-overflow behavior.
- v1.2.1 production runtime preparation is documented at `docs/orchestrator/v1.2.1-production-api-runtime.md`; deployment is still blocked on explicit approval and one-time Aliyun setup.

**Non-Goals:**
- No LightRAG, Cognee, or KG memory.
- No customer-system access.
- No persistent user profiling.
- No arbitrary file upload from public visitors.
- No OmniGraph image rendering yet.

### v1.3: OmniGraph Media Citation Extension

**Goal:** Let assistant answers include approved images already stored or exported by OmniGraph when those images materially improve the answer.

**User Story:**
1. A visitor asks about an Agent trend, workflow pattern, architecture topic, or product scenario where an image is relevant.
2. The assistant answers in text and, when available, shows one or more approved images with alt text and source attribution.
3. The visitor can open the original source where appropriate.

**Expected Phases:**
1. OmniGraph media export contract: define image URL, alt text, source URL, title, attribution, and safety fields.
2. Website media adapter: validate media records all-or-nothing or per-answer with strict URL allowlisting.
3. Chat message renderer: add custom image/citation parts to the assistant UI.
4. Verification/security: check image rendering, mobile layout, allowlist enforcement, and no arbitrary external image injection.

**Non-Goals:**
- No AI image generation.
- No user-uploaded image analysis.
- No browser rendering of untrusted arbitrary URLs.

### Knowledge Base v2.0: 企小勤知识库 (SEO文集 + RAG问答)

**Goal:** Build an SEO-optimized knowledge base website with curated articles (SSG) + RAG Q&A engine, consuming OmniGraph's LightRAG + entity pipeline.

**Architecture:**
- Python Jinja2 static HTML (not Astro/Next.js)
- `kg_synthesize.synthesize_response()` as Express API for Q&A
- Caddy proxy for images
- Shared server with vitaclaw-site

**Phases:**

| # | Phase | Goal | Duration |
|---|-------|------|----------|
| KB-1 | Export脚本 | export_knowledge_base.py: SQLite→Jinja2→HTML | 2 days |
| KB-2 | 实体索引+SEO | 实体→文章关联, JSON-LD, sitemap | 2 days |
| KB-3 | RAG问答API | kg_synthesize HTTP包装 + React岛屿 UI | 2 days |
| KB-4 | 部署+上线 | Caddy配置, cron重建, 上线验证 | 1 day |

**Total MVP timeline:** ~5 working days

## Coverage

- v1 requirements: 22 total, complete
- v1.1 requirements: 19 total, complete
- v1.2 requirements: 11 total, 10 complete, 1 pending API runtime deployment plan
- KB v2.0 requirements: 4 phases planned
- Requirements mapped: 52
- Unmapped: 0

---
*Roadmap created: 2026-05-08*
*Last updated: 2026-05-11 after v2.0 Knowledge Base planning*
