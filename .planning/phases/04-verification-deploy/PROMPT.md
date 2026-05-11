# Child Session Prompt: Verification/deploy readiness

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `docs/orchestrator/omnigraph-integration-handoff.md`

## Goal

Verify the completed Product Phase 1 implementation and prepare a deployment handoff. Do not deploy unless the user explicitly authorizes deployment in this session.

## Scope

- Run lint and build.
- Use Playwright to verify key homepage desktop/mobile behavior after UI work exists.
- Use both project-required UI skills, `frontend-design` and `ui-ux-pro-max`, when reviewing visual quality, responsive behavior, interaction states, accessibility, or UI consistency.
- Use installed browser QA skills: `playwright` for scripted verification, `playwright-interactive` for iterative browser debugging when available, and `screenshot` only as an OS-level fallback.
- Check that Phase 1 did not introduce secrets, server credentials, Phase 2 scope, or external AI/KG calls from the assistant.
- Document deployment readiness and any risks.

## Deployment Context

Known production facts from prior handoff:

- Host: Aliyun server at `101.133.154.49`
- Production path observed earlier: `/opt/vitaclaw/control-plane/vitaclaw-site`
- Serving model: Caddy static hosting of Vite `dist`
- Public URL observed earlier: `http://101.133.154.49/`
- Health endpoints: `/health` and `/healthz`

These facts are context only. Do not request or expose secrets.

## Do Not Do

- Do not deploy without explicit user approval.
- Do not run production write commands without explicit user approval.
- Do not store credentials.
- Do not implement missing UI features unless the orchestrator assigns a targeted fix.

## Success Criteria

1. VERIFY-01 through VERIFY-05 are satisfied.
2. `npm run lint` passes.
3. `npm run build` passes.
4. Playwright covers desktop/mobile homepage, `Agent 技术动态`, and `VitaClaw 助手` flows.
5. Deployment readiness is reported with risks and required approval.

## Verification

Run:

```bash
npm run lint
npm run build
git status --short
```

Use Playwright for visual and interaction checks if a runnable UI exists.

Prefer `playwright` skill workflows for browser evidence. If using `playwright-interactive`, confirm the session has `js_repl` enabled; otherwise fall back to `playwright` CLI workflows.

## Report Back

Return:

- Verification commands and results
- Playwright coverage summary
- Any files changed
- Deployment readiness
- Blockers or explicit approvals needed
- Residual risks
