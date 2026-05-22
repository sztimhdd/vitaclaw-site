export type VitaClawAssistantResponseType = "answer" | "cta" | "refusal" | "fallback";

export type VitaClawAssistantSource = {
  chunkId: string;
  headingPath: string[];
};

export type VitaClawAssistantResponse = {
  type: VitaClawAssistantResponseType;
  answer: string;
  sources: VitaClawAssistantSource[];
  cta: "预约演示" | "获取方案" | null;
  usedModel: boolean;
};

const FALLBACK_RESPONSE: VitaClawAssistantResponse = {
  type: "fallback",
  answer: "企小勤助手暂时无法读取产品文档，请稍后再试或预约演示。",
  sources: [],
  cta: "预约演示",
  usedModel: false,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function readSources(value: unknown): VitaClawAssistantSource[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((source): source is Record<string, unknown> => isRecord(source))
    .map((source) => ({
      chunkId: isNonEmptyString(source.chunkId) ? source.chunkId.trim() : "",
      headingPath: Array.isArray(source.headingPath)
        ? source.headingPath.filter(isNonEmptyString).map((heading) => heading.trim())
        : [],
    }))
    .filter((source) => source.chunkId.length > 0 && source.headingPath.length > 0);
}

export function adaptVitaClawAssistantResponse(value: unknown): VitaClawAssistantResponse {
  if (!isRecord(value)) {
    return FALLBACK_RESPONSE;
  }

  const type = value.type;
  const answer = value.answer;

  if (
    type !== "answer" &&
    type !== "cta" &&
    type !== "refusal" &&
    type !== "fallback"
  ) {
    return FALLBACK_RESPONSE;
  }

  if (!isNonEmptyString(answer)) {
    return FALLBACK_RESPONSE;
  }

  const cta = value.cta === "预约演示" || value.cta === "获取方案" ? value.cta : null;

  return {
    type,
    answer: answer.trim(),
    sources: type === "answer" ? readSources(value.sources) : [],
    cta: type === "fallback" && cta === null ? "预约演示" : cta,
    usedModel: type === "answer" && value.usedModel === true,
  };
}
