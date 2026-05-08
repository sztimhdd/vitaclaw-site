# Architecture Research: VitaClaw Website OmniGraph Integration

**Source basis:** Local repo instructions and orchestrator handoff documents, not external research.
**Date:** 2026-05-08

## Existing Architecture

The site is a single-page Vite/React marketing homepage. `src/App.tsx` composes a fixed navigation bar, a linear stack of section components, a footer, and a sticky CTA bar.

## Recommended Phase 1 Architecture

### Agent News

Use a small website-owned data contract:

- `title`: original article title
- `url`: original source URL
- `summaryZh`: 1-2 sentence Chinese SEO-friendly summary
- `tags`: short tag list
- Optional source metadata only if required by the fixture

The contract should be replaceable by daily OmniGraph output later. Do not import OmniGraph code into the website.

### Assistant

Use a self-contained homepage UI component with local state and static responses. The assistant should not call server APIs, LightRAG, Cognee, or KG Synthesize in Phase 1.

### Verification

Use existing commands:

- `npm run lint`
- `npm run build`
- Playwright checks after UI exists

## Suggested Build Order

1. Foundation/docs.
2. Agent news data contract and UI section.
3. Floating assistant UI and static scenario behavior.
4. Verification and deployment handoff.

## Confidence

High. The architecture follows existing repo shape and locked handoff decisions.
