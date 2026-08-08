"use client";

import { FormEvent, useState } from "react";
import {
  Bot,
  Copy,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  User,
} from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ChatStudio() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your AI Chat Studio. Ask me anything, generate ideas, write content, explain code, or help with your project.",
    },
  ]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const prompt = input.trim();

    if (!prompt || loading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: prompt,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/ai/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            type: "chat",

            // Explicitly use Hugging Face
            // for the current open-source AI test.
            provider: "huggingface",

            maxTokens: 2048,
            temperature: 0.7,
          }),
        }
      );

      let data: any = null;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          `AI server returned an invalid response. HTTP ${response.status}`
        );
      }

      if (!response.ok || data?.success === false) {
        throw new Error(
          data?.error ||
            `Unable to generate a response. HTTP ${response.status}`
        );
      }

      /*
       * Our API returns:
       *
       * {
       *   success: true,
       *   data: "...AI response...",
       *   providerUsed: "huggingface"
       * }
       *
       * Therefore data.data is the primary response.
       */
      const assistantContent =
        typeof data?.data === "string"
          ? data.data
          : typeof data?.text === "string"
          ? data.text
          : typeof data?.response === "string"
          ? data.response
          : typeof data?.result === "string"
          ? data.result
          : "";

      if (!assistantContent.trim()) {
        throw new Error(
          `AI returned an empty response.${
            data?.providerUsed
              ? ` Provider: ${data.providerUsed}`
              : ""
          }`
        );
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: assistantContent,
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: `AI Error:\n\n${errorMessage}`,
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function copyMessage(content: string) {
    try {
      await navigator.clipboard.writeText(
        content
      );
    } catch {
      // Clipboard may be unavailable.
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                AI Chat Studio
              </h1>

              <p className="text-sm text-muted-foreground">
                Your multi-purpose AI workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI Ready
          </div>
        </header>

        {/* Chat area */}
        <section className="flex min-h-[calc(100vh-150px)] flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {messages.map((message) => {
              const isUser =
                message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    isUser
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}

                  <div
                    className={`group max-w-[85%] rounded-2xl px-4 py-3 sm:max-w-[75%] ${
                      isUser
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "border border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-7">
                      {message.content}
                    </div>

                    {!isUser && (
                      <button
                        type="button"
                        onClick={() =>
                          copyMessage(
                            message.content
                          )
                        }
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground transition hover:bg-white/10 hover:text-white"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </button>
                    )}
                  </div>

                  {isUser && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="border-t border-white/10 px-4 py-4 sm:px-6">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Try asking
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Write a professional email",
                "Explain this concept simply",
                "Help me build a website",
                "Give me 10 business ideas",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() =>
                    setInput(suggestion)
                  }
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-4 sm:p-6"
          >
            <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-black/20 p-2 focus-within:border-cyan-500/50">
              <textarea
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();

                    if (!loading) {
                      event.currentTarget.form?.requestSubmit();
                    }
                  }
                }}
                placeholder="Message AI Chat Studio..."
                rows={1}
                className="min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                disabled={
                  loading ||
                  !input.trim()
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white transition hover:from-cyan-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              Enter to send • Shift + Enter for a new line
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
