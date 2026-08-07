import { NextResponse } from "next/server";
import { routeAIGeneration } from "@/lib/aiRouter";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, provider } = body;

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "ప్రాంప్ట్ (Prompt) అందించడం తప్పనిసరి." },
        { status: 400 }
      );
    }

    // AI రూటర్ ద్వారా జనరేషన్ కాల్ చేయడం
    const result = await routeAIGeneration({
      prompt,
      provider: provider || "gemini",
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      providerUsed: result.providerUsed,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "సర్వర్ లోపం ఏర్పడింది." },
      { status: 500 }
    );
  }
}
