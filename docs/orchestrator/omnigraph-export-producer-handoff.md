# OmniGraph Agent News Export Producer Handoff

Date: 2026-05-09

This document defines the OmniGraph-side producer path for the VitaClaw website
homepage `Agent 技术动态` export. The website remains a static consumer of
`public/data/agent-news.json`; it must not import OmniGraph code or read
OmniGraph storage directly.

## Producer Script

Implemented in the OmniGraph repo:

```text
/home/sztimhdd/OmniGraph-Vault/scripts/export_vitaclaw_agent_news.py
```

Default command from `/home/sztimhdd/OmniGraph-Vault`:

```bash
venv/bin/python scripts/export_vitaclaw_agent_news.py \
  --db data/kol_scan.db \
  --output /home/sztimhdd/vitaclaw-site/public/data/agent-news.json
```

For deployment packaging, run the same command before `npm run build` in the
website repo so Vite includes the generated static asset at:

```text
/data/agent-news.json
```

No production deployment is implied by this command. Deployment still requires
the separate approved static deploy procedure in `AGENTS.md`.

## Planned Image Output Extension

The planned v1.1.2 Agent News Image Enrichment milestone should extend the
producer so it can optionally select suitable downloaded article images, convert
or copy approved compressed assets, and write website-safe image metadata into
`public/data/agent-news.json`.

Target static asset directory:

```text
/home/sztimhdd/vitaclaw-site/public/data/agent-news-images/
```

Runtime URL prefix:

```text
/data/agent-news-images/
```

The producer must not write local absolute OmniGraph paths, crawler metadata,
private URLs, credentials, or internal storage paths into the website JSON.
Images are optional and must not reduce the exactly-5 article export rule.

## Eligibility Mapping

The exporter is intentionally stricter than the website contract:

| Website contract field | OmniGraph source |
|------------------------|------------------|
| `layer` | Always `layer2` for this exporter |
| `curationStatus` | `passed` when OmniGraph `layer2_verdict = 'ok'` |
| `summaryZh` | `articles.digest` or `rss_articles.summary`, only if non-empty and contains Chinese text |
| `tags` | Classification topics when available, plus small deterministic keyword/source tags |
| `sourceDomain` | Parsed from the original absolute `http`/`https` URL |
| `collectedAt` | `articles.scanned_at` or `rss_articles.fetched_at` |
| `curatedAt` | `layer2_at` |

Rows are eligible only when all of these hold:

1. `layer1_verdict = 'candidate'`.
2. `layer2_verdict = 'ok'`.
3. Original URL is absolute `http` or `https`.
4. Title is non-empty.
5. Chinese summary text is non-empty.
6. Tags can be derived.

Layer 1 candidates that have not passed Layer 2 are not exported by the current
script. If the product later wants Layer 1-only homepage items, that should be a
separate explicit decision because it weakens the public curation gate.

## Failure Behavior

The exporter fails fast and writes no website-ready file when fewer than exactly
5 eligible items can be built. Typical causes:

- Layer 2 has not run or produced fewer than 5 `ok` rows.
- Candidate rows are missing Chinese summaries.
- URLs are missing or not public `http`/`https` URLs.

This matches the website adapter behavior: the website uses the local typed
fallback data when `/data/agent-news.json` is missing or invalid.

## Local Observation

On 2026-05-09, the local OmniGraph DB at
`/home/sztimhdd/OmniGraph-Vault/data/kol_scan.db` contained:

- 81 KOL `layer1_verdict='candidate'` rows.
- 39 KOL `layer2_verdict='ok'` rows.
- 129 RSS `layer1_verdict='candidate'` rows.
- 0 RSS `layer2_verdict='ok'` rows.

A dry run to `/tmp/vitaclaw-agent-news.json` produced exactly 5 valid Layer
2-passed KOL items.

## Verification Commands

From `/home/sztimhdd/OmniGraph-Vault`:

```bash
venv/bin/python -m pytest -q -s tests/unit/test_export_vitaclaw_agent_news.py
venv/bin/python scripts/export_vitaclaw_agent_news.py --db data/kol_scan.db --output /tmp/vitaclaw-agent-news.json
python3 -m json.tool /tmp/vitaclaw-agent-news.json >/tmp/vitaclaw-agent-news.pretty.json
```

From `/home/sztimhdd/vitaclaw-site`:

```bash
git diff -- docs .planning
git status --short
```

## Residual Risks

- The exporter uses existing OmniGraph Chinese digest/summary text; it does not
  perform a new LLM rewrite into polished SEO copy.
- Current local RSS rows have no Layer 2 `ok` rows, so today the export is KOL
  only.
- The script is local-file based. A future daily automation still needs to call
  it before website build/deploy or copy the JSON into the deployment artifact.
