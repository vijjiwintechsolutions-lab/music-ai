"use client";

import { useState } from "react";

import {
  Bot,
  Send,
  Paperclip,
  Globe,
  Brain,
  Search,
} from "lucide-react";

const models = [
  "GPT-5",
  "Claude 4",
  "Gemini 3",
  "DeepSeek",
  "Grok",
];

export default function ChatStudio() {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState(models[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Chat Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Chat with multiple AI models, research, code, analyze files and browse the web.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-4">
        <div className="xl:col-span-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500">
                <Bot className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  AI Conversation
                </h2>

                <p className="text-muted-foreground">
                  Start chatting with your AI assistant.
                </p>
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-white/10 bg-background p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <Bot className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1 rounded-2xl bg-white/5 p-5">
                  Hello! How can I help you today?
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <div className="max-w-xl rounded-2xl bg-blue-600 p-5 text-white">
                  {message || "Type your message below..."}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 rounded-2xl border border-white/10 bg-background px-6 py-4 outline-none"
              />

              <button className="rounded-2xl border border-white/10 px-5 hover:bg-white/5">
                <Paperclip className="h-6 w-6" />
              </button>

              <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-white">
                <Send className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black">
                AI Model
              </h2>
            </div>

            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="mb-8 w-full rounded-xl border border-white/10 bg-background p-4"
            >
              {models.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="space-y-4">
              <button className="flex w-full items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5">
                <Brain className="h-5 w-5" />
                Deep Research
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5">
                <Search className="h-5 w-5" />
                AI Search
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white/5">
                <Globe className="h-5 w-5" />
                Web Browse
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black">
              Chat History
            </h2>

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-bold text-white">
              New Chat
            </button>
          </div>

          <input
            placeholder="Search chats..."
            className="mb-6 w-full rounded-xl border border-white/10 bg-background p-4 outline-none"
          />

          <div className="space-y-4">
            {[
              "AI Business Ideas",
              "Website Development",
              "Market Analysis",
              "Python Coding",
              "Logo Design",
              "Marketing Plan",
              "Music Generation",
              "Image Editing",
            ].map((chat) => (
              <button
                key={chat}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 text-left transition hover:border-blue-500 hover:bg-white/5"
              >
                <span className="truncate">
                  {chat}
                </span>

                <span className="text-xs text-muted-foreground">
                  Today
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="xl:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Conversation Folders
              </h2>

              <p className="mt-2 text-muted-foreground">
                Organize chats into folders.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "General",
              "Coding",
              "Business",
              "Marketing",
              "Research",
              "Design",
              "Personal",
              "Pinned",
            ].map((folder) => (
              <button
                key={folder}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {folder}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              File Upload Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Upload documents, PDFs, spreadsheets, images and code.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Paperclip className="mx-auto mb-6 h-16 w-16 text-blue-500" />

            <h3 className="text-xl font-bold">
              Drag & Drop Files
            </h3>

            <p className="mt-3 text-muted-foreground">
              Supports PDF, DOCX, TXT, XLSX, CSV, Images and ZIP.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Browse Files
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "PDF",
              "Word",
              "Excel",
              "CSV",
              "PowerPoint",
              "Images",
              "ZIP",
              "Source Code",
            ].map((item) => (
              <button
                key={item}
                className="rounded-xl border border-white/10 py-4 font-semibold hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Document Analysis
            </h2>

            <p className="mt-2 text-muted-foreground">
              Analyze files using AI.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Summarize Document",
              "Extract Key Points",
              "OCR Text Recognition",
              "Translate Document",
              "Grammar Correction",
              "Generate Report",
              "Extract Tables",
              "Find Important Data",
              "Question & Answer",
              "Generate Presentation",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-5 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Image Understanding
          </h2>

          <p className="mt-2 text-muted-foreground">
            Analyze photos, screenshots and scanned documents.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "OCR",
            "Object Detection",
            "Face Analysis",
            "Barcode Reader",
            "Receipt Scanner",
            "Chart Reader",
            "Table Extraction",
            "Image Captioning",
          ].map((item) => (
            <button
              key={item}
              className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Web Search
            </h2>

            <p className="mt-2 text-muted-foreground">
              Search the web with AI-powered understanding.
            </p>
          </div>

          <input
            placeholder="Search anything..."
            className="mb-6 w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
          />

          <button className="mb-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Search Internet
          </button>

          <div className="space-y-4">
            {[
              "Latest AI News",
              "Programming",
              "Business",
              "Science",
              "Technology",
              "Finance",
              "Medical",
              "Education",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Deep Research
              </h2>

              <p className="mt-2 text-muted-foreground">
                Multi-step AI reasoning and research workflow.
              </p>
            </div>

            <Brain className="h-8 w-8 text-blue-500" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Research Topic",
              "Collect Sources",
              "Analyze Evidence",
              "Compare Results",
              "Generate Report",
              "Fact Check",
              "Citations",
              "Executive Summary",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-bold">
                    Step {index + 1}
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
                    Ready
                  </span>
                </div>

                <p className="font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Citation Viewer
          </h2>

          <p className="mt-2 text-muted-foreground">
            View AI sources and references.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Academic Papers",
            "Government Sources",
            "Official Documentation",
            "Research Journals",
            "Trusted Websites",
            "Books",
            "News Articles",
            "Technical Reports",
          ].map((item) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-blue-500 hover:bg-white/5"
            >
              <span className="font-semibold">
                {item}
              </span>

              <span className="text-sm text-muted-foreground">
                Open
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Code Interpreter
            </h2>

            <p className="mt-2 text-muted-foreground">
              Execute Python, SQL, JavaScript and analyze data.
            </p>
          </div>

          <textarea
            placeholder="Write Python, SQL or JavaScript code..."
            className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-background p-6 font-mono outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Run Code
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Clear
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Save Notebook
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Languages
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Python",
              "SQL",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "JSON",
              "Markdown",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Output Console
            </h2>
          </div>

          <div className="min-h-[250px] rounded-2xl bg-black p-6 font-mono text-green-400">
{`>>> Ready...
Python 3.12
SQL Engine Ready
JavaScript Runtime Ready

Run code to see results...
`}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Developer Tools
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "SQL Runner",
              "HTML Preview",
              "Markdown",
              "JSON Formatter",
              "Regex Tester",
              "API Tester",
              "CSV Viewer",
              "Diff Viewer",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Agents
            </h2>

            <p className="mt-2 text-muted-foreground">
              Specialized AI assistants.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Coding Agent",
              "Research Agent",
              "Marketing Agent",
              "Business Agent",
              "Finance Agent",
              "Medical Agent",
              "Legal Assistant",
              "Education Tutor",
              "Travel Planner",
              "Content Writer",
            ].map((agent) => (
              <button
                key={agent}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {agent}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              MCP Tools
            </h2>

            <p className="mt-2 text-muted-foreground">
              External AI capabilities.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Filesystem",
              "GitHub",
              "Browser",
              "Database",
              "Google Drive",
              "Slack",
              "Notion",
              "Figma",
              "Email",
              "Terminal",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Automation Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Trigger AI workflows automatically.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Daily Reports",
              "Email Summary",
              "Web Monitoring",
              "Data Extraction",
              "News Alerts",
              "Market Tracking",
              "Scheduled Research",
              "Auto Translation",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Plugins Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Connect third-party tools and services.
            </p>
          </div>

          <Globe className="h-8 w-8 text-blue-500" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Google Workspace",
            "Microsoft 365",
            "GitHub",
            "Slack",
            "Discord",
            "Dropbox",
            "Notion",
            "Zapier",
            "Figma",
            "Jira",
            "Trello",
            "Airtable",
          ].map((plugin) => (
            <button
              key={plugin}
              className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              {plugin}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Voice Chat
            </h2>

            <p className="mt-2 text-muted-foreground">
              Talk naturally with AI.
            </p>
          </div>

          <div className="space-y-5">
            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-5 font-bold text-white">
              Start Voice Chat
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Stop Recording
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Voice Settings
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Speech to Text
            </h2>

            <p className="mt-2 text-muted-foreground">
              Convert audio into text instantly.
            </p>
          </div>

          <textarea
            placeholder="Speech transcript will appear here..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Transcribe Audio
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Text to Speech
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate realistic AI voices.
            </p>
          </div>

          <div className="space-y-5">
            <select className="w-full rounded-xl border border-white/10 bg-background p-4">
              <option>Male Voice</option>
              <option>Female Voice</option>
              <option>Professional</option>
              <option>Narrator</option>
              <option>Child</option>
            </select>

            <textarea
              placeholder="Enter text..."
              className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
            />

            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
              Generate Voice
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Live Translation
            </h2>

            <p className="mt-2 text-muted-foreground">
              Translate conversations in real time.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "English",
              "తెలుగు",
              "Hindi",
              "Tamil",
              "Kannada",
              "French",
              "German",
              "Japanese",
            ].map((lang) => (
              <button
                key={lang}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Meeting Assistant
            </h2>

            <p className="mt-2 text-muted-foreground">
              Record, summarize and extract action items.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Record Meeting",
              "Generate Summary",
              "Action Items",
              "Speaker Detection",
              "Meeting Minutes",
              "Export PDF",
              "Share Notes",
              "Archive Meeting",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                AI Model Marketplace
              </h2>

              <p className="mt-2 text-muted-foreground">
                Choose from 100+ AI models.
              </p>
            </div>

            <Brain className="h-8 w-8 text-blue-500" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "GPT-5",
              "Claude 4",
              "Gemini 3",
              "DeepSeek R2",
              "Grok 4",
              "Llama 4",
              "Mistral Large",
              "Qwen 3",
              "Command A",
              "Phi-4",
              "Perplexity Sonar",
              "OpenCoder",
            ].map((modelItem) => (
              <button
                key={modelItem}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {modelItem}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Favorites
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "GPT-5",
              "Claude 4",
              "Gemini 3",
              "DeepSeek",
              "Llama 4",
              "Qwen 3",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Model Comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-left">Model</th>
                  <th className="pb-4">Speed</th>
                  <th className="pb-4">Reasoning</th>
                  <th className="pb-4">Coding</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["GPT-5", "★★★★★", "★★★★★", "★★★★★"],
                  ["Claude 4", "★★★★☆", "★★★★★", "★★★★★"],
                  ["Gemini 3", "★★★★★", "★★★★☆", "★★★★☆"],
                  ["DeepSeek", "★★★★☆", "★★★★☆", "★★★★★"],
                  ["Llama 4", "★★★★☆", "★★★★☆", "★★★★☆"],
                ].map((item) => (
                  <tr
                    key={item[0]}
                    className="border-b border-white/5"
                  >
                    <td className="py-4 font-semibold">
                      {item[0]}
                    </td>

                    <td className="text-center">
                      {item[1]}
                    </td>

                    <td className="text-center">
                      {item[2]}
                    </td>

                    <td className="text-center">
                      {item[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Benchmarks
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Reasoning",
                value: "98%",
              },
              {
                title: "Coding",
                value: "99%",
              },
              {
                title: "Math",
                value: "97%",
              },
              {
                title: "Vision",
                value: "96%",
              },
              {
                title: "Speed",
                value: "95%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>
                    {item.title}
                  </span>

                  <span className="font-bold text-blue-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    style={{
                      width: item.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Memory
            </h2>

            <p className="mt-2 text-muted-foreground">
              Remember important conversations and preferences.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Personal Preferences",
              "Coding Style",
              "Business Information",
              "Favorite AI Models",
              "Language Settings",
              "Recent Conversations",
              "Saved Facts",
              "Pinned Memories",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Long-Term Memory
              </h2>

              <p className="mt-2 text-muted-foreground">
                Persistent AI knowledge across conversations.
              </p>
            </div>

            <Brain className="h-8 w-8 text-blue-500" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Projects",
              "Workflows",
              "Personal Notes",
              "Favorite Tools",
              "Business Goals",
              "Learning Progress",
              "Important Contacts",
              "Custom Settings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-5"
              >
                <h3 className="font-bold">
                  {item}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  AI remembers and organizes this information.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Saved Prompts
            </h2>

            <p className="mt-2 text-muted-foreground">
              Frequently used prompts.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Generate Business Plan",
              "Create Marketing Strategy",
              "Explain Code",
              "Summarize PDF",
              "Translate Document",
              "Generate SQL Query",
              "Create Presentation",
              "Write Blog Article",
            ].map((prompt) => (
              <button
                key={prompt}
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-blue-500 hover:bg-white/5"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Custom Instructions
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure how AI should respond.
            </p>
          </div>

          <textarea
            placeholder="Tell AI how you'd like it to respond..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Save Instructions
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Workspace Manager
            </h2>

            <p className="mt-2 text-muted-foreground">
              Organize AI projects and conversations.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Personal Workspace",
              "Development",
              "Marketing",
              "Business",
              "Research",
              "Education",
              "Clients",
              "Archive",
            ].map((workspace) => (
              <button
                key={workspace}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {workspace}
              </button>
            ))}
          </div>

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Create Workspace
          </button>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Team Collaboration
              </h2>

              <p className="mt-2 text-muted-foreground">
                Invite teammates and collaborate in real time.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                team: "Development Team",
                members: "12 Members",
              },
              {
                team: "Marketing Team",
                members: "8 Members",
              },
              {
                team: "Design Team",
                members: "5 Members",
              },
              {
                team: "Research Team",
                members: "10 Members",
              },
            ].map((team) => (
              <div
                key={team.team}
                className="rounded-2xl border border-white/10 p-5"
              >
                <h3 className="font-bold">
                  {team.team}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {team.members}
                </p>

                <button className="mt-5 rounded-xl border border-white/10 px-5 py-2 hover:bg-white/5">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Shared Chats
            </h2>

            <p className="mt-2 text-muted-foreground">
              Conversations shared with your team.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Website Planning",
              "Business Strategy",
              "Product Roadmap",
              "AI Research",
              "Marketing Campaign",
              "Technical Review",
              "Customer Support",
              "Weekly Report",
            ].map((chat) => (
              <button
                key={chat}
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-blue-500 hover:bg-white/5"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Activity Timeline
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recent workspace activity.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Workspace created",
              "New member joined",
              "Chat shared",
              "Document uploaded",
              "AI report generated",
              "Permissions updated",
              "Project archived",
              "Export completed",
            ].map((activity, index) => (
              <div
                key={activity}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
                  {index + 1}
                </div>

                <span>
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Writing Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate professional content with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Blog Writer",
              "Article Writer",
              "Story Writer",
              "Book Writer",
              "Essay Generator",
              "Script Writer",
              "Press Release",
              "Product Description",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Email Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create professional emails instantly.
            </p>
          </div>

          <textarea
            placeholder="Describe the email you want..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Email
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Formal
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Friendly
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Resume Builder
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Professional Resume",
              "ATS Resume",
              "CV Builder",
              "Cover Letter",
              "Portfolio",
              "LinkedIn Profile",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Social Media
            </h2>
          </div>

          <div className="grid gap-3">
            {[
              "Instagram",
              "Facebook",
              "LinkedIn",
              "Twitter/X",
              "Threads",
              "Pinterest",
              "TikTok",
              "YouTube",
            ].map((item) => (
              <button
                key={item}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Writing Templates
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Business Proposal",
              "Sales Letter",
              "Marketing Copy",
              "SEO Article",
              "Landing Page",
              "Newsletter",
              "Case Study",
              "White Paper",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Spreadsheet
            </h2>

            <p className="mt-2 text-muted-foreground">
              Analyze spreadsheets, formulas and datasets with AI.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Sales</th>
                  <th className="p-4 text-left">Profit</th>
                  <th className="p-4 text-left">Growth</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Laptop", "₹4,25,000", "₹96,000", "+18%"],
                  ["Phone", "₹2,18,000", "₹54,000", "+12%"],
                  ["Tablet", "₹98,000", "₹21,000", "+9%"],
                  ["Accessories", "₹1,56,000", "₹48,000", "+26%"],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-white/10"
                  >
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="p-4"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Analyze Sheet
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Generate Formula
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Clean Data
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              CSV Tools
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Import CSV",
              "Export CSV",
              "Merge Files",
              "Split Columns",
              "Remove Duplicates",
              "Sort Data",
              "Filter Rows",
              "Validate Data",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Business Intelligence
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI-powered business insights.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              ["Revenue", "₹8.9M"],
              ["Profit", "₹2.4M"],
              ["Customers", "18.2K"],
              ["Growth", "+21%"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-white/10 p-6 text-center"
              >
                <h3 className="text-4xl font-black">
                  {item[1]}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Analytics Dashboard
            </h2>

            <p className="mt-2 text-muted-foreground">
              Charts, KPIs and intelligent insights.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Revenue Forecast",
                value: "96%",
              },
              {
                title: "Customer Retention",
                value: "91%",
              },
              {
                title: "Conversion Rate",
                value: "84%",
              },
              {
                title: "Business Health",
                value: "98%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>
                    {item.title}
                  </span>

                  <span className="font-bold text-blue-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    style={{
                      width: item.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Presentation Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create professional presentations instantly.
            </p>
          </div>

          <textarea
            placeholder="Describe your presentation..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Presentation
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Generate Outline
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Speaker Notes
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Export
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "PowerPoint (.pptx)",
              "PDF",
              "Google Slides",
              "Keynote",
              "PNG Images",
              "HTML Slides",
              "Markdown",
              "Print Version",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Slide Templates
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Business",
              "Startup",
              "Education",
              "Technology",
              "Finance",
              "Medical",
              "Marketing",
              "Minimal",
            ].map((template) => (
              <button
                key={template}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Visual Builder
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Flowchart",
              "Mind Map",
              "Timeline",
              "Pie Chart",
              "Bar Chart",
              "Organization Chart",
              "Infographic",
              "Process Diagram",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Image Editor
            </h2>

            <p className="mt-2 text-muted-foreground">
              Edit images using advanced AI tools.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Paperclip className="mx-auto mb-6 h-16 w-16 text-blue-500" />

            <h3 className="text-xl font-bold">
              Upload an Image
            </h3>

            <p className="mt-3 text-muted-foreground">
              JPG, PNG, WEBP, SVG supported.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Browse Image
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Crop",
              "Resize",
              "Rotate",
              "Flip",
              "Adjust Colors",
              "Enhance",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Tools
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Background Removal",
              "Object Removal",
              "Image Upscaler",
              "Inpainting",
              "Outpainting",
              "Face Restore",
              "Colorize",
              "Sharpen",
              "Noise Removal",
              "Super Resolution",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Filters
            </h2>

            <p className="mt-2 text-muted-foreground">
              One-click artistic styles.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Photorealistic",
              "Anime",
              "Oil Painting",
              "Sketch",
              "Watercolor",
              "Pixel Art",
              "3D Render",
              "Cartoon",
            ].map((filter) => (
              <button
                key={filter}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Export Options
            </h2>

            <p className="mt-2 text-muted-foreground">
              Save edited images.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "PNG",
              "JPG",
              "WEBP",
              "SVG",
              "PDF",
              "TIFF",
              "PSD",
              "ZIP Package",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Analysis
            </h2>

            <p className="mt-2 text-muted-foreground">
              Analyze videos, detect scenes and extract insights.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Paperclip className="mx-auto mb-6 h-16 w-16 text-blue-500" />

            <h3 className="text-xl font-bold">
              Upload Video
            </h3>

            <p className="mt-3 text-muted-foreground">
              MP4, MOV, AVI, MKV, WEBM supported.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Browse Video
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Scene Detection",
              "Object Tracking",
              "Subtitle Generator",
              "OCR Video",
              "Face Detection",
              "Speech Analysis",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Processing
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Generate Captions",
              "Translate Subtitles",
              "Extract Audio",
              "Speaker Detection",
              "Emotion Analysis",
              "Keyword Detection",
              "Video Summary",
              "Highlight Clips",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Screen Recorder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Record your screen with AI assistance.
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
              Start Recording
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Pause Recording
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Stop Recording
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Save Recording
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Timeline Editor
            </h2>

            <p className="mt-2 text-muted-foreground">
              Edit scenes and subtitles.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Trim Video",
              "Split Scene",
              "Merge Clips",
              "Add Subtitle",
              "Adjust Speed",
              "Insert Transition",
              "Replace Audio",
              "Export Timeline",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Workflow Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design intelligent multi-step AI workflows.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "User Input",
              "Prompt Processing",
              "AI Reasoning",
              "External Tools",
              "Validation",
              "Final Response",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-white/10 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold">
                    {step}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Workflow stage
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Create Workflow
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Save Template
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Prompt Chains
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Research → Summary",
              "Idea → Article",
              "PDF → Report",
              "Image → Caption",
              "CSV → Dashboard",
              "Video → Summary",
              "Meeting → Minutes",
              "Email → Reply",
            ].map((chain) => (
              <button
                key={chain}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {chain}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Multi-Agent Orchestration
            </h2>

            <p className="mt-2 text-muted-foreground">
              Coordinate multiple AI agents on one task.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Planner Agent",
              "Research Agent",
              "Coding Agent",
              "Review Agent",
              "Vision Agent",
              "Writer Agent",
              "Math Agent",
              "QA Agent",
            ].map((agent) => (
              <button
                key={agent}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {agent}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Scheduled Jobs
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automate recurring AI tasks.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Daily Report",
              "Weekly Summary",
              "Email Digest",
              "Website Monitor",
              "News Collection",
              "Generate Invoice",
              "Backup Chats",
              "Monthly Analytics",
            ].map((job) => (
              <button
                key={job}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {job}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Knowledge Base
            </h2>

            <p className="mt-2 text-muted-foreground">
              Store and organize documents for AI retrieval.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Business Documents",
              "Technical Docs",
              "Research Papers",
              "Meeting Notes",
              "Product Manuals",
              "Policies",
              "Training Material",
              "Personal Notes",
            ].map((collection) => (
              <button
                key={collection}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {collection}
              </button>
            ))}
          </div>

          <button className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
            Create Collection
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Vector Database
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "OpenAI Embeddings",
              "Pinecone",
              "Weaviate",
              "Chroma",
              "Qdrant",
              "Milvus",
              "FAISS",
              "Supabase Vector",
            ].map((db) => (
              <button
                key={db}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {db}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              RAG Search
            </h2>

            <p className="mt-2 text-muted-foreground">
              Retrieval-Augmented Generation across your knowledge.
            </p>
          </div>

          <input
            placeholder="Search your knowledge base..."
            className="mb-6 w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
          />

          <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Search Documents
          </button>

          <div className="mt-6 space-y-4">
            {[
              "Semantic Search",
              "Hybrid Search",
              "Keyword Search",
              "Context Ranking",
              "Similarity Matching",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Embeddings Dashboard
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI indexing statistics.
            </p>
          </div>

          <div className="space-y-5">
            {[
              ["Indexed Files", "2,486"],
              ["Embeddings", "184K"],
              ["Collections", "42"],
              ["Search Accuracy", "98%"],
              ["Storage Used", "18 GB"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-blue-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI API Playground
            </h2>

            <p className="mt-2 text-muted-foreground">
              Test AI APIs, prompts and responses.
            </p>
          </div>

          <textarea
            placeholder="POST https://api.example.com/v1/chat"
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 font-mono outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Send Request
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Save Request
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Import cURL
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              REST Client
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "GET",
              "POST",
              "PUT",
              "PATCH",
              "DELETE",
              "HEAD",
              "OPTIONS",
              "GraphQL",
            ].map((method) => (
              <button
                key={method}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Webhooks
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure incoming and outgoing webhooks.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Incoming Webhook",
              "Outgoing Webhook",
              "Webhook Logs",
              "Retry Queue",
              "Webhook Tester",
              "Payload Viewer",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              SDK Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate client SDKs for your APIs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "TypeScript",
              "JavaScript",
              "Python",
              "Java",
              "Go",
              "C#",
              "PHP",
              "Rust",
            ].map((sdk) => (
              <button
                key={sdk}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {sdk}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold">
              API Keys
            </h3>

            <div className="space-y-4">
              {[
                "OpenAI API",
                "Anthropic API",
                "Google AI",
                "DeepSeek API",
              ].map((key) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
                >
                  <span>{key}</span>

                  <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5">
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Security Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Protect your AI workspace.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Security Overview",
              "Threat Detection",
              "Data Protection",
              "Session Manager",
              "Trusted Devices",
              "Security Alerts",
              "Compliance",
              "Privacy Controls",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Authentication
            </h2>

            <p className="mt-2 text-muted-foreground">
              Secure login options.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Password",
              "Passkeys",
              "Two-Factor Authentication",
              "Authenticator App",
              "Security Keys",
              "Single Sign-On",
              "Biometric Login",
              "Recovery Codes",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              User Roles
            </h2>

            <p className="mt-2 text-muted-foreground">
              Access permissions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Owner",
              "Administrator",
              "Manager",
              "Editor",
              "Contributor",
              "Viewer",
            ].map((role) => (
              <button
                key={role}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Audit Logs
            </h2>

            <p className="mt-2 text-muted-foreground">
              Track all account activities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "User Login",
              "Password Changed",
              "Document Uploaded",
              "API Key Created",
              "Workflow Executed",
              "Workspace Shared",
              "Permissions Updated",
              "Backup Created",
            ].map((log, index) => (
              <div
                key={log}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
                  {index + 1}
                </div>

                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Backup & Restore
            </h2>

            <p className="mt-2 text-muted-foreground">
              Protect your data with automatic backups.
            </p>
          </div>

          <div className="space-y-5">
            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
              Create Backup
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Restore Backup
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Download Backup
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Backup History
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Encryption Settings
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Billing Dashboard
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage your AI subscription.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-6 text-center">
              <h3 className="text-5xl font-black">
                Pro
              </h3>

              <p className="mt-2 text-muted-foreground">
                Current Plan
              </p>
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
              Upgrade Plan
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Billing History
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Download Invoice
            </button>
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Subscription Plans
            </h2>

            <p className="mt-2 text-muted-foreground">
              Compare available plans.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Free",
                price: "₹0",
                features: ["Basic Chat", "Limited Models", "1 GB Storage"],
              },
              {
                name: "Pro",
                price: "₹999",
                features: ["All Models", "50 GB Storage", "Priority AI"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited", "Team Workspace", "Dedicated Support"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-2xl font-black">
                  {plan.name}
                </h3>

                <p className="my-5 text-4xl font-bold">
                  {plan.price}
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-lg bg-white/5 p-3"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Usage
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current usage statistics.
            </p>
          </div>

          <div className="space-y-5">
            {[
              ["Tokens Used", "8.4M"],
              ["Images Generated", "2,486"],
              ["Videos Created", "418"],
              ["Voice Minutes", "62h"],
              ["Documents", "18,024"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>{item[0]}</span>

                <span className="font-bold text-blue-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Token Analytics
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI consumption overview.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Prompt Tokens",
                value: "94%",
              },
              {
                title: "Completion Tokens",
                value: "81%",
              },
              {
                title: "Vision Tokens",
                value: "62%",
              },
              {
                title: "Audio Tokens",
                value: "48%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>{item.title}</span>

                  <span className="font-bold text-blue-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    style={{
                      width: item.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Notifications Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Stay updated with important events.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Workflow Completed",
              "AI Response Ready",
              "Document Processed",
              "Image Generated",
              "Video Rendered",
              "Team Invitation",
              "Security Alert",
              "Billing Reminder",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                AI Inbox
              </h2>

              <p className="mt-2 text-muted-foreground">
                Messages, AI tasks and pending actions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Research report completed",
              "Presentation generated",
              "Document summarized",
              "Translation finished",
              "Workflow executed",
              "API request completed",
              "Spreadsheet analyzed",
              "Meeting summary available",
            ].map((message) => (
              <div
                key={message}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span className="font-semibold">
                  {message}
                </span>

                <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Smart Alerts
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI-powered notifications and reminders.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "High Priority",
              "Daily Summary",
              "Scheduled Workflow",
              "Storage Warning",
              "API Limit",
              "Security Recommendation",
              "Model Update",
              "New Plugin Available",
            ].map((alert) => (
              <button
                key={alert}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {alert}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Global Search
            </h2>

            <p className="mt-2 text-muted-foreground">
              Search across chats, files, workflows and projects.
            </p>
          </div>

          <input
            placeholder="Search everything..."
            className="mb-6 w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Chats",
              "Files",
              "Projects",
              "Workspaces",
              "AI Models",
              "Images",
              "Videos",
              "Documents",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Settings Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure your AI workspace.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "General",
              "Account",
              "Privacy",
              "Notifications",
              "Security",
              "Billing",
              "Storage",
              "Advanced",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Appearance
            </h2>

            <p className="mt-2 text-muted-foreground">
              Personalize the interface.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Light Theme",
              "Dark Theme",
              "System Theme",
              "Blue Theme",
              "Green Theme",
              "Purple Theme",
            ].map((theme) => (
              <button
                key={theme}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Language
            </h2>

            <p className="mt-2 text-muted-foreground">
              Select your preferred language.
            </p>
          </div>

          <select className="w-full rounded-2xl border border-white/10 bg-background p-4">
            <option>English</option>
            <option>తెలుగు</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Kannada</option>
            <option>French</option>
            <option>German</option>
            <option>Japanese</option>
          </select>

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            Save Language
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Accessibility
            </h2>

            <p className="mt-2 text-muted-foreground">
              Improve usability for everyone.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "High Contrast",
              "Large Text",
              "Reduce Motion",
              "Screen Reader",
              "Keyboard Navigation",
              "Voice Commands",
              "Captions",
              "Focus Mode",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Keyboard Shortcuts
            </h2>

            <p className="mt-2 text-muted-foreground">
              Boost productivity with shortcuts.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["Ctrl + Enter", "Send Message"],
              ["Ctrl + K", "Global Search"],
              ["Ctrl + N", "New Chat"],
              ["Ctrl + S", "Save"],
              ["Ctrl + /", "AI Assistant"],
              ["Ctrl + Shift + P", "Command Palette"],
              ["Ctrl + B", "Toggle Sidebar"],
              ["Esc", "Close Dialog"],
            ].map(([key, action]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
              >
                <kbd className="rounded-lg bg-black/30 px-3 py-2 font-mono text-sm">
                  {key}
                </kbd>

                <span className="text-muted-foreground">
                  {action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Admin Dashboard
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage your AI platform.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "User Management",
              "Workspace Control",
              "Permissions",
              "Subscriptions",
              "Storage",
              "Audit Center",
              "Announcements",
              "Maintenance",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                System Health
              </h2>

              <p className="mt-2 text-muted-foreground">
                Monitor platform services.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["API", "99.99%"],
              ["Database", "Healthy"],
              ["Storage", "82%"],
              ["Queue", "Normal"],
              ["GPU", "Online"],
              ["Workers", "64"],
              ["Latency", "42 ms"],
              ["Errors", "0.02%"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-white/10 p-5 text-center"
              >
                <h3 className="text-2xl font-black text-blue-500">
                  {item[1]}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Model Status
            </h2>

            <p className="mt-2 text-muted-foreground">
              Live availability of AI providers.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["GPT-5", "Online"],
              ["Claude 4", "Online"],
              ["Gemini 3", "Online"],
              ["DeepSeek", "Online"],
              ["Llama 4", "Maintenance"],
              ["Grok", "Online"],
              ["Mistral", "Online"],
              ["Qwen", "Online"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
              >
                <span className="font-semibold">
                  {item[0]}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    item[1] === "Online"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-orange-500/10 text-orange-400"
                  }`}
                >
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Diagnostics & Logs
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recent system diagnostics.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "API started successfully",
              "Worker restarted",
              "Database backup completed",
              "AI model synchronized",
              "Cache refreshed",
              "Security scan completed",
              "Storage optimized",
              "No critical issues detected",
            ].map((log, index) => (
              <div
                key={log}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
                  {index + 1}
                </div>

                <span>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-4">
        <div className="xl:col-span-3 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">
                AI Command Center
              </h2>

              <p className="mt-2 text-lg text-muted-foreground">
                Launch every AI capability from one place.
              </p>
            </div>

            <Brain className="h-10 w-10 text-blue-500" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "New Chat",
              "Generate Image",
              "Create Video",
              "Clone Voice",
              "Deep Research",
              "Upload Files",
              "Run Workflow",
              "API Playground",
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 font-bold transition hover:border-blue-500 hover:bg-white/10"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Favorites
          </h2>

          <div className="space-y-4">
            {[
              "GPT-5",
              "AI Chat",
              "Image Studio",
              "Research",
              "Code Runner",
              "Voice Clone",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Recent Projects
            </h2>

            <p className="mt-2 text-muted-foreground">
              Continue your latest work.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "AI Business Plan",
              "Music Generation",
              "Marketing Campaign",
              "Website Builder",
              "Presentation Design",
              "Research Report",
              "Voice Clone Project",
              "Video Production",
            ].map((project) => (
              <div
                key={project}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span className="font-semibold">
                  {project}
                </span>

                <button className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Platform Statistics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Overall AI platform usage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              ["Chats", "48,320"],
              ["Images", "9,218"],
              ["Videos", "812"],
              ["Voice Jobs", "1,483"],
              ["Research", "2,917"],
              ["Documents", "14,862"],
              ["Workflows", "783"],
              ["Projects", "1,092"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-white/10 p-6 text-center"
              >
                <h3 className="text-3xl font-black text-blue-500">
                  {item[1]}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Complete AI Platform
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              One unified workspace for AI Chat, Deep Research, Code Interpreter,
              Image Generation, Video Creation, Voice AI, Knowledge Base,
              Workflows, Automation, Team Collaboration and Enterprise AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Start AI Chat
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Explore Features
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "100+ AI Models",
            value: "Available",
          },
          {
            title: "Documents Supported",
            value: "50+ Formats",
          },
          {
            title: "AI Tools",
            value: "1,300+",
          },
          {
            title: "Enterprise Ready",
            value: "24/7",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-3xl font-black text-blue-500">
              {item.value}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black">
            Everything You Need In One AI Platform
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Built for creators, developers, businesses and enterprise teams.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "AI Chat",
            "Research",
            "Image AI",
            "Video AI",
            "Voice AI",
            "Code Interpreter",
            "Knowledge Base",
            "Automation",
            "Workflows",
            "API Playground",
            "Team Workspace",
            "Analytics",
            "Security",
            "Billing",
            "Notifications",
            "Global Search",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold hover:bg-white/5"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-cyan-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Market AI Platform
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          A complete all-in-one AI ecosystem featuring chat, coding, image
          generation, video production, music creation, voice cloning,
          research, workflows, enterprise collaboration, automation,
          analytics, APIs and intelligent assistants in a single platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 text-lg font-bold text-white">
            Launch Platform
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
