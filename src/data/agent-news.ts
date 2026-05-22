export type AgentNewsItem = {
  title: string;
  url: string;
  summary: string;
  tags: readonly string[];
  sourceDomain?: string;
};

export const agentNewsItems = [
  {
    title: "为什么 AI 现在可以开始接办公流程",
    url: "https://openai.com/index/new-tools-for-building-agents/",
    summary:
      "新一代 AI 不再只会回答问题，而是开始具备查资料、调用工具、跟踪执行结果的能力。对小团队来说，这意味着会议、采购、单据和客户跟进这类重复工作，已经可以先从低风险流程试起来。",
    tags: ["AI 办公", "业务流程", "工具调用"],
  },
  {
    title: "怎么判断一个流程适不适合先交给 AI",
    url: "https://openai.com/index/introducing-agentkit/",
    summary:
      "适合先试点的流程通常有三个特点：资料来源明确、判断规则相对稳定、关键动作可以由人确认。企业不需要一开始改造所有系统，先选一个高频小流程更容易看清价值。",
    tags: ["试点方法", "流程选择", "人工确认"],
  },
  {
    title: "AI 怎么和公司现有系统一起工作",
    url: "https://www.anthropic.com/news/model-context-protocol",
    summary:
      "AI 要真正干活，不能只停留在聊天框里，而要能读取资料、调用工具、整理结果。企业在试点时需要先确认哪些数据可以用、哪些系统需要接入、哪些动作必须由人拍板。",
    tags: ["系统接入", "数据范围", "可操作范围"],
  },
  {
    title: "一个老板该怎么看 AI 数字员工",
    url: "https://cloud.google.com/blog/en/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai",
    summary:
      "AI 数字员工的价值不是替代所有人，而是先把重复查询、整理、初筛和提醒做掉。老板需要关注的不是技术名词，而是它能不能少催人、少漏事、少翻表、少出错。",
    tags: ["老板视角", "数字员工", "降本增效"],
  },
  {
    title: "AI 进入办公室后，人应该负责什么",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/18/microsoft-365-copilot-enabling-human-agent-teams/",
    summary:
      "真正适合落地的方式不是让 AI 静默接管，而是让 AI 先整理资料、推进步骤、暴露异常，人再做确认和拍板。这样既能提高效率，也能保留业务责任和管理可控性。",
    tags: ["人机协作", "关键确认", "管理可控"],
  },
] as const satisfies readonly [
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
  AgentNewsItem,
];
