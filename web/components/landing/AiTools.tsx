"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles, TrendingUp, Star, ArrowRight, Compass } from "lucide-react";

interface AiTool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  isTrending?: boolean;
  isNew?: boolean;
  rating: number;
  users: string;
  route: string;
}

const ALL_TOOLS: AiTool[] = [
  {
    id: "code-studio",
    name: "AI Code Studio",
    category: "Development",
    description: "Build full-stack applications, websites, and APIs using AI assistance.",
    icon: "💻",
    isTrending: true,
    rating: 4.9,
    users: "45.2K",
    route: "/studio/code",
  },
  {
    id: "image-studio",
    name: "AI Image Studio",
    category: "Design",
    description: "Generate and edit professional AI visuals, portraits, and product graphics.",
    icon: "🎨",
    isNew: true,
    rating: 4.8,
    users: "62.1K",
    route: "/studio/image",
  },
  {
    id: "video-studio",
    name: "AI Video Studio",
    category: "Video",
    description: "Create cinematic videos, avatars, and social media reels instantly.",
    icon: "🎬",
    isTrending: true,
    rating: 4.9,
    users: "38.9K",
    route: "/studio/video",
  },
  {
    id: "song-generator",
    name: "AI Song Studio",
    category: "Audio",
    description: "Compose original tracks, generate lyrics, and clone realistic voices.",
    icon: "🎵",
    isNew: true,
    rating: 4.7,
    users: "29.4K",
    route: "/studio/song",
  },
  {
    id: "agent-studio",
    name: "AI Agent Studio",
    category: "Automation",
    description: "Deploy autonomous multi-agent workflows to handle complex background tasks.",
    icon: "🤖",
    isTrending: true,
    rating: 4.9,
    users: "51.0K",
    route: "/studio/agent",
  },
  {
    id: "assistant-studio",
    name: "AI Assistant Studio",
    category: "Productivity",
    description: "Context-aware conversational assistant integrated directly with your workspace.",
    icon: "⚡",
    rating: 4.8,
    users: "89.3K",
    route: "/studio/assistant",
  },
  {
    id: "website-builder",
    name: "AI Website Builder",
    category: "Development",
    description: "Launch fully responsive, high-converting websites using simple text prompts.",
    icon: "🌐",
    isNew: true,
    rating: 4.9,
    users: "41.5K",
    route: "/studio/website",
  },
  {
    id: "chat-studio",
    name: "AI Chat Studio",
    category: "Productivity",
    description: "Multi-model chat interface supporting top-tier LLMs with real-time web browsing.",
    icon: "💬",
    rating: 4.8,
    users: "95.6K",
    route: "/studio/chat",
  },
];

const CATEGORIES = ["All", "Development", "Design", "Video", "Audio", "Automation", "Productivity"];

export default function AiTools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"all" | "trending" | "new">("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredTools = useMemo(() => {
    return ALL_TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;

      const matchesTab =
        activeTab === "all" ||
        (activeTab === "trending" && tool.isTrending) ||
        (activeTab === "new" && tool.isNew);

      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [searchQuery, selectedCategory, activeTab]);

  return (
    <section className="space-y-8 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            Marketplace Ecosystem
          </div>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Explore 1300+ AI Engines & Tools
          </h2>
          <p className="mt-2 text-muted-foreground">
            Professional-grade studios designed to streamline your entire digital creation workflow.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "all" ? "bg-cyan-600 text-white shadow-lg" : "hover:bg-white/5 text-muted-foreground"
            }`}
          >
            All Tools ({ALL_TOOLS.length})
          </button>
          <button
            onClick={() => setActiveTab("trending")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "trending" ? "bg-cyan-600 text-white shadow-lg" : "hover:bg-white/5 text-muted-foreground"
            }`}
          >
            <TrendingUp className="h-4 w-4" /> Trending
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "new" ? "bg-cyan-600 text-white shadow-lg" : "hover:bg-white/5 text-muted-foreground"
            }`}
          >
            <Compass className="h-4 w-4" /> New
          </button>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search studios, agents, tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-background py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Categories Carousel / List */}
        <div className="flex w-full overflow-x-auto gap-2 pb-2 lg:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                selectedCategory === cat
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                  : "border-white/10 bg-white/5 hover:bg-white/10 text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredTools.map((tool) => {
          const isFav = favorites.includes(tool.id);
          return (
            <a
              key={tool.id}
              href={tool.route}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-background/50 text-2xl shadow-inner">
                    {tool.icon}
                  </div>
                  <button
                    onClick={(e) => toggleFavorite(tool.id, e)}
                    className={`rounded-xl border p-2.5 transition ${
                      isFav
                        ? "border-amber-500 bg-amber-500/20 text-amber-400"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    <Star className={`h-4 w-4 ${isFav ? "fill-amber-400" : ""}`} />
                  </button>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold tracking-wider text-cyan-400 uppercase">
                      {tool.category}
                    </span>
                    {tool.isTrending && (
                      <span className="rounded-md bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-400">
                        Trending
                      </span>
                    )}
                    {tool.isNew && (
                      <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-black tracking-tight group-hover:text-cyan-400 transition">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-amber-400" /> {tool.rating}
                  </span>
                  <span>•</span>
                  <span>{tool.users} users</span>
                </div>
                <div className="flex items-center gap-1 text-cyan-400 group-hover:translate-x-1 transition">
                  <span>Launch</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-lg font-bold text-muted-foreground">No AI tools found matching your criteria.</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setActiveTab("all"); }}
            className="mt-4 rounded-xl bg-cyan-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
