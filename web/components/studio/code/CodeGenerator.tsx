"use client";

import { useState } from "react";

import {
  Code2,
  Wand2,
  Play,
  Download,
  Terminal,
  FolderTree,
} from "lucide-react";

const languages = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "Rust",
  "PHP",
];

export default function CodeGenerator() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState(languages[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Code Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate complete applications, websites and software using AI.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Prompt to Code
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your application..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              <Wand2 className="mr-2 inline h-5 w-5" />
              Generate Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              <Play className="mr-2 inline h-5 w-5" />
              Live Preview
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Language
          </h2>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-background p-4"
          >
            {languages.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <Code2 className="mx-auto mb-4 h-16 w-16 text-blue-500" />

            <p className="font-semibold">
              AI Coding Ready
            </p>
          </div>

          <button className="mt-8 w-full rounded-2xl border border-white/10 py-4 hover:bg-white/5">
            <Terminal className="mr-2 inline h-5 w-5" />
            Open Terminal
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Project Explorer
          </h2>

          <div className="space-y-4">
            {[
              "src/",
              "components/",
              "app/",
              "public/",
              "package.json",
              "tsconfig.json",
              ".env",
              "README.md",
            ].map((file) => (
              <div
                key={file}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
              >
                <FolderTree className="h-5 w-5 text-blue-500" />

                <span>{file}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Quick Actions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Generate API",
              "Fix Bugs",
              "Refactor",
              "Optimize",
              "Explain Code",
              "Write Tests",
              "Generate Docs",
              "Export ZIP",
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {action}
              </button>
            ))}
          </div>

          <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white">
            <Download className="mr-2 inline h-5 w-5" />
            Export Project
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI File Explorer
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate complete multi-file applications with one prompt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-background p-6">
            <div className="space-y-3">
              {[
                "app/",
                "components/",
                "hooks/",
                "lib/",
                "types/",
                "styles/",
                "public/",
                "package.json",
                "README.md",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
                >
                  <FolderTree className="h-5 w-5 text-blue-500" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Files
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Add Folder
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Sync Project
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Project Size
          </h2>

          <div className="space-y-4">
            {[
              "Landing Page",
              "Dashboard",
              "Blog",
              "Portfolio",
              "E-Commerce",
              "SaaS",
              "CRM",
              "Enterprise",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Full Stack Templates
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Next.js",
              "React",
              "Vue",
              "Angular",
              "Svelte",
              "Nuxt",
              "Remix",
              "Astro",
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
          <h2 className="mb-8 text-2xl font-black">
            Starter Kits
          </h2>

          <div className="space-y-4">
            {[
              "Admin Dashboard",
              "AI SaaS",
              "Marketplace",
              "Social Media",
              "Blog CMS",
              "Learning Platform",
              "Chat App",
              "FinTech",
            ].map((kit) => (
              <button
                key={kit}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {kit}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Frontend Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate responsive interfaces, reusable components and modern UI instantly.
            </p>
          </div>

          <textarea
            placeholder="Describe the UI you want to build..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate UI
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Layout
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Component
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            UI Frameworks
          </h2>

          <div className="space-y-4">
            {[
              "React",
              "Next.js",
              "Vue",
              "Angular",
              "Svelte",
              "SolidJS",
              "Preact",
              "HTML",
            ].map((framework) => (
              <button
                key={framework}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {framework}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Styling Options
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Tailwind CSS",
              "CSS Modules",
              "SCSS",
              "Styled Components",
              "Emotion",
              "Bootstrap",
              "Material UI",
              "Chakra UI",
            ].map((style) => (
              <button
                key={style}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Component Generator
          </h2>

          <div className="space-y-4">
            {[
              "Navbar",
              "Hero Section",
              "Dashboard",
              "Pricing Cards",
              "Login Form",
              "Data Table",
              "Charts",
              "Dark Mode",
            ].map((component) => (
              <button
                key={component}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {component}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Responsive & Animation Tools
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Mobile First",
            "Tablet Layout",
            "Desktop Layout",
            "Dark Theme",
            "Light Theme",
            "Framer Motion",
            "GSAP",
            "Shadcn UI",
            "Magic UI",
            "Aceternity UI",
            "21st.dev",
            "Accessibility",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Backend Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate scalable backend services, REST APIs, GraphQL servers and authentication systems.
            </p>
          </div>

          <textarea
            placeholder="Describe your backend or API..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Backend
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate API
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Swagger
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Backend Frameworks
          </h2>

          <div className="space-y-4">
            {[
              "Node.js",
              "Express",
              "NestJS",
              "FastAPI",
              "Django",
              "Laravel",
              "Spring Boot",
              "ASP.NET Core",
            ].map((framework) => (
              <button
                key={framework}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {framework}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            API Generator
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "REST API",
              "GraphQL",
              "WebSocket",
              "gRPC",
              "Authentication",
              "Authorization",
              "File Upload",
              "Notifications",
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Backend Features
          </h2>

          <div className="space-y-4">
            {[
              "JWT Authentication",
              "OAuth Login",
              "Email Service",
              "Queue System",
              "Cron Jobs",
              "Rate Limiting",
              "Caching",
              "Microservices",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Dev Server & API Tools
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Swagger UI",
            "OpenAPI",
            "API Testing",
            "Postman Collection",
            "Environment Variables",
            "Health Check",
            "Logging",
            "Monitoring",
            "Docker Ready",
            "CI/CD",
            "API Versioning",
            "Webhooks",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Database Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design schemas, generate SQL, create migrations and manage modern databases with AI.
            </p>
          </div>

          <textarea
            placeholder="Describe your database structure..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Database
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate SQL
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              ER Diagram
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Database Engines
          </h2>

          <div className="space-y-4">
            {[
              "PostgreSQL",
              "MySQL",
              "MariaDB",
              "MongoDB",
              "SQLite",
              "Redis",
              "Firebase",
              "Supabase",
            ].map((db) => (
              <button
                key={db}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {db}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            ORM & Database Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Prisma",
              "Drizzle ORM",
              "TypeORM",
              "Sequelize",
              "Mongoose",
              "Knex",
              "SQLAlchemy",
              "Entity Framework",
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
          <h2 className="mb-8 text-2xl font-black">
            AI Database Features
          </h2>

          <div className="space-y-4">
            {[
              "Schema Generator",
              "Migration Creator",
              "Seed Generator",
              "Relationships",
              "Indexes",
              "Views",
              "Stored Procedures",
              "Backup & Restore",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Database Operations
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "SELECT Builder",
            "INSERT Builder",
            "UPDATE Builder",
            "DELETE Builder",
            "JOIN Generator",
            "Aggregate Queries",
            "Transactions",
            "Triggers",
            "Performance Analyzer",
            "Query Optimizer",
            "Import CSV",
            "Export SQL",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Mobile App Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build Android, iOS and cross-platform apps from a single prompt.
            </p>
          </div>

          <textarea
            placeholder="Describe your mobile application..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate App
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Live Preview
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Build APK
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Frameworks
          </h2>

          <div className="space-y-4">
            {[
              "Flutter",
              "React Native",
              "Expo",
              "Android",
              "iOS",
              "Capacitor",
              "Ionic",
              "PWA",
            ].map((framework) => (
              <button
                key={framework}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {framework}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            App Templates
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "E-Commerce",
              "Food Delivery",
              "Taxi Booking",
              "Banking",
              "Chat",
              "Social Media",
              "Education",
              "Healthcare",
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
          <h2 className="mb-8 text-2xl font-black">
            Mobile Features
          </h2>

          <div className="space-y-4">
            {[
              "Push Notifications",
              "Authentication",
              "Camera",
              "GPS Location",
              "Offline Mode",
              "Biometrics",
              "QR Scanner",
              "Cloud Sync",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Mobile Build Tools
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Android APK",
            "Android AAB",
            "iOS IPA",
            "Expo Build",
            "Firebase",
            "App Store",
            "Play Store",
            "OTA Updates",
            "Responsive Layout",
            "Dark Mode",
            "Tablet Support",
            "Performance Profiler",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI DevOps Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build, deploy and scale applications using modern DevOps pipelines.
            </p>
          </div>

          <textarea
            placeholder="Describe your deployment infrastructure..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Pipeline
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Dockerize
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Deploy
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Cloud Platforms
          </h2>

          <div className="space-y-4">
            {[
              "AWS",
              "Azure",
              "Google Cloud",
              "Vercel",
              "Netlify",
              "Cloudflare",
              "DigitalOcean",
              "Railway",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Container & CI/CD
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Docker",
              "Docker Compose",
              "Kubernetes",
              "GitHub Actions",
              "GitLab CI",
              "Jenkins",
              "Argo CD",
              "Helm",
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
          <h2 className="mb-8 text-2xl font-black">
            Deployment Features
          </h2>

          <div className="space-y-4">
            {[
              "Auto Deploy",
              "Blue/Green Deploy",
              "Canary Release",
              "Secrets Manager",
              "Environment Config",
              "Load Balancer",
              "Monitoring",
              "Rollback",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Infrastructure Tools
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Terraform",
            "Pulumi",
            "Ansible",
            "Nginx",
            "Apache",
            "Redis Cache",
            "RabbitMQ",
            "Kafka",
            "Prometheus",
            "Grafana",
            "Sentry",
            "OpenTelemetry",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Testing Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate automated tests, validate applications and improve software quality.
            </p>
          </div>

          <textarea
            placeholder="Describe what should be tested..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Tests
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Run Tests
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Coverage Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Testing Frameworks
          </h2>

          <div className="space-y-4">
            {[
              "Jest",
              "Vitest",
              "Mocha",
              "Cypress",
              "Playwright",
              "Puppeteer",
              "Selenium",
              "JUnit",
            ].map((framework) => (
              <button
                key={framework}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {framework}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Test Types
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Unit Tests",
              "Integration Tests",
              "End-to-End Tests",
              "API Tests",
              "UI Tests",
              "Accessibility Tests",
              "Performance Tests",
              "Security Tests",
            ].map((type) => (
              <button
                key={type}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Test Features
          </h2>

          <div className="space-y-4">
            {[
              "Mock Generator",
              "Edge Case Detection",
              "Snapshot Testing",
              "Regression Tests",
              "Bug Prediction",
              "Auto Assertions",
              "Coverage Analysis",
              "Failure Diagnostics",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Quality Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Code Coverage",
            "Test Pass Rate",
            "Failed Tests",
            "Bug Density",
            "Performance Score",
            "Security Score",
            "Accessibility Score",
            "Maintainability",
            "Lint Results",
            "Static Analysis",
            "Mutation Testing",
            "AI Suggestions",
          ].map((metric) => (
            <button
              key={metric}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              {metric}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Git Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage repositories, branches, pull requests and releases with AI assistance.
            </p>
          </div>

          <textarea
            placeholder="Describe your Git workflow..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Commit
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Branch
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Pull Request
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Git Providers
          </h2>

          <div className="space-y-4">
            {[
              "GitHub",
              "GitLab",
              "Bitbucket",
              "Azure DevOps",
              "Codeberg",
              "Gitea",
              "SourceHut",
              "Self Hosted",
            ].map((provider) => (
              <button
                key={provider}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {provider}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Repository Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Branch Manager",
              "Merge Conflicts",
              "Cherry Pick",
              "Rebase",
              "Squash Commits",
              "Stash",
              "Tag Releases",
              "Repository Sync",
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
          <h2 className="mb-8 text-2xl font-black">
            AI Git Assistant
          </h2>

          <div className="space-y-4">
            {[
              "Commit Message Generator",
              "PR Description",
              "Code Review",
              "Release Notes",
              "Changelog",
              "Issue Generator",
              "Branch Naming",
              "Repository Analysis",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Release Management
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Semantic Versioning",
            "Release Pipeline",
            "Git Flow",
            "GitHub Flow",
            "Conventional Commits",
            "Protected Branches",
            "Repository Insights",
            "Deploy Preview",
            "Hotfix",
            "Rollback",
            "Milestones",
            "Project Boards",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Security Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Scan your application for vulnerabilities, secrets and security issues using AI.
            </p>
          </div>

          <textarea
            placeholder="Describe your project or security audit..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Security Scan
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Dependency Audit
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Security Checks
          </h2>

          <div className="space-y-4">
            {[
              "Secrets Detection",
              "Dependency Audit",
              "OWASP Top 10",
              "SQL Injection",
              "XSS",
              "CSRF",
              "Authentication",
              "Authorization",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Vulnerabilities Scanner
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "SAST",
              "DAST",
              "Secret Scanner",
              "Container Scan",
              "License Checker",
              "SBOM",
              "Supply Chain",
              "Code Analysis",
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
          <h2 className="mb-8 text-2xl font-black">
            Security Reports
          </h2>

          <div className="space-y-4">
            {[
              "Critical Issues",
              "High Risk",
              "Medium Risk",
              "Low Risk",
              "Recommendations",
              "Fix Generator",
              "Compliance",
              "Audit History",
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

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Compliance & Protection
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "OWASP",
            "SOC 2",
            "ISO 27001",
            "GDPR",
            "PCI DSS",
            "HIPAA",
            "NIST",
            "CIS Benchmarks",
            "Secure Headers",
            "Encryption",
            "API Security",
            "Threat Modeling",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Coding Agents
            </h2>

            <p className="mt-2 text-muted-foreground">
              Autonomous AI agents that can build, debug, refactor and improve entire projects.
            </p>
          </div>

          <textarea
            placeholder="Describe the task for your AI agent..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Launch Agent
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Assign Task
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              View Progress
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Available Agents
          </h2>

          <div className="space-y-4">
            {[
              "Project Builder",
              "Bug Fixer",
              "Refactor Agent",
              "Security Agent",
              "Code Reviewer",
              "Testing Agent",
              "Documentation Agent",
              "Deployment Agent",
            ].map((agent) => (
              <button
                key={agent}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {agent}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Agent Capabilities
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Task Planning",
              "Multi-file Editing",
              "Dependency Updates",
              "Terminal Access",
              "Browser Automation",
              "API Integration",
              "Code Generation",
              "Debug Sessions",
            ].map((capability) => (
              <button
                key={capability}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {capability}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Workflow Automation
          </h2>

          <div className="space-y-4">
            {[
              "Analyze Project",
              "Create Plan",
              "Generate Files",
              "Run Tests",
              "Fix Errors",
              "Optimize Performance",
              "Commit Changes",
              "Deploy Application",
            ].map((step) => (
              <button
                key={step}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {step}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Live Agent Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Running Tasks",
            "Completed Jobs",
            "Files Modified",
            "Tests Passed",
            "Issues Fixed",
            "PRs Created",
            "Deployments",
            "Agent Memory",
            "Context Window",
            "Execution Queue",
            "Estimated Time",
            "Activity Log",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Terminal Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Execute commands, automate workflows and manage servers with AI.
            </p>
          </div>

          <textarea
            placeholder="Describe the command or terminal task..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 font-mono outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Execute Command
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Command
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Console
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Shells
          </h2>

          <div className="space-y-4">
            {[
              "Bash",
              "Zsh",
              "PowerShell",
              "CMD",
              "Fish",
              "WSL",
              "SSH",
              "Remote Terminal",
            ].map((shell) => (
              <button
                key={shell}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {shell}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Command Library
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Git Commands",
              "Docker CLI",
              "Kubernetes",
              "Node.js",
              "Python",
              "Linux",
              "Windows",
              "macOS",
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Remote Management
          </h2>

          <div className="space-y-4">
            {[
              "SSH Manager",
              "Docker Compose",
              "Kubernetes Cluster",
              "System Monitor",
              "Cron Jobs",
              "Environment Variables",
              "Logs",
              "Background Tasks",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Live Console Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Running Processes",
            "CPU Usage",
            "Memory Usage",
            "Disk Usage",
            "Network",
            "Command History",
            "Terminal Sessions",
            "Open Ports",
            "Service Status",
            "Docker Containers",
            "Kubernetes Pods",
            "Live Logs",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI API Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design, generate, document and test APIs with AI assistance.
            </p>
          </div>

          <textarea
            placeholder="Describe the API you want to build..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate API
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Mock Server
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Test Endpoints
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            API Types
          </h2>

          <div className="space-y-4">
            {[
              "REST API",
              "GraphQL",
              "WebSocket",
              "gRPC",
              "Webhook",
              "RPC",
              "SOAP",
              "Serverless API",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            API Builder
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "CRUD Generator",
              "Authentication",
              "Pagination",
              "Filtering",
              "Sorting",
              "Rate Limiting",
              "Validation",
              "Caching",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Documentation
          </h2>

          <div className="space-y-4">
            {[
              "OpenAPI",
              "Swagger UI",
              "SDK Generator",
              "Postman Collection",
              "Insomnia Export",
              "Markdown Docs",
              "Examples",
              "API Versioning",
            ].map((doc) => (
              <button
                key={doc}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {doc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            API Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Endpoints",
            "Requests/sec",
            "Latency",
            "Response Time",
            "Success Rate",
            "Errors",
            "API Keys",
            "OAuth Clients",
            "Webhooks",
            "SDK Downloads",
            "Mock Servers",
            "Usage Analytics",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Performance Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Analyze, benchmark and optimize your applications for maximum performance.
            </p>
          </div>

          <textarea
            placeholder="Describe your optimization goals..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Analyze Performance
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Optimize Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Analysis Tools
          </h2>

          <div className="space-y-4">
            {[
              "Lighthouse",
              "Bundle Analyzer",
              "CPU Profiler",
              "Memory Profiler",
              "Network Monitor",
              "Render Profiler",
              "Database Profiler",
              "AI Optimizer",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Optimization Engine
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Lazy Loading",
              "Code Splitting",
              "Tree Shaking",
              "Image Optimization",
              "Caching",
              "Compression",
              "SSR Optimization",
              "Edge Rendering",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Core Web Vitals
          </h2>

          <div className="space-y-4">
            {[
              "Largest Contentful Paint",
              "Interaction to Next Paint",
              "Cumulative Layout Shift",
              "Time to First Byte",
              "First Contentful Paint",
              "Speed Index",
              "Total Blocking Time",
              "Accessibility Score",
            ].map((metric) => (
              <button
                key={metric}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {metric}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Performance Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Performance Score",
            "SEO Score",
            "Best Practices",
            "Accessibility",
            "Bundle Size",
            "Memory Usage",
            "CPU Usage",
            "Network Requests",
            "Cache Hit Rate",
            "Render Time",
            "Database Speed",
            "Optimization Tips",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Documentation Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automatically generate documentation, architecture diagrams and developer guides.
            </p>
          </div>

          <textarea
            placeholder="Describe your project documentation..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Documentation
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              README
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export PDF
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Documentation Types
          </h2>

          <div className="space-y-4">
            {[
              "README",
              "API Docs",
              "Architecture",
              "User Guide",
              "Developer Guide",
              "Wiki",
              "Release Notes",
              "Changelog",
            ].map((doc) => (
              <button
                key={doc}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {doc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Diagram Generator
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Flowchart",
              "UML",
              "Sequence Diagram",
              "ER Diagram",
              "Architecture",
              "Mind Map",
              "Network Diagram",
              "Component Diagram",
            ].map((diagram) => (
              <button
                key={diagram}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {diagram}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Documentation Tools
          </h2>

          <div className="space-y-4">
            {[
              "Markdown",
              "Mermaid",
              "Swagger Docs",
              "JSDoc",
              "Typedoc",
              "Examples",
              "Code Snippets",
              "Version History",
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

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Documentation Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "README Score",
            "API Coverage",
            "Architecture Docs",
            "Examples",
            "Tutorials",
            "Developer Notes",
            "Release Notes",
            "Export Formats",
            "Markdown Files",
            "Diagram Count",
            "Documentation Health",
            "AI Suggestions",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Project Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate complete enterprise-grade applications from a single prompt.
            </p>
          </div>

          <textarea
            placeholder="Describe your full-stack application..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Build Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Architecture
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Blueprint
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Project Templates
          </h2>

          <div className="space-y-4">
            {[
              "SaaS Platform",
              "Marketplace",
              "CRM",
              "ERP",
              "CMS",
              "Learning Platform",
              "Healthcare",
              "AI Assistant",
            ].map((template) => (
              <button
                key={template}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Architecture Generator
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Monolith",
              "Microservices",
              "Serverless",
              "Event Driven",
              "CQRS",
              "DDD",
              "Hexagonal",
              "Clean Architecture",
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Enterprise Features
          </h2>

          <div className="space-y-4">
            {[
              "Authentication",
              "Role Management",
              "Notifications",
              "Payments",
              "Subscriptions",
              "Analytics",
              "Audit Logs",
              "Multi-Tenant",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Project Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Frontend",
            "Backend",
            "Database",
            "Authentication",
            "API Services",
            "Microservices",
            "Cloud Ready",
            "Docker",
            "Kubernetes",
            "Monitoring",
            "Testing",
            "Deployment",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Prompt Engineering Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design, optimize and manage prompts for LLMs, AI agents and automation workflows.
            </p>
          </div>

          <textarea
            placeholder="Describe the AI prompt you want to create..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Generate Prompt
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Optimize Prompt
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Test Prompt
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Prompt Types
          </h2>

          <div className="space-y-4">
            {[
              "System Prompt",
              "User Prompt",
              "Agent Prompt",
              "Developer Prompt",
              "Workflow Prompt",
              "Vision Prompt",
              "Voice Prompt",
              "Custom Prompt",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Prompt Templates
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Chain of Thought",
              "Few Shot",
              "Zero Shot",
              "RAG Template",
              "Tool Calling",
              "Function Calling",
              "JSON Output",
              "Structured Response",
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
          <h2 className="mb-8 text-2xl font-black">
            AI Optimization
          </h2>

          <div className="space-y-4">
            {[
              "Prompt Scoring",
              "Hallucination Check",
              "Context Optimizer",
              "Memory Injection",
              "Safety Review",
              "Prompt Versioning",
              "A/B Testing",
              "Evaluation Reports",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Prompt Library
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Coding",
            "Writing",
            "Marketing",
            "Education",
            "Research",
            "Customer Support",
            "Translation",
            "Summarization",
            "Data Analysis",
            "Image Generation",
            "Video Generation",
            "Prompt Collections",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Workspace Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with teams, manage projects and organize development workflows in one workspace.
            </p>
          </div>

          <textarea
            placeholder="Describe your workspace or project..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Create Workspace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Invite Team
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Share Project
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Workspace Types
          </h2>

          <div className="space-y-4">
            {[
              "Personal",
              "Startup",
              "Enterprise",
              "Open Source",
              "Freelancer",
              "Agency",
              "Education",
              "Community",
            ].map((workspace) => (
              <button
                key={workspace}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {workspace}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Collaboration Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Kanban Board",
              "Sprint Planning",
              "Tasks",
              "Milestones",
              "Roadmap",
              "Calendar",
              "Time Tracking",
              "Issue Tracker",
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
          <h2 className="mb-8 text-2xl font-black">
            Team Features
          </h2>

          <div className="space-y-4">
            {[
              "Shared Notes",
              "Whiteboard",
              "Live Chat",
              "Video Meeting",
              "Screen Sharing",
              "Activity Feed",
              "Permissions",
              "Notifications",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Workspace Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Projects",
            "Tasks",
            "Completed",
            "In Progress",
            "Blocked",
            "Pull Requests",
            "Deployments",
            "Active Members",
            "Comments",
            "Meetings",
            "Shared Files",
            "Workspace Analytics",
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

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Deployment & Publishing Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Deploy applications to production with one click across web, cloud and mobile platforms.
            </p>
          </div>

          <textarea
            placeholder="Describe your deployment target..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              One Click Deploy
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Deployment
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Rollback
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Deployment Targets
          </h2>

          <div className="space-y-4">
            {[
              "Vercel",
              "Netlify",
              "Cloudflare",
              "AWS",
              "Azure",
              "Google Cloud",
              "Railway",
              "Render",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Publishing Center
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "GitHub",
              "Docker Hub",
              "NPM",
              "PyPI",
              "Chrome Extension",
              "VS Code Extension",
              "App Store",
              "Google Play",
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Release Management
          </h2>

          <div className="space-y-4">
            {[
              "Semantic Versioning",
              "Release Notes",
              "Auto Changelog",
              "Blue-Green Deploy",
              "Canary Release",
              "Rollback",
              "Monitoring",
              "Health Checks",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-blue-500 hover:bg-white/5"
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
            Deployment Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Production",
            "Staging",
            "Development",
            "Preview",
            "Build Status",
            "Deploy Time",
            "Release History",
            "Rollback Points",
            "Traffic",
            "Uptime",
            "Logs",
            "Alerts",
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

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-500/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Complete AI Code Studio
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Build websites, mobile apps, enterprise software, APIs,
              cloud infrastructure and AI-powered applications from one
              intelligent development environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white">
              Create New Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Import Repository
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Programming Languages",
            value: "50+",
          },
          {
            title: "Frameworks",
            value: "200+",
          },
          {
            title: "AI Coding Tools",
            value: "300+",
          },
          {
            title: "Deployment Targets",
            value: "40+",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-blue-500">
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
            Export Center
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Export projects, publish repositories and deploy applications instantly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "ZIP",
            "GitHub",
            "GitLab",
            "Bitbucket",
            "Docker",
            "Docker Compose",
            "Kubernetes",
            "Vercel",
            "Netlify",
            "Cloudflare",
            "AWS",
            "Azure",
            "Google Cloud",
            "Android APK",
            "iOS IPA",
            "Desktop App",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Market AI Code Studio
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          A complete AI software engineering platform featuring intelligent
          coding agents, project generation, testing, DevOps, deployment,
          documentation, security scanning and enterprise-grade development
          workflows.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 text-lg font-bold text-white">
            Launch Code Studio
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
