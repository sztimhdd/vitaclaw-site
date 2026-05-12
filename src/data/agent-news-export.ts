import type { AgentNewsItem } from "@/data/agent-news";

const EXPORT_PATH = `/data/agent-news.json?_=${Date.now()}`;
const EXPECTED_ITEM_COUNT = 5;
const SUPPORTED_CONTRACT_VERSION = 1;
const VALID_LAYERS = new Set(["layer1", "layer2"]);

type ExportResult =
  | {
      ok: true;
      items: AgentNewsItem[];
    }
  | {
      ok: false;
      reason: string;
    };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isParseableTimestamp(value: unknown) {
  return isNonEmptyString(value) && Number.isFinite(Date.parse(value));
}

function isOptionalTimestampValid(value: unknown) {
  return value === undefined || isParseableTimestamp(value);
}

function isHttpUrl(value: unknown): value is string {
  if (!isNonEmptyString(value)) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function readTags(value: unknown): string[] | null {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const tags = value.filter(isNonEmptyString).map((tag) => tag.trim());
  return tags.length === value.length ? tags : null;
}

export function adaptAgentNewsExport(value: unknown): ExportResult {
  if (!isRecord(value)) {
    return { ok: false, reason: "Export root is not an object." };
  }

  if (value.contractVersion !== SUPPORTED_CONTRACT_VERSION) {
    return { ok: false, reason: "Unsupported contract version." };
  }

  if (!isParseableTimestamp(value.generatedAt)) {
    return { ok: false, reason: "Missing or invalid generatedAt timestamp." };
  }

  if (!Array.isArray(value.items) || value.items.length !== EXPECTED_ITEM_COUNT) {
    return { ok: false, reason: "Export must contain exactly 5 items." };
  }

  const items: AgentNewsItem[] = [];

  for (const item of value.items) {
    if (!isRecord(item)) {
      return { ok: false, reason: "Export item is not an object." };
    }

    const tags = readTags(item.tags);

    if (
      !isNonEmptyString(item.originalTitle) ||
      !isHttpUrl(item.originalUrl) ||
      !isNonEmptyString(item.summaryZh) ||
      tags === null ||
      !isNonEmptyString(item.sourceDomain) ||
      !isNonEmptyString(item.layer) ||
      !VALID_LAYERS.has(item.layer) ||
      item.curationStatus !== "passed" ||
      !isOptionalTimestampValid(item.publishedAt) ||
      !isOptionalTimestampValid(item.collectedAt) ||
      !isOptionalTimestampValid(item.curatedAt)
    ) {
      return { ok: false, reason: "Export item failed validation." };
    }

    items.push({
      title: item.originalTitle.trim(),
      url: item.originalUrl.trim(),
      summary: item.summaryZh.trim(),
      tags,
      sourceDomain: item.sourceDomain.trim(),
    });
  }

  return { ok: true, items };
}

export async function loadAgentNewsExport(fetchImpl: typeof fetch = fetch): Promise<ExportResult> {
  try {
    const response = await fetchImpl(EXPORT_PATH, { cache: "no-store" });

    if (!response.ok) {
      return { ok: false, reason: `Export request failed with ${response.status}.` };
    }

    return adaptAgentNewsExport(await response.json());
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : "Export request failed.",
    };
  }
}
