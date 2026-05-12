# Milestones: VitaClaw Website OmniGraph Integration

## v1.0 Product Phase 1

**Status:** Complete and deployed
**Completed:** 2026-05-09

**Delivered:**
- GSD foundation planning artifacts and child-session prompts.
- Homepage `Agent 技术动态` section with 5 placeholder Agent intelligence items.
- Static bounded `VitaClaw 助手` presales FAQ widget.
- Verification/deploy readiness checks.
- Aliyun deployment completed by child agent per user report.

**Residual risks carried forward:**
- `Agent 技术动态` still uses placeholder/local data rather than real OmniGraph daily export.
- `VitaClaw 助手` is intentionally not a free-form chat interface.
- Assistant sales copy may receive product-owner polish later.

## v1.1 OmniGraph Agent 情报数据整合

**Status:** Complete and deployed
**Started:** 2026-05-09

**Goal:** Replace placeholder Agent news data with a lightweight, validated OmniGraph export consumption path while keeping the website a static presentation layer.

**Completed so far:**
- Static export contract documented.
- Website adapter implemented with all-or-nothing fallback.
- OmniGraph producer handoff documented and exporter script added.
- Real local OmniGraph export generated into `public/data/agent-news.json`.
- Local lint, build, Playwright, fallback, link behavior, and secret/scope verification passed.
- Aliyun static deployment completed after approval with backup `dist.backup.20260510-074957`.
- Production health checks, online `agent-news.json`, navbar, and `Agent 技术动态` verification passed.

## v1.1.1 Lightweight GitHub Actions CI/CD

**Status:** Complete; first GitHub-hosted run pending
**Completed:** 2026-05-09

**Goal:** Add a lightweight CI/CD path so future static site deployments do not require manual local `rsync` work.

**Delivered:**
- `.github/workflows/ci.yml` runs `npm ci`, `npm run lint`, and `npm run build` on pushes to `main`/`master` and pull requests.
- `.github/workflows/deploy.yml` provides manual-only `workflow_dispatch` deployment.
- Manual deploy is guarded to run only from `main` or `master`.
- Deployment uses GitHub Secrets/Variables for SSH configuration and does not hardcode credentials.
- Deployment backs up production `dist`, syncs `dist/`, checks `/health` and `/healthz`, and verifies `/data/agent-news.json` has `contractVersion: 1`, exactly 5 items, and all `curationStatus: "passed"`.
- `docs/orchestrator/github-actions-deploy.md` documents required GitHub Secret/Variables, production environment reviewer recommendation, and the fact that OmniGraph export generation is not run in GitHub Actions.

**Residual risks carried forward:**
- Full workflow semantic validation requires the first real GitHub Actions run because local `actionlint` was unavailable.
- Manual deployment will fail until GitHub Secret `ALIYUN_SSH_PRIVATE_KEY` and required repository/environment variables are configured.
- GitHub-hosted runners deploy the committed `public/data/agent-news.json`; they do not regenerate OmniGraph data from the local SQLite DB.

## v1.1.2 Agent News Image Enrichment

**Status:** Planned

**Goal:** Add optional article images to `Agent 技术动态`, starting with the
main `今日重点` card, while preserving the existing text-only fallback and static
OmniGraph-to-website boundary.

**Primary inputs:**
- Existing `public/data/agent-news.json` export.
- Future optional static image assets under `public/data/agent-news-images/`.
- PRD: `docs/orchestrator/agent-news-image-enrichment-prd.md`.

**Expected scope:**
- Extend the Agent news contract with optional `imageUrl`, `imageAlt`,
  `imageWidth`, and `imageHeight`.
- Update OmniGraph producer handoff so producer copies/compresses images and
  writes only safe static paths.
- Update website adapter to ignore invalid image metadata without invalidating
  otherwise valid articles.
- Update the main news card UI to render a valid image and fall back cleanly on
  missing or failed images.
- Verify desktop/mobile, valid/missing/broken images, no horizontal overflow,
  caveat, and external links.

**Deferred from v1.1.2:**
- Images on the four compact cards.
- Website-side image processing.
- Article detail pages.
- Assistant image citations, which remain part of the separate v1.3 plan.

## v1.2 VitaClaw 助手产品文档问答 MVP

**Status:** Locally verified; deployment pending API runtime plan

**Goal:** Upgrade the homepage `VitaClaw 助手` from static FAQ behavior to a lightweight product-document Q&A chatbot.

**Primary inputs:**
- User-provided VitaClaw product PDF documentation.
- DeepSeek API key configured outside the repo and used only from a server-side endpoint.

**Expected scope:**
- PDF-to-Markdown/chunk ingestion contract.
- Server-side chat endpoint using a DeepSeek OpenAI-compatible API.
- Chat UI inside the existing assistant surface, using `frontend-design` and `ui-ux-pro-max`.
- Current-session context only; no persistent user memory.

**Completed so far:**
- Product-document ingestion contract documented at `docs/orchestrator/vitaclaw-product-doc-ingestion-contract.md`.
- Source, reviewed Markdown, and retrieval chunk paths defined.
- Answer policy, refusal boundaries, CTA redirects, and extraction-quality verification checklist defined.
- Phase 2 child-session prompt prepared in the contract.
- Reviewed product Markdown created at `docs/product-docs/reviewed/vitaclaw-kb.md`.
- Retrieval chunks created at `docs/product-docs/chunks/vitaclaw-doc-chunks.json`.
- Chunk review result: 23 `allowed`, 13 `cta_only`, 1 `internal_only`.
- Lightweight server-side chat/retrieval API implemented at `POST /api/vitaclaw-assistant/chat`.
- API excludes `internal_only` chunks, treats `cta_only` chunks as CTA redirects, and uses `allowed` chunks as the only factual answer context.
- API supports DeepSeek through server-side environment variables and falls back to extractive answers when no key or provider failure occurs.
- Assistant UI upgraded from static FAQ behavior to chat behavior with message list, input, loading state, response-type rendering, source chips, and CTA actions.
- Desktop/mobile local Playwright verification passed against the Node server runtime.
- Checkpoint 4 milestone verification passed on 2026-05-10: adapter test, API test, `npm run lint`, `npm run build`, Node-runtime Playwright flows, secret scan, scope scan, and chunk location check.

**Remaining before production deployment:**
- Define and verify an API-capable production runtime. Static-only Caddy `dist/` hosting cannot serve `/api/vitaclaw-assistant/chat`.
- Choose either a Node process behind Caddy reverse proxy or another approved runtime that keeps `DEEPSEEK_API_KEY` server-side.

**Deferred from v1.2:**
- LightRAG/Cognee/KG memory.
- OmniGraph image output.
- Customer-system data access.

## v1.2.1 Production API Runtime

**Status:** Prepared, not deployed
**Started:** 2026-05-10

**Goal:** Prepare the minimal Aliyun runtime needed to serve both existing Vite
static assets and `POST /api/vitaclaw-assistant/chat`.

**Prepared so far:**
- Runtime plan documented at `docs/orchestrator/v1.2.1-production-api-runtime.md`.
- Architecture decision: keep Caddy serving `dist/` directly and proxy only
  `/api/*` to `node server.js` on local port `3001`.
- Server-side chunk deployment path confirmed:
  `docs/product-docs/chunks/vitaclaw-doc-chunks.json` stays outside `public/`
  and is synced with the Node runtime files.
- Server-side secret plan confirmed:
  `/etc/vitaclaw/vitaclaw-site.env`, owned `root:vitaclaw`, mode `640`.
- systemd service proposal documented for `vitaclaw-site.service`.
- Caddy reverse proxy snippet documented.
- Manual GitHub deploy workflow updated to sync runtime files, write the
  server environment file without printing secrets, run `npm ci --omit=dev`,
  restart the Node service, and smoke-test the assistant API without model use.

**Remaining before production deployment:**
- User approval for production writes.
- One-time Aliyun setup for runtime user/group, env directory, systemd service,
  and Caddy proxy.
- First approved manual workflow run from `main` or `master`.

## v1.3 OmniGraph Media Citation Extension

**Status:** Planned

**Goal:** Allow assistant answers to display approved OmniGraph images with source attribution when images materially improve an answer.

**Expected scope:**
- OmniGraph image/media export contract.
- Validated website media adapter and URL allowlist.
- Assistant message rendering for image citations.
- Desktop/mobile visual verification and security checks.

## v2.0 知识库 MVP (SEO吸铁石 + RAG问答引擎)

**Status:** Planning (PRD drafted 2026-05-11)
**Started:** 2026-05-11

**Goal:** Build a knowledge base website with two products in one:
1. SEO吸铁石文集 — curated article collection from OmniGraph, SSG static pages (Python Jinja2)
2. RAG问答引擎 — Q&A powered by `kg_synthesize.synthesize_response()` wrapping LightRAG+DeepSeek

**Architecture decisions (see .sisyphus/notepads/knowledge-base-v2/decisions.md):**
- D-01: 极简MVP (assume zero traffic)
- D-02: Only Layer1/2 curationStatus:passed articles
- D-03: AI摘要+原文链接 (not full article)
- D-04: Q&A backend = kg_synthesize.synthesize_response() (existing, ~50 lines wrapper)
- D-05: Independent Python project, same repo
- D-06: Caddy proxy to local image server
- D-07: Public access, no login
- D-08: Domain TBD (kb.qixiaoqin.com or /knowledge/)
- D-09: Daily cron rebuild
- D-10: Keep dark theme #0f172a

**Requirements listed in:** .planning/MILESTONE-v2-KNOWLEDGEBASE-PRD.md

**Phases:**
- KB-1: Export脚本 (2 days)
- KB-2: 实体索引+SEO (2 days)
- KB-3: RAG问答API (2 days)
- KB-4: 部署+上线 (1 day)

**Total: ~5 working days MVP**
