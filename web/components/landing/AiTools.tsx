"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Copy,
  Crown,
  Database,
  ExternalLink,
  Filter,
  Flame,
  Grid3X3,
  Heart,
  Image as ImageIcon,
  Info,
  LayoutGrid,
  List,
  Loader2,
  Menu,
  Mic2,
  Music2,
  Play,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  Wand2,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   TYPES
   ========================================================= */

export type ToolBadge =
  | "Popular"
  | "New"
  | "Pro"
  | "Free"
  | "Beta"
  | "Trending"
  | "AI"
  | "Enterprise"
  | "Featured";

export type ToolPricing =
  | "Free"
  | "Freemium"
  | "Pro"
  | "Enterprise";

export type ToolCategory =
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

export type ToolSubCategory =
  | "Song Generation"
  | "Lyrics"
  | "Singing"
  | "Voice"
  | "Voice Clone"
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
  | "Presentation"
  | "Automation"
  | "Business Intelligence"
  | "Marketing Automation text"
  | "Productivity"
  | "Education"
  | "Translation"
  | "Chatbot"
  | "Transcription"
  | "Text to Speech"
  | "Speech to Text"
  | "3D"
  | "Animation"
  | "Presentation Design"
  | "Document";

export type ToolType =
  | "AI"
  | "No-Code"
  | "Automation"
  | "Developer"
  | "Creative"
  | "Business"
  | "Productivity"
  | "Research";

export type ToolFeature =
  | "Text to Audio"
  | "Text to Image"
  | "Text to Video"
  | "Text to Code"
  | "Audio to Text"
  | "Image Editing"
  | "Video Editing"
  | "Voice AI"
  | "Music AI"
  | "Code AI"
  | "Workflow"
  | "API"
  | "Browser"
  | "Upload"
  | "Download"
  | "Realtime"
  | "Batch"
  | "Multilingual";

export type Tool = {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  subCategory: ToolSubCategory;
  type: ToolType;
  badge: ToolBadge;
  pricing: ToolPricing;
  rating: number;
  users: number;
  thumbnail: string;
  route: string;
  provider: string;
  features: ToolFeature[];
  icon?: string;
  featured?: boolean;
  trending?: boolean;
  isNew?: boolean;
  aiPowered?: boolean;
  verified?: boolean;
  animated?: boolean;
};

export type ToolsTab =
  | "all"
  | "trending"
  | "new"
  | "favorites"
  | "free"
  | "pro";

export type ToolsSortMode =
  | "Recommended"
  | "Popular"
  | "Newest"
  | "Highest Rated"
  | "Most Used";

export type ToolsFilterState = {
  category: "All" | ToolCategory;
  subCategory: "All" | ToolSubCategory;
  pricing: "All Pricing" | ToolPricing;
  type: "All Types" | ToolType;
  feature: "All Features" | ToolFeature;
  provider: "All Providers" | string;
};

export type ToolSection = {
  id: string;
  title: string;
  description: string;
  tools: Tool[];
  category?: ToolCategory;
};

export type PaginationInfo = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  hasPrevious: boolean;
  hasNext: boolean;
};

/* =========================================================
   CONSTANTS & DATASET
   ========================================================= */

export const TOOLS_PER_PAGE_GRID = 12;
export const TOOLS_STORAGE_KEY = "market-ai-favorite-tools";
export const TOOLS_RECENT_STORAGE_KEY = "market-ai-recent-tools";
export const TOOLS_USAGE_STORAGE_KEY = "market-ai-tool-usage";

export const TOOL_CATEGORIES: Array<"All" | ToolCategory> = [
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

export const TOOL_PRICING_OPTIONS: Array<"All Pricing" | ToolPricing> = [
  "All Pricing",
  "Free",
  "Freemium",
  "Pro",
  "Enterprise",
];

export const TOOL_TYPES: Array<ToolType> = [
  "AI",
  "No-Code",
  "Automation",
  "Developer",
  "Creative",
  "Business",
  "Productivity",
  "Research",
];

export const TOOL_FEATURES: Array<"All Features" | ToolFeature> = [
  "All Features",
  "Text to Audio",
  "Text to Image",
  "Text to Video",
  "Text to Code",
  "Audio to Text",
  "Image Editing",
  "Video Editing",
  "Voice AI",
  "Music AI",
  "Code AI",
  "Workflow",
  "API",
  "Browser",
  "Upload",
  "Download",
  "Realtime",
  "Batch",
  "Multilingual",
];

export const VALID_MARKETPLACE_TOOLS: Tool[] = [
  {
    id: "ai-song-generator",
    title: "AI Song Generator",
    description: "Create complete original songs from simple text prompts.",
    category: "Music",
    subCategory: "Song Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 125000,
    thumbnail: "/tools/music/ai-song-generator.webp",
    route: "/tools/music/ai-song-generator",
    provider: "Market AI",
    features: ["Text to Audio", "Music AI", "Download", "Multilingual"],
    icon: "🎵",
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
  },
  {
    id: "ai-video-generator",
    title: "AI Video Generator",
    description: "Generate engaging videos from text prompts.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 164000,
    thumbnail: "/tools/video/ai-video-generator.webp",
    route: "/tools/video/ai-video-generator",
    provider: "Market AI",
    features: ["Text to Video", "Download", "Realtime"],
    icon: "🎥",
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
  },
];

/* =========================================================
   CORE UTILITIES & HELPERS
   ========================================================= */

export function normalizeToolText(text: string): string {
  return text.toLowerCase().trim();
}

export function normalizeToolRoute(route: string): string {
  return route.startsWith("/") ? route : `/${route}`;
}

export function normalizeToolRating(rating: number): number {
  return Math.max(0, Math.min(5, rating));
}

export function formatToolUsers(users: number): string {
  if (users >= 1000000) return `${(users / 1000000).toFixed(1)}M`;
  if (users >= 1000) return `${(users / 1000).toFixed(1)}K`;
  return users.toString();
}

export function formatToolCount(count: number): string {
  return formatToolUsers(count);
}

export function formatToolRating(rating: number): string {
  return normalizeToolRating(rating).toFixed(1);
}

export function parseToolCategory(val: string): "All" | ToolCategory {
  return TOOL_CATEGORIES.includes(val as any) ? (val as ToolCategory) : "All";
}

export function parseToolPricing(val: string): "All Pricing" | ToolPricing {
  return TOOL_PRICING_OPTIONS.includes(val as any) ? (val as ToolPricing) : "All Pricing";
}

export function parseToolType(val: string): "All Types" | ToolType {
  return TOOL_TYPES.includes(val as any) ? (val as ToolType) : "All Types";
}

export function parseToolSubCategory(val: string): "All" | ToolSubCategory {
  return val as any;
}

export function parseToolFeature(val: string): "All Features" | ToolFeature {
  return TOOL_FEATURES.includes(val as any) ? (val as ToolFeature) : "All Features";
}

export function parseToolProvider(val: string): "All Providers" | string {
  return val;
}

export function parseToolsSort(val: string): ToolsSortMode {
  return ["Popular", "Newest", "Highest Rated", "Most Used"].includes(val)
    ? (val as ToolsSortMode)
    : "Recommended";
}

export function countActiveFilters(filters: ToolsFilterState): number {
  let count = 0;
  if (filters.category !== "All") count++;
  if (filters.subCategory !== "All") count++;
  if (filters.pricing !== "All Pricing") count++;
  if (filters.type !== "All Types") count++;
  if (filters.feature !== "All Features") count++;
  if (filters.provider !== "All Providers") count++;
  return count;
}

export function createDefaultToolFilters(): ToolsFilterState {
  return {
    category: "All",
    subCategory: "All",
    pricing: "All Pricing",
    type: "All Types",
    feature: "All Features",
    provider: "All Providers",
  };
}

export function createDefaultSearchState() {
  return { query: "", page: 1, perPage: TOOLS_PER_PAGE_GRID, sort: "Recommended" as ToolsSortMode };
}

export function loadFavoriteToolIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(TOOLS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavoriteToolIds(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
  } catch {}
}

export function isToolFavorite(id: string, favorites: string[]): boolean {
  return favorites.includes(id);
}

export function toggleToolFavorite(id: string, favorites: string[]): string[] {
  return favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id];
}

export function addRecentTool(toolId: string) {
  if (typeof window === "undefined") return;
  try {
    const stored = window.localStorage.getItem(TOOLS_RECENT_STORAGE_KEY);
    let list = stored ? JSON.parse(stored) : [];
    list = [toolId, ...list.filter((id: string) => id !== toolId)].slice(0, 20);
    window.localStorage.setItem(TOOLS_RECENT_STORAGE_KEY, JSON.stringify(list));
  } catch {}
}

export function recordToolUsage(toolId: string) {
  if (typeof window === "undefined") return;
  try {
    const stored = window.localStorage.getItem(TOOLS_USAGE_STORAGE_KEY);
    const records = stored ? JSON.parse(stored) : {};
    records[toolId] = (records[toolId] || 0) + 1;
    window.localStorage.setItem(TOOLS_USAGE_STORAGE_KEY, JSON.stringify(records));
  } catch {}
}

export function getToolUsageCount(toolId: string): number {
  if (typeof window === "undefined") return 0;
  try {
    const stored = window.localStorage.getItem(TOOLS_USAGE_STORAGE_KEY);
    const records = stored ? JSON.parse(stored) : {};
    return records[toolId] || 0;
  } catch {
    return 0;
  }
}

export async function copyToolUrl(tool: Tool): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(`${window.location.origin}${normalizeToolRoute(tool.route)}`);
    return true;
  } catch {
    return false;
  }
}

export async function shareToolWithNativeAPI(tool: Tool): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.share) return false;
  try {
    await navigator.share({
      title: tool.title,
      text: tool.description,
      url: `${window.location.origin}${normalizeToolRoute(tool.route)}`,
    });
    return true;
  } catch {
    return false;
  }
}

export function trackToolView(id: string) {}
export function trackToolOpen(id: string) {}
export function trackToolFavorite(id: string, fav: boolean) {}
export function trackToolCopy(id: string) {}
export function trackToolShare(id: string) {}
export function trackToolSearch(id: string) {}

export function getAvailableCategories() {
  return TOOL_CATEGORIES.filter((c) => c !== "All") as ToolCategory[];
}

export function getAvailablePricingOptions() {
  return TOOL_PRICING_OPTIONS.filter((p) => p !== "All Pricing") as ToolPricing[];
}

export function getAvailableToolTypes() {
  return TOOL_TYPES;
}

export function getAvailableSubCategories(cat?: string) {
  return Array.from(new Set(VALID_MARKETPLACE_TOOLS.map((t) => t.subCategory)));
}

export function getAvailableToolFeatures() {
  return TOOL_FEATURES.filter((f) => f !== "All Features") as ToolFeature[];
}

export function getAvailableProviders() {
  return Array.from(new Set(VALID_MARKETPLACE_TOOLS.map((t) => t.provider)));
}

export function updateToolCategory(state: any, category: "All" | ToolCategory) {
  return { ...state, filters: { ...state.filters, category } };
}

export function getToolBadge(tool: Tool): string {
  return tool.isNew ? "New" : tool.trending ? "Trending" : tool.badge;
}

export function getToolPricingLabel(tool: Tool): string {
  return tool.pricing === "Freemium" ? "Free + Pro" : tool.pricing;
}

export function getToolFeatureLabels(tool: Tool, limit = 4): string[] {
  return tool.features.slice(0, limit);
}

export function getToolAnchorId(tool: Tool): string {
  return `tool-${tool.id}`;
}

export function getToolAriaLabel(tool: Tool): string {
  return `${tool.title}, ${tool.category}, ${tool.pricing}`;
}

export function getToolFavoriteLabel(tool: Tool, favorite: boolean): string {
  return favorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`;
}

export function getToolDetailsLabel(tool: Tool): string {
  return `View details for ${tool.title}`;
}

export function getToolShareLabel(tool: Tool): string {
  return `Share ${tool.title}`;
}

export function getToolStarRating(rating: number) {
  const normalized = normalizeToolRating(rating);
  return Array.from({ length: 5 }, (_, i) => ({
    filled: normalized >= i + 1,
    half: normalized >= i + 0.5 && normalized < i + 1,
  }));
}

export function handleToolKeyboardAction(event: React.KeyboardEvent): string | null {
  if (event.key === "Enter") return "open";
  if (event.key === "f") return "favorite";
  if (event.key === "d") return "details";
  if (event.key === "s") return "share";
  return null;
}

export function getResultRangeText(pagination: PaginationInfo): string {
  if (pagination.totalItems === 0) return "0 results";
  return `${pagination.startIndex + 1}-${pagination.endIndex} of ${pagination.totalItems}`;
}

export function buildPageNumbers(currentPage: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  return [1, "ellipsis", currentPage, "ellipsis", totalPages];
}

export function clampToolsPage(page: number, totalPages: number): number {
  return Math.min(Math.max(1, page), Math.max(1, totalPages));
}

export function buildToolsEmptyState(query = "", filters?: ToolsFilterState) {
  if (query) return { title: "No tools found", description: `No tools matched "${query}".` };
  return { title: "No matching tools", description: "Try changing your active filters." };
}

export function getToolSearchSuggestions(query: string, limit = 6): Tool[] {
  if (!query) return VALID_MARKETPLACE_TOOLS.slice(0, limit);
  return VALID_MARKETPLACE_TOOLS.filter((t) =>
    normalizeToolText(t.title).includes(normalizeToolText(query))
  ).slice(0, limit);
}

export function discoverMarketplaceTools(options: any) {
  let tools = [...VALID_MARKETPLACE_TOOLS];
  if (options.query) {
    tools = tools.filter((t) =>
      normalizeToolText(t.title).includes(normalizeToolText(options.query))
    );
  }
  if (options.category && options.category !== "All") {
    tools = tools.filter((t) => t.category === options.category);
  }
  if (options.tab === "favorites" && options.favorites) {
    tools = tools.filter((t) => options.favorites.includes(t.id));
  }

  const totalItems = tools.length;
  const page = options.page || 1;
  const perPage = options.perPage || 12;
  const totalPages = Math.ceil(totalItems / perPage) || 1;
  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);

  return {
    tools: tools.slice(startIndex, endIndex),
    pagination: {
      page,
      perPage,
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      hasPrevious: page > 1,
      hasNext: page < totalPages,
    },
  };
}

export const TOOL_TAB_LABELS: Record<ToolsTab, string> = {
  all: "All Tools",
  trending: "Trending",
  new: "New",
  favorites: "Favorites",
  free: "Free",
  pro: "Pro",
};

export const TOOL_TAB_ICONS: Record<ToolsTab, React.ElementType> = {
  all: Grid3X3,
  trending: Flame,
  new: Sparkles,
  favorites: Heart,
  free: Check,
  pro: Crown,
};

export function getToolsTabCount(tab: ToolsTab, favorites: string[]): number {
  if (tab === "favorites") return favorites.length;
  return VALID_MARKETPLACE_TOOLS.length;
}

export const MARKETPLACE_STATISTICS = {
  total: VALID_MARKETPLACE_TOOLS.length,
  categories: TOOL_CATEGORIES.length - 1,
};

export const MARKETPLACE_AVERAGE_RATING = 4.8;
export const MARKETPLACE_TOTAL_USERS = 2500000;

export const MARKETPLACE_CATEGORY_INFO = getAvailableCategories().map((cat) => ({
  id: cat,
  title: cat,
  count: VALID_MARKETPLACE_TOOLS.filter((t) => t.category === cat).length,
  icon: Sparkles,
}));

export const MARKETPLACE_COLLECTIONS: ToolSection[] = [
  {
    id: "featured",
    title: "Featured AI Tools",
    description: "Hand-picked tools selected for productivity.",
    tools: VALID_MARKETPLACE_TOOLS,
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<ToolsTab>("all");
  const [filters, setFilters] = useState<ToolsFilterState>(createDefaultToolFilters());
  const [sortMode, setSortMode] = useState<ToolsSortMode>("Recommended");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(TOOLS_PER_PAGE_GRID);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [copiedToolId, setCopiedToolId] = useState<string | null>(null);

  useEffect(() => {
    setFavorites(loadFavoriteToolIds());
  }, []);

  const marketplaceResult = useMemo(
    () =>
      discoverMarketplaceTools({
        query: searchQuery,
        category: filters.category,
        subCategory: filters.subCategory,
        pricing: filters.pricing,
        type: filters.type,
        feature: filters.feature,
        provider: filters.provider,
        sort: sortMode,
        page,
        perPage,
        tab: activeTab,
        favorites,
      }),
    [searchQuery, filters, sortMode, page, perPage, activeTab, favorites]
  );

  const pagination = marketplaceResult.pagination;
  const categoryInfo = MARKETPLACE_CATEGORY_INFO;
  const activeFilterCount = countActiveFilters(filters);

  const suggestions = useMemo(
    () => getToolSearchSuggestions(searchQuery, 6),
    [searchQuery]
  );

  const handleFavorite = useCallback(
    (tool: Tool) => {
      const next = toggleToolFavorite(tool.id, favorites);
      setFavorites(next);
      saveFavoriteToolIds(next);
      trackToolFavorite(tool.id, next.includes(tool.id));
    },
    [favorites]
  );

  const handleOpenTool = useCallback((tool: Tool) => {
    trackToolView(tool.id);
    trackToolOpen(tool.id);
    addRecentTool(tool.id);
    recordToolUsage(tool.id);
    window.location.href = normalizeToolRoute(tool.route);
  }, []);

  const handleDetails = useCallback((tool: Tool) => {
    setSelectedTool(tool);
    trackToolView(tool.id);
  }, []);

  const handleCopy = useCallback(async (tool: Tool) => {
    const success = await copyToolUrl(tool);
    if (success) {
      setCopiedToolId(tool.id);
      trackToolCopy(tool.id);
      window.setTimeout(() => setCopiedToolId(null), 1800);
    }
  }, []);

  const handleShare = useCallback(async (tool: Tool) => {
    const shared = await shareToolWithNativeAPI(tool);
    if (!shared) {
      await copyToolUrl(tool);
    }
    trackToolShare(tool.id);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage(1);
    if (value.trim()) {
      trackToolSearch(suggestions[0]?.id ?? "");
    }
  };

  const handleClearFilters = () => {
    setFilters(createDefaultToolFilters());
    setPage(1);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setFilters(createDefaultToolFilters());
    setSortMode("Recommended");
    setActiveTab("all");
    setPage(1);
  };

  const handleCategoryChange = (category: "All" | ToolCategory) => {
    setFilters((current) => updateToolCategory({ filters: current }, category).filters);
    setPage(1);
  };

  const handleSubCategoryChange = (subCategory: "All" | ToolSubCategory) => {
    setFilters((current) => ({ ...current, subCategory }));
    setPage(1);
  };

  const handlePricingChange = (pricing: "All Pricing" | ToolPricing) => {
    setFilters((current) => ({ ...current, pricing }));
    setPage(1);
  };

  const handleTypeChange = (type: "All Types" | ToolType) => {
    setFilters((current) => ({ ...current, type }));
    setPage(1);
  };

  const handleFeatureChange = (feature: "All Features" | ToolFeature) => {
    setFilters((current) => ({ ...current, feature }));
    setPage(1);
  };

  const handleProviderChange = (provider: "All Providers" | string) => {
    setFilters((current) => ({ ...current, provider }));
    setPage(1);
  };

  const handleTabChange = (tab: ToolsTab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortMode(parseToolsSort(value));
    setPage(1);
  };

  const hasResults = marketplaceResult.tools.length > 0;
  const emptyState = buildToolsEmptyState(searchQuery, filters);

  return (
    <section id="ai-tools" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            <Sparkles className="h-4 w-4" /> AI TOOLS MARKETPLACE
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              In One Place
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Discover AI-powered and traditional tools for music, voice, video, image, code, business, marketing, education, productivity, research and automation.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">{formatToolCount(MARKETPLACE_STATISTICS.total)}</div>
            <div className="mt-1 text-sm text-muted-foreground">Tools</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">{formatToolCount(MARKETPLACE_STATISTICS.categories)}</div>
            <div className="mt-1 text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">{MARKETPLACE_AVERAGE_RATING.toFixed(1)}/5</div>
            <div className="mt-1 text-sm text-muted-foreground">Avg. Rating</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">{formatToolCount(MARKETPLACE_TOTAL_USERS)}</div>
            <div className="mt-1 text-sm text-muted-foreground">Users</div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search AI tools..."
              aria-label="Search AI tools"
              className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-14 text-base text-white outline-none backdrop-blur transition placeholder:text-muted-foreground focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {searchQuery && suggestions.length > 0 && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-2 shadow-2xl backdrop-blur-xl">
              {suggestions.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => {
                    setSearchQuery(tool.title);
                    setPage(1);
                  }}
                  className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-white/10"
                >
                  <span className="text-2xl">{tool.icon || "🔧"}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-white">{tool.title}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {tool.category} • {tool.subCategory}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center justify-center gap-2">
            {(Object.keys(TOOL_TAB_LABELS) as ToolsTab[]).map((tab) => {
              const Icon = TOOL_TAB_ICONS[tab];
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition",
                    active
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
                      : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {TOOL_TAB_LABELS[tab]}
                  <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs">
                    {getToolsTabCount(tab, favorites)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            onClick={() => handleCategoryChange("All")}
            className={[
              "rounded-2xl border p-4 text-left transition",
              filters.category === "All"
                ? "border-violet-500/60 bg-violet-500/10"
                : "border-white/10 bg-white/5 hover:border-white/20",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">All Categories</span>
              <Grid3X3 className="h-5 w-5 text-violet-400" />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{VALID_MARKETPLACE_TOOLS.length} tools</div>
          </button>

          {categoryInfo.slice(0, 7).map((category) => {
            const Icon = category.icon;
            const active = filters.category === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={[
                  "rounded-2xl border p-4 text-left transition",
                  active
                    ? "border-violet-500/60 bg-violet-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{category.title}</span>
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{category.count} tools</div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs">{activeFilterCount}</span>
                )}
              </button>

              <select
                value={filters.category}
                onChange={(e) => handleCategoryChange(parseToolCategory(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All">All Categories</option>
                {getAvailableCategories().map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={filters.pricing}
                onChange={(e) => handlePricingChange(parseToolPricing(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Pricing">All Pricing</option>
                {getAvailablePricingOptions().map((pr) => (
                  <option key={pr} value={pr}>
                    {pr}
                  </option>
                ))}
              </select>

              <select
                value={filters.type}
                onChange={(e) => handleTypeChange(parseToolType(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Types">All Types</option>
                {getAvailableToolTypes().map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-muted-foreground sm:block">{getResultRangeText(pagination)}</span>
              <select
                value={sortMode}
                onChange={(e) => handleSortChange(e.target.value)}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
                aria-label="Sort tools"
              >
                <option>Recommended</option>
                <option>Popular</option>
                <option>Newest</option>
                <option>Highest Rated</option>
                <option>Most Used</option>
              </select>
            </div>
          </div>

          {mobileFiltersOpen && (
            <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-4">
              <select
                value={filters.subCategory}
                onChange={(e) => handleSubCategoryChange(parseToolSubCategory(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All">All Sub-Categories</option>
                {getAvailableSubCategories(filters.category).map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>

              <select
                value={filters.feature}
                onChange={(e) => handleFeatureChange(parseToolFeature(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Features">All Features</option>
                {getAvailableToolFeatures().map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>

              <select
                value={filters.provider}
                onChange={(e) => handleProviderChange(parseToolProvider(e.target.value))}
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Providers">All Providers</option>
                {getAvailableProviders().map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleClearFilters}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {hasResults ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {marketplaceResult.tools.map((tool) => {
              const favorite = isToolFavorite(tool.id, favorites);
              return (
                <article
                  key={tool.id}
                  id={getToolAnchorId(tool)}
                  tabIndex={0}
                  aria-label={getToolAriaLabel(tool)}
                  onKeyDown={(e) => {
                    const action = handleToolKeyboardAction(e);
                    if (action === "open") { e.preventDefault(); handleOpenTool(tool); }
                    if (action === "favorite") { e.preventDefault(); handleFavorite(tool); }
                    if (action === "details") { e.preventDefault(); handleDetails(tool); }
                    if (action === "share") { e.preventDefault(); handleShare(tool); }
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/[0.07] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-3xl">
                      {tool.icon || "🔧"}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleFavorite(tool)}
                        aria-label={getToolFavoriteLabel(tool, favorite)}
                        className={[
                          "rounded-xl p-2 transition",
                          favorite ? "bg-pink-500/10 text-pink-400" : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                        ].join(" ")}
                      >
                        <Heart className="h-5 w-5" fill={favorite ? "currentColor" : "none"} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDetails(tool)}
                        aria-label={getToolDetailsLabel(tool)}
                        className="rounded-xl bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                      >
                        <Info className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                      {getToolBadge(tool)}
                    </span>
                    {tool.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </span>
                    )}
                    {tool.aiPowered && (
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        AI
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{tool.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-muted-foreground">{tool.description}</p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{tool.category}</span>
                    <span>•</span>
                    <span>{tool.subCategory}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {getToolStarRating(tool.rating).map((star, index) => (
                          <Star
                            key={index}
                            className={[
                              "h-4 w-4",
                              star.filled || star.half ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
                            ].join(" ")}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white">{formatToolRating(tool.rating)}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{formatToolCount(tool.users)} users</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {getToolFeatureLabels(tool, 3).map((feature) => (
                      <span key={feature} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenTool(tool)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                    >
                      Open Tool <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare(tool)}
                      aria-label={getToolShareLabel(tool)}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopy(tool)}
                      aria-label={`Copy ${tool.title} link`}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                    >
                      {copiedToolId === tool.id ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
              <Search className="h-7 w-7 text-violet-400" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">{emptyState.title}</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{emptyState.description}</p>
            <button
              type="button"
              onClick={handleClearAll}
              className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Browse All Tools
            </button>
          </div>
        )}

        {pagination.totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="text-sm text-muted-foreground">{getResultRangeText(pagination)}</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!pagination.hasPrevious}
                onClick={() => setPage((c) => Math.max(1, c - 1))}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {buildPageNumbers(pagination.page, pagination.totalPages).map((item, index) =>
                item === "ellipsis" ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">...</span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPage(clampToolsPage(item, pagination.totalPages))}
                    className={[
                      "min-w-10 rounded-xl px-3 py-2 text-sm font-semibold transition",
                      pagination.page === item
                        ? "bg-violet-600 text-white"
                        : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                )
              )}

              <button
                type="button"
                disabled={!pagination.hasNext}
                onClick={() => setPage((c) => c + 1)}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-24">
          <div className="text-center">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400">
              DISCOVER
            </span>
            <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">Explore More AI Tools</h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Browse curated collections based on popularity, category, pricing and capabilities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {MARKETPLACE_COLLECTIONS.slice(0, 6).map((collection) => (
              <div key={collection.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{collection.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{collection.description}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-violet-400" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {collection.tools.slice(0, 4).map((tool) => (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => handleDetails(tool)}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3 text-left transition hover:bg-white/10"
                    >
                      <span className="text-2xl">{tool.icon || "🔧"}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">{tool.title}</span>
                        <span className="block text-xs text-muted-foreground">{tool.category}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/5 to-cyan-500/10 p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_55%)]" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h3 className="mt-6 text-3xl font-black text-white sm:text-4xl">Ready to Create More?</h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Explore the marketplace and find the right tools for your next project.
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Explore All Tools
            </button>
          </div>
        </div>
      </div>

      {selectedTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedTool.title} details`}
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-background p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-3xl">
                  {selectedTool.icon || "🔧"}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{selectedTool.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedTool.provider}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTool(null)}
                aria-label="Close tool details"
                className="rounded-xl bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                {getToolPricingLabel(selectedTool)}
              </span>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {selectedTool.category}
              </span>
              {selectedTool.verified && (
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Verified
                </span>
              )}
              {selectedTool.aiPowered && (
                <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-400">
                  AI Powered
                </span>
              )}
            </div>

            <p className="mt-7 leading-8 text-muted-foreground">{selectedTool.description}</p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">{formatToolRating(selectedTool.rating)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Rating</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">{formatToolCount(selectedTool.users)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Users</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">{selectedTool.type}</div>
                <div className="mt-1 text-xs text-muted-foreground">Type</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">{getToolUsageCount(selectedTool.id)}</div>
                <div className="mt-1 text-xs text-muted-foreground">Your Uses</div>
              </div>
            </div>

            <div className="mt-7">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Features</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedTool.features.map((feature) => (
                  <span key={feature} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => handleOpenTool(selectedTool)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3.5 font-bold text-white transition hover:scale-[1.02]"
              >
                Open Tool <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleFavorite(selectedTool)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                {isToolFavorite(selectedTool.id, favorites) ? "Remove Favorite" : "Add Favorite"}
              </button>
              <button
                type="button"
                onClick={() => handleShare(selectedTool)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
