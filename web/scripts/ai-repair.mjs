import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const maxCycles = Number(process.env.AI_REPAIR_ATTEMPTS || "20");
const model = process.env.OPENAI_MODEL || "gpt-4.1";
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) throw new Error("OPENAI_API_KEY is not configured.");

function run(command, args, options = {}) {
  try {
    return { code: 0, output: execFileSync(command, args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options }) };
  } catch (error) {
    return { code: error.status ?? 1, output: `${error.stdout ?? ""}\n${error.stderr ?? ""}` };
  }
}

function safeRead(path, limit = 30000) {
  try {
    const text = readFileSync(path, "utf8");
    return text.length > limit ? `${text.slice(0, limit)}\n...[truncated]` : text;
  } catch {
    return "";
  }
}

function repositoryContext(buildLog = "") {
  const tracked = run("git", ["ls-files", "web"]).output.slice(-60000);
  const status = run("git", ["status", "--short"]).output;
  const packageJson = safeRead(join(root, "package.json"), 20000);
  const registry = safeRead(join(root, "lib", "tools", "registry.ts"), 40000);
  const types = safeRead(join(root, "lib", "tools", "types.ts"), 20000);
  const files = [];
  const errorPaths = [...buildLog.matchAll(/(?:^|[\\/\s])((?:web[\\/])?(?:app|lib|components|scripts)[\\/][^:\s)]+\.(?:ts|tsx|js|mjs|json|css))/gm)].map((m) => m[1]);
  for (const file of [...new Set(errorPaths)].slice(0, 12)) {
    const absolute = file.startsWith("web/") ? join(root, file.slice(4)) : join(root, file);
    if (existsSync(absolute)) files.push(`\n===== ${file} =====\n${safeRead(absolute)}`);
  }
  return `TRACKED FILES:\n${tracked}\n\nGIT STATUS:\n${status}\n\nPACKAGE.JSON:\n${packageJson}\n\nTOOL REGISTRY:\n${registry}\n\nTOOL TYPES:\n${types}\n\nBUILD LOG:\n${buildLog.slice(-50000)}\n${files.join("\n")}`.slice(-160000);
}

async function askOpenAI(mode, context) {
  const prompt = mode === "repair"
    ? `You are the autonomous repair engineer for a real Next.js 14 + TypeScript production repository.\nFix the current build failure. Preserve existing architecture and functionality. Do not redesign the project. Do not modify GitHub workflow files. Do not add fake APIs, mocks, placeholder success, or simulated results. Do not disable TypeScript checks. Prefer the smallest correct fix. Return ONLY a unified git diff suitable for git apply. If no safe fix is possible from the context, return NO_SAFE_PATCH.\n\n${context}`
    : `You are the autonomous implementation engineer for a real Next.js 14 + TypeScript production repository called Market AI / Music AI. The mission is to make the existing website a real AI tools platform.\n\nThe repository already contains a tool registry/executor and a large catalog. Do NOT rewrite working architecture. Do NOT invent fake APIs, mocks, dummy buttons, placeholder success, simulated results, or claims of completion.\n\nChoose ONE highest-priority unfinished or PARTIAL non-GPU catalog capability that can be implemented with the existing architecture and available dependencies. Inspect the tracked file list and registry context. Prefer deterministic tools that need no external API, then existing AI-router-backed tools, then legitimate public APIs. Do not duplicate an existing tool. Do not touch ACE-Step/GPU infrastructure unless the selected tool genuinely requires it.\n\nImplement the selected tool end-to-end: registry metadata, real server execution/validation, API routing through the existing executor, and the existing tool UI pattern where required. Keep secrets server-side. Keep Next.js 14 server/client boundaries correct.\n\nReturn ONLY a unified git diff suitable for git apply. The patch must contain real implementation, not documentation. If there is no safe next tool to implement from the supplied context, return NO_NEXT_TOOL.\n\n${context}`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, input: prompt, max_output_tokens: 20000 }),
  });
  if (!response.ok) throw new Error(`OpenAI API ${response.status}: ${await response.text()}`);
  const data = await response.json();
  if (typeof data.output_text === "string") return data.output_text.trim();
  let text = "";
  for (const item of data.output ?? []) for (const part of item.content ?? []) if (part.type === "output_text") text += part.text ?? "";
  return text.trim();
}

async function applyAndPush(patch, label) {
  if (!patch.includes("diff --git")) return false;
  const clean = patch.slice(patch.indexOf("diff --git"));
  writeFileSync("/tmp/ai-repair.patch", clean);
  const check = run("git", ["apply", "--check", "/tmp/ai-repair.patch"]);
  if (check.code !== 0) {
    console.log("PATCH_CHECK=FAIL");
    console.log(check.output.slice(-8000));
    return false;
  }
  const applied = run("git", ["apply", "/tmp/ai-repair.patch"]);
  if (applied.code !== 0) return false;
  const diffCheck = run("git", ["diff", "--check"]);
  if (diffCheck.code !== 0) {
    run("git", ["reset", "--hard"]);
    console.log("DIFF_CHECK=FAIL; reverted patch.");
    return false;
  }
  if (!run("git", ["status", "--short"]).output.trim()) return false;
  run("git", ["config", "user.name", "github-actions[bot]"]);
  run("git", ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"]);
  run("git", ["add", "-A"]);
  const commit = run("git", ["commit", "-m", `${label} [skip ci]`]);
  if (commit.code !== 0) return false;
  const push = run("git", ["push", "origin", "HEAD"]);
  if (push.code !== 0) return false;
  return true;
}

let lastBuildLog = "";
let repairFailures = 0;
let implementationFailures = 0;

for (let cycle = 1; cycle <= maxCycles; cycle += 1) {
  console.log(`===== AUTONOMOUS PROJECT CYCLE ${cycle}/${maxCycles} =====`);

  const build = run("npm", ["run", "build"]);
  lastBuildLog = build.output;
  writeFileSync("/tmp/music-ai-build.log", build.output);

  if (build.code !== 0) {
    console.log("BUILD=FAIL; starting automatic repair.");
    const patch = await askOpenAI("repair", repositoryContext(build.output));
    if (patch === "NO_SAFE_PATCH") {
      repairFailures += 1;
      console.log(`NO_SAFE_PATCH; repair failure ${repairFailures}. Retrying with fresh diagnostics.`);
      continue;
    }
    if (!(await applyAndPush(patch, `fix: autonomous build repair cycle ${cycle}`))) {
      repairFailures += 1;
      console.log(`REPAIR_APPLY_OR_PUSH=FAIL; retrying. failure=${repairFailures}`);
      continue;
    }
    console.log("REPAIR=COMMITTED_AND_PUSHED; rebuilding in the same autonomous session.");
    continue;
  }

  console.log("BUILD=PASS; selecting the next unfinished real tool.");
  const patch = await askOpenAI("implement", repositoryContext(lastBuildLog));
  if (patch === "NO_NEXT_TOOL") {
    console.log("NO_NEXT_TOOL=REPORTED; performing one final build and ending cleanly.");
    break;
  }
  if (!(await applyAndPush(patch, `feat: autonomous tool implementation cycle ${cycle}`))) {
    implementationFailures += 1;
    console.log(`IMPLEMENTATION_PATCH_FAILED; retrying next cycle. failure=${implementationFailures}`);
    continue;
  }
  console.log("NEXT_TOOL=IMPLEMENTED_AND_PUSHED; continuing to the next cycle.");
}

const finalBuild = run("npm", ["run", "build"]);
writeFileSync("/tmp/music-ai-final-build.log", finalBuild.output);
if (finalBuild.code !== 0) {
  console.error("FINAL_BUILD=FAIL");
  console.error(finalBuild.output.slice(-12000));
  process.exit(1);
}
console.log("FINAL_BUILD=PASS");
console.log("AUTONOMOUS_PROJECT_EXECUTION=COMPLETE_FOR_THIS_SESSION");
