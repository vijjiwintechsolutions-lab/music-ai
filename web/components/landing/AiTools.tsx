"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Crown,
  Database,
  Filter,
  Flame,
  Heart,
  Image as ImageIcon,
  LayoutGrid,
  ListFilter,
  Loader2,
  Menu,
  Mic2,
  Music2,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState, useEffect } from "react";

type ToolBadge =
  | "Popular"
  | "New"
  | "Pro"
  | "Free"
  | "Beta"
  | "Trending"
  | "AI"
  | "Enterprise";

type ToolPricing = "Free" | "Freemium" | "Pro" | "Enterprise";

type ToolCategory =
  | "Music"
  | "Voice"
  | "Video"
  | "Image"
  | "Code"
  | "Business"
  | "Marketing"
  | "Education"
  | "Productivity"
  | "Research"
  | "Audio"
  | "Design"
  | "Data"
  | "Automation";

type ToolSubCategory =
  | "Song Generation"
  | "Lyrics"
  | "Singing"
  | "Voice"
  | "Audio Editing"
  | "Music Production"
  | "Podcast"
  | "Video Generation"
  | "Video Editing"
  | "Avatar"
  | "Image Generation"
  | "Image Editing"
  | "Graphic Design"
  | "Website"
  | "Mobile"
  | "Backend"
  | "Developer"
  | "Analytics"
  | "SEO"
  | "Content"
  | "Learning"
  | "Writing"
  | "Research"
  | "Workflow"
  | "Database"
  | "Presentation";

type Tool = {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  subCategory: ToolSubCategory;
  badge: ToolBadge;
  pricing: ToolPricing;
  rating: number;
  users: number;
  thumbnail: string;
  route: string;
  featured?: boolean;
  trending?: boolean;
  isNew?: boolean;
  aiPowered?: boolean;
  provider?: string;
};

const tools: Tool[] = [
  {
    id: "ai-song-generator",
    title: "AI Song Generator",
    description: "Create complete original songs from a simple text prompt.",
    category: "Music",
    subCategory: "Song Generation",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 248000,
    thumbnail: "/tools/music/ai-song-generator.webp",
    route: "/studio/song",
    featured: true,
    trending: true,
    aiPowered: true,
    provider: "Market AI Music",
  },
  {
    id: "ai-lyrics",
    title: "AI Lyrics Generator",
    description: "Generate multilingual lyrics, verses, hooks and song structures.",
    category: "Music",
    subCategory: "Lyrics",
    badge: "New",
    pricing: "Free",
    rating: 4.8,
    users: 186000,
    thumbnail: "/tools/music/ai-lyrics.webp",
    route: "/studio/lyrics",
    featured: true,
    isNew: true,
    aiPowered: true,
    provider: "Market AI",
  },
  {
    id: "ai-singer",
    title: "AI Singer",
    description: "Transform lyrics and melodies into expressive AI singing vocals.",
    category: "Voice",
    subCategory: "Singing",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 142000,
    thumbnail: "/tools/voice/ai-singer.webp",
    route: "/studio/singer",
    featured: true,
    aiPowered: true,
    provider: "Market AI Voice",
  },
  {
    id: "voice-clone",
    title: "Voice Clone",
    description: "Create a synthetic voice from permitted voice recordings.",
    category: "Voice",
    subCategory: "Voice",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.8,
    users: 97000,
    thumbnail: "/tools/voice/voice-clone.webp",
    route: "/studio/voice",
    trending: true,
    aiPowered: true,
    provider: "Market AI Voice",
  },
  {
    id: "vocal-remover",
    title: "Vocal Remover",
    description: "Separate vocals and instrumental tracks from audio.",
    category: "Audio",
    subCategory: "Audio Editing",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 321000,
    thumbnail: "/tools/audio/vocal-remover.webp",
    route: "/tools/vocal-remover",
    trending: true,
    aiPowered: true,
    provider: "Market AI Audio",
  },
  {
    id: "music-video",
    title: "AI Music Video",
    description: "Turn your music into visually engaging AI-assisted videos.",
    category: "Video",
    subCategory: "Video Generation",
    badge: "Beta",
    pricing: "Freemium",
    rating: 4.7,
    users: 73000,
    thumbnail: "/tools/video/music-video.webp",
    route: "/tools/music-video",
    isNew: true,
    aiPowered: true,
    provider: "Market AI Video",
  },
  {
    id: "album-cover",
    title: "AI Album Cover",
    description: "Create professional album and single artwork from prompts.",
    category: "Design",
    subCategory: "Graphic Design",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 214000,
    thumbnail: "/tools/design/album-cover.webp",
    route: "/tools/album-cover",
    featured: true,
    aiPowered: true,
    provider: "Market AI Design",
  },
  {
    id: "beat-generator",
    title: "AI Beat Generator",
    description: "Generate original beats and instrumental ideas in seconds.",
    category: "Music",
    subCategory: "Music Production",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 119000,
    thumbnail: "/tools/music/beat-generator.webp",
    route: "/tools/beat-generator",
    isNew: true,
    aiPowered: true,
    provider: "Market AI Music",
  },
  {
    id: "background-music",
    title: "Background Music",
    description: "Generate royalty-friendly background music for your content.",
    category: "Music",
    subCategory: "Music Production",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 267000,
    thumbnail: "/tools/music/background-music.webp",
    route: "/tools/background-music",
    trending: true,
    aiPowered: true,
    provider: "Market AI Music",
  },
  {
    id: "podcast-studio",
    title: "AI Podcast Studio",
    description: "Plan, record, enhance and prepare podcasts with AI assistance.",
    category: "Audio",
    subCategory: "Podcast",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 82000,
    thumbnail: "/tools/audio/podcast-studio.webp",
    route: "/tools/podcast",
    aiPowered: true,
    provider: "Market AI Audio",
  },
  {
    id: "ai-mastering",
    title: "AI Mastering",
    description: "Enhance loudness, clarity and balance for finished tracks.",
    category: "Audio",
    subCategory: "Audio Editing",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.9,
    users: 104000,
    thumbnail: "/tools/audio/ai-mastering.webp",
    route: "/tools/mastering",
    featured: true,
    aiPowered: true,
    provider: "Market AI Audio",
  },
  {
    id: "sound-effects",
    title: "AI Sound Effects",
    description: "Generate custom sound effects from natural language prompts.",
    category: "Audio",
    subCategory: "Audio Editing",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 93000,
    thumbnail: "/tools/audio/sound-effects.webp",
    route: "/tools/sound-effects",
    isNew: true,
    aiPowered: true,
    provider: "Market AI Audio",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Create original images, artwork and visual concepts from text.",
    category: "Image",
    subCategory: "Image Generation",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 512000,
    thumbnail: "/tools/image/ai-image-generator.webp",
    route: "/tools/image-generator",
    featured: true,
    trending: true,
    aiPowered: true,
    provider: "Market AI Image",
  },
  {
    id: "image-editor",
    title: "AI Image Editor",
    description: "Edit, enhance and transform images with natural language.",
    category: "Image",
    subCategory: "Image Editing",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 294000,
    thumbnail: "/tools/image/image-editor.webp",
    route: "/tools/image-editor",
    aiPowered: true,
    provider: "Market AI Image",
  },
  {
    id: "background-remover",
    title: "Background Remover",
    description: "Remove image backgrounds quickly and prepare transparent assets.",
    category: "Image",
    subCategory: "Image Editing",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 388000,
    thumbnail: "/tools/image/background-remover.webp",
    route: "/tools/background-remover",
    trending: true,
    aiPowered: true,
    provider: "Market AI Image",
  },
  {
    id: "ai-video-generator",
    title: "AI Video Generator",
    description: "Create short-form videos from scripts, prompts and concepts.",
    category: "Video",
    subCategory: "Video Generation",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.8,
    users: 361000,
    thumbnail: "/tools/video/ai-video-generator.webp",
    route: "/tools/video-generator",
    featured: true,
    trending: true,
    aiPowered: true,
    provider: "Market AI Video",
  },
  {
    id: "talking-avatar",
    title: "Talking Avatar",
    description: "Create presenter videos with AI-generated talking characters.",
    category: "Video",
    subCategory: "Avatar",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 157000,
    thumbnail: "/tools/video/talking-avatar.webp",
    route: "/tools/talking-avatar",
    aiPowered: true,
    provider: "Market AI Video",
  },
  {
    id: "ai-code-generator",
    title: "AI Code Generator",
    description: "Generate production-ready code, components and application logic.",
    category: "Code",
    subCategory: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 475000,
    thumbnail: "/tools/code/ai-code-generator.webp",
    route: "/studio/code",
    featured: true,
    trending: true,
    aiPowered: true,
    provider: "Market AI Code",
  },
  {
    id: "website-builder",
    title: "AI Website Builder",
    description: "Turn an idea into a responsive website with AI assistance.",
    category: "Code",
    subCategory: "Website",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 329000,
    thumbnail: "/tools/code/website-builder.webp",
    route: "/tools/website-builder",
    featured: true,
    aiPowered: true,
    provider: "Market AI Code",
  },
  {
    id: "data-analyzer",
    title: "AI Data Analyzer",
    description: "Analyze datasets, identify patterns and generate reports.",
    category: "Data",
    subCategory: "Analytics",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 88000,
    thumbnail: "/tools/data/data-analyzer.webp",
    route: "/tools/data-analyzer",
    aiPowered: true,
    provider: "Market AI Data",
  },
  {
    id: "seo-writer",
    title: "AI SEO Writer",
    description: "Create search-optimized content, outlines and metadata.",
    category: "Marketing",
    subCategory: "SEO",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 246000,
    thumbnail: "/tools/marketing/seo-writer.webp",
    route: "/tools/seo-writer",
    trending: true,
    aiPowered: true,
    provider: "Market AI Marketing",
  },
  {
    id: "research-assistant",
    title: "AI Research Assistant",
    description: "Organize research, summarize sources and explore complex topics.",
    category: "Research",
    subCategory: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.9,
    users: 198000,
    thumbnail: "/tools/research/research-assistant.webp",
    route: "/tools/research",
    featured: true,
    aiPowered: true,
    provider: "Market AI Research",
  },
  {
    id: "workflow-automation",
    title: "AI Workflow Automation",
    description: "Design automated workflows connecting tasks, tools and services.",
    category: "Automation",
    subCategory: "Workflow",
    badge: "Enterprise",
    pricing: "Enterprise",
    rating: 4.8,
    users: 69000,
    thumbnail: "/tools/automation/workflow.webp",
    route: "/tools/automation",
    aiPowered: true,
    provider: "Market AI Automation",
  },
];

const categories: Array<{
  id: "All" | ToolCategory;
  label: string;
  icon: typeof LayoutGrid;
}> = [
  {
    id: "All",
    label: "All Tools",
    icon: LayoutGrid,
  },
  {
    id: "Music",
    label: "Music",
    icon: Music2,
  },
  {
    id: "Voice",
    label: "Voice",
    icon: Mic2,
  },
  {
    id: "Video",
    label: "Video",
    icon: Video,
  },
  {
    id: "Image",
    label: "Image",
    icon: ImageIcon,
  },
  {
    id: "Code",
    label: "Code",
    icon: Code2,
  },
  {
    id: "Business",
    label: "Business",
    icon: BarChart3,
  },
  {
    id: "Marketing",
    label: "Marketing",
    icon: TrendingUp,
  },
  {
    id: "Education",
    label: "Education",
    icon: Brain,
  },
  {
    id: "Research",
    label: "Research",
    icon: Search,
  },
  {
    id: "Automation",
    label: "Automation",
    icon: Zap,
  },
];

const sortOptions = [
  "Recommended",
  "Popular",
  "Newest",
  "Highest Rated",
  "Most Used",
];

const pricingOptions = [
  "All Pricing",
  "Free",
  "Freemium",
  "Pro",
  "Enterprise",
];

const badgeStyles: Record<ToolBadge, string> = {
  Popular: "bg-orange-500/15 text-orange-300 border-orange-400/20",
  New: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
  Pro: "bg-violet-500/15 text-violet-300 border-violet-400/20",
  Free: "bg-cyan-500/15 text-cyan-300 border-cyan-400/20",
  Beta: "bg-amber-500/15 text-amber-300 border-amber-400/20",
  Trending: "bg-rose-500/15 text-rose-300 border-rose-400/20",
  AI: "bg-blue-500/15 text-blue-300 border-blue-400/20",
  Enterprise: "bg-indigo-500/15 text-indigo-300 border-indigo-400/20",
};

function getToolIcon(category: ToolCategory) {
  switch (category) {
    case "Music":
      return Music2;
    case "Voice":
      return Mic2;
    case "Video":
      return Video;
    case "Image":
      return ImageIcon;
    case "Code":
      return Code2;
    case "Business":
      return BarChart3;
    case "Marketing":
      return TrendingUp;
    case "Education":
      return Brain;
    case "Research":
      return Search;
    case "Data":
      return Database;
    case "Automation":
      return Zap;
    case "Audio":
      return Mic2;
    case "Design":
      return Wand2;
    case "Productivity":
      return Check;
    default:
      return Bot;
  }
}

export default function AiTools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ToolCategory
  >("All");
  const [selectedPricing, setSelectedPricing] =
    useState("All Pricing");
  const [selectedSort, setSelectedSort] =
    useState("Recommended");
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<"All" | ToolSubCategory>("All");
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeToolId, setActiveToolId] = useState<string | null>(null);

  const toolsPerPage = viewMode === "grid" ? 12 : 16;

  const availableSubCategories = useMemo(() => {
    const values = new Set<ToolSubCategory>();

    tools.forEach((tool) => {
      if (
        selectedCategory === "All" ||
        tool.category === selectedCategory
      ) {
        values.add(tool.subCategory);
      }
    });

    return Array.from(values).sort();
  }, [selectedCategory]);

  const filteredTools = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const result = tools.filter((tool) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        tool.title.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.category.toLowerCase().includes(normalizedQuery) ||
        tool.subCategory.toLowerCase().includes(normalizedQuery) ||
        tool.provider?.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "All" ||
        tool.category === selectedCategory;

      const matchesSubCategory =
        selectedSubCategory === "All" ||
        tool.subCategory === selectedSubCategory;

      const matchesPricing =
        selectedPricing === "All Pricing" ||
        tool.pricing === selectedPricing;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubCategory &&
        matchesPricing
      );
    });

    const sorted = [...result];

    switch (selectedSort) {
      case "Popular":
        sorted.sort((a, b) => b.users - a.users);
        break;

      case "Newest":
        sorted.sort(
          (a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew))
        );
        break;

      case "Highest Rated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      case "Most Used":
        sorted.sort((a, b) => b.users - a.users);
        break;

      default:
        sorted.sort(
          (a, b) =>
            Number(Boolean(b.featured)) -
            Number(Boolean(a.featured))
        );
        break;
    }

    return sorted;
  }, [
    searchQuery,
    selectedCategory,
    selectedSubCategory,
    selectedPricing,
    selectedSort,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTools.length / toolsPerPage)
  );

  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * toolsPerPage,
    currentPage * toolsPerPage
  );

  const toggleFavorite = (toolId: string) => {
    setFavorites((current) =>
      current.includes(toolId)
        ? current.filter((id) => id !== toolId)
        : [...current, toolId]
    );
  };

  const openTool = (tool: Tool) => {
    setActiveToolId(tool.id);

    window.setTimeout(() => {
      window.location.href = tool.route;
    }, 120);
  };

  const updateCategory = (category: "All" | ToolCategory) => {
    setSelectedCategory(category);
    setSelectedSubCategory("All");
    setCurrentPage(1);
  };

  const updateSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPricing("All Pricing");
    setSelectedSort("Recommended");
    setSelectedSubCategory("All");
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setIsLoading(true);
    setCurrentPage(page);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 7);

  return (
    <section
      id="ai-tools"
      className="relative overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-1/4 top-[40%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            <Sparkles className="h-4 w-4" />
            AI TOOLS MARKETPLACE
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              In One AI Workspace
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Discover powerful AI tools for music, voice, video, images,
            coding, business, marketing, research and automation.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <input
                value={searchQuery}
                onChange={(event) =>
                  updateSearch(event.target.value)
                }
                placeholder="Search AI tools, categories, features..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-12 text-sm outline-none transition placeholder:text-muted-foreground focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => updateSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowFilters((value) => !value)}
              className={`inline-flex h-14 items-center justify-center gap-2 rounded-2xl border px-5 text-sm font-semibold transition ${
                showFilters
                  ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                  ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
              }`}
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>

            <div className="hidden h-8 w-px bg-white/10 lg:block" />

            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-xl p-2.5 transition ${
                  viewMode === "grid"
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-muted-foreground hover:text-white"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setViewMode("compact")}
                className={`rounded-xl p-2.5 transition ${
                  viewMode === "compact"
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-muted-foreground hover:text-white"
                }`}
                aria-label="Compact view"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Sort
                </label>

                <div className="relative">
                  <select
                    value={selectedSort}
                    onChange={(event) => {
                      setSelectedSort(event.target.value);
                      setCurrentPage(1);
                    }}
                    className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 pr-10 text-sm outline-none focus:border-violet-500/50"
                  >
                    {sortOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-zinc-950"
                      >
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Pricing
                </label>

                <div className="relative">
                  <select
                    value={selectedPricing}
                    onChange={(event) => {
                      setSelectedPricing(event.target.value);
                      setCurrentPage(1);
                    }}
                    className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 pr-10 text-sm outline-none focus:border-violet-500/50"
                  >
                    {pricingOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-zinc-950"
                      >
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Sub-category
                </label>

                <div className="relative">
                  <select
                    value={selectedSubCategory}
                    onChange={(event) => {
                      setSelectedSubCategory(
                        event.target.value as
                          | "All"
                          | ToolSubCategory
                      );
                      setCurrentPage(1);
                    }}
                    className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 pr-10 text-sm outline-none focus:border-violet-500/50"
                  >
                    <option
                      value="All"
                      className="bg-zinc-950"
                    >
                      All Sub-categories
                    </option>

                    {availableSubCategories.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-zinc-950"
                      >
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="md:col-span-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-white/5 hover:text-white"
                >
                  <X className="h-4 w-4" />
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 overflow-x-auto pb-2">
            {visibleCategories.map((category) => {
              const Icon = category.icon;
              const active = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    updateCategory(category.id)
                  }
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "border-violet-500/40 bg-violet-500/15 text-violet-300 shadow-lg shadow-violet-950/20"
                      : "border-white/10 bg-white/[0.025] text-muted-foreground hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}

            {categories.length > 7 && (
              <button
                type="button"
                onClick={() =>
                  setShowAllCategories((value) => !value)
                }
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-white/5 hover:text-white"
              >
                {showAllCategories ? "Less" : "More"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showAllCategories ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-sm text-muted-foreground lg:flex">
            <ListFilter className="h-4 w-4" />
            {filteredTools.length} tools
          </div>
        </div>

        {searchQuery && (
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-violet-500/20 bg-violet-500/5 px-4 py-3">
            <p className="text-sm text-muted-foreground">
              Search results for{" "}
              <span className="font-semibold text-white">
                "{searchQuery}"
              </span>
            </p>

            <button
              type="button"
              onClick={() => updateSearch("")}
              className="text-sm font-semibold text-violet-300 hover:text-violet-200"
            >
              Clear
            </button>
          </div>
        )}

        <div
          className={
            viewMode === "grid"
              ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }
        >
          {isLoading ? (
            Array.from({ length: toolsPerPage }).map(
              (_, index) => (
                <div
                  key={`loading-${index}`}
                  className="h-[285px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.035]"
                />
              )
            )
          ) : paginatedTools.length > 0 ? (
            paginatedTools.map((tool) => {
              const ToolIcon = getToolIcon(tool.category);
              const isFavorite = favorites.includes(tool.id);
              const isActive = activeToolId === tool.id;

              return (
                <article
                  key={tool.id}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-violet-950/20 ${
                    viewMode === "compact"
                      ? "min-h-[250px]"
                      : "min-h-[285px]"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-violet-950/50 via-zinc-900 to-cyan-950/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

                    <img
                      src={tool.thumbnail}
                      alt={tool.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        const image = event.currentTarget;
                        image.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:bg-black/40">
                        <ToolIcon className="h-8 w-8 text-white/90" />
                      </div>
                    </div>

                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                          badgeStyles[tool.badge]
                        }`}
                      >
                        {tool.badge}
                      </span>

                      {tool.aiPowered && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                          <Sparkles className="h-3 w-3" />
                          AI
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        toggleFavorite(tool.id)
                      }
                      className={`absolute right-3 top-3 rounded-full border p-2.5 backdrop-blur-md transition ${
                        isFavorite
                          ? "border-rose-400/30 bg-rose-500/20 text-rose-300"
                          : "border-white/10 bg-black/30 text-white/80 hover:bg-black/50 hover:text-white"
                      }`}
                      aria-label={
                        isFavorite
                          ? `Remove ${tool.title} from favorites`
                          : `Add ${tool.title} to favorites`
                      }
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isFavorite ? "fill-current" : ""
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md">
                        {tool.category}
                      </span>

                      {tool.trending && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/20 bg-orange-500/15 px-2.5 py-1 text-[11px] font-semibold text-orange-300 backdrop-blur-md">
                          <Flame className="h-3 w-3" />
                          Trending
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-white transition group-hover:text-violet-200">
                          {tool.title}
                        </h3>

                        <p className="mt-1.5 line-clamp-2 min-h-[40px] text-xs leading-5 text-muted-foreground">
                          {tool.description}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                        {tool.pricing}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                        <span className="text-xs font-semibold text-white">
                          {tool.rating}
                        </span>

                        <span className="text-[11px] text-muted-foreground">
                          ({formatUsers(tool.users)})
                        </span>
                      </div>

                      <span className="text-[11px] text-muted-foreground">
                        {tool.subCategory}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openTool(tool)}
                      disabled={isActive}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-950/20 transition hover:scale-[1.02] hover:shadow-violet-900/30 disabled:cursor-wait disabled:opacity-70"
                    >
                      {isActive ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Opening...
                        </>
                      ) : (
                        <>
                          Open Tool
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                <Search className="h-7 w-7 text-violet-300" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                No AI tools found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Try another search term or remove one of the
                active filters to discover more tools.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {filteredTools.length > 0 && (
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-white">
                {(currentPage - 1) * toolsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-white">
                {Math.min(
                  currentPage * toolsPerPage,
                  filteredTools.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white">
                {filteredTools.length}
              </span>{" "}
              tools
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  changePage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="rounded-xl border border-white/10 p-2.5 text-muted-foreground transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              )
                .slice(0, 7)
                .map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => changePage(page)}
                    className={`min-w-10 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                      currentPage === page
                        ? "border-violet-500/40 bg-violet-500/15 text-violet-300"
                        : "border-white/10 text-muted-foreground hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              <button
                type="button"
                onClick={() =>
                  changePage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className="rounded-xl border border-white/10 p-2.5 text-muted-foreground transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-2.5">
                <Bot className="h-5 w-5 text-violet-300" />
              </div>

              <div>
                <p className="text-2xl font-black">
                  1300+
                </p>
                <p className="text-xs text-muted-foreground">
                  AI Tools
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-2.5">
                <Zap className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="text-2xl font-black">
                  30+
                </p>
                <p className="text-xs text-muted-foreground">
                  Categories
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/10 p-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </div>

              <div>
                <p className="text-2xl font-black">
                  24/7
                </p>
                <p className="text-xs text-muted-foreground">
                  Platform Availability
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-500/10 p-2.5">
                <Crown className="h-5 w-5 text-amber-300" />
              </div>

              <div>
                <p className="text-2xl font-black">
                  Free + Pro
                </p>
                <p className="text-xs text-muted-foreground">
                  Flexible Plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==============================
// AiTools.tsx — Part 2/20
// Marketplace helpers
// ==============================

const TOOL_SUBCATEGORIES: Record<ToolCategory, string[]> = {
  Music: [
    "Song Generation",
    "Lyrics",
    "Music Production",
  ],

  Voice: [
    "Singing",
    "Voice",
  ],

  Video: [
    "Video Generation",
    "Video Editing",
    "Avatar",
  ],

  Image: [
    "Image Generation",
    "Image Editing",
  ],

  Code: [
    "Developer",
    "Website",
    "Mobile",
    "Backend",
  ],

  Business: [
    "Analytics",
    "Workflow",
  ],

  Marketing: [
    "SEO",
    "Content",
  ],

  Education: [
    "Learning",
    "Writing",
  ],

  Productivity: [
    "Writing",
    "Presentation",
  ],

  Research: [
    "Research",
  ],

  Audio: [
    "Audio Editing",
    "Podcast",
    "Music Production",
  ],

  Design: [
    "Graphic Design",
  ],

  Data: [
    "Analytics",
    "Database",
  ],

  Automation: [
    "Workflow",
  ],
};

const TOOL_TYPES = [
  "AI Powered",
  "Without AI",
  "Free",
  "Freemium",
  "Pro",
  "Enterprise",
  "Developer",
  "Backend",
  "Frontend",
  "API",
  "No-Code",
] as const;

const TOOL_FEATURES = [
  "Text to Image",
  "Text to Video",
  "Text to Audio",
  "Text to Code",
  "Image to Image",
  "Image to Video",
  "Audio to Text",
  "Text to Speech",
  "Speech to Text",
  "File Processing",
  "Real-time",
  "Batch Processing",
] as const;

const TOOL_PROVIDERS = [
  "OpenAI",
  "Google Gemini",
  "Anthropic",
  "DeepSeek",
  "Groq",
  "OpenRouter",
  "Local AI",
  "Market AI",
  "Multiple Models",
] as const;

const MARKETPLACE_STATS = [
  {
    label: "AI Tools",
    value: "1300+",
    icon: Bot,
  },
  {
    label: "Categories",
    value: "30+",
    icon: LayoutGrid,
  },
  {
    label: "AI Models",
    value: "50+",
    icon: Brain,
  },
  {
    label: "Available 24/7",
    value: "24/7",
    icon: Clock3,
  },
] as const;

function formatUsers(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `${Math.round(value / 1_000)}K`;
  }

  return value.toString();
}

function getCategoryIcon(category: ToolCategory) {
  switch (category) {
    case "Music":
      return Music2;

    case "Voice":
      return Mic2;

    case "Video":
      return Video;

    case "Image":
      return ImageIcon;

    case "Code":
      return Code2;

    case "Business":
      return BarChart3;

    case "Marketing":
      return TrendingUp;

    case "Education":
      return Brain;

    case "Productivity":
      return Check;

    case "Research":
      return Search;

    case "Audio":
      return Mic2;

    case "Design":
      return Wand2;

    case "Data":
      return Database;

    case "Automation":
      return Zap;

    default:
      return Bot;
  }
}

function getToolGradient(category: ToolCategory) {
  switch (category) {
    case "Music":
      return "from-violet-600/30 via-fuchsia-500/10 to-cyan-500/20";

    case "Voice":
      return "from-cyan-600/30 via-blue-500/10 to-violet-500/20";

    case "Video":
      return "from-rose-600/30 via-orange-500/10 to-violet-500/20";

    case "Image":
      return "from-fuchsia-600/30 via-pink-500/10 to-violet-500/20";

    case "Code":
      return "from-blue-600/30 via-cyan-500/10 to-violet-500/20";

    case "Business":
      return "from-emerald-600/30 via-cyan-500/10 to-blue-500/20";

    case "Marketing":
      return "from-orange-600/30 via-amber-500/10 to-rose-500/20";

    case "Education":
      return "from-indigo-600/30 via-blue-500/10 to-cyan-500/20";

    case "Productivity":
      return "from-cyan-600/30 via-emerald-500/10 to-blue-500/20";

    case "Research":
      return "from-violet-600/30 via-blue-500/10 to-indigo-500/20";

    case "Audio":
      return "from-emerald-600/30 via-cyan-500/10 to-blue-500/20";

    case "Design":
      return "from-pink-600/30 via-fuchsia-500/10 to-violet-500/20";

    case "Data":
      return "from-sky-600/30 via-blue-500/10 to-indigo-500/20";

    case "Automation":
      return "from-amber-600/30 via-orange-500/10 to-red-500/20";

    default:
      return "from-violet-600/30 via-cyan-500/10 to-fuchsia-500/20";
  }
}

function getToolStatus(tool: Tool) {
  if (tool.isNew) {
    return "New";
  }

  if (tool.trending) {
    return "Trending";
  }

  if (tool.featured) {
    return "Featured";
  }

  return "Available";
}

function getPricingLabel(pricing: ToolPricing) {
  switch (pricing) {
    case "Free":
      return "Free";

    case "Freemium":
      return "Freemium";

    case "Pro":
      return "Pro";

    case "Enterprise":
      return "Enterprise";

    default:
      return pricing;
  }
}

function getSubCategories(category: "All" | ToolCategory) {
  if (category === "All") {
    const values = new Set<string>();

    Object.values(TOOL_SUBCATEGORIES).forEach(
      (items) => {
        items.forEach((item) => values.add(item));
      }
    );

    return Array.from(values).sort();
  }

  return TOOL_SUBCATEGORIES[category] ?? [];
}

// ==============================
// AiTools.tsx — Part 3/20
// Reusable marketplace UI
// ==============================

function ToolThumbnail({
  tool,
  compact = false,
}: {
  tool: Tool;
  compact?: boolean;
}) {
  const Icon = getCategoryIcon(tool.category);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${getToolGradient(
        tool.category
      )} ${
        compact
          ? "h-16 w-16 shrink-0"
          : "aspect-[16/8] w-full"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_30%)]" />

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

      <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/4 top-1/3 h-16 w-16 animate-pulse rounded-full bg-violet-400/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 h-12 w-12 animate-pulse rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-2xl border border-white/15 bg-black/25 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 ${
            compact
              ? "h-10 w-10"
              : "h-14 w-14"
          }`}
        >
          <Icon
            className={
              compact
                ? "h-5 w-5 text-white"
                : "h-7 w-7 text-white"
            }
          />
        </div>
      </div>

      {!compact && (
        <>
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">
              {tool.category}
            </span>

            {tool.aiPowered && (
              <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-200 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                AI
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {tool.trending && (
                <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/20 bg-orange-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-orange-300 backdrop-blur-md">
                  <Flame className="h-3 w-3" />
                  Trending
                </span>
              )}

              {tool.isNew && (
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  <New>
                </span>
              )}
            </div>

            <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-bold text-white/80 backdrop-blur-md">
              {getPricingLabel(tool.pricing)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function CategoryButton({
  category,
  selected,
  count,
  onClick,
}: {
  category: "All" | ToolCategory;
  selected: boolean;
  count: number;
  onClick: () => void;
}) {
  const Icon =
    category === "All"
      ? LayoutGrid
      : getCategoryIcon(category);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
        selected
          ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/5"
          : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4" />

      <span>{category === "All" ? "All Tools" : category}</span>

      <span
        className={`rounded-md px-1.5 py-0.5 text-[9px] ${
          selected
            ? "bg-cyan-500/15 text-cyan-300"
            : "bg-white/5 text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-[11px] font-semibold transition ${
        active
          ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
          : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function MarketplaceStatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Bot;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.055]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-lg font-black tracking-tight text-white">
            {value}
          </p>

          <p className="truncate text-[11px] text-muted-foreground">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarketplaceEmptyState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-cyan-500/10">
        <Search className="h-7 w-7 text-cyan-400" />
      </div>

      <h3 className="mt-6 text-xl font-black text-white">
        No AI tools found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We couldn't find a tool matching your current
        search and filters. Try another keyword or reset
        the marketplace filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/10 transition hover:bg-cyan-500"
      >
        <X className="h-4 w-4" />
        Reset Filters
      </button>
    </div>
  );
}

function MarketplaceSkeleton({
  viewMode,
}: {
  viewMode: "grid" | "compact";
}) {
  if (viewMode === "compact") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={`compact-skeleton-${index}`}
            className="h-[116px] animate-pulse rounded-2xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`grid-skeleton-${index}`}
          className="h-[350px] animate-pulse rounded-3xl border border-white/10 bg-white/5"
        />
      ))}
    </div>
  );
}

// ==============================
// AiTools.tsx — Part 5/20
// Marketplace state + filtering
// ==============================

const CATEGORY_LIST: Array<"All" | ToolCategory> = [
  "All",
  "Music",
  "Voice",
  "Video",
  "Image",
  "Code",
  "Business",
  "Marketing",
  "Education",
  "Productivity",
  "Research",
  "Audio",
  "Design",
  "Data",
  "Automation",
];

const SORT_OPTIONS = [
  "Recommended",
  "Popular",
  "Newest",
  "Highest Rated",
  "Most Used",
] as const;

const PRICING_OPTIONS = [
  "All Pricing",
  "Free",
  "Freemium",
  "Pro",
  "Enterprise",
] as const;

function getCategoryCount(
  category: "All" | ToolCategory
) {
  if (category === "All") {
    return tools.length;
  }

  return tools.filter(
    (tool) => tool.category === category
  ).length;
}

function matchesToolType(
  tool: Tool,
  selectedType: string
) {
  if (selectedType === "All Types") {
    return true;
  }

  switch (selectedType) {
    case "AI Powered":
      return Boolean(tool.aiPowered);

    case "Without AI":
      return !tool.aiPowered;

    case "Free":
      return tool.pricing === "Free";

    case "Freemium":
      return tool.pricing === "Freemium";

    case "Pro":
      return tool.pricing === "Pro";

    case "Enterprise":
      return tool.pricing === "Enterprise";

    case "Developer":
      return (
        tool.category === "Code" ||
        tool.subCategory === "Developer"
      );

    case "Backend":
      return tool.subCategory === "Backend";

    case "Frontend":
      return (
        tool.category === "Code" &&
        tool.subCategory !== "Backend"
      );

    case "API":
      return (
        tool.category === "Code" ||
        tool.category === "Automation"
      );

    case "No-Code":
      return (
        tool.subCategory === "Website" ||
        tool.category === "Automation"
      );

    default:
      return true;
  }
}

function matchesToolFeature(
  tool: Tool,
  selectedFeature: string
) {
  if (selectedFeature === "All Features") {
    return true;
  }

  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    tool.subCategory,
  ]
    .join(" ")
    .toLowerCase();

  switch (selectedFeature) {
    case "Text to Image":
      return (
        tool.category === "Image" ||
        searchableText.includes("image")
      );

    case "Text to Video":
      return (
        tool.category === "Video" ||
        searchableText.includes("video")
      );

    case "Text to Audio":
      return (
        tool.category === "Audio" ||
        tool.category === "Music" ||
        tool.category === "Voice"
      );

    case "Text to Code":
      return tool.category === "Code";

    case "Image to Image":
      return tool.category === "Image";

    case "Image to Video":
      return (
        tool.category === "Video" ||
        searchableText.includes("image")
      );

    case "Audio to Text":
      return (
        tool.category === "Audio" ||
        tool.category === "Voice"
      );

    case "Text to Speech":
      return tool.category === "Voice";

    case "Speech to Text":
      return (
        tool.category === "Voice" ||
        tool.category === "Audio"
      );

    case "File Processing":
      return (
        tool.category === "Data" ||
        tool.category === "Productivity" ||
        tool.category === "Research"
      );

    case "Real-time":
      return (
        tool.category === "Voice" ||
        tool.category === "Chat" as ToolCategory
      );

    case "Batch Processing":
      return (
        tool.category === "Data" ||
        tool.category === "Image" ||
        tool.category === "Audio"
      );

    default:
      return true;
  }
}

function matchesToolProvider(
  tool: Tool,
  selectedProvider: string
) {
  if (selectedProvider === "All Providers") {
    return true;
  }

  if (!tool.provider) {
    return selectedProvider === "Market AI";
  }

  const provider = tool.provider.toLowerCase();

  switch (selectedProvider) {
    case "OpenAI":
      return provider.includes("openai");

    case "Google Gemini":
      return provider.includes("gemini") ||
        provider.includes("google");

    case "Anthropic":
      return provider.includes("anthropic") ||
        provider.includes("claude");

    case "DeepSeek":
      return provider.includes("deepseek");

    case "Groq":
      return provider.includes("groq");

    case "OpenRouter":
      return provider.includes("openrouter");

    case "Local AI":
      return provider.includes("local");

    case "Market AI":
      return provider.includes("market ai");

    case "Multiple Models":
      return (
        provider.includes("multiple") ||
        provider.includes("router")
      );

    default:
      return true;
  }
}

function sortTools(
  input: Tool[],
  sortBy: (typeof SORT_OPTIONS)[number]
) {
  const result = [...input];

  switch (sortBy) {
    case "Popular":
      result.sort(
        (a, b) => b.users - a.users
      );
      break;

    case "Newest":
      result.sort(
        (a, b) =>
          Number(Boolean(b.isNew)) -
          Number(Boolean(a.isNew))
      );
      break;

    case "Highest Rated":
      result.sort(
        (a, b) => b.rating - a.rating
      );
      break;

    case "Most Used":
      result.sort(
        (a, b) => b.users - a.users
      );
      break;

    case "Recommended":
    default:
      result.sort((a, b) => {
        const aScore =
          (a.featured ? 100 : 0) +
          (a.trending ? 50 : 0) +
          (a.isNew ? 25 : 0) +
          a.rating * 10;

        const bScore =
          (b.featured ? 100 : 0) +
          (b.trending ? 50 : 0) +
          (b.isNew ? 25 : 0) +
          b.rating * 10;

        return bScore - aScore;
      });

      break;
  }

  return result;
}

function filterTools({
  query,
  category,
  subCategory,
  pricing,
  type,
  feature,
  provider,
}: {
  query: string;
  category: "All" | ToolCategory;
  subCategory: string;
  pricing: string;
  type: string;
  feature: string;
  provider: string;
}) {
  const normalizedQuery =
    query.trim().toLowerCase();

  return tools.filter((tool) => {
    const searchableText = [
      tool.title,
      tool.description,
      tool.category,
      tool.subCategory,
      tool.badge,
      tool.provider ?? "",
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      normalizedQuery.length === 0 ||
      searchableText.includes(normalizedQuery);

    const matchesCategory =
      category === "All" ||
      tool.category === category;

    const matchesSubCategory =
      subCategory === "All" ||
      tool.subCategory === subCategory;

    const matchesPricing =
      pricing === "All Pricing" ||
      tool.pricing === pricing;

    const matchesType =
      matchesToolType(
        tool,
        type
      );

    const matchesFeature =
      matchesToolFeature(
        tool,
        feature
      );

    const matchesProvider =
      matchesToolProvider(
        tool,
        provider
      );

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubCategory &&
      matchesPricing &&
      matchesType &&
      matchesFeature &&
      matchesProvider
    );
  });
}

// ==============================
// AiTools.tsx — Part 6/20
// Marketplace card + loading UI
// ==============================

function ToolLoadingGrid({
  viewMode,
}: {
  viewMode: "grid" | "compact";
}) {
  if (viewMode === "compact") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={`compact-loading-${index}`}
            className="h-[116px] animate-pulse rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="flex h-full items-center gap-4 p-3">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-white/10" />

              <div className="flex-1 space-y-2">
                <div className="h-3 w-2/3 rounded bg-white/10" />
                <div className="h-2.5 w-full rounded bg-white/5" />
                <div className="h-2.5 w-1/2 rounded bg-white/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`grid-loading-${index}`}
          className="h-[350px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.035] p-3"
        >
          <div className="aspect-[16/8] rounded-2xl bg-white/10" />

          <div className="space-y-3 p-3">
            <div className="h-3 w-1/3 rounded bg-white/10" />
            <div className="h-4 w-3/4 rounded bg-white/10" />
            <div className="h-3 w-full rounded bg-white/5" />
            <div className="h-3 w-4/5 rounded bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ToolCard({
  tool,
  isFavorite,
  viewMode,
  onFavorite,
}: {
  tool: Tool;
  isFavorite: boolean;
  viewMode: "grid" | "compact";
  onFavorite: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}) {
  if (viewMode === "compact") {
    return (
      <a
        href={tool.route}
        className="group flex min-h-[112px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-white/[0.06]"
      >
        <ToolThumbnail
          tool={tool}
          compact
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-black text-white transition group-hover:text-cyan-300">
              {tool.title}
            </h3>

            {tool.isNew && (
              <span className="shrink-0 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-400">
                New
              </span>
            )}
          </div>

          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
            {tool.description}
          </p>

          <div className="mt-2 flex items-center gap-3 text-[10px] font-semibold text-muted-foreground">
            <span className="text-cyan-400">
              {tool.category}
            </span>

            <span>•</span>

            <span className="inline-flex items-center gap-1 text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              {tool.rating}
            </span>

            <span>•</span>

            <span>
              {formatUsers(tool.users)}
            </span>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={(event) =>
              onFavorite(tool.id, event)
            }
            className={`rounded-xl border p-2 transition ${
              isFavorite
                ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            }`}
            aria-label={
              isFavorite
                ? `Remove ${tool.title} from favorites`
                : `Add ${tool.title} to favorites`
            }
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? "fill-current" : ""
              }`}
            />
          </button>

          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
        </div>
      </a>
    );
  }

  return (
    <a
      href={tool.route}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-950/20"
    >
      <div className="p-3 pb-0">
        <ToolThumbnail tool={tool} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                {tool.category}
              </span>

              <span className="rounded-md border border-violet-400/10 bg-violet-500/10 px-2 py-0.5 text-[9px] font-bold text-violet-300">
                {getToolStatus(tool)}
              </span>
            </div>

            <h3 className="mt-2.5 truncate text-base font-black text-white transition group-hover:text-cyan-300">
              {tool.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={(event) =>
              onFavorite(tool.id, event)
            }
            className={`shrink-0 rounded-xl border p-2 transition ${
              isFavorite
                ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            }`}
            aria-label={
              isFavorite
                ? `Remove ${tool.title} from favorites`
                : `Add ${tool.title} to favorites`
            }
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? "fill-current" : ""
              }`}
            />
          </button>
        </div>

        <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-muted-foreground">
          {tool.description}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-semibold">
            <span className="inline-flex items-center gap-1 text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              {tool.rating}
            </span>

            <span className="text-muted-foreground">
              {formatUsers(tool.users)} users
            </span>
          </div>

          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-bold text-muted-foreground">
            {getPricingLabel(tool.pricing)}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="truncate text-[10px] font-semibold text-muted-foreground">
            {tool.subCategory}
          </span>

          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-bold text-cyan-400 transition-transform group-hover:translate-x-1">
            Open Tool
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function EmptySearchState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-violet-500/10">
        <Search className="h-7 w-7 text-violet-300" />
      </div>

      <h3 className="mt-6 text-xl font-black text-white">
        No tools found
      </h3>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
        No AI tool matches{" "}
        <span className="font-semibold text-white">
          "{query}"
        </span>
        . Try a different keyword or clear the search.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500"
      >
        <X className="h-4 w-4" />
        Clear Search
      </button>
    </div>
  );
}

// ==============================
// AiTools.tsx — Part 11/20
// Additional marketplace utilities
// ==============================

type ToolSearchIndex = {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  keywords: string[];
};

const TOOL_SEARCH_INDEX: ToolSearchIndex[] =
  tools.map((tool) => ({
    id: tool.id,
    title: tool.title,
    category: tool.category,
    subCategory: tool.subCategory,
    description: tool.description,
    keywords: [
      tool.title,
      tool.category,
      tool.subCategory,
      tool.description,
      tool.badge,
      tool.provider ?? "",
    ],
  }));

function normalizeSearchText(
  value: string
) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function getSearchScore(
  tool: ToolSearchIndex,
  query: string
) {
  const normalizedQuery =
    normalizeSearchText(query);

  if (!normalizedQuery) {
    return 0;
  }

  const title =
    normalizeSearchText(tool.title);

  const category =
    normalizeSearchText(tool.category);

  const subCategory =
    normalizeSearchText(
      tool.subCategory
    );

  const description =
    normalizeSearchText(
      tool.description
    );

  const keywords =
    tool.keywords
      .map(normalizeSearchText)
      .join(" ");

  let score = 0;

  if (title === normalizedQuery) {
    score += 100;
  }

  if (title.startsWith(normalizedQuery)) {
    score += 60;
  }

  if (title.includes(normalizedQuery)) {
    score += 40;
  }

  if (
    category.includes(
      normalizedQuery
    )
  ) {
    score += 25;
  }

  if (
    subCategory.includes(
      normalizedQuery
    )
  ) {
    score += 25;
  }

  if (
    description.includes(
      normalizedQuery
    )
  ) {
    score += 15;
  }

  if (
    keywords.includes(
      normalizedQuery
    )
  ) {
    score += 10;
  }

  return score;
}

function rankToolsBySearch(
  input: Tool[],
  query: string
) {
  const normalizedQuery =
    normalizeSearchText(query);

  if (!normalizedQuery) {
    return input;
  }

  return [...input]
    .map((tool) => {
      const index =
        TOOL_SEARCH_INDEX.find(
          (item) =>
            item.id === tool.id
        );

      return {
        tool,
        score: index
          ? getSearchScore(
              index,
              normalizedQuery
            )
          : 0,
      };
    })
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .map(
      ({ tool }) => tool
    );
}

function getPopularTools(
  limit = 8
) {
  return [...tools]
    .sort(
      (a, b) =>
        b.users - a.users
    )
    .slice(0, limit);
}

function getTrendingTools(
  limit = 8
) {
  return tools
    .filter(
      (tool) => tool.trending
    )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

function getNewTools(
  limit = 8
) {
  return tools
    .filter(
      (tool) => tool.isNew
    )
    .slice(0, limit);
}

function getFeaturedTools(
  limit = 8
) {
  return tools
    .filter(
      (tool) => tool.featured
    )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

// ==============================
// AiTools.tsx — Part 12/20
// Tool collections + recommendations
// ==============================

function getToolsByCategory(
  category: ToolCategory
) {
  return tools.filter(
    (tool) =>
      tool.category === category
  );
}

function getToolsBySubCategory(
  subCategory: string
) {
  return tools.filter(
    (tool) =>
      tool.subCategory ===
      subCategory
  );
}

function getToolsByPricing(
  pricing: ToolPricing
) {
  return tools.filter(
    (tool) =>
      tool.pricing === pricing
  );
}

function getAITools() {
  return tools.filter(
    (tool) =>
      tool.aiPowered
  );
}

function getFreeTools() {
  return tools.filter(
    (tool) =>
      tool.pricing === "Free"
  );
}

function getProTools() {
  return tools.filter(
    (tool) =>
      tool.pricing === "Pro"
  );
}

function getToolsForDevelopers() {
  return tools.filter(
    (tool) =>
      tool.category === "Code" ||
      tool.subCategory ===
        "Developer" ||
      tool.subCategory ===
        "Backend"
  );
}

function getToolsForCreators() {
  return tools.filter(
    (tool) =>
      tool.category === "Music" ||
      tool.category === "Voice" ||
      tool.category === "Video" ||
      tool.category === "Image" ||
      tool.category === "Design" ||
      tool.category === "Audio"
  );
}

function getToolsForBusiness() {
  return tools.filter(
    (tool) =>
      tool.category === "Business" ||
      tool.category === "Marketing" ||
      tool.category ===
        "Automation" ||
      tool.category === "Data"
  );
}

function getToolsForStudents() {
  return tools.filter(
    (tool) =>
      tool.category ===
        "Education" ||
      tool.category ===
        "Productivity" ||
      tool.category ===
        "Research"
  );
}

function getRecommendedTools(
  currentTool?: Tool,
  limit = 6
) {
  if (!currentTool) {
    return sortTools(
      tools,
      "Recommended"
    ).slice(0, limit);
  }

  const related = tools.filter(
    (tool) =>
      tool.id !== currentTool.id &&
      (
        tool.category ===
          currentTool.category ||
        tool.subCategory ===
          currentTool.subCategory
      )
  );

  return sortTools(
    related,
    "Recommended"
  ).slice(0, limit);
}

function getRelatedTools(
  currentTool: Tool,
  limit = 6
) {
  return tools
    .filter(
      (tool) =>
        tool.id !==
          currentTool.id &&
        tool.category ===
          currentTool.category
    )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

function getAlternativeTools(
  currentTool: Tool,
  limit = 6
) {
  return tools
    .filter(
      (tool) =>
        tool.id !==
          currentTool.id &&
        tool.category ===
          currentTool.category &&
        tool.pricing ===
          currentTool.pricing
    )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

function getToolsByProvider(
  provider: string
) {
  const normalizedProvider =
    normalizeSearchText(
      provider
    );

  return tools.filter(
    (tool) =>
      normalizeSearchText(
        tool.provider ?? ""
      ).includes(
        normalizedProvider
      )
  );
}

function getToolCategories() {
  return CATEGORY_LIST.filter(
    (category) =>
      category !== "All"
  ).filter(
    (category) =>
      getCategoryCount(
        category
      ) > 0
  );
}

function getCategorySummary() {
  return getToolCategories().map(
    (category) => ({
      category,
      count:
        getCategoryCount(
          category
        ),
      icon:
        getCategoryIcon(
          category
        ),
      tools:
        getToolsByCategory(
          category
        ),
    })
  );
}

function getMarketplaceSummary() {
  return {
    totalTools: tools.length,

    aiTools:
      getAITools().length,

    freeTools:
      getFreeTools().length,

    proTools:
      getProTools().length,

    trendingTools:
      getTrendingTools().length,

    newTools:
      getNewTools().length,

    featuredTools:
      getFeaturedTools().length,

    categories:
      getToolCategories().length,
  };
}

// ==============================
// AiTools.tsx — Part 13/20
// Favorites + local persistence
// ==============================

const FAVORITES_STORAGE_KEY =
  "market-ai-tool-favorites";

function readStoredFavorites(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        FAVORITES_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed: unknown =
      JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (value): value is string =>
        typeof value === "string"
    );
  } catch {
    return [];
  }
}

function saveStoredFavorites(
  favoriteIds: string[]
) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(
        favoriteIds
      )
    );
  } catch {
    // Ignore storage errors.
  }
}

function addFavorite(
  favoriteIds: string[],
  toolId: string
) {
  if (
    favoriteIds.includes(toolId)
  ) {
    return favoriteIds;
  }

  return [
    ...favoriteIds,
    toolId,
  ];
}

function removeFavorite(
  favoriteIds: string[],
  toolId: string
) {
  return favoriteIds.filter(
    (id) => id !== toolId
  );
}

function toggleFavoriteId(
  favoriteIds: string[],
  toolId: string
) {
  if (
    favoriteIds.includes(toolId)
  ) {
    return removeFavorite(
      favoriteIds,
      toolId
    );
  }

  return addFavorite(
    favoriteIds,
    toolId
  );
}

function isFavoriteTool(
  favoriteIds: string[],
  toolId: string
) {
  return favoriteIds.includes(
    toolId
  );
}

function getFavoriteTools(
  favoriteIds: string[]
) {
  return tools.filter(
    (tool) =>
      favoriteIds.includes(
        tool.id
      )
  );
}

function getFavoriteCount(
  favoriteIds: string[]
) {
  return favoriteIds.length;
}

function clearStoredFavorites() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(
      FAVORITES_STORAGE_KEY
    );
  } catch {
    // Ignore storage errors.
  }
}

function sanitizeFavoriteIds(
  favoriteIds: string[]
) {
  const validIds = new Set(
    tools.map(
      (tool) => tool.id
    )
  );

  return favoriteIds.filter(
    (id) =>
      validIds.has(id)
  );
}

function mergeFavoriteIds(
  first: string[],
  second: string[]
) {
  return Array.from(
    new Set([
      ...first,
      ...second,
    ])
  );
}

// ==============================
// AiTools.tsx — Part 14/20
// Tool analytics + marketplace helpers
// ==============================

function calculateAverageRating(
  input: Tool[] = tools
) {
  if (input.length === 0) {
    return 0;
  }

  const total = input.reduce(
    (sum, tool) =>
      sum + tool.rating,
    0
  );

  return Number(
    (total / input.length).toFixed(1)
  );
}

function calculateTotalUsers(
  input: Tool[] = tools
) {
  return input.reduce(
    (total, tool) =>
      total + tool.users,
    0
  );
}

function getHighestRatedTools(
  limit = 10
) {
  return [...tools]
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

function getMostUsedTools(
  limit = 10
) {
  return [...tools]
    .sort(
      (a, b) =>
        b.users - a.users
    )
    .slice(0, limit);
}

function getFreePopularTools(
  limit = 10
) {
  return tools
    .filter(
      (tool) =>
        tool.pricing ===
        "Free"
    )
    .sort(
      (a, b) =>
        b.users - a.users
    )
    .slice(0, limit);
}

function getNewPopularTools(
  limit = 10
) {
  return tools
    .filter(
      (tool) => tool.isNew
    )
    .sort(
      (a, b) =>
        b.users - a.users
    )
    .slice(0, limit);
}

function getTrendingByCategory(
  category: ToolCategory,
  limit = 6
) {
  return tools
    .filter(
      (tool) =>
        tool.category ===
          category &&
        tool.trending
    )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, limit);
}

function getTopCategories(
  limit = 6
) {
  return getToolCategories()
    .map((category) => ({
      category,
      count:
        getCategoryCount(
          category
        ),
    }))
    .sort(
      (a, b) =>
        b.count - a.count
    )
    .slice(0, limit);
}

function getCategoryRating(
  category: ToolCategory
) {
  return calculateAverageRating(
    getToolsByCategory(
      category
    )
  );
}

function getCategoryUsers(
  category: ToolCategory
) {
  return calculateTotalUsers(
    getToolsByCategory(
      category
    )
  );
}

function getMarketplaceHealth() {
  const averageRating =
    calculateAverageRating();

  const totalUsers =
    calculateTotalUsers();

  const totalTools =
    tools.length;

  return {
    averageRating,
    totalUsers,
    totalTools,
    categories:
      getToolCategories()
        .length,
    trending:
      getTrendingTools()
        .length,
    newTools:
      getNewTools()
        .length,
    featured:
      getFeaturedTools()
        .length,
  };
}

function getToolById(
  toolId: string
) {
  return tools.find(
    (tool) =>
      tool.id === toolId
  );
}

function getToolByRoute(
  route: string
) {
  return tools.find(
    (tool) =>
      tool.route === route
  );
}

function getToolsByIds(
  toolIds: string[]
) {
  const idSet = new Set(
    toolIds
  );

  return tools.filter(
    (tool) =>
      idSet.has(tool.id)
  );
}

// ==============================
// AiTools.tsx — Part 15/20
// Tool validation + safe navigation
// ==============================

const VALID_TOOL_ROUTES = new Set(
  tools.map((tool) => tool.route)
);

function isValidToolRoute(
  route: string
) {
  return VALID_TOOL_ROUTES.has(
    route
  );
}

function getSafeToolRoute(
  tool: Tool
) {
  if (
    isValidToolRoute(
      tool.route
    )
  ) {
    return tool.route;
  }

  return "#ai-tools";
}

function validateTool(
  tool: Tool
) {
  return Boolean(
    tool.id &&
    tool.title &&
    tool.description &&
    tool.category &&
    tool.subCategory &&
    tool.route
  );
}

function getValidTools() {
  return tools.filter(
    validateTool
  );
}

function getInvalidTools() {
  return tools.filter(
    (tool) =>
      !validateTool(tool)
  );
}

function getToolsWithRoutes() {
  return tools.filter(
    (tool) =>
      Boolean(
        tool.route
      )
  );
}

function getToolsWithoutRoutes() {
  return tools.filter(
    (tool) =>
      !tool.route
  );
}

function getAvailableTools() {
  return tools.filter(
    (tool) =>
      isValidToolRoute(
        tool.route
      )
  );
}

function getToolAvailability(
  tool: Tool
) {
  if (
    !tool.route
  ) {
    return false;
  }

  return isValidToolRoute(
    tool.route
  );
}

function getToolAvailabilityLabel(
  tool: Tool
) {
  return getToolAvailability(
    tool
  )
    ? "Available"
    : "Coming Soon";
}

function getToolAvailabilityClass(
  tool: Tool
) {
  return getToolAvailability(
    tool
  )
    ? "text-emerald-400"
    : "text-amber-400";
}

function normalizeToolRoute(
  route: string
) {
  if (!route) {
    return "#ai-tools";
  }

  if (
    route.startsWith("/")
  ) {
    return route;
  }

  return `/${route}`;
}

function getToolsWithCategory(
  category: ToolCategory
) {
  return tools.filter(
    (tool) =>
      tool.category ===
      category
  );
}

function getAvailableToolsByCategory(
  category: ToolCategory
) {
  return getToolsWithCategory(
    category
  ).filter(
    getToolAvailability
  );
}

function getCategoryAvailability(
  category: ToolCategory
) {
  const categoryTools =
    getToolsWithCategory(
      category
    );

  const available =
    categoryTools.filter(
      getToolAvailability
    ).length;

  return {
    total:
      categoryTools.length,
    available,
    comingSoon:
      categoryTools.length -
      available,
  };
}

function getToolRouteMap() {
  return tools.reduce(
    (
      map,
      tool
    ) => {
      map[tool.id] =
        normalizeToolRoute(
          tool.route
        );

      return map;
    },
    {} as Record<
      string,
      string
    >
  );
}

function getToolIdFromRoute(
  route: string
) {
  const tool =
    getToolByRoute(
      route
    );

  return tool?.id ?? null;
}

// ==============================
// AiTools.tsx — Part 16/20
// Marketplace data export + sharing
// ==============================

function createToolShareData(
  tool: Tool
) {
  return {
    id: tool.id,
    title: tool.title,
    description:
      tool.description,
    category:
      tool.category,
    subCategory:
      tool.subCategory,
    route:
      normalizeToolRoute(
        tool.route
      ),
    pricing:
      tool.pricing,
    rating:
      tool.rating,
    users:
      tool.users,
  };
}

function createMarketplaceShareData() {
  return {
    title:
      "Market AI — AI Tools Marketplace",
    description:
      "Discover AI tools for creation, development, automation and productivity.",
    tools:
      tools.length,
    categories:
      getToolCategories()
        .length,
  };
}

function createToolSearchParams({
  query,
  category,
  subCategory,
  pricing,
  type,
  feature,
  provider,
}: {
  query?: string;
  category?: string;
  subCategory?: string;
  pricing?: string;
  type?: string;
  feature?: string;
  provider?: string;
}) {
  const params =
    new URLSearchParams();

  if (query) {
    params.set(
      "q",
      query
    );
  }

  if (category) {
    params.set(
      "category",
      category
    );
  }

  if (subCategory) {
    params.set(
      "subcategory",
      subCategory
    );
  }

  if (pricing) {
    params.set(
      "pricing",
      pricing
    );
  }

  if (type) {
    params.set(
      "type",
      type
    );
  }

  if (feature) {
    params.set(
      "feature",
      feature
    );
  }

  if (provider) {
    params.set(
      "provider",
      provider
    );
  }

  return params.toString();
}

function createToolShareUrl(
  tool: Tool
) {
  const route =
    normalizeToolRoute(
      tool.route
    );

  if (
    typeof window ===
    "undefined"
  ) {
    return route;
  }

  return `${window.location.origin}${route}`;
}

function createMarketplaceUrl(
  params?: string
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return "/#ai-tools";
  }

  const base =
    `${window.location.origin}/#ai-tools`;

  if (!params) {
    return base;
  }

  return `${base}?${params}`;
}

async function copyText(
  value: string
) {
  if (
    typeof navigator ===
      "undefined" ||
    !navigator.clipboard
  ) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(
      value
    );

    return true;
  } catch {
    return false;
  }
}

async function copyToolLink(
  tool: Tool
) {
  return copyText(
    createToolShareUrl(
      tool
    )
  );
}

async function copyMarketplaceLink(
  params?: string
) {
  return copyText(
    createMarketplaceUrl(
      params
    )
  );
}

function getToolShareText(
  tool: Tool
) {
  return [
    tool.title,
    tool.description,
    `Category: ${tool.category}`,
    `Pricing: ${tool.pricing}`,
    `Rating: ${tool.rating}`,
  ].join("\n");
}

function getMarketplaceShareText() {
  return [
    "Market AI — AI Tools Marketplace",
    `Explore ${tools.length}+ AI tools`,
    `Discover ${getToolCategories().length}+ categories`,
  ].join("\n");
}

async function shareTool(
  tool: Tool
) {
  const url =
    createToolShareUrl(
      tool
    );

  if (
    typeof navigator !==
      "undefined" &&
    typeof navigator.share ===
      "function"
  ) {
    try {
      await navigator.share({
        title:
          tool.title,
        text:
          getToolShareText(
            tool
          ),
        url,
      });

      return true;
    } catch {
      return false;
    }
  }

  return copyText(url);
}

async function shareMarketplace() {
  const url =
    createMarketplaceUrl();

  if (
    typeof navigator !==
      "undefined" &&
    typeof navigator.share ===
      "function"
  ) {
    try {
      await navigator.share({
        title:
          "Market AI — AI Tools Marketplace",
        text:
          getMarketplaceShareText(),
        url,
      });

      return true;
    } catch {
      return false;
    }
  }

  return copyText(url);
}

// ==============================
// AiTools.tsx — Part 17/20
// Tool collections + quick discovery
// ==============================

function getQuickDiscoverySections() {
  return [
    {
      id: "popular",
      title: "Popular Tools",
      description:
        "Most-used tools in the current marketplace.",
      icon: Flame,
      tools: getPopularTools(6),
    },
    {
      id: "trending",
      title: "Trending Now",
      description:
        "Tools currently gaining attention.",
      icon: TrendingUp,
      tools: getTrendingTools(6),
    },
    {
      id: "new",
      title: "New Tools",
      description:
        "Recently added tools and experiences.",
      icon: Sparkles,
      tools: getNewTools(6),
    },
    {
      id: "featured",
      title: "Featured",
      description:
        "Highlighted tools worth exploring.",
      icon: Star,
      tools: getFeaturedTools(6),
    },
  ];
}

function getCreatorDiscovery() {
  return {
    music: getToolsByCategory("Music").slice(
      0,
      6
    ),

    voice: getToolsByCategory("Voice").slice(
      0,
      6
    ),

    video: getToolsByCategory("Video").slice(
      0,
      6
    ),

    image: getToolsByCategory("Image").slice(
      0,
      6
    ),

    design: getToolsByCategory("Design").slice(
      0,
      6
    ),

    audio: getToolsByCategory("Audio").slice(
      0,
      6
    ),
  };
}

function getDeveloperDiscovery() {
  return {
    code: getToolsByCategory("Code").slice(
      0,
      8
    ),

    data: getToolsByCategory("Data").slice(
      0,
      6
    ),

    automation:
      getToolsByCategory(
        "Automation"
      ).slice(0, 6),

    productivity:
      getToolsByCategory(
        "Productivity"
      ).slice(0, 6),
  };
}

function getBusinessDiscovery() {
  return {
    business:
      getToolsByCategory(
        "Business"
      ).slice(0, 6),

    marketing:
      getToolsByCategory(
        "Marketing"
      ).slice(0, 6),

    research:
      getToolsByCategory(
        "Research"
      ).slice(0, 6),

    education:
      getToolsByCategory(
        "Education"
      ).slice(0, 6),
  };
}

function getFreeDiscovery() {
  return getFreeTools()
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, 12);
}

function getProDiscovery() {
  return getProTools()
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, 12);
}

function getHighRatedDiscovery() {
  return getHighestRatedTools(
    12
  );
}

function getMostUsedDiscovery() {
  return getMostUsedTools(
    12
  );
}

function getDiscoveryForCategory(
  category: ToolCategory,
  limit = 8
) {
  return sortTools(
    getToolsByCategory(
      category
    ),
    "Recommended"
  ).slice(
    0,
    limit
  );
}

function getDiscoveryForSubCategory(
  subCategory: string,
  limit = 8
) {
  return getToolsBySubCategory(
    subCategory
  )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(
      0,
      limit
    );
}

function getDiscoveryForProvider(
  provider: string,
  limit = 8
) {
  return getToolsByProvider(
    provider
  )
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(
      0,
      limit
    );
}

function getDiscoverySummary() {
  return {
    popular:
      getPopularTools(6),

    trending:
      getTrendingTools(6),

    newTools:
      getNewTools(6),

    featured:
      getFeaturedTools(6),

    free:
      getFreeDiscovery(),

    pro:
      getProDiscovery(),

    highestRated:
      getHighRatedDiscovery(),

    mostUsed:
      getMostUsedDiscovery(),
  };
}

// ==============================
// AiTools.tsx — Part 18/20
// Marketplace category navigation
// ==============================

function getCategoryNavigation() {
  return getToolCategories().map(
    (category) => {
      const Icon =
        getCategoryIcon(
          category
        );

      const summary =
        getCategoryAvailability(
          category
        );

      return {
        category,
        icon: Icon,
        total: summary.total,
        available:
          summary.available,
        comingSoon:
          summary.comingSoon,
        rating:
          getCategoryRating(
            category
          ),
        users:
          getCategoryUsers(
            category
          ),
      };
    }
  );
}

function getCategoryNavigationItem(
  category: ToolCategory
) {
  const summary =
    getCategoryAvailability(
      category
    );

  return {
    category,
    icon:
      getCategoryIcon(
        category
      ),
    total:
      summary.total,
    available:
      summary.available,
    comingSoon:
      summary.comingSoon,
    rating:
      getCategoryRating(
        category
      ),
    users:
      getCategoryUsers(
        category
      ),
  };
}

function getCategoryToolIds(
  category: ToolCategory
) {
  return getToolsByCategory(
    category
  ).map(
    (tool) => tool.id
  );
}

function getCategoryRoutes(
  category: ToolCategory
) {
  return getAvailableToolsByCategory(
    category
  ).map(
    (tool) =>
      normalizeToolRoute(
        tool.route
      )
  );
}

function getCategoryNames() {
  return getToolCategories().map(
    (category) =>
      category
  );
}

function hasCategoryTools(
  category: ToolCategory
) {
  return (
    getCategoryCount(
      category
    ) > 0
  );
}

function hasAvailableCategoryTools(
  category: ToolCategory
) {
  return (
    getAvailableToolsByCategory(
      category
    ).length > 0
  );
}

function getCategoryBadgeText(
  category: ToolCategory
) {
  const count =
    getCategoryCount(
      category
    );

  if (count === 0) {
    return "Coming Soon";
  }

  if (count === 1) {
    return "1 Tool";
  }

  return `${count} Tools`;
}

function getCategoryDescription(
  category: ToolCategory
) {
  const descriptions: Partial<
    Record<ToolCategory, string>
  > = {
    Music:
      "Create songs, music and original audio experiences.",
    Voice:
      "Generate, transform and work with AI voices.",
    Video:
      "Create and enhance AI-powered video content.",
    Image:
      "Generate and edit images with creative AI tools.",
    Code:
      "Build software, websites and developer workflows.",
    Business:
      "AI tools for business operations and insights.",
    Marketing:
      "Create content and improve marketing workflows.",
    Education:
      "AI tools for learning, teaching and study.",
    Productivity:
      "Work faster with AI-powered productivity tools.",
    Research:
      "Research, analyze and organize information.",
    Audio:
      "Edit, process and create professional audio.",
    Design:
      "Create graphics, interfaces and visual designs.",
    Data:
      "Analyze, process and work with structured data.",
    Automation:
      "Automate repetitive tasks and workflows.",
  };

  return (
    descriptions[
      category
    ] ??
    "Explore AI-powered tools and workflows."
  );
}

function getCategoryColor(
  category: ToolCategory
) {
  const colors: Partial<
    Record<ToolCategory, string>
  > = {
    Music:
      "text-violet-400 bg-violet-500/10",
    Voice:
      "text-cyan-400 bg-cyan-500/10",
    Video:
      "text-rose-400 bg-rose-500/10",
    Image:
      "text-fuchsia-400 bg-fuchsia-500/10",
    Code:
      "text-blue-400 bg-blue-500/10",
    Business:
      "text-emerald-400 bg-emerald-500/10",
    Marketing:
      "text-orange-400 bg-orange-500/10",
    Education:
      "text-indigo-400 bg-indigo-500/10",
    Productivity:
      "text-sky-400 bg-sky-500/10",
    Research:
      "text-purple-400 bg-purple-500/10",
    Audio:
      "text-green-400 bg-green-500/10",
    Design:
      "text-pink-400 bg-pink-500/10",
    Data:
      "text-blue-300 bg-blue-500/10",
    Automation:
      "text-amber-400 bg-amber-500/10",
  };

  return (
    colors[
      category
    ] ??
    "text-cyan-400 bg-cyan-500/10"
  );
}

function getCategoryGradient(
  category: ToolCategory
) {
  const gradients: Partial<
    Record<ToolCategory, string>
  > = {
    Music:
      "from-violet-500/20 to-fuchsia-500/5",
    Voice:
      "from-cyan-500/20 to-blue-500/5",
    Video:
      "from-rose-500/20 to-orange-500/5",
    Image:
      "from-fuchsia-500/20 to-pink-500/5",
    Code:
      "from-blue-500/20 to-cyan-500/5",
    Business:
      "from-emerald-500/20 to-cyan-500/5",
    Marketing:
      "from-orange-500/20 to-amber-500/5",
    Education:
      "from-indigo-500/20 to-blue-500/5",
    Productivity:
      "from-sky-500/20 to-cyan-500/5",
    Research:
      "from-purple-500/20 to-indigo-500/5",
    Audio:
      "from-green-500/20 to-cyan-500/5",
    Design:
      "from-pink-500/20 to-fuchsia-500/5",
    Data:
      "from-blue-500/20 to-indigo-500/5",
    Automation:
      "from-amber-500/20 to-orange-500/5",
  };

  return (
    gradients[
      category
    ] ??
    "from-cyan-500/20 to-violet-500/5"
  );
}

function getSubCategoryCount(
  subCategory: string
) {
  return tools.filter(
    (tool) =>
      tool.subCategory ===
      subCategory
  ).length;
}

function getSubCategoryTools(
  subCategory: string
) {
  return tools.filter(
    (tool) =>
      tool.subCategory ===
      subCategory
  );
}

function getSubCategorySummary(
  subCategory: string
) {
  const subTools =
    getSubCategoryTools(
      subCategory
    );

  return {
    name:
      subCategory,
    count:
      subTools.length,
    available:
      subTools.filter(
        getToolAvailability
      ).length,
    rating:
      calculateAverageRating(
        subTools
      ),
    users:
      calculateTotalUsers(
        subTools
      ),
  };
}

// ==============================
// AiTools.tsx — Part 19/20
// Marketplace API-ready helpers
// ==============================

type ToolQueryOptions = {
  query?: string;
  category?: ToolCategory;
  subCategory?: string;
  pricing?: ToolPricing;
  aiPowered?: boolean;
  trending?: boolean;
  featured?: boolean;
  isNew?: boolean;
  provider?: string;
  limit?: number;
};

function queryTools(
  options: ToolQueryOptions = {}
) {
  let result = [...tools];

  if (options.query) {
    const query =
      normalizeSearchText(
        options.query
      );

    result = rankToolsBySearch(
      result.filter(
        (tool) => {
          const text =
            normalizeSearchText(
              [
                tool.title,
                tool.description,
                tool.category,
                tool.subCategory,
                tool.badge,
                tool.provider ?? "",
              ].join(" ")
            );

          return text.includes(
            query
          );
        }
      ),
      query
    );
  }

  if (options.category) {
    result = result.filter(
      (tool) =>
        tool.category ===
        options.category
    );
  }

  if (options.subCategory) {
    result = result.filter(
      (tool) =>
        tool.subCategory ===
        options.subCategory
    );
  }

  if (options.pricing) {
    result = result.filter(
      (tool) =>
        tool.pricing ===
        options.pricing
    );
  }

  if (
    typeof options.aiPowered ===
    "boolean"
  ) {
    result = result.filter(
      (tool) =>
        tool.aiPowered ===
        options.aiPowered
    );
  }

  if (
    typeof options.trending ===
    "boolean"
  ) {
    result = result.filter(
      (tool) =>
        tool.trending ===
        options.trending
    );
  }

  if (
    typeof options.featured ===
    "boolean"
  ) {
    result = result.filter(
      (tool) =>
        tool.featured ===
        options.featured
    );
  }

  if (
    typeof options.isNew ===
    "boolean"
  ) {
    result = result.filter(
      (tool) =>
        tool.isNew ===
        options.isNew
    );
  }

  if (options.provider) {
    result = result.filter(
      (tool) =>
        normalizeSearchText(
          tool.provider ?? ""
        ).includes(
          normalizeSearchText(
            options.provider!
          )
        )
    );
  }

  if (
    options.limit &&
    options.limit > 0
  ) {
    result = result.slice(
      0,
      options.limit
    );
  }

  return result;
}

function createToolQuery(
  options: ToolQueryOptions
) {
  return queryTools(
    options
  );
}

function getFeaturedByCategory(
  category: ToolCategory,
  limit = 4
) {
  return queryTools({
    category,
    featured: true,
    limit,
  });
}

function getTrendingBySubCategory(
  subCategory: string,
  limit = 4
) {
  return queryTools({
    subCategory,
    trending: true,
    limit,
  });
}

function getFreeAITools(
  limit = 12
) {
  return queryTools({
    pricing: "Free",
    aiPowered: true,
    limit,
  });
}

function getNewAITools(
  limit = 12
) {
  return queryTools({
    isNew: true,
    aiPowered: true,
    limit,
  });
}

function getFeaturedAITools(
  limit = 12
) {
  return queryTools({
    featured: true,
    aiPowered: true,
    limit,
  });
}

function getTrendingAITools(
  limit = 12
) {
  return queryTools({
    trending: true,
    aiPowered: true,
    limit,
  });
}

function getToolRecommendations(
  tool: Tool,
  limit = 6
) {
  const related = queryTools({
    category:
      tool.category,
  }).filter(
    (item) =>
      item.id !== tool.id
  );

  return related
    .sort(
      (a, b) => {
        const aScore =
          (a.subCategory ===
          tool.subCategory
            ? 40
            : 0) +
          (a.trending
            ? 20
            : 0) +
          (a.featured
            ? 15
            : 0) +
          a.rating * 5;

        const bScore =
          (b.subCategory ===
          tool.subCategory
            ? 40
            : 0) +
          (b.trending
            ? 20
            : 0) +
          (b.featured
            ? 15
            : 0) +
          b.rating * 5;

        return bScore - aScore;
      }
    )
    .slice(0, limit);
}

function getMarketplaceFeed(
  limit = 20
) {
  return sortTools(
    tools,
    "Recommended"
  ).slice(
    0,
    limit
  );
}

function getMarketplaceFeedByCategory(
  category: ToolCategory,
  limit = 20
) {
  return sortTools(
    getToolsByCategory(
      category
    ),
    "Recommended"
  ).slice(
    0,
    limit
  );
}

function getMarketplaceFeedBySearch(
  query: string,
  limit = 20
) {
  return rankToolsBySearch(
    filterTools({
      query,
      category: "All",
      subCategory: "All",
      pricing: "All Pricing",
      type: "All Types",
      feature: "All Features",
      provider: "All Providers",
    }),
    query
  ).slice(
    0,
    limit
  );
}

function getMarketplacePayload() {
  return {
    tools: getValidTools(),
    categories:
      getToolCategories(),
    stats:
      getMarketplaceSummary(),
    health:
      getMarketplaceHealth(),
  };
}

// ==============================
// AiTools.tsx — Part 20/20
// Final marketplace utilities
// ==============================

function getMarketplaceCategories() {
  return getCategoryNavigation();
}

function getMarketplaceTools() {
  return getValidTools();
}

function getMarketplaceFeatured() {
  return getFeaturedTools(12);
}

function getMarketplaceTrending() {
  return getTrendingTools(12);
}

function getMarketplaceNew() {
  return getNewTools(12);
}

function getMarketplacePopular() {
  return getPopularTools(12);
}

function searchMarketplace(
  query: string,
  limit = 20
) {
  if (!query.trim()) {
    return getMarketplaceFeed(
      limit
    );
  }

  return getMarketplaceFeedBySearch(
    query,
    limit
  );
}

function searchMarketplaceByCategory(
  query: string,
  category: ToolCategory,
  limit = 20
) {
  const categoryTools =
    getToolsByCategory(
      category
    );

  if (!query.trim()) {
    return sortTools(
      categoryTools,
      "Recommended"
    ).slice(
      0,
      limit
    );
  }

  return rankToolsBySearch(
    categoryTools,
    query
  ).slice(
    0,
    limit
  );
}

function getMarketplaceToolCount() {
  return tools.length;
}

function getMarketplaceCategoryCount() {
  return getToolCategories()
    .length;
}

function getMarketplaceAverageRating() {
  return calculateAverageRating();
}

function getMarketplaceUserCount() {
  return calculateTotalUsers();
}

function getMarketplaceStatus() {
  const summary =
    getMarketplaceSummary();

  return {
    totalTools:
      summary.totalTools,

    categories:
      summary.categories,

    aiTools:
      summary.aiTools,

    freeTools:
      summary.freeTools,

    proTools:
      summary.proTools,

    trending:
      summary.trendingTools,

    newTools:
      summary.newTools,

    featured:
      summary.featuredTools,

    averageRating:
      getMarketplaceAverageRating(),

    totalUsers:
      getMarketplaceUserCount(),
  };
}

function getToolMetadata(
  toolId: string
) {
  const tool =
    getToolById(
      toolId
    );

  if (!tool) {
    return null;
  }

  return {
    ...createToolShareData(
      tool
    ),

    status:
      getToolAvailabilityLabel(
        tool
      ),

    available:
      getToolAvailability(
        tool
      ),

    categoryDescription:
      getCategoryDescription(
        tool.category
      ),

    recommendations:
      getToolRecommendations(
        tool,
        6
      ),
  };
}

function getMarketplaceSearchMetadata(
  query: string
) {
  const results =
    searchMarketplace(
      query,
      20
    );

  return {
    query,
    count:
      results.length,

    results:
      results.map(
        (tool) => ({
          id: tool.id,
          title: tool.title,
          category:
            tool.category,
          route:
            normalizeToolRoute(
              tool.route
            ),
          rating:
            tool.rating,
          pricing:
            tool.pricing,
        })
      ),
  };
}

function getMarketplaceExport() {
  return {
    generatedAt:
      new Date().toISOString(),

    marketplace:
      createMarketplaceShareData(),

    status:
      getMarketplaceStatus(),

    categories:
      getMarketplaceCategories(),

    tools:
      getMarketplaceTools().map(
        createToolShareData
      ),
  };
}

// ==============================
// Final public helpers
// ==============================

export {
  CATEGORY_LIST,
  SORT_OPTIONS,
  PRICING_OPTIONS,
  TOOL_TYPES,
  TOOL_FEATURES,
  TOOL_PROVIDERS,

  getPopularTools,
  getTrendingTools,
  getNewTools,
  getFeaturedTools,

  getToolsByCategory,
  getToolsBySubCategory,
  getToolsByPricing,

  getAITools,
  getFreeTools,
  getProTools,

  getRecommendedTools,
  getRelatedTools,
  getAlternativeTools,

  getToolById,
  getToolByRoute,

  queryTools,
  searchMarketplace,
  searchMarketplaceByCategory,

  getMarketplaceFeed,
  getMarketplaceFeedByCategory,
  getMarketplaceFeedBySearch,

  getMarketplaceSummary,
  getMarketplaceStatus,
  getMarketplaceToolCount,
  getMarketplaceCategoryCount,

  getMarketplaceAverageRating,
  getMarketplaceUserCount,

  getMarketplaceCategories,
  getMarketplaceTools,
  getMarketplaceFeatured,
  getMarketplaceTrending,
  getMarketplaceNew,
  getMarketplacePopular,

  getToolMetadata,
  getMarketplaceSearchMetadata,
  getMarketplaceExport,

  createToolShareData,
  createMarketplaceShareData,
  createToolShareUrl,
  createMarketplaceUrl,

  copyToolLink,
  copyMarketplaceLink,

  shareTool,
  shareMarketplace,
};
