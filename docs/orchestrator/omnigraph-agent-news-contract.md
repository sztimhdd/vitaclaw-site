# OmniGraph Agent News Export Contract

Date: 2026-05-09

This document defines the static data-file contract for the VitaClaw homepage
`Agent 技术动态` section. OmniGraph is the producer of curated Agent intelligence
data. The VitaClaw website is only the consumer and presentation layer.

The website must not import OmniGraph code, call OmniGraph runtime modules, read
OmniGraph storage directly, or depend on LightRAG, Cognee, KG Synthesize, or any
other OmniGraph internals for this section.

## Canonical Export Path

The canonical website-facing export path is:

```text
public/data/agent-news.json
```

When built by Vite, this file is served as:

```text
/data/agent-news.json
```

The website adapter phase should treat this as a static public asset and should
fall back to the existing typed local news data if the file is absent or invalid.

## Eligibility

Only articles that satisfy all of these conditions may appear in the export:

1. Source article is from OmniGraph Layer 1 or Layer 2.
2. Curation status is `passed`.
3. Original article URL is an absolute `http` or `https` URL.
4. Chinese summary and tags are present.
5. The item is safe to show publicly on the homepage.

The export must contain exactly 5 eligible items. Do not export fewer, more, or
partially valid items for the homepage feed.

## JSON Shape

The export is a single JSON object:

```json
{
  "contractVersion": 1,
  "generatedAt": "2026-05-09T00:00:00Z",
  "items": [
    {
      "originalTitle": "New tools for building agents",
      "originalUrl": "https://openai.com/index/new-tools-for-building-agents/",
      "summaryZh": "OpenAI 将 Responses API、内置工具、Agents SDK 与追踪能力组合成 Agent 应用基础设施，降低企业从原型走向可观测生产流程的门槛。",
      "tags": ["OpenAI", "Agents SDK", "可观测性"],
      "sourceName": "OpenAI",
      "sourceDomain": "openai.com",
      "layer": "layer1",
      "curationStatus": "passed",
      "publishedAt": "2025-03-11T00:00:00Z",
      "collectedAt": "2026-05-09T00:00:00Z",
      "curatedAt": "2026-05-09T00:00:00Z"
    }
  ]
}
```

## Field Rules

| Field | Required | Rule |
|-------|----------|------|
| `contractVersion` | Yes | Must be `1`. |
| `generatedAt` | Yes | ISO 8601 timestamp for export generation. |
| `items` | Yes | Array with exactly 5 items. |
| `items[].originalTitle` | Yes | Non-empty original article title. Preserve original language. |
| `items[].originalUrl` | Yes | Absolute `http` or `https` URL for the original article. |
| `items[].summaryZh` | Yes | Non-empty Chinese summary, preferably 1-2 sentences. |
| `items[].tags` | Yes | Non-empty array of short display tags. |
| `items[].sourceName` | No | Human-readable source name when available. |
| `items[].sourceDomain` | Yes | Domain used for provenance display and URL sanity checks. |
| `items[].layer` | Yes | Must be `layer1` or `layer2`. |
| `items[].curationStatus` | Yes | Must be `passed`. |
| `items[].publishedAt` | No | ISO 8601 original publish timestamp when available. |
| `items[].collectedAt` | No | ISO 8601 OmniGraph ingestion timestamp when available. |
| `items[].curatedAt` | No | ISO 8601 curation timestamp when available. |

### Planned Image Extension

The planned v1.1.2 Agent News Image Enrichment milestone may add optional image
fields to each item:

| Field | Required | Rule |
|-------|----------|------|
| `items[].imageUrl` | No | Recommended static path `/data/agent-news-images/*.webp` or `/data/agent-news-images/*.avif`; same-origin absolute URLs may be allowed. |
| `items[].imageAlt` | No | Recommended when image is present; website may derive fallback alt text from `originalTitle`. |
| `items[].imageWidth` | No | Positive integer for layout ratio reservation. |
| `items[].imageHeight` | No | Positive integer for layout ratio reservation. |

These fields are enhancement-only. Missing or invalid image fields must not
invalidate otherwise valid article data.

The current homepage component only renders title, URL, Chinese summary, tags,
and source domain. The extra provenance fields are still part of the contract so
the website and OmniGraph implementations can validate the boundary
independently.

## Validation Rules

The website adapter should reject the entire export and use fallback data when
any of these conditions occurs:

1. File is missing or returns a non-OK response.
2. JSON is malformed or the root value is not an object.
3. `contractVersion` is missing or unsupported.
4. `generatedAt` is missing or not parseable as a timestamp.
5. `items` is missing, not an array, or does not contain exactly 5 items.
6. Any item has a missing or empty `originalTitle`.
7. Any item has a missing, empty, or invalid `originalUrl`.
8. Any URL is not an absolute `http` or `https` URL.
9. Any item has a missing or empty `summaryZh`.
10. Any item has missing, empty, or non-string `tags`.
11. Any item has a missing or empty `sourceDomain`.
12. Any item has `layer` outside `layer1` or `layer2`.
13. Any item has `curationStatus` other than `passed`.
14. Any present timestamp field is not parseable as a timestamp.

Validation should be all-or-nothing for the homepage. Do not mix valid exported
items with local fallback items, and do not render fewer than 5 items.

Image metadata is the exception to all-or-nothing article validation once the
planned image extension is implemented: invalid image metadata should be ignored
for that item, while the article remains valid if all required article fields
pass.

## Fallback Behavior

If validation fails, the website must:

1. Render the existing local typed fallback data from `src/data/agent-news.ts`.
2. Still show exactly 5 items.
3. Preserve the source-authority caveat under the section.
4. Avoid throwing during render or white-screening the homepage.
5. Optionally log a development warning with the rejection reason.

Fallback should be silent for visitors. The public homepage should continue to
look complete even when OmniGraph has not produced a valid export.

## Producer Responsibilities

OmniGraph-side work should:

1. Select exactly 5 eligible Layer 1/2 `passed` items.
2. Write JSON matching this contract.
3. Keep generated data free of secrets, credentials, internal notes, and private
   storage paths.
4. Publish or copy only the JSON file into the website public asset path or the
   deployment artifact.

For the planned image extension, OmniGraph should also copy approved, compressed
static image assets into `public/data/agent-news-images/` and write only safe
website-facing image paths into JSON.

## Consumer Responsibilities

Website-side work should:

1. Read `/data/agent-news.json` as a static asset.
2. Validate the full export before using it.
3. Map `originalTitle`, `originalUrl`, `summaryZh`, and `tags` into the current
   display model.
4. Use `sourceDomain` for provenance display when available.
5. Fall back to local typed data on any invalid export.
6. Avoid backend services, database tables, schedulers, admin UI, article detail
   pages, or direct OmniGraph imports for this phase.
