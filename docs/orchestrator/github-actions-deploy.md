# GitHub Actions CI/CD

Date: 2026-05-09

This repo has two GitHub Actions workflows for the Vite site plus the v1.2
assistant API runtime:

- `.github/workflows/ci.yml` runs on pushes to `main`/`master` and pull requests.
- `.github/workflows/deploy.yml` is manual-only through `workflow_dispatch`.

Deployment intentionally does not generate OmniGraph export data. GitHub-hosted
runners cannot access the local OmniGraph SQLite DB, so the workflow deploys the
`public/data/agent-news.json` that is already present in the repository build
artifact.

For v1.2.1 production runtime details, see
`docs/orchestrator/v1.2.1-production-api-runtime.md`.

## CI Workflow

The CI job runs:

```bash
npm ci
npm run lint
npm run build
```

## Manual Deployment Workflow

Run `Deploy Site` from the GitHub Actions tab when deployment is approved. Run it
from `main` or `master` only; the workflow has a branch guard that fails for any
other `github.ref`.

The deployment job:

1. Validates that the manual run is on `main` or `master`.
2. Checks out the repository.
3. Installs dependencies with `npm ci`.
4. Runs `npm run lint`.
5. Runs `npm run build`.
6. Configures SSH from GitHub Secrets.
7. Creates timestamped backups of production `dist` and runtime files.
8. Syncs local `dist/` to the Aliyun static host with `rsync --delete`.
9. Syncs `server.js`, `server/`, `docs/product-docs/`, and package files.
10. Writes the server-side environment file without printing secrets.
11. Runs `npm ci --omit=dev` on Aliyun and restarts the Node service.
12. Verifies `/health` and `/healthz`.
13. Verifies `/api/vitaclaw-assistant/chat` with a blank-message smoke POST that
    must return `usedModel: false`.
14. Verifies `/data/agent-news.json` parses as JSON, uses `contractVersion: 1`,
    contains exactly 5 items, and marks every item `curationStatus: "passed"`.

## Required GitHub Secrets

| Name | Purpose |
|------|---------|
| `ALIYUN_SSH_PRIVATE_KEY` | Private SSH key with access to the Aliyun deployment user. Store the private key only in GitHub Secrets. |
| `DEEPSEEK_API_KEY` | DeepSeek API key for the v1.2 `VitaClaw 助手` chat API. Store it as an environment secret on the GitHub Environment named `production`. |

`DEEPSEEK_API_KEY` has been configured by the user as a GitHub Environment
secret under `production`. Child agents must not ask for the key value, print it,
copy it into docs, commit it, or expose it in frontend bundles. GitHub Actions
can access it only in jobs that declare:

```yaml
environment: production
```

Use it in workflow YAML only through the secret context:

```yaml
${{ secrets.DEEPSEEK_API_KEY }}
```

If a future deployment job writes this value to an Aliyun server-side env file,
that step must avoid echoing the value to logs and must write it with restrictive
file permissions such as `600`.

## Required GitHub Variables

| Name | Example | Purpose |
|------|---------|---------|
| `ALIYUN_SSH_HOST` | `101.133.154.49` | Aliyun host for SSH and rsync. |
| `ALIYUN_SSH_USER` | `root` | SSH user configured for deployment. |
| `ALIYUN_SSH_PORT` | `22` | SSH port. Optional in practice because the workflow defaults to `22`, but set it explicitly for clarity. |
| `ALIYUN_DEPLOY_PATH` | `/opt/vitaclaw/control-plane/vitaclaw-site` | Directory containing the production `dist` folder. |
| `VITACLAW_PUBLIC_URL` | `http://101.133.154.49` | Public site base URL used for health checks. |
| `VITACLAW_NODE_PORT` | `3001` | Local Node server port behind Caddy. Optional; workflow defaults to `3001`. |
| `VITACLAW_NODE_SERVICE_NAME` | `vitaclaw-site` | systemd service name. Optional; workflow defaults to `vitaclaw-site`. |

## Required Aliyun Runtime Setup

Before the v1.2.1 deploy workflow can succeed, production needs one-time runtime
setup:

- `node` available on the server.
- `/etc/systemd/system/vitaclaw-site.service` installed and enabled.
- Caddy routes `/api/*` to `127.0.0.1:3001`.
- `/etc/vitaclaw/` exists and can hold `vitaclaw-site.env`.
- The runtime group `vitaclaw` exists so the workflow can set
  `/etc/vitaclaw/vitaclaw-site.env` to `root:vitaclaw` with mode `640`.

The exact proposed systemd file, Caddy snippet, environment file, and rollback
procedure are documented in
`docs/orchestrator/v1.2.1-production-api-runtime.md`.

## Before Running Deploy

If the Agent news export should be refreshed, run the OmniGraph producer locally
before committing the deployment candidate:

```bash
cd /home/sztimhdd/OmniGraph-Vault
venv/bin/python scripts/export_vitaclaw_agent_news.py \
  --db data/kol_scan.db \
  --output /home/sztimhdd/vitaclaw-site/public/data/agent-news.json
```

Then verify and commit the website repo changes before using the manual
deployment workflow. The deployment workflow uses the committed
`public/data/agent-news.json`; it does not regenerate OmniGraph data.

## Security Notes

- Do not hardcode SSH keys, passwords, server secrets, or API keys in workflow
  files.
- Use GitHub repository or environment secrets for private material.
- Configure the GitHub Environment named `production` to require reviewers before
  the manual deployment job can run.
- `DEEPSEEK_API_KEY` is for the server-side assistant API only. It must never be
  injected into Vite frontend environment variables or any `public/` asset.
- The workflow restarts only the Node API service. It does not edit or reload
  Caddy; Caddy proxy setup remains a separate explicitly approved production
  step.
