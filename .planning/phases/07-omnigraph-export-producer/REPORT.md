# Phase 7 Report: OmniGraph Export Producer Handoff

Date: 2026-05-09

## Repos Touched

- `/home/sztimhdd/vitaclaw-site`
- `/home/sztimhdd/OmniGraph-Vault`

## Changed Files

Website repo:

- `docs/orchestrator/omnigraph-export-producer-handoff.md`
- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `.planning/MILESTONES.md`

OmniGraph repo:

- `scripts/export_vitaclaw_agent_news.py`
- `tests/unit/test_export_vitaclaw_agent_news.py`

## Export Command

From `/home/sztimhdd/OmniGraph-Vault`:

```bash
venv/bin/python scripts/export_vitaclaw_agent_news.py \
  --db data/kol_scan.db \
  --output /home/sztimhdd/vitaclaw-site/public/data/agent-news.json
```

The output file is the website contract file served by Vite as
`/data/agent-news.json`.

## Filtering Enforcement

- Requires `layer1_verdict = 'candidate'`.
- Requires `layer2_verdict = 'ok'`.
- Emits `layer: "layer2"` and `curationStatus: "passed"`.
- Rejects missing title, invalid URL, missing Chinese summary, or missing tags.
- Fails if fewer than exactly 5 eligible items can be emitted.

## Verification

Run from `/home/sztimhdd/OmniGraph-Vault`:

```bash
venv/bin/python -m pytest -q -s tests/unit/test_export_vitaclaw_agent_news.py
venv/bin/python scripts/export_vitaclaw_agent_news.py --db data/kol_scan.db --output /tmp/vitaclaw-agent-news.json
python3 -m json.tool /tmp/vitaclaw-agent-news.json >/tmp/vitaclaw-agent-news.pretty.json
```

Run from `/home/sztimhdd/vitaclaw-site`:

```bash
git diff -- docs .planning
git status --short
```

## Residual Risks

- The exporter uses existing OmniGraph digest/summary text and does not rewrite
  summaries with an LLM.
- Current local export data is KOL-only because local RSS rows have no Layer 2
  `ok` rows.
- Daily automation still needs to call the exporter before website build or
  copy the JSON into the deployed static artifact.
