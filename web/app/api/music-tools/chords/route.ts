import { NextRequest, NextResponse } from "next/server";

import {
  formatChordProgression,
  suggestChordProgression,
} from "@/lib/musicTheory";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
) {
  const { searchParams } = new URL(
    request.url,
  );

  const key =
    searchParams.get("key")?.trim() || "C";

  const mood =
    searchParams.get("mood")?.trim() || "happy";

  if (key.length > 30) {
    return NextResponse.json(
      {
        success: false,
        error: "Key is too long.",
      },
      { status: 400 },
    );
  }

  if (mood.length > 50) {
    return NextResponse.json(
      {
        success: false,
        error: "Mood is too long.",
      },
      { status: 400 },
    );
  }

  try {
    const progression =
      suggestChordProgression(
        key,
        mood,
      );

    return NextResponse.json({
      success: true,
      progression,
      formatted:
        formatChordProgression(
          progression,
        ),
    });
  } catch (error) {
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
