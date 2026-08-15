import { NextRequest, NextResponse } from "next/server";

import {
  suggestChordProgression,
  formatChordProgression,
} from "@/lib/musicTheory";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getString(
  value: string | null,
): string {
  return (value || "").trim();
}

export async function GET(
  request: NextRequest,
) {
  try {
    const { searchParams } = new URL(
      request.url,
    );

    const key = getString(
      searchParams.get("key"),
    );

    const mood =
      getString(
        searchParams.get("mood"),
      ) || "happy";

    if (!key) {
      return NextResponse.json(
        {
          success: false,
          error: "Key is required.",
        },
        { status: 400 },
      );
    }

    if (key.length > 50) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Key must be 50 characters or less.",
        },
        { status: 400 },
      );
    }

    if (mood.length > 50) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Mood must be 50 characters or less.",
        },
        { status: 400 },
      );
    }

    const progression =
      suggestChordProgression(
        key,
        mood,
      );

    return NextResponse.json({
      success: true,
      data: progression,
      formatted:
        formatChordProgression(
          progression,
        ),
    });
  } catch (error) {
    console.error(
      "Chord progression API error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Chord progression generation failed.",
      },
      { status: 500 },
    );
  }
}
