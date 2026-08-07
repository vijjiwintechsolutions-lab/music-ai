"use client";

import { useState } from "react";

import {
  Bot,
  Brain,
  Play,
  Pause,
  Square,
  Wand2,
  Activity,
  Users,
} from "lucide-react";

const agents = [
  "General Assistant",
  "Developer",
  "Researcher",
  "Business",
  "Marketing",
  "Sales",
  "Support",
  "Custom Agent",
];

export default function AgentStudio() {
  const [prompt, setPrompt] = useState("");
  const [selected, setSelected] = useState(agents[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Agent Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Build autonomous AI agents capable of reasoning, planning and completing complex tasks.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Mission
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want your AI agent to accomplish..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              <Play className="mr-2 inline h-5 w-5" />
              Launch Agent
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              <Pause className="mr-2 inline h-5 w-5" />
              Pause
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              <Square className="mr-2 inline h-5 w-5" />
              Stop
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Agent Type
          </h2>

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-background p-4"
          >
            {agents.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <Bot className="mx-auto mb-4 h-16 w-16 text-violet-500" />

            <p className="font-semibold">
              Autonomous Agent Ready
            </p>
          </div>

          <button className="mt-8 w-full rounded-2xl border border-white/10 py-4 hover:bg-white/5">
            <Brain className="mr-2 inline h-5 w-5" />
            Configure Intelligence
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Quick Actions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Deep Research",
              "Write Code",
              "Analyze Files",
              "Browse Web",
              "Generate Report",
              "Create Workflow",
              "Automate Tasks",
              "Call APIs",
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                <Wand2 className="mb-3 h-5 w-5" />
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Agent Status
          </h2>

          <div className="space-y-4">
            {[
              ["State", "Idle"],
              ["Memory", "Ready"],
              ["Tools", "0 Connected"],
              ["Tasks", "0 Running"],
              ["CPU", "0%"],
              ["Activity", "Waiting"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-xl border border-white/10 p-4"
              >
                <span>{item[0]}</span>

                <span className="font-bold text-violet-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            icon: <Activity className="mx-auto h-8 w-8" />,
            title: "Running Agents",
            value: "0",
          },
          {
            icon: <Users className="mx-auto h-8 w-8" />,
            title: "Multi Agents",
            value: "8",
          },
          {
            icon: <Brain className="mx-auto h-8 w-8" />,
            title: "Reasoning",
            value: "Enabled",
          },
          {
            icon: <Bot className="mx-auto h-8 w-8" />,
            title: "Automation",
            value: "Ready",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div className="text-violet-500">
              {card.icon}
            </div>

            <h3 className="mt-5 text-3xl font-black">
              {card.value}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Multi-Agent Teams
            </h2>

            <p className="mt-2 text-muted-foreground">
              Coordinate multiple AI agents that work together on complex projects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Manager Agent",
              "Planner Agent",
              "Developer Agent",
              "Reviewer Agent",
              "Research Agent",
              "QA Agent",
              "Security Agent",
              "Deployment Agent",
            ].map((agent) => (
              <button
                key={agent}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-violet-500" />

                  <span className="font-semibold">
                    {agent}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Control
          </h2>

          <div className="space-y-4">
            {[
              "Create Team",
              "Assign Roles",
              "Shared Memory",
              "Communication",
              "Parallel Tasks",
              "Task Queue",
              "Review Mode",
              "Auto Finish",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Team Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Manager",
            "Planner",
            "Developers",
            "Researchers",
            "Reviewers",
            "Workers",
            "Observers",
            "Completed Tasks",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center"
            >
              <Bot className="mx-auto mb-3 h-8 w-8 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Computer Control
            </h2>

            <p className="mt-2 text-muted-foreground">
              Allow AI agents to control browsers, files, terminals and desktop applications autonomously.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Browser Agent",
              "Computer Agent",
              "Terminal Agent",
              "File System Agent",
              "Vision Agent",
              "Voice Agent",
              "Email Agent",
              "Calendar Agent",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-violet-500" />

                  <span className="font-semibold">
                    {tool}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Connected Tools
          </h2>

          <div className="space-y-4">
            {[
              "Chrome",
              "Edge",
              "VS Code",
              "Terminal",
              "Desktop",
              "Camera",
              "Microphone",
              "Clipboard",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 p-4"
              >
                <span>
                  {item}
                </span>

                <span className="font-bold text-violet-500">
                  Ready
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Automation Skills
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Open Applications",
              "Browse Websites",
              "Read Documents",
              "Fill Forms",
              "Upload Files",
              "Download Reports",
              "Execute Commands",
              "Take Screenshots",
            ].map((skill) => (
              <button
                key={skill}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Live Automation
          </h2>

          <div className="space-y-4">
            {[
              "Desktop Control",
              "Browser Navigation",
              "Window Detection",
              "Mouse Actions",
              "Keyboard Actions",
              "OCR Reading",
              "Vision Analysis",
              "Activity Recording",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Computer Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Browser Tabs",
            "Open Apps",
            "Files Accessed",
            "Commands",
            "Emails",
            "Calendar Events",
            "Vision Tasks",
            "Voice Tasks",
            "Automation Jobs",
            "Running Sessions",
            "Connected Devices",
            "Success Rate",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              MCP & Tool Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Connect your AI agents to MCP servers, external APIs and third-party services.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "MCP Server",
              "GitHub",
              "Google Drive",
              "Gmail",
              "Slack",
              "Discord",
              "Notion",
              "Database",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-violet-500" />

                  <span className="font-semibold">
                    {tool}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Connect Tool
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Browse Marketplace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create MCP Server
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Connected Services
          </h2>

          <div className="space-y-4">
            {[
              "GitHub",
              "Google",
              "Microsoft",
              "OpenAI",
              "Anthropic",
              "Supabase",
              "Firebase",
              "Custom API",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 p-4"
              >
                <span>
                  {item}
                </span>

                <span className="font-bold text-violet-500">
                  Ready
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Categories
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Productivity",
              "Development",
              "Business",
              "Marketing",
              "CRM",
              "Databases",
              "Finance",
              "Education",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Available Tools
          </h2>

          <div className="space-y-4">
            {[
              "REST API",
              "GraphQL",
              "SQL",
              "Vector DB",
              "Email",
              "Calendar",
              "Cloud Storage",
              "Web Search",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            MCP Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Connected Servers",
            "Installed Tools",
            "API Calls",
            "Active Sessions",
            "Marketplace Apps",
            "Connected Accounts",
            "Tool Permissions",
            "Running Workflows",
            "Memory Stores",
            "Knowledge Bases",
            "Custom Plugins",
            "Health Status",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Bot className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Memory & Knowledge Base
            </h2>

            <p className="mt-2 text-muted-foreground">
              Give your AI agents long-term memory with semantic search, vector storage and intelligent retrieval.
            </p>
          </div>

          <textarea
            placeholder="Describe the knowledge your AI should remember..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Save Memory
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Semantic Search
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Import Documents
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Memory Types
          </h2>

          <div className="space-y-4">
            {[
              "Short-Term",
              "Long-Term",
              "Conversation",
              "User Profile",
              "Knowledge Base",
              "Vector Memory",
              "Project Memory",
              "Shared Memory",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Knowledge Sources
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "PDF Documents",
              "Word Files",
              "Excel",
              "CSV",
              "Notion",
              "Google Drive",
              "GitHub",
              "Website URLs",
            ].map((source) => (
              <button
                key={source}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {source}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Retrieval Engine
          </h2>

          <div className="space-y-4">
            {[
              "Vector Search",
              "Semantic Search",
              "Keyword Search",
              "Hybrid Search",
              "Context Builder",
              "RAG Pipeline",
              "Memory Ranking",
              "Citation Engine",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Memory Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Knowledge Files",
            "Memory Entries",
            "Vector Indexes",
            "Embeddings",
            "Collections",
            "Semantic Searches",
            "RAG Queries",
            "Context Size",
            "Knowledge Graph",
            "Memory Sync",
            "Recall Accuracy",
            "Storage Usage",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Workflow Automation
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design intelligent workflows that combine AI reasoning, automation and business logic.
            </p>
          </div>

          <textarea
            placeholder="Describe your automation workflow..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Build Workflow
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Run Workflow
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Template
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Workflow Nodes
          </h2>

          <div className="space-y-4">
            {[
              "Trigger",
              "AI Decision",
              "Condition",
              "Loop",
              "Delay",
              "Webhook",
              "Database",
              "Notification",
            ].map((node) => (
              <button
                key={node}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {node}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Automation Actions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Send Email",
              "Send SMS",
              "WhatsApp",
              "Slack Message",
              "GitHub Action",
              "Create File",
              "Run Script",
              "HTTP Request",
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Workflow Features
          </h2>

          <div className="space-y-4">
            {[
              "Drag & Drop",
              "Scheduler",
              "Parallel Tasks",
              "Retry Logic",
              "Error Handler",
              "Execution History",
              "Variables",
              "Secrets Manager",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Workflow Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Active Workflows",
            "Completed Runs",
            "Failed Runs",
            "Triggers",
            "Schedules",
            "Webhooks",
            "Automation Hours",
            "Connected Apps",
            "Execution Queue",
            "Variables",
            "AI Decisions",
            "Success Rate",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Activity className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Business AI Workforce
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build an AI-powered workforce where specialized business agents collaborate to run your organization.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "CEO Agent",
              "Finance Agent",
              "Marketing Agent",
              "Sales Agent",
              "HR Agent",
              "Legal Agent",
              "Customer Support",
              "Operations Agent",
            ].map((agent) => (
              <button
                key={agent}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-violet-500" />

                  <span className="font-semibold">
                    {agent}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Create Workforce
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Assign Tasks
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Start Collaboration
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Departments
          </h2>

          <div className="space-y-4">
            {[
              "Management",
              "Finance",
              "Marketing",
              "Sales",
              "Support",
              "Human Resources",
              "Legal",
              "IT",
            ].map((dept) => (
              <button
                key={dept}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Business Tasks
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Financial Reports",
              "Lead Generation",
              "Customer Emails",
              "Payroll",
              "Hiring",
              "Invoices",
              "Analytics",
              "Business Planning",
            ].map((task) => (
              <button
                key={task}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {task}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Agent Collaboration
          </h2>

          <div className="space-y-4">
            {[
              "Shared Workspace",
              "Task Delegation",
              "Approval Workflow",
              "Decision Engine",
              "Meeting Summary",
              "Business Memory",
              "Knowledge Sharing",
              "Performance Reports",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Workforce Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Active Agents",
            "Departments",
            "Open Tasks",
            "Completed Tasks",
            "Business Reports",
            "Meetings",
            "Revenue Insights",
            "Support Tickets",
            "Sales Pipeline",
            "Marketing Campaigns",
            "Employee Requests",
            "AI Productivity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Users className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Deep Research Engine
            </h2>

            <p className="mt-2 text-muted-foreground">
              Research the web, documents and knowledge bases to generate enterprise-grade reports.
            </p>
          </div>

          <textarea
            placeholder="Describe the research topic..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Start Research
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Report
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export PDF
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Research Sources
          </h2>

          <div className="space-y-4">
            {[
              "Web Search",
              "PDF Files",
              "Academic Papers",
              "News",
              "Books",
              "GitHub",
              "Knowledge Base",
              "Custom Sources",
            ].map((source) => (
              <button
                key={source}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {source}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Research Modules
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Competitor Analysis",
              "Market Research",
              "Trend Analysis",
              "Financial Research",
              "Technical Research",
              "Patent Search",
              "Literature Review",
              "Risk Assessment",
            ].map((module) => (
              <button
                key={module}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {module}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Analysis
          </h2>

          <div className="space-y-4">
            {[
              "Summarization",
              "Fact Checking",
              "Citation Generator",
              "Source Ranking",
              "Timeline Builder",
              "Gap Analysis",
              "Recommendation Engine",
              "Executive Summary",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Research Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Research Jobs",
            "Sources Analyzed",
            "PDFs",
            "Web Pages",
            "News Articles",
            "Academic Papers",
            "Reports",
            "Citations",
            "Insights",
            "Recommendations",
            "Confidence Score",
            "Research Time",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Communication Hub
            </h2>

            <p className="mt-2 text-muted-foreground">
              Let AI agents communicate through email, messaging, meetings and voice conversations.
            </p>
          </div>

          <textarea
            placeholder="Describe your communication workflow..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Start Communication
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Meeting
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Compose Email
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Communication Channels
          </h2>

          <div className="space-y-4">
            {[
              "Gmail",
              "WhatsApp",
              "Telegram",
              "Slack",
              "Discord",
              "Microsoft Teams",
              "Zoom",
              "Google Meet",
            ].map((channel) => (
              <button
                key={channel}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {channel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Communication Tasks
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Send Email",
              "Reply Email",
              "Send WhatsApp",
              "Schedule Meeting",
              "Meeting Reminder",
              "Voice Call",
              "SMS",
              "Broadcast Message",
            ].map((task) => (
              <button
                key={task}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {task}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Assistant Features
          </h2>

          <div className="space-y-4">
            {[
              "Email Summaries",
              "Auto Replies",
              "Meeting Notes",
              "Live Translation",
              "Speech to Text",
              "Text to Speech",
              "Conversation Memory",
              "Follow-up Reminders",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Communication Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Emails Sent",
            "Messages",
            "Meetings",
            "Voice Calls",
            "Calendar Events",
            "Notifications",
            "Pending Replies",
            "Unread Messages",
            "Contacts",
            "AI Drafts",
            "Scheduled Tasks",
            "Communication Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Activity className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Enterprise AI Command Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Monitor every AI agent, workflow and automation from one centralized dashboard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Live Agent Monitor",
              "Workflow Queue",
              "Task Manager",
              "System Health",
              "Security Center",
              "Usage Analytics",
              "Audit Logs",
              "Cost Dashboard",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-violet-500" />

                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Open Dashboard
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Logs
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              System Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Live Status
          </h2>

          <div className="space-y-4">
            {[
              ["Running Agents", "12"],
              ["Queued Tasks", "34"],
              ["Completed Jobs", "285"],
              ["Failed Jobs", "2"],
              ["CPU Usage", "31%"],
              ["Memory", "4.8 GB"],
              ["GPU Usage", "27%"],
              ["System Health", "Excellent"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-xl border border-white/10 p-4"
              >
                <span>{item[0]}</span>

                <span className="font-bold text-violet-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Monitoring
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Agent Activity",
              "Execution Timeline",
              "Resource Usage",
              "API Requests",
              "Response Time",
              "Database Activity",
              "Tool Usage",
              "Workflow Analytics",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Enterprise Controls
          </h2>

          <div className="space-y-4">
            {[
              "Pause All Agents",
              "Resume Operations",
              "Emergency Stop",
              "Restart Queue",
              "Permission Manager",
              "Security Alerts",
              "Compliance Reports",
              "Backup & Restore",
            ].map((control) => (
              <button
                key={control}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {control}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Enterprise Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Active Agents",
            "Running Workflows",
            "Task Queue",
            "Completed Jobs",
            "System Uptime",
            "CPU Load",
            "GPU Load",
            "Memory Usage",
            "Storage",
            "API Calls",
            "Monthly Cost",
            "Overall Health",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Activity className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Install pre-built AI agents, workflows and automation templates with one click.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search marketplace..."
            className="w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Customer Support Agent",
              "Sales Automation",
              "Research Assistant",
              "Coding Assistant",
              "Marketing AI",
              "Finance Manager",
              "HR Assistant",
              "Legal Assistant",
            ].map((agent) => (
              <div
                key={agent}
                className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <Bot className="mb-4 h-8 w-8 text-violet-500" />

                <h3 className="font-bold">
                  {agent}
                </h3>

                <button className="mt-5 rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white">
                  Install
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Categories
          </h2>

          <div className="space-y-4">
            {[
              "Business",
              "Coding",
              "Marketing",
              "Finance",
              "Education",
              "Healthcare",
              "Research",
              "Productivity",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Featured Templates
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "CRM Workflow",
              "Invoice Automation",
              "Social Media Scheduler",
              "Lead Generator",
              "Project Manager",
              "Recruitment Pipeline",
              "Customer Onboarding",
              "Data Analysis",
            ].map((template) => (
              <button
                key={template}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Features
          </h2>

          <div className="space-y-4">
            {[
              "One Click Install",
              "Ratings & Reviews",
              "Version History",
              "Automatic Updates",
              "Verified Templates",
              "Premium Content",
              "Community Sharing",
              "Developer Console",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Marketplace Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Installed Agents",
            "Templates",
            "Marketplace Apps",
            "Downloads",
            "Updates",
            "Favorites",
            "Community Agents",
            "Premium Assets",
            "Reviews",
            "Publishers",
            "Collections",
            "Marketplace Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Bot className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Voice & Vision Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Enable agents to understand speech, images, videos and live camera feeds.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Voice Conversation",
              "Speech to Speech",
              "Speech to Text",
              "Text to Speech",
              "Vision Analysis",
              "Camera Agent",
              "OCR Reader",
              "Screen Understanding",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Brain className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Start Voice Agent
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Camera
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Analyze Screen
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Vision Features
          </h2>

          <div className="space-y-4">
            {[
              "Image Understanding",
              "Face Detection",
              "Emotion Analysis",
              "Object Detection",
              "QR Reader",
              "Barcode Reader",
              "Document Scanner",
              "Scene Analysis",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Multimodal Intelligence
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Live Camera",
              "Live Microphone",
              "Video Analysis",
              "Audio Analysis",
              "OCR Translation",
              "Image Captioning",
              "Meeting Transcription",
              "Real-time Assistant",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Capabilities
          </h2>

          <div className="space-y-4">
            {[
              "Live Translation",
              "Speaker Recognition",
              "Voice Cloning",
              "Screen OCR",
              "Visual Memory",
              "Gesture Detection",
              "Context Awareness",
              "Realtime Reasoning",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Multimodal Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Voice Sessions",
            "Camera Sessions",
            "Images Processed",
            "Videos Analyzed",
            "OCR Jobs",
            "Translations",
            "Speech Requests",
            "Vision Requests",
            "Detected Objects",
            "Recognized Faces",
            "Audio Minutes",
            "Realtime Streams",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Enterprise AI Security Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Secure AI agents with enterprise-grade governance, permissions, auditing and compliance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Role Manager",
              "Permission Control",
              "Secrets Vault",
              "API Key Manager",
              "Identity Provider",
              "Audit Center",
              "Compliance",
              "Threat Monitor",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Bot className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Open Security Center
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Security Scan
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Audit
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Security Modules
          </h2>

          <div className="space-y-4">
            {[
              "RBAC",
              "SSO",
              "OAuth",
              "MFA",
              "Encryption",
              "Secrets Manager",
              "Key Rotation",
              "Access Policies",
            ].map((module) => (
              <button
                key={module}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {module}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Compliance Center
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "ISO 27001",
              "SOC 2",
              "GDPR",
              "HIPAA",
              "PCI DSS",
              "NIST",
              "OWASP",
              "Custom Policies",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Monitoring
          </h2>

          <div className="space-y-4">
            {[
              "Audit Logs",
              "Threat Detection",
              "Access History",
              "Login Events",
              "Permission Changes",
              "Security Alerts",
              "Backup Status",
              "Recovery Center",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Security Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Users",
            "Roles",
            "Permissions",
            "Secrets",
            "API Keys",
            "Audit Logs",
            "Security Alerts",
            "Threat Score",
            "Compliance",
            "Backups",
            "Recovery Points",
            "System Trust",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Bot className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Analytics & Insights Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Measure AI performance, productivity, cost efficiency and business impact across every agent.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Agent Analytics",
              "Workflow Analytics",
              "Business KPIs",
              "Cost Analytics",
              "Token Usage",
              "Performance Trends",
              "Executive Reports",
              "AI Recommendations",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Activity className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Generate Report
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Dashboard
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Business Insights
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Analytics Modules
          </h2>

          <div className="space-y-4">
            {[
              "Live Metrics",
              "Historical Trends",
              "Forecasting",
              "AI Score",
              "ROI",
              "Efficiency",
              "Utilization",
              "Growth",
            ].map((module) => (
              <button
                key={module}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {module}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Performance Metrics
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Tasks Completed",
              "Execution Time",
              "Success Rate",
              "AI Accuracy",
              "Workflow Speed",
              "Cost Per Task",
              "Resource Usage",
              "Customer Satisfaction",
            ].map((metric) => (
              <button
                key={metric}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {metric}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Business Intelligence
          </h2>

          <div className="space-y-4">
            {[
              "Executive Dashboard",
              "Department Reports",
              "AI Predictions",
              "Trend Detection",
              "Risk Analysis",
              "Profit Insights",
              "Recommendation Engine",
              "BI Export",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Analytics Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Daily Tasks",
            "Monthly Jobs",
            "Token Usage",
            "Execution Time",
            "Cost Savings",
            "Revenue Impact",
            "Productivity",
            "AI Accuracy",
            "Success Rate",
            "Business KPIs",
            "Predictions",
            "Overall Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Activity className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Operating System
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage your entire AI workspace from one intelligent operating dashboard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Desktop",
              "Workspace Manager",
              "Window Manager",
              "Task Manager",
              "Notification Center",
              "Quick Launch",
              "Universal Search",
              "System Settings",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Brain className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Launch AI OS
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Workspace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Customize Desktop
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Desktop Widgets
          </h2>

          <div className="space-y-4">
            {[
              "Calendar",
              "Weather",
              "Tasks",
              "Notifications",
              "Recent Files",
              "Quick Notes",
              "Agent Status",
              "Activity Feed",
            ].map((widget) => (
              <button
                key={widget}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {widget}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Workspace Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Multiple Workspaces",
              "Pinned Projects",
              "Virtual Desktop",
              "Dock",
              "Floating Windows",
              "Split View",
              "Workspace Backup",
              "Session Restore",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            System Controls
          </h2>

          <div className="space-y-4">
            {[
              "Quick Actions",
              "Recent Projects",
              "Running Agents",
              "Task Queue",
              "Memory Usage",
              "Storage Manager",
              "System Health",
              "Power Center",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            AI OS Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Active Windows",
            "Running Agents",
            "Open Workspaces",
            "Pinned Apps",
            "Notifications",
            "Tasks Today",
            "Recent Files",
            "Quick Launch",
            "Desktop Widgets",
            "Memory Usage",
            "CPU Usage",
            "System Status",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Developer SDK & API Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build integrations, extensions and custom applications using the Market AI platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Agent SDK",
              "Plugin SDK",
              "REST API",
              "GraphQL API",
              "Webhook Manager",
              "API Playground",
              "Extension Builder",
              "Developer Console",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Bot className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Create API Key
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Playground
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Publish Extension
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Developer Tools
          </h2>

          <div className="space-y-4">
            {[
              "API Explorer",
              "Swagger",
              "OpenAPI",
              "Webhook Logs",
              "SDK Downloads",
              "CLI",
              "Code Samples",
              "Sandbox",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Integration Library
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "JavaScript SDK",
              "TypeScript SDK",
              "Python SDK",
              "Go SDK",
              "Java SDK",
              "C# SDK",
              "PHP SDK",
              "Flutter SDK",
            ].map((sdk) => (
              <button
                key={sdk}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {sdk}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            API Management
          </h2>

          <div className="space-y-4">
            {[
              "API Keys",
              "Rate Limits",
              "Usage Analytics",
              "OAuth Clients",
              "Webhook Events",
              "Version Manager",
              "Error Logs",
              "Developer Support",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Developer Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "API Requests",
            "Active Keys",
            "SDK Downloads",
            "Extensions",
            "Plugins",
            "Webhooks",
            "REST APIs",
            "GraphQL APIs",
            "Sandbox Projects",
            "Usage Today",
            "Error Rate",
            "Developer Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Bot className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Cloud Infrastructure Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Deploy, monitor and manage AI infrastructure across multiple cloud providers from one dashboard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AWS",
              "Microsoft Azure",
              "Google Cloud",
              "Cloudflare",
              "Vercel",
              "Netlify",
              "Railway",
              "Render",
            ].map((provider) => (
              <button
                key={provider}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Brain className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {provider}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Deploy Infrastructure
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Monitor Cloud
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Scaling Policy
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Cloud Services
          </h2>

          <div className="space-y-4">
            {[
              "Virtual Machines",
              "Containers",
              "Kubernetes",
              "Serverless",
              "Storage",
              "Databases",
              "Networking",
              "Monitoring",
            ].map((service) => (
              <button
                key={service}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Infrastructure Modules
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Docker",
              "Docker Compose",
              "Kubernetes",
              "Helm",
              "Terraform",
              "CI/CD",
              "Auto Scaling",
              "Load Balancer",
            ].map((module) => (
              <button
                key={module}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {module}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Infrastructure Features
          </h2>

          <div className="space-y-4">
            {[
              "Edge Computing",
              "CDN",
              "Global Regions",
              "Backups",
              "Disaster Recovery",
              "Auto Healing",
              "Metrics",
              "Alert Manager",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Infrastructure Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Cloud Providers",
            "Deployments",
            "Containers",
            "Kubernetes Clusters",
            "Virtual Machines",
            "Serverless Functions",
            "Storage Usage",
            "Bandwidth",
            "Auto Scaling",
            "Monitoring",
            "Global Regions",
            "Infrastructure Health",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Collaboration Hub
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with teammates and AI agents in shared workspaces with real-time communication.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Shared Workspace",
              "Team Chat",
              "Shared Notes",
              "Whiteboard",
              "Meeting Room",
              "Activity Feed",
              "File Sharing",
              "Task Board",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Users className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Create Workspace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Invite Members
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Start Meeting
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Spaces
          </h2>

          <div className="space-y-4">
            {[
              "Engineering",
              "Marketing",
              "Sales",
              "Finance",
              "Research",
              "Support",
              "Design",
              "Management",
            ].map((team) => (
              <button
                key={team}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {team}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Collaboration Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Real-time Editing",
              "Comments",
              "Mentions",
              "Approvals",
              "Kanban Board",
              "Calendar",
              "Timeline",
              "Project Dashboard",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Collaboration Tools
          </h2>

          <div className="space-y-4">
            {[
              "Video Meeting",
              "Voice Call",
              "Screen Sharing",
              "Live Cursor",
              "Version History",
              "Notifications",
              "File Sync",
              "Presence Status",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Collaboration Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Active Users",
            "Online Agents",
            "Projects",
            "Tasks",
            "Meetings",
            "Messages",
            "Files Shared",
            "Comments",
            "Notifications",
            "Approvals",
            "Workspaces",
            "Productivity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Users className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Command Palette
            </h2>

            <p className="mt-2 text-muted-foreground">
              Search everything, execute commands and launch AI actions instantly from one universal interface.
            </p>
          </div>

          <input
            type="text"
            placeholder="Type a command... (Ctrl + K)"
            className="w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Launch Agent",
              "Create Workflow",
              "Open Marketplace",
              "Deploy Project",
              "Generate Report",
              "Analyze Repository",
              "Search Knowledge",
              "Create API Key",
            ].map((command) => (
              <button
                key={command}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                <Brain className="mb-3 h-6 w-6 text-violet-500" />

                <div className="font-semibold">
                  {command}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Execute Command
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Recent Commands
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Favorites
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Search Scope
          </h2>

          <div className="space-y-4">
            {[
              "Agents",
              "Projects",
              "Files",
              "Knowledge Base",
              "Workflows",
              "Marketplace",
              "Settings",
              "Documentation",
            ].map((scope) => (
              <button
                key={scope}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {scope}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Smart Suggestions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Open Recent Project",
              "Resume Workflow",
              "Deploy Latest Build",
              "Generate Documentation",
              "Analyze Logs",
              "Optimize Costs",
              "Run Security Scan",
              "Start Research",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Productivity
          </h2>

          <div className="space-y-4">
            {[
              "Keyboard Shortcuts",
              "Pinned Commands",
              "Quick Launcher",
              "Natural Language",
              "History",
              "Macros",
              "Saved Searches",
              "Custom Commands",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-violet-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Command Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Searches",
            "Commands",
            "Favorites",
            "History",
            "Pinned Actions",
            "Quick Launches",
            "Shortcuts",
            "Suggestions",
            "Resources",
            "Global Search",
            "Execution Time",
            "Productivity Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-violet-500"
            >
              <Brain className="mx-auto mb-3 h-7 w-7 text-violet-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-indigo-500/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Market AI Agent Operating System
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Build autonomous AI workforces capable of research,
              coding, planning, communication, automation,
              deployment and enterprise decision making.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-bold text-white">
              Launch AI OS
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "AI Agents",
            value: "250+",
          },
          {
            title: "Automation Templates",
            value: "500+",
          },
          {
            title: "Connected Tools",
            value: "1000+",
          },
          {
            title: "Enterprise Workflows",
            value: "200+",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-violet-500">
              {card.value}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black">
            Global AI Network
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Connect intelligent agents, enterprise systems,
            cloud infrastructure and automation platforms
            from one unified workspace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Research Network",
            "Business Network",
            "Developer Network",
            "Marketing Network",
            "Sales Network",
            "Support Network",
            "Finance Network",
            "Operations Network",
            "Security Network",
            "Cloud Network",
            "Knowledge Network",
            "Communication Network",
            "Workflow Network",
            "Automation Network",
            "Analytics Network",
            "AI Marketplace",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold transition hover:border-violet-500 hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-indigo-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Market AI Enterprise Platform
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          A complete enterprise AI operating platform for autonomous
          agents, workflow automation, deep research,
          cloud infrastructure, collaboration,
          deployment and intelligent business operations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-5 text-lg font-bold text-white">
            Launch Agent Studio
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
