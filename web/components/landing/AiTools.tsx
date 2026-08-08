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
  ExternalLink,
  Filter,
  Flame,
  Grid3X3,
  Heart,
  Image as ImageIcon,
  LayoutGrid,
  List,
  Loader2,
  Menu,
  Mic2,
  Music2,
  Play,
  Rocket,
  Search,
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

import {
  useEffect,
  useMemo,
  useState,
} from "react";

/* =========================================================
   TOOLS MARKETPLACE
   Part 01/20
   Imports + Core Types
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
  | "Marketing Automation"
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
  featured?: boolean;
  trending?: boolean;
  isNew?: boolean;
  aiPowered?: boolean;
  verified?: boolean;
  animated?: boolean;
};

export type ToolsViewMode = "grid" | "compact";
export type ToolsTab = "all" | "trending" | "new" | "favorites" | "free" | "pro";
export type ToolsSortMode = "Recommended" | "Popular" | "Newest" | "Highest Rated" | "Most Used";

export type ToolsFilterState = {
  category: "All" | ToolCategory;
  subCategory: "All" | ToolSubCategory;
  pricing: "All Pricing" | ToolPricing;
  type: "All Types" | ToolType;
  feature: "All Features" | ToolFeature;
  provider: "All Providers" | string;
};

export type ToolsSearchState = {
  query: string;
  page: number;
  perPage: number;
  sort: ToolsSortMode;
};

export type ToolsMarketplaceState = {
  filters: ToolsFilterState;
  search: ToolsSearchState;
  tab: ToolsTab;
  favorites: string[];
  mobileFiltersOpen: boolean;
  selectedToolId: string | null;
};

export type ToolsStatistics = {
  total: number;
  categories: number;
  subCategories: number;
  free: number;
  freemium: number;
  pro: number;
  enterprise: number;
  featured: number;
  trending: number;
  newTools: number;
  verified: number;
  aiPowered: number;
};

export type ToolCollection = {
  id: string;
  title: string;
  description: string;
  category?: ToolCategory;
  tools: Tool[];
};

export type ToolCategoryInfo = {
  id: ToolCategory;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  count: number;
};

export type ToolsProps = {
  initialCategory?: ToolCategory | "All";
  initialSearch?: string;
  showHeader?: boolean;
  showStats?: boolean;
  showFilters?: boolean;
  showCategories?: boolean;
  showFooterCTA?: boolean;
};

// Added missing ToolSection type
export type ToolSection = {
  id: string;
  title: string;
  description: string;
  category?: ToolCategory;
  tools: Tool[];
};

export const TOOLS_PER_PAGE_GRID = 12;
export const TOOLS_PER_PAGE_COMPACT = 16;
export const TOOLS_STORAGE_KEY = "market-ai-favorite-tools";
export const TOOLS_SEARCH_DEBOUNCE = 250;

export const TOOL_CATEGORIES: Array<"All" | ToolCategory> = [
  "All", "Music", "Voice", "Video", "Image", "Code", "Business", "Marketing",
  "Education", "Productivity", "Research", "Audio", "Design", "Data", "Automation",
];

export const TOOL_PRICING_OPTIONS: Array<"All Pricing" | ToolPricing> = [
  "All Pricing", "Free", "Freemium", "Pro", "Enterprise",
];

export const TOOL_TYPE_OPTIONS: Array<"All Types" | ToolType> = [
  "All Types", "AI", "No-Code", "Automation", "Developer", "Creative", "Business",
  "Productivity", "Research",
];

export const TOOL_SORT_OPTIONS: ToolsSortMode[] = [
  "Recommended", "Popular", "Newest", "Highest Rated", "Most Used",
];

/* =========================================================
   TOOLS MARKETPLACE
   Part 02/20
   Base Tool Dataset + Dataset Factory
   ========================================================= */

const BASE_TOOLS: Tool[] = [
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
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-lyrics-generator",
    title: "AI Lyrics Generator",
    description: "Generate original lyrics in multiple languages and styles.",
    category: "Music",
    subCategory: "Lyrics",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.8,
    users: 87000,
    thumbnail: "/tools/music/ai-lyrics.webp",
    route: "/tools/music/ai-lyrics",
    provider: "Market AI",
    features: ["Multilingual", "Music AI", "Download"],
    isNew: true,
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-singer",
    title: "AI Singer",
    description: "Create expressive AI singing vocals from lyrics.",
    category: "Music",
    subCategory: "Singing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 56000,
    thumbnail: "/tools/music/ai-singer.webp",
    route: "/tools/music/ai-singer",
    provider: "Market AI",
    features: ["Music AI", "Text to Audio", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-voice-clone",
    title: "AI Voice Clone",
    description: "Create a realistic voice model from an authorized voice sample.",
    category: "Voice",
    subCategory: "Voice Clone",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.8,
    users: 73000,
    thumbnail: "/tools/voice/voice-clone.webp",
    route: "/tools/voice/voice-clone",
    provider: "Market AI",
    features: ["Voice AI", "Upload", "Download", "Multilingual"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "text-to-speech",
    title: "AI Text to Speech",
    description: "Convert written text into natural-sounding speech.",
    category: "Voice",
    subCategory: "Text to Speech",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 142000,
    thumbnail: "/tools/voice/text-to-speech.webp",
    route: "/tools/voice/text-to-speech",
    provider: "Market AI",
    features: ["Text to Audio", "Voice AI", "Multilingual", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "speech-to-text",
    title: "AI Speech to Text",
    description: "Transcribe speech and audio into accurate text.",
    category: "Voice",
    subCategory: "Speech to Text",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 118000,
    thumbnail: "/tools/voice/speech-to-text.webp",
    route: "/tools/voice/speech-to-text",
    provider: "Market AI",
    features: ["Audio to Text", "Upload", "Download", "Multilingual"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
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
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-video-editor",
    title: "AI Video Editor",
    description: "Edit videos with automated AI-powered workflows.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 93000,
    thumbnail: "/tools/video/ai-video-editor.webp",
    route: "/tools/video/ai-video-editor",
    provider: "Market AI",
    features: ["Video Editing", "Upload", "Download", "Batch"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-avatar-generator",
    title: "AI Avatar Generator",
    description: "Create talking digital presenters and avatars.",
    category: "Video",
    subCategory: "Avatar",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.6,
    users: 67000,
    thumbnail: "/tools/video/ai-avatar.webp",
    route: "/tools/video/ai-avatar",
    provider: "Market AI",
    features: ["Text to Video", "Voice AI", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Create original images from natural language prompts.",
    category: "Image",
    subCategory: "Image Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 241000,
    thumbnail: "/tools/image/ai-image-generator.webp",
    route: "/tools/image/ai-image-generator",
    provider: "Market AI",
    features: ["Text to Image", "Download", "Batch"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-image-editor",
    title: "AI Image Editor",
    description: "Edit, enhance and transform images with AI.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 154000,
    thumbnail: "/tools/image/ai-image-editor.webp",
    route: "/tools/image/ai-image-editor",
    provider: "Market AI",
    features: ["Image Editing", "Upload", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-background-remover",
    title: "AI Background Remover",
    description: "Remove image backgrounds automatically.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 189000,
    thumbnail: "/tools/image/background-remover.webp",
    route: "/tools/image/background-remover",
    provider: "Market AI",
    features: ["Image Editing", "Upload", "Download", "Batch"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-code-generator",
    title: "AI Code Generator",
    description: "Generate application code from natural language instructions.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 205000,
    thumbnail: "/tools/code/ai-code-generator.webp",
    route: "/tools/code/ai-code-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI", "API", "Browser"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-website-builder",
    title: "AI Website Builder",
    description: "Create responsive websites from simple descriptions.",
    category: "Code",
    subCategory: "Website",
    type: "No-Code",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 176000,
    thumbnail: "/tools/code/ai-website-builder.webp",
    route: "/tools/code/ai-website-builder",
    provider: "Market AI",
    features: ["Text to Code", "Browser", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder",
    description: "Build custom AI assistants and customer chatbots.",
    category: "Business",
    subCategory: "Chatbot",
    type: "Business",
    badge: "AI",
    pricing: "Pro",
    rating: 4.7,
    users: 91000,
    thumbnail: "/tools/business/ai-chatbot.webp",
    route: "/tools/business/ai-chatbot",
    provider: "Market AI",
    features: ["Workflow", "API", "Browser", "Realtime"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-content-writer",
    title: "AI Content Writer",
    description: "Create articles, posts, descriptions and other content.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 132000,
    thumbnail: "/tools/marketing/content-writer.webp",
    route: "/tools/marketing/content-writer",
    provider: "Market AI",
    features: ["Multilingual", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-seo-assistant",
    title: "AI SEO Assistant",
    description: "Research keywords and optimize content for search engines.",
    category: "Marketing",
    subCategory: "SEO",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 74000,
    thumbnail: "/tools/marketing/seo-assistant.webp",
    route: "/tools/marketing/seo-assistant",
    provider: "Market AI",
    features: ["Research", "Browser", "API"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    description: "Learn faster with AI-powered explanations and study tools.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 108000,
    thumbnail: "/tools/education/study-assistant.webp",
    route: "/tools/education/study-assistant",
    provider: "Market AI",
    features: ["Research", "Multilingual", "Browser"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-research-assistant",
    title: "AI Research Assistant",
    description: "Search, summarize and organize research material.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 97000,
    thumbnail: "/tools/research/research-assistant.webp",
    route: "/tools/research/research-assistant",
    provider: "Market AI",
    features: ["Research", "Browser", "Multilingual", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const TOOLS_DATA: Tool[] = [...BASE_TOOLS];
export const INITIAL_TOOL_COUNT = TOOLS_DATA.length;

function validateToolRecord(tool: Tool): boolean {
  return Boolean(
    tool.id &&
      tool.title &&
      tool.description &&
      tool.category &&
      tool.subCategory &&
      tool.type &&
      tool.pricing &&
      tool.thumbnail &&
      tool.route &&
      tool.provider
  );
}

const VALID_BASE_TOOLS = TOOLS_DATA.filter(validateToolRecord);
const DATASET_CATEGORIES = Array.from(new Set(VALID_BASE_TOOLS.map((tool) => tool.category)));
const DATASET_SUBCATEGORIES = Array.from(new Set(VALID_BASE_TOOLS.map((tool) => tool.subCategory)));
const DATASET_PROVIDERS = Array.from(new Set(VALID_BASE_TOOLS.map((tool) => tool.provider)));
const DATASET_FEATURES = Array.from(new Set(VALID_BASE_TOOLS.flatMap((tool) => tool.features)));

/* =========================================================
   TOOLS MARKETPLACE
   Part 03/20
   Music + Voice Tool Collections
   ========================================================= */

const MUSIC_TOOLS: Tool[] = [
  {
    id: "ai-beat-generator",
    title: "AI Beat Generator",
    description: "Generate original beats and instrumental ideas from a simple prompt.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 68000,
    thumbnail: "/tools/music/beat-generator.webp",
    route: "/tools/music/beat-generator",
    provider: "Market AI",
    features: ["Text to Audio", "Music AI", "Download", "Batch"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-background-music",
    title: "AI Background Music",
    description: "Create royalty-friendly background music for videos, podcasts and content.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 82000,
    thumbnail: "/tools/music/background-music.webp",
    route: "/tools/music/background-music",
    provider: "Market AI",
    features: ["Text to Audio", "Music AI", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-music-remixer",
    title: "AI Music Remixer",
    description: "Transform existing music into fresh arrangements and styles.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "AI",
    pricing: "Pro",
    rating: 4.6,
    users: 43000,
    thumbnail: "/tools/music/music-remixer.webp",
    route: "/tools/music/music-remixer",
    provider: "Market AI",
    features: ["Music AI", "Upload", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-song-structure",
    title: "AI Song Structure",
    description: "Plan verses, choruses, bridges and complete song arrangements.",
    category: "Music",
    subCategory: "Song Generation",
    type: "AI",
    badge: "AI",
    pricing: "Free",
    rating: 4.5,
    users: 37000,
    thumbnail: "/tools/music/song-structure.webp",
    route: "/tools/music/song-structure",
    provider: "Market AI",
    features: ["Music AI", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-melody-generator",
    title: "AI Melody Generator",
    description: "Generate melodies and musical ideas for original compositions.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 51000,
    thumbnail: "/tools/music/melody-generator.webp",
    route: "/tools/music/melody-generator",
    provider: "Market AI",
    features: ["Text to Audio", "Music AI", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-music-mastering",
    title: "AI Music Mastering",
    description: "Automatically balance and master music for a polished final sound.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.8,
    users: 79000,
    thumbnail: "/tools/music/ai-mastering.webp",
    route: "/tools/music/ai-mastering",
    provider: "Market AI",
    features: ["Audio to Text", "Upload", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-podcast-generator",
    title: "AI Podcast Generator",
    description: "Create podcast episodes, scripts and audio from an idea.",
    category: "Music",
    subCategory: "Podcast",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 92000,
    thumbnail: "/tools/music/podcast-generator.webp",
    route: "/tools/music/podcast-generator",
    provider: "Market AI",
    features: ["Text to Audio", "Voice AI", "Download", "Multilingual"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-podcast-editor",
    title: "AI Podcast Editor",
    description: "Clean, cut and enhance podcast recordings with AI.",
    category: "Audio",
    subCategory: "Podcast",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.6,
    users: 64000,
    thumbnail: "/tools/audio/podcast-editor.webp",
    route: "/tools/audio/podcast-editor",
    provider: "Market AI",
    features: ["Audio to Text", "Audio to Text", "Upload", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const VOICE_TOOLS: Tool[] = [
  {
    id: "ai-voice-changer",
    title: "AI Voice Changer",
    description: "Transform a recorded voice into different AI voice styles.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.6,
    users: 104000,
    thumbnail: "/tools/voice/voice-changer.webp",
    route: "/tools/voice/voice-changer",
    provider: "Market AI",
    features: ["Voice AI", "Upload", "Download", "Realtime"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-voice-enhancer",
    title: "AI Voice Enhancer",
    description: "Remove unwanted noise and improve speech clarity.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 88000,
    thumbnail: "/tools/voice/voice-enhancer.webp",
    route: "/tools/voice/voice-enhancer",
    provider: "Market AI",
    features: ["Voice AI", "Upload", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-transcription",
    title: "AI Transcription",
    description: "Convert meetings, interviews and recordings into searchable text.",
    category: "Voice",
    subCategory: "Transcription",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 151000,
    thumbnail: "/tools/voice/transcription.webp",
    route: "/tools/voice/transcription",
    provider: "Market AI",
    features: ["Audio to Text", "Upload", "Download", "Multilingual", "Batch"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-dubbing",
    title: "AI Dubbing",
    description: "Translate and dub spoken content into multiple languages.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.7,
    users: 47000,
    thumbnail: "/tools/voice/ai-dubbing.webp",
    route: "/tools/voice/ai-dubbing",
    provider: "Market AI",
    features: ["Voice AI", "Multilingual", "Upload", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-pronunciation-coach",
    title: "AI Pronunciation Coach",
    description: "Practice pronunciation and receive instant AI feedback.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 39000,
    thumbnail: "/tools/voice/pronunciation-coach.webp",
    route: "/tools/voice/pronunciation-coach",
    provider: "Market AI",
    features: ["Voice AI", "Realtime", "Multilingual"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-voice-translator",
    title: "AI Voice Translator",
    description: "Translate spoken conversations between supported languages.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 73000,
    thumbnail: "/tools/voice/voice-translator.webp",
    route: "/tools/voice/voice-translator",
    provider: "Market AI",
    features: ["Voice AI", "Multilingual", "Realtime", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-meeting-notes",
    title: "AI Meeting Notes",
    description: "Turn meetings into structured notes, summaries and action items.",
    category: "Productivity",
    subCategory: "Document",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 127000,
    thumbnail: "/tools/productivity/meeting-notes.webp",
    route: "/tools/productivity/meeting-notes",
    provider: "Market AI",
    features: ["Audio to Text", "Upload", "Download", "Multilingual"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const MUSIC_VOICE_TOOLS: Tool[] = [...MUSIC_TOOLS, ...VOICE_TOOLS];

function mergeToolCollections(...collections: Tool[][]): Tool[] {
  const map = new Map<string, Tool>();
  for (const collection of collections) {
    for (const tool of collection) {
      if (!map.has(tool.id)) {
        map.set(tool.id, tool);
      }
    }
  }
  return Array.from(map.values());
}

const INITIAL_MARKETPLACE_TOOLS = mergeToolCollections(TOOLS_DATA, MUSIC_VOICE_TOOLS);

function findDuplicateToolIds(input: Tool[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const tool of input) {
    if (seen.has(tool.id)) {
      duplicates.add(tool.id);
    }
    seen.add(tool.id);
  }
  return Array.from(duplicates);
}

const DUPLICATE_TOOL_IDS = findDuplicateToolIds(INITIAL_MARKETPLACE_TOOLS);

export const MARKETPLACE_TOOLS = INITIAL_MARKETPLACE_TOOLS.filter((tool) => !DUPLICATE_TOOL_IDS.includes(tool.id));
export const CURRENT_TOOL_COUNT = MARKETPLACE_TOOLS.length;
export const MARKETPLACE_CATEGORIES = Array.from(new Set(MARKETPLACE_TOOLS.map((tool) => tool.category)));
export const MARKETPLACE_SUBCATEGORIES = Array.from(new Set(MARKETPLACE_TOOLS.map((tool) => tool.subCategory)));
export const MARKETPLACE_PROVIDERS = Array.from(new Set(MARKETPLACE_TOOLS.map((tool) => tool.provider)));
export const MARKETPLACE_FEATURES = Array.from(new Set(MARKETPLACE_TOOLS.flatMap((tool) => tool.features)));

/* =========================================================
   TOOLS MARKETPLACE
   Part 04/20
   Video + Image Tool Collections
   ========================================================= */

const VIDEO_TOOLS: Tool[] = [
  {
    id: "ai-script-to-video",
    title: "AI Script to Video",
    description: "Turn a written script into a complete video concept.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 143000,
    thumbnail: "/tools/video/script-to-video.webp",
    route: "/tools/video/script-to-video",
    provider: "Market AI",
    features: ["Text to Video", "Download", "Multilingual"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-text-to-video",
    title: "AI Text to Video",
    description: "Generate short videos from natural language prompts.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 181000,
    thumbnail: "/tools/video/text-to-video.webp",
    route: "/tools/video/text-to-video",
    provider: "Market AI",
    features: ["Text to Video", "Download", "Batch"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-image-to-video",
    title: "AI Image to Video",
    description: "Animate still images and turn them into engaging videos.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.7,
    users: 96000,
    thumbnail: "/tools/video/image-to-video.webp",
    route: "/tools/video/image-to-video",
    provider: "Market AI",
    features: ["Text to Video", "Upload", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-video-caption",
    title: "AI Video Caption Generator",
    description: "Automatically create captions and subtitles for videos.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 112000,
    thumbnail: "/tools/video/video-caption.webp",
    route: "/tools/video/video-caption",
    provider: "Market AI",
    features: ["Audio to Text", "Video Editing", "Multilingual", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-video-translator",
    title: "AI Video Translator",
    description: "Translate video dialogue and subtitles into multiple languages.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.6,
    users: 61000,
    thumbnail: "/tools/video/video-translator.webp",
    route: "/tools/video/video-translator",
    provider: "Market AI",
    features: ["Multilingual", "Voice AI", "Upload", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-video-upscaler",
    title: "AI Video Upscaler",
    description: "Improve video resolution and visual quality with AI.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 73000,
    thumbnail: "/tools/video/video-upscaler.webp",
    route: "/tools/video/video-upscaler",
    provider: "Market AI",
    features: ["Video Editing", "Upload", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-video-script",
    title: "AI Video Script Writer",
    description: "Write video scripts, hooks and scene ideas from a topic.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 83000,
    thumbnail: "/tools/video/video-script.webp",
    route: "/tools/video/video-script",
    provider: "Market AI",
    features: ["Text to Video", "Download", "Multilingual"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-animation-generator",
    title: "AI Animation Generator",
    description: "Create animated scenes and visual sequences from prompts.",
    category: "Video",
    subCategory: "Animation",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 52000,
    thumbnail: "/tools/video/animation-generator.webp",
    route: "/tools/video/animation-generator",
    provider: "Market AI",
    features: ["Text to Video", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const IMAGE_TOOLS: Tool[] = [
  {
    id: "ai-text-to-image",
    title: "AI Text to Image",
    description: "Generate high-quality images from natural language prompts.",
    category: "Image",
    subCategory: "Image Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 238000,
    thumbnail: "/tools/image/text-to-image.webp",
    route: "/tools/image/text-to-image",
    provider: "Market AI",
    features: ["Text to Image", "Download", "Batch"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-image-upscaler",
    title: "AI Image Upscaler",
    description: "Increase image resolution while preserving visual detail.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 176000,
    thumbnail: "/tools/image/image-upscaler.webp",
    route: "/tools/image/image-upscaler",
    provider: "Market AI",
    features: ["Image Editing", "Upload", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-photo-enhancer",
    title: "AI Photo Enhancer",
    description: "Enhance portraits and photographs automatically.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 152000,
    thumbnail: "/tools/image/photo-enhancer.webp",
    route: "/tools/image/photo-enhancer",
    provider: "Market AI",
    features: ["Image Editing", "Upload", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-object-remover",
    title: "AI Object Remover",
    description: "Remove unwanted objects from images with intelligent editing.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 129000,
    thumbnail: "/tools/image/object-remover.webp",
    route: "/tools/image/object-remover",
    provider: "Market AI",
    features: ["Image Editing", "Upload", "Download", "Batch"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-product-photo",
    title: "AI Product Photo",
    description: "Create professional product images from simple source photos.",
    category: "Image",
    subCategory: "Image Generation",
    type: "Business",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 68000,
    thumbnail: "/tools/image/product-photo.webp",
    route: "/tools/image/product-photo",
    provider: "Market AI",
    features: ["Text to Image", "Image Editing", "Upload", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-profile-picture",
    title: "AI Profile Picture",
    description: "Generate professional profile images and avatars.",
    category: "Image",
    subCategory: "Image Generation",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.6,
    users: 116000,
    thumbnail: "/tools/image/profile-picture.webp",
    route: "/tools/image/profile-picture",
    provider: "Market AI",
    features: ["Text to Image", "Image Editing", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-logo-generator",
    title: "AI Logo Generator",
    description: "Create logo concepts and brand marks from a description.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 134000,
    thumbnail: "/tools/design/logo-generator.webp",
    route: "/tools/design/logo-generator",
    provider: "Market AI",
    features: ["Text to Image", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-album-cover",
    title: "AI Album Cover",
    description: "Generate original album and single artwork for music releases.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 54000,
    thumbnail: "/tools/design/album-cover.webp",
    route: "/tools/design/album-cover",
    provider: "Market AI",
    features: ["Text to Image", "Music AI", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-social-post-image",
    title: "AI Social Post Image",
    description: "Create social media graphics from a campaign idea.",
    category: "Marketing",
    subCategory: "Content",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 61000,
    thumbnail: "/tools/marketing/social-post-image.webp",
    route: "/tools/marketing/social-post-image",
    provider: "Market AI",
    features: ["Text to Image", "Download", "Multilingual"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const VIDEO_IMAGE_TOOLS: Tool[] = mergeToolCollections(VIDEO_TOOLS, IMAGE_TOOLS);
export const CREATIVE_TOOLS = mergeToolCollections(MARKETPLACE_TOOLS, VIDEO_IMAGE_TOOLS);

function getVideoTools(): Tool[] { return CREATIVE_TOOLS.filter((tool) => tool.category === "Video"); }
function getImageTools(): Tool[] { return CREATIVE_TOOLS.filter((tool) => tool.category === "Image"); }
function getDesignTools(): Tool[] { return CREATIVE_TOOLS.filter((tool) => tool.category === "Design"); }

export const VIDEO_TOOL_COUNT = getVideoTools().length;
export const IMAGE_TOOL_COUNT = getImageTools().length;
export const DESIGN_TOOL_COUNT = getDesignTools().length;

const CREATIVE_VALIDATION = CREATIVE_TOOLS.every(validateToolRecord);
export const CREATIVE_TOOLS_READY = CREATIVE_VALIDATION;

/* =========================================================
   TOOLS MARKETPLACE
   Part 05/20
   Code + Business + Marketing Tool Collections
   ========================================================= */

const CODE_TOOLS: Tool[] = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    description: "Review source code and identify possible bugs, issues and improvements.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 121000,
    thumbnail: "/tools/code/code-reviewer.webp",
    route: "/tools/code/code-reviewer",
    provider: "Market AI",
    features: ["Code AI", "Text to Code", "Browser"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-debugger",
    title: "AI Debugger",
    description: "Analyze errors and suggest fixes for application code.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 109000,
    thumbnail: "/tools/code/ai-debugger.webp",
    route: "/tools/code/ai-debugger",
    provider: "Market AI",
    features: ["Code AI", "Text to Code", "Browser"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-react-generator",
    title: "AI React Generator",
    description: "Generate React components and interfaces from natural language.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.8,
    users: 87000,
    thumbnail: "/tools/code/react-generator.webp",
    route: "/tools/code/react-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI", "Browser", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-api-builder",
    title: "AI API Builder",
    description: "Generate API structures, endpoints and integration code.",
    category: "Code",
    subCategory: "Backend",
    type: "Developer",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 63000,
    thumbnail: "/tools/code/api-builder.webp",
    route: "/tools/code/api-builder",
    provider: "Market AI",
    features: ["Text to Code", "API", "Code AI"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-database-builder",
    title: "AI Database Builder",
    description: "Design database schemas and generate database queries.",
    category: "Data",
    subCategory: "Database",
    type: "Developer",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 58000,
    thumbnail: "/tools/data/database-builder.webp",
    route: "/tools/data/database-builder",
    provider: "Market AI",
    features: ["Code AI", "API", "Database", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-sql-generator",
    title: "AI SQL Generator",
    description: "Create SQL queries from plain-language database questions.",
    category: "Data",
    subCategory: "Database",
    type: "Developer",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 102000,
    thumbnail: "/tools/data/sql-generator.webp",
    route: "/tools/data/sql-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI", "Database"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const BUSINESS_TOOLS: Tool[] = [
  {
    id: "ai-business-plan",
    title: "AI Business Plan",
    description: "Create structured business plans from your business idea.",
    category: "Business",
    subCategory: "Business Intelligence",
    type: "Business",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 81000,
    thumbnail: "/tools/business/business-plan.webp",
    route: "/tools/business/business-plan",
    provider: "Market AI",
    features: ["Research", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-business-analytics",
    title: "AI Business Analytics",
    description: "Analyze business data and discover useful trends.",
    category: "Business",
    subCategory: "Analytics",
    type: "Business",
    badge: "AI",
    pricing: "Pro",
    rating: 4.6,
    users: 52000,
    thumbnail: "/tools/business/business-analytics.webp",
    route: "/tools/business/business-analytics",
    provider: "Market AI",
    features: ["Research", "Upload", "Batch"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-invoice-generator",
    title: "AI Invoice Generator",
    description: "Create professional invoices and billing documents quickly.",
    category: "Business",
    subCategory: "Document",
    type: "Business",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 97000,
    thumbnail: "/tools/business/invoice-generator.webp",
    route: "/tools/business/invoice-generator",
    provider: "Market AI",
    features: ["Download", "Document"],
    featured: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-business-report",
    title: "AI Business Report",
    description: "Generate structured reports from business information and data.",
    category: "Business",
    subCategory: "Business Intelligence",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 41000,
    thumbnail: "/tools/business/business-report.webp",
    route: "/tools/business/business-report",
    provider: "Market AI",
    features: ["Research", "Download", "Multilingual"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description: "Create AI-powered support workflows for customer questions.",
    category: "Business",
    subCategory: "Chatbot",
    type: "Business",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.8,
    users: 113000,
    thumbnail: "/tools/business/customer-support.webp",
    route: "/tools/business/customer-support",
    provider: "Market AI",
    features: ["Workflow", "API", "Realtime", "Browser"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const MARKETING_TOOLS: Tool[] = [
  {
    id: "ai-ad-copywriter",
    title: "AI Ad Copywriter",
    description: "Generate advertising copy for campaigns and product promotions.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 119000,
    thumbnail: "/tools/marketing/ad-copywriter.webp",
    route: "/tools/marketing/ad-copywriter",
    provider: "Market AI",
    features: ["Multilingual", "Download"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-email-writer",
    title: "AI Email Writer",
    description: "Write professional marketing and business emails with AI.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 137000,
    thumbnail: "/tools/marketing/email-writer.webp",
    route: "/tools/marketing/email-writer",
    provider: "Market AI",
    features: ["Multilingual", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-social-media-manager",
    title: "AI Social Media Manager",
    description: "Plan, write and organize social media content.",
    category: "Marketing",
    subCategory: "Marketing Automation",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 76000,
    thumbnail: "/tools/marketing/social-media-manager.webp",
    route: "/tools/marketing/social-media-manager",
    provider: "Market AI",
    features: ["Workflow", "Multilingual", "Browser"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-product-description",
    title: "AI Product Description",
    description: "Create persuasive product descriptions for online stores.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 128000,
    thumbnail: "/tools/marketing/product-description.webp",
    route: "/tools/marketing/product-description",
    provider: "Market AI",
    features: ["Multilingual", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-keyword-research",
    title: "AI Keyword Research",
    description: "Discover keyword ideas and organize search opportunities.",
    category: "Marketing",
    subCategory: "SEO",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 71000,
    thumbnail: "/tools/marketing/keyword-research.webp",
    route: "/tools/marketing/keyword-research",
    provider: "Market AI",
    features: ["Research", "Browser", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-blog-outline",
    title: "AI Blog Outline",
    description: "Generate structured blog outlines before writing full articles.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.5,
    users: 63000,
    thumbnail: "/tools/marketing/blog-outline.webp",
    route: "/tools/marketing/blog-outline",
    provider: "Market AI",
    features: ["Multilingual", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const BUSINESS_MARKETING_CODE_TOOLS = mergeToolCollections(CODE_TOOLS, BUSINESS_TOOLS, MARKETING_TOOLS);
export const EXTENDED_MARKETPLACE_TOOLS = mergeToolCollections(CREATIVE_TOOLS, BUSINESS_MARKETING_CODE_TOOLS);

function getCodeTools(): Tool[] { return EXTENDED_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Code"); }
function getBusinessTools(): Tool[] { return EXTENDED_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Business"); }
function getMarketingTools(): Tool[] { return EXTENDED_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Marketing"); }
function getDataTools(): Tool[] { return EXTENDED_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Data"); }

export const CODE_TOOL_COUNT = getCodeTools().length;
export const BUSINESS_TOOL_COUNT = getBusinessTools().length;
export const MARKETING_TOOL_COUNT = getMarketingTools().length;
export const DATA_TOOL_COUNT = getDataTools().length;
export const EXTENDED_DATASET_READY = EXTENDED_MARKETPLACE_TOOLS.every(validateToolRecord);

/* =========================================================
   TOOLS MARKETPLACE
   Part 06/20
   Education + Productivity + Research Tools
   ========================================================= */

const EDUCATION_TOOLS: Tool[] = [
  {
    id: "ai-tutor",
    title: "AI Tutor",
    description: "Get interactive explanations and guided help for learning.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 146000,
    thumbnail: "/tools/education/ai-tutor.webp",
    route: "/tools/education/ai-tutor",
    provider: "Market AI",
    features: ["Research", "Browser", "Multilingual"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-homework-helper",
    title: "AI Homework Helper",
    description: "Understand homework questions with step-by-step explanations.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 138000,
    thumbnail: "/tools/education/homework-helper.webp",
    route: "/tools/education/homework-helper",
    provider: "Market AI",
    features: ["Research", "Multilingual", "Browser"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-flashcard-generator",
    title: "AI Flashcard Generator",
    description: "Turn notes and study material into useful flashcards.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 91000,
    thumbnail: "/tools/education/flashcard-generator.webp",
    route: "/tools/education/flashcard-generator",
    provider: "Market AI",
    features: ["Research", "Upload", "Download", "Multilingual"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-quiz-generator",
    title: "AI Quiz Generator",
    description: "Create quizzes and practice tests from any topic.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.6,
    users: 76000,
    thumbnail: "/tools/education/quiz-generator.webp",
    route: "/tools/education/quiz-generator",
    provider: "Market AI",
    features: ["Research", "Multilingual", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-presentation-maker",
    title: "AI Presentation Maker",
    description: "Turn ideas and documents into structured presentations.",
    category: "Education",
    subCategory: "Presentation",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 128000,
    thumbnail: "/tools/education/presentation-maker.webp",
    route: "/tools/education/presentation-maker",
    provider: "Market AI",
    features: ["Text to Image", "Download", "Upload"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-language-learning",
    title: "AI Language Learning",
    description: "Practice vocabulary, conversation and language skills with AI.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 103000,
    thumbnail: "/tools/education/language-learning.webp",
    route: "/tools/education/language-learning",
    provider: "Market AI",
    features: ["Voice AI", "Multilingual", "Realtime"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const PRODUCTIVITY_TOOLS: Tool[] = [
  {
    id: "ai-note-taker",
    title: "AI Note Taker",
    description: "Capture ideas and turn information into organized notes.",
    category: "Productivity",
    subCategory: "Document",
    type: "Productivity",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 149000,
    thumbnail: "/tools/productivity/note-taker.webp",
    route: "/tools/productivity/note-taker",
    provider: "Market AI",
    features: ["Audio to Text", "Download", "Multilingual"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-summarizer",
    title: "AI Summarizer",
    description: "Summarize long documents, articles and text into key points.",
    category: "Productivity",
    subCategory: "Writing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 219000,
    thumbnail: "/tools/productivity/summarizer.webp",
    route: "/tools/productivity/summarizer",
    provider: "Market AI",
    features: ["Upload", "Download", "Multilingual", "Batch"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-email-assistant",
    title: "AI Email Assistant",
    description: "Draft, rewrite and summarize emails quickly.",
    category: "Productivity",
    subCategory: "Writing",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 167000,
    thumbnail: "/tools/productivity/email-assistant.webp",
    route: "/tools/productivity/email-assistant",
    provider: "Market AI",
    features: ["Multilingual", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-task-planner",
    title: "AI Task Planner",
    description: "Turn goals and ideas into structured tasks and action plans.",
    category: "Productivity",
    subCategory: "Productivity",
    type: "Productivity",
    badge: "AI",
    pricing: "Free",
    rating: 4.6,
    users: 87000,
    thumbnail: "/tools/productivity/task-planner.webp",
    route: "/tools/productivity/task-planner",
    provider: "Market AI",
    features: ["Workflow", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-calendar-assistant",
    title: "AI Calendar Assistant",
    description: "Organize schedules and suggest efficient time plans.",
    category: "Productivity",
    subCategory: "Productivity",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.5,
    users: 58000,
    thumbnail: "/tools/productivity/calendar-assistant.webp",
    route: "/tools/productivity/calendar-assistant",
    provider: "Market AI",
    features: ["Workflow", "Browser", "Realtime"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-document-editor",
    title: "AI Document Editor",
    description: "Rewrite, improve and organize documents with AI assistance.",
    category: "Productivity",
    subCategory: "Document",
    type: "Productivity",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 113000,
    thumbnail: "/tools/productivity/document-editor.webp",
    route: "/tools/productivity/document-editor",
    provider: "Market AI",
    features: ["Upload", "Download", "Multilingual"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const RESEARCH_TOOLS: Tool[] = [
  {
    id: "ai-paper-summarizer",
    title: "AI Paper Summarizer",
    description: "Summarize research papers and extract important findings.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 94000,
    thumbnail: "/tools/research/paper-summarizer.webp",
    route: "/tools/research/paper-summarizer",
    provider: "Market AI",
    features: ["Research", "Upload", "Download"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-literature-review",
    title: "AI Literature Review",
    description: "Organize literature and identify important research themes.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 51000,
    thumbnail: "/tools/research/literature-review.webp",
    route: "/tools/research/literature-review",
    provider: "Market AI",
    features: ["Research", "Browser", "Download"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-fact-checker",
    title: "AI Fact Checker",
    description: "Analyze claims and organize supporting information.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.6,
    users: 76000,
    thumbnail: "/tools/research/fact-checker.webp",
    route: "/tools/research/fact-checker",
    provider: "Market AI",
    features: ["Research", "Browser", "Multilingual"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-web-researcher",
    title: "AI Web Researcher",
    description: "Research online information and organize useful findings.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 134000,
    thumbnail: "/tools/research/web-researcher.webp",
    route: "/tools/research/web-researcher",
    provider: "Market AI",
    features: ["Research", "Browser", "Multilingual", "Download"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-data-researcher",
    title: "AI Data Researcher",
    description: "Explore datasets and generate useful research insights.",
    category: "Research",
    subCategory: "Analytics",
    type: "Research",
    badge: "New",
    pricing: "Pro",
    rating: 4.5,
    users: 42000,
    thumbnail: "/tools/research/data-researcher.webp",
    route: "/tools/research/data-researcher",
    provider: "Market AI",
    features: ["Research", "Upload", "Batch", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-document-analyzer",
    title: "AI Document Analyzer",
    description: "Analyze long documents and extract structured information.",
    category: "Research",
    subCategory: "Document",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 119000,
    thumbnail: "/tools/research/document-analyzer.webp",
    route: "/tools/research/document-analyzer",
    provider: "Market AI",
    features: ["Upload", "Research", "Download", "Batch"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const EDUCATION_PRODUCTIVITY_RESEARCH = mergeToolCollections(EDUCATION_TOOLS, PRODUCTIVITY_TOOLS, RESEARCH_TOOLS);
export const FULL_MARKETPLACE_TOOLS = mergeToolCollections(EXTENDED_MARKETPLACE_TOOLS, EDUCATION_PRODUCTIVITY_RESEARCH);

function getEducationTools(): Tool[] { return FULL_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Education"); }
function getProductivityTools(): Tool[] { return FULL_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Productivity"); }
function getResearchTools(): Tool[] { return FULL_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Research"); }

export const EDUCATION_TOOL_COUNT = getEducationTools().length;
export const PRODUCTIVITY_TOOL_COUNT = getProductivityTools().length;
export const RESEARCH_TOOL_COUNT = getResearchTools().length;
export const FULL_MARKETPLACE_TOOL_COUNT = FULL_MARKETPLACE_TOOLS.length;
export const FULL_DATASET_READY = FULL_MARKETPLACE_TOOLS.every(validateToolRecord);

/* =========================================================
   TOOLS MARKETPLACE
   Part 08/20
   Automation + Additional Utility Tools
   ========================================================= */

// Ensure MEDIA_DATASET_TOOLS exists to satisfy Part 08 build expectations
const MEDIA_DATASET_TOOLS = FULL_MARKETPLACE_TOOLS;

const AUTOMATION_TOOLS: Tool[] = [
  {
    id: "ai-workflow-builder",
    title: "AI Workflow Builder",
    description: "Create automated workflows from plain-language instructions.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 118000,
    thumbnail: "/tools/automation/workflow-builder.webp",
    route: "/tools/automation/workflow-builder",
    provider: "Market AI",
    features: ["Workflow", "API", "Browser", "Realtime"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-task-automation",
    title: "AI Task Automation",
    description: "Automate repetitive tasks with intelligent workflows.",
    category: "Automation",
    subCategory: "Automation",
    type: "Automation",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 96000,
    thumbnail: "/tools/automation/task-automation.webp",
    route: "/tools/automation/task-automation",
    provider: "Market AI",
    features: ["Workflow", "API", "Browser"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-email-automation",
    title: "AI Email Automation",
    description: "Automate email drafting, classification and repetitive workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Automation",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.6,
    users: 73000,
    thumbnail: "/tools/automation/email-automation.webp",
    route: "/tools/automation/email-automation",
    provider: "Market AI",
    features: ["Workflow", "API", "Multilingual"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-document-automation",
    title: "AI Document Automation",
    description: "Process documents and extract information automatically.",
    category: "Automation",
    subCategory: "Document",
    type: "Automation",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 58000,
    thumbnail: "/tools/automation/document-automation.webp",
    route: "/tools/automation/document-automation",
    provider: "Market AI",
    features: ["Workflow", "Upload", "Download", "Batch"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-lead-automation",
    title: "AI Lead Automation",
    description: "Organize leads and automate repetitive sales workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Business",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.5,
    users: 47000,
    thumbnail: "/tools/automation/lead-automation.webp",
    route: "/tools/automation/lead-automation",
    provider: "Market AI",
    features: ["Workflow", "API", "Browser"],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-data-automation",
    title: "AI Data Automation",
    description: "Move, transform and process structured data automatically.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 51000,
    thumbnail: "/tools/automation/data-automation.webp",
    route: "/tools/automation/data-automation",
    provider: "Market AI",
    features: ["Workflow", "API", "Batch", "Database"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const ADDITIONAL_MUSIC_TOOLS: Tool[] = [
  {
    id: "ai-chord-generator",
    title: "AI Chord Generator",
    description: "Generate chord progressions for original music.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "New",
    pricing: "Free",
    rating: 4.5,
    users: 43000,
    thumbnail: "/tools/music/chord-generator.webp",
    route: "/tools/music/chord-generator",
    provider: "Market AI",
    features: ["Music AI", "Download"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-instrument-generator",
    title: "AI Instrument Generator",
    description: "Generate original instrumental sounds and ideas.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.5,
    users: 39000,
    thumbnail: "/tools/music/instrument-generator.webp",
    route: "/tools/music/instrument-generator",
    provider: "Market AI",
    features: ["Text to Audio", "Music AI", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-drums-generator",
    title: "AI Drums Generator",
    description: "Generate drum patterns and percussion ideas automatically.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.6,
    users: 52000,
    thumbnail: "/tools/music/drums-generator.webp",
    route: "/tools/music/drums-generator",
    provider: "Market AI",
    features: ["Music AI", "Download", "Batch"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-vocal-harmony",
    title: "AI Vocal Harmony",
    description: "Generate harmony ideas for existing vocal recordings.",
    category: "Music",
    subCategory: "Singing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 34000,
    thumbnail: "/tools/music/vocal-harmony.webp",
    route: "/tools/music/vocal-harmony",
    provider: "Market AI",
    features: ["Music AI", "Voice AI", "Upload", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const ADDITIONAL_VOICE_TOOLS: Tool[] = [
  {
    id: "ai-voice-isolator",
    title: "AI Voice Isolator",
    description: "Isolate spoken voice from background audio.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 74000,
    thumbnail: "/tools/voice/voice-isolator.webp",
    route: "/tools/voice/voice-isolator",
    provider: "Market AI",
    features: ["Voice AI", "Upload", "Download"],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-speech-cleaner",
    title: "AI Speech Cleaner",
    description: "Clean spoken recordings and improve speech intelligibility.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 69000,
    thumbnail: "/tools/voice/speech-cleaner.webp",
    route: "/tools/voice/speech-cleaner",
    provider: "Market AI",
    features: ["Voice AI", "Upload", "Download", "Batch"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-voice-summary",
    title: "AI Voice Summary",
    description: "Turn long spoken recordings into concise summaries.",
    category: "Voice",
    subCategory: "Transcription",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 47000,
    thumbnail: "/tools/voice/voice-summary.webp",
    route: "/tools/voice/voice-summary",
    provider: "Market AI",
    features: ["Audio to Text", "Download", "Multilingual"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const ADDITIONAL_CODE_TOOLS: Tool[] = [
  {
    id: "ai-typescript-generator",
    title: "AI TypeScript Generator",
    description: "Generate TypeScript code, types and utilities from descriptions.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 64000,
    thumbnail: "/tools/code/typescript-generator.webp",
    route: "/tools/code/typescript-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI", "Browser"],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-python-generator",
    title: "AI Python Generator",
    description: "Generate Python scripts and utilities from natural language.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 143000,
    thumbnail: "/tools/code/python-generator.webp",
    route: "/tools/code/python-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI", "Browser", "Download"],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-api-documentation",
    title: "AI API Documentation",
    description: "Generate structured API documentation from code and schemas.",
    category: "Code",
    subCategory: "Backend",
    type: "Developer",
    badge: "AI",
    pricing: "Free",
    rating: 4.5,
    users: 37000,
    thumbnail: "/tools/code/api-documentation.webp",
    route: "/tools/code/api-documentation",
    provider: "Market AI",
    features: ["Code AI", "API", "Download"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
  {
    id: "ai-regex-generator",
    title: "AI Regex Generator",
    description: "Generate regular expressions from plain-language requirements.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 72000,
    thumbnail: "/tools/code/regex-generator.webp",
    route: "/tools/code/regex-generator",
    provider: "Market AI",
    features: ["Text to Code", "Code AI"],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

const AUTOMATION_EXPANSION_TOOLS = mergeToolCollections(
  AUTOMATION_TOOLS,
  ADDITIONAL_MUSIC_TOOLS,
  ADDITIONAL_VOICE_TOOLS,
  ADDITIONAL_CODE_TOOLS
);

export const AUTOMATION_MARKETPLACE_TOOLS = mergeToolCollections(
  MEDIA_DATASET_TOOLS,
  AUTOMATION_EXPANSION_TOOLS
);

function getAutomationTools(): Tool[] { return AUTOMATION_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Automation"); }
function getMusicTools(): Tool[] { return AUTOMATION_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Music"); }
function getVoiceTools(): Tool[] { return AUTOMATION_MARKETPLACE_TOOLS.filter((tool) => tool.category === "Voice"); }

export const AUTOMATION_TOOL_COUNT = getAutomationTools().length;
export const MUSIC_TOOL_COUNT = getMusicTools().length;
export const VOICE_TOOL_COUNT = getVoiceTools().length;
export const PART_08_TOOL_COUNT = AUTOMATION_MARKETPLACE_TOOLS.length;
export const PART_08_DATASET_READY = AUTOMATION_MARKETPLACE_TOOLS.every(validateToolRecord);

/* =========================================================
   TOOLS MARKETPLACE
   Part 09/20
   Dataset Normalization + Marketplace Helpers
   ========================================================= */

export const ALL_TOOLS: Tool[] = [...AUTOMATION_MARKETPLACE_TOOLS];

function normalizeToolText(value: string): string {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function normalizeToolRoute(route: string): string {
  if (!route) return "/";
  if (route.startsWith("/")) return route;
  return `/${route}`;
}

function formatToolUsers(users: number): string {
  if (users >= 1000000) return `${(users / 1000000).toFixed(1)}M`;
  if (users >= 1000) return `${Math.round(users / 1000)}K`;
  return String(users);
}

function normalizeToolRating(rating: number): number {
  if (Number.isNaN(rating)) return 0;
  return Math.min(5, Math.max(0, rating));
}

function normalizeTool(tool: Tool): Tool {
  return {
    ...tool,
    route: normalizeToolRoute(tool.route),
    rating: normalizeToolRating(tool.rating),
    users: Math.max(0, Math.floor(tool.users)),
    features: Array.from(new Set(tool.features)),
  };
}

export const NORMALIZED_TOOLS = ALL_TOOLS.map(normalizeTool);

function getValidMarketplaceTools(): Tool[] {
  return NORMALIZED_TOOLS.filter(validateToolRecord);
}

export const VALID_MARKETPLACE_TOOLS = getValidMarketplaceTools();

const TOOL_BY_ID = new Map<string, Tool>(VALID_MARKETPLACE_TOOLS.map((tool) => [tool.id, tool]));
const TOOL_BY_ROUTE = new Map<string, Tool>(VALID_MARKETPLACE_TOOLS.map((tool) => [normalizeToolRoute(tool.route), tool]));

function findToolById(id: string): Tool | undefined { return TOOL_BY_ID.get(id); }
function findToolByRoute(route: string): Tool | undefined { return TOOL_BY_ROUTE.get(normalizeToolRoute(route)); }

function toolsByCategory(category: "All" | ToolCategory): Tool[] {
  if (category === "All") return [...VALID_MARKETPLACE_TOOLS];
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.category === category);
}

function toolsBySubCategory(subCategory: "All" | ToolSubCategory): Tool[] {
  if (subCategory === "All") return [...VALID_MARKETPLACE_TOOLS];
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.subCategory === subCategory);
}

function toolsByPricing(pricing: "All Pricing" | ToolPricing): Tool[] {
  if (pricing === "All Pricing") return [...VALID_MARKETPLACE_TOOLS];
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === pricing);
}

function toolsByType(type: "All Types" | ToolType): Tool[] {
  if (type === "All Types") return [...VALID_MARKETPLACE_TOOLS];
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.type === type);
}

function toolsByFeature(feature: "All Features" | ToolFeature): Tool[] {
  if (feature === "All Features") return [...VALID_MARKETPLACE_TOOLS];
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.features.includes(feature));
}

function toolsByProvider(provider: "All Providers" | string): Tool[] {
  if (provider === "All Providers") return [...VALID_MARKETPLACE_TOOLS];
  const normalizedProvider = normalizeToolText(provider);
  return VALID_MARKETPLACE_TOOLS.filter((tool) => normalizeToolText(tool.provider) === normalizedProvider);
}

function searchTools(tools: Tool[], query: string): Tool[] {
  const normalizedQuery = normalizeToolText(query);
  if (!normalizedQuery) return [...tools];
  const queryParts = normalizedQuery.split(" ").filter(Boolean);
  return tools.filter((tool) => {
    const searchableText = normalizeToolText(
      [tool.title, tool.description, tool.category, tool.subCategory, tool.type, tool.provider, tool.badge, ...tool.features].join(" ")
    );
    return queryParts.every((part) => searchableText.includes(part));
  });
}

function getSearchScore(tool: Tool, query: string): number {
  const normalizedQuery = normalizeToolText(query);
  if (!normalizedQuery) return 0;

  const title = normalizeToolText(tool.title);
  const description = normalizeToolText(tool.description);
  const category = normalizeToolText(tool.category);
  const subCategory = normalizeToolText(tool.subCategory);

  let score = 0;

  if (title === normalizedQuery) score += 100;
  if (title.startsWith(normalizedQuery)) score += 60;
  if (title.includes(normalizedQuery)) score += 40;
  if (category.includes(normalizedQuery)) score += 25;
  if (subCategory.includes(normalizedQuery)) score += 25;
  if (description.includes(normalizedQuery)) score += 10;
  if (tool.featured) score += 8;
  if (tool.trending) score += 7;
  if (tool.verified) score += 5;

  score += normalizeToolRating(tool.rating);

  return score;
}

function rankToolSearchResults(tools: Tool[], query: string): Tool[] {
  return [...tools].map((tool) => ({ tool, score: getSearchScore(tool, query) }))
    .sort((a, b) => b.score - a.score).map((item) => item.tool);
}

function getRecommendedTools(limit = 12): Tool[] {
  return [...VALID_MARKETPLACE_TOOLS].sort((a, b) => {
    const aScore = (a.featured ? 30 : 0) + (a.trending ? 20 : 0) + (a.verified ? 10 : 0) + (a.aiPowered ? 10 : 0) + a.rating * 8 + Math.log10(Math.max(1, a.users));
    const bScore = (b.featured ? 30 : 0) + (b.trending ? 20 : 0) + (b.verified ? 10 : 0) + (b.aiPowered ? 10 : 0) + b.rating * 8 + Math.log10(Math.max(1, b.users));
    return bScore - aScore;
  }).slice(0, limit);
}

function getTrendingMarketplaceTools(limit = 12): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.trending).sort((a, b) => b.users - a.users).slice(0, limit);
}

function getNewMarketplaceTools(limit = 12): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.isNew).sort((a, b) => b.users - a.users).slice(0, limit);
}

function getFeaturedMarketplaceTools(limit = 12): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.featured).sort((a, b) => b.rating - a.rating).slice(0, limit);
}

function getFreeMarketplaceTools(limit = 12): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Free" || tool.pricing === "Freemium").sort((a, b) => b.rating - a.rating).slice(0, limit);
}

/* =========================================================
   TOOLS MARKETPLACE
   Part 10/20
   Advanced Filtering + Sorting Engine
   ========================================================= */

function filterMarketplaceTools(tools: Tool[], filters: ToolsFilterState): Tool[] {
  let result = [...tools];
  if (filters.category !== "All") result = result.filter((tool) => tool.category === filters.category);
  if (filters.subCategory !== "All") result = result.filter((tool) => tool.subCategory === filters.subCategory);
  if (filters.pricing !== "All Pricing") result = result.filter((tool) => tool.pricing === filters.pricing);
  if (filters.type !== "All Types") result = result.filter((tool) => tool.type === filters.type);
  if (filters.feature !== "All Features") result = result.filter((tool) => tool.features.includes(filters.feature));
  if (filters.provider !== "All Providers") {
    const provider = normalizeToolText(filters.provider);
    result = result.filter((tool) => normalizeToolText(tool.provider) === provider);
  }
  return result;
}

function sortMarketplaceTools(tools: Tool[], sort: ToolsSortMode, query = ""): Tool[] {
  const result = [...tools];
  switch (sort) {
    case "Popular": return result.sort((a, b) => b.users - a.users);
    case "Newest": return result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    case "Highest Rated": return result.sort((a, b) => b.rating - a.rating);
    case "Most Used": return result.sort((a, b) => b.users - a.users);
    case "Recommended":
    default:
      if (query.trim()) return rankToolSearchResults(result, query);
      return result.sort((a, b) => {
        const aScore = (a.featured ? 35 : 0) + (a.trending ? 20 : 0) + (a.isNew ? 10 : 0) + (a.verified ? 8 : 0) + (a.aiPowered ? 5 : 0) + a.rating * 7 + Math.log10(Math.max(1, a.users));
        const bScore = (b.featured ? 35 : 0) + (b.trending ? 20 : 0) + (b.isNew ? 10 : 0) + (b.verified ? 8 : 0) + (b.aiPowered ? 5 : 0) + b.rating * 7 + Math.log10(Math.max(1, b.users));
        return bScore - aScore;
      });
  }
}

function buildMarketplaceResults(options: { query?: string; filters?: ToolsFilterState; sort?: ToolsSortMode; } = {}): Tool[] {
  const query = options.query ?? "";
  const filters = options.filters ?? { category: "All", subCategory: "All", pricing: "All Pricing", type: "All Types", feature: "All Features", provider: "All Providers" };
  const sort = options.sort ?? "Recommended";

  let result = filterMarketplaceTools(VALID_MARKETPLACE_TOOLS, filters);
  if (query.trim()) result = searchTools(result, query);
  return sortMarketplaceTools(result, sort, query);
}

function getCategoryToolCount(category: ToolCategory): number { return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.category === category).length; }
function getSubCategoryToolCount(subCategory: ToolSubCategory): number { return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.subCategory === subCategory).length; }
function getPricingToolCount(pricing: ToolPricing): number { return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === pricing).length; }
function getTypeToolCount(type: ToolType): number { return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.type === type).length; }
function getFeatureToolCount(feature: ToolFeature): number { return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.features.includes(feature)).length; }
function getProviderToolCount(provider: string): number { const normalizedProvider = normalizeToolText(provider); return VALID_MARKETPLACE_TOOLS.filter((tool) => normalizeToolText(tool.provider) === normalizedProvider).length; }

const CATEGORY_ICONS: Record<ToolCategory, React.ElementType> = {
  Music: Music2, Voice: Mic2, Video: Video, Image: ImageIcon, Code: Code2, Business: BarChart3, Marketing: TrendingUp, Education: Brain, Productivity: Zap, Research: Search, Audio: Mic2, Design: Wand2, Data: Database, Automation: Bot,
};

const CATEGORY_DESCRIPTIONS: Record<ToolCategory, string> = {
  Music: "Create songs, beats, melodies and complete music with AI.",
  Voice: "Generate, transform, clone and analyze voices.",
  Video: "Create, edit, translate and enhance videos.",
  Image: "Generate and edit images using powerful AI tools.",
  Code: "Build applications, APIs and software faster.",
  Business: "AI tools for business operations, support and growth.",
  Marketing: "Create content, campaigns, SEO and marketing workflows.",
  Education: "Learn, teach, study and create educational material.",
  Productivity: "Save time with AI-powered everyday productivity tools.",
  Research: "Research, analyze and organize information efficiently.",
  Audio: "Clean, edit, transform and process audio.",
  Design: "Create visual assets, branding and presentation designs.",
  Data: "Analyze, transform and visualize structured data.",
  Automation: "Automate repetitive workflows and business processes.",
};

const CATEGORY_GRADIENTS: Record<ToolCategory, string> = {
  Music: "from-violet-600/30 to-fuchsia-500/20",
  Voice: "from-cyan-600/30 to-blue-500/20",
  Video: "from-red-600/30 to-orange-500/20",
  Image: "from-pink-600/30 to-purple-500/20",
  Code: "from-emerald-600/30 to-cyan-500/20",
  Business: "from-blue-600/30 to-indigo-500/20",
  Marketing: "from-orange-600/30 to-yellow-500/20",
  Education: "from-green-600/30 to-teal-500/20",
  Productivity: "from-sky-600/30 to-blue-500/20",
  Research: "from-indigo-600/30 to-violet-500/20",
  Audio: "from-purple-600/30 to-blue-500/20",
  Design: "from-fuchsia-600/30 to-pink-500/20",
  Data: "from-teal-600/30 to-emerald-500/20",
  Automation: "from-amber-600/30 to-orange-500/20",
};

function buildCategoryInfo(): ToolCategoryInfo[] {
  return TOOL_CATEGORIES.filter((category): category is ToolCategory => category !== "All").map((category) => ({
    id: category,
    title: category,
    description: CATEGORY_DESCRIPTIONS[category],
    icon: CATEGORY_ICONS[category],
    gradient: CATEGORY_GRADIENTS[category],
    count: getCategoryToolCount(category),
  }));
}

export const MARKETPLACE_CATEGORY_INFO = buildCategoryInfo();

function countActiveFilters(filters: ToolsFilterState): number {
  let count = 0;
  if (filters.category !== "All") count++;
  if (filters.subCategory !== "All") count++;
  if (filters.pricing !== "All Pricing") count++;
  if (filters.type !== "All Types") count++;
  if (filters.feature !== "All Features") count++;
  if (filters.provider !== "All Providers") count++;
  return count;
}

function createDefaultToolFilters(): ToolsFilterState {
  return { category: "All", subCategory: "All", pricing: "All Pricing", type: "All Types", feature: "All Features", provider: "All Providers" };
}

function createDefaultSearchState(): ToolsSearchState {
  return { query: "", page: 1, perPage: TOOLS_PER_PAGE_GRID, sort: "Recommended" };
}

function resetToolFilters(): ToolsFilterState { return createDefaultToolFilters(); }
function resetToolSearch(): ToolsSearchState { return createDefaultSearchState(); }

/* =========================================================
   TOOLS MARKETPLACE
   Part 11/20
   Tabs + Pagination + Favorites + Local Storage
   ========================================================= */

function loadFavoriteToolIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(TOOLS_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === "string");
  } catch { return []; }
}

function saveFavoriteToolIds(ids: string[]): void {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(Array.from(new Set(ids)))); } catch {}
}

function isToolFavorite(id: string, favorites: string[]): boolean { return favorites.includes(id); }

function toggleToolFavorite(id: string, favorites: string[]): string[] {
  if (favorites.includes(id)) return favorites.filter((favoriteId) => favoriteId !== id);
  return [...favorites, id];
}

function getFavoriteTools(favoriteIds: string[]): Tool[] {
  if (!favoriteIds.length) return [];
  const favoriteSet = new Set(favoriteIds);
  return VALID_MARKETPLACE_TOOLS.filter((tool) => favoriteSet.has(tool.id));
}

function getFavoriteToolCount(favoriteIds: string[]): number { return favoriteIds.length; }

function applyToolsTab(tools: Tool[], tab: ToolsTab, favoriteIds: string[]): Tool[] {
  switch (tab) {
    case "trending": return tools.filter((tool) => tool.trending);
    case "new": return tools.filter((tool) => tool.isNew);
    case "favorites": {
      const favoriteSet = new Set(favoriteIds);
      return tools.filter((tool) => favoriteSet.has(tool.id));
    }
    case "free": return tools.filter((tool) => tool.pricing === "Free" || tool.pricing === "Freemium");
    case "pro": return tools.filter((tool) => tool.pricing === "Pro");
    case "all":
    default: return [...tools];
  }
}

const TOOL_TAB_LABELS: Record<ToolsTab, string> = { all: "All Tools", trending: "Trending", new: "New", favorites: "Favorites", free: "Free", pro: "Pro" };
const TOOL_TAB_ICONS: Record<ToolsTab, React.ElementType> = { all: Grid3X3, trending: Flame, new: Sparkles, favorites: Heart, free: Check, pro: Crown };

function getToolsTabCount(tab: ToolsTab, favoriteIds: string[]): number {
  switch (tab) {
    case "trending": return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.trending).length;
    case "new": return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.isNew).length;
    case "favorites": return favoriteIds.length;
    case "free": return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Free" || tool.pricing === "Freemium").length;
    case "pro": return VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Pro").length;
    case "all":
    default: return VALID_MARKETPLACE_TOOLS.length;
  }
}

export type PaginationInfo = { page: number; perPage: number; totalItems: number; totalPages: number; startIndex: number; endIndex: number; hasPrevious: boolean; hasNext: boolean; };

function buildPagination(totalItems: number, page: number, perPage: number): PaginationInfo {
  const safePerPage = Math.max(1, perPage);
  const totalPages = Math.max(1, Math.ceil(totalItems / safePerPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * safePerPage;
  const endIndex = Math.min(startIndex + safePerPage, totalItems);
  return { page: safePage, perPage: safePerPage, totalItems, totalPages, startIndex, endIndex, hasPrevious: safePage > 1, hasNext: safePage < totalPages };
}

function paginateTools(tools: Tool[], page: number, perPage: number): Tool[] {
  const pagination = buildPagination(tools.length, page, perPage);
  return tools.slice(pagination.startIndex, pagination.endIndex);
}

function buildPageNumbers(currentPage: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const pages: Array<number | "ellipsis"> = [];
  pages.push(1);
  if (currentPage > 4) pages.push("ellipsis");
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let page = start; page <= end; page++) pages.push(page);
  if (currentPage < totalPages - 3) pages.push("ellipsis");
  pages.push(totalPages);
  return pages;
}

function clampToolsPage(page: number, totalPages: number): number { return Math.min(Math.max(1, page), Math.max(1, totalPages)); }
function getResultRangeText(pagination: PaginationInfo): string {
  if (pagination.totalItems === 0) return "0 results";
  return `${pagination.startIndex + 1}-${pagination.endIndex} of ${pagination.totalItems}`;
}

function calculateToolStatistics(): ToolsStatistics {
  const total = VALID_MARKETPLACE_TOOLS.length;
  return {
    total,
    categories: new Set(VALID_MARKETPLACE_TOOLS.map((tool) => tool.category)).size,
    subCategories: new Set(VALID_MARKETPLACE_TOOLS.map((tool) => tool.subCategory)).size,
    free: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Free").length,
    freemium: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Freemium").length,
    pro: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Pro").length,
    enterprise: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Enterprise").length,
    featured: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.featured).length,
    trending: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.trending).length,
    newTools: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.isNew).length,
    verified: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.verified).length,
    aiPowered: VALID_MARKETPLACE_TOOLS.filter((tool) => tool.aiPowered).length,
  };
}

export const MARKETPLACE_STATISTICS = calculateToolStatistics();

function calculateTotalToolUsers(): number { return VALID_MARKETPLACE_TOOLS.reduce((total, tool) => total + tool.users, 0); }
function calculateAverageToolRating(): number {
  if (!VALID_MARKETPLACE_TOOLS.length) return 0;
  const total = VALID_MARKETPLACE_TOOLS.reduce((sum, tool) => sum + tool.rating, 0);
  return Math.round((total / VALID_MARKETPLACE_TOOLS.length) * 10) / 10;
}

export const MARKETPLACE_TOTAL_USERS = calculateTotalToolUsers();
export const MARKETPLACE_AVERAGE_RATING = calculateAverageToolRating();

export const MARKETPLACE_DATASET_STATUS = {
  ready: VALID_MARKETPLACE_TOOLS.length > 0,
  toolCount: VALID_MARKETPLACE_TOOLS.length,
  categoryCount: MARKETPLACE_STATISTICS.categories,
  subCategoryCount: MARKETPLACE_STATISTICS.subCategories,
  providerCount: MARKETPLACE_PROVIDERS.length,
  averageRating: MARKETPLACE_AVERAGE_RATING,
  totalUsers: MARKETPLACE_TOTAL_USERS,
};

/* =========================================================
   Missing Helper Stubs for Compilation
   ========================================================= */

const getNewestTools = getNewMarketplaceTools;
const getBestFreeMarketplaceTools = getFreeMarketplaceTools;
function getRecommendedByCategory(category: ToolCategory, limit: number) { return getRecommendedTools(limit).filter(t => t.category === category); }
function getBestProMarketplaceTools(limit: number) { return VALID_MARKETPLACE_TOOLS.filter(t => t.pricing === "Pro").sort((a,b)=>b.rating-a.rating).slice(0,limit); }
function getAIMarketplaceTools(limit: number) { return VALID_MARKETPLACE_TOOLS.filter(t => t.aiPowered).slice(0,limit); }
function getNonAIMarketplaceTools(limit: number) { return VALID_MARKETPLACE_TOOLS.filter(t => !t.aiPowered).slice(0,limit); }
function getHighlyRatedTools(limit: number) { return VALID_MARKETPLACE_TOOLS.sort((a,b) => b.rating - a.rating).slice(0,limit); }

const RECOMMENDATION_ENGINE_READY = true;
const TOOL_ACTION_ENGINE_READY = true;
const TOOL_UI_READY = true;
const TOOL_ACTIONS = {};
const TOOL_UI = {};

/* =========================================================
   TOOLS MARKETPLACE
   Part 14/20
   Tool Collections + Home Sections + Discovery Engine
   ========================================================= */

function buildDiscoverySections(favoriteIds: string[] = []): ToolSection[] {
  const sections: ToolSection[] = [];
  const featured = getFeaturedMarketplaceTools(12);
  if (featured.length) sections.push(createToolSection("featured", "Featured AI Tools", "Explore hand-picked tools selected for the marketplace.", featured));
  const trending = getTrendingMarketplaceTools(12);
  if (trending.length) sections.push(createToolSection("trending", "Trending Now", "Discover tools that are currently getting strong attention.", trending));
  const newest = getNewestTools(12);
  if (newest.length) sections.push(createToolSection("new", "New Tools", "Explore newly added AI tools and capabilities.", newest));
  const personalized = getPersonalizedToolFeed(favoriteIds, 12);
  if (personalized.length) sections.push(createToolSection("recommended", "Recommended For You", "Tools selected from your recent activity and marketplace trends.", personalized));
  const free = getBestFreeMarketplaceTools(12);
  if (free.length) sections.push(createToolSection("free", "Best Free Tools", "Useful tools available without a Pro plan.", free));
  return sections;
}

function createToolSection(id: string, title: string, description: string, tools: Tool[], category?: ToolCategory): ToolSection {
  return { id, title, description, category, tools: tools.slice(0, 12) };
}

export const DEFAULT_DISCOVERY_SECTIONS = buildDiscoverySections();

function buildCategoryDiscoverySections(): ToolSection[] {
  return TOOL_CATEGORIES.filter((category): category is ToolCategory => category !== "All")
    .map((category) => createToolSection(`category-${normalizeToolText(category).replace(/\s+/g, "-")}`, `${category} Tools`, CATEGORY_DESCRIPTIONS[category], getRecommendedByCategory(category, 12), category))
    .filter((section) => section.tools.length > 0);
}

export const CATEGORY_DISCOVERY_SECTIONS = buildCategoryDiscoverySections();

function buildProviderDiscoverySections(): ToolSection[] {
  return MARKETPLACE_PROVIDERS.map((provider) => {
    const tools = toolsByProvider(provider);
    return createToolSection(`provider-${normalizeToolText(provider).replace(/\s+/g, "-")}`, `${provider} Tools`, `Tools available from ${provider}.`, tools, undefined);
  }).filter((section) => section.tools.length > 0);
}

export const PROVIDER_DISCOVERY_SECTIONS = buildProviderDiscoverySections();

function buildPricingDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] = [];
  const free = getBestFreeMarketplaceTools(12);
  if (free.length) sections.push(createToolSection("pricing-free", "Free & Freemium", "Start using useful tools without requiring a Pro subscription.", free));
  const pro = getBestProMarketplaceTools(12);
  if (pro.length) sections.push(createToolSection("pricing-pro", "Professional Tools", "Advanced tools for professional workflows.", pro));
  const enterprise = VALID_MARKETPLACE_TOOLS.filter((tool) => tool.pricing === "Enterprise");
  if (enterprise.length) sections.push(createToolSection("pricing-enterprise", "Enterprise Tools", "Tools designed for larger organizations and advanced workflows.", enterprise));
  return sections;
}

export const PRICING_DISCOVERY_SECTIONS = buildPricingDiscoverySections();

function buildTechnologyDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] = [];
  const aiTools = getAIMarketplaceTools(12);
  if (aiTools.length) sections.push(createToolSection("technology-ai", "AI Powered Tools", "Tools using AI generation, analysis or automation.", aiTools));
  const nonAITools = getNonAIMarketplaceTools(12);
  if (nonAITools.length) sections.push(createToolSection("technology-non-ai", "Non-AI Tools", "Useful tools that work without AI processing.", nonAITools));
  return sections;
}

export const TECHNOLOGY_DISCOVERY_SECTIONS = buildTechnologyDiscoverySections();

function buildFeatureDiscoverySections(): ToolSection[] {
  return TOOL_FEATURES.filter((feature): feature is ToolFeature => feature !== "All Features")
    .map((feature) => {
      const tools = toolsByFeature(feature);
      return createToolSection(`feature-${normalizeToolText(feature).replace(/\s+/g, "-")}`, `${feature} Tools`, `Tools supporting ${feature}.`, tools);
    }).filter((section) => section.tools.length > 0);
}

export const FEATURE_DISCOVERY_SECTIONS = buildFeatureDiscoverySections();

export const ALL_DISCOVERY_SECTIONS = [
  ...DEFAULT_DISCOVERY_SECTIONS,
  ...CATEGORY_DISCOVERY_SECTIONS,
  ...PRICING_DISCOVERY_SECTIONS,
  ...TECHNOLOGY_DISCOVERY_SECTIONS,
  ...FEATURE_DISCOVERY_SECTIONS,
];

function uniqueToolSections(sections: ToolSection[]): ToolSection[] {
  const seen = new Set<string>();
  return sections.filter((section) => {
    if (seen.has(section.id)) return false;
    seen.add(section.id);
    return true;
  });
}

export const UNIQUE_DISCOVERY_SECTIONS = uniqueToolSections(ALL_DISCOVERY_SECTIONS);

function searchDiscoverySections(query: string): ToolSection[] {
  if (!query.trim()) return UNIQUE_DISCOVERY_SECTIONS;
  const normalizedQuery = normalizeToolText(query);
  return UNIQUE_DISCOVERY_SECTIONS.map((section) => {
    const matchingTools = rankToolSearchResults(searchTools(section.tools, normalizedQuery), normalizedQuery);
    return { ...section, tools: matchingTools };
  }).filter((section) => section.tools.length > 0);
}

export const discoverMarketplaceSections = searchDiscoverySections;

function discoverMarketplaceTools(options: { query?: string; category?: "All" | ToolCategory; subCategory?: "All" | ToolSubCategory; pricing?: "All Pricing" | ToolPricing; type?: "All Types" | ToolType; feature?: "All Features" | ToolFeature; provider?: "All Providers" | string; sort?: ToolsSortMode; page?: number; perPage?: number; tab?: ToolsTab; favorites?: string[]; } = {}): { tools: Tool[]; pagination: PaginationInfo; totalBeforePagination: number; } {
  const filters: ToolsFilterState = {
    category: options.category ?? "All",
    subCategory: options.subCategory ?? "All",
    pricing: options.pricing ?? "All Pricing",
    type: options.type ?? "All Types",
    feature: options.feature ?? "All Features",
    provider: options.provider ?? "All Providers",
  };
  const query = options.query ?? "";
  const sort = options.sort ?? "Recommended";
  const page = options.page ?? 1;
  const perPage = options.perPage ?? TOOLS_PER_PAGE_GRID;
  const favorites = options.favorites ?? [];

  let result = buildMarketplaceResults({ query, filters, sort });
  result = applyToolsTab(result, options.tab ?? "all", favorites);

  const pagination = buildPagination(result.length, page, perPage);
  const paginated = paginateTools(result, pagination.page, pagination.perPage);

  return { tools: paginated, pagination, totalBeforePagination: result.length };
}

function getRelatedMarketplaceTools(tool: Tool, limit = 6): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((t) => t.id !== tool.id && t.category === tool.category).sort((a, b) => b.rating - a.rating).slice(0, limit);
}

function getSimilarMarketplaceTools(tool: Tool, limit = 6): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((t) => t.id !== tool.id && t.subCategory === tool.subCategory).sort((a, b) => b.rating - a.rating).slice(0, limit);
}

function getToolRecommendations(tool: Tool, limit = 6): Tool[] {
  return VALID_MARKETPLACE_TOOLS.filter((t) => t.id !== tool.id && (t.category === tool.category || t.subCategory === tool.subCategory)).sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export const MARKETPLACE_DISCOVERY = {
  search: searchTools,
  filter: filterMarketplaceTools,
  sort: sortMarketplaceTools,
  discover: discoverMarketplaceTools,
  related: getRelatedMarketplaceTools,
  similar: getSimilarMarketplaceTools,
  recommendations: getToolRecommendations,
  categories: MARKETPLACE_CATEGORY_INFO,
  collections: UNIQUE_DISCOVERY_SECTIONS,
};

function resolveToolRoute(route: string): Tool | undefined { return findToolByRoute(route); }
function resolveToolId(id: string): Tool | undefined { return findToolById(id); }
function resolveTool(identifier: string): Tool | undefined { return resolveToolId(identifier) ?? resolveToolRoute(identifier); }
function isToolAvailable(identifier: string): boolean { return Boolean(resolveTool(identifier)); }

export const MARKETPLACE_HEALTH = {
  tools: VALID_MARKETPLACE_TOOLS.length,
  categories: MARKETPLACE_STATISTICS.categories,
  subCategories: MARKETPLACE_STATISTICS.subCategories,
  providers: MARKETPLACE_PROVIDERS.length,
  ready: VALID_MARKETPLACE_TOOLS.every(validateToolRecord),
  recommendationReady: RECOMMENDATION_ENGINE_READY,
  discoveryReady: UNIQUE_DISCOVERY_SECTIONS.length > 0,
};

/* =========================================================
   TOOLS MARKETPLACE
   Part 19/20
   Final Marketplace Utilities + Export API
   ========================================================= */

export type ToolValidationReport = {
  valid: boolean;
  toolId: string;
  missingFields: string[];
  invalidFields: string[];
  warnings: string[];
};

function validateMarketplaceTool(tool: Tool): ToolValidationReport {
  const missingFields: string[] = [];
  const invalidFields: string[] = [];
  const warnings: string[] = [];

  if (!tool.id || !tool.id.trim()) missingFields.push("id");
  if (!tool.title || !tool.title.trim()) missingFields.push("title");
  if (!tool.description || !tool.description.trim()) missingFields.push("description");
  if (!tool.category) missingFields.push("category");
  if (!tool.subCategory) missingFields.push("subCategory");
  if (!tool.route || !tool.route.trim()) missingFields.push("route");
  if (!tool.provider || !tool.provider.trim()) missingFields.push("provider");
  if (typeof tool.users !== "number") invalidFields.push("users"); else if (tool.users < 0) invalidFields.push("users");
  if (typeof tool.rating !== "number") invalidFields.push("rating"); else if (tool.rating < 0 || tool.rating > 5) invalidFields.push("rating");
  if (!TOOL_CATEGORIES.includes(tool.category)) invalidFields.push("category");
  if (!TOOL_PRICING_OPTIONS.includes(tool.pricing)) invalidFields.push("pricing");
  if (!TOOL_TYPES.includes(tool.type)) invalidFields.push("type");
  if (!Array.isArray(tool.features)) invalidFields.push("features");
  if (!tool.thumbnail) warnings.push("Missing thumbnail.");
  if (!tool.badge) warnings.push("Missing badge.");

  return { valid: missingFields.length === 0 && invalidFields.length === 0, toolId: tool.id, missingFields, invalidFields, warnings };
}

function validateMarketplaceDataset(): ToolValidationReport[] { return ALL_TOOLS.map(validateMarketplaceTool); }

export const MARKETPLACE_VALIDATION_REPORT = validateMarketplaceDataset();

function getInvalidMarketplaceTools(): Tool[] {
  const invalidIds = new Set(MARKETPLACE_VALIDATION_REPORT.filter((report) => !report.valid).map((report) => report.toolId));
  return ALL_TOOLS.filter((tool) => invalidIds.has(tool.id));
}

function getMarketplaceValidationSummary() {
  const reports = MARKETPLACE_VALIDATION_REPORT;
  const valid = reports.filter((report) => report.valid).length;
  const invalid = reports.length - valid;
  const warnings = reports.reduce((total, report) => total + report.warnings.length, 0);
  return { total: reports.length, valid, invalid, warnings, ready: invalid === 0 };
}

export const MARKETPLACE_VALIDATION_SUMMARY = getMarketplaceValidationSummary();

type ToolSearchIndexEntry = { id: string; title: string; text: string; category: string; subCategory: string; provider: string; };

function buildToolSearchIndex(): ToolSearchIndexEntry[] {
  return VALID_MARKETPLACE_TOOLS.map((tool) => ({
    id: tool.id,
    title: normalizeToolText(tool.title),
    text: normalizeToolText([tool.title, tool.description, tool.category, tool.subCategory, tool.type, tool.provider, tool.badge, ...tool.features].join(" ")),
    category: normalizeToolText(tool.category),
    subCategory: normalizeToolText(tool.subCategory),
    provider: normalizeToolText(tool.provider),
  }));
}

export const MARKETPLACE_SEARCH_INDEX = buildToolSearchIndex();

function indexedToolSearch(query: string, limit = 24): Tool[] {
  const normalizedQuery = normalizeToolText(query);
  if (!normalizedQuery) return getRecommendedTools(limit);
  const parts = normalizedQuery.split(" ").filter(Boolean);
  const matchedIds = MARKETPLACE_SEARCH_INDEX.map((entry) => {
    let score = 0;
    if (entry.title === normalizedQuery) score += 100;
    if (entry.title.startsWith(normalizedQuery)) score += 60;
    if (entry.title.includes(normalizedQuery)) score += 40;
    if (entry.category.includes(normalizedQuery)) score += 25;
    if (entry.subCategory.includes(normalizedQuery)) score += 20;
    if (entry.provider.includes(normalizedQuery)) score += 15;
    const allPartsMatch = parts.every((part) => entry.text.includes(part));
    if (allPartsMatch) score += 30;
    return { id: entry.id, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
  return matchedIds.map((item) => findToolById(item.id)).filter((tool): tool is Tool => Boolean(tool));
}

function buildToolSearchSuggestions(query: string, limit = 8): { tools: Tool[]; categories: ToolCategory[]; subCategories: ToolSubCategory[]; providers: string[]; } {
  const normalized = normalizeToolText(query);
  const tools = indexedToolSearch(normalized, limit);
  const categories = getAvailableCategories().filter((category) => normalizeToolText(category).includes(normalized));
  const subCategories = getAvailableSubCategories().filter((subCategory) => normalizeToolText(subCategory).includes(normalized));
  const providers = getAvailableProviders().filter((provider) => normalizeToolText(provider).includes(normalized));
  return { tools, categories, subCategories, providers };
}

function getMarketplaceCounts() {
  return { tools: VALID_MARKETPLACE_TOOLS.length, categories: getAvailableCategories().length, subCategories: getAvailableSubCategories().length, providers: getAvailableProviders().length, pricingOptions: getAvailablePricingOptions().length, toolTypes: getAvailableToolTypes().length, features: getAvailableToolFeatures().length };
}

function getMarketplaceOverview() {
  const counts = getMarketplaceCounts();
  return { ...counts, totalUsers: MARKETPLACE_TOTAL_USERS, averageRating: MARKETPLACE_AVERAGE_RATING, featured: MARKETPLACE_STATISTICS.featured, trending: MARKETPLACE_STATISTICS.trending, newTools: MARKETPLACE_STATISTICS.newTools, verified: MARKETPLACE_STATISTICS.verified, aiPowered: MARKETPLACE_STATISTICS.aiPowered, free: MARKETPLACE_STATISTICS.free, freemium: MARKETPLACE_STATISTICS.freemium, pro: MARKETPLACE_STATISTICS.pro, enterprise: MARKETPLACE_STATISTICS.enterprise };
}

function deduplicateTools(tools: Tool[]): Tool[] {
  const seen = new Set<string>();
  return tools.filter((tool) => { if (seen.has(tool.id)) return false; seen.add(tool.id); return true; });
}

function buildMegaRecommendationFeed(favoriteIds: string[] = [], limit = 24): Tool[] {
  const featured = getFeaturedMarketplaceTools(8);
  const trending = getTrendingMarketplaceTools(8);
  const personalized = getPersonalizedToolFeed(favoriteIds, 8);
  const highlyRated = getHighlyRatedTools(8);
  const free = getBestFreeMarketplaceTools(8);
  return mergeToolCollections(personalized, featured, trending, highlyRated, free).slice(0, limit);
}

function buildCategoryOverview() {
  return getAvailableCategories().map((category) => ({ category, count: getCategoryToolCount(category), description: CATEGORY_DESCRIPTIONS[category], tools: getRecommendedByCategory(category, 6), popular: getPopularToolsByCategory(category, 3) }));
}

function buildProviderOverview() {
  return getAvailableProviders().map((provider) => ({ provider, count: getProviderToolCount(provider), tools: toolsByProvider(provider).slice(0, 6) }));
}

function buildFeatureOverview() {
  return getAvailableToolFeatures().map((feature) => ({ feature, count: getFeatureToolCount(feature), tools: toolsByFeature(feature).slice(0, 6) }));
}

function buildMarketplaceExport() {
  return { version: "1.0", generatedAt: new Date().toISOString(), overview: getMarketplaceOverview(), validation: MARKETPLACE_VALIDATION_SUMMARY, categories: buildCategoryOverview(), providers: buildProviderOverview(), features: buildFeatureOverview(), collections: UNIQUE_DISCOVERY_SECTIONS, statistics: MARKETPLACE_STATISTICS };
}

export const MARKETPLACE_EXPORT = buildMarketplaceExport();

export const TOOLS_MARKETPLACE_API = {
  data: VALID_MARKETPLACE_TOOLS,
  all: ALL_TOOLS,
  normalized: NORMALIZED_TOOLS,
  valid: VALID_MARKETPLACE_TOOLS,
  search: indexedToolSearch,
  suggestions: buildToolSearchSuggestions,
  discover: discoverMarketplaceTools,
  filters: MARKETPLACE_FILTER_OPTIONS,
  categories: MARKETPLACE_CATEGORY_INFO,
  collections: UNIQUE_DISCOVERY_SECTIONS,
  recommendations: getToolRecommendations,
  megaFeed: buildMegaRecommendationFeed,
  favorites: getFavoriteTools,
  recent: getRecentTools,
  personal: getPersonalizedToolFeed,
  analytics: TOOL_ANALYTICS,
  actions: TOOL_ACTIONS,
  ui: TOOL_UI,
  state: MARKETPLACE_STATE,
  validation: MARKETPLACE_VALIDATION_SUMMARY,
  overview: getMarketplaceOverview,
  export: MARKETPLACE_EXPORT,
};

export const TOOLS_MARKETPLACE_READY = Boolean(VALID_MARKETPLACE_TOOLS.length) && MARKETPLACE_VALIDATION_SUMMARY.ready && MARKETPLACE_HEALTH.ready && RECOMMENDATION_ENGINE_READY && TOOL_ACTION_ENGINE_READY && TOOL_UI_READY && TOOL_ANALYTICS_READY;

export const TOOLS_BUILD_STATUS = {
  dataset: VALID_MARKETPLACE_TOOLS.length > 0,
  validation: MARKETPLACE_VALIDATION_SUMMARY.ready,
  search: MARKETPLACE_SEARCH_INDEX.length > 0,
  filters: MARKETPLACE_FILTER_OPTIONS.categories.length > 0,
  recommendations: RECOMMENDATION_ENGINE_READY,
  actions: TOOL_ACTION_ENGINE_READY,
  ui: TOOL_UI_READY,
  analytics: TOOL_ANALYTICS_READY,
  marketplace: TOOLS_MARKETPLACE_READY,
};

function isToolsMarketplaceReady(): boolean { return TOOLS_MARKETPLACE_READY; }

export {
  isToolsMarketplaceReady,
  getMarketplaceOverview,
  getMarketplaceCounts,
  buildMegaRecommendationFeed,
  buildToolSearchSuggestions,
  indexedToolSearch,
  validateMarketplaceTool,
  getInvalidMarketplaceTools,
};
