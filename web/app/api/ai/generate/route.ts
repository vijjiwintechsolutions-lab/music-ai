import { NextResponse } from "next/server";
import { routeAIGeneration } from "@/lib/aiRouter";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      prompt,
      provider,
      maxTokens,
      temperature,
    } = body;

    if (
      typeof prompt !== "string" ||
      !prompt.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "ప్రాంప్ట్ (Prompt) అందించడం తప్పనిసరి.",
        },
        { status: 400 }
      );
    }

    const result = await routeAIGeneration({
      prompt: prompt.trim(),

      // Hugging Face is now the default
      // provider for testing the open-source AI.
      provider:
        provider || "huggingface",

      maxTokens:
        typeof maxTokens === "number"
          ? maxTokens
          : 2048,

      temperature:
        typeof temperature === "number"
          ? temperature
          : 0.7,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            "AI generation failed.",
          providerUsed:
            result.providerUsed,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      providerUsed: result.providerUsed,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "సర్వర్ లోపం ఏర్పడింది.";

    console.error(
      "AI Generate API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
