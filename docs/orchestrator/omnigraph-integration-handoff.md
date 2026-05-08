# OmniGraph Integration Handoff

Date: 2026-05-08

This document captures the planning state from the prior Codex conversation so a
new VitaClaw website orchestrator session can continue without relying on chat
history.

## Current Repo And Deployment Facts

- Website repo: `sztimhdd/vitaclaw-site`
- Local development should happen from a local checkout of this repo, not inside
  `OmniGraph-Vault`.
- Current production host: Aliyun server at `101.133.154.49`
- Production path: `/opt/vitaclaw/control-plane/vitaclaw-site`
- Production branch/commit observed earlier: `master` at `33e50d0`
- Production serving model: Caddy static hosting of Vite `dist`
- Current public URL: `http://101.133.154.49/`
- Health endpoints: `/health` and `/healthz` return `vitaclaw demo host ok`
- Current website shape: Vite + React single-page marketing site, no router, no
  backend runtime in production.

Do not store server passwords, API keys, or other secrets in this repository.

## Related OmniGraph State

The OmniGraph repo remains separate:

- Repo: `sztimhdd/OmniGraph-Vault`
- Local working directory used by the prior session:
  `/home/sztimhdd/OmniGraph-Vault`
- OmniGraph is responsible for ingesting, filtering, storing, and exporting
  Agent intelligence.
- The VitaClaw website should consume curated output from OmniGraph through a
  small data/API contract, not import OmniGraph code directly.

Recent cloud work on the Aliyun server:

- Hermes Agent v0.13.0 was installed.
- `/root/OmniGraph-Vault` and persisted LightRAG storage were deployed.
- Hermes was configured to load OmniGraph skills.
- A no-Gemini fallback skill named `omnigraph_cloud_synthesize` was added to
  OmniGraph and pushed there.
- The fallback reads persisted LightRAG full documents, does local lexical
  retrieval, and calls DeepSeek for synthesis.

That cloud work is useful for future Phase 2, but Phase 1 website work must not
depend on LightRAG, Cognee, or KG Synthesize.

## Product Decisions Already Locked

The integration is split into two phases.

Phase 1:

- Add a right-bottom floating `VitaClaw 助手`.
- Add an above-the-fold or early-homepage `Agent 技术动态` section.
- Do not build the `VitaClaw 知识库` deep-research app yet.

Homepage assistant decisions:

- User-facing name: `VitaClaw 助手`
- Hidden implementation brand: Hermes can power it later, but do not expose
  `Hermes` as the primary public name.
- Role: presales scenario consultant.
- Primary scenario focus: general enterprise office cross-system workflows.
- FAQ buttons should emphasize approval, data entry, checking/reconciliation,
  backfill, audit, and cross-system automation.
- Do not call LightRAG, Cognee, or KG Synthesize in Phase 1.
- Wait for product documentation/function specs before implementing real
  document RAG.
- Until docs exist, keep behavior simple and clearly bounded.
- Use soft lead capture: offer `预约演示`, `获取方案`, or `留下企业邮箱`, but do
  not block conversation behind a form.
- Use light caveats, not hard gates.

Agent news decisions:

- Homepage section name: `Agent 技术动态` or equivalent.
- It should appear early on the homepage.
- Display exactly 5 curated items.
- Source scope: only OmniGraph Layer 1 and Layer 2 passed articles.
- Publishing mode: fully automatic, daily.
- Each item must include:
  - original title
  - URL to original source
  - 1-2 sentence Chinese SEO-friendly summary
  - tags
- Clicking the title opens the original article URL.
- Do not build station-side detail pages in Phase 1.
- Use a light caveat: automatic tracking and summaries; source articles remain
  authoritative.

Language decisions:

- Chinese first.
- Preserve English technical terms and original-language titles when useful.

Public access decisions:

- All Phase 1 features are public.
- Public AI surfaces should show light expectation-setting copy, not heavy
  enterprise access controls.

## Phase 2 Deferred Scope

Name: `VitaClaw 知识库`

Deferred behavior:

- Opens as a new-tab single-page web app.
- Default mode: LightRAG/Cognee knowledge-graph chat.
- Optional toggle: `深度研究报告`, similar to ChatGPT Deep Research.
- Deep research answers and reports must include citations/sources.
- Generated reports are not automatically published; users can download
  Markdown or PDF.
- Technical research is primary; VitaClaw product questions are supported only
  as auxiliary behavior.
- UI should still follow the single-maintainer MVP rule.

Do not implement Phase 2 until the user explicitly assigns it.

## GSD Operating Model Chosen By The User

The user wants a new Codex session to become the main GSD orchestrator for this
website project.

Main orchestrator responsibilities:

- Maintain macro context, milestone state, and decisions.
- Generate GSD-style prompts for child Codex sessions.
- Create/maintain `.planning` artifacts in this repo.
- Decide phase boundaries and answer blockers escalated from child sessions.
- Avoid doing all implementation work directly unless a task is explicitly small
  and assigned as a quick task.

Child session responsibilities:

- One child session should work on one bounded plan.
- Child sessions should receive precise prompts from the orchestrator.
- Child sessions should avoid making product/architecture decisions silently.
- If blocked, they should return a concise question to the orchestrator.
- On completion, they should report changed files, verification commands, risks,
  and next steps.

Recommended first GSD structure for this repo:

```text
.planning/
  PROJECT.md
  REQUIREMENTS.md
  ROADMAP.md
  STATE.md
  phases/
    01-integration-foundation/
    02-agent-news-feed/
    03-homepage-assistant/
    04-deploy-and-verify/
```

Recommended Phase 1 work split:

1. Foundation/docs:
   - Establish GSD planning artifacts.
   - Keep MVP principles in `AGENTS.md`.
   - Record Phase 1/Phase 2 boundaries.
2. Agent news feed:
   - Add homepage UI for 5 curated items.
   - Start from a minimal static data contract or local JSON fixture.
   - Later wire to OmniGraph daily output.
3. Homepage assistant:
   - Add floating UI and scenario FAQ buttons.
   - Use minimal static responses until product docs are provided.
   - Do not implement real RAG yet.
4. Deploy and verify:
   - Run lint/build.
   - Verify desktop/mobile behavior.
   - Deploy static dist to the Aliyun Caddy host when instructed.

## Important Constraints For Next Agents

- This repo is the website repo. Do not write website GSD artifacts into
  `OmniGraph-Vault`.
- Do not put secrets into Git.
- Do not use the production server path as the primary development checkout.
- Do not implement Phase 2 in Phase 1.
- Do not add login, tenancy, billing, database, admin review, or station-side
  article pages in Phase 1.
- Do not make the assistant a LightRAG/KG product in Phase 1.
- Do not over-engineer data pipelines before the UI and contract are validated.

## Open Inputs Still Needed

- VitaClaw product documentation and feature specification for the real homepage
  assistant RAG.
- Exact OmniGraph Layer 1/2 daily export shape for the production news feed.
- Whether Phase 1 should use a static JSON file first or a minimal HTTP endpoint.
  Default recommendation: static JSON fixture first, then replace with generated
  daily JSON.

