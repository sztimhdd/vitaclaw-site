export type AgentNewsItem = {
  title: string;
  url: string;
  summary: string;
  tags: readonly string[];
  sourceDomain?: string;
};

export const agentNewsItems = [
  {
    title: "New tools for building agents",
    url: "https://openai.com/index/new-tools-for-building-agents/",
    summary:
      "OpenAI 将 Responses API、内置工具、Agents SDK 与追踪能力组合成 Agent 应用基础设施，降低企业从原型走向可观测生产流程的门槛。对需要跨系统执行、文件检索与网页检索的团队来说，这类原生工具链正在成为 Agent 工程化的重要参考。",
    tags: ["OpenAI", "Agents SDK", "可观测性"],
  },
  {
    title: "Introducing AgentKit",
    url: "https://openai.com/index/introducing-agentkit/",
    summary:
      "AgentKit 将可视化工作流、连接器管理、ChatKit 与评估能力打包，重点解决 Agent 构建中的编排、前端嵌入和效果度量问题。它反映出 Agent 平台正在从单点 API 调用走向完整生命周期工具。",
    tags: ["AgentKit", "ChatKit", "工作流"],
  },
  {
    title: "Introducing the Model Context Protocol",
    url: "https://www.anthropic.com/news/model-context-protocol",
    summary:
      "Anthropic 提出的 MCP 为模型连接外部数据源和工具提供统一协议思路，有助于减少每个系统单独集成的成本。随着多家平台支持，MCP 正成为企业 Agent 工具接入和上下文治理的关键接口候选。",
    tags: ["MCP", "工具调用", "协议"],
  },
  {
    title: "Vertex AI offers new ways to build and manage multi-agent systems",
    url: "https://cloud.google.com/blog/en/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai",
    summary:
      "Google Cloud 强调多 Agent 系统需要跨框架、跨工具协作，并将 Agent Engine、ADK 与企业平台能力结合。对大型组织而言，Agent 的管理、部署和互操作性正在变成比单个模型能力更重要的工程问题。",
    tags: ["Google Cloud", "多 Agent", "企业部署"],
  },
  {
    title: "Microsoft 365 Copilot: Enabling human-agent teams",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/18/microsoft-365-copilot-enabling-human-agent-teams/",
    summary:
      "Microsoft 将 Copilot 的协作型 Agent 延伸到团队、项目和会议场景，强调人机协同而非单纯自动化。办公软件入口中的 Agent 化趋势，正在推动企业重新设计审批、会议、文档和项目执行流程。",
    tags: ["Microsoft 365", "办公 Agent", "协同"],
  },
] as const satisfies readonly [
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
];
