// web/lib/aiRouter.ts

export type AIProvider =
  | "openai"
  | "anthropic"
  | "gemini";

interface GenerationRequest {
  prompt: string;
  provider?: AIProvider;
  maxTokens?: number;
  temperature?: number;
}

interface GenerationResponse {
  success: boolean;
  data: string;
  providerUsed: AIProvider;
  error?: string;
}

export async function routeAIGeneration(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const selectedProvider =
    request.provider || "gemini";

  try {
    if (!request.prompt?.trim()) {
      throw new Error(
        "ప్రాంప్ట్ (Prompt) ఖాళీగా ఉండకూడదు."
      );
    }

    console.log(
      `Routing request to AI provider: ${selectedProvider}`
    );

    switch (selectedProvider) {
      case "openai":
        return await generateWithOpenAI(request);

      case "anthropic":
        return await generateWithAnthropic(request);

      case "gemini":
      default:
        return await generateWithGemini(request);
    }
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "అవుట్‌పుట్ జనరేట్ చేయడంలో లోపం ఏర్పడింది.";

    return {
      success: false,
      data: "",
      providerUsed: selectedProvider,
      error: message,
    };
  }
}

/* =========================================================
   GOOGLE GEMINI
   ========================================================= */

async function generateWithGemini(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      data: "",
      providerUsed: "gemini",
      error:
        "GEMINI_API_KEY is not configured in Vercel Environment Variables.",
    };
  }

  const model =
    process.env.GEMINI_MODEL ||
    "gemini-2.0-flash";

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: request.prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature:
            request.temperature ?? 0.7,
          maxOutputTokens:
            request.maxTokens ?? 2048,
        },
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error?.message ||
        "Gemini API request failed."
    );
  }

  const text =
    result?.candidates?.[0]?.content?.parts
      ?.map(
        (part: { text?: string }) =>
          part.text || ""
      )
      .join("") || "";

  if (!text) {
    throw new Error(
      "Gemini returned an empty response."
    );
  }

  return {
    success: true,
    data: text,
    providerUsed: "gemini",
  };
}

/* =========================================================
   OPENAI
   ========================================================= */

async function generateWithOpenAI(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      data: "",
      providerUsed: "openai",
      error:
        "OPENAI_API_KEY is not configured in Vercel Environment Variables.",
    };
  }

  const model =
    process.env.OPENAI_MODEL ||
    "gpt-4o-mini";

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content: request.prompt,
          },
        ],
        temperature:
          request.temperature ?? 0.7,
        max_tokens:
          request.maxTokens ?? 2048,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error?.message ||
        "OpenAI API request failed."
    );
  }

  const text =
    result?.choices?.[0]?.message?.content ||
    "";

  if (!text) {
    throw new Error(
      "OpenAI returned an empty response."
    );
  }

  return {
    success: true,
    data: text,
    providerUsed: "openai",
  };
}

/* =========================================================
   ANTHROPIC
   ========================================================= */

async function generateWithAnthropic(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const apiKey =
    process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      data: "",
      providerUsed: "anthropic",
      error:
        "ANTHROPIC_API_KEY is not configured in Vercel Environment Variables.",
    };
  }

  const model =
    process.env.ANTHROPIC_MODEL ||
    "claude-3-5-sonnet-latest";

  const response = await fetch(
    "https://api.anthropic.com/v1/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version":
          "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens:
          request.maxTokens ?? 2048,
        temperature:
          request.temperature ?? 0.7,
        messages: [
          {
            role: "user",
            content: request.prompt,
          },
        ],
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error?.message ||
        "Anthropic API request failed."
    );
  }

  const text =
    result?.content
      ?.filter(
        (item: {
          type?: string;
          text?: string;
        }) => item.type === "text"
      )
      ?.map(
        (item: {
          type?: string;
          text?: string;
        }) => item.text || ""
      )
      ?.join("") || "";

  if (!text) {
    throw new Error(
      "Anthropic returned an empty response."
    );
  }

  return {
    success: true,
    data: text,
    providerUsed: "anthropic",
  };
}
