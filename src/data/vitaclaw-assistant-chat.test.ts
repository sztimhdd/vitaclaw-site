import assert from "node:assert/strict";

import { adaptVitaClawAssistantResponse } from "./vitaclaw-assistant-chat";

assert.deepEqual(
  adaptVitaClawAssistantResponse({
    type: "answer",
    answer: "VitaClaw 可以把会议内容整理成待办和负责人。",
    sources: [{ chunkId: "vitaclaw-kb-meeting", headingPath: ["场景一：会议与协同推进"] }],
    cta: null,
    usedModel: false,
  }),
  {
    type: "answer",
    answer: "VitaClaw 可以把会议内容整理成待办和负责人。",
    sources: [{ chunkId: "vitaclaw-kb-meeting", headingPath: ["场景一：会议与协同推进"] }],
    cta: null,
    usedModel: false,
  },
);

assert.deepEqual(
  adaptVitaClawAssistantResponse({
    type: "cta",
    answer: "这个问题需要结合客户场景确认。",
    sources: [{ chunkId: "vitaclaw-kb-021", headingPath: ["ROI"] }],
    cta: "获取方案",
    usedModel: true,
  }),
  {
    type: "cta",
    answer: "这个问题需要结合客户场景确认。",
    sources: [],
    cta: "获取方案",
    usedModel: false,
  },
);

assert.deepEqual(adaptVitaClawAssistantResponse({}), {
  type: "fallback",
  answer: "VitaClaw 助手暂时无法读取产品文档，请稍后再试或预约演示。",
  sources: [],
  cta: "预约演示",
  usedModel: false,
});
