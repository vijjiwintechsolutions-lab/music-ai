import type {
  AIRequest,
  AIResponse,
  AIMessage,
  AIToolCall,
} from "@/lib/ai/types";

import { getToolSchemas } from "@/lib/toolRegistry";
import { executeTool } from "@/lib/toolExecutor";
import { callOpenAICompatible } from "@/lib/ai/providers/openaiCompatible";

const MAX_TOOL_ROUNDS = 8;

function parseToolArguments(
  call: AIToolCall,
): Record<string, unknown> {
  const raw = call.function?.arguments || "{}";

  try {
    const parsed = JSON.parse(raw);

    if (
      parsed === null ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      throw new Error("Tool arguments must be a JSON object.");
    }

    return parsed as Record<string, unknown>;
  } catch {
    throw new Error(
      `Invalid arguments returned for tool ${call.function?.name || "unknown"}.`,
    );
  }
}

export async function runAI(
  request: AIRequest,
): Promise<AIResponse> {
  if (!request.prompt?.trim()) {
    return {
      success: false,
      data: "",
      error: "Prompt is required.",
    };
  }

  const baseUrl = process.env.MARKET_AI_PROVIDER_URL;
  const apiKey = process.env.MARKET_AI_PROVIDER_KEY;

  const model =
    request.model ||
    process.env.MARKET_AI_PROVIDER_MODEL ||
    "default";

  if (!baseUrl) {
    return {
      success: false,
      data: "",
      model,
      error:
        "MARKET_AI_PROVIDER_URL is not configured.",
    };
  }

  const messages: AIMessage[] = [
    ...(request.system
      ? [
          {
            role: "system" as const,
            content: request.system,
          },
        ]
      : []),
    {
      role: "user",
      content: request.prompt,
    },
  ];

  const tools = getToolSchemas(request.tools);

  const toolCalls: NonNullable<
    AIResponse["toolCalls"]
  > = [];

  try {
    for (
      let round = 0;
      round < MAX_TOOL_ROUNDS;
      round += 1
    ) {
      const body = await callOpenAICompatible(
        {
          baseUrl,
          apiKey,
          model,
        },
        messages,
        tools,
        request.temperature ?? 0.7,
        request.maxTokens ?? 2048,
      );

      const message = body?.choices?.[0]?.message;

      if (!message) {
        throw new Error(
          "AI provider returned no assistant message.",
        );
      }

      const providerToolCalls: AIToolCall[] =
        Array.isArray(message.tool_calls)
          ? message.tool_calls
          : [];

      if (providerToolCalls.length === 0) {
        return {
          success: true,
          data:
            typeof message.content === "string"
              ? message.content
              : "",
          model,
          toolCalls,
        };
      }

      messages.push({
        role: "assistant",
        content:
          typeof message.content === "string"
            ? message.content
            : "",
        tool_calls: providerToolCalls,
      });

      for (const call of providerToolCalls) {
        const name = call.function?.name;

        if (!name) {
          throw new Error(
            "AI returned an invalid tool call without a tool name.",
          );
        }

        const args = parseToolArguments(call);
        const id = call.id || crypto.randomUUID();

        let result: unknown;

        try {
          result = await executeTool(name, args);
        } catch (error) {
          result = {
            success: false,
            error:
              error instanceof Error
                ? error.message
                : "Tool execution failed.",
          };
        }

        toolCalls.push({
          id,
          name,
          arguments: args,
          result,
        });

        messages.push({
          role: "tool",
          tool_call_id: id,
          name,
          content: JSON.stringify(result),
        });
      }
    }

    throw new Error(
      `Maximum tool execution rounds (${MAX_TOOL_ROUNDS}) exceeded.`,
    );
  } catch (error) {
    return {
      success: false,
      data: "",
      model,
      toolCalls,
      error:
        error instanceof Error
          ? error.message
          : "AI generation failed.",
    };
  }
}
