// web/lib/aiRouter.ts

export type AIProvider =
  | "openai"
  | "anthropic"
  | "gemini"
  | "huggingface";

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

const REQUEST_TIMEOUT = 30000;

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = REQUEST_TIMEOUT
): Promise<Response> {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      throw new Error(
        "AI provider timed out after 30 seconds. Please try again."
      );
    }

    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function routeAIGeneration(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const selectedProvider =
    request.provider || "huggingface";

  try {
    if (!request.prompt?.trim()) {
      throw new Error(
        "Prompt cannot be empty."
      );
    }

    console.log(
      `[AI Router] Provider: ${selectedProvider}`
    );

    switch (selectedProvider) {
      case "huggingface":
        return await generateWithHuggingFace(
          request
        );

      case "openai":
        return await generateWithOpenAI(
          request
        );

      case "anthropic":
        return await generateWithAnthropic(
          request
        );

      case "gemini":
        return await generateWithGemini(
          request
        );

      default:
        throw new Error(
          `Unsupported AI provider: ${selectedProvider}`
        );
    }
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "AI generation failed.";

    console.error(
      `[AI Router] ${selectedProvider} error:`,
      message
    );

    return {
      success: false,
      data: "",
      providerUsed: selectedProvider,
      error: message,
    };
  }
}

/* =========================================================
   HUGGING FACE
   ========================================================= */

async function generateWithHuggingFace(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const token = process.env.HF_TOKEN;

  if (!token) {
    throw new Error(
      "HF_TOKEN is not configured in Vercel Environment Variables."
    );
  }

  const model =
    process.env.HF_MODEL ||
    "openai/gpt-oss-120b:fastest";

  console.log(
    `[Hugging Face] Model: ${model}`
  );

  const response =
    await fetchWithTimeout(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model,

          messages: [
            {
              role: "user",
              content: request.prompt,
            },
          ],

          max_tokens:
            request.maxTokens ?? 1024,

          temperature:
            request.temperature ?? 0.7,

          stream: false,
        }),
      }
    );

  const rawText = await response.text();

  let result: any;

  try {
    result = JSON.parse(rawText);
  } catch {
    throw new Error(
      `Hugging Face returned invalid JSON (HTTP ${response.status}).`
    );
  }

  if (!response.ok) {
    const providerError =
      result?.error?.message ||
      result?.error ||
      rawText;

    throw new Error(
      `Hugging Face API error (${response.status}): ${providerError}`
    );
  }

  const text =
    result?.choices?.[0]?.message
      ?.content;

  if (
    typeof text !== "string" ||
    !text.trim()
  ) {
    throw new Error(
      "Hugging Face returned an empty response."
    );
  }

  return {
    success: true,
    data: text.trim(),
    providerUsed: "huggingface",
  };
}

/* =========================================================
   GEMINI
   ========================================================= */

async function generateWithGemini(
  request: GenerationRequest
): Promise<GenerationResponse> {
  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not configured."
    );
  }

  const model =
    process.env.GEMINI_MODEL ||
    "gemini-2.0-flash";

  const response =
    await fetchWithTimeout(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
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
  const apiKey =
    process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not configured."
    );
  }

  const model =
    process.env.OPENAI_MODEL ||
    "gpt-4o-mini";

  const response =
    await fetchWithTimeout(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type":
            "application/json",
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
    result?.choices?.[0]?.message
      ?.content || "";

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
    throw new Error(
      "ANTHROPIC_API_KEY is not configured."
    );
  }

  const model =
    process.env.ANTHROPIC_MODEL ||
    "claude-3-5-sonnet-latest";

  const response =
    await fetchWithTimeout(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

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
