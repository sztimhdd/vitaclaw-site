"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  FileText,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import {
  adaptVitaClawAssistantResponse,
  type VitaClawAssistantResponse,
  type VitaClawAssistantResponseType,
} from "@/data/vitaclaw-assistant-chat";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  responseType?: VitaClawAssistantResponseType;
  sources?: VitaClawAssistantResponse["sources"];
  cta?: VitaClawAssistantResponse["cta"];
};

const suggestedQuestions = [
  "VitaClaw 和普通聊天机器人有什么不同？",
  "ChatKit 怎么适配没有 API 的老旧 ERP？",
  "Lobster Box 安全沙箱是什么？",
  "私有化部署通常怎么评估？",
];

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "我是 VitaClaw 助手，可以基于已审核的产品文档回答高层产品、场景、集成和安全问题。涉及价格、合规保证或具体系统方案时，我会引导你预约演示或获取方案。",
    responseType: "answer",
    sources: [],
    cta: null,
  },
];

function responseTone(type?: VitaClawAssistantResponseType) {
  if (type === "cta" || type === "fallback") {
    return "border-blue-400/20 bg-blue-400/[0.075]";
  }

  if (type === "refusal") {
    return "border-white/[0.1] bg-white/[0.045]";
  }

  return "border-accent-green/15 bg-accent-green/[0.055]";
}

function ctaHref(cta: VitaClawAssistantResponse["cta"]) {
  return cta === "获取方案" ? "#cta" : "#cta";
}

export function VitaClawAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputId = useId();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [isOpen, messages, isSubmitting]);

  async function submitMessage(messageText: string) {
    const trimmed = messageText.trim();

    if (!trimmed || isSubmitting) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/vitaclaw-assistant/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        throw new Error("request failed");
      }

      const assistantResponse = adaptVitaClawAssistantResponse(await response.json());
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: assistantResponse.answer,
        responseType: assistantResponse.type,
        sources: assistantResponse.sources,
        cta: assistantResponse.cta,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch {
      setError("VitaClaw 助手暂时无法连接产品文档问答服务。你可以稍后重试，或直接预约演示。");
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content: "VitaClaw 助手暂时无法连接产品文档问答服务。你可以稍后重试，或直接预约演示。",
          responseType: "fallback",
          sources: [],
          cta: "预约演示",
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6 md:right-6">
      {isOpen ? (
        <section
          id="vitaclaw-assistant-panel"
          role="dialog"
          aria-label="VitaClaw 助手"
          className="fixed bottom-36 left-4 right-4 flex max-h-[min(680px,calc(100dvh-9rem))] min-h-[min(560px,calc(100dvh-9rem))] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080c14]/95 shadow-[0_28px_90px_-28px_rgba(59,130,246,0.55)] backdrop-blur-2xl md:bottom-24 md:left-auto md:right-6 md:w-[410px]"
        >
          <div className="border-b border-white/[0.08] bg-white/[0.035] px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.12] text-blue-200">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-white">VitaClaw 助手</h2>
                  <p className="mt-0.5 text-xs text-white/45">产品文档问答 · 场景顾问</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="关闭 VitaClaw 助手"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white/45 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-white/[0.07] bg-black/15 px-3 py-2 text-xs leading-5 text-white/48">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
              <p>
                回答仅基于已审核产品文档。价格、合规保证、私有化拓扑和客户系统可行性会引导到方案沟通。
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4" aria-live="polite">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl border px-4 py-3 text-[13px] leading-6 ${
                      message.role === "user"
                        ? "border-blue-400/20 bg-blue-400/[0.14] text-blue-50"
                        : `${responseTone(message.responseType)} text-white/68`
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>

                    {message.sources && message.sources.length > 0 ? (
                      <div className="mt-3 space-y-1 border-t border-white/[0.08] pt-2">
                        <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/42">
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          文档片段
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {message.sources.map((source) => (
                            <span
                              key={source.chunkId}
                              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[11px] text-white/42"
                            >
                              {source.headingPath.at(-1) || source.chunkId}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {message.cta ? (
                      <a
                        href={ctaHref(message.cta)}
                        className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#080c14] transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {message.cta}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}

              {isSubmitting ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-[13px] text-white/48">
                    <LoaderCircle className="h-4 w-4 animate-spin text-accent-green" aria-hidden="true" />
                    正在检索产品文档...
                  </div>
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/[0.08] bg-[#080c14]/98 px-4 py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void submitMessage(question)}
                  disabled={isSubmitting}
                  className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/58 transition-colors duration-200 hover:border-blue-300/25 hover:bg-blue-400/[0.08] hover:text-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <label htmlFor={inputId} className="sr-only">
                输入 VitaClaw 产品问题
              </label>
              <div className="flex items-end gap-2">
                <textarea
                  id={inputId}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  disabled={isSubmitting}
                  rows={2}
                  placeholder="问一个产品、场景、集成或安全问题"
                  className="min-h-12 flex-1 resize-none rounded-xl border border-white/[0.08] bg-white/[0.045] px-3 py-3 text-sm leading-5 text-white outline-none transition-colors duration-200 placeholder:text-white/28 focus:border-blue-400/45 focus:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || input.trim().length === 0}
                  aria-label="发送问题"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green text-[#08110e] transition-colors duration-200 hover:bg-accent-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-white/12 disabled:text-white/30"
                >
                  {isSubmitting ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {error ? <p className="text-xs leading-5 text-white/42">{error}</p> : null}
            </form>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <a
                href="#cta"
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2 py-2 text-xs font-semibold text-white/62 transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                预约演示
              </a>
              <a
                href="#cta"
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-blue-400/20 bg-blue-400/[0.08] px-2 py-2 text-xs font-semibold text-blue-100 transition-colors duration-200 hover:border-blue-300/30 hover:bg-blue-400/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                获取方案
              </a>
              <a
                href="#cta"
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2 py-2 text-xs font-semibold text-white/62 transition-colors duration-200 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                邮箱
              </a>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          aria-label="打开 VitaClaw 助手"
          aria-controls="vitaclaw-assistant-panel"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-white/[0.1] bg-[#080c14]/90 px-4 py-3 text-left shadow-[0_20px_60px_-24px_rgba(34,211,160,0.65)] backdrop-blur-xl transition-all duration-200 hover:border-accent-green/35 hover:bg-[#0d1117]/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/[0.12] text-accent-green transition-colors duration-200 group-hover:bg-accent-green/[0.16]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-white">VitaClaw 助手</span>
            <span className="text-xs text-white/45">产品文档问答</span>
          </span>
        </button>
      )}
    </div>
  );
}
