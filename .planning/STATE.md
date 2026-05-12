# State: VitaClaw Website OmniGraph Integration

**Initialized:** 2026-05-08
**Runtime:** Codex
**Working Directory:** `/home/sztimhdd/vitaclaw-site`

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-05-11)

**Core value:** Help visitors quickly understand VitaClaw's enterprise workflow automation value through lightweight public homepage intelligence surfaces.
**Current focus:** Hero conversion enhancement — add social proof badges and dual-CTA to capture small-business visitors immediately. KB v2.0 has been transferred to OmniGraph-Vault repo for implementation.

## Current Status

| Phase | Status | Progress |
|-------|--------|----------|
| 1. Foundation/docs | Complete | FOUND-01 through FOUND-04 satisfied |
| 2. Agent 技术动态 | Complete | NEWS-01 through NEWS-07 satisfied |
| 3. VitaClaw 助手 | Complete | ASSIST-01 through ASSIST-06 satisfied |
| 4. Verification/deploy | Complete | VERIFY-01 through VERIFY-05 satisfied; no deployment performed |
| 5. OmniGraph news contract | Complete | CONTRACT-01 through CONTRACT-05 satisfied |
| 6. Website news adapter | Complete | ADAPTER-01 through ADAPTER-05 satisfied |
| 7. OmniGraph export producer handoff | Complete | EXPORT-01 through EXPORT-04 satisfied |
| 8. Integration verification/deploy | Complete | INTVERIFY-01 through INTVERIFY-05 satisfied |
| v1.2. Product-document Q&A MVP | Locally verified | Docs/chunks, server API, chat UI, tests, build, Playwright, and security/scope scans passed |
| v1.2.1. Production API runtime | ✅ Deployed 2026-05-12 | systemd + Caddy proxy configured, Node API online, all verification passed |
| v2.0 Knowledge Base (SEO文集+RAG) | Planning complete, transferred to OmniGraph-Vault | PRD + 20 architecture decisions recorded; implementation docs pushed to OmniGraph-Vault/kb/docs/ |

## Operating Assumptions

- The user wants this Codex session to act as the main GSD orchestrator.
- Child sessions are opened manually by the user and should receive decision-complete prompts.
- Future milestones should normally use one manually opened child agent as the
  milestone executor with checkpoint gates, while this session remains the
  orchestrator and reviewer.
- Milestone child agents must stop after each checkpoint and report changed
  files, verification, blockers, residual risks, and whether proceeding is safe.
- The main orchestrator reviews each checkpoint, updates `.planning`, then gives
  the next instruction.
- Planning docs are committed/tracked in git unless the user says otherwise.
- Future implementation should be sequential by default to avoid conflicting homepage composition edits.
- Product Phase 1 has no backend, database, login, billing, tenancy, or internal article pages.
- UI design decisions are handled by applying `frontend-design` and `ui-ux-pro-max`; do not ask the user to choose routine layout details.
- Phase 2 `Agent 技术动态` uses a local typed TS placeholder data file first, not JSON fetch or an HTTP endpoint.
- Phase 2 `Agent 技术动态` should be inserted after `TrustCases` and before `PainPoints`.
- Phase 2 mobile default collapsed state is accepted; expanded mobile and desktop states render exactly 5 news items.
- Phase 3 `VitaClaw 助手` uses static deterministic local responses and soft `#cta` lead paths only.
- Phase 3 assistant copy is acceptable placeholder sales language; product-owner wording polish is non-blocking.
- Phase 4 verification passed lint, build, Playwright desktop/mobile coverage, secret/scope checks, and deployment-readiness review.
- Aliyun SSH access may be configured outside the repo via `~/.ssh`; do not record passwords, private keys, or server secrets in project files.
- Product Phase 1 was deployed successfully to Aliyun per user report on 2026-05-09.
- v1.1 prioritizes OmniGraph Agent news data integration over free-form assistant chat.
- `VitaClaw 助手` remains a bounded static FAQ/presales widget for this milestone.
- Website integration boundary for v1.1 is a static JSON export plus typed validation/fallback, not a backend service.
- Phase 5 contract path is `docs/orchestrator/omnigraph-agent-news-contract.md`.
- Canonical static export path is `public/data/agent-news.json`, served by Vite as `/data/agent-news.json`.
- Agent news export validation is all-or-nothing; any invalid export falls back to the existing 5 local typed items.
- Phase 6 website adapter path is `src/data/agent-news-export.ts`.
- `Agent 技术动态` renders local typed fallback data immediately, then swaps to `/data/agent-news.json` only when the export validates.
- `public/data/agent-news.json` is representative fixture data until the OmniGraph producer writes the real daily export.
- Phase 7 producer path is `/home/sztimhdd/OmniGraph-Vault/scripts/export_vitaclaw_agent_news.py`.
- The exporter maps OmniGraph `layer2_verdict='ok'` to website `curationStatus='passed'` and writes exactly 5 Layer 2-passed items.
- The documented copy target is `/home/sztimhdd/vitaclaw-site/public/data/agent-news.json`.
- Planned v1.2 assistant work should use the user-provided product PDF as the only knowledge source for the first chat MVP.
- v1.2 Phase 1 product-document ingestion contract is documented at `docs/orchestrator/vitaclaw-product-doc-ingestion-contract.md`.
- First observed product knowledge input is Markdown at `/mnt/d/Downloads/VitaClaw-KB.md`; treat it as source material that still needs product-owner/public-safety review before committing as answerable knowledge.
- Raw product PDFs should stay outside the repo by default unless explicitly approved as public-safe.
- Reviewed product Markdown should live at `docs/product-docs/reviewed/vitaclaw-kb.md`.
- Retrieval chunks should live at `docs/product-docs/chunks/vitaclaw-doc-chunks.json` and should not be placed under `public/` for v1.2.
- v1.2 Checkpoint 1 created reviewed product Markdown at `docs/product-docs/reviewed/vitaclaw-kb.md`.
- v1.2 Checkpoint 1 created 37 retrieval chunks at `docs/product-docs/chunks/vitaclaw-doc-chunks.json`: 23 `allowed`, 13 `cta_only`, and 1 `internal_only`.
- v1.2 API/retrieval must exclude `internal_only` chunks from model context and treat `cta_only` chunks as redirect signals rather than factual answer context.
- v1.2 Checkpoint 2 implemented `POST /api/vitaclaw-assistant/chat` in `server.js` and `server/vitaclaw-assistant.js`.
- v1.2 API response types are `answer`, `cta`, `refusal`, and `fallback`.
- v1.2 API reads `docs/product-docs/chunks/vitaclaw-doc-chunks.json` server-side and returns extractive fallback answers when DeepSeek is unavailable.
- Production deployment for v1.2 will need a Node server or Caddy reverse proxy for `/api/vitaclaw-assistant/chat`; the existing static-only Caddy deployment is not enough for the chat API.
- v1.2 Checkpoint 3 updated `src/components/vitaclaw-assistant.tsx` into a chat UI that calls `POST /api/vitaclaw-assistant/chat`.
- v1.2 assistant UI handles `answer`, `cta`, `refusal`, and `fallback` response types.
- v1.2 assistant UI preserves public name `VitaClaw 助手` and soft CTA paths.
- v1.2 local verification passed on 2026-05-10 using `npm run build` plus `npm start`.
- v1.2 Playwright coverage passed for desktop answer/CTA/refusal and mobile answer/close/no-overflow behavior through the Node API runtime.
- Production deployment for v1.2 is not ready under static-only Caddy `dist/` hosting; it requires a Node process plus Caddy reverse proxy or an equivalent API-capable runtime.
- Planned v1.2 assistant work should keep DeepSeek API keys server-side and out of Vite frontend bundles.
- Planned v1.3 may add OmniGraph image citations through validated/allowlisted media references.
- Planned v2 may add LightRAG/Cognee/KG knowledge-base capabilities as a separate surface, not as part of the first homepage chat MVP.
- Phase 8 used real local OmniGraph data from `/home/sztimhdd/OmniGraph-Vault/data/kol_scan.db` to generate `public/data/agent-news.json`.
- Phase 8 local verification passed lint, build, desktop/mobile Playwright, fallback behavior, link target/rel behavior, and secret/scope scans.
- v1.1 production deployment completed after explicit approval.
- Deployment backup created: `dist.backup.20260510-074957`.
- Production `/health` and `/healthz` passed after deployment.
- Production `/data/agent-news.json` contains 5 real export items.
- Production Playwright verification confirmed the navbar includes `Agent 技术动态` linking to `#agent-news`, desktop layout has no horizontal overflow, and export-backed data remains available.
- v1.1.1 lightweight GitHub Actions CI/CD is implemented with CI on push/PR and manual-only production deploy.
- GitHub deploy workflow uses committed `public/data/agent-news.json`; it does not regenerate OmniGraph export data.
- GitHub Secret `ALIYUN_SSH_PRIVATE_KEY` and variables `ALIYUN_SSH_HOST`, `ALIYUN_SSH_USER`, `ALIYUN_SSH_PORT`, `ALIYUN_DEPLOY_PATH`, and `VITACLAW_PUBLIC_URL` must be configured before the first GitHub-hosted deployment.
- GitHub Environment `production` has `DEEPSEEK_API_KEY` configured as an environment secret per user screenshot on 2026-05-10.
- Child agents must not ask for or print `DEEPSEEK_API_KEY`; GitHub Actions may access it only in jobs with `environment: production` via `${{ secrets.DEEPSEEK_API_KEY }}`.
- The GitHub Environment named `production` should require reviewers before manual deployment.
- v1.2.1 production runtime plan is documented at `docs/orchestrator/v1.2.1-production-api-runtime.md`.
- v1.2.1 chooses Caddy static `dist/` hosting plus Caddy reverse proxy for `/api/*` to a local Node process on port `3001`.
- v1.2.1 deploy workflow syncs `dist/`, `server.js`, `server/`, `docs/product-docs/`, and package files, writes `/etc/vitaclaw/vitaclaw-site.env`, runs `npm ci --omit=dev`, restarts the configured systemd service, and smoke-tests the API without model use.
- Required one-time Aliyun setup before deployment: `vitaclaw` runtime user/group, `/etc/vitaclaw/vitaclaw-site.env` permissions, `/etc/systemd/system/vitaclaw-site.service`, and Caddy `/api/*` reverse proxy.
- First real GitHub Actions run is still needed to validate workflow semantics in GitHub's runner environment.
- v1.1.2 Agent News Image Enrichment is planned as a future Agent news follow-up, separate from the v1.2 assistant milestone.
- v1.1.2 should treat optional image fields as enhancement-only: invalid image metadata or load failure must not invalidate otherwise valid article data.
- v1.1.2 first UI scope should prioritize the `今日重点` main card; compact cards can remain text-only.
- v1.1.2 static image paths should prefer `/data/agent-news-images/*.webp` or `.avif`; no website-side image processing or direct OmniGraph storage reads.

## Hard Guardrails

- Do not write planning artifacts into `OmniGraph-Vault`.
- Do not put secrets in this repo.
- Do not implement Phase 2 without explicit assignment.
- Do not make the Phase 1 homepage assistant call LightRAG, Cognee, or KG Synthesize.
- Do not deploy unless the user explicitly approves deployment.
- Do not modify `src` during project initialization.
- Do not let a milestone child skip checkpoint gates or silently continue from
  docs work into API/UI/deployment without a checkpoint report.

## Next Step

Review and approve the v1.2.1 production runtime setup before any production writes. The prepared plan is:

```text
docs/orchestrator/v1.2.1-production-api-runtime.md
```

---
*Last updated: 2026-05-11 after v2.0 Knowledge Base planning*
