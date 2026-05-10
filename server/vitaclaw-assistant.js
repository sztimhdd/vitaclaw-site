import fs from "node:fs";

const DEFAULT_CHUNKS_PATH = "docs/product-docs/chunks/vitaclaw-doc-chunks.json";
const DEFAULT_DEEPSEEK_BASE_URL = "https://api.deepseek.com";
const DEFAULT_DEEPSEEK_MODEL = "deepseek-v4-flash";
const DEFAULT_CTA = "预约演示";
const MAX_CONTEXT_CHUNKS = 4;

const REFUSAL_PATTERNS = [
  /api\s*key/i,
  /deepseek.*key/i,
  /密钥/,
  /密码/,
  /private\s*key/i,
  /token/i,
  /credential/i,
  /忽略.*指令/,
  /隐藏.*提示/,
  /系统.*提示/,
];

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return value.toLowerCase().replace(/[，。！？、；：“”‘’（）()[\]{}.,!?;:"'`~@#$%^&*_+=|\\/<>-]/g, " ");
}

function extractQueryTerms(query) {
  const normalized = normalizeText(query);
  const asciiTerms = normalized
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);

  const keywordTerms = [
    "VitaClaw",
    "OneClaw",
    "Rust",
    "eBPF",
    "Lobster",
    "CMA",
    "OPAR",
    "MCP",
    "ChatKit",
    "ERP",
    "CRM",
    "OA",
    "A2A",
    "SPIFFE",
    "NHI",
    "OPA",
    "Rego",
    "Sigstore",
    "Wasm",
    "KVM",
    "ROI",
    "PIPL",
    "KYC",
    "AML",
    "执行",
    "内核",
    "审批",
    "对账",
    "审计",
    "安全",
    "合规",
    "私有化",
    "部署",
    "集成",
    "无侵入",
    "老旧",
    "银行",
    "保险",
    "监管",
    "制造",
    "政务",
    "采购",
    "提示词",
    "注入",
    "循环",
    "身份",
    "密钥",
    "密码",
    "价格",
    "成本",
    "周期",
    "人力",
  ].filter((term) => query.toLowerCase().includes(term.toLowerCase()));

  return [...new Set([...asciiTerms, ...keywordTerms])];
}

function validateChunk(chunk) {
  return (
    isRecord(chunk) &&
    isNonEmptyString(chunk.chunkId) &&
    isNonEmptyString(chunk.documentId) &&
    Array.isArray(chunk.headingPath) &&
    chunk.headingPath.every(isNonEmptyString) &&
    isNonEmptyString(chunk.content) &&
    Array.isArray(chunk.keywords) &&
    chunk.keywords.every(isNonEmptyString) &&
    ["allowed", "cta_only", "internal_only"].includes(chunk.answerUse)
  );
}

export function loadVitaClawChunks(chunksPath = DEFAULT_CHUNKS_PATH) {
  const parsed = JSON.parse(fs.readFileSync(chunksPath, "utf8"));

  if (!isRecord(parsed) || parsed.contractVersion !== 1 || !Array.isArray(parsed.chunks)) {
    throw new Error("Invalid VitaClaw chunks contract.");
  }

  const allowed = [];
  const ctaOnly = [];
  let internalOnlyCount = 0;

  for (const chunk of parsed.chunks) {
    if (!validateChunk(chunk)) {
      throw new Error("Invalid VitaClaw chunk.");
    }

    if (chunk.answerUse === "allowed") {
      allowed.push(chunk);
    } else if (chunk.answerUse === "cta_only") {
      ctaOnly.push(chunk);
    } else {
      internalOnlyCount += 1;
    }
  }

  return {
    sourceDocument: parsed.sourceDocument,
    allowed,
    ctaOnly,
    internalOnlyCount,
  };
}

function scoreChunk(queryTerms, chunk) {
  const haystack = normalizeText(
    `${chunk.headingPath.join(" ")} ${chunk.content} ${chunk.keywords.join(" ")}`,
  );

  return queryTerms.reduce((score, term) => {
    const normalizedTerm = normalizeText(term).trim();
    if (!normalizedTerm) {
      return score;
    }

    return haystack.includes(normalizedTerm) ? score + (normalizedTerm.length > 3 ? 2 : 1) : score;
  }, 0);
}

function topMatches(query, chunks) {
  const terms = extractQueryTerms(query);

  if (terms.length === 0) {
    return [];
  }

  return chunks
    .map((chunk) => ({ chunk, score: scoreChunk(terms, chunk) }))
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, MAX_CONTEXT_CHUNKS);
}

function isRefusalQuery(message) {
  return REFUSAL_PATTERNS.some((pattern) => pattern.test(message));
}

function isCtaSensitiveQuery(message) {
  return /ROI|60%|80%|价格|报价|成本|周期|多久|私有化|合规|法律|PIPL|个人信息保护法|采购|审计标准/i.test(message);
}

export function retrieveVitaClawContext(message, chunks) {
  const query = typeof message === "string" ? message.trim() : "";

  if (!query) {
    return {
      kind: "refusal",
      reason: "请输入一个关于 VitaClaw 产品、场景、集成或安全能力的问题。",
      context: [],
    };
  }

  if (isRefusalQuery(query)) {
    return {
      kind: "refusal",
      reason: "我不能提供或推测 API Key、密码、私钥、隐藏提示词或系统配置。",
      context: [],
    };
  }

  const allowedMatches = topMatches(query, chunks.allowed);
  const ctaMatches = topMatches(query, chunks.ctaOnly);
  const bestAllowedScore = allowedMatches[0]?.score ?? 0;
  const bestCtaScore = ctaMatches[0]?.score ?? 0;

  if (bestCtaScore > 0 && (isCtaSensitiveQuery(query) || bestCtaScore > bestAllowedScore + 1)) {
    const ctaChunk = ctaMatches[0].chunk;
    return {
      kind: "cta",
      reason: "这个问题需要结合客户场景确认，建议预约演示或获取方案。",
      cta: ctaChunk.ctaHint || DEFAULT_CTA,
      context: [],
    };
  }

  if (allowedMatches.length === 0) {
    return {
      kind: "fallback",
      reason: "目前产品文档没有覆盖这个问题的确定答案。",
      context: [],
    };
  }

  return {
    kind: "answer",
    context: allowedMatches.map((match) => match.chunk),
  };
}

function chunkToSource(chunk) {
  return {
    chunkId: chunk.chunkId,
    headingPath: chunk.headingPath,
  };
}

function fallbackAnswer(context) {
  const selected = context.slice(0, 2);
  return [
    "根据已审核的 VitaClaw 产品文档：",
    ...selected.map((chunk) => `- ${chunk.content}`),
    "如需确认具体系统、部署或指标，请预约演示或获取方案。",
  ].join("\n");
}

function ctaAnswer(retrieval) {
  return `${retrieval.reason}你可以点击「${retrieval.cta || DEFAULT_CTA}」，我们会基于你的系统环境和业务流程单独确认。`;
}

async function callDeepSeek({ message, context, env, fetchImpl }) {
  const apiKey = env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return null;
  }

  const baseUrl = (env.DEEPSEEK_BASE_URL || DEFAULT_DEEPSEEK_BASE_URL).replace(/\/+$/, "");
  const model = env.DEEPSEEK_MODEL || DEFAULT_DEEPSEEK_MODEL;
  const response = await fetchImpl(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      stream: false,
      temperature: 0.2,
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content:
            "你是 VitaClaw 助手。只能根据提供的已审核产品文档回答。不要编造未提供的信息。遇到客户特定、价格、法律合规保证、部署 sizing 或凭证相关问题时，引导预约演示或获取方案。",
        },
        {
          role: "user",
          content: `用户问题：${message}\n\n已审核产品文档片段：\n${context
            .map((chunk, index) => `[${index + 1}] ${chunk.content}`)
            .join("\n\n")}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  const answer = payload?.choices?.[0]?.message?.content;
  return isNonEmptyString(answer) ? answer.trim() : null;
}

export async function createVitaClawChatResponse(requestBody, options = {}) {
  const message = isRecord(requestBody) && isNonEmptyString(requestBody.message) ? requestBody.message.trim() : "";
  const chunks = loadVitaClawChunks(options.chunksPath || DEFAULT_CHUNKS_PATH);
  const retrieval = retrieveVitaClawContext(message, chunks);

  if (retrieval.kind === "refusal" || retrieval.kind === "fallback") {
    return {
      type: retrieval.kind,
      answer: retrieval.reason,
      sources: [],
      cta: retrieval.kind === "fallback" ? DEFAULT_CTA : null,
      usedModel: false,
    };
  }

  if (retrieval.kind === "cta") {
    return {
      type: "cta",
      answer: ctaAnswer(retrieval),
      sources: [],
      cta: retrieval.cta || DEFAULT_CTA,
      usedModel: false,
    };
  }

  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || fetch;

  try {
    const modelAnswer = await callDeepSeek({
      message,
      context: retrieval.context,
      env,
      fetchImpl,
    });

    if (modelAnswer) {
      return {
        type: "answer",
        answer: modelAnswer,
        sources: retrieval.context.map(chunkToSource),
        cta: null,
        usedModel: true,
      };
    }
  } catch {
    // Keep the public response stable without exposing provider failure details.
  }

  return {
    type: "answer",
    answer: fallbackAnswer(retrieval.context),
    sources: retrieval.context.map(chunkToSource),
    cta: null,
    usedModel: false,
  };
}
