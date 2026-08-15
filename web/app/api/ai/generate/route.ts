import { NextRequest, NextResponse } from "next/server";

import {
  routeAIGeneration,
} from "@/lib/aiRouter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface GenerateBody {
  prompt?: unknown;
  system?: unknown;
  model?: unknown;
  temperature?: unknown;
  maxTokens?: unknown;
  tools?: unknown;
}

function getString(
  value: unknown,
): string | undefined {
  return typeof value === "string"
    ? value.trim()
    : undefined;
}

function getNumber(
  value: unknown,
): number | undefined {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return undefined;
  }

  return value;
}

function clamp(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(max, Math.max(min, value));
}

export async function POST(
  request: NextRequest,
) {
  try {
    let body: GenerateBody;

    try {
      body =
        (await request.json()) as GenerateBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          data: "",
          error: "Invalid JSON request body.",
        },
        { status: 400 },
      );
    }

    const prompt = getString(body.prompt);

    if (!prompt) {
      return NextResponse.json(
        {
          success: false,
          data: "",
          error: "Prompt is required.",
        },
        { status: 400 },
      );
    }

    if (prompt.length > 20000) {
      return NextResponse.json(
        {
          success: false,
          data: "",
          error:
            "Prompt must be 20,000 characters or less.",
        },
        { status: 413 },
      );
    }

    const system = getString(body.system);
    const model = getString(body.model);

    const requestedTemperature =
      getNumber(body.temperature);

    const temperature =
      requestedTemperature === undefined
        ? 0.7
        : clamp(
            requestedTemperature,
            0,
            2,
          );

    const requestedMaxTokens =
      getNumber(body.maxTokens);

    const maxTokens =
      requestedMaxTokens === undefined
        ? 2048
        : Math.floor(
            clamp(
              requestedMaxTokens,
              1,
              8192,
            ),
          );

    let tools: string[] | undefined;

    if (Array.isArray(body.tools)) {
      tools = body.tools.filter(
        (tool): tool is string =>
          typeof tool === "string" &&
          tool.trim().length > 0,
      );
    }

    const result =
      await routeAIGeneration({
        prompt,
        ...(system ? { system } : {}),
        ...(model ? { model } : {}),
        temperature,
        maxTokens,
        ...(tools?.length ? { tools } : {}),
      });

    return NextResponse.json(
      result,
      {
        status: result.success ? 200 : 502,
      },
    );
  } catch (error) {
    console.error(
      "AI generation route error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        data: "",
        error:
          error instanceof Error
            ? error.message
            : "AI generation failed.",
      },
      { status: 500 },
    );
  }
}
