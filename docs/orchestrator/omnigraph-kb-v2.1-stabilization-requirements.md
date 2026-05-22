# OmniGraph KB v2.1 Stabilization Requirements

Date: 2026-05-15

This document turns the Aliyun KB go-live follow-up findings into formal
requirements for an OmniGraph-side KB v2.1 stabilization and hardening phase.
The goal is not to extend the emergency go-live work. The goal is to remove
production-only drift and make the KB deployment reproducible across git pull,
fresh clone, re-export, redeploy, and host replacement.

## Current Production Baseline

Aliyun HTTP production is accepted as usable after the surgical go-live.

Observed production facts:

- Public KB base path: `http://101.133.154.49/kb/`
- KB backend: `kb-api.service` on `127.0.0.1:8766`
- Public API route: `/kb/api/*`
- Public downloaded image route: `/kb/static/img/*`
- Images directory: `/root/.hermes/omonigraph-vault/images/`
- OmniGraph repo on Aliyun: `/root/OmniGraph-Vault`
- Static KB deploy directory: `/var/www/kb`
- Go-live smoke result: 5/5 PASS after runtime hotfixes.

Production now depends on uncommitted hotfixes in:

- `kb/static/search.js`
- `kb/static/qa.js`
- `kb/services/synthesize.py`
- `kb/static/VitaClaw-Logo-v0.png`
- `/var/www/kb/index.html`

These hotfixes must be converted into source-of-truth code, templates, assets,
or replaced by cleaner v2.1 implementations. They should not remain as manual
server state.

## Problem Statement

The go-live made the five critical user scenarios work, but several designed KB
capabilities are not fully productized:

1. Downloaded images can be served, but article body integration is incomplete.
2. Q&A synthesis works, but structured KG source/entity output is not stable.
3. Long-form illustrated synthesis exists as a concept/script surface, not as a
   clear product/API entry.
4. Production hotfixes are not fully represented in source/template/export
   logic.
5. KG mode has credential and memory risks in production.

These gaps affect long-term operations more than immediate availability. A
future git pull, SSG re-export, redeploy, or new host can lose the working
production behavior.

## Non-Goals

This stabilization phase should not:

- Re-run ingest cron.
- Change TLS/HTTPS posture.
- Rewrite the whole KB architecture.
- Build unrelated OmniGraph milestones.
- Add login, tenancy, billing, admin review, or enterprise access control.
- Depend on manual edits in `/var/www/kb`.
- Depend on production-only files that cannot be reproduced from source and
  documented runtime data.

## Requirement 1: KB Downloaded Images Full Integration

### Goal

Static article pages and API article detail responses must correctly reference
downloaded images through the mounted production-safe path:

```text
/kb/static/img/{hash}/{file}
```

Downloaded images must render in the browser as real image responses, not HTML
fallback pages, not broken `/static/img/...` references, and not only embedded
`data:` placeholders.

### Background

During go-live, the image files were copied successfully to:

```text
/root/.hermes/omonigraph-vault/images/
```

Caddy routes `/kb/static/img/*` to the KB FastAPI backend, and direct image URLs
return `image/jpeg` or another image content type.

However, some article body markdown still contains `/static/img/...` references.
Those paths do not hit the KB image reverse proxy under `/kb`; they can fall
through to the main site static fallback and return HTML. Static article pages
also do not consistently include downloaded-image references.

### Functional Requirements

- The export pipeline must rewrite local downloaded image references to
  `/kb/static/img/{hash}/{file}` when `KB_BASE_PATH=/kb`.
- The API article detail endpoint must return `body_md`, `body_html`, and
  `images` consistently using the same mounted prefix.
- The `images` field must include local downloaded images when article bodies
  contain them.
- Static article pages and API-rendered article bodies must use the same path
  policy.
- The implementation must not hard-code Aliyun IP addresses.
- The implementation must preserve root-deploy compatibility when
  `KB_BASE_PATH` is empty.

### Acceptance Criteria

- Pick at least three articles known to have downloaded images, including one
  with many images such as `5a362bf61e`.
- On each static article page:
  - Body markdown is rendered.
  - At least one downloaded image URL uses `/kb/static/img/{hash}/{file}`.
  - Browser check: body image `naturalWidth > 0`.
  - Network check: image URL returns `200` and `Content-Type: image/*`.
- On `/kb/api/article/{hash}`:
  - `body_source` is `vision_enriched` when an enriched local markdown file is
    used.
  - `body_md` and `body_html` contain `/kb/static/img/...` paths in subdirectory
    deployment.
  - `images.length > 0` for articles with local downloaded images.
- No `/static/img/...` references remain in exported KB pages when deployed
  under `/kb`.

### Suggested Verification

```bash
curl -fsS http://101.133.154.49/kb/api/article/5a362bf61e \
  | python -m json.tool | grep -E '/kb/static/img|body_source|images'

curl -sI http://101.133.154.49/kb/static/img/5a362bf61e/0.jpg
```

Run Playwright against one image-rich article and assert:

```js
Array.from(document.querySelectorAll('.article-body img'))
  .filter((img) => img.src.includes('/kb/static/img/') && img.naturalWidth > 0)
  .length >= 1
```

## Requirement 2: Structured KG Synthesize Output

### Goal

`kg_synthesize` or its KB wrapper must reliably return structured Q&A output:

```text
markdown + sources + entities
```

The UI should not need heuristic source/entity supplementation to show chips.

### Background

The go-live hotfix added a best-effort fallback in `kb/services/synthesize.py`
that extracts sources from markdown if present, otherwise queries FTS and uses a
small hard-coded entity hint list. This made `/kb/ask/` usable, but it is not a
proper KG contract.

### Functional Requirements

- Define a formal synthesize result schema for KB Q&A.
- The schema must include:
  - `markdown`: rendered answer source text.
  - `sources`: stable source objects or article hashes.
  - `entities`: related entity objects or normalized names.
  - `confidence` or mode marker: `kg`, `fts5_fallback`, or `no_results`.
  - `fallback_used`: boolean.
  - `error`: optional diagnostic string safe for logs/UI.
- The wrapper must not depend on hard-coded entity hint strings for normal KG
  success.
- If KG synthesis succeeds but returns no sources, that must be treated as a
  contract gap and handled explicitly.
- FTS5 fallback may remain for degraded mode, but should be clearly separated
  from KG success output.

### Acceptance Criteria

- `/kb/ask/` answer for `AI Agent 框架对比` renders markdown and shows source chips
  and entity chips from structured result data.
- The same result does not require `_ENTITY_HINTS` or source inference from
  arbitrary FTS search terms in the happy path.
- FTS5 fallback still returns a graceful answer when KG fails or times out.
- Unit or integration tests cover:
  - KG success with structured sources/entities.
  - KG success with missing sources/entities.
  - KG exception path.
  - KG timeout path.
  - FTS5 no-results path.

### Suggested Verification

```bash
curl -fsS -H 'content-type: application/json' \
  -d '{"question":"AI Agent 框架对比","lang":"zh"}' \
  http://101.133.154.49/kb/api/synthesize
```

Poll the returned job and verify:

- `status == "done"`
- `result.markdown.length > 200`
- `result.sources.length > 0`
- `result.entities.length > 0`
- `confidence == "kg"` for KG success.

## Requirement 3: Long-Form Illustrated Synthesis

### Goal

Clarify and implement whether long-form illustrated synthesis is a KB page/API
feature. If accepted for v2.1, it must have a stable entry point, output schema,
and verification story.

### Background

The system has `kg_synthesize.py` and related cloud synthesize scripts, but
go-live only exposed short-form asynchronous Q&A through `/kb/ask/` and
`/kb/api/synthesize`. There is no confirmed production entry for generating a
long-form illustrated article or report.

### Product Requirements

The OmniGraph agent should decide and document one of two options:

1. Defer long-form illustrated synthesis beyond v2.1.
2. Implement it as a v2.1 feature with a clear page/API contract.

If implemented, the feature must:

- Accept a user topic or research question.
- Generate long-form markdown suitable for reading as an article/report.
- Include citations or source article references.
- Include selected downloaded images when relevant and available.
- Use `/kb/static/img/{hash}/{file}` for image paths in subdirectory deployment.
- Provide preview and save/export behavior if the product requires it.

### Acceptance Criteria If Implemented

- A documented endpoint or page exists for long-form synthesis.
- Input: topic or question.
- Output:
  - long-form markdown,
  - structured sources,
  - structured entities/topics,
  - optional images with safe KB image URLs.
- The output can be previewed without broken images.
- Failure modes are controlled:
  - timeout,
  - no sources,
  - no images,
  - KG unavailable.

### Non-Requirement If Deferred

If deferred, v2.1 must explicitly document that `/kb/ask/` is the only public
synthesis surface and long-form illustrated generation is not yet available.

## Requirement 4: Remove Production-Only Hotfix Drift

### Goal

All go-live hotfix behavior must be represented in source, templates, assets,
or documented deploy scripts. A fresh clone plus export plus deploy should
recreate production behavior without manual edits.

### Background

Production currently relies on changes that were made directly during go-live:

- Search cross-language retry in `kb/static/search.js`.
- Q&A source link and fallback state fixes in `kb/static/qa.js`.
- Source/entity heuristic fallback in `kb/services/synthesize.py`.
- `VitaClaw-Logo-v0.png` copied from the VitaClaw site deployment.
- Homepage `hero-image-strip` manually inserted into static HTML output.

### Functional Requirements

- Decide which hotfixes should be retained, replaced, or removed.
- Move retained behavior into source-of-truth files.
- Move homepage image strip into templates/export logic if it remains a product
  requirement.
- Add `VitaClaw-Logo-v0.png` or an equivalent asset to the KB static asset
  source path.
- Ensure `kb/output/` and `/var/www/kb/` are generated artifacts, not the only
  place a feature exists.
- Document any runtime-only server configuration separately from source code.

### Acceptance Criteria

- From a fresh checkout of OmniGraph-Vault:
  - install dependencies,
  - set `KB_BASE_PATH=/kb`,
  - run KB export,
  - deploy output to a temp static directory,
  - start KB API,
  - run browser smoke.
- The five go-live user scenarios still pass without manual patching:
  1. `/kb/` home page.
  2. Article detail page with images.
  3. Topic/entity indexes and detail pages.
  4. Search `langchain`.
  5. `/kb/ask/` Q&A.

### Required Preservation Inputs

The go-live patch artifact was created on Aliyun:

```text
/root/kb-go-live-hotfix-20260515.patch
```

It includes text diffs for:

- `kb/static/search.js`
- `kb/static/qa.js`
- `kb/services/synthesize.py`

The logo binary source was:

```text
/opt/vitaclaw/control-plane/vitaclaw-site/dist/VitaClaw-Logo-v0.png
```

The copied KB static logo hash was:

```text
3c827d3ee570afefecc559a8f03d4afcdc7c2dd612a4aaceee9290c25c4e1532
```

## Requirement 5: KG Mode Production Hardening

### Goal

`/kb/api/search?mode=kg` and any KG-backed synthesis mode must not crash,
502, OOM, or depend on invalid local credential paths.

### Background

During follow-up verification, KG mode triggered LightRAG/embedding work and
logged errors for a missing local credential path:

```text
/home/sztimhdd/.hermes/gcp-paid-sa.json was not found
```

One KG search attempt also caused `kb-api.service` to be killed by the OOM
killer before systemd restarted it. The service recovered, but this is not
production-safe.

### Functional Requirements

- Identify all KG mode credential dependencies.
- Replace local developer paths with deploy-safe environment/config values.
- Do not print secret values in logs.
- Bound memory usage for KG search/synthesis on the Aliyun host.
- If KG mode cannot be safely supported on the current host, disable it
  explicitly or return a controlled degraded response.
- Keep `/api/synthesize` never-500 behavior.
- Keep FTS5 search available regardless of KG mode state.

### Acceptance Criteria

- `/kb/api/search?q=AI%20Agent&mode=kg` does one of:
  - completes successfully with a valid job result, or
  - returns a controlled unsupported/degraded response.
- It must not:
  - return Caddy 502,
  - OOM kill `kb-api.service`,
  - hang indefinitely,
  - expose secret material.
- `kb-api.service` remains active after repeated KG-mode requests.
- Logs contain safe diagnostics only.

### Suggested Verification

```bash
systemctl is-active kb-api.service
curl -fsS "http://127.0.0.1:8766/api/search?q=AI%20Agent&mode=kg"
journalctl -u kb-api.service -n 120 --no-pager \
  | grep -iE "oom|killed|traceback|credential|error|embedding|lightrag"
systemctl is-active kb-api.service
```

## Cross-Cutting Requirements

### Reproducibility

Every production behavior must be reproducible from:

- Git-tracked source,
- documented static assets,
- documented runtime data paths,
- documented systemd/Caddy configuration.

No feature should exist only because a go-live operator manually patched
`/var/www/kb`.

### Testing

At minimum, v2.1 should include:

- API tests for article detail image paths.
- API tests for search fallback behavior.
- API tests for synthesize structured sources/entities.
- Export tests for `KB_BASE_PATH=/kb` image path rewriting.
- Playwright smoke for the five go-live scenarios.

### Deployment Safety

The implementation must preserve the go-live boundaries:

- Do not run ingest cron as part of deploy.
- Do not enable HTTPS/TLS as part of this phase.
- Do not alter VitaClaw main-site `dist` as a dependency of KB deploy.
- Do not delete `/opt/vitaclaw/control-plane/vitaclaw-site/dist/demo/hero.mp4`.
- Do not expose secrets or print secret values.

## Recommended Phase Shape

Recommended classification:

```text
KB v2.1 stabilization / hardening
```

Recommended task split:

1. Image path integration and export/API parity.
2. Structured synthesize result contract.
3. Production hotfix drift removal.
4. KG mode hardening or controlled disablement.
5. Long-form illustrated synthesis decision and implementation/defer note.

The long-form illustrated synthesis item may be deferred if it expands the
phase too much. If deferred, it must be explicitly documented so product and ops
do not mistake `/kb/ask/` for the long-form feature.

## Definition Of Done

This stabilization phase is complete when:

- A fresh deploy can reproduce the accepted Aliyun production behavior without
  manual patching.
- The five go-live user scenarios pass in Playwright.
- Article downloaded images work from static pages and API detail output.
- `/kb/ask/` uses structured sources/entities or a documented fallback contract.
- KG mode is safe: either functional under resource limits or explicitly
  degraded/disabled without 502/OOM.
- All retained go-live hotfix behavior is represented in source-of-truth files.
