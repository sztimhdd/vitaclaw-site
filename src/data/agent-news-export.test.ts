import assert from "node:assert/strict";

import { adaptAgentNewsExport } from "./agent-news-export";

const validItems = Array.from({ length: 5 }, (_, index) => ({
  originalTitle: `Exported article ${index + 1}`,
  originalUrl: `https://example.com/agent-${index + 1}`,
  summaryZh: `第 ${index + 1} 条 Agent 技术动态摘要。`,
  tags: ["Agent", `动态${index + 1}`],
  sourceName: "Example",
  sourceDomain: "example.com",
  layer: index % 2 === 0 ? "layer1" : "layer2",
  curationStatus: "passed",
  publishedAt: "2026-05-01T00:00:00Z",
  collectedAt: "2026-05-02T00:00:00Z",
  curatedAt: "2026-05-03T00:00:00Z",
}));

const validExport = {
  contractVersion: 1,
  generatedAt: "2026-05-09T00:00:00Z",
  items: validItems,
};

function cloneValidExport() {
  return structuredClone(validExport);
}

assert.deepEqual(adaptAgentNewsExport(validExport), {
  ok: true,
  items: validItems.map((item) => ({
    title: item.originalTitle,
    url: item.originalUrl,
    summary: item.summaryZh,
    tags: item.tags,
    sourceDomain: item.sourceDomain,
  })),
});

{
  const exportWithFourItems = cloneValidExport();
  exportWithFourItems.items = exportWithFourItems.items.slice(0, 4);
  assert.equal(adaptAgentNewsExport(exportWithFourItems).ok, false);
}

{
  const exportWithInvalidUrl = cloneValidExport();
  exportWithInvalidUrl.items[0].originalUrl = "/relative-url";
  assert.equal(adaptAgentNewsExport(exportWithInvalidUrl).ok, false);
}

{
  const exportWithInvalidLayer = cloneValidExport();
  exportWithInvalidLayer.items[0].layer = "layer3";
  assert.equal(adaptAgentNewsExport(exportWithInvalidLayer).ok, false);
}

{
  const exportWithFailedStatus = cloneValidExport();
  exportWithFailedStatus.items[0].curationStatus = "failed";
  assert.equal(adaptAgentNewsExport(exportWithFailedStatus).ok, false);
}

{
  const exportWithBadTimestamp = cloneValidExport();
  exportWithBadTimestamp.items[0].curatedAt = "not-a-date";
  assert.equal(adaptAgentNewsExport(exportWithBadTimestamp).ok, false);
}

assert.equal(adaptAgentNewsExport(null).ok, false);
assert.equal(adaptAgentNewsExport([]).ok, false);
