export type ToolParameterType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array";

export interface ToolParameter {
  type: ToolParameterType;
  description?: string;
  required?: boolean;
  enum?: string[];
}

export interface ToolDefinition {
  name: string;
  description: string;
  category: string;
  parameters: Record<string, ToolParameter>;
  execute: (args: Record<string, unknown>) => Promise<unknown>;
}

export interface AIToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface AIMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  tool_call_id?: string;
  name?: string;
  tool_calls?: AIToolCall[];
}

export interface AIRequest {
  prompt: string;
  system?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  tools?: string[];
}

export interface AIToolExecution {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
  result?: unknown;
}

export interface AIResponse {
  success: boolean;
  data: string;
  model?: string;
  toolCalls?: AIToolExecution[];
  error?: string;
}
