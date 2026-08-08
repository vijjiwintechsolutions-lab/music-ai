export async function routeAIGeneration(
  request: GenerationRequest
): Promise<GenerationResponse> {
  if (!request.prompt?.trim()) {
    return {
      success: false,
      data: "",
      providerUsed:
        request.provider || "huggingface",
      error:
        "Prompt cannot be empty.",
    };
  }

  /*
   * Requested provider is tried first.
   *
   * Then automatic fallback providers
   * are attempted in this order.
   */
  const requestedProvider =
    request.provider || "huggingface";

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
            `Unsupported provider: ${provider}`
          );
      }

      if (result.success && result.data) {
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

  /*
   * Every provider failed.
   */
  return {
    success: false,
    data: "",
    providerUsed: requestedProvider,
    error:
      "All configured AI providers failed.\n\n" +
      errors.join("\n"),
  };
}
