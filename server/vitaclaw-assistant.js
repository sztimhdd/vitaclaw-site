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
    "ERP",
    "CRM",
    "OA",
    "AI",
    "执行",
    "任务",
    "流程",
    "会议",
    "纪要",
    "待办",
    "负责人",
    "截止时间",
    "风险点",
    "协同",
    "采购",
    "比价",
    "供应链",
    "供应商",
    "库存",
    "历史价格",
    "报价",
    "交付周期",
    "付款条件",
    "单据",
    "合同",
    "财务",
    "初审",
    "报销",
    "发票",
    "订单",
    "审批",
    "客户",
    "销售",
    "跟进",
    "复盘",
    "商机",
    "老板",
    "小企业",
    "中小企业",
    "员工",
    "替代",
    "人工确认",
    "系统改造",
    "集成",
    "接入",
    "私有化",
    "部署",
    "聊天机器人",
    "提示词",
    "注入",
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
  return /价格|多少钱|收费|合同条款|采购合同|折扣|商务条款|上线周期|多久上线|私有化|部署拓扑|接口权限|验收指标|合规保证|法律意见|法律|PIPL|个人信息保护法|审计标准/i.test(message);
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
    "如需确认具体系统接入、价格或落地方案，请预约演示或获取方案。",
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
            "你是 VitaClaw 官网的产品问答助手。你的回答对象主要是中国中小企业老板、业务负责人和团队主管。只能根据提供的已审核产品文档回答，不要编造未提供的信息。回答必须使用中文。不要过度使用技术术语，不要强调架构、模型、eBPF、沙箱、OPAR 等底层概念，除非用户主动询问技术细节。优先用业务语言解释 VitaClaw 的价值：省人、省时间、少出错、流程能推进、老板看得清。回答结构尽量简单直接：先说明能做什么，再说明怎么产生价值，最后给出适合的使用场景。始终强调 VitaClaw 不是只会聊天的 AI，而是能在企业流程中接收任务、拆解步骤、整理材料、推进执行，并在关键节点等待人工确认的 AI 执行平台。遇到价格、法律合规保证、客户特定系统接入、部署细节或凭证相关问题时，引导预约演示或获取方案。",
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
