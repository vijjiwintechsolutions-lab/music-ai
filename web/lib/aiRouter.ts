// web/lib/aiRouter.ts

export type AIProvider =
  | "openai"
  | "anthropic"
  | "gemini"
  | "huggingface";

export interface GenerationRequest {
  prompt: string;
  provider?: AIProvider;
  maxTokens?: number;
  temperature?: number;
}

export interface GenerationResponse {
  success: boolean;
  data: string;
  providerUsed: AIProvider;
  error?: string;
}

const REQUEST_TIMEOUT = 30000;

/* =========================================================
   FETCH WITH TIMEOUT
   ========================================================= */

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
        "AI provider timed out after 30 seconds."
      );
    }

    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/* =========================================================
   MAIN AI ROUTER
   ========================================================= */

export async function routeAIGeneration(
  request: GenerationRequest
): Promise<GenerationResponse> {
  if (!request.prompt?.trim()) {
    return {
      success: false,
      data: "",
      providerUsed:
        request.provider || "huggingface",
      error: "Prompt cannot be empty.",
    };
  }

  const requestedProvider =
    request.provider || "huggingface";

  /*
   * Requested provider goes first.
   *
   * Then automatic fallback.
   */
  const fallbackOrder: AIProvider[] = [
    "huggingface",
    "gemini",
    "openai",
    "anthropic",
  ];

  const providersToTry: AIProvider[] = [
    requestedProvider,
    ...fallbackOrder.filter(
      (provider) =>
        provider !== requestedProvider
    ),
  ];

  const errors: string[] = [];

  for (const provider of providersToTry) {
    try {
      console.log(
        `[AI Router] Trying provider: ${provider}`
      );

      let result: GenerationResponse;

      switch (provider) {
        case "huggingface":
          result =
            await generateWithHuggingFace(
              request
            );
          break;

        case "gemini":
          result =
            await generateWithGemini(
              request
            );
          break;

        case "openai":
          result =
            await generateWithOpenAI(
              request
            );
          break;

        case "anthropic":
          result =
            await generateWithAnthropic(
              request
            );
          break;

        default:
          throw new Error(
            `Unsupported AI provider: ${provider}`
          );
      }

      if (
        result.success &&
        result.data?.trim()
      ) {
        console.log(
          `[AI Router] SUCCESS: ${provider}`
        );

        return result;
      }

      const providerError =
        result.error ||
        `${provider} returned an empty response.`;

      console.warn(
        `[AI Router] FAILED: ${provider} - ${providerError}`
      );

      errors.push(
        `${provider}: ${providerError}`
      );
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown provider error.";

      console.warn(
        `[AI Router] FAILED: ${provider} - ${message}`
      );

      errors.push(
        `${provider}: ${message}`
      );
    }
  }

  return {
    success: false,
    data: "",
    providerUsed: requestedProvider,
    error:
      "All configured AI providers failed.\n\n" +
      errors.join("\n"),
  };
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
    "openai/gpt-oss-120b";

  const url =
    "https://router.huggingface.co/v1/chat/completions";

  console.log(
    `[Hugging Face] Model: ${model}`
  );

  const response =
    await fetchWithTimeout(url, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
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
    });

  const contentType =
    response.headers.get(
      "content-type"
    ) || "";

  const rawText =
    await response.text();

  if (
    !contentType.includes(
      "application/json"
    )
  ) {
    const preview = rawText
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 500);

    throw new Error(
      `Hugging Face returned a non-JSON response (HTTP ${response.status}). Response: ${preview}`
    );
  }

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
      result?.message ||
      "Unknown Hugging Face API error.";

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
    result?.candidates?.[0]
      ?.content?.parts
      ?.map(
        (part: {
          text?: string;
        }) => part.text || ""
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
        }) =>
          item.type === "text"
      )
      ?.map(
        (item: {
          type?: string;
          text?: string;
        }) =>
          item.text || ""
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
