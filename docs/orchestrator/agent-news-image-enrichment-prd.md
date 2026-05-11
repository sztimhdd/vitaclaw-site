# PRD: Agent 技术动态文章题图增强

Date: 2026-05-10
Status: Planned
Target milestone: v1.1.2 Agent News Image Enrichment

## Background

The VitaClaw website already consumes `public/data/agent-news.json` as a static
OmniGraph export and falls back to local typed data when the export is missing
or invalid. OmniGraph already stores downloaded images for many ingested
articles, so the next news enhancement is to let the homepage `Agent 技术动态`
section display optional article images without changing the website's static
presentation-layer boundary.

OmniGraph remains responsible for selecting, processing, compressing, and
copying images plus JSON. The VitaClaw website only consumes static JSON and
static image assets. It must not read OmniGraph storage, import OmniGraph code,
or implement crawling, screenshotting, transcoding, or compression logic.

## Goal

Allow `Agent 技术动态` to read optional image metadata from
`public/data/agent-news.json` and show a main-card article image when the image
metadata is valid and the asset loads successfully.

Images are an enhancement, not a validity requirement. Missing, invalid, or
failed images must fall back to the current text-only card presentation without
white-screening or reducing the article count.

## Scope

In scope:

- Extend the OmniGraph Agent news export contract with optional image fields.
- Update the website adapter to accept and validate optional image metadata.
- Display a valid image on the main `今日重点` card.
- Preserve exactly 5 article items.
- Preserve the source-authority caveat and original external source links.
- Use static image paths such as `/data/agent-news-images/<file>.webp`.
- Verify desktop, mobile collapsed, mobile expanded, valid image, missing image,
  broken image, caveat, external links, and no horizontal overflow.

Out of scope:

- Backend services, database, auth, admin review UI, or scheduler.
- Website-side image crawling, downloading, screenshotting, compression, or
  transcoding.
- Website reads from OmniGraph repo paths or internal storage paths.
- Article detail pages.
- `VitaClaw 助手` changes.
- Deployment unless explicitly approved in the active session.

## Contract Extension

Each `items[]` entry may include optional image fields:

```json
{
  "imageUrl": "/data/agent-news-images/article-id.webp",
  "imageAlt": "文章题图：Attention Is All You Need 作者再出手",
  "imageWidth": 1200,
  "imageHeight": 630
}
```

Field rules:

| Field | Required | Rule |
|-------|----------|------|
| `imageUrl` | No | Recommended website static path `/data/agent-news-images/*.webp` or `/data/agent-news-images/*.avif`; same-origin absolute URLs may be allowed. |
| `imageAlt` | No | Recommended when an image is present; the website may derive fallback alt text from the article title. |
| `imageWidth` | No | Positive integer used to reserve layout ratio. |
| `imageHeight` | No | Positive integer used to reserve layout ratio. |

Validation rules:

- Image fields do not affect article validity.
- If article fields are valid and image fields are missing, render text-only.
- If `imageUrl` exists but is not safe to display, ignore the image and keep the
  article.
- If image loading fails, hide the image area or fall back to text-only.
- Invalid image metadata must not trigger full export fallback unless article
  body fields are also invalid.
- The export still must contain exactly 5 valid article items.
- Prefer only `/data/agent-news-images/...` or same-origin `/...` paths. Avoid
  third-party remote image URLs.

## UI Requirements

Use `frontend-design` and `ui-ux-pro-max` for UI planning, implementation, and
verification.

Desktop:

- The `今日重点` main card displays the image when valid.
- The image uses a fixed aspect ratio or dimensions to avoid layout shift.
- Title, summary, tags, source, and link affordance remain readable and clear.

Mobile:

- Collapsed state should not force-load all images.
- Expanded state must show the main-card image without horizontal overflow.

Accessibility and performance:

- Every rendered image must have `alt`.
- Link focus states remain visible.
- Text contrast must not depend on image backgrounds.
- Use `loading="lazy"` unless the image is demonstrably in the first viewport.
- Use fixed dimensions or `aspect-ratio` to reserve space.
- OmniGraph should prefer WebP/AVIF compressed output.

## Producer Responsibilities

OmniGraph should:

1. Select exactly 5 eligible Layer 1/2 passed articles.
2. Optionally choose one suitable scraped/downloaded image per article.
3. Normalize and copy image assets into `public/data/agent-news-images/`.
4. Prefer stable WebP/AVIF filenames.
5. Avoid secrets, local absolute paths, crawler metadata, internal storage paths,
   or private URLs in JSON.
6. Write image references into `public/data/agent-news.json`.
7. Never require the website to import OmniGraph code.

## Consumer Responsibilities

The website should:

1. Continue loading `/data/agent-news.json`.
2. Validate article fields all-or-nothing as before.
3. Treat image fields as optional enhancement.
4. Map valid image fields into `AgentNewsItem`.
5. Render an image only when a safe image URL exists.
6. Hide or ignore failed images without changing article count.
7. Keep local typed fallback data for invalid or missing exports.

## Acceptance Criteria

- **IMAGE-01**: Contract docs define optional image fields for Agent news items.
- **IMAGE-02**: Website adapter accepts valid image metadata from static JSON.
- **IMAGE-03**: Invalid image metadata does not invalidate otherwise valid article data.
- **IMAGE-04**: `Agent 技术动态` still renders exactly 5 articles.
- **IMAGE-05**: Main `今日重点` card displays a valid image when provided.
- **IMAGE-06**: Missing, invalid, or failed image falls back to no-image display without white-screening.
- **IMAGE-07**: Source-authority caveat remains visible.
- **IMAGE-08**: Original source links remain external and unchanged.
- **IMAGE-09**: Desktop and mobile expanded states have no horizontal overflow.
- **IMAGE-10**: No backend, database, auth, scheduler, admin UI, article detail page, or OmniGraph code import is introduced.

## Verification

Run:

```bash
npm run lint
npm run build
```

Use Playwright to verify:

- Desktop `Agent 技术动态` renders 5 items with a valid main-card image.
- Mobile collapsed state remains stable.
- Mobile expanded state renders 5 items and has no horizontal overflow.
- Valid image path displays.
- Missing image path falls back safely.
- Broken image URL does not white-screen.
- Source links still point to original URLs.
- Source-authority caveat remains visible.

