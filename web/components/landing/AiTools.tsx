"use client";

import {
  ArrowRight,
  ArrowUpRight,
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

import { useEffect, useMemo, useState } from "react";

/* =========================================================
   TOOLS MARKETPLACE
   Part 01: Core Types & Constants
   ========================================================= */

export type ToolBadge = "Popular" | "New" | "Pro" | "Free" | "Beta" | "Trending" | "AI" | "Enterprise" | "Featured";
export type ToolPricing = "Free" | "Freemium" | "Pro" | "Enterprise";
export type ToolCategory = "Music" | "Voice" | "Video" | "Image" | "Code" | "Business" | "Marketing" | "Education" | "Productivity" | "Research" | "Audio" | "Design" | "Data" | "Automation";
export type ToolSubCategory = "Song Generation" | "Lyrics" | "Singing" | "Voice" | "Voice Clone" | "Audio Editing" | "Music Production" | "Podcast" | "Video Generation" | "Video Editing" | "Avatar" | "Image Generation" | "Image Editing" | "Graphic Design" | "Website" | "Mobile" | "Backend" | "Developer" | "Analytics" | "SEO" | "Content" | "Learning" | "Writing" | "Research" | "Workflow" | "Database" | "Presentation" | "Automation" | "Business Intelligence" | "Marketing Automation" | "Productivity" | "Education" | "Translation" | "Chatbot" | "Transcription" | "Text to Speech" | "Speech to Text" | "3D" | "Animation" | "Presentation Design" | "Document";
export type ToolType = "AI" | "No-Code" | "Automation" | "Developer" | "Creative" | "Business" | "Productivity" | "Research";
export type ToolFeature = "Text to Audio" | "Text to Image" | "Text to Video" | "Text to Code" | "Audio to Text" | "Image Editing" | "Video Editing" | "Voice AI" | "Music AI" | "Code AI" | "Workflow" | "API" | "Browser" | "Upload" | "Download" | "Realtime" | "Batch" | "Multilingual";

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

export type ToolSection = {
  id: string;
  title: string;
  description: string;
  category?: ToolCategory;
  tools: Tool[];
};

export type ToolsMarketplaceState = {
  filters: ToolsFilterState;
  search: ToolsSearchState;
  tab: ToolsTab;
  favorites: string[];
  mobileFiltersOpen: boolean;
  selectedToolId: string | null;
};

export const TOOLS_PER_PAGE_GRID = 12;
export const TOOLS_PER_PAGE_COMPACT = 16;
export const TOOLS_STORAGE_KEY = "market-ai-favorite-tools";
export const TOOLS_RECENT_STORAGE_KEY = "market-ai-recent-tools";
export const TOOLS_USAGE_STORAGE_KEY = "market-ai-tool-usage";
export const TOOLS_ANALYTICS_STORAGE_KEY = "market-ai-tools-analytics";

export const TOOL_CATEGORIES: Array<"All" | ToolCategory> = ["All", "Music", "Voice", "Video", "Image", "Code", "Business", "Marketing", "Education", "Productivity", "Research", "Audio", "Design", "Data", "Automation"];
export const TOOL_PRICING_OPTIONS: Array<"All Pricing" | ToolPricing> = ["All Pricing", "Free", "Freemium", "Pro", "Enterprise"];
export const TOOL_TYPE_OPTIONS: Array<"All Types" | ToolType> = ["All Types", "AI", "No-Code", "Automation", "Developer", "Creative", "Business", "Productivity", "Research"];
export const TOOL_SORT_OPTIONS: ToolsSortMode[] = ["Recommended", "Popular", "Newest", "Highest Rated", "Most Used"];

/* =========================================================
   Part 02: Datasets
   ========================================================= */

const BASE_TOOLS: Tool[] = [
  { id: "ai-song-generator", title: "AI Song Generator", description: "Create complete original songs from simple text prompts.", category: "Music", subCategory: "Song Generation", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 125000, thumbnail: "/tools/music/ai-song-generator.webp", route: "/tools/music/ai-song-generator", provider: "Market AI", features: ["Text to Audio", "Music AI", "Download", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-lyrics-generator", title: "AI Lyrics Generator", description: "Generate original lyrics in multiple languages and styles.", category: "Music", subCategory: "Lyrics", type: "AI", badge: "New", pricing: "Free", rating: 4.8, users: 87000, thumbnail: "/tools/music/ai-lyrics.webp", route: "/tools/music/ai-lyrics", provider: "Market AI", features: ["Multilingual", "Music AI", "Download"], isNew: true, featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-singer", title: "AI Singer", description: "Create expressive AI singing vocals from lyrics.", category: "Music", subCategory: "Singing", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.7, users: 56000, thumbnail: "/tools/music/ai-singer.webp", route: "/tools/music/ai-singer", provider: "Market AI", features: ["Music AI", "Text to Audio", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-voice-clone", title: "AI Voice Clone", description: "Create a realistic voice model from an authorized voice sample.", category: "Voice", subCategory: "Voice Clone", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.8, users: 73000, thumbnail: "/tools/voice/voice-clone.webp", route: "/tools/voice/voice-clone", provider: "Market AI", features: ["Voice AI", "Upload", "Download", "Multilingual"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "text-to-speech", title: "AI Text to Speech", description: "Convert written text into natural-sounding speech.", category: "Voice", subCategory: "Text to Speech", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 142000, thumbnail: "/tools/voice/text-to-speech.webp", route: "/tools/voice/text-to-speech", provider: "Market AI", features: ["Text to Audio", "Voice AI", "Multilingual", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "speech-to-text", title: "AI Speech to Text", description: "Transcribe speech and audio into accurate text.", category: "Voice", subCategory: "Speech to Text", type: "AI", badge: "Free", pricing: "Free", rating: 4.7, users: 118000, thumbnail: "/tools/voice/speech-to-text.webp", route: "/tools/voice/speech-to-text", provider: "Market AI", features: ["Audio to Text", "Upload", "Download", "Multilingual"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-generator", title: "AI Video Generator", description: "Generate engaging videos from text prompts.", category: "Video", subCategory: "Video Generation", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 164000, thumbnail: "/tools/video/ai-video-generator.webp", route: "/tools/video/ai-video-generator", provider: "Market AI", features: ["Text to Video", "Download", "Realtime"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-editor", title: "AI Video Editor", description: "Edit videos with automated AI-powered workflows.", category: "Video", subCategory: "Video Editing", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.7, users: 93000, thumbnail: "/tools/video/ai-video-editor.webp", route: "/tools/video/ai-video-editor", provider: "Market AI", features: ["Video Editing", "Upload", "Download", "Batch"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-avatar-generator", title: "AI Avatar Generator", description: "Create talking digital presenters and avatars.", category: "Video", subCategory: "Avatar", type: "AI", badge: "New", pricing: "Pro", rating: 4.6, users: 67000, thumbnail: "/tools/video/ai-avatar.webp", route: "/tools/video/ai-avatar", provider: "Market AI", features: ["Text to Video", "Voice AI", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-image-generator", title: "AI Image Generator", description: "Create original images from natural language prompts.", category: "Image", subCategory: "Image Generation", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 241000, thumbnail: "/tools/image/ai-image-generator.webp", route: "/tools/image/ai-image-generator", provider: "Market AI", features: ["Text to Image", "Download", "Batch"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-image-editor", title: "AI Image Editor", description: "Edit, enhance and transform images with AI.", category: "Image", subCategory: "Image Editing", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.8, users: 154000, thumbnail: "/tools/image/ai-image-editor.webp", route: "/tools/image/ai-image-editor", provider: "Market AI", features: ["Image Editing", "Upload", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-background-remover", title: "AI Background Remover", description: "Remove image backgrounds automatically.", category: "Image", subCategory: "Image Editing", type: "AI", badge: "Free", pricing: "Free", rating: 4.8, users: 189000, thumbnail: "/tools/image/background-remover.webp", route: "/tools/image/background-remover", provider: "Market AI", features: ["Image Editing", "Upload", "Download", "Batch"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-code-generator", title: "AI Code Generator", description: "Generate application code from natural language instructions.", category: "Code", subCategory: "Developer", type: "Developer", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 205000, thumbnail: "/tools/code/ai-code-generator.webp", route: "/tools/code/ai-code-generator", provider: "Market AI", features: ["Text to Code", "Code AI", "API", "Browser"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-website-builder", title: "AI Website Builder", description: "Create responsive websites from simple descriptions.", category: "Code", subCategory: "Website", type: "No-Code", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 176000, thumbnail: "/tools/code/ai-website-builder.webp", route: "/tools/code/ai-website-builder", provider: "Market AI", features: ["Text to Code", "Browser", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-chatbot-builder", title: "AI Chatbot Builder", description: "Build custom AI assistants and customer chatbots.", category: "Business", subCategory: "Chatbot", type: "Business", badge: "AI", pricing: "Pro", rating: 4.7, users: 91000, thumbnail: "/tools/business/ai-chatbot.webp", route: "/tools/business/ai-chatbot", provider: "Market AI", features: ["Workflow", "API", "Browser", "Realtime"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-content-writer", title: "AI Content Writer", description: "Create articles, posts, descriptions and other content.", category: "Marketing", subCategory: "Content", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 132000, thumbnail: "/tools/marketing/content-writer.webp", route: "/tools/marketing/content-writer", provider: "Market AI", features: ["Multilingual", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-seo-assistant", title: "AI SEO Assistant", description: "Research keywords and optimize content for search engines.", category: "Marketing", subCategory: "SEO", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.6, users: 74000, thumbnail: "/tools/marketing/seo-assistant.webp", route: "/tools/marketing/seo-assistant", provider: "Market AI", features: ["Research", "Browser", "API"], aiPowered: true, verified: true, animated: true },
  { id: "ai-study-assistant", title: "AI Study Assistant", description: "Learn faster with AI-powered explanations and study tools.", category: "Education", subCategory: "Learning", type: "Education", badge: "Free", pricing: "Free", rating: 4.8, users: 108000, thumbnail: "/tools/education/study-assistant.webp", route: "/tools/education/study-assistant", provider: "Market AI", features: ["Research", "Multilingual", "Browser"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-research-assistant", title: "AI Research Assistant", description: "Search, summarize and organize research material.", category: "Research", subCategory: "Research", type: "Research", badge: "AI", pricing: "Freemium", rating: 4.9, users: 198000, thumbnail: "/tools/research/research-assistant.webp", route: "/tools/research/research-assistant", provider: "Market AI", features: ["Research", "Browser", "Multilingual", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
];

const MUSIC_TOOLS: Tool[] = [
  { id: "ai-beat-generator", title: "AI Beat Generator", description: "Generate original beats and instrumental ideas from a simple prompt.", category: "Music", subCategory: "Music Production", type: "Creative", badge: "New", pricing: "Freemium", rating: 4.7, users: 68000, thumbnail: "/tools/music/beat-generator.webp", route: "/tools/music/beat-generator", provider: "Market AI", features: ["Text to Audio", "Music AI", "Download", "Batch"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-background-music", title: "AI Background Music", description: "Create royalty-friendly background music for videos, podcasts and content.", category: "Music", subCategory: "Music Production", type: "Creative", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 82000, thumbnail: "/tools/music/background-music.webp", route: "/tools/music/background-music", provider: "Market AI", features: ["Text to Audio", "Music AI", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-music-remixer", title: "AI Music Remixer", description: "Transform existing music into fresh arrangements and styles.", category: "Music", subCategory: "Music Production", type: "AI", badge: "AI", pricing: "Pro", rating: 4.6, users: 43000, thumbnail: "/tools/music/music-remixer.webp", route: "/tools/music/music-remixer", provider: "Market AI", features: ["Music AI", "Upload", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-song-structure", title: "AI Song Structure", description: "Plan verses, choruses, bridges and complete song arrangements.", category: "Music", subCategory: "Song Generation", type: "AI", badge: "AI", pricing: "Free", rating: 4.5, users: 37000, thumbnail: "/tools/music/song-structure.webp", route: "/tools/music/song-structure", provider: "Market AI", features: ["Music AI", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-melody-generator", title: "AI Melody Generator", description: "Generate melodies and musical ideas for original compositions.", category: "Music", subCategory: "Music Production", type: "AI", badge: "New", pricing: "Freemium", rating: 4.6, users: 51000, thumbnail: "/tools/music/melody-generator.webp", route: "/tools/music/melody-generator", provider: "Market AI", features: ["Text to Audio", "Music AI", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-music-mastering", title: "AI Music Mastering", description: "Automatically balance and master music for a polished final sound.", category: "Music", subCategory: "Music Production", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.8, users: 79000, thumbnail: "/tools/music/ai-mastering.webp", route: "/tools/music/ai-mastering", provider: "Market AI", features: ["Audio to Text", "Upload", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-podcast-generator", title: "AI Podcast Generator", description: "Create podcast episodes, scripts and audio from an idea.", category: "Music", subCategory: "Podcast", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 92000, thumbnail: "/tools/music/podcast-generator.webp", route: "/tools/music/podcast-generator", provider: "Market AI", features: ["Text to Audio", "Voice AI", "Download", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-podcast-editor", title: "AI Podcast Editor", description: "Clean, cut and enhance podcast recordings with AI.", category: "Audio", subCategory: "Podcast", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.6, users: 64000, thumbnail: "/tools/audio/podcast-editor.webp", route: "/tools/audio/podcast-editor", provider: "Market AI", features: ["Audio to Text", "Upload", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-chord-generator", title: "AI Chord Generator", description: "Generate chord progressions for original music.", category: "Music", subCategory: "Music Production", type: "Creative", badge: "New", pricing: "Free", rating: 4.5, users: 43000, thumbnail: "/tools/music/chord-generator.webp", route: "/tools/music/chord-generator", provider: "Market AI", features: ["Music AI", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-instrument-generator", title: "AI Instrument Generator", description: "Generate original instrumental sounds and ideas.", category: "Music", subCategory: "Music Production", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.5, users: 39000, thumbnail: "/tools/music/instrument-generator.webp", route: "/tools/music/instrument-generator", provider: "Market AI", features: ["Text to Audio", "Music AI", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-drums-generator", title: "AI Drums Generator", description: "Generate drum patterns and percussion ideas automatically.", category: "Music", subCategory: "Music Production", type: "AI", badge: "Popular", pricing: "Free", rating: 4.6, users: 52000, thumbnail: "/tools/music/drums-generator.webp", route: "/tools/music/drums-generator", provider: "Market AI", features: ["Music AI", "Download", "Batch"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-vocal-harmony", title: "AI Vocal Harmony", description: "Generate harmony ideas for existing vocal recordings.", category: "Music", subCategory: "Singing", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.6, users: 34000, thumbnail: "/tools/music/vocal-harmony.webp", route: "/tools/music/vocal-harmony", provider: "Market AI", features: ["Music AI", "Voice AI", "Upload", "Download"], aiPowered: true, verified: true, animated: true },
];

const VOICE_TOOLS: Tool[] = [
  { id: "ai-voice-changer", title: "AI Voice Changer", description: "Transform a recorded voice into different AI voice styles.", category: "Voice", subCategory: "Voice", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.6, users: 104000, thumbnail: "/tools/voice/voice-changer.webp", route: "/tools/voice/voice-changer", provider: "Market AI", features: ["Voice AI", "Upload", "Download", "Realtime"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-voice-enhancer", title: "AI Voice Enhancer", description: "Remove unwanted noise and improve speech clarity.", category: "Voice", subCategory: "Voice", type: "AI", badge: "Free", pricing: "Free", rating: 4.7, users: 88000, thumbnail: "/tools/voice/voice-enhancer.webp", route: "/tools/voice/voice-enhancer", provider: "Market AI", features: ["Voice AI", "Upload", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-transcription", title: "AI Transcription", description: "Convert meetings, interviews and recordings into searchable text.", category: "Voice", subCategory: "Transcription", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 151000, thumbnail: "/tools/voice/transcription.webp", route: "/tools/voice/transcription", provider: "Market AI", features: ["Audio to Text", "Upload", "Download", "Multilingual", "Batch"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-dubbing", title: "AI Dubbing", description: "Translate and dub spoken content into multiple languages.", category: "Voice", subCategory: "Voice", type: "AI", badge: "New", pricing: "Pro", rating: 4.7, users: 47000, thumbnail: "/tools/voice/ai-dubbing.webp", route: "/tools/voice/ai-dubbing", provider: "Market AI", features: ["Voice AI", "Multilingual", "Upload", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-pronunciation-coach", title: "AI Pronunciation Coach", description: "Practice pronunciation and receive instant AI feedback.", category: "Education", subCategory: "Learning", type: "AI", badge: "New", pricing: "Freemium", rating: 4.6, users: 39000, thumbnail: "/tools/voice/pronunciation-coach.webp", route: "/tools/voice/pronunciation-coach", provider: "Market AI", features: ["Voice AI", "Realtime", "Multilingual"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-voice-translator", title: "AI Voice Translator", description: "Translate spoken conversations between supported languages.", category: "Voice", subCategory: "Voice", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.7, users: 73000, thumbnail: "/tools/voice/voice-translator.webp", route: "/tools/voice/voice-translator", provider: "Market AI", features: ["Voice AI", "Multilingual", "Realtime", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-meeting-notes", title: "AI Meeting Notes", description: "Turn meetings into structured notes, summaries and action items.", category: "Productivity", subCategory: "Document", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 127000, thumbnail: "/tools/productivity/meeting-notes.webp", route: "/tools/productivity/meeting-notes", provider: "Market AI", features: ["Audio to Text", "Upload", "Download", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-voice-isolator", title: "AI Voice Isolator", description: "Isolate spoken voice from background audio.", category: "Voice", subCategory: "Voice", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 74000, thumbnail: "/tools/voice/voice-isolator.webp", route: "/tools/voice/voice-isolator", provider: "Market AI", features: ["Voice AI", "Upload", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-speech-cleaner", title: "AI Speech Cleaner", description: "Clean spoken recordings and improve speech intelligibility.", category: "Voice", subCategory: "Voice", type: "AI", badge: "Free", pricing: "Free", rating: 4.6, users: 69000, thumbnail: "/tools/voice/speech-cleaner.webp", route: "/tools/voice/speech-cleaner", provider: "Market AI", features: ["Voice AI", "Upload", "Download", "Batch"], aiPowered: true, verified: true, animated: true },
  { id: "ai-voice-summary", title: "AI Voice Summary", description: "Turn long spoken recordings into concise summaries.", category: "Voice", subCategory: "Transcription", type: "AI", badge: "New", pricing: "Freemium", rating: 4.6, users: 47000, thumbnail: "/tools/voice/voice-summary.webp", route: "/tools/voice/voice-summary", provider: "Market AI", features: ["Audio to Text", "Download", "Multilingual"], isNew: true, aiPowered: true, verified: true, animated: true },
];

const VIDEO_TOOLS: Tool[] = [
  { id: "ai-script-to-video", title: "AI Script to Video", description: "Turn a written script into a complete video concept.", category: "Video", subCategory: "Video Generation", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 143000, thumbnail: "/tools/video/script-to-video.webp", route: "/tools/video/script-to-video", provider: "Market AI", features: ["Text to Video", "Download", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-text-to-video", title: "AI Text to Video", description: "Generate short videos from natural language prompts.", category: "Video", subCategory: "Video Generation", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.8, users: 181000, thumbnail: "/tools/video/text-to-video.webp", route: "/tools/video/text-to-video", provider: "Market AI", features: ["Text to Video", "Download", "Batch"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-image-to-video", title: "AI Image to Video", description: "Animate still images and turn them into engaging videos.", category: "Video", subCategory: "Video Generation", type: "AI", badge: "Popular", pricing: "Pro", rating: 4.7, users: 96000, thumbnail: "/tools/video/image-to-video.webp", route: "/tools/video/image-to-video", provider: "Market AI", features: ["Text to Video", "Upload", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-caption", title: "AI Video Caption Generator", description: "Automatically create captions and subtitles for videos.", category: "Video", subCategory: "Video Editing", type: "AI", badge: "Free", pricing: "Free", rating: 4.7, users: 112000, thumbnail: "/tools/video/video-caption.webp", route: "/tools/video/video-caption", provider: "Market AI", features: ["Audio to Text", "Video Editing", "Multilingual", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-translator", title: "AI Video Translator", description: "Translate video dialogue and subtitles into multiple languages.", category: "Video", subCategory: "Video Editing", type: "AI", badge: "New", pricing: "Pro", rating: 4.6, users: 61000, thumbnail: "/tools/video/video-translator.webp", route: "/tools/video/video-translator", provider: "Market AI", features: ["Multilingual", "Voice AI", "Upload", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-upscaler", title: "AI Video Upscaler", description: "Improve video resolution and visual quality with AI.", category: "Video", subCategory: "Video Editing", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.7, users: 73000, thumbnail: "/tools/video/video-upscaler.webp", route: "/tools/video/video-upscaler", provider: "Market AI", features: ["Video Editing", "Upload", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-video-script", title: "AI Video Script Writer", description: "Write video scripts, hooks and scene ideas from a topic.", category: "Video", subCategory: "Video Generation", type: "AI", badge: "Free", pricing: "Free", rating: 4.6, users: 83000, thumbnail: "/tools/video/video-script.webp", route: "/tools/video/video-script", provider: "Market AI", features: ["Text to Video", "Download", "Multilingual"], aiPowered: true, verified: true, animated: true },
  { id: "ai-animation-generator", title: "AI Animation Generator", description: "Create animated scenes and visual sequences from prompts.", category: "Video", subCategory: "Animation", type: "Creative", badge: "New", pricing: "Freemium", rating: 4.5, users: 52000, thumbnail: "/tools/video/animation-generator.webp", route: "/tools/video/animation-generator", provider: "Market AI", features: ["Text to Video", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
];

const IMAGE_TOOLS: Tool[] = [
  { id: "ai-text-to-image", title: "AI Text to Image", description: "Generate high-quality images from natural language prompts.", category: "Image", subCategory: "Image Generation", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 238000, thumbnail: "/tools/image/text-to-image.webp", route: "/tools/image/text-to-image", provider: "Market AI", features: ["Text to Image", "Download", "Batch"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-image-upscaler", title: "AI Image Upscaler", description: "Increase image resolution while preserving visual detail.", category: "Image", subCategory: "Image Editing", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 176000, thumbnail: "/tools/image/image-upscaler.webp", route: "/tools/image/image-upscaler", provider: "Market AI", features: ["Image Editing", "Upload", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-photo-enhancer", title: "AI Photo Enhancer", description: "Enhance portraits and photographs automatically.", category: "Image", subCategory: "Image Editing", type: "AI", badge: "Free", pricing: "Free", rating: 4.7, users: 152000, thumbnail: "/tools/image/photo-enhancer.webp", route: "/tools/image/photo-enhancer", provider: "Market AI", features: ["Image Editing", "Upload", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-object-remover", title: "AI Object Remover", description: "Remove unwanted objects from images with intelligent editing.", category: "Image", subCategory: "Image Editing", type: "AI", badge: "AI", pricing: "Freemium", rating: 4.7, users: 129000, thumbnail: "/tools/image/object-remover.webp", route: "/tools/image/object-remover", provider: "Market AI", features: ["Image Editing", "Upload", "Download", "Batch"], aiPowered: true, verified: true, animated: true },
  { id: "ai-product-photo", title: "AI Product Photo", description: "Create professional product images from simple source photos.", category: "Image", subCategory: "Image Generation", type: "Business", badge: "Pro", pricing: "Pro", rating: 4.6, users: 68000, thumbnail: "/tools/image/product-photo.webp", route: "/tools/image/product-photo", provider: "Market AI", features: ["Text to Image", "Image Editing", "Upload", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-profile-picture", title: "AI Profile Picture", description: "Generate professional profile images and avatars.", category: "Image", subCategory: "Image Generation", type: "Creative", badge: "Popular", pricing: "Freemium", rating: 4.6, users: 116000, thumbnail: "/tools/image/profile-picture.webp", route: "/tools/image/profile-picture", provider: "Market AI", features: ["Text to Image", "Image Editing", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-logo-generator", title: "AI Logo Generator", description: "Create logo concepts and brand marks from a description.", category: "Design", subCategory: "Graphic Design", type: "Creative", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 134000, thumbnail: "/tools/design/logo-generator.webp", route: "/tools/design/logo-generator", provider: "Market AI", features: ["Text to Image", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-album-cover", title: "AI Album Cover", description: "Generate original album and single artwork for music releases.", category: "Design", subCategory: "Graphic Design", type: "Creative", badge: "Free", pricing: "Free", rating: 4.6, users: 54000, thumbnail: "/tools/design/album-cover.webp", route: "/tools/design/album-cover", provider: "Market AI", features: ["Text to Image", "Music AI", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-social-post-image", title: "AI Social Post Image", description: "Create social media graphics from a campaign idea.", category: "Marketing", subCategory: "Content", type: "Creative", badge: "New", pricing: "Freemium", rating: 4.5, users: 61000, thumbnail: "/tools/marketing/social-post-image.webp", route: "/tools/marketing/social-post-image", provider: "Market AI", features: ["Text to Image", "Download", "Multilingual"], isNew: true, aiPowered: true, verified: true, animated: true },
];

const CODE_TOOLS: Tool[] = [
  { id: "ai-code-reviewer", title: "AI Code Reviewer", description: "Review source code and identify possible bugs, issues and improvements.", category: "Code", subCategory: "Developer", type: "Developer", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 121000, thumbnail: "/tools/code/code-reviewer.webp", route: "/tools/code/code-reviewer", provider: "Market AI", features: ["Code AI", "Text to Code", "Browser"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-debugger", title: "AI Debugger", description: "Analyze errors and suggest fixes for application code.", category: "Code", subCategory: "Developer", type: "Developer", badge: "AI", pricing: "Freemium", rating: 4.7, users: 109000, thumbnail: "/tools/code/ai-debugger.webp", route: "/tools/code/ai-debugger", provider: "Market AI", features: ["Code AI", "Text to Code", "Browser"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-react-generator", title: "AI React Generator", description: "Generate React components and interfaces from natural language.", category: "Code", subCategory: "Developer", type: "Developer", badge: "Popular", pricing: "Pro", rating: 4.8, users: 87000, thumbnail: "/tools/code/react-generator.webp", route: "/tools/code/react-generator", provider: "Market AI", features: ["Text to Code", "Code AI", "Browser", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-api-builder", title: "AI API Builder", description: "Generate API structures, endpoints and integration code.", category: "Code", subCategory: "Backend", type: "Developer", badge: "Pro", pricing: "Pro", rating: 4.6, users: 63000, thumbnail: "/tools/code/api-builder.webp", route: "/tools/code/api-builder", provider: "Market AI", features: ["Text to Code", "API", "Code AI"], aiPowered: true, verified: true, animated: true },
  { id: "ai-database-builder", title: "AI Database Builder", description: "Design database schemas and generate database queries.", category: "Data", subCategory: "Database", type: "Developer", badge: "AI", pricing: "Freemium", rating: 4.7, users: 58000, thumbnail: "/tools/data/database-builder.webp", route: "/tools/data/database-builder", provider: "Market AI", features: ["Code AI", "API", "Database", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-sql-generator", title: "AI SQL Generator", description: "Create SQL queries from plain-language database questions.", category: "Data", subCategory: "Database", type: "Developer", badge: "Popular", pricing: "Free", rating: 4.8, users: 102000, thumbnail: "/tools/data/sql-generator.webp", route: "/tools/data/sql-generator", provider: "Market AI", features: ["Text to Code", "Code AI", "Database"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-typescript-generator", title: "AI TypeScript Generator", description: "Generate TypeScript code, types and utilities from descriptions.", category: "Code", subCategory: "Developer", type: "Developer", badge: "New", pricing: "Freemium", rating: 4.7, users: 64000, thumbnail: "/tools/code/typescript-generator.webp", route: "/tools/code/typescript-generator", provider: "Market AI", features: ["Text to Code", "Code AI", "Browser"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-python-generator", title: "AI Python Generator", description: "Generate Python scripts and utilities from natural language.", category: "Code", subCategory: "Developer", type: "Developer", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 143000, thumbnail: "/tools/code/python-generator.webp", route: "/tools/code/python-generator", provider: "Market AI", features: ["Text to Code", "Code AI", "Browser", "Download"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-api-documentation", title: "AI API Documentation", description: "Generate structured API documentation from code and schemas.", category: "Code", subCategory: "Backend", type: "Developer", badge: "AI", pricing: "Free", rating: 4.5, users: 37000, thumbnail: "/tools/code/api-documentation.webp", route: "/tools/code/api-documentation", provider: "Market AI", features: ["Code AI", "API", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-regex-generator", title: "AI Regex Generator", description: "Generate regular expressions from plain-language requirements.", category: "Code", subCategory: "Developer", type: "Developer", badge: "Free", pricing: "Free", rating: 4.6, users: 72000, thumbnail: "/tools/code/regex-generator.webp", route: "/tools/code/regex-generator", provider: "Market AI", features: ["Text to Code", "Code AI"], aiPowered: true, verified: true, animated: true },
];

const BUSINESS_TOOLS: Tool[] = [
  { id: "ai-business-plan", title: "AI Business Plan", description: "Create structured business plans from your business idea.", category: "Business", subCategory: "Business Intelligence", type: "Business", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 81000, thumbnail: "/tools/business/business-plan.webp", route: "/tools/business/business-plan", provider: "Market AI", features: ["Research", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-business-analytics", title: "AI Business Analytics", description: "Analyze business data and discover useful trends.", category: "Business", subCategory: "Analytics", type: "Business", badge: "AI", pricing: "Pro", rating: 4.6, users: 52000, thumbnail: "/tools/business/business-analytics.webp", route: "/tools/business/business-analytics", provider: "Market AI", features: ["Research", "Upload", "Batch"], aiPowered: true, verified: true, animated: true },
  { id: "ai-invoice-generator", title: "AI Invoice Generator", description: "Create professional invoices and billing documents quickly.", category: "Business", subCategory: "Document", type: "Business", badge: "Free", pricing: "Free", rating: 4.6, users: 97000, thumbnail: "/tools/business/invoice-generator.webp", route: "/tools/business/invoice-generator", provider: "Market AI", features: ["Download", "Document"], featured: true, verified: true, animated: true },
  { id: "ai-business-report", title: "AI Business Report", description: "Generate structured reports from business information and data.", category: "Business", subCategory: "Business Intelligence", type: "AI", badge: "New", pricing: "Freemium", rating: 4.5, users: 41000, thumbnail: "/tools/business/business-report.webp", route: "/tools/business/business-report", provider: "Market AI", features: ["Research", "Download", "Multilingual"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-customer-support", title: "AI Customer Support", description: "Create AI-powered support workflows for customer questions.", category: "Business", subCategory: "Chatbot", type: "Business", badge: "Popular", pricing: "Pro", rating: 4.8, users: 113000, thumbnail: "/tools/business/customer-support.webp", route: "/tools/business/customer-support", provider: "Market AI", features: ["Workflow", "API", "Realtime", "Browser"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
];

const MARKETING_TOOLS: Tool[] = [
  { id: "ai-ad-copywriter", title: "AI Ad Copywriter", description: "Generate advertising copy for campaigns and product promotions.", category: "Marketing", subCategory: "Content", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 119000, thumbnail: "/tools/marketing/ad-copywriter.webp", route: "/tools/marketing/ad-copywriter", provider: "Market AI", features: ["Multilingual", "Download"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-email-writer", title: "AI Email Writer", description: "Write professional marketing and business emails with AI.", category: "Marketing", subCategory: "Content", type: "AI", badge: "Free", pricing: "Free", rating: 4.7, users: 137000, thumbnail: "/tools/marketing/email-writer.webp", route: "/tools/marketing/email-writer", provider: "Market AI", features: ["Multilingual", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-social-media-manager", title: "AI Social Media Manager", description: "Plan, write and organize social media content.", category: "Marketing", subCategory: "Marketing Automation", type: "AI", badge: "Pro", pricing: "Pro", rating: 4.6, users: 76000, thumbnail: "/tools/marketing/social-media-manager.webp", route: "/tools/marketing/social-media-manager", provider: "Market AI", features: ["Workflow", "Multilingual", "Browser"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-product-description", title: "AI Product Description", description: "Create persuasive product descriptions for online stores.", category: "Marketing", subCategory: "Content", type: "AI", badge: "Popular", pricing: "Free", rating: 4.8, users: 128000, thumbnail: "/tools/marketing/product-description.webp", route: "/tools/marketing/product-description", provider: "Market AI", features: ["Multilingual", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-keyword-research", title: "AI Keyword Research", description: "Discover keyword ideas and organize search opportunities.", category: "Marketing", subCategory: "SEO", type: "Research", badge: "AI", pricing: "Freemium", rating: 4.7, users: 71000, thumbnail: "/tools/marketing/keyword-research.webp", route: "/tools/marketing/keyword-research", provider: "Market AI", features: ["Research", "Browser", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-blog-outline", title: "AI Blog Outline", description: "Generate structured blog outlines before writing full articles.", category: "Marketing", subCategory: "Content", type: "AI", badge: "New", pricing: "Free", rating: 4.5, users: 63000, thumbnail: "/tools/marketing/blog-outline.webp", route: "/tools/marketing/blog-outline", provider: "Market AI", features: ["Multilingual", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
];

const EDUCATION_TOOLS: Tool[] = [
  { id: "ai-tutor", title: "AI Tutor", description: "Get interactive explanations and guided help for learning.", category: "Education", subCategory: "Learning", type: "Education", badge: "Popular", pricing: "Freemium", rating: 4.9, users: 146000, thumbnail: "/tools/education/ai-tutor.webp", route: "/tools/education/ai-tutor", provider: "Market AI", features: ["Research", "Browser", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-homework-helper", title: "AI Homework Helper", description: "Understand homework questions with step-by-step explanations.", category: "Education", subCategory: "Learning", type: "Education", badge: "Free", pricing: "Free", rating: 4.7, users: 138000, thumbnail: "/tools/education/homework-helper.webp", route: "/tools/education/homework-helper", provider: "Market AI", features: ["Research", "Multilingual", "Browser"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-flashcard-generator", title: "AI Flashcard Generator", description: "Turn notes and study material into useful flashcards.", category: "Education", subCategory: "Learning", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 91000, thumbnail: "/tools/education/flashcard-generator.webp", route: "/tools/education/flashcard-generator", provider: "Market AI", features: ["Research", "Upload", "Download", "Multilingual"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-quiz-generator", title: "AI Quiz Generator", description: "Create quizzes and practice tests from any topic.", category: "Education", subCategory: "Learning", type: "AI", badge: "New", pricing: "Free", rating: 4.6, users: 76000, thumbnail: "/tools/education/quiz-generator.webp", route: "/tools/education/quiz-generator", provider: "Market AI", features: ["Research", "Multilingual", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-presentation-maker", title: "AI Presentation Maker", description: "Turn ideas and documents into structured presentations.", category: "Education", subCategory: "Presentation", type: "Creative", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 128000, thumbnail: "/tools/education/presentation-maker.webp", route: "/tools/education/presentation-maker", provider: "Market AI", features: ["Text to Image", "Download", "Upload"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-language-learning", title: "AI Language Learning", description: "Practice vocabulary, conversation and language skills with AI.", category: "Education", subCategory: "Learning", type: "Education", badge: "AI", pricing: "Freemium", rating: 4.8, users: 103000, thumbnail: "/tools/education/language-learning.webp", route: "/tools/education/language-learning", provider: "Market AI", features: ["Voice AI", "Multilingual", "Realtime"], trending: true, aiPowered: true, verified: true, animated: true },
];

const PRODUCTIVITY_TOOLS: Tool[] = [
  { id: "ai-note-taker", title: "AI Note Taker", description: "Capture ideas and turn information into organized notes.", category: "Productivity", subCategory: "Document", type: "Productivity", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 149000, thumbnail: "/tools/productivity/note-taker.webp", route: "/tools/productivity/note-taker", provider: "Market AI", features: ["Audio to Text", "Download", "Multilingual"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-summarizer", title: "AI Summarizer", description: "Summarize long documents, articles and text into key points.", category: "Productivity", subCategory: "Writing", type: "AI", badge: "Free", pricing: "Free", rating: 4.8, users: 219000, thumbnail: "/tools/productivity/summarizer.webp", route: "/tools/productivity/summarizer", provider: "Market AI", features: ["Upload", "Download", "Multilingual", "Batch"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-email-assistant", title: "AI Email Assistant", description: "Draft, rewrite and summarize emails quickly.", category: "Productivity", subCategory: "Writing", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 167000, thumbnail: "/tools/productivity/email-assistant.webp", route: "/tools/productivity/email-assistant", provider: "Market AI", features: ["Multilingual", "Download"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-task-planner", title: "AI Task Planner", description: "Turn goals and ideas into structured tasks and action plans.", category: "Productivity", subCategory: "Productivity", type: "Productivity", badge: "AI", pricing: "Free", rating: 4.6, users: 87000, thumbnail: "/tools/productivity/task-planner.webp", route: "/tools/productivity/task-planner", provider: "Market AI", features: ["Workflow", "Download"], aiPowered: true, verified: true, animated: true },
  { id: "ai-calendar-assistant", title: "AI Calendar Assistant", description: "Organize schedules and suggest efficient time plans.", category: "Productivity", subCategory: "Productivity", type: "AI", badge: "New", pricing: "Pro", rating: 4.5, users: 58000, thumbnail: "/tools/productivity/calendar-assistant.webp", route: "/tools/productivity/calendar-assistant", provider: "Market AI", features: ["Workflow", "Browser", "Realtime"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-document-editor", title: "AI Document Editor", description: "Rewrite, improve and organize documents with AI assistance.", category: "Productivity", subCategory: "Document", type: "Productivity", badge: "Popular", pricing: "Freemium", rating: 4.7, users: 113000, thumbnail: "/tools/productivity/document-editor.webp", route: "/tools/productivity/document-editor", provider: "Market AI", features: ["Upload", "Download", "Multilingual"], featured: true, aiPowered: true, verified: true, animated: true },
];

const RESEARCH_TOOLS: Tool[] = [
  { id: "ai-paper-summarizer", title: "AI Paper Summarizer", description: "Summarize research papers and extract important findings.", category: "Research", subCategory: "Research", type: "Research", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 94000, thumbnail: "/tools/research/paper-summarizer.webp", route: "/tools/research/paper-summarizer", provider: "Market AI", features: ["Research", "Upload", "Download"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-literature-review", title: "AI Literature Review", description: "Organize literature and identify important research themes.", category: "Research", subCategory: "Research", type: "Research", badge: "Pro", pricing: "Pro", rating: 4.7, users: 51000, thumbnail: "/tools/research/literature-review.webp", route: "/tools/research/literature-review", provider: "Market AI", features: ["Research", "Browser", "Download"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-fact-checker", title: "AI Fact Checker", description: "Analyze claims and organize supporting information.", category: "Research", subCategory: "Research", type: "Research", badge: "AI", pricing: "Freemium", rating: 4.6, users: 76000, thumbnail: "/tools/research/fact-checker.webp", route: "/tools/research/fact-checker", provider: "Market AI", features: ["Research", "Browser", "Multilingual"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-web-researcher", title: "AI Web Researcher", description: "Research online information and organize useful findings.", category: "Research", subCategory: "Research", type: "Research", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 134000, thumbnail: "/tools/research/web-researcher.webp", route: "/tools/research/web-researcher", provider: "Market AI", features: ["Research", "Browser", "Multilingual", "Download"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-data-researcher", title: "AI Data Researcher", description: "Explore datasets and generate useful research insights.", category: "Research", subCategory: "Analytics", type: "Research", badge: "New", pricing: "Pro", rating: 4.5, users: 42000, thumbnail: "/tools/research/data-researcher.webp", route: "/tools/research/data-researcher", provider: "Market AI", features: ["Research", "Upload", "Batch", "Download"], isNew: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-document-analyzer", title: "AI Document Analyzer", description: "Analyze long documents and extract structured information.", category: "Research", subCategory: "Document", type: "AI", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 119000, thumbnail: "/tools/research/document-analyzer.webp", route: "/tools/research/document-analyzer", provider: "Market AI", features: ["Upload", "Research", "Download", "Batch"], featured: true, aiPowered: true, verified: true, animated: true },
];

const AUTOMATION_TOOLS: Tool[] = [
  { id: "ai-workflow-builder", title: "AI Workflow Builder", description: "Create automated workflows from plain-language instructions.", category: "Automation", subCategory: "Workflow", type: "Automation", badge: "Popular", pricing: "Freemium", rating: 4.8, users: 118000, thumbnail: "/tools/automation/workflow-builder.webp", route: "/tools/automation/workflow-builder", provider: "Market AI", features: ["Workflow", "API", "Browser", "Realtime"], featured: true, trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-task-automation", title: "AI Task Automation", description: "Automate repetitive tasks with intelligent workflows.", category: "Automation", subCategory: "Automation", type: "Automation", badge: "AI", pricing: "Freemium", rating: 4.7, users: 96000, thumbnail: "/tools/automation/task-automation.webp", route: "/tools/automation/task-automation", provider: "Market AI", features: ["Workflow", "API", "Browser"], trending: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-email-automation", title: "AI Email Automation", description: "Automate email drafting, classification and repetitive workflows.", category: "Automation", subCategory: "Marketing Automation", type: "Automation", badge: "Popular", pricing: "Pro", rating: 4.6, users: 73000, thumbnail: "/tools/automation/email-automation.webp", route: "/tools/automation/email-automation", provider: "Market AI", features: ["Workflow", "API", "Multilingual"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-document-automation", title: "AI Document Automation", description: "Process documents and extract information automatically.", category: "Automation", subCategory: "Document", type: "Automation", badge: "Pro", pricing: "Pro", rating: 4.7, users: 58000, thumbnail: "/tools/automation/document-automation.webp", route: "/tools/automation/document-automation", provider: "Market AI", features: ["Workflow", "Upload", "Download", "Batch"], aiPowered: true, verified: true, animated: true },
  { id: "ai-lead-automation", title: "AI Lead Automation", description: "Organize leads and automate repetitive sales workflows.", category: "Automation", subCategory: "Marketing Automation", type: "Business", badge: "Popular", pricing: "Pro", rating: 4.5, users: 47000, thumbnail: "/tools/automation/lead-automation.webp", route: "/tools/automation/lead-automation", provider: "Market AI", features: ["Workflow", "API", "Browser"], featured: true, aiPowered: true, verified: true, animated: true },
  { id: "ai-data-automation", title: "AI Data Automation", description: "Move, transform and process structured data automatically.", category: "Automation", subCategory: "Workflow", type: "Automation", badge: "New", pricing: "Freemium", rating: 4.6, users: 51000, thumbnail: "/tools/automation/data-automation.webp", route: "/tools/automation/data-automation", provider: "Market AI", features: ["Workflow", "API", "Batch", "Database"], isNew: true, aiPowered: true, verified: true, animated: true },
];

/* ---------------------------------------------------------
   Merge Datasets & Deduplicate
   --------------------------------------------------------- */

function deduplicateTools(tools: Tool[]): Tool[] {
  const seen = new Set<string>();
  return tools.filter((tool) => {
    if (seen.has(tool.id)) return false;
    seen.add(tool.id);
    return true;
  });
}

function mergeToolCollections(...collections: Tool[][]): Tool[] {
  return deduplicateTools(collections.flat());
}

const ALL_TOOLS: Tool[] = mergeToolCollections(
  BASE_TOOLS, MUSIC_TOOLS, VOICE_TOOLS, VIDEO_TOOLS, IMAGE_TOOLS, CODE_TOOLS,
  BUSINESS_TOOLS, MARKETING_TOOLS, EDUCATION_TOOLS, PRODUCTIVITY_TOOLS, RESEARCH_TOOLS, AUTOMATION_TOOLS
);

function validateToolRecord(tool: Tool): boolean {
  return Boolean(tool.id && tool.title && tool.description && tool.category && tool.subCategory && tool.type && tool.pricing && tool.thumbnail && tool.route && tool.provider);
}

function normalizeToolText(value: string): string { return value.toLowerCase().trim().replace(/\s+/g, " "); }
function normalizeToolRoute(route: string): string { return !route ? "/" : route.startsWith("/") ? route : `/${route}`; }
function normalizeToolRating(rating: number): number { return Number.isNaN(rating) ? 0 : Math.min(5, Math.max(0, rating)); }
function formatToolUsers(users: number): string { if (users >= 1000000) return `${(users / 1000000).toFixed(1)}M`; if (users >= 1000) return `${Math.round(users / 1000)}K`; return String(users); }

const NORMALIZED_TOOLS = ALL_TOOLS.map((tool) => ({
  ...tool,
  route: normalizeToolRoute(tool.route),
  rating: normalizeToolRating(tool.rating),
  users: Math.max(0, Math.floor(tool.users)),
  features: Array.from(new Set(tool.features)),
}));

export const VALID_MARKETPLACE_TOOLS = NORMALIZED_TOOLS.filter(validateToolRecord);

const TOOL_BY_ID = new Map<string, Tool>(VALID_MARKETPLACE_TOOLS.map((t) => [t.id, t]));
const TOOL_BY_ROUTE = new Map<string, Tool>(VALID_MARKETPLACE_TOOLS.map((t) => [normalizeToolRoute(t.route), t]));
function findToolById(id: string): Tool | undefined { return TOOL_BY_ID.get(id); }
function findToolByRoute(route: string): Tool | undefined { return TOOL_BY_ROUTE.get(normalizeToolRoute(route)); }

export const MARKETPLACE_PROVIDERS = Array.from(new Set(VALID_MARKETPLACE_TOOLS.map((t) => t.provider)));

/* =========================================================
   Part 03: Engine (Search, Sort, Filter, Recommend)
   ========================================================= */

function getSearchScore(tool: Tool, query: string): number {
  const q = normalizeToolText(query);
  if (!q) return 0;
  const title = normalizeToolText(tool.title);
  const desc = normalizeToolText(tool.description);
  const cat = normalizeToolText(tool.category);
  const subCat = normalizeToolText(tool.subCategory);
  let score = 0;
  if (title === q) score += 100;
  if (title.startsWith(q)) score += 60;
  if (title.includes(q)) score += 40;
  if (cat.includes(q)) score += 25;
  if (subCat.includes(q)) score += 25;
  if (desc.includes(q)) score += 10;
  if (tool.featured) score += 8;
  if (tool.trending) score += 7;
  if (tool.verified) score += 5;
  score += normalizeToolRating(tool.rating);
  return score;
}

function searchTools(tools: Tool[], query: string): Tool[] {
  const q = normalizeToolText(query);
  if (!q) return [...tools];
  const parts = q.split(" ").filter(Boolean);
  return tools.filter((tool) => {
    const text = normalizeToolText([tool.title, tool.description, tool.category, tool.subCategory, tool.type, tool.provider, tool.badge, ...tool.features].join(" "));
    return parts.every((p) => text.includes(p));
  });
}

function rankToolSearchResults(tools: Tool[], query: string): Tool[] {
  return [...tools].map((t) => ({ tool: t, score: getSearchScore(t, query) })).sort((a, b) => b.score - a.score).map((i) => i.tool);
}

function filterMarketplaceTools(tools: Tool[], filters: ToolsFilterState): Tool[] {
  return tools.filter(t => {
    if (filters.category !== "All" && t.category !== filters.category) return false;
    if (filters.subCategory !== "All" && t.subCategory !== filters.subCategory) return false;
    if (filters.pricing !== "All Pricing" && t.pricing !== filters.pricing) return false;
    if (filters.type !== "All Types" && t.type !== filters.type) return false;
    if (filters.feature !== "All Features" && !t.features.includes(filters.feature)) return false;
    if (filters.provider !== "All Providers" && normalizeToolText(t.provider) !== normalizeToolText(filters.provider)) return false;
    return true;
  });
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
        const scoreA = (a.featured ? 35 : 0) + (a.trending ? 20 : 0) + (a.isNew ? 10 : 0) + (a.verified ? 8 : 0) + (a.aiPowered ? 5 : 0) + a.rating * 7 + Math.log10(Math.max(1, a.users));
        const scoreB = (b.featured ? 35 : 0) + (b.trending ? 20 : 0) + (b.isNew ? 10 : 0) + (b.verified ? 8 : 0) + (b.aiPowered ? 5 : 0) + b.rating * 7 + Math.log10(Math.max(1, b.users));
        return scoreB - scoreA;
      });
  }
}

function applyToolsTab(tools: Tool[], tab: ToolsTab, favoriteIds: string[]): Tool[] {
  switch (tab) {
    case "trending": return tools.filter((t) => t.trending);
    case "new": return tools.filter((t) => t.isNew);
    case "favorites": return tools.filter((t) => favoriteIds.includes(t.id));
    case "free": return tools.filter((t) => t.pricing === "Free" || t.pricing === "Freemium");
    case "pro": return tools.filter((t) => t.pricing === "Pro");
    case "all": default: return [...tools];
  }
}

function buildPagination(totalItems: number, page: number, perPage: number): PaginationInfo {
  const safePerPage = Math.max(1, perPage);
  const totalPages = Math.max(1, Math.ceil(totalItems / safePerPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * safePerPage;
  const endIndex = Math.min(startIndex + safePerPage, totalItems);
  return { page: safePage, perPage: safePerPage, totalItems, totalPages, startIndex, endIndex, hasPrevious: safePage > 1, hasNext: safePage < totalPages };
}

function discoverMarketplaceTools(options: { query?: string; category?: "All" | ToolCategory; subCategory?: "All" | ToolSubCategory; pricing?: "All Pricing" | ToolPricing; type?: "All Types" | ToolType; feature?: "All Features" | ToolFeature; provider?: "All Providers" | string; sort?: ToolsSortMode; page?: number; perPage?: number; tab?: ToolsTab; favorites?: string[]; } = {}): { tools: Tool[]; pagination: PaginationInfo; totalBeforePagination: number; } {
  const filters: ToolsFilterState = {
    category: options.category ?? "All", subCategory: options.subCategory ?? "All", pricing: options.pricing ?? "All Pricing", type: options.type ?? "All Types", feature: options.feature ?? "All Features", provider: options.provider ?? "All Providers",
  };
  const query = options.query ?? "";
  const sort = options.sort ?? "Recommended";
  const page = options.page ?? 1;
  const perPage = options.perPage ?? TOOLS_PER_PAGE_GRID;
  const favorites = options.favorites ?? [];

  let result = filterMarketplaceTools(VALID_MARKETPLACE_TOOLS, filters);
  if (query.trim()) result = searchTools(result, query);
  result = sortMarketplaceTools(result, sort, query);
  result = applyToolsTab(result, options.tab ?? "all", favorites);

  const pagination = buildPagination(result.length, page, perPage);
  const paginated = result.slice(pagination.startIndex, pagination.endIndex);

  return { tools: paginated, pagination, totalBeforePagination: result.length };
}

const CATEGORY_ICONS: Record<ToolCategory, React.ElementType> = { Music: Music2, Voice: Mic2, Video: Video, Image: ImageIcon, Code: Code2, Business: BarChart3, Marketing: TrendingUp, Education: Brain, Productivity: Zap, Research: Search, Audio: Mic2, Design: Wand2, Data: Database, Automation: Bot };
const CATEGORY_GRADIENTS: Record<ToolCategory, string> = { Music: "from-violet-600/30 to-fuchsia-500/20", Voice: "from-cyan-600/30 to-blue-500/20", Video: "from-red-600/30 to-orange-500/20", Image: "from-pink-600/30 to-purple-500/20", Code: "from-emerald-600/30 to-cyan-500/20", Business: "from-blue-600/30 to-indigo-500/20", Marketing: "from-orange-600/30 to-yellow-500/20", Education: "from-green-600/30 to-teal-500/20", Productivity: "from-sky-600/30 to-blue-500/20", Research: "from-indigo-600/30 to-violet-500/20", Audio: "from-purple-600/30 to-blue-500/20", Design: "from-fuchsia-600/30 to-pink-500/20", Data: "from-teal-600/30 to-emerald-500/20", Automation: "from-amber-600/30 to-orange-500/20" };
const badgeStyles: Record<ToolBadge, string> = { Popular: "bg-orange-500/15 text-orange-300 border-orange-400/20", New: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20", Pro: "bg-violet-500/15 text-violet-300 border-violet-400/20", Free: "bg-cyan-500/15 text-cyan-300 border-cyan-400/20", Beta: "bg-amber-500/15 text-amber-300 border-amber-400/20", Trending: "bg-rose-500/15 text-rose-300 border-rose-400/20", AI: "bg-blue-500/15 text-blue-300 border-blue-400/20", Enterprise: "bg-indigo-500/15 text-indigo-300 border-indigo-400/20", Featured: "bg-yellow-500/15 text-yellow-300 border-yellow-400/20" };

function getCategoryIcon(category: "All" | ToolCategory) { return category === "All" ? LayoutGrid : CATEGORY_ICONS[category] || Bot; }
function getToolGradient(category: ToolCategory) { return CATEGORY_GRADIENTS[category] || "from-violet-600/30 via-cyan-500/10 to-fuchsia-500/20"; }

/* =========================================================
   Part 04: UI Components
   ========================================================= */

function ToolThumbnail({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const Icon = getCategoryIcon(tool.category);
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${getToolGradient(tool.category)} ${compact ? "h-16 w-16 shrink-0" : "aspect-[16/8] w-full"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_30%)]" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/4 top-1/3 h-16 w-16 animate-pulse rounded-full bg-violet-400/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 h-12 w-12 animate-pulse rounded-full bg-cyan-400/10 blur-2xl" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className={`flex items-center justify-center rounded-2xl border border-white/15 bg-black/25 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
          <Icon className={compact ? "h-5 w-5 text-white" : "h-7 w-7 text-white"} />
        </div>
      </div>
      {!compact && (
        <>
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">{tool.category}</span>
            {tool.aiPowered && <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-200 backdrop-blur-md"><Sparkles className="h-3 w-3" /> AI</span>}
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {tool.trending && <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/20 bg-orange-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-orange-300 backdrop-blur-md"><Flame className="h-3 w-3" /> Trending</span>}
              {tool.isNew && <span className="rounded-full border border-emerald-400/20 bg-emerald-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">New</span>}
            </div>
            <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-bold text-white/80 backdrop-blur-md">{tool.pricing}</span>
          </div>
        </>
      )}
    </div>
  );
}

function ToolCard({ tool, isFavorite, viewMode, onFavorite, onOpen }: { tool: Tool; isFavorite: boolean; viewMode: "grid" | "compact"; onFavorite: (id: string) => void; onOpen: (tool: Tool) => void }) {
  if (viewMode === "compact") {
    return (
      <div onClick={() => onOpen(tool)} className="group flex cursor-pointer min-h-[112px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-white/[0.06]">
        <ToolThumbnail tool={tool} compact />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-black text-white transition group-hover:text-cyan-300">{tool.title}</h3>
            {tool.isNew && <span className="shrink-0 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-400">New</span>}
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{tool.description}</p>
          <div className="mt-2 flex items-center gap-3 text-[10px] font-semibold text-muted-foreground">
            <span className="text-cyan-400">{tool.category}</span><span>•</span>
            <span className="inline-flex items-center gap-1 text-amber-400"><Star className="h-3 w-3 fill-current" />{tool.rating}</span><span>•</span>
            <span>{formatToolUsers(tool.users)} users</span>
          </div>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button type="button" onClick={(e) => { e.stopPropagation(); onFavorite(tool.id); }} className={`rounded-xl border p-2 transition ${isFavorite ? "border-amber-500/30 bg-amber-500/10 text-amber-400" : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}>
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => onOpen(tool)} className="group cursor-pointer relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-950/20">
      <div className="p-3 pb-0"><ToolThumbnail tool={tool} /></div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-400">{tool.category}</span>
              <span className={`rounded-md border px-2 py-0.5 text-[9px] font-bold ${badgeStyles[tool.badge] || badgeStyles["Popular"]}`}>{tool.badge}</span>
            </div>
            <h3 className="mt-2.5 truncate text-base font-black text-white transition group-hover:text-cyan-300">{tool.title}</h3>
          </div>
          <button type="button" onClick={(e) => { e.stopPropagation(); onFavorite(tool.id); }} className={`shrink-0 rounded-xl border p-2 transition ${isFavorite ? "border-amber-500/30 bg-amber-500/10 text-amber-400" : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}>
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-muted-foreground">{tool.description}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-semibold">
            <span className="inline-flex items-center gap-1 text-amber-400"><Star className="h-3.5 w-3.5 fill-current" />{tool.rating}</span>
            <span className="text-muted-foreground">{formatToolUsers(tool.users)} users</span>
          </div>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-bold text-muted-foreground">{tool.pricing}</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="truncate text-[10px] font-semibold text-muted-foreground">{tool.subCategory}</span>
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-bold text-cyan-400 transition-transform group-hover:translate-x-1">
            Open Tool <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function MarketplaceStatCard({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.055]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-400 group-hover:bg-cyan-500/10">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-lg font-black tracking-tight text-white">{value}</p>
          <p className="truncate text-[11px] text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Part 05: MAIN EXPORT DEFAULT COMPONENT
   ========================================================= */

export default function AiTools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ToolCategory>("All");
  const [selectedPricing, setSelectedPricing] = useState<"All Pricing" | ToolPricing>("All Pricing");
  const [selectedSort, setSelectedSort] = useState<ToolsSortMode>("Recommended");
  const [selectedSubCategory, setSelectedSubCategory] = useState<"All" | ToolSubCategory>("All");
  const [activeTab, setActiveTab] = useState<ToolsTab>("all");
  
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = window.localStorage.getItem(TOOLS_STORAGE_KEY);
        if (stored) setFavorites(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  const toggleFavorite = (toolId: string) => {
    const newFavorites = favorites.includes(toolId) ? favorites.filter(id => id !== toolId) : [...favorites, toolId];
    setFavorites(newFavorites);
    if (typeof window !== "undefined") window.localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const openTool = (tool: Tool) => {
    window.location.href = tool.route;
  };

  const { tools: paginatedTools, pagination, totalBeforePagination } = discoverMarketplaceTools({
    query: searchQuery,
    category: selectedCategory,
    subCategory: selectedSubCategory,
    pricing: selectedPricing as any,
    sort: selectedSort,
    page: currentPage,
    perPage: viewMode === "grid" ? TOOLS_PER_PAGE_GRID : TOOLS_PER_PAGE_COMPACT,
    tab: activeTab,
    favorites,
  });

  const availableSubCategories = useMemo(() => {
    let base = VALID_MARKETPLACE_TOOLS;
    if (selectedCategory !== "All") base = base.filter(t => t.category === selectedCategory);
    return Array.from(new Set(base.map(t => t.subCategory))).sort();
  }, [selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPricing("All Pricing");
    setSelectedSort("Recommended");
    setSelectedSubCategory("All");
    setActiveTab("all");
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page < 1 || page > pagination.totalPages) return;
    setIsLoading(true);
    setCurrentPage(page);
    window.setTimeout(() => setIsLoading(false), 250);
  };

  const handleCategoryScroll = (direction: "left" | "right") => {
    const element = document.getElementById("ai-tools-category-scroll");
    if (element) element.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

  const visibleCategories = showAllCategories ? TOOL_CATEGORIES : TOOL_CATEGORIES.slice(0, 8);
  const activeFilterCount = (selectedCategory !== "All" ? 1 : 0) + (selectedPricing !== "All Pricing" ? 1 : 0) + (selectedSubCategory !== "All" ? 1 : 0);

  const tabItems = [
    { id: "all" as const, label: "All Tools", count: VALID_MARKETPLACE_TOOLS.length, icon: LayoutGrid },
    { id: "trending" as const, label: "Trending", count: VALID_MARKETPLACE_TOOLS.filter(t => t.trending).length, icon: Flame },
    { id: "new" as const, label: "New", count: VALID_MARKETPLACE_TOOLS.filter(t => t.isNew).length, icon: Sparkles },
    { id: "favorites" as const, label: "Favorites", count: favorites.length, icon: Heart },
  ];

  return (
    <section id="ai-tools" className="relative overflow-hidden py-20 text-white min-h-screen bg-black/95">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[35%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-violet-300">
            <Sparkles className="h-4 w-4" /> AI Tools Marketplace
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything You Need <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mt-2">In One AI Workspace</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Discover powerful AI tools for music, voice, video, images, coding, business, automation, productivity and more.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            <MarketplaceStatCard label="AI Tools" value={`${VALID_MARKETPLACE_TOOLS.length}+`} icon={Bot} />
            <MarketplaceStatCard label="Categories" value={`${TOOL_CATEGORIES.length - 1}+`} icon={LayoutGrid} />
            <MarketplaceStatCard label="AI Models" value="50+" icon={Brain} />
            <MarketplaceStatCard label="Available 24/7" value="24/7" icon={Clock3} />
          </div>
        </div>

        {/* Filters & Search Box */}
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 items-center gap-2 w-full xl:w-auto">
              <button onClick={() => handleCategoryScroll("left")} className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white lg:flex"><ChevronLeft className="h-4 w-4" /></button>
              <div id="ai-tools-category-scroll" className="flex min-w-0 gap-2 overflow-x-auto scrollbar-none pb-2 xl:pb-0">
                {visibleCategories.map((category) => {
                  const Icon = getCategoryIcon(category);
                  const isSelected = selectedCategory === category;
                  const count = category === "All" ? VALID_MARKETPLACE_TOOLS.length : VALID_MARKETPLACE_TOOLS.filter(t => t.category === category).length;
                  return (
                    <button key={category} onClick={() => { setSelectedCategory(category); setSelectedSubCategory("All"); setCurrentPage(1); }} className={`group flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${isSelected ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300" : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}>
                      <Icon className="h-4 w-4" />
                      <span>{category === "All" ? "All Tools" : category}</span>
                      <span className={`rounded-md px-1.5 py-0.5 text-[9px] ${isSelected ? "bg-cyan-500/15 text-cyan-300" : "bg-white/5 text-muted-foreground"}`}>{count}</span>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => handleCategoryScroll("right")} className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white lg:flex"><ChevronRight className="h-4 w-4" /></button>
              <button onClick={() => setShowAllCategories(!showAllCategories)} className="hidden shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] font-bold text-muted-foreground hover:bg-white/10 hover:text-white md:block">
                {showAllCategories ? "Less" : "More"}
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); if(e.target.value.trim()) setActiveTab("all"); }} placeholder="Search tools, features, categories..." className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-10 text-sm text-white outline-none transition focus:border-cyan-500/40" />
              {searchQuery && <button onClick={() => updateSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"><X className="h-4 w-4" /></button>}
            </div>

            <div className="flex gap-2">
              <button onClick={() => setShowFilters(!showFilters)} className={`inline-flex h-12 items-center gap-2 rounded-xl border px-4 text-xs font-bold transition ${showFilters || activeFilterCount > 0 ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300" : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10"}`}>
                <SlidersHorizontal className="h-4 w-4" /> Filters
                {activeFilterCount > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[9px] text-cyan-300">{activeFilterCount}</span>}
              </button>
              <select value={selectedSort} onChange={(e) => { setSelectedSort(e.target.value as ToolsSortMode); setCurrentPage(1); }} className="h-12 rounded-xl border border-white/10 bg-zinc-900 px-4 text-xs font-bold text-white outline-none focus:border-cyan-500/40">
                {TOOL_SORT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs font-semibold text-muted-foreground">Pricing Model</label>
                <select value={selectedPricing} onChange={(e) => { setSelectedPricing(e.target.value as any); setCurrentPage(1); }} className="w-full h-10 rounded-xl border border-white/10 bg-black/40 px-3 text-sm outline-none text-white">
                  {TOOL_PRICING_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900">{opt}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-muted-foreground">Sub-Category</label>
                <select value={selectedSubCategory} onChange={(e) => { setSelectedSubCategory(e.target.value as any); setCurrentPage(1); }} className="w-full h-10 rounded-xl border border-white/10 bg-black/40 px-3 text-sm outline-none text-white">
                  <option value="All" className="bg-zinc-900">All Sub-categories</option>
                  {availableSubCategories.map(opt => <option key={opt} value={opt} className="bg-zinc-900">{opt}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2 md:col-span-3 flex justify-end">
                <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-white flex items-center gap-1">
                  <X className="w-3 h-3"/> Clear All Filters
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 gap-2 overflow-x-auto scrollbar-none">
              {tabItems.map((tab) => (
                <button key={tab.id} onClick={() => { setActiveTab(tab.id); setCurrentPage(1); }} className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${activeTab === tab.id ? "border-violet-500/40 bg-violet-500/10 text-violet-300" : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}>
                  <tab.icon className={`h-4 w-4 ${activeTab === tab.id && tab.id === "favorites" ? "fill-current" : ""}`} />
                  <span>{tab.label}</span>
                  <span className={`rounded-md px-1.5 py-0.5 text-[9px] ${activeTab === tab.id ? "bg-violet-500/15 text-violet-300" : "bg-white/5 text-muted-foreground"}`}>{tab.count}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 sm:flex">
                <button onClick={() => setViewMode("grid")} className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${viewMode === "grid" ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"}`}><Grid3X3 className="h-4 w-4" /></button>
                <button onClick={() => setViewMode("compact")} className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${viewMode === "compact" ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"}`}><List className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400"><Bot className="h-3.5 w-3.5" /></div>
            <p>Showing <span className="text-white">{totalBeforePagination}</span> tools</p>
            {selectedCategory !== "All" && <><span className="mx-1">/</span><span className="text-cyan-400">{selectedCategory}</span></>}
            {searchQuery && <><span className="mx-1">/</span><span className="text-white">"{searchQuery}"</span></>}
          </div>
          <div className="flex items-center gap-3 text-[10px] font-semibold text-muted-foreground">
            <span>Page <span className="text-white">{currentPage}</span> of <span className="text-white">{pagination.totalPages}</span></span>
          </div>
        </div>

        {/* Tool Grid */}
        <div className="mt-6 min-h-[400px]">
          {isLoading ? (
            <div className={viewMode === "compact" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`animate-pulse rounded-3xl border border-white/10 bg-white/[0.035] ${viewMode === "compact" ? "h-[116px]" : "h-[350px]"}`} />
              ))}
            </div>
          ) : paginatedTools.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-20 text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 mb-6"><Search className="h-7 w-7 text-violet-300" /></div>
              <h3 className="text-xl font-black text-white">No tools found</h3>
              <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters, clearing your search, or selecting a different category.</p>
              <button onClick={clearFilters} className="mt-6 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500">Clear All Filters</button>
            </div>
          ) : (
            <div className={viewMode === "compact" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
              {paginatedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} isFavorite={favorites.includes(tool.id)} viewMode={viewMode} onFavorite={toggleFavorite} onOpen={openTool} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {!isLoading && pagination.totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2 border-t border-white/10 pt-8">
            <button onClick={() => changePage(currentPage - 1)} disabled={!pagination.hasPrevious} className="rounded-xl border border-white/10 p-2 text-muted-foreground hover:bg-white/5 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1">
              {Array.from({ length: pagination.totalPages }).slice(0, 7).map((_, i) => {
                const page = i + 1;
                return (
                  <button key={page} onClick={() => changePage(page)} className={`w-10 h-10 rounded-xl border text-sm font-bold transition ${currentPage === page ? "border-violet-500/40 bg-violet-500/15 text-violet-300" : "border-white/10 text-muted-foreground hover:bg-white/5 hover:text-white"}`}>
                    {page}
                  </button>
                );
              })}
            </div>
            <button onClick={() => changePage(currentPage + 1)} disabled={!pagination.hasNext} className="rounded-xl border border-white/10 p-2 text-muted-foreground hover:bg-white/5 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 via-cyan-500/5 to-fuchsia-500/10">
          <div className="relative px-6 py-10 text-center sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Rocket className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">Build something amazing</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                Choose a tool, start creating and turn your idea into something real.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button onClick={clearFilters} className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-violet-500">
                  <Grid3X3 className="h-4 w-4" /> Explore All {VALID_MARKETPLACE_TOOLS.length} Tools
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   Part 20: Final Named Exports
   ========================================================= */

export {
  getAvailableCategories,
  getAvailableSubCategories,
  getAvailablePricingOptions,
  getAvailableToolTypes,
  getAvailableToolFeatures,
  getAvailableProviders,
  serializeToolFilters,
  serializeToolSearchState,
  serializeToolsTab,
  buildMarketplaceQuery,
  parseToolCategory,
  parseToolSubCategory,
  parseToolPricing,
  parseToolType,
  parseToolFeature,
  parseToolProvider,
  parseToolsSort,
  parseToolsTab,
  parseToolsPage,
  parseToolsPerPage,
  parseMarketplaceQuery,
  createDefaultMarketplaceState,
  normalizeMarketplaceState,
  updateToolCategory,
  updateToolSubCategory,
  updateToolPricing,
  updateToolType,
  updateToolFeature,
  updateToolProvider,
  updateToolSearchQuery,
  updateToolSort,
  updateToolPage,
  updateToolsPerPage,
  updateToolsTab,
  toggleMobileToolFilters,
  selectMarketplaceTool,
  clearMarketplaceFilters,
  clearMarketplaceSearch,
  resetMarketplaceState,
  loadToolAnalyticsEvents,
  saveToolAnalyticsEvents,
  trackToolAnalytics,
  trackToolView,
  trackToolOpen,
  trackToolFavorite,
  trackToolShare,
  trackToolCopy,
  trackToolSearch,
  getToolAnalytics,
  getMarketplaceAnalytics,
  getToolPopularityScore,
  rankToolsByPopularity,
  getAnalyticsPopularTools,
  getPopularToolsByCategory,
  getFavoriteAnalytics,
  getCategoryAnalytics,
  getAllCategoryAnalytics,
  buildMarketplaceInsights,
  getToolPerformance,
  getMarketplacePerformance,
  clearToolAnalytics,
  validateMarketplaceTool,
  validateMarketplaceDataset,
  getInvalidMarketplaceTools,
  getMarketplaceValidationSummary,
  buildToolSearchIndex,
  indexedToolSearch,
  buildToolSearchSuggestions,
  getMarketplaceCounts,
  getMarketplaceOverview,
  deduplicateTools,
  mergeToolCollections,
  buildMegaRecommendationFeed,
  buildCategoryOverview,
  buildProviderOverview,
  buildFeatureOverview,
  buildMarketplaceExport,
};
