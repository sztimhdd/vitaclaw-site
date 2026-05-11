# Child Session Prompt: Integration verification/deploy readiness

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `docs/orchestrator/omnigraph-agent-news-contract.md`
8. `docs/orchestrator/omnigraph-export-producer-handoff.md`
9. `docs/orchestrator/omnigraph-integration-handoff.md`
10. `src/components/agent-news.tsx`

## Goal

Verify the v1.1 OmniGraph Agent news integration locally and prepare deployment handoff. Deploy only if the user explicitly authorizes deployment in this session.

## Scope

- Run lint and build.
- Verify the website uses representative or real OmniGraph export data.
- If using real local OmniGraph data, run the documented producer command before website build:

```bash
cd /home/sztimhdd/OmniGraph-Vault
venv/bin/python scripts/export_vitaclaw_agent_news.py \
  --db data/kol_scan.db \
  --output /home/sztimhdd/vitaclaw-site/public/data/agent-news.json
```

- Use Playwright to check desktop/mobile `Agent 技术动态`, links, caveat, no horizontal overflow, and fallback behavior where practical.
- Check that no secrets, server credentials, private keys, or OmniGraph internals were added to the website repo.
- If deployment is explicitly approved, deploy the static build and export data to Aliyun using SSH key access configured outside the repo.
- Verify production health endpoints and public page behavior after approved deployment.

## Do Not Do

- Do not deploy without explicit approval in this active session.
- Do not run production write commands before approval.
- Do not store credentials.
- Do not implement missing features unless the orchestrator assigns a targeted fix.
- Do not build `VitaClaw 知识库` or free-form assistant chat.

## Success Criteria

1. INTVERIFY-01 through INTVERIFY-05 are satisfied.
2. `npm run lint` passes.
3. `npm run build` passes.
4. Playwright covers desktop/mobile export-backed news display.
5. Secret/scope scan is clean.
6. If approved and deployed, Aliyun production shows export-backed news and `/health` plus `/healthz` pass.

## Verification

Run:

```bash
npm run lint
npm run build
git status --short
```

Use Playwright for browser checks. Use read-only server checks unless deployment is explicitly approved.

## Report Back

Return:

- Verification commands and results
- Playwright coverage summary
- Export data source used
- Any files changed
- Deployment readiness or deployment results if explicitly approved
- Blockers or approvals needed
- Residual risks
