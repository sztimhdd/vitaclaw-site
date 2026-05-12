# VitaClaw Website OmniGraph Integration

## What This Is

VitaClaw is a Chinese-first Vite + React single-page marketing website for presenting enterprise office automation scenarios. This project integrates OmniGraph-curated Agent intelligence into the website without turning the site into the OmniGraph application itself.

OmniGraph remains the producer of curated Agent intelligence data. The VitaClaw website is the consumer and presentation layer for homepage intelligence experiences.

As of 2026-05-11, a new parallel track was opened: **v2.0 Knowledge Base (SEO吸铁石 + RAG问答引擎)** — a separate knowledge base website that consumes OmniGraph's full article corpus, entity graph, and LightRAG synthesis to drive organic search traffic and attract technical users. **The KB module lives in the OmniGraph-Vault repo as `kb/`**, not in vitaclaw-site.

## Core Value

Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.

**v2 expanded core value:** Transform OmniGraph's curated knowledge pipeline into a public SEO magnet and RAG Q&A engine, driving organic traffic and product leads.

## Current Milestone: v2.0 知识库 MVP (SEO文集 + RAG问答)

**Goal:** Build an SEO-optimized knowledge base website (arXiv-style curated article collection) + RAG Q&A engine, consuming OmniGraph's full article corpus, entity graph, and LightRAG synthesis pipeline. The knowledge base is a separate Python project in OmniGraph-Vault's `kb/` directory, sharing the same server and design language as vitaclaw-site.

**Core design principle:** 极简极轻MVP，假设根本没人用。1周可验证。

**Target features:**
- Static article pages with AI summaries (SSG, Jinja2, zero JS)
- Entity pages linking articles by canonical entity name (from entity_buffer + canonical_map)
- Topic cluster pillar pages for SEO
- RAG Q&A engine wrapping `kg_synthesize.synthesize_response()` as FastAPI :8766
- Image serving via Caddy proxy to OmniGraph image server
- Schema.org structured data (Article, CollectionPage, BreadcrumbList, FAQPage)
- Sitemap + robots.txt for Baidu/Google
- Daily content rebuild via cron

**Architecture:** 
```
OmniGraph SQLite → export_knowledge_base.py → Jinja2 → static HTML (Caddy serve)
LightRAG + DeepSeek → kg_synthesize.synthesize_response() → FastAPI /synthesize (:8766) → React QA island
```

**Important:** The knowledge base is implemented in the OmniGraph-Vault repo (`kb/` directory), not in vitaclaw-site. vitaclaw-site is only responsible for its own SaaS features (v1.x milestones). The KB planning docs are archived in this repo for reference, but implementation lives in OmniGraph-Vault.

## Requirements

### Validated

- ✓ Existing Vite + React marketing site renders as a single-page linear homepage — existing repo state.
- ✓ Existing project instructions define MVP, single-maintainer, and OmniGraph boundary principles — `AGENTS.md` and `CLAUDE.md`.
- ✓ Foundation planning artifacts and child-session prompts exist for Product Phase 1 — Phase 1 Foundation/docs verification.
- ✓ `Agent 技术动态` renders after TrustCases with 5 placeholder curated items and original-source links — Phase 2 implementation verification.
- ✓ `VitaClaw 助手` provides bounded static presales scenario guidance with soft CTA paths — Phase 3 implementation verification.
- ✓ Product Phase 1 passed lint, build, Playwright, secret/scope, and deployment-readiness checks — Phase 4 verification.
- ✓ Product Phase 1 was deployed to the Aliyun/Caddy static host — user report with screenshots on 2026-05-09.
- ✓ Website-facing OmniGraph Agent news export contract is documented at `docs/orchestrator/omnigraph-agent-news-contract.md` — Phase 5 contract verification.
- ✓ Website `Agent 技术动态` consumes `/data/agent-news.json` with all-or-nothing fallback to the local typed 5-item data — Phase 6 adapter verification.
- ✓ OmniGraph producer handoff and exporter command are documented without importing OmniGraph code into the website — Phase 7 handoff verification.
- ✓ Local integration verification passed using real OmniGraph export data, including lint, build, Playwright, fallback, and secret/scope checks — Phase 8 local verification.
- ✓ v1.1 production deployment passed Aliyun static deploy, health checks, online `agent-news.json`, navbar, and `Agent 技术动态` verification — Phase 8 production verification.
- ✓ Lightweight GitHub Actions CI/CD exists for CI and manual static deployment with production branch guard and Agent news export health checks — v1.1.1 CI/CD verification.
- ✓ v1.2 product-document ingestion contract defines source storage, reviewed Markdown, chunk schema, answer boundaries, and extraction verification — v1.2 Phase 1 contract.
- ✓ v1.2 reviewed product Markdown and retrieval chunks exist with 23 allowed, 13 CTA-only, and 1 internal-only chunk — v1.2 Checkpoint 1 verification.
- ✓ v1.2 lightweight server-side retrieval/chat API exists at `POST /api/vitaclaw-assistant/chat`, reads chunks server-side, excludes `internal_only`, treats `cta_only` as redirect signal, and keeps DeepSeek keys server-side — v1.2 Checkpoint 2 verification.
- ✓ v1.2 assistant UI now supports chat messages, input, loading/error states, CTA/refusal/fallback rendering, and calls the server-side product-doc API — v1.2 Checkpoint 3 verification.
- ✓ v1.2 product-document Q&A MVP is locally verified with tests, lint, build, Node-runtime Playwright flows, and security/scope scans — v1.2 Checkpoint 4 verification.

### Active

- [x] Define the v1.2 production API runtime plan before deployment; static-only Caddy `dist/` hosting cannot serve `/api/vitaclaw-assistant/chat`.
- [ ] Complete the approved Aliyun one-time runtime setup and first v1.2.1 deployment run.

### Planned Next

- [ ] v1.1.2: Add optional article image support to `Agent 技术动态`, starting with the main `今日重点` card.
- [x] v1.2: Upgrade `VitaClaw 助手` from static FAQ to a lightweight product-document Q&A chatbot using user-provided PDF documentation.
- [x] v1.2 Phase 1: Define product-document ingestion contract before chat API/UI implementation.
- [ ] v1.3: Add OmniGraph media citation support so assistant answers can reference approved stored images when relevant.
- [ ] v2: Build `VitaClaw 知识库` as a separate knowledge/research surface backed by LightRAG/Cognee/KG capabilities.

### Out of Scope

- `VitaClaw 知识库` deep-research app — deferred to Phase 2 and requires explicit assignment.
- LightRAG, Cognee, or KG Synthesize calls from the homepage assistant — prohibited in Phase 1.
- Station-side article detail pages — Phase 1 news titles open original source URLs only.
- Login, tenancy, billing, database, admin review, or enterprise access gates — not needed for public Phase 1 MVP.
- Free-form `VitaClaw 助手` chat — not the current priority; the Phase 1 bounded FAQ widget is accepted for now.
- Importing OmniGraph code directly into this website repo — keep a file/data contract boundary.
- Running production deployment commands without explicit approval in the active session.
- Deploying v1.2 on static-only Caddy hosting without a Node API runtime or Caddy reverse proxy for `/api/vitaclaw-assistant/chat`.

## Context

The repository is `sztimhdd/vitaclaw-site`, locally checked out at `/home/sztimhdd/vitaclaw-site`. Production is served from an Aliyun host at `101.133.154.49` using Caddy static hosting of Vite `dist`, but local development should happen in this repo rather than the production path.

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

Milestone v1.1 narrows the next work to the `Agent 技术动态` data pipeline. The current `VitaClaw 助手` is intentionally not a free-form chat surface; it stays as a bounded presales FAQ widget until product docs or a knowledge-base milestone is explicitly assigned.

The planned assistant evolution is staged:

- v1.2 turns the homepage assistant into a narrow product-document Q&A surface based on official VitaClaw PDF documentation and a small server-side chat endpoint.
- v1.2 Phase 1 contract is documented at `docs/orchestrator/vitaclaw-product-doc-ingestion-contract.md`; first observed source input is `/mnt/d/Downloads/VitaClaw-KB.md`.
- v1.2 local verification passed on 2026-05-10 using `npm run build` plus `npm start`; production deployment is pending an API runtime/reverse proxy plan because static-only `dist/` hosting cannot serve the chat API.
- v1.1.2 is planned as a follow-up to the Agent news work: it adds optional
  static article images to the main `今日重点` card without changing the website
  into an image-processing or OmniGraph-runtime consumer.
- v1.3 may let answers show approved OmniGraph images as cited media, but not arbitrary user-provided image URLs.
- v2 introduces the separate `VitaClaw 知识库` surface with LightRAG/Cognee/KG query and memory capabilities.

The preferred technical direction for the chat UI is `assistant-ui` plus a lightweight AI SDK/server API layer using DeepSeek through an OpenAI-compatible endpoint. This is a direction for future planning, not an implementation commitment in v1.1.

## Constraints

- **Workspace**: All planning artifacts belong in `/home/sztimhdd/vitaclaw-site` — this is the website repo, not `OmniGraph-Vault`.
- **Scope**: Product Phase 1 only includes Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy readiness.
- **Scope**: Milestone v1.1 focuses on OmniGraph Agent news data integration, not assistant chat or the `VitaClaw 知识库`.
- **Scope**: v1.2 assistant chat should answer from official product documentation only; it should not introduce customer-system access, enterprise tenancy, or graph memory.
- **Scope**: OmniGraph image output and Cognee/LightRAG memory are future milestones, not part of the first product-document Q&A MVP.
- **Implementation**: Keep website changes small and reversible; prefer static JSON and typed adapters over backend services.
- **Architecture**: Keep code small, explicit, easy to delete, and aligned with existing Vite/React patterns.
- **Data Boundary**: OmniGraph produces curated data; the website consumes exported data through a minimal contract.
- **Security**: Do not store server passwords, API keys, or other secrets in the repo.
- **Public Access**: Phase 1 features are public and use light caveats rather than hard enterprise gates.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use `.planning` as the main orchestrator memory | User wants this Codex session to act as GSD orchestrator for the website repo | Established |
| Split Product Phase 1 into four GSD workstreams | Matches the handoff and keeps child sessions bounded | Established in roadmap |
| Start Agent news from a typed local contract | Minimizes pipeline complexity until OmniGraph export shape is final | Implemented in `src/data/agent-news.ts` |
| Keep `VitaClaw 助手` static and bounded in Phase 1 | Product docs/specs are not yet available for real RAG | Implemented in `src/components/vitaclaw-assistant.tsx` |
| Defer deployment to an explicit later task | User said not to deploy during initialization | Adopted for Phase 4 prompt |
| Use SSH key access for Aliyun deployment work | Avoid repeated password use and keep credentials out of the repo | Configure outside repo in `~/.ssh` |
| Prioritize OmniGraph data integration over assistant chat for v1.1 | Placeholder Agent news is the bigger product gap after deployment | Adopted for current milestone |
| Use static JSON as the website integration boundary | Keeps the website static and avoids coupling to OmniGraph internals | Contract and website adapter implemented for v1.1 |
| Map OmniGraph Layer 2 `ok` to website `passed` | OmniGraph filter code defines Layer 2 pass as `ok`; the website contract uses public-facing `passed` | Exporter emits `layer: "layer2"` and `curationStatus: "passed"` |
| Stage chatbot evolution before knowledge-base scope | Keeps the public homepage assistant useful without prematurely building an enterprise RAG/KG platform | v1.2 product-doc Q&A, v1.3 OmniGraph media citations, v2 LightRAG/Cognee knowledge base |
| Keep assistant UI decoupled from knowledge engines | `assistant-ui`/chat API can later call product-doc search, OmniGraph media, LightRAG, or Cognee behind the same frontend surface | Planned architecture direction |
| Use one checkpointed child agent per milestone by default | User prefers a single child session to carry a milestone while the main session stays as orchestrator/reviewer | Adopted for v1.2 and future milestones unless overridden |
| Treat Agent news images as optional enhancement | Image scraping quality and availability vary; article validity must not depend on image metadata or image loading | Planned for v1.1.2 |
| v1.2 requires a server runtime in production | The chat UI calls `/api/vitaclaw-assistant/chat`, which static-only Caddy `dist/` hosting cannot serve | Deployment pending Node process/Caddy reverse proxy or equivalent API runtime plan |
| Store DeepSeek credentials only as server-side secrets | User configured `DEEPSEEK_API_KEY` as a GitHub Environment `production` secret; it must never enter repo, logs, frontend bundles, or static assets | Future deployment jobs may reference `${{ secrets.DEEPSEEK_API_KEY }}` only with `environment: production` |
| Use Caddy static hosting plus Node for `/api/*` | This preserves the working static site path and adds the smallest API-capable runtime | v1.2.1 plan documented in `docs/orchestrator/v1.2.1-production-api-runtime.md` |

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
*Last updated: 2026-05-10 after v1.2 local verification*
