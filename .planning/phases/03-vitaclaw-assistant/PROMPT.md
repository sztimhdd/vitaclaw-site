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

## UI Design Requirements

Before making layout, visual hierarchy, responsive behavior, interaction, accessibility, or visual QA decisions, use both project-required UI skills:

- `frontend-design`
- `ui-ux-pro-max`

Use them to keep the assistant polished, accessible, mobile-safe, and consistent with the existing dark SaaS design system. After implementation, verify desktop and mobile open/close and FAQ flows with Playwright when the app is runnable.

For browser verification, use the installed Codex skills:

- `playwright` for desktop/mobile page checks, snapshots, screenshots, and assistant flow checks.
- `playwright-interactive` if iterative visual or interaction debugging is needed.
- `screenshot` only as a fallback when Playwright capture is not enough.

## Orchestrator Design Decision

Implement the assistant as a bounded, static presales widget that stays out of the homepage narrative:

- Add a focused component, such as `src/components/vitaclaw-assistant.tsx`, and mount it near `<StickyCTABar />` in `src/App.tsx`.
- Use a right-bottom floating entry button on desktop.
- On mobile, avoid overlapping the existing `StickyCTABar`; use safe spacing such as `bottom-24` when needed and verify at 390px width.
- Use `VitaClaw 助手` as the visible name everywhere. Do not expose Hermes.
- The opened panel should be compact: roughly chat-widget sized on desktop, full-width inset sheet style on small mobile screens.
- Keep the visual style consistent with the existing dark SaaS UI: translucent dark surface, subtle border, blue/green accents, lucide icons, and clear focus states.
- Provide static FAQ buttons for approval, data entry, checking/reconciliation, backfill, audit, and cross-system automation.
- Use deterministic local responses only. No network calls, no AI SDK calls, no timers pretending to stream from a model.
- Include light expectation-setting copy: it can help梳理场景和预约方案沟通, but it is not a live knowledge-base/RAG assistant in Phase 1.
- Include soft lead-capture actions as visible buttons/links: `预约演示`, `获取方案`, `留下企业邮箱`. These actions may link to `#cta` or present static guidance; they must not gate the conversation.
- Ensure keyboard operation: open button has `aria-label`, panel has a close button, FAQ buttons are real buttons, and Escape closes the panel if straightforward to add without overengineering.
- Keep state local to the component. Do not add global stores, routing, persistence, backend endpoints, or analytics.

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

Prefer `playwright` skill workflows for browser evidence. If using `playwright-interactive`, confirm the session has `js_repl` enabled; otherwise fall back to `playwright` CLI workflows.

## Report Back

Return:

- Changed files
- Verification commands and results
- Assistant behavior summary
- Any blockers or product decisions needed
- Residual risks
