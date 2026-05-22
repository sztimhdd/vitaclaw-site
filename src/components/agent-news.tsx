"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Newspaper } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { agentNewsItems, type AgentNewsItem } from "@/data/agent-news";
import { loadAgentNewsExport } from "@/data/agent-news-export";

function sourceHost(item: AgentNewsItem) {
  if (item.sourceDomain) {
    return item.sourceDomain.replace(/^www\./, "");
  }

  return new URL(item.url).hostname.replace(/^www\./, "");
}

function NewsTags({ tags }: { tags: AgentNewsItem["tags"] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-2.5 py-1 text-xs font-medium text-blue-200/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function NewsTitleLink({ item, className = "" }: { item: AgentNewsItem; className?: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-start gap-2 text-white transition-colors duration-200 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <span>{item.title}</span>
      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-colors duration-200 group-hover/link:text-blue-300" />
    </a>
  );
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;
}

export function AgentNews() {
  const [newsItems, setNewsItems] = useState<readonly AgentNewsItem[]>(agentNewsItems);
  const [isMobile, setIsMobile] = useState(isMobileViewport);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const displayItems = newsItems.length === 5 ? newsItems : agentNewsItems;
  const [leadItem, ...compactItems] = displayItems;
  const showNewsGrid = !isMobile || isMobileExpanded;

  useEffect(() => {
    let isActive = true;

    loadAgentNewsExport().then((result) => {
      if (!isActive) {
        return;
      }

      if (result.ok) {
        setNewsItems(result.items);
        return;
      }

      if (import.meta.env.DEV && "reason" in result) {
        console.warn(`Agent news export fallback: ${result.reason}`);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <section id="agent-news" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-[260px] w-[420px] rounded-full bg-accent-green/[0.05] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50">
              <Newspaper className="h-4 w-4 text-accent-green" />
              AI 办公方法
            </div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight text-white">
              帮老板看懂 AI 怎么真正落地
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              不讲模型参数和技术黑话，只整理 AI 如何进入会议、采购、单据、对账和客户跟进这些真实业务流程。
            </p>
          </div>
        </ScrollReveal>

        {isMobile && !isMobileExpanded ? (
          <ScrollReveal delay={80}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full border border-accent-green/20 bg-accent-green/[0.08] px-3 py-1 text-xs font-medium text-accent-green">
                  5 篇方法精选
                </span>
                <span className="text-xs font-medium text-white/35">默认收起</span>
              </div>
              <p className="text-sm leading-6 text-white/50">
                用老板能听懂的方式，解释 AI 怎么帮小团队少盯流程、少翻表、少漏事。
              </p>
              <button
                type="button"
                aria-expanded={isMobileExpanded}
                aria-controls="agent-news-grid"
                onClick={() => setIsMobileExpanded(true)}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-blue-400/30 hover:bg-blue-400/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                展开 AI 办公方法
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>
        ) : null}

        {showNewsGrid ? (
          <div id="agent-news-grid" className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <ScrollReveal delay={80} className="lg:col-span-1">
              <article className="group flex h-full min-h-[360px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.045] p-7 shadow-[0_24px_70px_-35px_rgba(59,130,246,0.5)] transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.06]">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-accent-green/20 bg-accent-green/[0.08] px-3 py-1 text-xs font-medium text-accent-green">
                      今日重点
                    </span>
                    <span className="text-xs font-medium text-white/35">{sourceHost(leadItem)}</span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    <NewsTitleLink item={leadItem} />
                  </h3>
                  <p className="mt-5 text-[15px] leading-7 text-white/55">{leadItem.summary}</p>
                </div>
                <div className="mt-8">
                  <NewsTags tags={leadItem.tags} />
                </div>
              </article>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-2">
              {compactItems.map((item, i) => (
                <ScrollReveal key={item.url} delay={140 + i * 70}>
                  <article className="flex h-full min-h-[240px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.05]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-xs font-medium text-white/35">{sourceHost(item)}</span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      <NewsTitleLink item={item} />
                    </h3>
                    <p className="mt-4 grow text-sm leading-6 text-white/50">{item.summary}</p>
                    <div className="mt-6">
                      <NewsTags tags={item.tags} />
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {isMobile ? (
              <ScrollReveal delay={420} className="lg:hidden">
                <button
                  type="button"
                  aria-expanded={isMobileExpanded}
                  aria-controls="agent-news-grid"
                  onClick={() => setIsMobileExpanded(false)}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  收起 AI 办公方法
                  <ChevronUp className="h-4 w-4" />
                </button>
              </ScrollReveal>
            ) : null}
          </div>
        ) : null}

        <ScrollReveal delay={420}>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-white/35">
            摘要由自动化流程整理，仅用于快速浏览和检索便利；技术细节、发布时间与立场判断以原始来源文章为准。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
