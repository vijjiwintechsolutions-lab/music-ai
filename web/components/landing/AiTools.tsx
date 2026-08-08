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

/* ---------------------------------------------------------
   Tool Badge
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Pricing
   --------------------------------------------------------- */

export type ToolPricing =
  | "Free"
  | "Freemium"
  | "Pro"
  | "Enterprise";

/* ---------------------------------------------------------
   Main Categories
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Sub Categories
   --------------------------------------------------------- */

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
  
/* ---------------------------------------------------------
   Tool Types
   --------------------------------------------------------- */

export type ToolType =
  | "AI"
  | "No-Code"
  | "Automation"
  | "Developer"
  | "Creative"
  | "Business"
  | "Productivity"
  | "Research";

/* ---------------------------------------------------------
   Tool Feature Types
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Tool
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   View Modes
   --------------------------------------------------------- */

export type ToolsViewMode =
  | "grid"
  | "compact";

/* ---------------------------------------------------------
   Main Tabs
   --------------------------------------------------------- */

export type ToolsTab =
  | "all"
  | "trending"
  | "new"
  | "favorites"
  | "free"
  | "pro";

/* ---------------------------------------------------------
   Sort Modes
   --------------------------------------------------------- */

export type ToolsSortMode =
  | "Recommended"
  | "Popular"
  | "Newest"
  | "Highest Rated"
  | "Most Used";

/* ---------------------------------------------------------
   Filter State
   --------------------------------------------------------- */

export type ToolsFilterState = {
  category: "All" | ToolCategory;

  subCategory:
    | "All"
    | ToolSubCategory;

  pricing:
    | "All Pricing"
    | ToolPricing;

  type:
    | "All Types"
    | ToolType;

  feature:
    | "All Features"
    | ToolFeature;

  provider:
    | "All Providers"
    | string;
};

/* ---------------------------------------------------------
   Search State
   --------------------------------------------------------- */

export type ToolsSearchState = {
  query: string;

  page: number;

  perPage: number;

  sort: ToolsSortMode;
};

/* ---------------------------------------------------------
   Marketplace Statistics
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Tool Collection
   --------------------------------------------------------- */

export type ToolCollection = {
  id: string;

  title: string;

  description: string;

  category?: ToolCategory;

  tools: Tool[];
};

/* ---------------------------------------------------------
   Category Information
   --------------------------------------------------------- */

export type ToolCategoryInfo = {
  id: ToolCategory;

  title: string;

  description: string;

  icon: React.ElementType;

  gradient: string;

  count: number;
};

/* ---------------------------------------------------------
   Component Props
   --------------------------------------------------------- */

export type ToolsProps = {
  initialCategory?: ToolCategory | "All";

  initialSearch?: string;

  showHeader?: boolean;

  showStats?: boolean;

  showFilters?: boolean;

  showCategories?: boolean;

  showFooterCTA?: boolean;
};

/* ---------------------------------------------------------
   Constants
   --------------------------------------------------------- */

export const TOOLS_PER_PAGE_GRID = 12;

export const TOOLS_PER_PAGE_COMPACT = 16;

export const TOOLS_STORAGE_KEY =
  "market-ai-favorite-tools";

export const TOOLS_SEARCH_DEBOUNCE = 250;

/* ---------------------------------------------------------
   Category List
   --------------------------------------------------------- */

export const TOOL_CATEGORIES: Array<
  "All" | ToolCategory
> = [
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

/* ---------------------------------------------------------
   Pricing List
   --------------------------------------------------------- */

export const TOOL_PRICING_OPTIONS: Array<
  "All Pricing" | ToolPricing
> = [
  "All Pricing",
  "Free",
  "Freemium",
  "Pro",
  "Enterprise",
];

/* ---------------------------------------------------------
   Type List
   --------------------------------------------------------- */

export const TOOL_TYPE_OPTIONS: Array<
  "All Types" | ToolType
> = [
  "All Types",
  "AI",
  "No-Code",
  "Automation",
  "Developer",
  "Creative",
  "Business",
  "Productivity",
  "Research",
];

/* ---------------------------------------------------------
   Sort List
   --------------------------------------------------------- */

export const TOOL_SORT_OPTIONS: ToolsSortMode[] = [
  "Recommended",
  "Popular",
  "Newest",
  "Highest Rated",
  "Most Used",
];
/* =========================================================
   TOOLS MARKETPLACE
   Part 02/20
   Base Tool Dataset + Dataset Factory
   ========================================================= */

/* ---------------------------------------------------------
   Base tool records
   --------------------------------------------------------- */

const BASE_TOOLS: Tool[] = [
  {
    id: "ai-song-generator",
    title: "AI Song Generator",
    description:
      "Create complete original songs from simple text prompts.",
    category: "Music",
    subCategory: "Song Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 125000,
    thumbnail:
      "/tools/music/ai-song-generator.webp",
    route: "/tools/music/ai-song-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-lyrics-generator",
    title: "AI Lyrics Generator",
    description:
      "Generate original lyrics in multiple languages and styles.",
    category: "Music",
    subCategory: "Lyrics",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.8,
    users: 87000,
    thumbnail:
      "/tools/music/ai-lyrics.webp",
    route: "/tools/music/ai-lyrics",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Music AI",
      "Download",
    ],
    isNew: true,
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-singer",
    title: "AI Singer",
    description:
      "Create expressive AI singing vocals from lyrics.",
    category: "Music",
    subCategory: "Singing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 56000,
    thumbnail:
      "/tools/music/ai-singer.webp",
    route: "/tools/music/ai-singer",
    provider: "Market AI",
    features: [
      "Music AI",
      "Text to Audio",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-voice-clone",
    title: "AI Voice Clone",
    description:
      "Create a realistic voice model from an authorized voice sample.",
    category: "Voice",
    subCategory: "Voice Clone",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.8,
    users: 73000,
    thumbnail:
      "/tools/voice/voice-clone.webp",
    route: "/tools/voice/voice-clone",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
      "Multilingual",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "text-to-speech",
    title: "AI Text to Speech",
    description:
      "Convert written text into natural-sounding speech.",
    category: "Voice",
    subCategory: "Text to Speech",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 142000,
    thumbnail:
      "/tools/voice/text-to-speech.webp",
    route: "/tools/voice/text-to-speech",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Voice AI",
      "Multilingual",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "speech-to-text",
    title: "AI Speech to Text",
    description:
      "Transcribe speech and audio into accurate text.",
    category: "Voice",
    subCategory: "Speech to Text",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 118000,
    thumbnail:
      "/tools/voice/speech-to-text.webp",
    route: "/tools/voice/speech-to-text",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Upload",
      "Download",
      "Multilingual",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-generator",
    title: "AI Video Generator",
    description:
      "Generate engaging videos from text prompts.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 164000,
    thumbnail:
      "/tools/video/ai-video-generator.webp",
    route: "/tools/video/ai-video-generator",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Download",
      "Realtime",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-editor",
    title: "AI Video Editor",
    description:
      "Edit videos with automated AI-powered workflows.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 93000,
    thumbnail:
      "/tools/video/ai-video-editor.webp",
    route: "/tools/video/ai-video-editor",
    provider: "Market AI",
    features: [
      "Video Editing",
      "Upload",
      "Download",
      "Batch",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-avatar-generator",
    title: "AI Avatar Generator",
    description:
      "Create talking digital presenters and avatars.",
    category: "Video",
    subCategory: "Avatar",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.6,
    users: 67000,
    thumbnail:
      "/tools/video/ai-avatar.webp",
    route: "/tools/video/ai-avatar",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Voice AI",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "Create original images from natural language prompts.",
    category: "Image",
    subCategory: "Image Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 241000,
    thumbnail:
      "/tools/image/ai-image-generator.webp",
    route: "/tools/image/ai-image-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-image-editor",
    title: "AI Image Editor",
    description:
      "Edit, enhance and transform images with AI.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 154000,
    thumbnail:
      "/tools/image/ai-image-editor.webp",
    route: "/tools/image/ai-image-editor",
    provider: "Market AI",
    features: [
      "Image Editing",
      "Upload",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-background-remover",
    title: "AI Background Remover",
    description:
      "Remove image backgrounds automatically.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 189000,
    thumbnail:
      "/tools/image/background-remover.webp",
    route: "/tools/image/background-remover",
    provider: "Market AI",
    features: [
      "Image Editing",
      "Upload",
      "Download",
      "Batch",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-code-generator",
    title: "AI Code Generator",
    description:
      "Generate application code from natural language instructions.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 205000,
    thumbnail:
      "/tools/code/ai-code-generator.webp",
    route: "/tools/code/ai-code-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "API",
      "Browser",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-website-builder",
    title: "AI Website Builder",
    description:
      "Create responsive websites from simple descriptions.",
    category: "Code",
    subCategory: "Website",
    type: "No-Code",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 176000,
    thumbnail:
      "/tools/code/ai-website-builder.webp",
    route: "/tools/code/ai-website-builder",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Browser",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder",
    description:
      "Build custom AI assistants and customer chatbots.",
    category: "Business",
    subCategory: "Chatbot",
    type: "Business",
    badge: "AI",
    pricing: "Pro",
    rating: 4.7,
    users: 91000,
    thumbnail:
      "/tools/business/ai-chatbot.webp",
    route: "/tools/business/ai-chatbot",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
      "Realtime",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-content-writer",
    title: "AI Content Writer",
    description:
      "Create articles, posts, descriptions and other content.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 132000,
    thumbnail:
      "/tools/marketing/content-writer.webp",
    route: "/tools/marketing/content-writer",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-seo-assistant",
    title: "AI SEO Assistant",
    description:
      "Research keywords and optimize content for search engines.",
    category: "Marketing",
    subCategory: "SEO",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 74000,
    thumbnail:
      "/tools/marketing/seo-assistant.webp",
    route: "/tools/marketing/seo-assistant",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "API",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    description:
      "Learn faster with AI-powered explanations and study tools.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 108000,
    thumbnail:
      "/tools/education/study-assistant.webp",
    route: "/tools/education/study-assistant",
    provider: "Market AI",
    features: [
      "Research",
      "Multilingual",
      "Browser",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-research-assistant",
    title: "AI Research Assistant",
    description:
      "Search, summarize and organize research material.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 97000,
    thumbnail:
      "/tools/research/research-assistant.webp",
    route: "/tools/research/research-assistant",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Multilingual",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Dataset alias
   --------------------------------------------------------- */

const TOOLS_DATA: Tool[] = [
  ...BASE_TOOLS,
];

/* ---------------------------------------------------------
   Dataset count
   --------------------------------------------------------- */

export const INITIAL_TOOL_COUNT =
  TOOLS_DATA.length;

/* ---------------------------------------------------------
   Dataset validation
   --------------------------------------------------------- */

function validateToolRecord(
  tool: Tool
): boolean {
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

/* ---------------------------------------------------------
   Valid tools
   --------------------------------------------------------- */

const VALID_BASE_TOOLS =
  TOOLS_DATA.filter(
    validateToolRecord
  );

/* ---------------------------------------------------------
   Unique categories
   --------------------------------------------------------- */

const DATASET_CATEGORIES =
  Array.from(
    new Set(
      VALID_BASE_TOOLS.map(
        (tool) =>
          tool.category
      )
    )
  );

/* ---------------------------------------------------------
   Unique sub-categories
   --------------------------------------------------------- */

const DATASET_SUBCATEGORIES =
  Array.from(
    new Set(
      VALID_BASE_TOOLS.map(
        (tool) =>
          tool.subCategory
      )
    )
  );

/* ---------------------------------------------------------
   Unique providers
   --------------------------------------------------------- */

const DATASET_PROVIDERS =
  Array.from(
    new Set(
      VALID_BASE_TOOLS.map(
        (tool) =>
          tool.provider
      )
    )
  );

/* ---------------------------------------------------------
   Unique features
   --------------------------------------------------------- */

const DATASET_FEATURES =
  Array.from(
    new Set(
      VALID_BASE_TOOLS.flatMap(
        (tool) =>
          tool.features
      )
    )
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 03/20
   Music + Voice Tool Collections
   ========================================================= */

/* ---------------------------------------------------------
   Music tools
   --------------------------------------------------------- */

const MUSIC_TOOLS: Tool[] = [
  {
    id: "ai-beat-generator",
    title: "AI Beat Generator",
    description:
      "Generate original beats and instrumental ideas from a simple prompt.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 68000,
    thumbnail:
      "/tools/music/beat-generator.webp",
    route:
      "/tools/music/beat-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
      "Batch",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-background-music",
    title: "AI Background Music",
    description:
      "Create royalty-friendly background music for videos, podcasts and content.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 82000,
    thumbnail:
      "/tools/music/background-music.webp",
    route:
      "/tools/music/background-music",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-music-remixer",
    title: "AI Music Remixer",
    description:
      "Transform existing music into fresh arrangements and styles.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "AI",
    pricing: "Pro",
    rating: 4.6,
    users: 43000,
    thumbnail:
      "/tools/music/music-remixer.webp",
    route:
      "/tools/music/music-remixer",
    provider: "Market AI",
    features: [
      "Music AI",
      "Upload",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-song-structure",
    title: "AI Song Structure",
    description:
      "Plan verses, choruses, bridges and complete song arrangements.",
    category: "Music",
    subCategory: "Song Generation",
    type: "AI",
    badge: "AI",
    pricing: "Free",
    rating: 4.5,
    users: 37000,
    thumbnail:
      "/tools/music/song-structure.webp",
    route:
      "/tools/music/song-structure",
    provider: "Market AI",
    features: [
      "Music AI",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-melody-generator",
    title: "AI Melody Generator",
    description:
      "Generate melodies and musical ideas for original compositions.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 51000,
    thumbnail:
      "/tools/music/melody-generator.webp",
    route:
      "/tools/music/melody-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-music-mastering",
    title: "AI Music Mastering",
    description:
      "Automatically balance and master music for a polished final sound.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.8,
    users: 79000,
    thumbnail:
      "/tools/music/ai-mastering.webp",
    route:
      "/tools/music/ai-mastering",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-podcast-generator",
    title: "AI Podcast Generator",
    description:
      "Create podcast episodes, scripts and audio from an idea.",
    category: "Music",
    subCategory: "Podcast",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 92000,
    thumbnail:
      "/tools/music/podcast-generator.webp",
    route:
      "/tools/music/podcast-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Voice AI",
      "Download",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-podcast-editor",
    title: "AI Podcast Editor",
    description:
      "Clean, cut and enhance podcast recordings with AI.",
    category: "Audio",
    subCategory: "Podcast",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.6,
    users: 64000,
    thumbnail:
      "/tools/audio/podcast-editor.webp",
    route:
      "/tools/audio/podcast-editor",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Audio to Text",
      "Upload",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Voice tools
   --------------------------------------------------------- */

const VOICE_TOOLS: Tool[] = [
  {
    id: "ai-voice-changer",
    title: "AI Voice Changer",
    description:
      "Transform a recorded voice into different AI voice styles.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.6,
    users: 104000,
    thumbnail:
      "/tools/voice/voice-changer.webp",
    route:
      "/tools/voice/voice-changer",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
      "Realtime",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-voice-enhancer",
    title: "AI Voice Enhancer",
    description:
      "Remove unwanted noise and improve speech clarity.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 88000,
    thumbnail:
      "/tools/voice/voice-enhancer.webp",
    route:
      "/tools/voice/voice-enhancer",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-transcription",
    title: "AI Transcription",
    description:
      "Convert meetings, interviews and recordings into searchable text.",
    category: "Voice",
    subCategory: "Transcription",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 151000,
    thumbnail:
      "/tools/voice/transcription.webp",
    route:
      "/tools/voice/transcription",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Upload",
      "Download",
      "Multilingual",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-dubbing",
    title: "AI Dubbing",
    description:
      "Translate and dub spoken content into multiple languages.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.7,
    users: 47000,
    thumbnail:
      "/tools/voice/ai-dubbing.webp",
    route:
      "/tools/voice/ai-dubbing",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Multilingual",
      "Upload",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-pronunciation-coach",
    title: "AI Pronunciation Coach",
    description:
      "Practice pronunciation and receive instant AI feedback.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 39000,
    thumbnail:
      "/tools/voice/pronunciation-coach.webp",
    route:
      "/tools/voice/pronunciation-coach",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Realtime",
      "Multilingual",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-voice-translator",
    title: "AI Voice Translator",
    description:
      "Translate spoken conversations between supported languages.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 73000,
    thumbnail:
      "/tools/voice/voice-translator.webp",
    route:
      "/tools/voice/voice-translator",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Multilingual",
      "Realtime",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-meeting-notes",
    title: "AI Meeting Notes",
    description:
      "Turn meetings into structured notes, summaries and action items.",
    category: "Productivity",
    subCategory: "Document",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 127000,
    thumbnail:
      "/tools/productivity/meeting-notes.webp",
    route:
      "/tools/productivity/meeting-notes",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Upload",
      "Download",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Combined creative dataset
   --------------------------------------------------------- */

const MUSIC_VOICE_TOOLS: Tool[] = [
  ...MUSIC_TOOLS,
  ...VOICE_TOOLS,
];

/* ---------------------------------------------------------
   Dataset merge helper
   --------------------------------------------------------- */

function mergeToolCollections(
  ...collections: Tool[][]
): Tool[] {
  const map = new Map<
    string,
    Tool
  >();

  for (const collection of collections) {
    for (const tool of collection) {
      if (!map.has(tool.id)) {
        map.set(
          tool.id,
          tool
        );
      }
    }
  }

  return Array.from(
    map.values()
  );
}

/* ---------------------------------------------------------
   Merge base + creative tools
   --------------------------------------------------------- */

const INITIAL_MARKETPLACE_TOOLS =
  mergeToolCollections(
    TOOLS_DATA,
    MUSIC_VOICE_TOOLS
  );

/* ---------------------------------------------------------
   Verify duplicate IDs
   --------------------------------------------------------- */

function findDuplicateToolIds(
  input: Tool[]
): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const tool of input) {
    if (seen.has(tool.id)) {
      duplicates.add(tool.id);
    }

    seen.add(tool.id);
  }

  return Array.from(
    duplicates
  );
}

const DUPLICATE_TOOL_IDS =
  findDuplicateToolIds(
    INITIAL_MARKETPLACE_TOOLS
  );

/* ---------------------------------------------------------
   Clean marketplace dataset
   --------------------------------------------------------- */

export const MARKETPLACE_TOOLS =
  INITIAL_MARKETPLACE_TOOLS.filter(
    (tool) =>
      !DUPLICATE_TOOL_IDS.includes(
        tool.id
      )
  );

/* ---------------------------------------------------------
   Current real dataset count
   --------------------------------------------------------- */

export const CURRENT_TOOL_COUNT =
  MARKETPLACE_TOOLS.length;

/* ---------------------------------------------------------
   Dataset categories
   --------------------------------------------------------- */

export const MARKETPLACE_CATEGORIES =
  Array.from(
    new Set(
      MARKETPLACE_TOOLS.map(
        (tool) =>
          tool.category
      )
    )
  );

/* ---------------------------------------------------------
   Dataset sub-categories
   --------------------------------------------------------- */

export const MARKETPLACE_SUBCATEGORIES =
  Array.from(
    new Set(
      MARKETPLACE_TOOLS.map(
        (tool) =>
          tool.subCategory
      )
    )
  );

/* ---------------------------------------------------------
   Dataset providers
   --------------------------------------------------------- */

export const MARKETPLACE_PROVIDERS =
  Array.from(
    new Set(
      MARKETPLACE_TOOLS.map(
        (tool) =>
          tool.provider
      )
    )
  );

/* ---------------------------------------------------------
   Dataset features
   --------------------------------------------------------- */

export const MARKETPLACE_FEATURES =
  Array.from(
    new Set(
      MARKETPLACE_TOOLS.flatMap(
        (tool) =>
          tool.features
      )
    )
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 04/20
   Video + Image Tool Collections
   ========================================================= */

/* ---------------------------------------------------------
   Video tools
   --------------------------------------------------------- */

const VIDEO_TOOLS: Tool[] = [
  {
    id: "ai-script-to-video",
    title: "AI Script to Video",
    description:
      "Turn a written script into a complete video concept.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 143000,
    thumbnail:
      "/tools/video/script-to-video.webp",
    route:
      "/tools/video/script-to-video",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Download",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-text-to-video",
    title: "AI Text to Video",
    description:
      "Generate short videos from natural language prompts.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 181000,
    thumbnail:
      "/tools/video/text-to-video.webp",
    route:
      "/tools/video/text-to-video",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Download",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-image-to-video",
    title: "AI Image to Video",
    description:
      "Animate still images and turn them into engaging videos.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.7,
    users: 96000,
    thumbnail:
      "/tools/video/image-to-video.webp",
    route:
      "/tools/video/image-to-video",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Upload",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-caption",
    title: "AI Video Caption Generator",
    description:
      "Automatically create captions and subtitles for videos.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 112000,
    thumbnail:
      "/tools/video/video-caption.webp",
    route:
      "/tools/video/video-caption",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Video Editing",
      "Multilingual",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-translator",
    title: "AI Video Translator",
    description:
      "Translate video dialogue and subtitles into multiple languages.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.6,
    users: 61000,
    thumbnail:
      "/tools/video/video-translator.webp",
    route:
      "/tools/video/video-translator",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Voice AI",
      "Upload",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-upscaler",
    title: "AI Video Upscaler",
    description:
      "Improve video resolution and visual quality with AI.",
    category: "Video",
    subCategory: "Video Editing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 73000,
    thumbnail:
      "/tools/video/video-upscaler.webp",
    route:
      "/tools/video/video-upscaler",
    provider: "Market AI",
    features: [
      "Video Editing",
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-video-script",
    title: "AI Video Script Writer",
    description:
      "Write video scripts, hooks and scene ideas from a topic.",
    category: "Video",
    subCategory: "Video Generation",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 83000,
    thumbnail:
      "/tools/video/video-script.webp",
    route:
      "/tools/video/video-script",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Download",
      "Multilingual",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-animation-generator",
    title: "AI Animation Generator",
    description:
      "Create animated scenes and visual sequences from prompts.",
    category: "Video",
    subCategory: "Animation",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 52000,
    thumbnail:
      "/tools/video/animation-generator.webp",
    route:
      "/tools/video/animation-generator",
    provider: "Market AI",
    features: [
      "Text to Video",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Image tools
   --------------------------------------------------------- */

const IMAGE_TOOLS: Tool[] = [
  {
    id: "ai-text-to-image",
    title: "AI Text to Image",
    description:
      "Generate high-quality images from natural language prompts.",
    category: "Image",
    subCategory: "Image Generation",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 238000,
    thumbnail:
      "/tools/image/text-to-image.webp",
    route:
      "/tools/image/text-to-image",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-image-upscaler",
    title: "AI Image Upscaler",
    description:
      "Increase image resolution while preserving visual detail.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 176000,
    thumbnail:
      "/tools/image/image-upscaler.webp",
    route:
      "/tools/image/image-upscaler",
    provider: "Market AI",
    features: [
      "Image Editing",
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-photo-enhancer",
    title: "AI Photo Enhancer",
    description:
      "Enhance portraits and photographs automatically.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 152000,
    thumbnail:
      "/tools/image/photo-enhancer.webp",
    route:
      "/tools/image/photo-enhancer",
    provider: "Market AI",
    features: [
      "Image Editing",
      "Upload",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-object-remover",
    title: "AI Object Remover",
    description:
      "Remove unwanted objects from images with intelligent editing.",
    category: "Image",
    subCategory: "Image Editing",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 129000,
    thumbnail:
      "/tools/image/object-remover.webp",
    route:
      "/tools/image/object-remover",
    provider: "Market AI",
    features: [
      "Image Editing",
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-product-photo",
    title: "AI Product Photo",
    description:
      "Create professional product images from simple source photos.",
    category: "Image",
    subCategory: "Image Generation",
    type: "Business",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 68000,
    thumbnail:
      "/tools/image/product-photo.webp",
    route:
      "/tools/image/product-photo",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Image Editing",
      "Upload",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-profile-picture",
    title: "AI Profile Picture",
    description:
      "Generate professional profile images and avatars.",
    category: "Image",
    subCategory: "Image Generation",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.6,
    users: 116000,
    thumbnail:
      "/tools/image/profile-picture.webp",
    route:
      "/tools/image/profile-picture",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Image Editing",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-logo-generator",
    title: "AI Logo Generator",
    description:
      "Create logo concepts and brand marks from a description.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 134000,
    thumbnail:
      "/tools/design/logo-generator.webp",
    route:
      "/tools/design/logo-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-album-cover",
    title: "AI Album Cover",
    description:
      "Generate original album and single artwork for music releases.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 54000,
    thumbnail:
      "/tools/design/album-cover.webp",
    route:
      "/tools/design/album-cover",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Music AI",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-social-post-image",
    title: "AI Social Post Image",
    description:
      "Create social media graphics from a campaign idea.",
    category: "Marketing",
    subCategory: "Content",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 61000,
    thumbnail:
      "/tools/marketing/social-post-image.webp",
    route:
      "/tools/marketing/social-post-image",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Multilingual",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Combined Video + Image collection
   --------------------------------------------------------- */

const VIDEO_IMAGE_TOOLS: Tool[] =
  mergeToolCollections(
    VIDEO_TOOLS,
    IMAGE_TOOLS
  );

/* ---------------------------------------------------------
   Merge with existing marketplace
   --------------------------------------------------------- */

export const CREATIVE_TOOLS =
  mergeToolCollections(
    MARKETPLACE_TOOLS,
    VIDEO_IMAGE_TOOLS
  );

/* ---------------------------------------------------------
   Creative category helpers
   --------------------------------------------------------- */

function getVideoTools(): Tool[] {
  return CREATIVE_TOOLS.filter(
    (tool) =>
      tool.category === "Video"
  );
}

function getImageTools(): Tool[] {
  return CREATIVE_TOOLS.filter(
    (tool) =>
      tool.category === "Image"
  );
}

function getDesignTools(): Tool[] {
  return CREATIVE_TOOLS.filter(
    (tool) =>
      tool.category === "Design"
  );
}

/* ---------------------------------------------------------
   Creative tool counts
   --------------------------------------------------------- */

export const VIDEO_TOOL_COUNT =
  getVideoTools().length;

export const IMAGE_TOOL_COUNT =
  getImageTools().length;

export const DESIGN_TOOL_COUNT =
  getDesignTools().length;

/* ---------------------------------------------------------
   Creative dataset validation
   --------------------------------------------------------- */

const CREATIVE_VALIDATION =
  CREATIVE_TOOLS.every(
    validateToolRecord
  );

export const CREATIVE_TOOLS_READY =
  CREATIVE_VALIDATION;
/* =========================================================
   TOOLS MARKETPLACE
   Part 05/20
   Code + Business + Marketing Tool Collections
   ========================================================= */

/* ---------------------------------------------------------
   Code tools
   --------------------------------------------------------- */

const CODE_TOOLS: Tool[] = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    description:
      "Review source code and identify possible bugs, issues and improvements.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 121000,
    thumbnail:
      "/tools/code/code-reviewer.webp",
    route:
      "/tools/code/code-reviewer",
    provider: "Market AI",
    features: [
      "Code AI",
      "Text to Code",
      "Browser",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-debugger",
    title: "AI Debugger",
    description:
      "Analyze errors and suggest fixes for application code.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 109000,
    thumbnail:
      "/tools/code/ai-debugger.webp",
    route:
      "/tools/code/ai-debugger",
    provider: "Market AI",
    features: [
      "Code AI",
      "Text to Code",
      "Browser",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-react-generator",
    title: "AI React Generator",
    description:
      "Generate React components and interfaces from natural language.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.8,
    users: 87000,
    thumbnail:
      "/tools/code/react-generator.webp",
    route:
      "/tools/code/react-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Browser",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-api-builder",
    title: "AI API Builder",
    description:
      "Generate API structures, endpoints and integration code.",
    category: "Code",
    subCategory: "Backend",
    type: "Developer",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 63000,
    thumbnail:
      "/tools/code/api-builder.webp",
    route:
      "/tools/code/api-builder",
    provider: "Market AI",
    features: [
      "Text to Code",
      "API",
      "Code AI",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-database-builder",
    title: "AI Database Builder",
    description:
      "Design database schemas and generate database queries.",
    category: "Data",
    subCategory: "Database",
    type: "Developer",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 58000,
    thumbnail:
      "/tools/data/database-builder.webp",
    route:
      "/tools/data/database-builder",
    provider: "Market AI",
    features: [
      "Code AI",
      "API",
      "Database",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-sql-generator",
    title: "AI SQL Generator",
    description:
      "Create SQL queries from plain-language database questions.",
    category: "Data",
    subCategory: "Database",
    type: "Developer",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 102000,
    thumbnail:
      "/tools/data/sql-generator.webp",
    route:
      "/tools/data/sql-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Database",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Business tools
   --------------------------------------------------------- */

const BUSINESS_TOOLS: Tool[] = [
  {
    id: "ai-business-plan",
    title: "AI Business Plan",
    description:
      "Create structured business plans from your business idea.",
    category: "Business",
    subCategory: "Business Intelligence",
    type: "Business",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 81000,
    thumbnail:
      "/tools/business/business-plan.webp",
    route:
      "/tools/business/business-plan",
    provider: "Market AI",
    features: [
      "Research",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-business-analytics",
    title: "AI Business Analytics",
    description:
      "Analyze business data and discover useful trends.",
    category: "Business",
    subCategory: "Analytics",
    type: "Business",
    badge: "AI",
    pricing: "Pro",
    rating: 4.6,
    users: 52000,
    thumbnail:
      "/tools/business/business-analytics.webp",
    route:
      "/tools/business/business-analytics",
    provider: "Market AI",
    features: [
      "Research",
      "Upload",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-invoice-generator",
    title: "AI Invoice Generator",
    description:
      "Create professional invoices and billing documents quickly.",
    category: "Business",
    subCategory: "Document",
    type: "Business",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 97000,
    thumbnail:
      "/tools/business/invoice-generator.webp",
    route:
      "/tools/business/invoice-generator",
    provider: "Market AI",
    features: [
      "Download",
      "Document",
    ],
    featured: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-business-report",
    title: "AI Business Report",
    description:
      "Generate structured reports from business information and data.",
    category: "Business",
    subCategory: "Business Intelligence",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.5,
    users: 41000,
    thumbnail:
      "/tools/business/business-report.webp",
    route:
      "/tools/business/business-report",
    provider: "Market AI",
    features: [
      "Research",
      "Download",
      "Multilingual",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description:
      "Create AI-powered support workflows for customer questions.",
    category: "Business",
    subCategory: "Chatbot",
    type: "Business",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.8,
    users: 113000,
    thumbnail:
      "/tools/business/customer-support.webp",
    route:
      "/tools/business/customer-support",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Realtime",
      "Browser",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Marketing tools
   --------------------------------------------------------- */

const MARKETING_TOOLS: Tool[] = [
  {
    id: "ai-ad-copywriter",
    title: "AI Ad Copywriter",
    description:
      "Generate advertising copy for campaigns and product promotions.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 119000,
    thumbnail:
      "/tools/marketing/ad-copywriter.webp",
    route:
      "/tools/marketing/ad-copywriter",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-email-writer",
    title: "AI Email Writer",
    description:
      "Write professional marketing and business emails with AI.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 137000,
    thumbnail:
      "/tools/marketing/email-writer.webp",
    route:
      "/tools/marketing/email-writer",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-social-media-manager",
    title: "AI Social Media Manager",
    description:
      "Plan, write and organize social media content.",
    category: "Marketing",
    subCategory: "Marketing Automation",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 76000,
    thumbnail:
      "/tools/marketing/social-media-manager.webp",
    route:
      "/tools/marketing/social-media-manager",
    provider: "Market AI",
    features: [
      "Workflow",
      "Multilingual",
      "Browser",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-product-description",
    title: "AI Product Description",
    description:
      "Create persuasive product descriptions for online stores.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 128000,
    thumbnail:
      "/tools/marketing/product-description.webp",
    route:
      "/tools/marketing/product-description",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-keyword-research",
    title: "AI Keyword Research",
    description:
      "Discover keyword ideas and organize search opportunities.",
    category: "Marketing",
    subCategory: "SEO",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 71000,
    thumbnail:
      "/tools/marketing/keyword-research.webp",
    route:
      "/tools/marketing/keyword-research",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-blog-outline",
    title: "AI Blog Outline",
    description:
      "Generate structured blog outlines before writing full articles.",
    category: "Marketing",
    subCategory: "Content",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.5,
    users: 63000,
    thumbnail:
      "/tools/marketing/blog-outline.webp",
    route:
      "/tools/marketing/blog-outline",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Combine Part 05 datasets
   --------------------------------------------------------- */

const BUSINESS_MARKETING_CODE_TOOLS =
  mergeToolCollections(
    CODE_TOOLS,
    BUSINESS_TOOLS,
    MARKETING_TOOLS
  );

/* ---------------------------------------------------------
   Merge into marketplace
   --------------------------------------------------------- */

export const EXTENDED_MARKETPLACE_TOOLS =
  mergeToolCollections(
    CREATIVE_TOOLS,
    BUSINESS_MARKETING_CODE_TOOLS
  );

/* ---------------------------------------------------------
   Category getters
   --------------------------------------------------------- */

function getCodeTools(): Tool[] {
  return EXTENDED_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Code"
  );
}

function getBusinessTools(): Tool[] {
  return EXTENDED_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Business"
  );
}

function getMarketingTools(): Tool[] {
  return EXTENDED_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Marketing"
  );
}

function getDataTools(): Tool[] {
  return EXTENDED_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Data"
  );
}

/* ---------------------------------------------------------
   Category counts
   --------------------------------------------------------- */

export const CODE_TOOL_COUNT =
  getCodeTools().length;

export const BUSINESS_TOOL_COUNT =
  getBusinessTools().length;

export const MARKETING_TOOL_COUNT =
  getMarketingTools().length;

export const DATA_TOOL_COUNT =
  getDataTools().length;

/* ---------------------------------------------------------
   Extended dataset validation
   --------------------------------------------------------- */

export const EXTENDED_DATASET_READY =
  EXTENDED_MARKETPLACE_TOOLS.every(
    validateToolRecord
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 06/20
   Education + Productivity + Research Tools
   ========================================================= */

/* ---------------------------------------------------------
   Education tools
   --------------------------------------------------------- */

const EDUCATION_TOOLS: Tool[] = [
  {
    id: "ai-tutor",
    title: "AI Tutor",
    description:
      "Get interactive explanations and guided help for learning.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.9,
    users: 146000,
    thumbnail:
      "/tools/education/ai-tutor.webp",
    route:
      "/tools/education/ai-tutor",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-homework-helper",
    title: "AI Homework Helper",
    description:
      "Understand homework questions with step-by-step explanations.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 138000,
    thumbnail:
      "/tools/education/homework-helper.webp",
    route:
      "/tools/education/homework-helper",
    provider: "Market AI",
    features: [
      "Research",
      "Multilingual",
      "Browser",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-flashcard-generator",
    title: "AI Flashcard Generator",
    description:
      "Turn notes and study material into useful flashcards.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 91000,
    thumbnail:
      "/tools/education/flashcard-generator.webp",
    route:
      "/tools/education/flashcard-generator",
    provider: "Market AI",
    features: [
      "Research",
      "Upload",
      "Download",
      "Multilingual",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-quiz-generator",
    title: "AI Quiz Generator",
    description:
      "Create quizzes and practice tests from any topic.",
    category: "Education",
    subCategory: "Learning",
    type: "AI",
    badge: "New",
    pricing: "Free",
    rating: 4.6,
    users: 76000,
    thumbnail:
      "/tools/education/quiz-generator.webp",
    route:
      "/tools/education/quiz-generator",
    provider: "Market AI",
    features: [
      "Research",
      "Multilingual",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-presentation-maker",
    title: "AI Presentation Maker",
    description:
      "Turn ideas and documents into structured presentations.",
    category: "Education",
    subCategory: "Presentation",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 128000,
    thumbnail:
      "/tools/education/presentation-maker.webp",
    route:
      "/tools/education/presentation-maker",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Upload",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-language-learning",
    title: "AI Language Learning",
    description:
      "Practice vocabulary, conversation and language skills with AI.",
    category: "Education",
    subCategory: "Learning",
    type: "Education",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.8,
    users: 103000,
    thumbnail:
      "/tools/education/language-learning.webp",
    route:
      "/tools/education/language-learning",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Multilingual",
      "Realtime",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Productivity tools
   --------------------------------------------------------- */

const PRODUCTIVITY_TOOLS: Tool[] = [
  {
    id: "ai-note-taker",
    title: "AI Note Taker",
    description:
      "Capture ideas and turn information into organized notes.",
    category: "Productivity",
    subCategory: "Document",
    type: "Productivity",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 149000,
    thumbnail:
      "/tools/productivity/note-taker.webp",
    route:
      "/tools/productivity/note-taker",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Download",
      "Multilingual",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-summarizer",
    title: "AI Summarizer",
    description:
      "Summarize long documents, articles and text into key points.",
    category: "Productivity",
    subCategory: "Writing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.8,
    users: 219000,
    thumbnail:
      "/tools/productivity/summarizer.webp",
    route:
      "/tools/productivity/summarizer",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Multilingual",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-email-assistant",
    title: "AI Email Assistant",
    description:
      "Draft, rewrite and summarize emails quickly.",
    category: "Productivity",
    subCategory: "Writing",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 167000,
    thumbnail:
      "/tools/productivity/email-assistant.webp",
    route:
      "/tools/productivity/email-assistant",
    provider: "Market AI",
    features: [
      "Multilingual",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-task-planner",
    title: "AI Task Planner",
    description:
      "Turn goals and ideas into structured tasks and action plans.",
    category: "Productivity",
    subCategory: "Productivity",
    type: "Productivity",
    badge: "AI",
    pricing: "Free",
    rating: 4.6,
    users: 87000,
    thumbnail:
      "/tools/productivity/task-planner.webp",
    route:
      "/tools/productivity/task-planner",
    provider: "Market AI",
    features: [
      "Workflow",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-calendar-assistant",
    title: "AI Calendar Assistant",
    description:
      "Organize schedules and suggest efficient time plans.",
    category: "Productivity",
    subCategory: "Productivity",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.5,
    users: 58000,
    thumbnail:
      "/tools/productivity/calendar-assistant.webp",
    route:
      "/tools/productivity/calendar-assistant",
    provider: "Market AI",
    features: [
      "Workflow",
      "Browser",
      "Realtime",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-document-editor",
    title: "AI Document Editor",
    description:
      "Rewrite, improve and organize documents with AI assistance.",
    category: "Productivity",
    subCategory: "Document",
    type: "Productivity",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 113000,
    thumbnail:
      "/tools/productivity/document-editor.webp",
    route:
      "/tools/productivity/document-editor",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Multilingual",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Research tools
   --------------------------------------------------------- */

const RESEARCH_TOOLS: Tool[] = [
  {
    id: "ai-paper-summarizer",
    title: "AI Paper Summarizer",
    description:
      "Summarize research papers and extract important findings.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 94000,
    thumbnail:
      "/tools/research/paper-summarizer.webp",
    route:
      "/tools/research/paper-summarizer",
    provider: "Market AI",
    features: [
      "Research",
      "Upload",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-literature-review",
    title: "AI Literature Review",
    description:
      "Organize literature and identify important research themes.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 51000,
    thumbnail:
      "/tools/research/literature-review.webp",
    route:
      "/tools/research/literature-review",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-fact-checker",
    title: "AI Fact Checker",
    description:
      "Analyze claims and organize supporting information.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.6,
    users: 76000,
    thumbnail:
      "/tools/research/fact-checker.webp",
    route:
      "/tools/research/fact-checker",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Multilingual",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-web-researcher",
    title: "AI Web Researcher",
    description:
      "Research online information and organize useful findings.",
    category: "Research",
    subCategory: "Research",
    type: "Research",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 134000,
    thumbnail:
      "/tools/research/web-researcher.webp",
    route:
      "/tools/research/web-researcher",
    provider: "Market AI",
    features: [
      "Research",
      "Browser",
      "Multilingual",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-data-researcher",
    title: "AI Data Researcher",
    description:
      "Explore datasets and generate useful research insights.",
    category: "Research",
    subCategory: "Analytics",
    type: "Research",
    badge: "New",
    pricing: "Pro",
    rating: 4.5,
    users: 42000,
    thumbnail:
      "/tools/research/data-researcher.webp",
    route:
      "/tools/research/data-researcher",
    provider: "Market AI",
    features: [
      "Research",
      "Upload",
      "Batch",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-document-analyzer",
    title: "AI Document Analyzer",
    description:
      "Analyze long documents and extract structured information.",
    category: "Research",
    subCategory: "Document",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 119000,
    thumbnail:
      "/tools/research/document-analyzer.webp",
    route:
      "/tools/research/document-analyzer",
    provider: "Market AI",
    features: [
      "Upload",
      "Research",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Combine Part 06 collections
   --------------------------------------------------------- */

const EDUCATION_PRODUCTIVITY_RESEARCH =
  mergeToolCollections(
    EDUCATION_TOOLS,
    PRODUCTIVITY_TOOLS,
    RESEARCH_TOOLS
  );

/* ---------------------------------------------------------
   Extended marketplace dataset
   --------------------------------------------------------- */

export const FULL_MARKETPLACE_TOOLS =
  mergeToolCollections(
    EXTENDED_MARKETPLACE_TOOLS,
    EDUCATION_PRODUCTIVITY_RESEARCH
  );

/* ---------------------------------------------------------
   Category getters
   --------------------------------------------------------- */

function getEducationTools(): Tool[] {
  return FULL_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      "Education"
  );
}

function getProductivityTools(): Tool[] {
  return FULL_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      "Productivity"
  );
}

function getResearchTools(): Tool[] {
  return FULL_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      "Research"
  );
}

/* ---------------------------------------------------------
   Category counts
   --------------------------------------------------------- */

export const EDUCATION_TOOL_COUNT =
  getEducationTools().length;

export const PRODUCTIVITY_TOOL_COUNT =
  getProductivityTools().length;

export const RESEARCH_TOOL_COUNT =
  getResearchTools().length;

/* ---------------------------------------------------------
   Full dataset count
   --------------------------------------------------------- */

export const FULL_MARKETPLACE_TOOL_COUNT =
  FULL_MARKETPLACE_TOOLS.length;

/* ---------------------------------------------------------
   Full dataset validation
   --------------------------------------------------------- */

export const FULL_DATASET_READY =
  FULL_MARKETPLACE_TOOLS.every(
    validateToolRecord
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 07/20
   Audio + Design + Data Tool Collections
   ========================================================= */

/* ---------------------------------------------------------
   Audio tools
   --------------------------------------------------------- */

const AUDIO_TOOLS: Tool[] = [
  {
    id: "ai-vocal-remover",
    title: "AI Vocal Remover",
    description:
      "Separate vocals and instrumental tracks from an audio file.",
    category: "Audio",
    subCategory: "Audio Editing",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 174000,
    thumbnail:
      "/tools/audio/vocal-remover.webp",
    route:
      "/tools/audio/vocal-remover",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-audio-enhancer",
    title: "AI Audio Enhancer",
    description:
      "Improve clarity and quality of recordings with AI processing.",
    category: "Audio",
    subCategory: "Audio Editing",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 136000,
    thumbnail:
      "/tools/audio/audio-enhancer.webp",
    route:
      "/tools/audio/audio-enhancer",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-noise-remover",
    title: "AI Noise Remover",
    description:
      "Remove background noise from voice and audio recordings.",
    category: "Audio",
    subCategory: "Audio Editing",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 158000,
    thumbnail:
      "/tools/audio/noise-remover.webp",
    route:
      "/tools/audio/noise-remover",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-audio-cutter",
    title: "AI Audio Cutter",
    description:
      "Trim and organize audio clips quickly.",
    category: "Audio",
    subCategory: "Audio Editing",
    type: "Creative",
    badge: "Free",
    pricing: "Free",
    rating: 4.5,
    users: 69000,
    thumbnail:
      "/tools/audio/audio-cutter.webp",
    route:
      "/tools/audio/audio-cutter",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    verified: true,
    animated: true,
  },

  {
    id: "ai-audio-converter",
    title: "AI Audio Converter",
    description:
      "Convert supported audio files between common formats.",
    category: "Audio",
    subCategory: "Audio Editing",
    type: "Creative",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 93000,
    thumbnail:
      "/tools/audio/audio-converter.webp",
    route:
      "/tools/audio/audio-converter",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    verified: true,
    animated: true,
  },

  {
    id: "ai-audio-translator",
    title: "AI Audio Translator",
    description:
      "Translate spoken audio into supported languages.",
    category: "Audio",
    subCategory: "Translation",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 57000,
    thumbnail:
      "/tools/audio/audio-translator.webp",
    route:
      "/tools/audio/audio-translator",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Multilingual",
      "Upload",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Design tools
   --------------------------------------------------------- */

const DESIGN_TOOLS: Tool[] = [
  {
    id: "ai-ui-generator",
    title: "AI UI Generator",
    description:
      "Generate interface concepts and UI layouts from descriptions.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 99000,
    thumbnail:
      "/tools/design/ui-generator.webp",
    route:
      "/tools/design/ui-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Browser",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-poster-generator",
    title: "AI Poster Generator",
    description:
      "Create posters and promotional artwork from text prompts.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Free",
    rating: 4.7,
    users: 121000,
    thumbnail:
      "/tools/design/poster-generator.webp",
    route:
      "/tools/design/poster-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-banner-generator",
    title: "AI Banner Generator",
    description:
      "Generate banners for websites, ads and social campaigns.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 67000,
    thumbnail:
      "/tools/design/banner-generator.webp",
    route:
      "/tools/design/banner-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Batch",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-presentation-design",
    title: "AI Presentation Design",
    description:
      "Create polished presentation layouts and visual slides.",
    category: "Design",
    subCategory: "Presentation Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 89000,
    thumbnail:
      "/tools/design/presentation-design.webp",
    route:
      "/tools/design/presentation-design",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Upload",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-thumbnail-generator",
    title: "AI Thumbnail Generator",
    description:
      "Create attention-grabbing thumbnails for videos and content.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Creative",
    badge: "Popular",
    pricing: "Free",
    rating: 4.8,
    users: 146000,
    thumbnail:
      "/tools/design/thumbnail-generator.webp",
    route:
      "/tools/design/thumbnail-generator",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-brand-kit",
    title: "AI Brand Kit",
    description:
      "Generate a consistent visual identity for a brand.",
    category: "Design",
    subCategory: "Graphic Design",
    type: "Business",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 52000,
    thumbnail:
      "/tools/design/brand-kit.webp",
    route:
      "/tools/design/brand-kit",
    provider: "Market AI",
    features: [
      "Text to Image",
      "Download",
      "Batch",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Data tools
   --------------------------------------------------------- */

const DATA_TOOLS: Tool[] = [
  {
    id: "ai-data-analyzer",
    title: "AI Data Analyzer",
    description:
      "Analyze uploaded datasets and discover useful patterns.",
    category: "Data",
    subCategory: "Analytics",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 114000,
    thumbnail:
      "/tools/data/data-analyzer.webp",
    route:
      "/tools/data/data-analyzer",
    provider: "Market AI",
    features: [
      "Upload",
      "Batch",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-chart-generator",
    title: "AI Chart Generator",
    description:
      "Turn structured data into useful visual charts.",
    category: "Data",
    subCategory: "Analytics",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.7,
    users: 88000,
    thumbnail:
      "/tools/data/chart-generator.webp",
    route:
      "/tools/data/chart-generator",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-dashboard-builder",
    title: "AI Dashboard Builder",
    description:
      "Create dashboard layouts from data and business requirements.",
    category: "Data",
    subCategory: "Business Intelligence",
    type: "Business",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 61000,
    thumbnail:
      "/tools/data/dashboard-builder.webp",
    route:
      "/tools/data/dashboard-builder",
    provider: "Market AI",
    features: [
      "Upload",
      "Browser",
      "API",
      "Download",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-csv-analyzer",
    title: "AI CSV Analyzer",
    description:
      "Upload CSV files and ask questions about the data.",
    category: "Data",
    subCategory: "Analytics",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 105000,
    thumbnail:
      "/tools/data/csv-analyzer.webp",
    route:
      "/tools/data/csv-analyzer",
    provider: "Market AI",
    features: [
      "Upload",
      "Batch",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-excel-assistant",
    title: "AI Excel Assistant",
    description:
      "Generate formulas and analyze spreadsheet data with AI.",
    category: "Data",
    subCategory: "Analytics",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 139000,
    thumbnail:
      "/tools/data/excel-assistant.webp",
    route:
      "/tools/data/excel-assistant",
    provider: "Market AI",
    features: [
      "Upload",
      "Download",
      "Batch",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-data-cleaner",
    title: "AI Data Cleaner",
    description:
      "Find duplicate, incomplete and inconsistent data records.",
    category: "Data",
    subCategory: "Analytics",
    type: "AI",
    badge: "New",
    pricing: "Pro",
    rating: 4.6,
    users: 48000,
    thumbnail:
      "/tools/data/data-cleaner.webp",
    route:
      "/tools/data/data-cleaner",
    provider: "Market AI",
    features: [
      "Upload",
      "Batch",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Combine Part 07 collections
   --------------------------------------------------------- */

const AUDIO_DESIGN_DATA_TOOLS =
  mergeToolCollections(
    AUDIO_TOOLS,
    DESIGN_TOOLS,
    DATA_TOOLS
  );

/* ---------------------------------------------------------
   Merge into marketplace
   --------------------------------------------------------- */

export const MEDIA_DATASET_TOOLS =
  mergeToolCollections(
    FULL_MARKETPLACE_TOOLS,
    AUDIO_DESIGN_DATA_TOOLS
  );

/* ---------------------------------------------------------
   Category getters
   --------------------------------------------------------- */

function getAudioTools(): Tool[] {
  return MEDIA_DATASET_TOOLS.filter(
    (tool) =>
      tool.category === "Audio"
  );
}

function getMediaDesignTools(): Tool[] {
  return MEDIA_DATASET_TOOLS.filter(
    (tool) =>
      tool.category === "Design"
  );
}

function getAnalyticsTools(): Tool[] {
  return MEDIA_DATASET_TOOLS.filter(
    (tool) =>
      tool.category === "Data"
  );
}

/* ---------------------------------------------------------
   Counts
   --------------------------------------------------------- */

export const AUDIO_TOOL_COUNT =
  getAudioTools().length;

export const MEDIA_DESIGN_TOOL_COUNT =
  getMediaDesignTools().length;

export const ANALYTICS_TOOL_COUNT =
  getAnalyticsTools().length;

/* ---------------------------------------------------------
   Dataset count after Part 07
   --------------------------------------------------------- */

export const MEDIA_DATASET_COUNT =
  MEDIA_DATASET_TOOLS.length;

/* ---------------------------------------------------------
   Dataset readiness
   --------------------------------------------------------- */

export const MEDIA_DATASET_READY =
  MEDIA_DATASET_TOOLS.every(
    validateToolRecord
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 08/20
   Automation + Additional Utility Tools
   ========================================================= */

/* ---------------------------------------------------------
   Automation tools
   --------------------------------------------------------- */

const AUTOMATION_TOOLS: Tool[] = [
  {
    id: "ai-workflow-builder",
    title: "AI Workflow Builder",
    description:
      "Create automated workflows from plain-language instructions.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 118000,
    thumbnail:
      "/tools/automation/workflow-builder.webp",
    route:
      "/tools/automation/workflow-builder",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
      "Realtime",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-task-automation",
    title: "AI Task Automation",
    description:
      "Automate repetitive tasks with intelligent workflows.",
    category: "Automation",
    subCategory: "Automation",
    type: "Automation",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 96000,
    thumbnail:
      "/tools/automation/task-automation.webp",
    route:
      "/tools/automation/task-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-email-automation",
    title: "AI Email Automation",
    description:
      "Automate email drafting, classification and repetitive workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Automation",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.6,
    users: 73000,
    thumbnail:
      "/tools/automation/email-automation.webp",
    route:
      "/tools/automation/email-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Multilingual",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-document-automation",
    title: "AI Document Automation",
    description:
      "Process documents and extract information automatically.",
    category: "Automation",
    subCategory: "Document",
    type: "Automation",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 58000,
    thumbnail:
      "/tools/automation/document-automation.webp",
    route:
      "/tools/automation/document-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-lead-automation",
    title: "AI Lead Automation",
    description:
      "Organize leads and automate repetitive sales workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Business",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.5,
    users: 47000,
    thumbnail:
      "/tools/automation/lead-automation.webp",
    route:
      "/tools/automation/lead-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-data-automation",
    title: "AI Data Automation",
    description:
      "Move, transform and process structured data automatically.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 51000,
    thumbnail:
      "/tools/automation/data-automation.webp",
    route:
      "/tools/automation/data-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Batch",
      "Database",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional music tools
   --------------------------------------------------------- */

const ADDITIONAL_MUSIC_TOOLS: Tool[] = [
  {
    id: "ai-chord-generator",
    title: "AI Chord Generator",
    description:
      "Generate chord progressions for original music.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "New",
    pricing: "Free",
    rating: 4.5,
    users: 43000,
    thumbnail:
      "/tools/music/chord-generator.webp",
    route:
      "/tools/music/chord-generator",
    provider: "Market AI",
    features: [
      "Music AI",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-instrument-generator",
    title: "AI Instrument Generator",
    description:
      "Generate original instrumental sounds and ideas.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.5,
    users: 39000,
    thumbnail:
      "/tools/music/instrument-generator.webp",
    route:
      "/tools/music/instrument-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-drums-generator",
    title: "AI Drums Generator",
    description:
      "Generate drum patterns and percussion ideas automatically.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.6,
    users: 52000,
    thumbnail:
      "/tools/music/drums-generator.webp",
    route:
      "/tools/music/drums-generator",
    provider: "Market AI",
    features: [
      "Music AI",
      "Download",
      "Batch",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-vocal-harmony",
    title: "AI Vocal Harmony",
    description:
      "Generate harmony ideas for existing vocal recordings.",
    category: "Music",
    subCategory: "Singing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 34000,
    thumbnail:
      "/tools/music/vocal-harmony.webp",
    route:
      "/tools/music/vocal-harmony",
    provider: "Market AI",
    features: [
      "Music AI",
      "Voice AI",
      "Upload",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional voice tools
   --------------------------------------------------------- */

const ADDITIONAL_VOICE_TOOLS: Tool[] = [
  {
    id: "ai-voice-isolator",
    title: "AI Voice Isolator",
    description:
      "Isolate spoken voice from background audio.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 74000,
    thumbnail:
      "/tools/voice/voice-isolator.webp",
    route:
      "/tools/voice/voice-isolator",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-speech-cleaner",
    title: "AI Speech Cleaner",
    description:
      "Clean spoken recordings and improve speech intelligibility.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 69000,
    thumbnail:
      "/tools/voice/speech-cleaner.webp",
    route:
      "/tools/voice/speech-cleaner",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-voice-summary",
    title: "AI Voice Summary",
    description:
      "Turn long spoken recordings into concise summaries.",
    category: "Voice",
    subCategory: "Transcription",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 47000,
    thumbnail:
      "/tools/voice/voice-summary.webp",
    route:
      "/tools/voice/voice-summary",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Download",
      "Multilingual",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional code tools
   --------------------------------------------------------- */

const ADDITIONAL_CODE_TOOLS: Tool[] = [
  {
    id: "ai-typescript-generator",
    title: "AI TypeScript Generator",
    description:
      "Generate TypeScript code, types and utilities from descriptions.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 64000,
    thumbnail:
      "/tools/code/typescript-generator.webp",
    route:
      "/tools/code/typescript-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Browser",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-python-generator",
    title: "AI Python Generator",
    description:
      "Generate Python scripts and utilities from natural language.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 143000,
    thumbnail:
      "/tools/code/python-generator.webp",
    route:
      "/tools/code/python-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Browser",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-api-documentation",
    title: "AI API Documentation",
    description:
      "Generate structured API documentation from code and schemas.",
    category: "Code",
    subCategory: "Backend",
    type: "Developer",
    badge: "AI",
    pricing: "Free",
    rating: 4.5,
    users: 37000,
    thumbnail:
      "/tools/code/api-documentation.webp",
    route:
      "/tools/code/api-documentation",
    provider: "Market AI",
    features: [
      "Code AI",
      "API",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-regex-generator",
    title: "AI Regex Generator",
    description:
      "Generate regular expressions from plain-language requirements.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 72000,
    thumbnail:
      "/tools/code/regex-generator.webp",
    route:
      "/tools/code/regex-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Merge Part 08 collections
   --------------------------------------------------------- */

const AUTOMATION_EXPANSION_TOOLS =
  mergeToolCollections(
    AUTOMATION_TOOLS,
    ADDITIONAL_MUSIC_TOOLS,
    ADDITIONAL_VOICE_TOOLS,
    ADDITIONAL_CODE_TOOLS
  );

/* ---------------------------------------------------------
   Merge into marketplace
   --------------------------------------------------------- */

export const AUTOMATION_MARKETPLACE_TOOLS =
  mergeToolCollections(
    MEDIA_DATASET_TOOLS,
    AUTOMATION_EXPANSION_TOOLS
  );

/* ---------------------------------------------------------
   Category getters
   --------------------------------------------------------- */

function getAutomationTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      "Automation"
  );
}

function getMusicTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Music"
  );
}

function getVoiceTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Voice"
  );
}

/* ---------------------------------------------------------
   Counts
   --------------------------------------------------------- */

export const AUTOMATION_TOOL_COUNT =
  getAutomationTools().length;

export const MUSIC_TOOL_COUNT =
  getMusicTools().length;

export const VOICE_TOOL_COUNT =
  getVoiceTools().length;

/* ---------------------------------------------------------
   Marketplace dataset after Part 08
   --------------------------------------------------------- */

export const PART_08_TOOL_COUNT =
  AUTOMATION_MARKETPLACE_TOOLS.length;

/* ---------------------------------------------------------
   Validation
   --------------------------------------------------------- */

export const PART_08_DATASET_READY =
  AUTOMATION_MARKETPLACE_TOOLS.every(
    validateToolRecord
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 08/20
   Automation + Additional Utility Tools
   ========================================================= */

/* ---------------------------------------------------------
   Automation tools
   --------------------------------------------------------- */

const AUTOMATION_TOOLS: Tool[] = [
  {
    id: "ai-workflow-builder",
    title: "AI Workflow Builder",
    description:
      "Create automated workflows from plain-language instructions.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 118000,
    thumbnail:
      "/tools/automation/workflow-builder.webp",
    route:
      "/tools/automation/workflow-builder",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
      "Realtime",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-task-automation",
    title: "AI Task Automation",
    description:
      "Automate repetitive tasks with intelligent workflows.",
    category: "Automation",
    subCategory: "Automation",
    type: "Automation",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.7,
    users: 96000,
    thumbnail:
      "/tools/automation/task-automation.webp",
    route:
      "/tools/automation/task-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-email-automation",
    title: "AI Email Automation",
    description:
      "Automate email drafting, classification and repetitive workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Automation",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.6,
    users: 73000,
    thumbnail:
      "/tools/automation/email-automation.webp",
    route:
      "/tools/automation/email-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Multilingual",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-document-automation",
    title: "AI Document Automation",
    description:
      "Process documents and extract information automatically.",
    category: "Automation",
    subCategory: "Document",
    type: "Automation",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.7,
    users: 58000,
    thumbnail:
      "/tools/automation/document-automation.webp",
    route:
      "/tools/automation/document-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-lead-automation",
    title: "AI Lead Automation",
    description:
      "Organize leads and automate repetitive sales workflows.",
    category: "Automation",
    subCategory: "Marketing Automation",
    type: "Business",
    badge: "Popular",
    pricing: "Pro",
    rating: 4.5,
    users: 47000,
    thumbnail:
      "/tools/automation/lead-automation.webp",
    route:
      "/tools/automation/lead-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Browser",
    ],
    featured: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-data-automation",
    title: "AI Data Automation",
    description:
      "Move, transform and process structured data automatically.",
    category: "Automation",
    subCategory: "Workflow",
    type: "Automation",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 51000,
    thumbnail:
      "/tools/automation/data-automation.webp",
    route:
      "/tools/automation/data-automation",
    provider: "Market AI",
    features: [
      "Workflow",
      "API",
      "Batch",
      "Database",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional music tools
   --------------------------------------------------------- */

const ADDITIONAL_MUSIC_TOOLS: Tool[] = [
  {
    id: "ai-chord-generator",
    title: "AI Chord Generator",
    description:
      "Generate chord progressions for original music.",
    category: "Music",
    subCategory: "Music Production",
    type: "Creative",
    badge: "New",
    pricing: "Free",
    rating: 4.5,
    users: 43000,
    thumbnail:
      "/tools/music/chord-generator.webp",
    route:
      "/tools/music/chord-generator",
    provider: "Market AI",
    features: [
      "Music AI",
      "Download",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-instrument-generator",
    title: "AI Instrument Generator",
    description:
      "Generate original instrumental sounds and ideas.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "AI",
    pricing: "Freemium",
    rating: 4.5,
    users: 39000,
    thumbnail:
      "/tools/music/instrument-generator.webp",
    route:
      "/tools/music/instrument-generator",
    provider: "Market AI",
    features: [
      "Text to Audio",
      "Music AI",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-drums-generator",
    title: "AI Drums Generator",
    description:
      "Generate drum patterns and percussion ideas automatically.",
    category: "Music",
    subCategory: "Music Production",
    type: "AI",
    badge: "Popular",
    pricing: "Free",
    rating: 4.6,
    users: 52000,
    thumbnail:
      "/tools/music/drums-generator.webp",
    route:
      "/tools/music/drums-generator",
    provider: "Market AI",
    features: [
      "Music AI",
      "Download",
      "Batch",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-vocal-harmony",
    title: "AI Vocal Harmony",
    description:
      "Generate harmony ideas for existing vocal recordings.",
    category: "Music",
    subCategory: "Singing",
    type: "AI",
    badge: "Pro",
    pricing: "Pro",
    rating: 4.6,
    users: 34000,
    thumbnail:
      "/tools/music/vocal-harmony.webp",
    route:
      "/tools/music/vocal-harmony",
    provider: "Market AI",
    features: [
      "Music AI",
      "Voice AI",
      "Upload",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional voice tools
   --------------------------------------------------------- */

const ADDITIONAL_VOICE_TOOLS: Tool[] = [
  {
    id: "ai-voice-isolator",
    title: "AI Voice Isolator",
    description:
      "Isolate spoken voice from background audio.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.7,
    users: 74000,
    thumbnail:
      "/tools/voice/voice-isolator.webp",
    route:
      "/tools/voice/voice-isolator",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
    ],
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-speech-cleaner",
    title: "AI Speech Cleaner",
    description:
      "Clean spoken recordings and improve speech intelligibility.",
    category: "Voice",
    subCategory: "Voice",
    type: "AI",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 69000,
    thumbnail:
      "/tools/voice/speech-cleaner.webp",
    route:
      "/tools/voice/speech-cleaner",
    provider: "Market AI",
    features: [
      "Voice AI",
      "Upload",
      "Download",
      "Batch",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-voice-summary",
    title: "AI Voice Summary",
    description:
      "Turn long spoken recordings into concise summaries.",
    category: "Voice",
    subCategory: "Transcription",
    type: "AI",
    badge: "New",
    pricing: "Freemium",
    rating: 4.6,
    users: 47000,
    thumbnail:
      "/tools/voice/voice-summary.webp",
    route:
      "/tools/voice/voice-summary",
    provider: "Market AI",
    features: [
      "Audio to Text",
      "Download",
      "Multilingual",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Additional code tools
   --------------------------------------------------------- */

const ADDITIONAL_CODE_TOOLS: Tool[] = [
  {
    id: "ai-typescript-generator",
    title: "AI TypeScript Generator",
    description:
      "Generate TypeScript code, types and utilities from descriptions.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "New",
    pricing: "Freemium",
    rating: 4.7,
    users: 64000,
    thumbnail:
      "/tools/code/typescript-generator.webp",
    route:
      "/tools/code/typescript-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Browser",
    ],
    isNew: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-python-generator",
    title: "AI Python Generator",
    description:
      "Generate Python scripts and utilities from natural language.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Popular",
    pricing: "Freemium",
    rating: 4.8,
    users: 143000,
    thumbnail:
      "/tools/code/python-generator.webp",
    route:
      "/tools/code/python-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
      "Browser",
      "Download",
    ],
    featured: true,
    trending: true,
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-api-documentation",
    title: "AI API Documentation",
    description:
      "Generate structured API documentation from code and schemas.",
    category: "Code",
    subCategory: "Backend",
    type: "Developer",
    badge: "AI",
    pricing: "Free",
    rating: 4.5,
    users: 37000,
    thumbnail:
      "/tools/code/api-documentation.webp",
    route:
      "/tools/code/api-documentation",
    provider: "Market AI",
    features: [
      "Code AI",
      "API",
      "Download",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },

  {
    id: "ai-regex-generator",
    title: "AI Regex Generator",
    description:
      "Generate regular expressions from plain-language requirements.",
    category: "Code",
    subCategory: "Developer",
    type: "Developer",
    badge: "Free",
    pricing: "Free",
    rating: 4.6,
    users: 72000,
    thumbnail:
      "/tools/code/regex-generator.webp",
    route:
      "/tools/code/regex-generator",
    provider: "Market AI",
    features: [
      "Text to Code",
      "Code AI",
    ],
    aiPowered: true,
    verified: true,
    animated: true,
  },
];

/* ---------------------------------------------------------
   Merge Part 08 collections
   --------------------------------------------------------- */

const AUTOMATION_EXPANSION_TOOLS =
  mergeToolCollections(
    AUTOMATION_TOOLS,
    ADDITIONAL_MUSIC_TOOLS,
    ADDITIONAL_VOICE_TOOLS,
    ADDITIONAL_CODE_TOOLS
  );

/* ---------------------------------------------------------
   Merge into marketplace
   --------------------------------------------------------- */

export const AUTOMATION_MARKETPLACE_TOOLS =
  mergeToolCollections(
    MEDIA_DATASET_TOOLS,
    AUTOMATION_EXPANSION_TOOLS
  );

/* ---------------------------------------------------------
   Category getters
   --------------------------------------------------------- */

function getAutomationTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      "Automation"
  );
}

function getMusicTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Music"
  );
}

function getVoiceTools(): Tool[] {
  return AUTOMATION_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category === "Voice"
  );
}

/* ---------------------------------------------------------
   Counts
   --------------------------------------------------------- */

export const AUTOMATION_TOOL_COUNT =
  getAutomationTools().length;

export const MUSIC_TOOL_COUNT =
  getMusicTools().length;

export const VOICE_TOOL_COUNT =
  getVoiceTools().length;

/* ---------------------------------------------------------
   Marketplace dataset after Part 08
   --------------------------------------------------------- */

export const PART_08_TOOL_COUNT =
  AUTOMATION_MARKETPLACE_TOOLS.length;

/* ---------------------------------------------------------
   Validation
   --------------------------------------------------------- */

export const PART_08_DATASET_READY =
  AUTOMATION_MARKETPLACE_TOOLS.every(
    validateToolRecord
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 10/20
   Advanced Filtering + Sorting Engine
   ========================================================= */

/* ---------------------------------------------------------
   Filter tools
   --------------------------------------------------------- */

function filterMarketplaceTools(
  tools: Tool[],
  filters: ToolsFilterState
): Tool[] {
  let result = [
    ...tools,
  ];

  if (
    filters.category !==
    "All"
  ) {
    result =
      result.filter(
        (tool) =>
          tool.category ===
          filters.category
      );
  }

  if (
    filters.subCategory !==
    "All"
  ) {
    result =
      result.filter(
        (tool) =>
          tool.subCategory ===
          filters.subCategory
      );
  }

  if (
    filters.pricing !==
    "All Pricing"
  ) {
    result =
      result.filter(
        (tool) =>
          tool.pricing ===
          filters.pricing
      );
  }

  if (
    filters.type !==
    "All Types"
  ) {
    result =
      result.filter(
        (tool) =>
          tool.type ===
          filters.type
      );
  }

  if (
    filters.feature !==
    "All Features"
  ) {
    result =
      result.filter(
        (tool) =>
          tool.features.includes(
            filters.feature
          )
      );
  }

  if (
    filters.provider !==
    "All Providers"
  ) {
    const provider =
      normalizeToolText(
        filters.provider
      );

    result =
      result.filter(
        (tool) =>
          normalizeToolText(
            tool.provider
          ) === provider
      );
  }

  return result;
}

/* ---------------------------------------------------------
   Sort tools
   --------------------------------------------------------- */

function sortMarketplaceTools(
  tools: Tool[],
  sort: ToolsSortMode,
  query = ""
): Tool[] {
  const result = [
    ...tools,
  ];

  switch (sort) {
    case "Popular":
      return result.sort(
        (a, b) =>
          b.users -
          a.users
      );

    case "Newest":
      return result.sort(
        (a, b) => {
          const aNew =
            a.isNew ? 1 : 0;

          const bNew =
            b.isNew ? 1 : 0;

          return (
            bNew -
            aNew
          );
        }
      );

    case "Highest Rated":
      return result.sort(
        (a, b) =>
          b.rating -
          a.rating
      );

    case "Most Used":
      return result.sort(
        (a, b) =>
          b.users -
          a.users
      );

    case "Recommended":
    default:
      if (
        query.trim()
      ) {
        return rankToolSearchResults(
          result,
          query
        );
      }

      return result.sort(
        (a, b) => {
          const aScore =
            (a.featured
              ? 35
              : 0) +
            (a.trending
              ? 20
              : 0) +
            (a.isNew
              ? 10
              : 0) +
            (a.verified
              ? 8
              : 0) +
            (a.aiPowered
              ? 5
              : 0) +
            a.rating * 7 +
            Math.log10(
              Math.max(
                1,
                a.users
              )
            );

          const bScore =
            (b.featured
              ? 35
              : 0) +
            (b.trending
              ? 20
              : 0) +
            (b.isNew
              ? 10
              : 0) +
            (b.verified
              ? 8
              : 0) +
            (b.aiPowered
              ? 5
              : 0) +
            b.rating * 7 +
            Math.log10(
              Math.max(
                1,
                b.users
              )
            );

          return (
            bScore -
            aScore
          );
        }
      );
  }
}

/* ---------------------------------------------------------
   Search + filter + sort
   --------------------------------------------------------- */

function buildMarketplaceResults(
  options: {
    query?: string;

    filters?: ToolsFilterState;

    sort?: ToolsSortMode;
  } = {}
): Tool[] {
  const query =
    options.query ?? "";

  const filters =
    options.filters ?? {
      category: "All",
      subCategory: "All",
      pricing:
        "All Pricing",
      type: "All Types",
      feature:
        "All Features",
      provider:
        "All Providers",
    };

  const sort =
    options.sort ??
    "Recommended";

  let result =
    filterMarketplaceTools(
      VALID_MARKETPLACE_TOOLS,
      filters
    );

  if (
    query.trim()
  ) {
    result =
      searchTools(
        result,
        query
      );
  }

  return sortMarketplaceTools(
    result,
    sort,
    query
  );
}

/* ---------------------------------------------------------
   Category counts
   --------------------------------------------------------- */

function getCategoryToolCount(
  category: ToolCategory
): number {
  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.category ===
      category
  ).length;
}

/* ---------------------------------------------------------
   Sub-category counts
   --------------------------------------------------------- */

function getSubCategoryToolCount(
  subCategory: ToolSubCategory
): number {
  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.subCategory ===
      subCategory
  ).length;
}

/* ---------------------------------------------------------
   Pricing counts
   --------------------------------------------------------- */

function getPricingToolCount(
  pricing: ToolPricing
): number {
  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.pricing ===
      pricing
  ).length;
}

/* ---------------------------------------------------------
   Type counts
   --------------------------------------------------------- */

function getTypeToolCount(
  type: ToolType
): number {
  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.type ===
      type
  ).length;
}

/* ---------------------------------------------------------
   Feature counts
   --------------------------------------------------------- */

function getFeatureToolCount(
  feature: ToolFeature
): number {
  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      tool.features.includes(
        feature
      )
  ).length;
}

/* ---------------------------------------------------------
   Provider counts
   --------------------------------------------------------- */

function getProviderToolCount(
  provider: string
): number {
  const normalizedProvider =
    normalizeToolText(
      provider
    );

  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      normalizeToolText(
        tool.provider
      ) ===
      normalizedProvider
  ).length;
}

/* ---------------------------------------------------------
   Dynamic category information
   --------------------------------------------------------- */

const CATEGORY_ICONS: Record<
  ToolCategory,
  React.ElementType
> = {
  Music: Music2,
  Voice: Mic2,
  Video: Video,
  Image: ImageIcon,
  Code: Code2,
  Business: BarChart3,
  Marketing: TrendingUp,
  Education: Brain,
  Productivity: Zap,
  Research: Search,
  Audio: Mic2,
  Design: Wand2,
  Data: Database,
  Automation: Bot,
};

/* ---------------------------------------------------------
   Category descriptions
   --------------------------------------------------------- */

const CATEGORY_DESCRIPTIONS: Record<
  ToolCategory,
  string
> = {
  Music:
    "Create songs, beats, melodies and complete music with AI.",

  Voice:
    "Generate, transform, clone and analyze voices.",

  Video:
    "Create, edit, translate and enhance videos.",

  Image:
    "Generate and edit images using powerful AI tools.",

  Code:
    "Build applications, APIs and software faster.",

  Business:
    "AI tools for business operations, support and growth.",

  Marketing:
    "Create content, campaigns, SEO and marketing workflows.",

  Education:
    "Learn, teach, study and create educational material.",

  Productivity:
    "Save time with AI-powered everyday productivity tools.",

  Research:
    "Research, analyze and organize information efficiently.",

  Audio:
    "Clean, edit, transform and process audio.",

  Design:
    "Create visual assets, branding and presentation designs.",

  Data:
    "Analyze, transform and visualize structured data.",

  Automation:
    "Automate repetitive workflows and business processes.",
};

/* ---------------------------------------------------------
   Category gradients
   --------------------------------------------------------- */

const CATEGORY_GRADIENTS: Record<
  ToolCategory,
  string
> = {
  Music:
    "from-violet-600/30 to-fuchsia-500/20",

  Voice:
    "from-cyan-600/30 to-blue-500/20",

  Video:
    "from-red-600/30 to-orange-500/20",

  Image:
    "from-pink-600/30 to-purple-500/20",

  Code:
    "from-emerald-600/30 to-cyan-500/20",

  Business:
    "from-blue-600/30 to-indigo-500/20",

  Marketing:
    "from-orange-600/30 to-yellow-500/20",

  Education:
    "from-green-600/30 to-teal-500/20",

  Productivity:
    "from-sky-600/30 to-blue-500/20",

  Research:
    "from-indigo-600/30 to-violet-500/20",

  Audio:
    "from-purple-600/30 to-blue-500/20",

  Design:
    "from-fuchsia-600/30 to-pink-500/20",

  Data:
    "from-teal-600/30 to-emerald-500/20",

  Automation:
    "from-amber-600/30 to-orange-500/20",
};

/* ---------------------------------------------------------
   Build category metadata
   --------------------------------------------------------- */

function buildCategoryInfo(): ToolCategoryInfo[] {
  return TOOL_CATEGORIES
    .filter(
      (
        category
      ): category is ToolCategory =>
        category !== "All"
    )
    .map(
      (category) => ({
        id: category,

        title: category,

        description:
          CATEGORY_DESCRIPTIONS[
            category
          ],

        icon:
          CATEGORY_ICONS[
            category
          ],

        gradient:
          CATEGORY_GRADIENTS[
            category
          ],

        count:
          getCategoryToolCount(
            category
          ),
      })
    );
}

/* ---------------------------------------------------------
   Category metadata
   --------------------------------------------------------- */

export const MARKETPLACE_CATEGORY_INFO =
  buildCategoryInfo();

/* ---------------------------------------------------------
   Active filter count
   --------------------------------------------------------- */

function countActiveFilters(
  filters: ToolsFilterState
): number {
  let count = 0;

  if (
    filters.category !==
    "All"
  ) {
    count++;
  }

  if (
    filters.subCategory !==
    "All"
  ) {
    count++;
  }

  if (
    filters.pricing !==
    "All Pricing"
  ) {
    count++;
  }

  if (
    filters.type !==
    "All Types"
  ) {
    count++;
  }

  if (
    filters.feature !==
    "All Features"
  ) {
    count++;
  }

  if (
    filters.provider !==
    "All Providers"
  ) {
    count++;
  }

  return count;
}

/* ---------------------------------------------------------
   Default filters
   --------------------------------------------------------- */

function createDefaultToolFilters(): ToolsFilterState {
  return {
    category: "All",

    subCategory:
      "All",

    pricing:
      "All Pricing",

    type:
      "All Types",

    feature:
      "All Features",

    provider:
      "All Providers",
  };
}

/* ---------------------------------------------------------
   Default search state
   --------------------------------------------------------- */

function createDefaultSearchState(): ToolsSearchState {
  return {
    query: "",

    page: 1,

    perPage:
      TOOLS_PER_PAGE_GRID,

    sort:
      "Recommended",
  };
}

/* ---------------------------------------------------------
   Reset filters
   --------------------------------------------------------- */

function resetToolFilters(): ToolsFilterState {
  return createDefaultToolFilters();
}

/* ---------------------------------------------------------
   Reset search
   --------------------------------------------------------- */

function resetToolSearch(): ToolsSearchState {
  return createDefaultSearchState();
}
/* =========================================================
   TOOLS MARKETPLACE
   Part 11/20
   Tabs + Pagination + Favorites + Local Storage
   ========================================================= */

/* ---------------------------------------------------------
   Favorites storage
   --------------------------------------------------------- */

function loadFavoriteToolIds(): string[] {
  if (
    typeof window ===
    "undefined"
  ) {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        TOOLS_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed =
      JSON.parse(
        stored
      );

    if (
      !Array.isArray(
        parsed
      )
    ) {
      return [];
    }

    return parsed.filter(
      (id): id is string =>
        typeof id ===
        "string"
    );
  } catch {
    return [];
  }
}

/* ---------------------------------------------------------
   Save favorites
   --------------------------------------------------------- */

function saveFavoriteToolIds(
  ids: string[]
): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.setItem(
      TOOLS_STORAGE_KEY,
      JSON.stringify(
        Array.from(
          new Set(ids)
        )
      )
    );
  } catch {
    // Storage may be unavailable.
  }
}

/* ---------------------------------------------------------
   Check favorite
   --------------------------------------------------------- */

function isToolFavorite(
  id: string,
  favorites: string[]
): boolean {
  return favorites.includes(
    id
  );
}

/* ---------------------------------------------------------
   Toggle favorite
   --------------------------------------------------------- */

function toggleToolFavorite(
  id: string,
  favorites: string[]
): string[] {
  if (
    favorites.includes(id)
  ) {
    return favorites.filter(
      (favoriteId) =>
        favoriteId !== id
    );
  }

  return [
    ...favorites,
    id,
  ];
}

/* ---------------------------------------------------------
   Get favorite tools
   --------------------------------------------------------- */

function getFavoriteTools(
  favoriteIds: string[]
): Tool[] {
  if (
    !favoriteIds.length
  ) {
    return [];
  }

  const favoriteSet =
    new Set(
      favoriteIds
    );

  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      favoriteSet.has(
        tool.id
      )
  );
}

/* ---------------------------------------------------------
   Favorite count
   --------------------------------------------------------- */

function getFavoriteToolCount(
  favoriteIds: string[]
): number {
  return favoriteIds.length;
}

/* ---------------------------------------------------------
   Tab filtering
   --------------------------------------------------------- */

function applyToolsTab(
  tools: Tool[],
  tab: ToolsTab,
  favoriteIds: string[]
): Tool[] {
  switch (tab) {
    case "trending":
      return tools.filter(
        (tool) =>
          tool.trending
      );

    case "new":
      return tools.filter(
        (tool) =>
          tool.isNew
      );

    case "favorites": {
      const favoriteSet =
        new Set(
          favoriteIds
        );

      return tools.filter(
        (tool) =>
          favoriteSet.has(
            tool.id
          )
      );
    }

    case "free":
      return tools.filter(
        (tool) =>
          tool.pricing ===
            "Free" ||
          tool.pricing ===
            "Freemium"
      );

    case "pro":
      return tools.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      );

    case "all":
    default:
      return [
        ...tools,
      ];
  }
}

/* ---------------------------------------------------------
   Tab labels
   --------------------------------------------------------- */

const TOOL_TAB_LABELS: Record<
  ToolsTab,
  string
> = {
  all: "All Tools",
  trending: "Trending",
  new: "New",
  favorites: "Favorites",
  free: "Free",
  pro: "Pro",
};

/* ---------------------------------------------------------
   Tab icons
   --------------------------------------------------------- */

const TOOL_TAB_ICONS: Record<
  ToolsTab,
  React.ElementType
> = {
  all: Grid3X3,
  trending: Flame,
  new: Sparkles,
  favorites: Heart,
  free: Check,
  pro: Crown,
};

/* ---------------------------------------------------------
   Tab counts
   --------------------------------------------------------- */

function getToolsTabCount(
  tab: ToolsTab,
  favoriteIds: string[]
): number {
  switch (tab) {
    case "trending":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.trending
      ).length;

    case "new":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.isNew
      ).length;

    case "favorites":
      return favoriteIds.length;

    case "free":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
            "Free" ||
          tool.pricing ===
            "Freemium"
      ).length;

    case "pro":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      ).length;

    case "all":
    default:
      return VALID_MARKETPLACE_TOOLS.length;
  }
}

/* ---------------------------------------------------------
   Pagination information
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Build pagination
   --------------------------------------------------------- */

function buildPagination(
  totalItems: number,
  page: number,
  perPage: number
): PaginationInfo {
  const safePerPage =
    Math.max(
      1,
      perPage
    );

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalItems /
          safePerPage
      )
    );

  const safePage =
    Math.min(
      Math.max(
        1,
        page
      ),
      totalPages
    );

  const startIndex =
    (safePage - 1) *
    safePerPage;

  const endIndex =
    Math.min(
      startIndex +
        safePerPage,
      totalItems
    );

  return {
    page:
      safePage,

    perPage:
      safePerPage,

    totalItems,

    totalPages,

    startIndex,

    endIndex,

    hasPrevious:
      safePage > 1,

    hasNext:
      safePage <
      totalPages,
  };
}

/* ---------------------------------------------------------
   Paginate tools
   --------------------------------------------------------- */

function paginateTools(
  tools: Tool[],
  page: number,
  perPage: number
): Tool[] {
  const pagination =
    buildPagination(
      tools.length,
      page,
      perPage
    );

  return tools.slice(
    pagination.startIndex,
    pagination.endIndex
  );
}

/* ---------------------------------------------------------
   Page number list
   --------------------------------------------------------- */

function buildPageNumbers(
  currentPage: number,
  totalPages: number
): Array<
  number | "ellipsis"
> {
  if (
    totalPages <= 7
  ) {
    return Array.from(
      {
        length:
          totalPages,
      },
      (_, index) =>
        index + 1
    );
  }

  const pages: Array<
    number | "ellipsis"
  > = [];

  pages.push(1);

  if (
    currentPage > 4
  ) {
    pages.push(
      "ellipsis"
    );
  }

  const start =
    Math.max(
      2,
      currentPage - 1
    );

  const end =
    Math.min(
      totalPages - 1,
      currentPage + 1
    );

  for (
    let page = start;
    page <= end;
    page++
  ) {
    pages.push(page);
  }

  if (
    currentPage <
    totalPages - 3
  ) {
    pages.push(
      "ellipsis"
    );
  }

  pages.push(
    totalPages
  );

  return pages;
}

/* ---------------------------------------------------------
   Clamp page
   --------------------------------------------------------- */

function clampToolsPage(
  page: number,
  totalPages: number
): number {
  return Math.min(
    Math.max(
      1,
      page
    ),
    Math.max(
      1,
      totalPages
    )
  );
}

/* ---------------------------------------------------------
   Result range text
   --------------------------------------------------------- */

function getResultRangeText(
  pagination: PaginationInfo
): string {
  if (
    pagination.totalItems ===
    0
  ) {
    return "0 results";
  }

  return `${pagination.startIndex + 1}-${pagination.endIndex} of ${pagination.totalItems}`;
}

/* ---------------------------------------------------------
   Tool statistics
   --------------------------------------------------------- */

function calculateToolStatistics(): ToolsStatistics {
  const total =
    VALID_MARKETPLACE_TOOLS.length;

  return {
    total,

    categories:
      new Set(
        VALID_MARKETPLACE_TOOLS.map(
          (tool) =>
            tool.category
        )
      ).size,

    subCategories:
      new Set(
        VALID_MARKETPLACE_TOOLS.map(
          (tool) =>
            tool.subCategory
        )
      ).size,

    free:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Free"
      ).length,

    freemium:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Freemium"
      ).length,

    pro:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      ).length,

    enterprise:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Enterprise"
      ).length,

    featured:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.featured
      ).length,

    trending:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.trending
      ).length,

    newTools:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.isNew
      ).length,

    verified:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.verified
      ).length,

    aiPowered:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.aiPowered
      ).length,
  };
}

/* ---------------------------------------------------------
   Marketplace statistics
   --------------------------------------------------------- */

export const MARKETPLACE_STATISTICS =
  calculateToolStatistics();

/* ---------------------------------------------------------
   Total users
   --------------------------------------------------------- */

function calculateTotalToolUsers(): number {
  return VALID_MARKETPLACE_TOOLS.reduce(
    (
      total,
      tool
    ) =>
      total +
      tool.users,
    0
  );
}

/* ---------------------------------------------------------
   Average rating
   --------------------------------------------------------- */

function calculateAverageToolRating(): number {
  if (
    !VALID_MARKETPLACE_TOOLS.length
  ) {
    return 0;
  }

  const total =
    VALID_MARKETPLACE_TOOLS.reduce(
      (
        sum,
        tool
      ) =>
        sum +
        tool.rating,
      0
    );

  return (
    Math.round(
      (total /
        VALID_MARKETPLACE_TOOLS.length) *
        10
    ) / 10
  );
}

/* ---------------------------------------------------------
   Public marketplace metrics
   --------------------------------------------------------- */

export const MARKETPLACE_TOTAL_USERS =
  calculateTotalToolUsers();

export const MARKETPLACE_AVERAGE_RATING =
  calculateAverageToolRating();

/* ---------------------------------------------------------
   Current dataset status
   --------------------------------------------------------- */

export const MARKETPLACE_DATASET_STATUS =
  {
    ready:
      VALID_MARKETPLACE_TOOLS.length >
      0,

    toolCount:
      VALID_MARKETPLACE_TOOLS.length,

    categoryCount:
      MARKETPLACE_STATISTICS.categories,

    subCategoryCount:
      MARKETPLACE_STATISTICS.subCategories,

    providerCount:
      MARKETPLACE_PROVIDERS.length,

    averageRating:
      MARKETPLACE_AVERAGE_RATING,

    totalUsers:
      MARKETPLACE_TOTAL_USERS,
  };
/* =========================================================
   TOOLS MARKETPLACE
   Part 11/20
   Tabs + Pagination + Favorites + Local Storage
   ========================================================= */

/* ---------------------------------------------------------
   Favorites storage
   --------------------------------------------------------- */

function loadFavoriteToolIds(): string[] {
  if (
    typeof window ===
    "undefined"
  ) {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        TOOLS_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed =
      JSON.parse(
        stored
      );

    if (
      !Array.isArray(
        parsed
      )
    ) {
      return [];
    }

    return parsed.filter(
      (id): id is string =>
        typeof id ===
        "string"
    );
  } catch {
    return [];
  }
}

/* ---------------------------------------------------------
   Save favorites
   --------------------------------------------------------- */

function saveFavoriteToolIds(
  ids: string[]
): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.setItem(
      TOOLS_STORAGE_KEY,
      JSON.stringify(
        Array.from(
          new Set(ids)
        )
      )
    );
  } catch {
    // Storage may be unavailable.
  }
}

/* ---------------------------------------------------------
   Check favorite
   --------------------------------------------------------- */

function isToolFavorite(
  id: string,
  favorites: string[]
): boolean {
  return favorites.includes(
    id
  );
}

/* ---------------------------------------------------------
   Toggle favorite
   --------------------------------------------------------- */

function toggleToolFavorite(
  id: string,
  favorites: string[]
): string[] {
  if (
    favorites.includes(id)
  ) {
    return favorites.filter(
      (favoriteId) =>
        favoriteId !== id
    );
  }

  return [
    ...favorites,
    id,
  ];
}

/* ---------------------------------------------------------
   Get favorite tools
   --------------------------------------------------------- */

function getFavoriteTools(
  favoriteIds: string[]
): Tool[] {
  if (
    !favoriteIds.length
  ) {
    return [];
  }

  const favoriteSet =
    new Set(
      favoriteIds
    );

  return VALID_MARKETPLACE_TOOLS.filter(
    (tool) =>
      favoriteSet.has(
        tool.id
      )
  );
}

/* ---------------------------------------------------------
   Favorite count
   --------------------------------------------------------- */

function getFavoriteToolCount(
  favoriteIds: string[]
): number {
  return favoriteIds.length;
}

/* ---------------------------------------------------------
   Tab filtering
   --------------------------------------------------------- */

function applyToolsTab(
  tools: Tool[],
  tab: ToolsTab,
  favoriteIds: string[]
): Tool[] {
  switch (tab) {
    case "trending":
      return tools.filter(
        (tool) =>
          tool.trending
      );

    case "new":
      return tools.filter(
        (tool) =>
          tool.isNew
      );

    case "favorites": {
      const favoriteSet =
        new Set(
          favoriteIds
        );

      return tools.filter(
        (tool) =>
          favoriteSet.has(
            tool.id
          )
      );
    }

    case "free":
      return tools.filter(
        (tool) =>
          tool.pricing ===
            "Free" ||
          tool.pricing ===
            "Freemium"
      );

    case "pro":
      return tools.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      );

    case "all":
    default:
      return [
        ...tools,
      ];
  }
}

/* ---------------------------------------------------------
   Tab labels
   --------------------------------------------------------- */

const TOOL_TAB_LABELS: Record<
  ToolsTab,
  string
> = {
  all: "All Tools",
  trending: "Trending",
  new: "New",
  favorites: "Favorites",
  free: "Free",
  pro: "Pro",
};

/* ---------------------------------------------------------
   Tab icons
   --------------------------------------------------------- */

const TOOL_TAB_ICONS: Record<
  ToolsTab,
  React.ElementType
> = {
  all: Grid3X3,
  trending: Flame,
  new: Sparkles,
  favorites: Heart,
  free: Check,
  pro: Crown,
};

/* ---------------------------------------------------------
   Tab counts
   --------------------------------------------------------- */

function getToolsTabCount(
  tab: ToolsTab,
  favoriteIds: string[]
): number {
  switch (tab) {
    case "trending":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.trending
      ).length;

    case "new":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.isNew
      ).length;

    case "favorites":
      return favoriteIds.length;

    case "free":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
            "Free" ||
          tool.pricing ===
            "Freemium"
      ).length;

    case "pro":
      return VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      ).length;

    case "all":
    default:
      return VALID_MARKETPLACE_TOOLS.length;
  }
}

/* ---------------------------------------------------------
   Pagination information
   --------------------------------------------------------- */

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

/* ---------------------------------------------------------
   Build pagination
   --------------------------------------------------------- */

function buildPagination(
  totalItems: number,
  page: number,
  perPage: number
): PaginationInfo {
  const safePerPage =
    Math.max(
      1,
      perPage
    );

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalItems /
          safePerPage
      )
    );

  const safePage =
    Math.min(
      Math.max(
        1,
        page
      ),
      totalPages
    );

  const startIndex =
    (safePage - 1) *
    safePerPage;

  const endIndex =
    Math.min(
      startIndex +
        safePerPage,
      totalItems
    );

  return {
    page:
      safePage,

    perPage:
      safePerPage,

    totalItems,

    totalPages,

    startIndex,

    endIndex,

    hasPrevious:
      safePage > 1,

    hasNext:
      safePage <
      totalPages,
  };
}

/* ---------------------------------------------------------
   Paginate tools
   --------------------------------------------------------- */

function paginateTools(
  tools: Tool[],
  page: number,
  perPage: number
): Tool[] {
  const pagination =
    buildPagination(
      tools.length,
      page,
      perPage
    );

  return tools.slice(
    pagination.startIndex,
    pagination.endIndex
  );
}

/* ---------------------------------------------------------
   Page number list
   --------------------------------------------------------- */

function buildPageNumbers(
  currentPage: number,
  totalPages: number
): Array<
  number | "ellipsis"
> {
  if (
    totalPages <= 7
  ) {
    return Array.from(
      {
        length:
          totalPages,
      },
      (_, index) =>
        index + 1
    );
  }

  const pages: Array<
    number | "ellipsis"
  > = [];

  pages.push(1);

  if (
    currentPage > 4
  ) {
    pages.push(
      "ellipsis"
    );
  }

  const start =
    Math.max(
      2,
      currentPage - 1
    );

  const end =
    Math.min(
      totalPages - 1,
      currentPage + 1
    );

  for (
    let page = start;
    page <= end;
    page++
  ) {
    pages.push(page);
  }

  if (
    currentPage <
    totalPages - 3
  ) {
    pages.push(
      "ellipsis"
    );
  }

  pages.push(
    totalPages
  );

  return pages;
}

/* ---------------------------------------------------------
   Clamp page
   --------------------------------------------------------- */

function clampToolsPage(
  page: number,
  totalPages: number
): number {
  return Math.min(
    Math.max(
      1,
      page
    ),
    Math.max(
      1,
      totalPages
    )
  );
}

/* ---------------------------------------------------------
   Result range text
   --------------------------------------------------------- */

function getResultRangeText(
  pagination: PaginationInfo
): string {
  if (
    pagination.totalItems ===
    0
  ) {
    return "0 results";
  }

  return `${pagination.startIndex + 1}-${pagination.endIndex} of ${pagination.totalItems}`;
}

/* ---------------------------------------------------------
   Tool statistics
   --------------------------------------------------------- */

function calculateToolStatistics(): ToolsStatistics {
  const total =
    VALID_MARKETPLACE_TOOLS.length;

  return {
    total,

    categories:
      new Set(
        VALID_MARKETPLACE_TOOLS.map(
          (tool) =>
            tool.category
        )
      ).size,

    subCategories:
      new Set(
        VALID_MARKETPLACE_TOOLS.map(
          (tool) =>
            tool.subCategory
        )
      ).size,

    free:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Free"
      ).length,

    freemium:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Freemium"
      ).length,

    pro:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Pro"
      ).length,

    enterprise:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.pricing ===
          "Enterprise"
      ).length,

    featured:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.featured
      ).length,

    trending:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.trending
      ).length,

    newTools:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.isNew
      ).length,

    verified:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.verified
      ).length,

    aiPowered:
      VALID_MARKETPLACE_TOOLS.filter(
        (tool) =>
          tool.aiPowered
      ).length,
  };
}

/* ---------------------------------------------------------
   Marketplace statistics
   --------------------------------------------------------- */

export const MARKETPLACE_STATISTICS =
  calculateToolStatistics();

/* ---------------------------------------------------------
   Total users
   --------------------------------------------------------- */

function calculateTotalToolUsers(): number {
  return VALID_MARKETPLACE_TOOLS.reduce(
    (
      total,
      tool
    ) =>
      total +
      tool.users,
    0
  );
}

/* ---------------------------------------------------------
   Average rating
   --------------------------------------------------------- */

function calculateAverageToolRating(): number {
  if (
    !VALID_MARKETPLACE_TOOLS.length
  ) {
    return 0;
  }

  const total =
    VALID_MARKETPLACE_TOOLS.reduce(
      (
        sum,
        tool
      ) =>
        sum +
        tool.rating,
      0
    );

  return (
    Math.round(
      (total /
        VALID_MARKETPLACE_TOOLS.length) *
        10
    ) / 10
  );
}

/* ---------------------------------------------------------
   Public marketplace metrics
   --------------------------------------------------------- */

export const MARKETPLACE_TOTAL_USERS =
  calculateTotalToolUsers();

export const MARKETPLACE_AVERAGE_RATING =
  calculateAverageToolRating();

/* ---------------------------------------------------------
   Current dataset status
   --------------------------------------------------------- */

export const MARKETPLACE_DATASET_STATUS =
  {
    ready:
      VALID_MARKETPLACE_TOOLS.length >
      0,

    toolCount:
      VALID_MARKETPLACE_TOOLS.length,

    categoryCount:
      MARKETPLACE_STATISTICS.categories,

    subCategoryCount:
      MARKETPLACE_STATISTICS.subCategories,

    providerCount:
      MARKETPLACE_PROVIDERS.length,

    averageRating:
      MARKETPLACE_AVERAGE_RATING,

    totalUsers:
      MARKETPLACE_TOTAL_USERS,
  };
/* =========================================================
   TOOLS MARKETPLACE
   Part 13/20
   Favorites + Recently Used + Tool History
   ========================================================= */

/* ---------------------------------------------------------
   Storage keys
   --------------------------------------------------------- */

export const TOOLS_RECENT_STORAGE_KEY =
  "market-ai-recent-tools";

export const TOOLS_USAGE_STORAGE_KEY =
  "market-ai-tool-usage";

/* ---------------------------------------------------------
   Recent tool record
   --------------------------------------------------------- */

export type RecentToolRecord = {
  toolId: string;

  openedAt: number;
};

/* ---------------------------------------------------------
   Tool usage record
   --------------------------------------------------------- */

export type ToolUsageRecord = {
  toolId: string;

  count: number;

  lastUsedAt: number;
};

/* ---------------------------------------------------------
   Load recent tools
   --------------------------------------------------------- */

function loadRecentToolRecords(): RecentToolRecord[] {
  if (
    typeof window ===
    "undefined"
  ) {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        TOOLS_RECENT_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed =
      JSON.parse(
        stored
      );

    if (
      !Array.isArray(
        parsed
      )
    ) {
      return [];
    }

    return parsed.filter(
      (
        item
      ): item is RecentToolRecord =>
        Boolean(
          item &&
            typeof item.toolId ===
              "string" &&
            typeof item.openedAt ===
              "number"
        )
    );
  } catch {
    return [];
  }
}

/* ---------------------------------------------------------
   Save recent tools
   --------------------------------------------------------- */

function saveRecentToolRecords(
  records: RecentToolRecord[]
): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.setItem(
      TOOLS_RECENT_STORAGE_KEY,
      JSON.stringify(
        records
      )
    );
  } catch {
    // Ignore unavailable storage.
  }
}

/* ---------------------------------------------------------
   Add recent tool
   --------------------------------------------------------- */

function addRecentTool(
  toolId: string
): RecentToolRecord[] {
  const existing =
    loadRecentToolRecords();

  const next =
    existing.filter(
      (record) =>
        record.toolId !==
        toolId
    );

  next.unshift({
    toolId,
    openedAt:
      Date.now(),
  });

  const limited =
    next.slice(
      0,
      20
    );

  saveRecentToolRecords(
    limited
  );

  return limited;
}

/* ---------------------------------------------------------
   Get recent tools
   --------------------------------------------------------- */

function getRecentTools(
  limit = 8
): Tool[] {
  const records =
    loadRecentToolRecords();

  const tools =
    records
      .slice(
        0,
        limit
      )
      .map(
        (record) =>
          findToolById(
            record.toolId
          )
      )
      .filter(
        (
          tool
        ): tool is Tool =>
          Boolean(tool)
      );

  return tools;
}

/* ---------------------------------------------------------
   Clear recent tools
   --------------------------------------------------------- */

function clearRecentTools(): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.removeItem(
      TOOLS_RECENT_STORAGE_KEY
    );
  } catch {
    // Ignore unavailable storage.
  }
}

/* ---------------------------------------------------------
   Load usage records
   --------------------------------------------------------- */

function loadToolUsageRecords(): ToolUsageRecord[] {
  if (
    typeof window ===
    "undefined"
  ) {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        TOOLS_USAGE_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed =
      JSON.parse(
        stored
      );

    if (
      !Array.isArray(
        parsed
      )
    ) {
      return [];
    }

    return parsed.filter(
      (
        item
      ): item is ToolUsageRecord =>
        Boolean(
          item &&
            typeof item.toolId ===
              "string" &&
            typeof item.count ===
              "number" &&
            typeof item.lastUsedAt ===
              "number"
        )
    );
  } catch {
    return [];
  }
}

/* ---------------------------------------------------------
   Save usage records
   --------------------------------------------------------- */

function saveToolUsageRecords(
  records: ToolUsageRecord[]
): void {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    window.localStorage.setItem(
      TOOLS_USAGE_STORAGE_KEY,
      JSON.stringify(
        records
      )
    );
  } catch {
    // Ignore unavailable storage.
  }
}

/* ---------------------------------------------------------
   Record tool usage
   --------------------------------------------------------- */

function recordToolUsage(
  toolId: string
): ToolUsageRecord[] {
  const records =
    loadToolUsageRecords();

  const existing =
    records.find(
      (record) =>
        record.toolId ===
        toolId
    );

  let next: ToolUsageRecord[];

  if (existing) {
    next =
      records.map(
        (record) =>
          record.toolId ===
          toolId
            ? {
                ...record,

                count:
                  record.count +
                  1,

                lastUsedAt:
                  Date.now(),
              }
            : record
      );
  } else {
    next = [
      ...records,
      {
        toolId,
        count: 1,
        lastUsedAt:
          Date.now(),
      },
    ];
  }

  saveToolUsageRecords(
    next
  );

  return next;
}

/* ---------------------------------------------------------
   Get usage count
   --------------------------------------------------------- */

function getToolUsageCount(
  toolId: string
): number {
  const record =
    loadToolUsageRecords().find(
      (item) =>
        item.toolId ===
        toolId
    );

  return record?.count ?? 0;
}

/* ---------------------------------------------------------
   Get most used by current user
   --------------------------------------------------------- */

function getMostUsedByCurrentUser(
  limit = 8
): Tool[] {
  const usage =
    loadToolUsageRecords();

  return usage
    .sort(
      (a, b) =>
        b.count -
        a.count
    )
    .map(
      (record) =>
        findToolById(
          record.toolId
        )
    )
    .filter(
      (
        tool
      ): tool is Tool =>
        Boolean(tool)
    )
    .slice(
      0,
      limit
    );
}

/* ---------------------------------------------------------
   Recently used + favorite recommendations
   --------------------------------------------------------- */

function getPersonalizedToolFeed(
  favoriteIds: string[],
  limit = 12
): Tool[] {
  const favoriteSet =
    new Set(
      favoriteIds
    );

  const recent =
    getRecentTools(
      20
    );

  const recentCategories =
    new Set(
      recent.map(
        (tool) =>
          tool.category
      )
    );

  const recentSubCategories =
    new Set(
      recent.map(
        (tool) =>
          tool.subCategory
      )
    );

  return [
    ...VALID_MARKETPLACE_TOOLS,
  ]
    .filter(
      (tool) =>
        !favoriteSet.has(
          tool.id
        )
    )
    .sort(
      (a, b) => {
        const aRecent =
          recent.some(
            (tool) =>
              tool.id ===
              a.id
          )
            ? 30
            : 0;

        const bRecent =
          recent.some(
            (tool) =>
              tool.id ===
              b.id
          )
            ? 30
            : 0;

        const aCategory =
          recentCategories.has(
            a.category
          )
            ? 20
            : 0;

        const bCategory =
          recentCategories.has(
            b.category
          )
            ? 20
            : 0;

        const aSubCategory =
          recentSubCategories.has(
            a.subCategory
          )
            ? 25
            : 0;

        const bSubCategory =
          recentSubCategories.has(
            b.subCategory
          )
            ? 25
            : 0;

        const aScore =
          aRecent +
          aCategory +
          aSubCategory +
          (a.trending
            ? 15
            : 0) +
          (a.featured
            ? 10
            : 0) +
          a.rating * 5;

        const bScore =
          bRecent +
          bCategory +
          bSubCategory +
          (b.trending
            ? 15
            : 0) +
          (b.featured
            ? 10
            : 0) +
          b.rating * 5;

        return (
          bScore -
          aScore
        );
      }
    )
    .slice(
      0,
      limit
    );
}

/* ---------------------------------------------------------
   Tool open handler helper
   --------------------------------------------------------- */

function prepareToolOpen(
  tool: Tool
): string {
  addRecentTool(
    tool.id
  );

  recordToolUsage(
    tool.id
  );

  return normalizeToolRoute(
    tool.route
  );
}

/* ---------------------------------------------------------
   Tool share URL
   --------------------------------------------------------- */

function createToolShareUrl(
  tool: Tool
): string {
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

/* ---------------------------------------------------------
   Copy tool URL
   --------------------------------------------------------- */

async function copyToolUrl(
  tool: Tool
): Promise<boolean> {
  const url =
    createToolShareUrl(
      tool
    );

  if (
    typeof navigator ===
      "undefined" ||
    !navigator.clipboard
  ) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(
      url
    );

    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------
   Native share tool
   --------------------------------------------------------- */

async function shareToolWithNativeAPI(
  tool: Tool
): Promise<boolean> {
  if (
    typeof navigator ===
      "undefined" ||
    !navigator.share
  ) {
    return false;
  }

  try {
    await navigator.share({
      title:
        tool.title,

      text:
        tool.description,

      url:
        createToolShareUrl(
          tool
        ),
    });

    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------
   Tool SEO metadata helper
   --------------------------------------------------------- */

function createToolMetadata(
  tool: Tool
) {
  return {
    title:
      tool.title,

    description:
      tool.description,

    category:
      tool.category,

    subCategory:
      tool.subCategory,

    pricing:
      tool.pricing,

    rating:
      tool.rating,

    users:
      formatToolUsers(
        tool.users
      ),

    provider:
      tool.provider,

    route:
      normalizeToolRoute(
        tool.route
      ),
  };
}

/* ---------------------------------------------------------
   Marketplace share metadata
   --------------------------------------------------------- */

function createMarketplaceMetadata() {
  return {
    title:
      "AI Tools Marketplace",

    description:
      "Discover AI tools for music, voice, video, image, code, business, marketing, education, productivity, research, data and automation.",

    toolCount:
      VALID_MARKETPLACE_TOOLS.length,

    categoryCount:
      MARKETPLACE_STATISTICS.categories,

    rating:
      MARKETPLACE_AVERAGE_RATING,
  };
}

/* ---------------------------------------------------------
   Tool collection helper
   --------------------------------------------------------- */

function createCollection(
  id: string,
  title: string,
  description: string,
  tools: Tool[],
  category?: ToolCategory
): ToolCollection {
  return {
    id,

    title,

    description,

    category,

    tools:
      tools.slice(
        0,
        12
      ),
  };
}

/* ---------------------------------------------------------
   Personalization readiness
   --------------------------------------------------------- */

export const PERSONALIZATION_READY =
  typeof window !==
  "undefined";
/* =========================================================
   TOOLS MARKETPLACE
   Part 14/20
   Tool Collections + Home Sections + Discovery Engine
   ========================================================= */

/* ---------------------------------------------------------
   Build discovery sections
   --------------------------------------------------------- */

function buildDiscoverySections(
  favoriteIds: string[] = []
): ToolSection[] {
  const sections: ToolSection[] = [];

  const featured =
    getFeaturedMarketplaceTools(
      12
    );

  if (featured.length) {
    sections.push(
      createToolSection(
        "featured",
        "Featured AI Tools",
        "Explore hand-picked tools selected for the marketplace.",
        featured
      )
    );
  }

  const trending =
    getTrendingMarketplaceTools(
      12
    );

  if (trending.length) {
    sections.push(
      createToolSection(
        "trending",
        "Trending Now",
        "Discover tools that are currently getting strong attention.",
        trending
      )
    );
  }

  const newest =
    getNewestTools(
      12
    );

  if (newest.length) {
    sections.push(
      createToolSection(
        "new",
        "New Tools",
        "Explore newly added AI tools and capabilities.",
        newest
      )
    );
  }

  const personalized =
    getPersonalizedToolFeed(
      favoriteIds,
      12
    );

  if (personalized.length) {
    sections.push(
      createToolSection(
        "recommended",
        "Recommended For You",
        "Tools selected from your recent activity and marketplace trends.",
        personalized
      )
    );
  }

  const free =
    getBestFreeMarketplaceTools(
      12
    );

  if (free.length) {
    sections.push(
      createToolSection(
        "free",
        "Best Free Tools",
        "Useful tools available without a Pro plan.",
        free
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Tool section factory
   --------------------------------------------------------- */

function createToolSection(
  id: string,
  title: string,
  description: string,
  tools: Tool[],
  category?: ToolCategory
): ToolSection {
  return {
    id,

    title,

    description,

    category,

    tools:
      tools.slice(
        0,
        12
      ),
  };
}

/* ---------------------------------------------------------
   Discovery sections
   --------------------------------------------------------- */

export const DEFAULT_DISCOVERY_SECTIONS =
  buildDiscoverySections();

/* ---------------------------------------------------------
   Category discovery sections
   --------------------------------------------------------- */

function buildCategoryDiscoverySections(): ToolSection[] {
  return TOOL_CATEGORIES
    .filter(
      (
        category
      ): category is ToolCategory =>
        category !== "All"
    )
    .map(
      (category) =>
        createToolSection(
          `category-${normalizeToolText(
            category
          ).replace(
            /\s+/g,
            "-"
          )}`,

          `${category} Tools`,

          CATEGORY_DESCRIPTIONS[
            category
          ],

          getRecommendedByCategory(
            category,
            12
          ),

          category
        )
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Category discovery
   --------------------------------------------------------- */

export const CATEGORY_DISCOVERY_SECTIONS =
  buildCategoryDiscoverySections();

/* ---------------------------------------------------------
   Provider discovery sections
   --------------------------------------------------------- */

function buildProviderDiscoverySections(): ToolSection[] {
  return MARKETPLACE_PROVIDERS.map(
    (provider) => {
      const tools =
        toolsByProvider(
          provider
        );

      return createToolSection(
        `provider-${normalizeToolText(
          provider
        ).replace(
          /\s+/g,
          "-"
        )}`,

        `${provider} Tools`,

        `Tools available from ${provider}.`,

        tools,

        undefined
      );
    }
  ).filter(
    (section) =>
      section.tools.length >
      0
  );
}

/* ---------------------------------------------------------
   Provider discovery
   --------------------------------------------------------- */

export const PROVIDER_DISCOVERY_SECTIONS =
  buildProviderDiscoverySections();

/* ---------------------------------------------------------
   Pricing discovery sections
   --------------------------------------------------------- */

function buildPricingDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] =
    [];

  const free =
    getBestFreeMarketplaceTools(
      12
    );

  if (free.length) {
    sections.push(
      createToolSection(
        "pricing-free",
        "Free & Freemium",
        "Start using useful tools without requiring a Pro subscription.",
        free
      )
    );
  }

  const pro =
    getBestProMarketplaceTools(
      12
    );

  if (pro.length) {
    sections.push(
      createToolSection(
        "pricing-pro",
        "Professional Tools",
        "Advanced tools for professional workflows.",
        pro
      )
    );
  }

  const enterprise =
    VALID_MARKETPLACE_TOOLS.filter(
      (tool) =>
        tool.pricing ===
        "Enterprise"
    );

  if (enterprise.length) {
    sections.push(
      createToolSection(
        "pricing-enterprise",
        "Enterprise Tools",
        "Tools designed for larger organizations and advanced workflows.",
        enterprise
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Pricing discovery
   --------------------------------------------------------- */

export const PRICING_DISCOVERY_SECTIONS =
  buildPricingDiscoverySections();

/* ---------------------------------------------------------
   AI / non-AI discovery sections
   --------------------------------------------------------- */

function buildTechnologyDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] =
    [];

  const aiTools =
    getAIMarketplaceTools(
      12
    );

  if (aiTools.length) {
    sections.push(
      createToolSection(
        "technology-ai",
        "AI Powered Tools",
        "Tools using AI generation, analysis or automation.",
        aiTools
      )
    );
  }

  const nonAITools =
    getNonAIMarketplaceTools(
      12
    );

  if (nonAITools.length) {
    sections.push(
      createToolSection(
        "technology-non-ai",
        "Non-AI Tools",
        "Useful tools that work without AI processing.",
        nonAITools
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Technology discovery
   --------------------------------------------------------- */

export const TECHNOLOGY_DISCOVERY_SECTIONS =
  buildTechnologyDiscoverySections();

/* ---------------------------------------------------------
   Feature discovery sections
   --------------------------------------------------------- */

function buildFeatureDiscoverySections(): ToolSection[] {
  return TOOL_FEATURES
    .filter(
      (
        feature
      ): feature is ToolFeature =>
        feature !==
        "All Features"
    )
    .map(
      (feature) => {
        const tools =
          toolsByFeature(
            feature
          );

        return createToolSection(
          `feature-${normalizeToolText(
            feature
          ).replace(
            /\s+/g,
            "-"
          )}`,

          `${feature} Tools`,

          `Tools supporting ${feature}.`,

          tools
        );
      }
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Feature discovery
   --------------------------------------------------------- */

export const FEATURE_DISCOVERY_SECTIONS =
  buildFeatureDiscoverySections();

/* ---------------------------------------------------------
   Global discovery sections
   --------------------------------------------------------- */

export const ALL_DISCOVERY_SECTIONS =
  [
    ...DEFAULT_DISCOVERY_SECTIONS,

    ...CATEGORY_DISCOVERY_SECTIONS,

    ...PRICING_DISCOVERY_SECTIONS,

    ...TECHNOLOGY_DISCOVERY_SECTIONS,

    ...FEATURE_DISCOVERY_SECTIONS,
  ];

/* ---------------------------------------------------------
   Remove duplicate sections
   --------------------------------------------------------- */

function uniqueToolSections(
  sections: ToolSection[]
): ToolSection[] {
  const seen =
    new Set<string>();

  return sections.filter(
    (section) => {
      if (
        seen.has(
          section.id
        )
      ) {
        return false;
      }

      seen.add(
        section.id
      );

      return true;
    }
  );
}

/* ---------------------------------------------------------
   Unique discovery sections
   --------------------------------------------------------- */

export const UNIQUE_DISCOVERY_SECTIONS =
  uniqueToolSections(
    ALL_DISCOVERY_SECTIONS
  );

/* ---------------------------------------------------------
   Search discovery sections
   --------------------------------------------------------- */

function searchDiscoverySections(
  query: string
): ToolSection[] {
  if (
    !query.trim()
  ) {
    return UNIQUE_DISCOVERY_SECTIONS;
  }

  const normalizedQuery =
    normalizeToolText(
      query
    );

  return UNIQUE_DISCOVERY_SECTIONS
    .map(
      (section) => {
        const matchingTools =
          rankToolSearchResults(
            searchTools(
              section.tools,
              normalizedQuery
            ),
            normalizedQuery
          );

        return {
          ...section,

          tools:
            matchingTools,
        };
      }
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Search discovery
   --------------------------------------------------------- */

export const discoverMarketplaceSections =
  searchDiscoverySections;

/* ---------------------------------------------------------
   Discover marketplace tools
   --------------------------------------------------------- */

function discoverMarketplaceTools(
  options: {
    query?: string;

    category?:
      | "All"
      | ToolCategory;

    subCategory?:
      | "All"
      | ToolSubCategory;

    pricing?:
      | "All Pricing"
      | ToolPricing;

    type?:
      | "All Types"
      | ToolType;

    feature?:
      | "All Features"
      | ToolFeature;

    provider?:
      | "All Providers"
      | string;

    sort?:
      ToolsSortMode;

    page?:
      number;

    perPage?:
      number;

    tab?:
      ToolsTab;

    favorites?:
      string[];
  } = {}
): {
  tools: Tool[];

  pagination:
    PaginationInfo;

  totalBeforePagination:
    number;
} {
  const filters: ToolsFilterState =
    {
      category:
        options.category ??
        "All",

      subCategory:
        options.subCategory ??
        "All",

      pricing:
        options.pricing ??
        "All Pricing",

      type:
        options.type ??
        "All Types",

      feature:
        options.feature ??
        "All Features",

      provider:
        options.provider ??
        "All Providers",
    };

  const query =
    options.query ??
    "";

  const sort =
    options.sort ??
    "Recommended";

  const page =
    options.page ??
    1;

  const perPage =
    options.perPage ??
    TOOLS_PER_PAGE_GRID;

  const favorites =
    options.favorites ??
    [];

  let result =
    buildMarketplaceResults({
      query,

      filters,

      sort,
    });

  result =
    applyToolsTab(
      result,
      options.tab ??
        "all",
      favorites
    );

  const pagination =
    buildPagination(
      result.length,
      page,
      perPage
    );

  const paginated =
    paginateTools(
      result,
      pagination.page,
      pagination.perPage
    );

  return {
    tools:
      paginated,

    pagination,

    totalBeforePagination:
      result.length,
  };
}

/* ---------------------------------------------------------
   Public discovery API
   --------------------------------------------------------- */

export const MARKETPLACE_DISCOVERY = {
  search:
    searchTools,

  filter:
    filterMarketplaceTools,

  sort:
    sortMarketplaceTools,

  discover:
    discoverMarketplaceTools,

  related:
    getRelatedMarketplaceTools,

  similar:
    getSimilarMarketplaceTools,

  recommendations:
    getToolRecommendations,

  categories:
    MARKETPLACE_CATEGORY_INFO,

  collections:
    UNIQUE_DISCOVERY_SECTIONS,
};

/* ---------------------------------------------------------
   Tool route resolver
   --------------------------------------------------------- */

function resolveToolRoute(
  route: string
): Tool | undefined {
  return findToolByRoute(
    route
  );
}

/* ---------------------------------------------------------
   Tool ID resolver
   --------------------------------------------------------- */

function resolveToolId(
  id: string
): Tool | undefined {
  return findToolById(
    id
  );
}

/* ---------------------------------------------------------
   Tool resolver
   --------------------------------------------------------- */

function resolveTool(
  identifier: string
): Tool | undefined {
  return (
    resolveToolId(
      identifier
    ) ??
    resolveToolRoute(
      identifier
    )
  );
}

/* ---------------------------------------------------------
   Tool availability
   --------------------------------------------------------- */

function isToolAvailable(
  identifier: string
): boolean {
  return Boolean(
    resolveTool(
      identifier
    )
  );
}

/* ---------------------------------------------------------
   Marketplace health
   --------------------------------------------------------- */

export const MARKETPLACE_HEALTH = {
  tools:
    VALID_MARKETPLACE_TOOLS.length,

  categories:
    MARKETPLACE_STATISTICS.categories,

  subCategories:
    MARKETPLACE_STATISTICS.subCategories,

  providers:
    MARKETPLACE_PROVIDERS.length,

  ready:
    VALID_MARKETPLACE_TOOLS.every(
      validateToolRecord
    ),

  recommendationReady:
    RECOMMENDATION_ENGINE_READY,

  discoveryReady:
    UNIQUE_DISCOVERY_SECTIONS.length >
    0,
};
/* =========================================================
   TOOLS MARKETPLACE
   Part 14/20
   Tool Collections + Home Sections + Discovery Engine
   ========================================================= */

/* ---------------------------------------------------------
   Build discovery sections
   --------------------------------------------------------- */

function buildDiscoverySections(
  favoriteIds: string[] = []
): ToolSection[] {
  const sections: ToolSection[] = [];

  const featured =
    getFeaturedMarketplaceTools(
      12
    );

  if (featured.length) {
    sections.push(
      createToolSection(
        "featured",
        "Featured AI Tools",
        "Explore hand-picked tools selected for the marketplace.",
        featured
      )
    );
  }

  const trending =
    getTrendingMarketplaceTools(
      12
    );

  if (trending.length) {
    sections.push(
      createToolSection(
        "trending",
        "Trending Now",
        "Discover tools that are currently getting strong attention.",
        trending
      )
    );
  }

  const newest =
    getNewestTools(
      12
    );

  if (newest.length) {
    sections.push(
      createToolSection(
        "new",
        "New Tools",
        "Explore newly added AI tools and capabilities.",
        newest
      )
    );
  }

  const personalized =
    getPersonalizedToolFeed(
      favoriteIds,
      12
    );

  if (personalized.length) {
    sections.push(
      createToolSection(
        "recommended",
        "Recommended For You",
        "Tools selected from your recent activity and marketplace trends.",
        personalized
      )
    );
  }

  const free =
    getBestFreeMarketplaceTools(
      12
    );

  if (free.length) {
    sections.push(
      createToolSection(
        "free",
        "Best Free Tools",
        "Useful tools available without a Pro plan.",
        free
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Tool section factory
   --------------------------------------------------------- */

function createToolSection(
  id: string,
  title: string,
  description: string,
  tools: Tool[],
  category?: ToolCategory
): ToolSection {
  return {
    id,

    title,

    description,

    category,

    tools:
      tools.slice(
        0,
        12
      ),
  };
}

/* ---------------------------------------------------------
   Discovery sections
   --------------------------------------------------------- */

export const DEFAULT_DISCOVERY_SECTIONS =
  buildDiscoverySections();

/* ---------------------------------------------------------
   Category discovery sections
   --------------------------------------------------------- */

function buildCategoryDiscoverySections(): ToolSection[] {
  return TOOL_CATEGORIES
    .filter(
      (
        category
      ): category is ToolCategory =>
        category !== "All"
    )
    .map(
      (category) =>
        createToolSection(
          `category-${normalizeToolText(
            category
          ).replace(
            /\s+/g,
            "-"
          )}`,

          `${category} Tools`,

          CATEGORY_DESCRIPTIONS[
            category
          ],

          getRecommendedByCategory(
            category,
            12
          ),

          category
        )
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Category discovery
   --------------------------------------------------------- */

export const CATEGORY_DISCOVERY_SECTIONS =
  buildCategoryDiscoverySections();

/* ---------------------------------------------------------
   Provider discovery sections
   --------------------------------------------------------- */

function buildProviderDiscoverySections(): ToolSection[] {
  return MARKETPLACE_PROVIDERS.map(
    (provider) => {
      const tools =
        toolsByProvider(
          provider
        );

      return createToolSection(
        `provider-${normalizeToolText(
          provider
        ).replace(
          /\s+/g,
          "-"
        )}`,

        `${provider} Tools`,

        `Tools available from ${provider}.`,

        tools,

        undefined
      );
    }
  ).filter(
    (section) =>
      section.tools.length >
      0
  );
}

/* ---------------------------------------------------------
   Provider discovery
   --------------------------------------------------------- */

export const PROVIDER_DISCOVERY_SECTIONS =
  buildProviderDiscoverySections();

/* ---------------------------------------------------------
   Pricing discovery sections
   --------------------------------------------------------- */

function buildPricingDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] =
    [];

  const free =
    getBestFreeMarketplaceTools(
      12
    );

  if (free.length) {
    sections.push(
      createToolSection(
        "pricing-free",
        "Free & Freemium",
        "Start using useful tools without requiring a Pro subscription.",
        free
      )
    );
  }

  const pro =
    getBestProMarketplaceTools(
      12
    );

  if (pro.length) {
    sections.push(
      createToolSection(
        "pricing-pro",
        "Professional Tools",
        "Advanced tools for professional workflows.",
        pro
      )
    );
  }

  const enterprise =
    VALID_MARKETPLACE_TOOLS.filter(
      (tool) =>
        tool.pricing ===
        "Enterprise"
    );

  if (enterprise.length) {
    sections.push(
      createToolSection(
        "pricing-enterprise",
        "Enterprise Tools",
        "Tools designed for larger organizations and advanced workflows.",
        enterprise
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Pricing discovery
   --------------------------------------------------------- */

export const PRICING_DISCOVERY_SECTIONS =
  buildPricingDiscoverySections();

/* ---------------------------------------------------------
   AI / non-AI discovery sections
   --------------------------------------------------------- */

function buildTechnologyDiscoverySections(): ToolSection[] {
  const sections: ToolSection[] =
    [];

  const aiTools =
    getAIMarketplaceTools(
      12
    );

  if (aiTools.length) {
    sections.push(
      createToolSection(
        "technology-ai",
        "AI Powered Tools",
        "Tools using AI generation, analysis or automation.",
        aiTools
      )
    );
  }

  const nonAITools =
    getNonAIMarketplaceTools(
      12
    );

  if (nonAITools.length) {
    sections.push(
      createToolSection(
        "technology-non-ai",
        "Non-AI Tools",
        "Useful tools that work without AI processing.",
        nonAITools
      )
    );
  }

  return sections;
}

/* ---------------------------------------------------------
   Technology discovery
   --------------------------------------------------------- */

export const TECHNOLOGY_DISCOVERY_SECTIONS =
  buildTechnologyDiscoverySections();

/* ---------------------------------------------------------
   Feature discovery sections
   --------------------------------------------------------- */

function buildFeatureDiscoverySections(): ToolSection[] {
  return TOOL_FEATURES
    .filter(
      (
        feature
      ): feature is ToolFeature =>
        feature !==
        "All Features"
    )
    .map(
      (feature) => {
        const tools =
          toolsByFeature(
            feature
          );

        return createToolSection(
          `feature-${normalizeToolText(
            feature
          ).replace(
            /\s+/g,
            "-"
          )}`,

          `${feature} Tools`,

          `Tools supporting ${feature}.`,

          tools
        );
      }
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Feature discovery
   --------------------------------------------------------- */

export const FEATURE_DISCOVERY_SECTIONS =
  buildFeatureDiscoverySections();

/* ---------------------------------------------------------
   Global discovery sections
   --------------------------------------------------------- */

export const ALL_DISCOVERY_SECTIONS =
  [
    ...DEFAULT_DISCOVERY_SECTIONS,

    ...CATEGORY_DISCOVERY_SECTIONS,

    ...PRICING_DISCOVERY_SECTIONS,

    ...TECHNOLOGY_DISCOVERY_SECTIONS,

    ...FEATURE_DISCOVERY_SECTIONS,
  ];

/* ---------------------------------------------------------
   Remove duplicate sections
   --------------------------------------------------------- */

function uniqueToolSections(
  sections: ToolSection[]
): ToolSection[] {
  const seen =
    new Set<string>();

  return sections.filter(
    (section) => {
      if (
        seen.has(
          section.id
        )
      ) {
        return false;
      }

      seen.add(
        section.id
      );

      return true;
    }
  );
}

/* ---------------------------------------------------------
   Unique discovery sections
   --------------------------------------------------------- */

export const UNIQUE_DISCOVERY_SECTIONS =
  uniqueToolSections(
    ALL_DISCOVERY_SECTIONS
  );

/* ---------------------------------------------------------
   Search discovery sections
   --------------------------------------------------------- */

function searchDiscoverySections(
  query: string
): ToolSection[] {
  if (
    !query.trim()
  ) {
    return UNIQUE_DISCOVERY_SECTIONS;
  }

  const normalizedQuery =
    normalizeToolText(
      query
    );

  return UNIQUE_DISCOVERY_SECTIONS
    .map(
      (section) => {
        const matchingTools =
          rankToolSearchResults(
            searchTools(
              section.tools,
              normalizedQuery
            ),
            normalizedQuery
          );

        return {
          ...section,

          tools:
            matchingTools,
        };
      }
    )
    .filter(
      (section) =>
        section.tools.length >
        0
    );
}

/* ---------------------------------------------------------
   Search discovery
   --------------------------------------------------------- */

export const discoverMarketplaceSections =
  searchDiscoverySections;

/* ---------------------------------------------------------
   Discover marketplace tools
   --------------------------------------------------------- */

function discoverMarketplaceTools(
  options: {
    query?: string;

    category?:
      | "All"
      | ToolCategory;

    subCategory?:
      | "All"
      | ToolSubCategory;

    pricing?:
      | "All Pricing"
      | ToolPricing;

    type?:
      | "All Types"
      | ToolType;

    feature?:
      | "All Features"
      | ToolFeature;

    provider?:
      | "All Providers"
      | string;

    sort?:
      ToolsSortMode;

    page?:
      number;

    perPage?:
      number;

    tab?:
      ToolsTab;

    favorites?:
      string[];
  } = {}
): {
  tools: Tool[];

  pagination:
    PaginationInfo;

  totalBeforePagination:
    number;
} {
  const filters: ToolsFilterState =
    {
      category:
        options.category ??
        "All",

      subCategory:
        options.subCategory ??
        "All",

      pricing:
        options.pricing ??
        "All Pricing",

      type:
        options.type ??
        "All Types",

      feature:
        options.feature ??
        "All Features",

      provider:
        options.provider ??
        "All Providers",
    };

  const query =
    options.query ??
    "";

  const sort =
    options.sort ??
    "Recommended";

  const page =
    options.page ??
    1;

  const perPage =
    options.perPage ??
    TOOLS_PER_PAGE_GRID;

  const favorites =
    options.favorites ??
    [];

  let result =
    buildMarketplaceResults({
      query,

      filters,

      sort,
    });

  result =
    applyToolsTab(
      result,
      options.tab ??
        "all",
      favorites
    );

  const pagination =
    buildPagination(
      result.length,
      page,
      perPage
    );

  const paginated =
    paginateTools(
      result,
      pagination.page,
      pagination.perPage
    );

  return {
    tools:
      paginated,

    pagination,

    totalBeforePagination:
      result.length,
  };
}

/* ---------------------------------------------------------
   Public discovery API
   --------------------------------------------------------- */

export const MARKETPLACE_DISCOVERY = {
  search:
    searchTools,

  filter:
    filterMarketplaceTools,

  sort:
    sortMarketplaceTools,

  discover:
    discoverMarketplaceTools,

  related:
    getRelatedMarketplaceTools,

  similar:
    getSimilarMarketplaceTools,

  recommendations:
    getToolRecommendations,

  categories:
    MARKETPLACE_CATEGORY_INFO,

  collections:
    UNIQUE_DISCOVERY_SECTIONS,
};

/* ---------------------------------------------------------
   Tool route resolver
   --------------------------------------------------------- */

function resolveToolRoute(
  route: string
): Tool | undefined {
  return findToolByRoute(
    route
  );
}

/* ---------------------------------------------------------
   Tool ID resolver
   --------------------------------------------------------- */

function resolveToolId(
  id: string
): Tool | undefined {
  return findToolById(
    id
  );
}

/* ---------------------------------------------------------
   Tool resolver
   --------------------------------------------------------- */

function resolveTool(
  identifier: string
): Tool | undefined {
  return (
    resolveToolId(
      identifier
    ) ??
    resolveToolRoute(
      identifier
    )
  );
}

/* ---------------------------------------------------------
   Tool availability
   --------------------------------------------------------- */

function isToolAvailable(
  identifier: string
): boolean {
  return Boolean(
    resolveTool(
      identifier
    )
  );
}

/* ---------------------------------------------------------
   Marketplace health
   --------------------------------------------------------- */

export const MARKETPLACE_HEALTH = {
  tools:
    VALID_MARKETPLACE_TOOLS.length,

  categories:
    MARKETPLACE_STATISTICS.categories,

  subCategories:
    MARKETPLACE_STATISTICS.subCategories,

  providers:
    MARKETPLACE_PROVIDERS.length,

  ready:
    VALID_MARKETPLACE_TOOLS.every(
      validateToolRecord
    ),

  recommendationReady:
    RECOMMENDATION_ENGINE_READY,

  discoveryReady:
    UNIQUE_DISCOVERY_SECTIONS.length >
    0,
};
/* =========================================================
   TOOLS MARKETPLACE
   Part 15/20
   Tool Actions + Launch + Favorites + Share Helpers
   ========================================================= */

/* ---------------------------------------------------------
   Tool action types
   --------------------------------------------------------- */

export type ToolActionType =
  | "open"
  | "favorite"
  | "share"
  | "copy"
  | "details";

/* ---------------------------------------------------------
   Tool action result
   --------------------------------------------------------- */

export type ToolActionResult = {
  success: boolean;

  action: ToolActionType;

  tool?: Tool;

  route?: string;

  message?: string;
};

/* ---------------------------------------------------------
   Open marketplace tool
   --------------------------------------------------------- */

function openMarketplaceTool(
  identifier: string
): ToolActionResult {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return {
      success: false,
      action: "open",
      message:
        "Tool not found.",
    };
  }

  const route =
    prepareToolOpen(
      tool
    );

  return {
    success: true,
    action: "open",
    tool,
    route,
  };
}

/* ---------------------------------------------------------
   Toggle marketplace favorite
   --------------------------------------------------------- */

function toggleMarketplaceFavorite(
  identifier: string,
  favoriteIds: string[]
): {
  favorites: string[];

  result: ToolActionResult;
} {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return {
      favorites:
        favoriteIds,

      result: {
        success: false,
        action:
          "favorite",
        message:
          "Tool not found.",
      },
    };
  }

  const favorites =
    toggleToolFavorite(
      tool.id,
      favoriteIds
    );

  saveFavoriteToolIds(
    favorites
  );

  return {
    favorites,

    result: {
      success: true,
      action:
        "favorite",
      tool,
    },
  };
}

/* ---------------------------------------------------------
   Share marketplace tool
   --------------------------------------------------------- */

async function shareMarketplaceTool(
  identifier: string
): Promise<ToolActionResult> {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return {
      success: false,
      action: "share",
      message:
        "Tool not found.",
    };
  }

  const shared =
    await shareToolWithNativeAPI(
      tool
    );

  if (shared) {
    return {
      success: true,
      action: "share",
      tool,
    };
  }

  const copied =
    await copyToolUrl(
      tool
    );

  return {
    success: copied,
    action: "share",
    tool,

    message: copied
      ? "Tool link copied."
      : "Unable to share tool.",
  };
}

/* ---------------------------------------------------------
   Copy marketplace tool URL
   --------------------------------------------------------- */

async function copyMarketplaceToolUrl(
  identifier: string
): Promise<ToolActionResult> {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return {
      success: false,
      action: "copy",
      message:
        "Tool not found.",
    };
  }

  const copied =
    await copyToolUrl(
      tool
    );

  return {
    success: copied,
    action: "copy",
    tool,

    message: copied
      ? "Tool link copied."
      : "Unable to copy tool link.",
  };
}

/* ---------------------------------------------------------
   Get tool details
   --------------------------------------------------------- */

function getMarketplaceToolDetails(
  identifier: string
): ToolActionResult {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return {
      success: false,
      action: "details",
      message:
        "Tool not found.",
    };
  }

  return {
    success: true,
    action: "details",
    tool,
  };
}

/* ---------------------------------------------------------
   Get launch route
   --------------------------------------------------------- */

function getToolLaunchRoute(
  identifier: string
): string | null {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return null;
  }

  return prepareToolOpen(
    tool
  );
}

/* ---------------------------------------------------------
   Get tool thumbnail
   --------------------------------------------------------- */

function getToolThumbnail(
  tool: Tool
): string {
  return (
    tool.thumbnail ||
    "/tools/default.webp"
  );
}

/* ---------------------------------------------------------
   Get tool display name
   --------------------------------------------------------- */

function getToolDisplayName(
  tool: Tool
): string {
  return tool.title.trim();
}

/* ---------------------------------------------------------
   Get tool badge
   --------------------------------------------------------- */

function getToolBadge(
  tool: Tool
): string {
  if (tool.isNew) {
    return "New";
  }

  if (tool.trending) {
    return "Trending";
  }

  return tool.badge;
}

/* ---------------------------------------------------------
   Get pricing label
   --------------------------------------------------------- */

function getToolPricingLabel(
  tool: Tool
): string {
  switch (
    tool.pricing
  ) {
    case "Free":
      return "Free";

    case "Freemium":
      return "Free + Pro";

    case "Pro":
      return "Pro";

    case "Enterprise":
      return "Enterprise";

    default:
      return tool.pricing;
  }
}

/* ---------------------------------------------------------
   Get tool rating label
   --------------------------------------------------------- */

function getToolRatingLabel(
  tool: Tool
): string {
  return normalizeToolRating(
    tool.rating
  ).toFixed(1);
}

/* ---------------------------------------------------------
   Get tool user label
   --------------------------------------------------------- */

function getToolUserLabel(
  tool: Tool
): string {
  return formatToolUsers(
    tool.users
  );
}

/* ---------------------------------------------------------
   Get tool category label
   --------------------------------------------------------- */

function getToolCategoryLabel(
  tool: Tool
): string {
  return `${tool.category} · ${tool.subCategory}`;
}

/* ---------------------------------------------------------
   Get tool feature labels
   --------------------------------------------------------- */

function getToolFeatureLabels(
  tool: Tool,
  limit = 4
): string[] {
  return tool.features.slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Tool card data
   --------------------------------------------------------- */

function buildToolCardData(
  tool: Tool,
  favoriteIds: string[] = []
) {
  return {
    id: tool.id,

    title:
      getToolDisplayName(
        tool
      ),

    description:
      tool.description,

    thumbnail:
      getToolThumbnail(
        tool
      ),

    badge:
      getToolBadge(
        tool
      ),

    pricing:
      getToolPricingLabel(
        tool
      ),

    rating:
      getToolRatingLabel(
        tool
      ),

    users:
      getToolUserLabel(
        tool
      ),

    category:
      getToolCategoryLabel(
        tool
      ),

    features:
      getToolFeatureLabels(
        tool
      ),

    route:
      normalizeToolRoute(
        tool.route
      ),

    favorite:
      isToolFavorite(
        tool.id,
        favoriteIds
      ),

    verified:
      tool.verified,

    aiPowered:
      tool.aiPowered,

    featured:
      tool.featured,

    trending:
      tool.trending,

    isNew:
      tool.isNew,
  };
}

/* ---------------------------------------------------------
   Build card collection
   --------------------------------------------------------- */

function buildToolCardCollection(
  tools: Tool[],
  favoriteIds: string[] = []
) {
  return tools.map(
    (tool) =>
      buildToolCardData(
        tool,
        favoriteIds
      )
  );
}

/* ---------------------------------------------------------
   Tool grid result
   --------------------------------------------------------- */

function buildToolGridResult(
  options: Parameters<
    typeof discoverMarketplaceTools
  >[0] = {}
) {
  const result =
    discoverMarketplaceTools(
      options
    );

  return {
    ...result,

    cards:
      buildToolCardCollection(
        result.tools,
        options.favorites ??
          []
      ),
  };
}

/* ---------------------------------------------------------
   Tool detail payload
   --------------------------------------------------------- */

function buildToolDetailPayload(
  identifier: string,
  favoriteIds: string[] = []
) {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return null;
  }

  const recommendations =
    getToolRecommendations(
      tool
    );

  return {
    tool:

      buildToolCardData(
        tool,
        favoriteIds
      ),

    metadata:
      createToolMetadata(
        tool
      ),

    related:
      buildToolCardCollection(
        recommendations.related,
        favoriteIds
      ),

    similar:
      buildToolCardCollection(
        recommendations.similar,
        favoriteIds
      ),

    alternatives:
      buildToolCardCollection(
        recommendations.alternatives,
        favoriteIds
      ),

    categoryTools:
      buildToolCardCollection(
        recommendations.category,
        favoriteIds
      ),

    subCategoryTools:
      buildToolCardCollection(
        recommendations.subCategory,
        favoriteIds
      ),

    usageCount:
      getToolUsageCount(
        tool.id
      ),
  };
}

/* ---------------------------------------------------------
   Tool card action dispatcher
   --------------------------------------------------------- */

async function executeToolAction(
  action: ToolActionType,
  identifier: string,
  favoriteIds: string[] = []
): Promise<{
  favorites: string[];

  result: ToolActionResult;
}> {
  switch (
    action
  ) {
    case "open": {
      return {
        favorites:
          favoriteIds,

        result:
          openMarketplaceTool(
            identifier
          ),
      };
    }

    case "favorite": {
      return toggleMarketplaceFavorite(
        identifier,
        favoriteIds
      );
    }

    case "share": {
      return {
        favorites:
          favoriteIds,

        result:
          await shareMarketplaceTool(
            identifier
          ),
      };
    }

    case "copy": {
      return {
        favorites:
          favoriteIds,

        result:
          await copyMarketplaceToolUrl(
            identifier
          ),
      };
    }

    case "details": {
      return {
        favorites:
          favoriteIds,

        result:
          getMarketplaceToolDetails(
            identifier
          ),
      };
    }

    default: {
      return {
        favorites:
          favoriteIds,

        result: {
          success: false,
          action,
          message:
            "Unsupported tool action.",
        },
      };
    }
  }
}

/* ---------------------------------------------------------
   Tool launch validation
   --------------------------------------------------------- */

function canLaunchTool(
  identifier: string
): boolean {
  const tool =
    resolveTool(
      identifier
    );

  if (!tool) {
    return false;
  }

  const route =
    normalizeToolRoute(
      tool.route
    );

  return (
    route.length >
    1
  );
}

/* ---------------------------------------------------------
   Tool capability helpers
   --------------------------------------------------------- */

function supportsToolFeature(
  tool: Tool,
  feature: ToolFeature
): boolean {
  return tool.features.includes(
    feature
  );
}

function supportsUpload(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Upload"
  );
}

function supportsDownload(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Download"
  );
}

function supportsBatch(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Batch"
  );
}

function supportsAPI(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "API"
  );
}

function supportsBrowser(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Browser"
  );
}

function supportsRealtime(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Realtime"
  );
}

function supportsMultilingual(
  tool: Tool
): boolean {
  return supportsToolFeature(
    tool,
    "Multilingual"
  );
}

/* ---------------------------------------------------------
   Tool capability summary
   --------------------------------------------------------- */

function getToolCapabilitySummary(
  tool: Tool
) {
  return {
    upload:
      supportsUpload(
        tool
      ),

    download:
      supportsDownload(
        tool
      ),

    batch:
      supportsBatch(
        tool
      ),

    api:
      supportsAPI(
        tool
      ),

    browser:
      supportsBrowser(
        tool
      ),

    realtime:
      supportsRealtime(
        tool
      ),

    multilingual:
      supportsMultilingual(
        tool
      ),

    ai:
      tool.aiPowered,
  };
}

/* ---------------------------------------------------------
   Tool availability summary
   --------------------------------------------------------- */

function getToolAvailabilitySummary(
  tool: Tool
) {
  return {
    available:
      canLaunchTool(
        tool.id
      ),

    verified:
      tool.verified,

    pricing:
      tool.pricing,

    provider:
      tool.provider,

    route:
      normalizeToolRoute(
        tool.route
      ),
  };
}

/* ---------------------------------------------------------
   Public tool action API
   --------------------------------------------------------- */

export const TOOL_ACTIONS = {
  open:
    openMarketplaceTool,

  favorite:
    toggleMarketplaceFavorite,

  share:
    shareMarketplaceTool,

  copy:
    copyMarketplaceToolUrl,

  details:
    getMarketplaceToolDetails,

  launch:
    getToolLaunchRoute,

  execute:
    executeToolAction,

  resolve:
    resolveTool,

  available:
    isToolAvailable,

  capabilities:
    getToolCapabilitySummary,

  availability:
    getToolAvailabilitySummary,
};

/* ---------------------------------------------------------
   Tool presentation API
   --------------------------------------------------------- */

export const TOOL_PRESENTATION = {
  card:
    buildToolCardData,

  cards:
    buildToolCardCollection,

  grid:
    buildToolGridResult,

  details:
    buildToolDetailPayload,

  metadata:
    createToolMetadata,

  thumbnail:
    getToolThumbnail,

  badge:
    getToolBadge,

  pricing:
    getToolPricingLabel,

  rating:
    getToolRatingLabel,

  users:
    getToolUserLabel,

  category:
    getToolCategoryLabel,

  features:
    getToolFeatureLabels,
};

/* ---------------------------------------------------------
   Part 15 readiness
   --------------------------------------------------------- */

export const TOOL_ACTION_ENGINE_READY =
  VALID_MARKETPLACE_TOOLS.length >
    0 &&
  VALID_MARKETPLACE_TOOLS.every(
    (tool) =>
      Boolean(
        normalizeToolRoute(
          tool.route
        )
      )
  );
/* =========================================================
   TOOLS MARKETPLACE
   Part 17/20
   Keyboard Navigation + Accessibility + UI Formatting
   ========================================================= */

/* ---------------------------------------------------------
   Tool keyboard actions
   --------------------------------------------------------- */

export type ToolKeyboardAction =
  | "open"
  | "favorite"
  | "details"
  | "share";

/* ---------------------------------------------------------
   Keyboard key normalization
   --------------------------------------------------------- */

function normalizeKeyboardKey(
  key: string
): string {
  return key
    .toLowerCase()
    .trim();
}

/* ---------------------------------------------------------
   Resolve keyboard action
   --------------------------------------------------------- */

function resolveToolKeyboardAction(
  key: string,
  shiftKey = false,
  ctrlKey = false,
  metaKey = false
): ToolKeyboardAction | null {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  if (
    normalized ===
      "enter" ||
    normalized ===
      " "
  ) {
    return "open";
  }

  if (
    normalized ===
      "f" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "favorite";
  }

  if (
    normalized ===
      "d" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "details";
  }

  if (
    normalized ===
      "s" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "share";
  }

  if (
    normalized ===
      "enter" &&
    shiftKey
  ) {
    return "details";
  }

  return null;
}

/* ---------------------------------------------------------
   Tool ARIA label
   --------------------------------------------------------- */

function getToolAriaLabel(
  tool: Tool
): string {
  return [
    tool.title,

    tool.category,

    tool.subCategory,

    tool.pricing,

    tool.aiPowered
      ? "AI powered"
      : "Non AI",

    tool.verified
      ? "Verified"
      : "",
  ]
    .filter(Boolean)
    .join(", ");
}

/* ---------------------------------------------------------
   Tool button label
   --------------------------------------------------------- */

function getToolOpenLabel(
  tool: Tool
): string {
  return `Open ${tool.title}`;
}

function getToolFavoriteLabel(
  tool: Tool,
  favorite: boolean
): string {
  return favorite
    ? `Remove ${tool.title} from favorites`
    : `Add ${tool.title} to favorites`;
}

function getToolShareLabel(
  tool: Tool
): string {
  return `Share ${tool.title}`;
}

function getToolDetailsLabel(
  tool: Tool
): string {
  return `View details for ${tool.title}`;
}

/* ---------------------------------------------------------
   Rating accessibility
   --------------------------------------------------------- */

function getToolRatingAriaLabel(
  tool: Tool
): string {
  const rating =
    normalizeToolRating(
      tool.rating
    );

  return `${rating.toFixed(
    1
  )} out of 5 rating`;
}

/* ---------------------------------------------------------
   Usage accessibility
   --------------------------------------------------------- */

function getToolUsersAriaLabel(
  tool: Tool
): string {
  return `${formatToolUsers(
    tool.users
  )} users`;
}

/* ---------------------------------------------------------
   Tool card semantic data
   --------------------------------------------------------- */

function getToolSemanticData(
  tool: Tool,
  favoriteIds: string[] = []
) {
  return {
    role: "article",

    ariaLabel:
      getToolAriaLabel(
        tool
      ),

    title:
      tool.title,

    openLabel:
      getToolOpenLabel(
        tool
      ),

    favoriteLabel:
      getToolFavoriteLabel(
        tool,
        isToolFavorite(
          tool.id,
          favoriteIds
        )
      ),

    shareLabel:
      getToolShareLabel(
        tool
      ),

    detailsLabel:
      getToolDetailsLabel(
        tool
      ),

    ratingLabel:
      getToolRatingAriaLabel(
        tool
      ),

    usersLabel:
      getToolUsersAriaLabel(
        tool
      ),

    categoryLabel:
      getToolCategoryLabel(
        tool
      ),

    pricingLabel:
      getToolPricingLabel(
        tool
      ),
  };
}

/* ---------------------------------------------------------
   Keyboard event payload
   --------------------------------------------------------- */

export type ToolKeyboardEventLike = {
  key: string;

  shiftKey?: boolean;

  ctrlKey?: boolean;

  metaKey?: boolean;
};

/* ---------------------------------------------------------
   Handle keyboard action
   --------------------------------------------------------- */

function handleToolKeyboardAction(
  event: ToolKeyboardEventLike
): ToolKeyboardAction | null {
  return resolveToolKeyboardAction(
    event.key,
    Boolean(
      event.shiftKey
    ),
    Boolean(
      event.ctrlKey
    ),
    Boolean(
      event.metaKey
    )
  );
}

/* ---------------------------------------------------------
   Keyboard navigation helpers
   --------------------------------------------------------- */

function isToolNavigationKey(
  key: string
): boolean {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  return [
    "arrowup",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "home",
    "end",
  ].includes(
    normalized
  );
}

/* ---------------------------------------------------------
   Navigation direction
   --------------------------------------------------------- */

type ToolNavigationDirection =
  | "previous"
  | "next"
  | "first"
  | "last";

/* ---------------------------------------------------------
   Resolve navigation direction
   --------------------------------------------------------- */

function resolveToolNavigationDirection(
  key: string
): ToolNavigationDirection | null {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  switch (
    normalized
  ) {
    case "arrowleft":
    case "arrowup":
      return "previous";

    case "arrowright":
    case "arrowdown":
      return "next";

    case "home":
      return "first";

    case "end":
      return "last";

    default:
      return null;
  }
}

/* ---------------------------------------------------------
   Navigate tool collection
   --------------------------------------------------------- */

function navigateToolCollection(
  tools: Tool[],
  currentIndex: number,
  direction: ToolNavigationDirection
): number {
  if (
    !tools.length
  ) {
    return -1;
  }

  switch (
    direction
  ) {
    case "previous":
      return currentIndex <= 0
        ? tools.length - 1
        : currentIndex - 1;

    case "next":
      return currentIndex >=
        tools.length - 1
        ? 0
        : currentIndex + 1;

    case "first":
      return 0;

    case "last":
      return tools.length - 1;

    default:
      return currentIndex;
  }
}

/* ---------------------------------------------------------
   Tool focus information
   --------------------------------------------------------- */

function getToolFocusTarget(
  tools: Tool[],
  currentToolId: string,
  direction: ToolNavigationDirection
): Tool | null {
  const currentIndex =
    tools.findIndex(
      (tool) =>
        tool.id ===
        currentToolId
    );

  if (
    currentIndex < 0
  ) {
    return null;
  }

  const targetIndex =
    navigateToolCollection(
      tools,
      currentIndex,
      direction
    );

  if (
    targetIndex < 0
  ) {
    return null;
  }

  return (
    tools[targetIndex] ??
    null
  );
}

/* ---------------------------------------------------------
   Text formatting
   --------------------------------------------------------- */

function capitalizeToolText(
  value: string
): string {
  if (!value) {
    return "";
  }

  return (
    value.charAt(0)
      .toUpperCase() +
    value.slice(1)
  );
}

/* ---------------------------------------------------------
   Slugify tool text
   --------------------------------------------------------- */

function slugifyToolText(
  value: string
): string {
  return normalizeToolText(
    value
  )
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

/* ---------------------------------------------------------
   Tool anchor ID
   --------------------------------------------------------- */

function getToolAnchorId(
  tool: Tool
): string {
  return `tool-${slugifyToolText(
    tool.id
  )}`;
}

/* ---------------------------------------------------------
   Category anchor ID
   --------------------------------------------------------- */

function getCategoryAnchorId(
  category: ToolCategory
): string {
  return `category-${slugifyToolText(
    category
  )}`;
}

/* ---------------------------------------------------------
   Tool section anchor ID
   --------------------------------------------------------- */

function getSectionAnchorId(
  section: ToolSection
): string {
  return `section-${slugifyToolText(
    section.id
  )}`;
}

/* ---------------------------------------------------------
   Tool image alt text
   --------------------------------------------------------- */

function getToolImageAlt(
  tool: Tool
): string {
  return `${tool.title} AI tool`;
}

/* ---------------------------------------------------------
   Tool thumbnail fallback
   --------------------------------------------------------- */

function getSafeToolThumbnail(
  tool: Tool
): string {
  const thumbnail =
    getToolThumbnail(
      tool
    );

  return thumbnail.trim()
    ? thumbnail
    : "/tools/default.webp";
}

/* ---------------------------------------------------------
   Display formatting
   --------------------------------------------------------- */

function formatToolCount(
  count: number
): string {
  if (
    count >=
    1000000
  ) {
    return `${(
      count / 1000000
    ).toFixed(1)}M`;
  }

  if (
    count >=
    1000
  ) {
    return `${(
      count / 1000
    ).toFixed(1)}K`;
  }

  return String(
    Math.max(
      0,
      Math.floor(
        count
      )
    )
  );
}

/* ---------------------------------------------------------
   Format rating
   --------------------------------------------------------- */

function formatToolRating(
  rating: number
): string {
  return normalizeToolRating(
    rating
  ).toFixed(1);
}

/* ---------------------------------------------------------
   Star rating data
   --------------------------------------------------------- */

function getToolStarRating(
  rating: number
): Array<{
  filled: boolean;
  half: boolean;
}> {
  const normalized =
    normalizeToolRating(
      rating
    );

  const stars: Array<{
    filled: boolean;
    half: boolean;
  }> = [];

  for (
    let index = 1;
    index <= 5;
    index++
  ) {
    stars.push({
      filled:
        normalized >=
        index,

      half:
        normalized >=
          index - 0.5 &&
        normalized <
          index,
    });
  }

  return stars;
}

/* ---------------------------------------------------------
   Tool quality label
   --------------------------------------------------------- */

function getToolQualityLabel(
  tool: Tool
): string {
  if (
    tool.rating >=
    4.8
  ) {
    return "Excellent";
  }

  if (
    tool.rating >=
    4.5
  ) {
    return "Highly Rated";
  }

  if (
    tool.rating >=
    4
  ) {
    return "Well Rated";
  }

  return "Rated";
}

/* ---------------------------------------------------------
   Tool popularity label
   --------------------------------------------------------- */

function getToolPopularityLabel(
  tool: Tool
): string {
  if (
    tool.users >=
    1000000
  ) {
    return "Very Popular";
  }

  if (
    tool.users >=
    100000
  ) {
    return "Popular";
  }

  if (
    tool.users >=
    50000
  ) {
    return "Growing";
  }

  return "Emerging";
}

/* ---------------------------------------------------------
   Tool status label
   --------------------------------------------------------- */

function getToolStatusLabel(
  tool: Tool
): string {
  if (
    tool.isNew
  ) {
    return "New";
  }

  if (
    tool.trending
  ) {
    return "Trending";
  }

  if (
    tool.featured
  ) {
    return "Featured";
  }

  if (
    tool.verified
  ) {
    return "Verified";
  }

  return "Available";
}

/* ---------------------------------------------------------
   Tool status flags
   --------------------------------------------------------- */

function getToolStatusFlags(
  tool: Tool
) {
  return {
    new:
      Boolean(
        tool.isNew
      ),

    trending:
      Boolean(
        tool.trending
      ),

    featured:
      Boolean(
        tool.featured
      ),

    verified:
      Boolean(
        tool.verified
      ),

    aiPowered:
      Boolean(
        tool.aiPowered
      ),
  };
}

/* ---------------------------------------------------------
   Tool card accessibility data
   --------------------------------------------------------- */

function buildToolAccessibilityData(
  tool: Tool,
  favoriteIds: string[] = []
) {
  const favorite =
    isToolFavorite(
      tool.id,
      favoriteIds
    );

  return {
    anchorId:
      getToolAnchorId(
        tool
      ),

    imageAlt:
      getToolImageAlt(
        tool
      ),

    semantic:
      getToolSemanticData(
        tool,
        favoriteIds
      ),

    favorite,

    status:
      getToolStatusLabel(
        tool
      ),

    statusFlags:
      getToolStatusFlags(
        tool
      ),

    quality:
      getToolQualityLabel(
        tool
      ),

    popularity:
      getToolPopularityLabel(
        tool
      ),

    starRating:
      getToolStarRating(
        tool.rating
      ),

    keyboardKeys: [
      "Enter",
      "Space",
      "F",
      "D",
      "S",
    ],
  };
}

/* ---------------------------------------------------------
   Tool UI metadata
   --------------------------------------------------------- */

function buildToolUIMetadata(
  tool: Tool,
  favoriteIds: string[] = []
) {
  return {
    ...buildToolCardData(
      tool,
      favoriteIds
    ),

    accessibility:
      buildToolAccessibilityData(
        tool,
        favoriteIds
      ),

    anchorId:
      getToolAnchorId(
        tool
      ),

    imageAlt:
      getToolImageAlt(
        tool
      ),

    quality:
      getToolQualityLabel(
        tool
      ),

    popularity:
      getToolPopularityLabel(
        tool
      ),

    status:
      getToolStatusLabel(
        tool
      ),

    capabilities:
      getToolCapabilitySummary(
        tool
      ),
  };
}

/* ---------------------------------------------------------
   Build UI metadata collection
   --------------------------------------------------------- */

function buildToolUIMetadataCollection(
  tools: Tool[],
  favoriteIds: string[] = []
) {
  return tools.map(
    (tool) =>
      buildToolUIMetadata(
        tool,
        favoriteIds
      )
  );
}

/* ---------------------------------------------------------
   Empty state metadata
   --------------------------------------------------------- */

function buildToolsEmptyState(
  query = "",
  filters?: ToolsFilterState
) {
  const hasQuery =
    Boolean(
      query.trim()
    );

  const activeFilters =
    filters
      ? countActiveFilters(
          filters
        )
      : 0;

  if (
    hasQuery &&
    activeFilters
  ) {
    return {
      title:
        "No matching tools",

      description:
        "Try changing your search or removing one or more filters.",

      action:
        "Clear filters",
    };
  }

  if (hasQuery) {
    return {
      title:
        "No tools found",

      description:
        `No tools matched "${query.trim()}". Try another search.`,

      action:
        "Clear search",
    };
  }

  if (
    activeFilters
  ) {
    return {
      title:
        "No tools match these filters",

      description:
        "Try selecting different categories, pricing or features.",

      action:
        "Clear filters",
    };
  }

  return {
    title:
      "No tools available",

    description:
      "There are currently no tools available in this collection.",

    action:
      "Browse all tools",
  };
}

/* ---------------------------------------------------------
   Search suggestion builder
   --------------------------------------------------------- */

function getToolSearchSuggestions(
  query: string,
  limit = 6
): Tool[] {
  if (
    !query.trim()
  ) {
    return getRecommendedTools(
      limit
    );
  }

  return rankToolSearchResults(
    searchTools(
      VALID_MARKETPLACE_TOOLS,
      query
    ),
    query
  ).slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Popular search terms
   --------------------------------------------------------- */

function getPopularToolSearchTerms(
  limit = 10
): string[] {
  const terms =
    new Set<string>();

  getTrendingMarketplaceTools(
    30
  ).forEach(
    (tool) => {
      terms.add(
        tool.title
      );

      terms.add(
        tool.category
      );

      terms.add(
        tool.subCategory
      );
    }
  );

  return Array.from(
    terms
  ).slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Public UI helper API
   --------------------------------------------------------- */

export const TOOL_UI = {
  keyboard:
    handleToolKeyboardAction,

  navigation:
    resolveToolNavigationDirection,

  navigate:
    navigateToolCollection,

  focusTarget:
    getToolFocusTarget,

  aria:
    getToolAriaLabel,

  semantic:
    getToolSemanticData,

  accessibility:
    buildToolAccessibilityData,

  metadata:
    buildToolUIMetadata,

  metadataCollection:
    buildToolUIMetadataCollection,

  anchor:
    getToolAnchorId,

  categoryAnchor:
    getCategoryAnchorId,

  sectionAnchor:
    getSectionAnchorId,

  imageAlt:
    getToolImageAlt,

  thumbnail:
    getSafeToolThumbnail,

  count:
    formatToolCount,

  rating:
    formatToolRating,

  stars:
    getToolStarRating,

  quality:
    getToolQualityLabel,

  popularity:
    getToolPopularityLabel,

  status:
    getToolStatusLabel,

  emptyState:
    buildToolsEmptyState,

  suggestions:
    getToolSearchSuggestions,

  popularSearches:
    getPopularToolSearchTerms,
};

/* ---------------------------------------------------------
   UI readiness
   --------------------------------------------------------- */

export const TOOL_UI_READY =
  VALID_MARKETPLACE_TOOLS.length >
    0 &&
  MARKETPLACE_FILTER_OPTIONS
    .categories.length >
    0;
/* =========================================================
   TOOLS MARKETPLACE
   Part 17/20
   Keyboard Navigation + Accessibility + UI Formatting
   ========================================================= */

/* ---------------------------------------------------------
   Tool keyboard actions
   --------------------------------------------------------- */

export type ToolKeyboardAction =
  | "open"
  | "favorite"
  | "details"
  | "share";

/* ---------------------------------------------------------
   Keyboard key normalization
   --------------------------------------------------------- */

function normalizeKeyboardKey(
  key: string
): string {
  return key
    .toLowerCase()
    .trim();
}

/* ---------------------------------------------------------
   Resolve keyboard action
   --------------------------------------------------------- */

function resolveToolKeyboardAction(
  key: string,
  shiftKey = false,
  ctrlKey = false,
  metaKey = false
): ToolKeyboardAction | null {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  if (
    normalized ===
      "enter" ||
    normalized ===
      " "
  ) {
    return "open";
  }

  if (
    normalized ===
      "f" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "favorite";
  }

  if (
    normalized ===
      "d" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "details";
  }

  if (
    normalized ===
      "s" &&
    !ctrlKey &&
    !metaKey
  ) {
    return "share";
  }

  if (
    normalized ===
      "enter" &&
    shiftKey
  ) {
    return "details";
  }

  return null;
}

/* ---------------------------------------------------------
   Tool ARIA label
   --------------------------------------------------------- */

function getToolAriaLabel(
  tool: Tool
): string {
  return [
    tool.title,

    tool.category,

    tool.subCategory,

    tool.pricing,

    tool.aiPowered
      ? "AI powered"
      : "Non AI",

    tool.verified
      ? "Verified"
      : "",
  ]
    .filter(Boolean)
    .join(", ");
}

/* ---------------------------------------------------------
   Tool button label
   --------------------------------------------------------- */

function getToolOpenLabel(
  tool: Tool
): string {
  return `Open ${tool.title}`;
}

function getToolFavoriteLabel(
  tool: Tool,
  favorite: boolean
): string {
  return favorite
    ? `Remove ${tool.title} from favorites`
    : `Add ${tool.title} to favorites`;
}

function getToolShareLabel(
  tool: Tool
): string {
  return `Share ${tool.title}`;
}

function getToolDetailsLabel(
  tool: Tool
): string {
  return `View details for ${tool.title}`;
}

/* ---------------------------------------------------------
   Rating accessibility
   --------------------------------------------------------- */

function getToolRatingAriaLabel(
  tool: Tool
): string {
  const rating =
    normalizeToolRating(
      tool.rating
    );

  return `${rating.toFixed(
    1
  )} out of 5 rating`;
}

/* ---------------------------------------------------------
   Usage accessibility
   --------------------------------------------------------- */

function getToolUsersAriaLabel(
  tool: Tool
): string {
  return `${formatToolUsers(
    tool.users
  )} users`;
}

/* ---------------------------------------------------------
   Tool card semantic data
   --------------------------------------------------------- */

function getToolSemanticData(
  tool: Tool,
  favoriteIds: string[] = []
) {
  return {
    role: "article",

    ariaLabel:
      getToolAriaLabel(
        tool
      ),

    title:
      tool.title,

    openLabel:
      getToolOpenLabel(
        tool
      ),

    favoriteLabel:
      getToolFavoriteLabel(
        tool,
        isToolFavorite(
          tool.id,
          favoriteIds
        )
      ),

    shareLabel:
      getToolShareLabel(
        tool
      ),

    detailsLabel:
      getToolDetailsLabel(
        tool
      ),

    ratingLabel:
      getToolRatingAriaLabel(
        tool
      ),

    usersLabel:
      getToolUsersAriaLabel(
        tool
      ),

    categoryLabel:
      getToolCategoryLabel(
        tool
      ),

    pricingLabel:
      getToolPricingLabel(
        tool
      ),
  };
}

/* ---------------------------------------------------------
   Keyboard event payload
   --------------------------------------------------------- */

export type ToolKeyboardEventLike = {
  key: string;

  shiftKey?: boolean;

  ctrlKey?: boolean;

  metaKey?: boolean;
};

/* ---------------------------------------------------------
   Handle keyboard action
   --------------------------------------------------------- */

function handleToolKeyboardAction(
  event: ToolKeyboardEventLike
): ToolKeyboardAction | null {
  return resolveToolKeyboardAction(
    event.key,
    Boolean(
      event.shiftKey
    ),
    Boolean(
      event.ctrlKey
    ),
    Boolean(
      event.metaKey
    )
  );
}

/* ---------------------------------------------------------
   Keyboard navigation helpers
   --------------------------------------------------------- */

function isToolNavigationKey(
  key: string
): boolean {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  return [
    "arrowup",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "home",
    "end",
  ].includes(
    normalized
  );
}

/* ---------------------------------------------------------
   Navigation direction
   --------------------------------------------------------- */

type ToolNavigationDirection =
  | "previous"
  | "next"
  | "first"
  | "last";

/* ---------------------------------------------------------
   Resolve navigation direction
   --------------------------------------------------------- */

function resolveToolNavigationDirection(
  key: string
): ToolNavigationDirection | null {
  const normalized =
    normalizeKeyboardKey(
      key
    );

  switch (
    normalized
  ) {
    case "arrowleft":
    case "arrowup":
      return "previous";

    case "arrowright":
    case "arrowdown":
      return "next";

    case "home":
      return "first";

    case "end":
      return "last";

    default:
      return null;
  }
}

/* ---------------------------------------------------------
   Navigate tool collection
   --------------------------------------------------------- */

function navigateToolCollection(
  tools: Tool[],
  currentIndex: number,
  direction: ToolNavigationDirection
): number {
  if (
    !tools.length
  ) {
    return -1;
  }

  switch (
    direction
  ) {
    case "previous":
      return currentIndex <= 0
        ? tools.length - 1
        : currentIndex - 1;

    case "next":
      return currentIndex >=
        tools.length - 1
        ? 0
        : currentIndex + 1;

    case "first":
      return 0;

    case "last":
      return tools.length - 1;

    default:
      return currentIndex;
  }
}

/* ---------------------------------------------------------
   Tool focus information
   --------------------------------------------------------- */

function getToolFocusTarget(
  tools: Tool[],
  currentToolId: string,
  direction: ToolNavigationDirection
): Tool | null {
  const currentIndex =
    tools.findIndex(
      (tool) =>
        tool.id ===
        currentToolId
    );

  if (
    currentIndex < 0
  ) {
    return null;
  }

  const targetIndex =
    navigateToolCollection(
      tools,
      currentIndex,
      direction
    );

  if (
    targetIndex < 0
  ) {
    return null;
  }

  return (
    tools[targetIndex] ??
    null
  );
}

/* ---------------------------------------------------------
   Text formatting
   --------------------------------------------------------- */

function capitalizeToolText(
  value: string
): string {
  if (!value) {
    return "";
  }

  return (
    value.charAt(0)
      .toUpperCase() +
    value.slice(1)
  );
}

/* ---------------------------------------------------------
   Slugify tool text
   --------------------------------------------------------- */

function slugifyToolText(
  value: string
): string {
  return normalizeToolText(
    value
  )
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

/* ---------------------------------------------------------
   Tool anchor ID
   --------------------------------------------------------- */

function getToolAnchorId(
  tool: Tool
): string {
  return `tool-${slugifyToolText(
    tool.id
  )}`;
}

/* ---------------------------------------------------------
   Category anchor ID
   --------------------------------------------------------- */

function getCategoryAnchorId(
  category: ToolCategory
): string {
  return `category-${slugifyToolText(
    category
  )}`;
}

/* ---------------------------------------------------------
   Tool section anchor ID
   --------------------------------------------------------- */

function getSectionAnchorId(
  section: ToolSection
): string {
  return `section-${slugifyToolText(
    section.id
  )}`;
}

/* ---------------------------------------------------------
   Tool image alt text
   --------------------------------------------------------- */

function getToolImageAlt(
  tool: Tool
): string {
  return `${tool.title} AI tool`;
}

/* ---------------------------------------------------------
   Tool thumbnail fallback
   --------------------------------------------------------- */

function getSafeToolThumbnail(
  tool: Tool
): string {
  const thumbnail =
    getToolThumbnail(
      tool
    );

  return thumbnail.trim()
    ? thumbnail
    : "/tools/default.webp";
}

/* ---------------------------------------------------------
   Display formatting
   --------------------------------------------------------- */

function formatToolCount(
  count: number
): string {
  if (
    count >=
    1000000
  ) {
    return `${(
      count / 1000000
    ).toFixed(1)}M`;
  }

  if (
    count >=
    1000
  ) {
    return `${(
      count / 1000
    ).toFixed(1)}K`;
  }

  return String(
    Math.max(
      0,
      Math.floor(
        count
      )
    )
  );
}

/* ---------------------------------------------------------
   Format rating
   --------------------------------------------------------- */

function formatToolRating(
  rating: number
): string {
  return normalizeToolRating(
    rating
  ).toFixed(1);
}

/* ---------------------------------------------------------
   Star rating data
   --------------------------------------------------------- */

function getToolStarRating(
  rating: number
): Array<{
  filled: boolean;
  half: boolean;
}> {
  const normalized =
    normalizeToolRating(
      rating
    );

  const stars: Array<{
    filled: boolean;
    half: boolean;
  }> = [];

  for (
    let index = 1;
    index <= 5;
    index++
  ) {
    stars.push({
      filled:
        normalized >=
        index,

      half:
        normalized >=
          index - 0.5 &&
        normalized <
          index,
    });
  }

  return stars;
}

/* ---------------------------------------------------------
   Tool quality label
   --------------------------------------------------------- */

function getToolQualityLabel(
  tool: Tool
): string {
  if (
    tool.rating >=
    4.8
  ) {
    return "Excellent";
  }

  if (
    tool.rating >=
    4.5
  ) {
    return "Highly Rated";
  }

  if (
    tool.rating >=
    4
  ) {
    return "Well Rated";
  }

  return "Rated";
}

/* ---------------------------------------------------------
   Tool popularity label
   --------------------------------------------------------- */

function getToolPopularityLabel(
  tool: Tool
): string {
  if (
    tool.users >=
    1000000
  ) {
    return "Very Popular";
  }

  if (
    tool.users >=
    100000
  ) {
    return "Popular";
  }

  if (
    tool.users >=
    50000
  ) {
    return "Growing";
  }

  return "Emerging";
}

/* ---------------------------------------------------------
   Tool status label
   --------------------------------------------------------- */

function getToolStatusLabel(
  tool: Tool
): string {
  if (
    tool.isNew
  ) {
    return "New";
  }

  if (
    tool.trending
  ) {
    return "Trending";
  }

  if (
    tool.featured
  ) {
    return "Featured";
  }

  if (
    tool.verified
  ) {
    return "Verified";
  }

  return "Available";
}

/* ---------------------------------------------------------
   Tool status flags
   --------------------------------------------------------- */

function getToolStatusFlags(
  tool: Tool
) {
  return {
    new:
      Boolean(
        tool.isNew
      ),

    trending:
      Boolean(
        tool.trending
      ),

    featured:
      Boolean(
        tool.featured
      ),

    verified:
      Boolean(
        tool.verified
      ),

    aiPowered:
      Boolean(
        tool.aiPowered
      ),
  };
}

/* ---------------------------------------------------------
   Tool card accessibility data
   --------------------------------------------------------- */

function buildToolAccessibilityData(
  tool: Tool,
  favoriteIds: string[] = []
) {
  const favorite =
    isToolFavorite(
      tool.id,
      favoriteIds
    );

  return {
    anchorId:
      getToolAnchorId(
        tool
      ),

    imageAlt:
      getToolImageAlt(
        tool
      ),

    semantic:
      getToolSemanticData(
        tool,
        favoriteIds
      ),

    favorite,

    status:
      getToolStatusLabel(
        tool
      ),

    statusFlags:
      getToolStatusFlags(
        tool
      ),

    quality:
      getToolQualityLabel(
        tool
      ),

    popularity:
      getToolPopularityLabel(
        tool
      ),

    starRating:
      getToolStarRating(
        tool.rating
      ),

    keyboardKeys: [
      "Enter",
      "Space",
      "F",
      "D",
      "S",
    ],
  };
}

/* ---------------------------------------------------------
   Tool UI metadata
   --------------------------------------------------------- */

function buildToolUIMetadata(
  tool: Tool,
  favoriteIds: string[] = []
) {
  return {
    ...buildToolCardData(
      tool,
      favoriteIds
    ),

    accessibility:
      buildToolAccessibilityData(
        tool,
        favoriteIds
      ),

    anchorId:
      getToolAnchorId(
        tool
      ),

    imageAlt:
      getToolImageAlt(
        tool
      ),

    quality:
      getToolQualityLabel(
        tool
      ),

    popularity:
      getToolPopularityLabel(
        tool
      ),

    status:
      getToolStatusLabel(
        tool
      ),

    capabilities:
      getToolCapabilitySummary(
        tool
      ),
  };
}

/* ---------------------------------------------------------
   Build UI metadata collection
   --------------------------------------------------------- */

function buildToolUIMetadataCollection(
  tools: Tool[],
  favoriteIds: string[] = []
) {
  return tools.map(
    (tool) =>
      buildToolUIMetadata(
        tool,
        favoriteIds
      )
  );
}

/* ---------------------------------------------------------
   Empty state metadata
   --------------------------------------------------------- */

function buildToolsEmptyState(
  query = "",
  filters?: ToolsFilterState
) {
  const hasQuery =
    Boolean(
      query.trim()
    );

  const activeFilters =
    filters
      ? countActiveFilters(
          filters
        )
      : 0;

  if (
    hasQuery &&
    activeFilters
  ) {
    return {
      title:
        "No matching tools",

      description:
        "Try changing your search or removing one or more filters.",

      action:
        "Clear filters",
    };
  }

  if (hasQuery) {
    return {
      title:
        "No tools found",

      description:
        `No tools matched "${query.trim()}". Try another search.`,

      action:
        "Clear search",
    };
  }

  if (
    activeFilters
  ) {
    return {
      title:
        "No tools match these filters",

      description:
        "Try selecting different categories, pricing or features.",

      action:
        "Clear filters",
    };
  }

  return {
    title:
      "No tools available",

    description:
      "There are currently no tools available in this collection.",

    action:
      "Browse all tools",
  };
}

/* ---------------------------------------------------------
   Search suggestion builder
   --------------------------------------------------------- */

function getToolSearchSuggestions(
  query: string,
  limit = 6
): Tool[] {
  if (
    !query.trim()
  ) {
    return getRecommendedTools(
      limit
    );
  }

  return rankToolSearchResults(
    searchTools(
      VALID_MARKETPLACE_TOOLS,
      query
    ),
    query
  ).slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Popular search terms
   --------------------------------------------------------- */

function getPopularToolSearchTerms(
  limit = 10
): string[] {
  const terms =
    new Set<string>();

  getTrendingMarketplaceTools(
    30
  ).forEach(
    (tool) => {
      terms.add(
        tool.title
      );

      terms.add(
        tool.category
      );

      terms.add(
        tool.subCategory
      );
    }
  );

  return Array.from(
    terms
  ).slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Public UI helper API
   --------------------------------------------------------- */

export const TOOL_UI = {
  keyboard:
    handleToolKeyboardAction,

  navigation:
    resolveToolNavigationDirection,

  navigate:
    navigateToolCollection,

  focusTarget:
    getToolFocusTarget,

  aria:
    getToolAriaLabel,

  semantic:
    getToolSemanticData,

  accessibility:
    buildToolAccessibilityData,

  metadata:
    buildToolUIMetadata,

  metadataCollection:
    buildToolUIMetadataCollection,

  anchor:
    getToolAnchorId,

  categoryAnchor:
    getCategoryAnchorId,

  sectionAnchor:
    getSectionAnchorId,

  imageAlt:
    getToolImageAlt,

  thumbnail:
    getSafeToolThumbnail,

  count:
    formatToolCount,

  rating:
    formatToolRating,

  stars:
    getToolStarRating,

  quality:
    getToolQualityLabel,

  popularity:
    getToolPopularityLabel,

  status:
    getToolStatusLabel,

  emptyState:
    buildToolsEmptyState,

  suggestions:
    getToolSearchSuggestions,

  popularSearches:
    getPopularToolSearchTerms,
};

/* ---------------------------------------------------------
   UI readiness
   --------------------------------------------------------- */

export const TOOL_UI_READY =
  VALID_MARKETPLACE_TOOLS.length >
    0 &&
  MARKETPLACE_FILTER_OPTIONS
    .categories.length >
    0;
/* =========================================================
   TOOLS MARKETPLACE
   Part 19/20
   Final Marketplace Utilities + Export API
   ========================================================= */

/* ---------------------------------------------------------
   Tool validation report
   --------------------------------------------------------- */

export type ToolValidationReport = {
  valid: boolean;

  toolId: string;

  missingFields: string[];

  invalidFields: string[];

  warnings: string[];
};

/* ---------------------------------------------------------
   Validate single marketplace tool
   --------------------------------------------------------- */

function validateMarketplaceTool(
  tool: Tool
): ToolValidationReport {
  const missingFields: string[] =
    [];

  const invalidFields: string[] =
    [];

  const warnings: string[] =
    [];

  if (
    !tool.id ||
    !tool.id.trim()
  ) {
    missingFields.push(
      "id"
    );
  }

  if (
    !tool.title ||
    !tool.title.trim()
  ) {
    missingFields.push(
      "title"
    );
  }

  if (
    !tool.description ||
    !tool.description.trim()
  ) {
    missingFields.push(
      "description"
    );
  }

  if (
    !tool.category
  ) {
    missingFields.push(
      "category"
    );
  }

  if (
    !tool.subCategory
  ) {
    missingFields.push(
      "subCategory"
    );
  }

  if (
    !tool.route ||
    !tool.route.trim()
  ) {
    missingFields.push(
      "route"
    );
  }

  if (
    !tool.provider ||
    !tool.provider.trim()
  ) {
    missingFields.push(
      "provider"
    );
  }

  if (
    typeof tool.users !==
    "number"
  ) {
    invalidFields.push(
      "users"
    );
  } else if (
    tool.users < 0
  ) {
    invalidFields.push(
      "users"
    );
  }

  if (
    typeof tool.rating !==
    "number"
  ) {
    invalidFields.push(
      "rating"
    );
  } else if (
    tool.rating < 0 ||
    tool.rating > 5
  ) {
    invalidFields.push(
      "rating"
    );
  }

  if (
    !TOOL_CATEGORIES.includes(
      tool.category
    )
  ) {
    invalidFields.push(
      "category"
    );
  }

  if (
    !TOOL_PRICING_OPTIONS.includes(
      tool.pricing
    )
  ) {
    invalidFields.push(
      "pricing"
    );
  }

  if (
    !TOOL_TYPES.includes(
      tool.type
    )
  ) {
    invalidFields.push(
      "type"
    );
  }

  if (
    !Array.isArray(
      tool.features
    )
  ) {
    invalidFields.push(
      "features"
    );
  }

  if (
    !tool.thumbnail
  ) {
    warnings.push(
      "Missing thumbnail."
    );
  }

  if (
    !tool.badge
  ) {
    warnings.push(
      "Missing badge."
    );
  }

  return {
    valid:
      missingFields.length ===
        0 &&
      invalidFields.length ===
        0,

    toolId:
      tool.id,

    missingFields,

    invalidFields,

    warnings,
  };
}

/* ---------------------------------------------------------
   Validate complete marketplace
   --------------------------------------------------------- */

function validateMarketplaceDataset(): ToolValidationReport[] {
  return ALL_TOOLS.map(
    validateMarketplaceTool
  );
}

/* ---------------------------------------------------------
   Marketplace validation report
   --------------------------------------------------------- */

export const MARKETPLACE_VALIDATION_REPORT =
  validateMarketplaceDataset();

/* ---------------------------------------------------------
   Invalid tools
   --------------------------------------------------------- */

function getInvalidMarketplaceTools(): Tool[] {
  const invalidIds =
    new Set(
      MARKETPLACE_VALIDATION_REPORT
        .filter(
          (report) =>
            !report.valid
        )
        .map(
          (report) =>
            report.toolId
        )
    );

  return ALL_TOOLS.filter(
    (tool) =>
      invalidIds.has(
        tool.id
      )
  );
}

/* ---------------------------------------------------------
   Validation summary
   --------------------------------------------------------- */

function getMarketplaceValidationSummary() {
  const reports =
    MARKETPLACE_VALIDATION_REPORT;

  const valid =
    reports.filter(
      (report) =>
        report.valid
    ).length;

  const invalid =
    reports.length -
    valid;

  const warnings =
    reports.reduce(
      (
        total,
        report
      ) =>
        total +
        report.warnings
          .length,
      0
    );

  return {
    total:
      reports.length,

    valid,

    invalid,

    warnings,

    ready:
      invalid === 0,
  };
}

/* ---------------------------------------------------------
   Public validation summary
   --------------------------------------------------------- */

export const MARKETPLACE_VALIDATION_SUMMARY =
  getMarketplaceValidationSummary();

/* ---------------------------------------------------------
   Search index
   --------------------------------------------------------- */

type ToolSearchIndexEntry = {
  id: string;

  title: string;

  text: string;

  category: string;

  subCategory: string;

  provider: string;
};

/* ---------------------------------------------------------
   Build search index
   --------------------------------------------------------- */

function buildToolSearchIndex(): ToolSearchIndexEntry[] {
  return VALID_MARKETPLACE_TOOLS.map(
    (tool) => ({
      id:
        tool.id,

      title:
        normalizeToolText(
          tool.title
        ),

      text:
        normalizeToolText(
          [
            tool.title,
            tool.description,
            tool.category,
            tool.subCategory,
            tool.type,
            tool.provider,
            tool.badge,
            ...tool.features,
          ].join(" ")
        ),

      category:
        normalizeToolText(
          tool.category
        ),

      subCategory:
        normalizeToolText(
          tool.subCategory
        ),

      provider:
        normalizeToolText(
          tool.provider
        ),
    })
  );
}

/* ---------------------------------------------------------
   Marketplace search index
   --------------------------------------------------------- */

export const MARKETPLACE_SEARCH_INDEX =
  buildToolSearchIndex();

/* ---------------------------------------------------------
   Fast indexed search
   --------------------------------------------------------- */

function indexedToolSearch(
  query: string,
  limit = 24
): Tool[] {
  const normalizedQuery =
    normalizeToolText(
      query
    );

  if (
    !normalizedQuery
  ) {
    return getRecommendedTools(
      limit
    );
  }

  const parts =
    normalizedQuery
      .split(" ")
      .filter(Boolean);

  const matchedIds =
    MARKETPLACE_SEARCH_INDEX
      .map(
        (entry) => {
          let score = 0;

          if (
            entry.title ===
            normalizedQuery
          ) {
            score += 100;
          }

          if (
            entry.title.startsWith(
              normalizedQuery
            )
          ) {
            score += 60;
          }

          if (
            entry.title.includes(
              normalizedQuery
            )
          ) {
            score += 40;
          }

          if (
            entry.category.includes(
              normalizedQuery
            )
          ) {
            score += 25;
          }

          if (
            entry.subCategory.includes(
              normalizedQuery
            )
          ) {
            score += 20;
          }

          if (
            entry.provider.includes(
              normalizedQuery
            )
          ) {
            score += 15;
          }

          const allPartsMatch =
            parts.every(
              (part) =>
                entry.text.includes(
                  part
                )
            );

          if (
            allPartsMatch
          ) {
            score += 30;
          }

          return {
            id:
              entry.id,

            score,
          };
        }
      )
      .filter(
        (item) =>
          item.score >
          0
      )
      .sort(
        (a, b) =>
          b.score -
          a.score
      )
      .slice(
        0,
        limit
      );

  return matchedIds
    .map(
      (item) =>
        findToolById(
          item.id
        )
    )
    .filter(
      (
        tool
      ): tool is Tool =>
        Boolean(tool)
    );
}

/* ---------------------------------------------------------
   Search suggestions
   --------------------------------------------------------- */

function buildToolSearchSuggestions(
  query: string,
  limit = 8
): {
  tools: Tool[];

  categories: ToolCategory[];

  subCategories: ToolSubCategory[];

  providers: string[];
} {
  const normalized =
    normalizeToolText(
      query
    );

  const tools =
    indexedToolSearch(
      normalized,
      limit
    );

  const categories =
    getAvailableCategories().filter(
      (category) =>
        normalizeToolText(
          category
        ).includes(
          normalized
        )
    );

  const subCategories =
    getAvailableSubCategories().filter(
      (subCategory) =>
        normalizeToolText(
          subCategory
        ).includes(
          normalized
        )
    );

  const providers =
    getAvailableProviders().filter(
      (provider) =>
        normalizeToolText(
          provider
        ).includes(
          normalized
        )
    );

  return {
    tools,

    categories,

    subCategories,

    providers,
  };
}

/* ---------------------------------------------------------
   Marketplace counts
   --------------------------------------------------------- */

function getMarketplaceCounts() {
  return {
    tools:
      VALID_MARKETPLACE_TOOLS.length,

    categories:
      getAvailableCategories()
        .length,

    subCategories:
      getAvailableSubCategories()
        .length,

    providers:
      getAvailableProviders()
        .length,

    pricingOptions:
      getAvailablePricingOptions()
        .length,

    toolTypes:
      getAvailableToolTypes()
        .length,

    features:
      getAvailableToolFeatures()
        .length,
  };
}

/* ---------------------------------------------------------
   Marketplace overview
   --------------------------------------------------------- */

function getMarketplaceOverview() {
  const counts =
    getMarketplaceCounts();

  return {
    ...counts,

    totalUsers:
      MARKETPLACE_TOTAL_USERS,

    averageRating:
      MARKETPLACE_AVERAGE_RATING,

    featured:
      MARKETPLACE_STATISTICS
        .featured,

    trending:
      MARKETPLACE_STATISTICS
        .trending,

    newTools:
      MARKETPLACE_STATISTICS
        .newTools,

    verified:
      MARKETPLACE_STATISTICS
        .verified,

    aiPowered:
      MARKETPLACE_STATISTICS
        .aiPowered,

    free:
      MARKETPLACE_STATISTICS
        .free,

    freemium:
      MARKETPLACE_STATISTICS
        .freemium,

    pro:
      MARKETPLACE_STATISTICS
        .pro,

    enterprise:
      MARKETPLACE_STATISTICS
        .enterprise,
  };
}

/* ---------------------------------------------------------
   Tool collection deduplication
   --------------------------------------------------------- */

function deduplicateTools(
  tools: Tool[]
): Tool[] {
  const seen =
    new Set<string>();

  return tools.filter(
    (tool) => {
      if (
        seen.has(
          tool.id
        )
      ) {
        return false;
      }

      seen.add(
        tool.id
      );

      return true;
    }
  );
}

/* ---------------------------------------------------------
   Merge tool collections
   --------------------------------------------------------- */

function mergeToolCollections(
  ...collections: Tool[][]
): Tool[] {
  return deduplicateTools(
    collections.flat()
  );
}

/* ---------------------------------------------------------
   Build mega recommendation
   --------------------------------------------------------- */

function buildMegaRecommendationFeed(
  favoriteIds: string[] = [],
  limit = 24
): Tool[] {
  const featured =
    getFeaturedMarketplaceTools(
      8
    );

  const trending =
    getTrendingMarketplaceTools(
      8
    );

  const personalized =
    getPersonalizedToolFeed(
      favoriteIds,
      8
    );

  const highlyRated =
    getHighlyRatedTools(
      8
    );

  const free =
    getBestFreeMarketplaceTools(
      8
    );

  return mergeToolCollections(
    personalized,
    featured,
    trending,
    highlyRated,
    free
  ).slice(
    0,
    limit
  );
}

/* ---------------------------------------------------------
   Build category overview
   --------------------------------------------------------- */

function buildCategoryOverview() {
  return getAvailableCategories().map(
    (category) => ({
      category,

      count:
        getCategoryToolCount(
          category
        ),

      description:
        CATEGORY_DESCRIPTIONS[
          category
        ],

      tools:
        getRecommendedByCategory(
          category,
          6
        ),

      popular:
        getPopularToolsByCategory(
          category,
          3
        ),
    })
  );
}

/* ---------------------------------------------------------
   Build provider overview
   --------------------------------------------------------- */

function buildProviderOverview() {
  return getAvailableProviders().map(
    (provider) => ({
      provider,

      count:
        getProviderToolCount(
          provider
        ),

      tools:
        toolsByProvider(
          provider
        ).slice(
          0,
          6
        ),
    })
  );
}

/* ---------------------------------------------------------
   Build feature overview
   --------------------------------------------------------- */

function buildFeatureOverview() {
  return getAvailableToolFeatures().map(
    (feature) => ({
      feature,

      count:
        getFeatureToolCount(
          feature
        ),

      tools:
        toolsByFeature(
          feature
        ).slice(
          0,
          6
        ),
    })
  );
}

/* ---------------------------------------------------------
   Marketplace export payload
   --------------------------------------------------------- */

function buildMarketplaceExport() {
  return {
    version:
      "1.0",

    generatedAt:
      new Date().toISOString(),

    overview:
      getMarketplaceOverview(),

    validation:
      MARKETPLACE_VALIDATION_SUMMARY,

    categories:
      buildCategoryOverview(),

    providers:
      buildProviderOverview(),

    features:
      buildFeatureOverview(),

    collections:
      UNIQUE_DISCOVERY_SECTIONS,

    statistics:
      MARKETPLACE_STATISTICS,
  };
}

/* ---------------------------------------------------------
   Public marketplace export
   --------------------------------------------------------- */

export const MARKETPLACE_EXPORT =
  buildMarketplaceExport();

/* ---------------------------------------------------------
   Final marketplace API
   --------------------------------------------------------- */

export const TOOLS_MARKETPLACE_API =
  {
    data:
      VALID_MARKETPLACE_TOOLS,

    all:
      ALL_TOOLS,

    normalized:
      NORMALIZED_TOOLS,

    valid:
      VALID_MARKETPLACE_TOOLS,

    search:
      indexedToolSearch,

    suggestions:
      buildToolSearchSuggestions,

    discover:
      discoverMarketplaceTools,

    filters:
      MARKETPLACE_FILTER_OPTIONS,

    categories:
      MARKETPLACE_CATEGORY_INFO,

    collections:
      UNIQUE_DISCOVERY_SECTIONS,

    recommendations:
      getToolRecommendations,

    megaFeed:
      buildMegaRecommendationFeed,

    favorites:
      getFavoriteTools,

    recent:
      getRecentTools,

    personal:
      getPersonalizedToolFeed,

    analytics:
      TOOL_ANALYTICS,

    actions:
      TOOL_ACTIONS,

    ui:
      TOOL_UI,

    state:
      MARKETPLACE_STATE,

    validation:
      MARKETPLACE_VALIDATION_SUMMARY,

    overview:
      getMarketplaceOverview,

    export:
      MARKETPLACE_EXPORT,
  };

/* ---------------------------------------------------------
   Final readiness checks
   --------------------------------------------------------- */

export const TOOLS_MARKETPLACE_READY =
  Boolean(
    VALID_MARKETPLACE_TOOLS.length
  ) &&
  MARKETPLACE_VALIDATION_SUMMARY
    .ready &&
  MARKETPLACE_HEALTH.ready &&
  RECOMMENDATION_ENGINE_READY &&
  TOOL_ACTION_ENGINE_READY &&
  TOOL_UI_READY &&
  TOOL_ANALYTICS_READY;

/* ---------------------------------------------------------
   Build status
   --------------------------------------------------------- */

export const TOOLS_BUILD_STATUS = {
  dataset:
    VALID_MARKETPLACE_TOOLS.length >
    0,

  validation:
    MARKETPLACE_VALIDATION_SUMMARY
      .ready,

  search:
    MARKETPLACE_SEARCH_INDEX
      .length > 0,

  filters:
    MARKETPLACE_FILTER_OPTIONS
      .categories.length > 0,

  recommendations:
    RECOMMENDATION_ENGINE_READY,

  actions:
    TOOL_ACTION_ENGINE_READY,

  ui:
    TOOL_UI_READY,

  analytics:
    TOOL_ANALYTICS_READY,

  marketplace:
    TOOLS_MARKETPLACE_READY,
};

/* ---------------------------------------------------------
   Final helper
   --------------------------------------------------------- */

function isToolsMarketplaceReady(): boolean {
  return (
    TOOLS_MARKETPLACE_READY
  );
}

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
/* =========================================================
   TOOLS MARKETPLACE
   Part 20/20
   Final React Component + Complete Marketplace UI
   ========================================================= */

export default function Tools() {
  const [
    searchQuery,
    setSearchQuery,
  ] = React.useState("");

  const [
    activeTab,
    setActiveTab,
  ] = React.useState<ToolsTab>(
    "all"
  );

  const [
    filters,
    setFilters,
  ] = React.useState<ToolsFilterState>(
    createDefaultToolFilters()
  );

  const [
    sortMode,
    setSortMode,
  ] = React.useState<ToolsSortMode>(
    "Recommended"
  );

  const [
    page,
    setPage,
  ] = React.useState(1);

  const [
    perPage,
    setPerPage,
  ] = React.useState(
    TOOLS_PER_PAGE_GRID
  );

  const [
    favorites,
    setFavorites,
  ] = React.useState<
    string[]
  >([]);

  const [
    selectedTool,
    setSelectedTool,
  ] = React.useState<
    Tool | null
  >(null);

  const [
    mobileFiltersOpen,
    setMobileFiltersOpen,
  ] = React.useState(
    false
  );

  const [
    copiedToolId,
    setCopiedToolId,
  ] = React.useState<
    string | null
  >(null);

  /* -------------------------------------------------------
     Load persisted state
     ------------------------------------------------------- */

  React.useEffect(() => {
    setFavorites(
      loadFavoriteToolIds()
    );
  }, []);

  /* -------------------------------------------------------
     Current marketplace result
     ------------------------------------------------------- */

  const marketplaceResult =
    React.useMemo(
      () =>
        discoverMarketplaceTools({
          query:
            searchQuery,

          category:
            filters.category,

          subCategory:
            filters.subCategory,

          pricing:
            filters.pricing,

          type:
            filters.type,

          feature:
            filters.feature,

          provider:
            filters.provider,

          sort:
            sortMode,

          page,

          perPage,

          tab:
            activeTab,

          favorites,
        }),
      [
        searchQuery,
        filters,
        sortMode,
        page,
        perPage,
        activeTab,
        favorites,
      ]
    );

  /* -------------------------------------------------------
     Pagination
     ------------------------------------------------------- */

  const pagination =
    marketplaceResult.pagination;

  /* -------------------------------------------------------
     Category data
     ------------------------------------------------------- */

  const categoryInfo =
    MARKETPLACE_CATEGORY_INFO;

  /* -------------------------------------------------------
     Active filter count
     ------------------------------------------------------- */

  const activeFilterCount =
    countActiveFilters(
      filters
    );

  /* -------------------------------------------------------
     Search suggestions
     ------------------------------------------------------- */

  const suggestions =
    React.useMemo(
      () =>
        getToolSearchSuggestions(
          searchQuery,
          6
        ),
      [
        searchQuery,
      ]
    );

  /* -------------------------------------------------------
     Toggle favorite
     ------------------------------------------------------- */

  const handleFavorite =
    React.useCallback(
      (
        tool: Tool
      ) => {
        const next =
          toggleToolFavorite(
            tool.id,
            favorites
          );

        setFavorites(
          next
        );

        saveFavoriteToolIds(
          next
        );

        trackToolFavorite(
          tool.id,
          next.includes(
            tool.id
          )
        );
      },
      [
        favorites,
      ]
    );

  /* -------------------------------------------------------
     Open tool
     ------------------------------------------------------- */

  const handleOpenTool =
    React.useCallback(
      (
        tool: Tool
      ) => {
        trackToolView(
          tool.id
        );

        trackToolOpen(
          tool.id
        );

        addRecentTool(
          tool.id
        );

        recordToolUsage(
          tool.id
        );

        const route =
          normalizeToolRoute(
            tool.route
          );

        window.location.href =
          route;
      },
      []
    );

  /* -------------------------------------------------------
     Open details
     ------------------------------------------------------- */

  const handleDetails =
    React.useCallback(
      (
        tool: Tool
      ) => {
        setSelectedTool(
          tool
        );

        trackToolView(
          tool.id
        );
      },
      []
    );

  /* -------------------------------------------------------
     Copy tool URL
     ------------------------------------------------------- */

  const handleCopy =
    React.useCallback(
      async (
        tool: Tool
      ) => {
        const success =
          await copyToolUrl(
            tool
          );

        if (success) {
          setCopiedToolId(
            tool.id
          );

          trackToolCopy(
            tool.id
          );

          window.setTimeout(
            () => {
              setCopiedToolId(
                null
              );
            },
            1800
          );
        }
      },
      []
    );

  /* -------------------------------------------------------
     Share tool
     ------------------------------------------------------- */

  const handleShare =
    React.useCallback(
      async (
        tool: Tool
      ) => {
        const shared =
          await shareToolWithNativeAPI(
            tool
          );

        if (!shared) {
          await copyToolUrl(
            tool
          );
        }

        trackToolShare(
          tool.id
        );
      },
      []
    );

  /* -------------------------------------------------------
     Search
     ------------------------------------------------------- */

  const handleSearch =
    (
      value: string
    ) => {
      setSearchQuery(
        value
      );

      setPage(1);

      if (
        value.trim()
      ) {
        trackToolSearch(
          suggestions[0]?.id ??
            ""
        );
      }
    };

  /* -------------------------------------------------------
     Clear filters
     ------------------------------------------------------- */

  const handleClearFilters =
    () => {
      setFilters(
        createDefaultToolFilters()
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Clear all
     ------------------------------------------------------- */

  const handleClearAll =
    () => {
      setSearchQuery(
        ""
      );

      setFilters(
        createDefaultToolFilters()
      );

      setSortMode(
        "Recommended"
      );

      setActiveTab(
        "all"
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change category
     ------------------------------------------------------- */

  const handleCategoryChange =
    (
      category:
        | "All"
        | ToolCategory
    ) => {
      setFilters(
        (current) =>
          updateToolCategory(
            {
              filters:
                current,

              search:
                createDefaultSearchState(),

              tab:
                "all",

              favorites: [],

              mobileFiltersOpen:
                false,

              selectedToolId:
                null,
            },
            category
          ).filters
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change sub-category
     ------------------------------------------------------- */

  const handleSubCategoryChange =
    (
      subCategory:
        | "All"
        | ToolSubCategory
    ) => {
      setFilters(
        (current) => ({
          ...current,

          subCategory,
        })
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change pricing
     ------------------------------------------------------- */

  const handlePricingChange =
    (
      pricing:
        | "All Pricing"
        | ToolPricing
    ) => {
      setFilters(
        (current) => ({
          ...current,

          pricing,
        })
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change type
     ------------------------------------------------------- */

  const handleTypeChange =
    (
      type:
        | "All Types"
        | ToolType
    ) => {
      setFilters(
        (current) => ({
          ...current,

          type,
        })
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change feature
     ------------------------------------------------------- */

  const handleFeatureChange =
    (
      feature:
        | "All Features"
        | ToolFeature
    ) => {
      setFilters(
        (current) => ({
          ...current,

          feature,
        })
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change provider
     ------------------------------------------------------- */

  const handleProviderChange =
    (
      provider:
        | "All Providers"
        | string
    ) => {
      setFilters(
        (current) => ({
          ...current,

          provider,
        })
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change tab
     ------------------------------------------------------- */

  const handleTabChange =
    (
      tab: ToolsTab
    ) => {
      setActiveTab(
        tab
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Change sort
     ------------------------------------------------------- */

  const handleSortChange =
    (
      value: string
    ) => {
      setSortMode(
        parseToolsSort(
          value
        )
      );

      setPage(1);
    };

  /* -------------------------------------------------------
     Result state
     ------------------------------------------------------- */

  const hasResults =
    marketplaceResult.tools
      .length > 0;

  const emptyState =
    buildToolsEmptyState(
      searchQuery,
      filters
    );

  /* -------------------------------------------------------
     Render
     ------------------------------------------------------- */

  return (
    <section
      id="ai-tools"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* ===================================================
          BACKGROUND
          =================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
            ================================================= */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            <Sparkles className="h-4 w-4" />

            AI TOOLS MARKETPLACE
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              In One Place
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Discover AI-powered and traditional tools for music,
            voice, video, image, code, business, marketing,
            education, productivity, research and automation.
          </p>

        </div>

        {/* =================================================
            MARKETPLACE STATS
            ================================================= */}

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">
              {formatToolCount(
                MARKETPLACE_STATISTICS.total
              )}
            </div>

            <div className="mt-1 text-sm text-muted-foreground">
              Tools
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">
              {formatToolCount(
                MARKETPLACE_STATISTICS.categories
              )}
            </div>

            <div className="mt-1 text-sm text-muted-foreground">
              Categories
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">
              {MARKETPLACE_AVERAGE_RATING.toFixed(
                1
              )}
              /5
            </div>

            <div className="mt-1 text-sm text-muted-foreground">
              Avg. Rating
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <div className="text-2xl font-black text-white">
              {formatToolCount(
                MARKETPLACE_TOTAL_USERS
              )}
            </div>

            <div className="mt-1 text-sm text-muted-foreground">
              Users
            </div>
          </div>

        </div>

        {/* =================================================
            SEARCH
            ================================================= */}

        <div className="mx-auto mt-12 max-w-4xl">

          <div className="relative">

            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              value={
                searchQuery
              }
              onChange={(event) =>
                handleSearch(
                  event.target.value
                )
              }
              placeholder="Search  AI tools..."
              aria-label="Search AI tools"
              className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-14 text-base text-white outline-none backdrop-blur transition placeholder:text-muted-foreground focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() =>
                  setSearchQuery("")
                }
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}

          </div>

          {/* Search suggestions */}

          {searchQuery &&
            suggestions.length > 0 && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-2 shadow-2xl backdrop-blur-xl">

                {suggestions.map(
                  (tool) => (
                    <button
                      key={
                        tool.id
                      }
                      type="button"
                      onClick={() => {
                        setSearchQuery(
                          tool.title
                        );

                        setPage(
                          1
                        );
                      }}
                      className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-white/10"
                    >
                      <span className="text-2xl">
                        {tool.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold text-white">
                          {
                            tool.title
                          }
                        </span>

                        <span className="block truncate text-xs text-muted-foreground">
                          {
                            tool.category
                          }{" "}
                          ·{" "}
                          {
                            tool.subCategory
                          }
                        </span>
                      </span>

                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  )
                )}

              </div>
            )}

        </div>

        {/* =================================================
            TABS
            ================================================= */}

        <div className="mt-10 overflow-x-auto pb-2">

          <div className="flex min-w-max items-center justify-center gap-2">

            {(
              Object.keys(
                TOOL_TAB_LABELS
              ) as ToolsTab[]
            ).map(
              (tab) => {
                const Icon =
                  TOOL_TAB_ICONS[
                    tab
                  ];

                const active =
                  activeTab ===
                  tab;

                return (
                  <button
                    key={
                      tab
                    }
                    type="button"
                    onClick={() =>
                      handleTabChange(
                        tab
                      )
                    }
                    className={[
                      "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
                        : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                    ].join(
                      " "
                    )}
                  >
                    <Icon className="h-4 w-4" />

                    {
                      TOOL_TAB_LABELS[
                        tab
                      ]
                    }

                    <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs">
                      {getToolsTabCount(
                        tab,
                        favorites
                      )}
                    </span>
                  </button>
                );
              }
            )}

          </div>

        </div>

        {/* =================================================
            CATEGORY QUICK SELECT
            ================================================= */}

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          <button
            type="button"
            onClick={() =>
              handleCategoryChange(
                "All"
              )
            }
            className={[
              "rounded-2xl border p-4 text-left transition",
              filters.category ===
              "All"
                ? "border-violet-500/60 bg-violet-500/10"
                : "border-white/10 bg-white/5 hover:border-white/20",
            ].join(
              " "
            )}
          >
            <div className="flex items-center justify-between">

              <span className="font-semibold text-white">
                All Categories
              </span>

              <Grid3X3 className="h-5 w-5 text-violet-400" />

            </div>

            <div className="mt-2 text-sm text-muted-foreground">
              {
                VALID_MARKETPLACE_TOOLS.length
              }{" "}
              tools
            </div>
          </button>

          {categoryInfo
            .slice(
              0,
              7
            )
            .map(
              (category) => {
                const Icon =
                  category.icon;

                const active =
                  filters.category ===
                  category.id;

                return (
                  <button
                    key={
                      category.id
                    }
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        category.id
                      )
                    }
                    className={[
                      "rounded-2xl border p-4 text-left transition",
                      active
                        ? "border-violet-500/60 bg-violet-500/10"
                        : "border-white/10 bg-white/5 hover:border-white/20",
                    ].join(
                      " "
                    )}
                  >
                    <div className="flex items-center justify-between">

                      <span className="font-semibold text-white">
                        {
                          category.title
                        }
                      </span>

                      <Icon className="h-5 w-5 text-violet-400" />

                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                      {
                        category.count
                      }{" "}
                      tools
                    </div>

                  </button>
                );
              }
            )}

        </div>

        {/* =================================================
            FILTER BAR
            ================================================= */}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            <div className="flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(
                    !mobileFiltersOpen
                  )
                }
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <SlidersHorizontal className="h-4 w-4" />

                Filters

                {activeFilterCount >
                  0 && (
                  <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs">
                    {
                      activeFilterCount
                    }
                  </span>
                )}
              </button>

              {/* Category */}

              <select
                value={
                  filters.category
                }
                onChange={(
                  event
                ) =>
                  handleCategoryChange(
                    parseToolCategory(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All">
                  All Categories
                </option>

                {getAvailableCategories().map(
                  (
                    category
                  ) => (
                    <option
                      key={
                        category
                      }
                      value={
                        category
                      }
                    >
                      {
                        category
                      }
                    </option>
                  )
                )}
              </select>

              {/* Pricing */}

              <select
                value={
                  filters.pricing
                }
                onChange={(
                  event
                ) =>
                  handlePricingChange(
                    parseToolPricing(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Pricing">
                  All Pricing
                </option>

                {getAvailablePricingOptions().map(
                  (
                    pricing
                  ) => (
                    <option
                      key={
                        pricing
                      }
                      value={
                        pricing
                      }
                    >
                      {
                        pricing
                      }
                    </option>
                  )
                )}
              </select>

              {/* Type */}

              <select
                value={
                  filters.type
                }
                onChange={(
                  event
                ) =>
                  handleTypeChange(
                    parseToolType(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Types">
                  All Types
                </option>

                {getAvailableToolTypes().map(
                  (type) => (
                    <option
                      key={
                        type
                      }
                      value={
                        type
                      }
                    >
                      {
                        type
                      }
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="flex items-center gap-3">

              <span className="hidden text-sm text-muted-foreground sm:block">
                {getResultRangeText(
                  pagination
                )}
              </span>

              <select
                value={
                  sortMode
                }
                onChange={(
                  event
                ) =>
                  handleSortChange(
                    event.target
                      .value
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
                aria-label="Sort tools"
              >
                <option>
                  Recommended
                </option>

                <option>
                  Popular
                </option>

                <option>
                  Newest
                </option>

                <option>
                  Highest Rated
                </option>

                <option>
                  Most Used
                </option>
              </select>

            </div>

          </div>

          {/* Extended filters */}

          {mobileFiltersOpen && (
            <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* Sub-category */}

              <select
                value={
                  filters.subCategory
                }
                onChange={(
                  event
                ) =>
                  handleSubCategoryChange(
                    parseToolSubCategory(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All">
                  All Sub-Categories
                </option>

                {getAvailableSubCategories(
                  filters.category
                ).map(
                  (
                    subCategory
                  ) => (
                    <option
                      key={
                        subCategory
                      }
                      value={
                        subCategory
                      }
                    >
                      {
                        subCategory
                      }
                    </option>
                  )
                )}
              </select>

              {/* Feature */}

              <select
                value={
                  filters.feature
                }
                onChange={(
                  event
                ) =>
                  handleFeatureChange(
                    parseToolFeature(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Features">
                  All Features
                </option>

                {getAvailableToolFeatures().map(
                  (
                    feature
                  ) => (
                    <option
                      key={
                        feature
                      }
                      value={
                        feature
                      }
                    >
                      {
                        feature
                      }
                    </option>
                  )
                )}
              </select>

              {/* Provider */}

              <select
                value={
                  filters.provider
                }
                onChange={(
                  event
                ) =>
                  handleProviderChange(
                    parseToolProvider(
                      event.target
                        .value
                    )
                  )
                }
                className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-white outline-none"
              >
                <option value="All Providers">
                  All Providers
                </option>

                {getAvailableProviders().map(
                  (
                    provider
                  ) => (
                    <option
                      key={
                        provider
                      }
                      value={
                        provider
                      }
                    >
                      {
                        provider
                      }
                    </option>
                  )
                )}
              </select>

              <button
                type="button"
                onClick={
                  handleClearFilters
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Clear Filters
              </button>

            </div>
          )}

        </div>

        {/* =================================================
            TOOL GRID
            ================================================= */}

        {hasResults ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {marketplaceResult.tools.map(
              (tool) => {
                const favorite =
                  isToolFavorite(
                    tool.id,
                    favorites
                  );

                return (
                  <article
                    key={
                      tool.id
                    }
                    id={getToolAnchorId(
                      tool
                    )}
                    tabIndex={
                      0
                    }
                    aria-label={getToolAriaLabel(
                      tool
                    )}
                    onKeyDown={(
                      event
                    ) => {
                      const action =
                        handleToolKeyboardAction(
                          event
                        );

                      if (
                        action ===
                        "open"
                      ) {
                        event.preventDefault();

                        handleOpenTool(
                          tool
                        );
                      }

                      if (
                        action ===
                        "favorite"
                      ) {
                        event.preventDefault();

                        handleFavorite(
                          tool
                        );
                      }

                      if (
                        action ===
                        "details"
                      ) {
                        event.preventDefault();

                        handleDetails(
                          tool
                        );
                      }

                      if (
                        action ===
                        "share"
                      ) {
                        event.preventDefault();

                        handleShare(
                          tool
                        );
                      }
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/[0.07] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/60"
                  >

                    {/* Card top */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-3xl">
                        {
                          tool.icon
                        }
                      </div>

                      <div className="flex items-center gap-2">

                        <button
                          type="button"
                          onClick={() =>
                            handleFavorite(
                              tool
                            )
                          }
                          aria-label={getToolFavoriteLabel(
                            tool,
                            favorite
                          )}
                          className={[
                            "rounded-xl p-2 transition",
                            favorite
                              ? "bg-pink-500/10 text-pink-400"
                              : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                          ].join(
                            " "
                          )}
                        >
                          <Heart
                            className="h-5 w-5"
                            fill={
                              favorite
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDetails(
                              tool
                            )
                          }
                          aria-label={getToolDetailsLabel(
                            tool
                          )}
                          className="rounded-xl bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                        >
                          <Info className="h-5 w-5" />
                        </button>

                      </div>

                    </div>

                    {/* Badge */}

                    <div className="mt-5 flex flex-wrap items-center gap-2">

                      <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                        {
                          getToolBadge(
                            tool
                          )
                        }
                      </span>

                      {tool.verified && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />

                          Verified
                        </span>
                      )}

                      {tool.aiPowered && (
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                          AI
                        </span>
                      )}

                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-xl font-bold text-white">
                      {
                        tool.title
                      }
                    </h3>

                    {/* Description */}

                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-muted-foreground">
                      {
                        tool.description
                      }
                    </p>

                    {/* Category */}

                    <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">

                      <span>
                        {
                          tool.category
                        }
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {
                          tool.subCategory
                        }
                      </span>

                    </div>

                    {/* Rating */}

                    <div className="mt-5 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div className="flex items-center gap-0.5">
                          {getToolStarRating(
                            tool.rating
                          ).map(
                            (
                              star,
                              index
                            ) => (
                              <Star
                                key={
                                  index
                                }
                                className={[
                                  "h-4 w-4",
                                  star.filled ||
                                  star.half
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground",
                                ].join(
                                  " "
                                )}
                              />
                            )
                          )}
                        </div>

                        <span className="text-sm font-semibold text-white">
                          {formatToolRating(
                            tool.rating
                          )}
                        </span>

                      </div>

                      <span className="text-xs text-muted-foreground">
                        {formatToolCount(
                          tool.users
                        )}{" "}
                        users
                      </span>

                    </div>

                    {/* Features */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {getToolFeatureLabels(
                        tool,
                        3
                      ).map(
                        (
                          feature
                        ) => (
                          <span
                            key={
                              feature
                            }
                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {
                              feature
                            }
                          </span>
                        )
                      )}

                    </div>

                    {/* Bottom actions */}

                    <div className="mt-7 flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          handleOpenTool(
                            tool
                          )
                        }
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                      >
                        Open Tool

                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleShare(
                            tool
                          )
                        }
                        aria-label={getToolShareLabel(
                          tool
                        )}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            tool
                          )
                        }
                        aria-label={`Copy ${tool.title} link`}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                      >
                        {copiedToolId ===
                        tool.id ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                  </article>
                );
              }
            )}

          </div>
        ) : (
          /* =================================================
             EMPTY STATE
             ================================================= */

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
              <Search className="h-7 w-7 text-violet-400" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {
                emptyState.title
              }
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              {
                emptyState.description
              }
            </p>

            <button
              type="button"
              onClick={
                handleClearAll
              }
              className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Browse All Tools
            </button>

          </div>
        )}

        {/* =================================================
            PAGINATION
            ================================================= */}

        {pagination.totalPages >
          1 && (
          <div className="mt-12 flex flex-col items-center justify-between gap-5 sm:flex-row">

            <div className="text-sm text-muted-foreground">
              {
                getResultRangeText(
                  pagination
                )
              }
            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                disabled={
                  !pagination.hasPrevious
                }
                onClick={() =>
                  setPage(
                    (current) =>
                      Math.max(
                        1,
                        current -
                          1
                      )
                  )
                }
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {buildPageNumbers(
                pagination.page,
                pagination.totalPages
              ).map(
                (
                  item,
                  index
                ) =>
                  item ===
                  "ellipsis" ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-muted-foreground"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={
                        item
                      }
                      type="button"
                      onClick={() =>
                        setPage(
                          clampToolsPage(
                            item,
                            pagination.totalPages
                          )
                        )
                      }
                      className={[
                        "min-w-10 rounded-xl px-3 py-2 text-sm font-semibold transition",
                        pagination.page ===
                        item
                          ? "bg-violet-600 text-white"
                          : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white",
                      ].join(
                        " "
                      )}
                    >
                      {
                        item
                      }
                    </button>
                  )
              )}

              <button
                type="button"
                disabled={
                  !pagination.hasNext
                }
                onClick={() =>
                  setPage(
                    (current) =>
                      current +
                      1
                  )
                }
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>

          </div>
        )}

        {/* =================================================
            DISCOVERY COLLECTIONS
            ================================================= */}

        <div className="mt-24">

          <div className="text-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400">
              DISCOVER
            </span>

            <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Explore More AI Tools
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Browse curated collections based on popularity,
              category, pricing and capabilities.
            </p>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {MARKETPLACE_COLLECTIONS.slice(
              0,
              6
            ).map(
              (collection) => (
                <div
                  key={
                    collection.id
                  }
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {
                          collection.title
                        }
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {
                          collection.description
                        }
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-violet-400" />

                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {collection.tools
                      .slice(
                        0,
                        4
                      )
                      .map(
                        (tool) => (
                          <button
                            key={
                              tool.id
                            }
                            type="button"
                            onClick={() =>
                              handleDetails(
                                tool
                              )
                            }
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3 text-left transition hover:bg-white/10"
                          >
                            <span className="text-2xl">
                              {
                                tool.icon
                              }
                            </span>

                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold text-white">
                                {
                                  tool.title
                                }
                              </span>

                              <span className="block text-xs text-muted-foreground">
                                {
                                  tool.category
                                }
                              </span>
                            </span>
                          </button>
                        )
                      )}

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* =================================================
            FINAL CTA
            ================================================= */}

        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/5 to-cyan-500/10 p-8 text-center sm:p-12">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_55%)]" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl">
              <Sparkles className="h-7 w-7 text-white" />
            </div>

            <h3 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Ready to Create More?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Explore the marketplace and find the right
              tools for your next project.
            </p>

            <button
              type="button"
              onClick={
                handleClearAll
              }
              className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Explore All Tools
            </button>

          </div>

        </div>

      </div>

      {/* ===================================================
          TOOL DETAILS MODAL
          =================================================== */}

      {selectedTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedTool.title} details`}
          onClick={() =>
            setSelectedTool(
              null
            )
          }
        >

          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-background p-6 shadow-2xl sm:p-8"
            onClick={(
              event
            ) =>
              event.stopPropagation()
            }
          >

            <div className="flex items-start justify-between gap-5">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-3xl">
                  {
                    selectedTool.icon
                  }
                </div>

                <div>

                  <h3 className="text-2xl font-black text-white">
                    {
                      selectedTool.title
                    }
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {
                      selectedTool.provider
                    }
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedTool(
                    null
                  )
                }
                aria-label="Close tool details"
                className="rounded-xl bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <div className="mt-7 flex flex-wrap gap-2">

              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                {
                  getToolPricingLabel(
                    selectedTool
                  )
                }
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {
                  selectedTool.category
                }
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

            <p className="mt-7 leading-8 text-muted-foreground">
              {
                selectedTool.description
              }
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {formatToolRating(
                    selectedTool.rating
                  )}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  Rating
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {formatToolCount(
                    selectedTool.users
                  )}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  Users
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {
                    selectedTool.type
                  }
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  Type
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {getToolUsageCount(
                    selectedTool.id
                  )}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  Your Uses
                </div>
              </div>

            </div>

            <div className="mt-7">

              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Features
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">

                {selectedTool.features.map(
                  (
                    feature
                  ) => (
                    <span
                      key={
                        feature
                      }
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground"
                    >
                      {
                        feature
                      }
                    </span>
                  )
                )}

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => {
                  handleOpenTool(
                    selectedTool
                  );
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3.5 font-bold text-white transition hover:scale-[1.02]"
              >
                Open Tool

                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleFavorite(
                    selectedTool
                  )
                }
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                {isToolFavorite(
                  selectedTool.id,
                  favorites
                )
                  ? "Remove Favorite"
                  : "Add Favorite"}
              </button>

              <button
                type="button"
                onClick={() =>
                  handleShare(
                    selectedTool
                  )
                }
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

/* =========================================================
   FINAL EXPORTS
   ========================================================= */

export {
  getToolRecommendations,
  getRelatedMarketplaceTools,
  getSimilarMarketplaceTools,
  getAlternativeMarketplaceTools,
  getRecommendedTools,
  getTrendingMarketplaceTools,
  getNewestTools,
  getFeaturedMarketplaceTools,
  getFreeMarketplaceTools,
  getBestFreeMarketplaceTools,
  getBestProMarketplaceTools,
  getAIMarketplaceTools,
  getNonAIMarketplaceTools,
  getVerifiedMarketplaceTools,
  getHighlyRatedTools,
  getMostUsedTools,
  getRecentTools,
  getFavoriteTools,
  getPersonalizedToolFeed,
  getToolUsageCount,
  addRecentTool,
  recordToolUsage,
  clearRecentTools,
  loadFavoriteToolIds,
  saveFavoriteToolIds,
  toggleToolFavorite,
  formatToolUsers,
  normalizeToolText,
  normalizeToolRoute,
  findToolById,
  findToolByRoute,
  toolsByCategory,
  toolsBySubCategory,
  toolsByPricing,
  toolsByType,
  toolsByFeature,
  toolsByProvider,
  searchTools,
  filterMarketplaceTools,
  sortMarketplaceTools,
  buildMarketplaceResults,
  buildPagination,
  paginateTools,
  buildPageNumbers,
  countActiveFilters,
  createDefaultToolFilters,
  createDefaultSearchState,
};
