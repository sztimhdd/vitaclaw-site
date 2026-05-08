# Child Session Prompt: VitaClaw 助手 UI placeholder behavior

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/research/SUMMARY.md`
7. `src/App.tsx`
8. Existing interactive components such as `src/components/navbar.tsx` and `src/components/sticky-cta-bar.tsx`

## Goal

Implement the Product Phase 1 right-bottom floating `VitaClaw 助手` with static, bounded presales scenario behavior.

## Scope

- Add a right-bottom floating assistant entry point.
- Public-facing name must be `VitaClaw 助手`.
- Role is presales scenario consultant for general enterprise office cross-system workflows.
- FAQ buttons should cover approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
- Responses should be static or locally bounded.
- Offer soft lead capture such as `预约演示`, `获取方案`, or `留下企业邮箱` without gating conversation.
- Include light expectation-setting copy.
- Match existing design system and mobile behavior.

## Do Not Do

- Do not expose Hermes as the primary public assistant name.
- Do not call LightRAG, Cognee, KG Synthesize, Gemini, DeepSeek, or any external AI API.
- Do not implement product-doc RAG.
- Do not add login, database, backend persistence, billing, or enterprise gates.
- Do not implement `Agent 技术动态` in this session unless the orchestrator explicitly combines phases.
- Do not deploy.

## Suggested Files

Inspect first, then choose the smallest change set. Likely candidates:

- `src/App.tsx`
- `src/components/`

## Success Criteria

1. ASSIST-01 through ASSIST-06 are satisfied.
2. Assistant can be opened, used, and closed on desktop and mobile.
3. Responses remain clearly bounded and do not imply full RAG capability.
4. No external AI or knowledge-graph calls are introduced.

## Verification

Run:

```bash
npm run lint
npm run build
```

Use Playwright to verify desktop and mobile assistant open/close and FAQ flows. Do not deploy.

## Report Back

Return:

- Changed files
- Verification commands and results
- Assistant behavior summary
- Any blockers or product decisions needed
- Residual risks
