# AGENTS.md

This is a standard guidance file for AI coding agents working in this repository.

See CLAUDE.md for project-specific instructions, tech stack, and conventions.

## OmniGraph Integration Operating Principles

For the OmniGraph + VitaClaw website integration, agents must optimize for a
single-maintainer MVP:

- Keep code small, explicit, and easy to delete.
- Prefer common libraries and existing project patterns over custom frameworks.
- Avoid enterprise platform architecture unless the current milestone requires it.
- Phase 1 scope is the homepage `VitaClaw 助手` and `Agent 技术动态`; do not build
  the Phase 2 `VitaClaw 知识库` deep-research app unless explicitly assigned.
- The homepage assistant must not call LightRAG, Cognee, or KG Synthesize in
  Phase 1.
- Treat OmniGraph as the producer of curated Agent intelligence data and this
  website as the consumer/presentation layer.
- Keep public AI features lightly bounded with clear user-facing caveats rather
  than hard enterprise gates.

## Milestone Execution Protocol

Future milestones should default to one manually opened child Codex session
acting as the milestone executor, while this main session remains the GSD
orchestrator.

Use checkpoint gates instead of free-running implementation:

1. The main orchestrator prepares a milestone prompt with required reading,
   scope, non-goals, checkpoints, verification, and reporting format.
2. The child agent executes one checkpoint at a time.
3. After each checkpoint, the child agent must stop and report changed files,
   verification results, blockers, residual risks, and whether it is safe to
   proceed.
4. The main orchestrator reviews the report, updates `.planning` as needed, and
   gives the next instruction.
5. Deployment remains a separate explicit approval gate even when the milestone
   child reaches deployment readiness.

This protocol applies to v1.2 and later milestones unless the user explicitly
chooses a different workflow. Keep checkpoint scopes small enough that a failed
checkpoint can be fixed or rolled back without redoing the whole milestone.

## Frontend Design Operating Rule

For any frontend UI planning, design, implementation, review, or verification
work in this project, agents must use both skills before making design
judgments or UI changes:

- `frontend-design`
- `ui-ux-pro-max`

Apply these skills to layout, visual hierarchy, responsive behavior,
interaction states, accessibility, animation, and visual QA. After UI
implementation, verify the result with Playwright when the app is runnable.

For browser-based UI verification, agents should use the installed Codex skills:

- `playwright` for scripted browser navigation, snapshots, screenshots, and flow checks.
- `playwright-interactive` for persistent browser debugging when iterative visual or interaction QA is needed.
- `screenshot` only when an OS-level capture is needed or Playwright capture is unavailable.

Prefer Playwright-driven browser evidence over subjective inspection. Capture
desktop and mobile viewport evidence for UI phases when the app is runnable.

## Production Server Access

**Server:** Aliyun ECS at `101.133.154.49` (Ubuntu 22.04)
**Deploy path:** `/opt/vitaclaw/control-plane/vitaclaw-site`
**Public URL:** `http://101.133.154.49/`
**Health endpoints:** `/health`, `/healthz`

### Architecture

```
:80 (Caddy)
  ├── /health, /healthz       → Caddy respond (static text)
  ├── /api/*                   → reverse_proxy → 127.0.0.1:3001 (Node)
  └── /*                       → file_server from dist/ (Vite SPA)
```

- **Caddy** (`/etc/caddy/Caddyfile`): serves static `dist/`, proxies `/api/*` to Node
- **Node** (`systemctl: vitaclaw-site.service`): Express server on port 3001
  - Reads env from `/etc/vitaclaw/vitaclaw-site.env` (DEEPSEEK_API_KEY)
  - Loads doc chunks from `docs/product-docs/chunks/vitaclaw-doc-chunks.json`
  - Runs as user `vitaclaw`, group `vitaclaw`
- **GitHub Actions** (`deploy.yml`): builds, rsyncs, restarts, verifies

### SSH Access

```sshconfig
Host vitaclaw-aliyun
  HostName 101.133.154.49
  User root
  IdentityFile ~/.ssh/vitaclaw_aliyun_ed25519
  IdentitiesOnly yes
```

The private key is local machine configuration, not project configuration. Do
not commit it.

### Manual Deployment (emergency / first-time)

```bash
# 1. Build locally
cd /home/sztimhdd/vitaclaw-site
npm run lint
npm run build

# 2. Back up server dist/
ssh vitaclaw-aliyun \
  "cd /opt/vitaclaw/control-plane/vitaclaw-site && ts=\$(date +%Y%m%d-%H%M%S) && cp -a dist \"dist.backup.\$ts\""

# 3. Sync static build
rsync -az --delete dist/ vitaclaw-aliyun:/opt/vitaclaw/control-plane/vitaclaw-site/dist/

# 4. Sync Node runtime files
rsync -az server.js package.json package-lock.json \
  vitaclaw-aliyun:/opt/vitaclaw/control-plane/vitaclaw-site/
rsync -az --delete server/ vitaclaw-aliyun:/opt/vitaclaw/control-plane/vitaclaw-site/server/
rsync -az --delete docs/product-docs/ \
  vitaclaw-aliyun:/opt/vitaclaw/control-plane/vitaclaw-site/docs/product-docs/

# 5. Install dependencies and restart
ssh vitaclaw-aliyun \
  "cd /opt/vitaclaw/control-plane/vitaclaw-site && npm ci --omit=dev && systemctl restart vitaclaw-site"

# 6. Wait for API readiness (Node needs ~3s to bind port 3001)
sleep 3
ssh vitaclaw-aliyun "systemctl is-active vitaclaw-site"

# 7. Verify
curl -fsS http://101.133.154.49/health
curl -fsS http://101.133.154.49/healthz
curl -fsS -H 'content-type: application/json' \
  -d '{"message":"VitaClaw是什么"}' \
  http://101.133.154.49/api/vitaclaw-assistant/chat
curl -fsS http://101.133.154.49/data/agent-news.json
```

### Automated Deployment (recommended)

Trigger via GitHub Actions: `gh workflow run deploy.yml -R sztimhdd/vitaclaw-site --ref master`

The workflow handles: lint → build → backup → rsync dist + runtime + docs → 
write env → npm ci → restart → wait for API → verify health/API/agent-news.

### Security Rules

Agents must not store server passwords, private keys, API keys, or other
secrets in this repository, `.planning`, commit messages, PR descriptions, or
logs intended for sharing.

`DEEPSEEK_API_KEY` is a GitHub Repository secret. GitHub Actions may reference
it only from jobs that declare `environment: production`. It is a server-side
secret only and must never be exposed through Vite frontend env vars or static
assets under `public/`.

Before starting OmniGraph integration work, read:

- `docs/orchestrator/omnigraph-integration-handoff.md`
- `docs/orchestrator/new-codex-session-kickstarter.md`
