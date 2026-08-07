"use client";

import { useState } from "react";

import {
  Image,
  Wand2,
  Sparkles,
  Palette,
  Camera,
  Upload,
  Download,
  Brush,
  Rocket,
  Search,
  Layout,
  Smartphone,
  Monitor,
} from "lucide-react";

const styles = [
  "Photorealistic",
  "Anime",
  "3D Render",
  "Digital Art",
  "Oil Painting",
  "Watercolor",
  "Pixel Art",
  "Fantasy",
];

export default function ImageStudio() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(styles[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Image Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate, edit and enhance professional AI images from text or photos.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Describe Your Image
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              <Wand2 className="mr-2 inline h-5 w-5" />
              Generate Image
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Random Prompt
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Project
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Style
          </h2>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-background p-4"
          >
            {styles.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <Image className="mx-auto mb-4 h-16 w-16 text-fuchsia-500" />

            <p className="font-semibold">
              AI Image Ready
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            icon: <Camera className="mx-auto h-8 w-8" />,
            title: "Resolution",
            value: "8K",
          },
          {
            icon: <Palette className="mx-auto h-8 w-8" />,
            title: "Styles",
            value: "500+",
          },
          {
            icon: <Sparkles className="mx-auto h-8 w-8" />,
            title: "AI Models",
            value: "100+",
          },
          {
            icon: <Download className="mx-auto h-8 w-8" />,
            title: "Export",
            value: "PNG",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div className="text-fuchsia-500">
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

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Image Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Text to Image",
              "Image Variations",
              "Prompt Enhancer",
              "Negative Prompt",
              "Image Upscaler",
              "Background Remover",
              "Magic Eraser",
              "Inpainting",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Brush className="mb-3 h-5 w-5" />
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Studio Actions
          </h2>

          <div className="space-y-4">
            {[
              "Upload Image",
              "Edit Image",
              "Remove Background",
              "Replace Object",
              "Generate Variants",
              "Upscale",
              "Export",
              "Cloud Storage",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Upload className="mr-2 inline h-5 w-5" />
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
              AI Photo Editor
            </h2>

            <p className="mt-2 text-muted-foreground">
              Edit, enhance and transform photos using professional AI-powered editing tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Auto Enhance",
              "Background Removal",
              "Object Removal",
              "Sky Replacement",
              "Portrait Enhancement",
              "Face Retouch",
              "Color Correction",
              "AI Restoration",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Camera className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Enhance Photo
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Retouch
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Restore Image
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Editing Styles
          </h2>

          <div className="space-y-4">
            {[
              "Natural",
              "Studio",
              "HDR",
              "Vintage",
              "Cinematic",
              "Black & White",
              "Modern",
              "Premium",
            ].map((styleItem) => (
              <button
                key={styleItem}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {styleItem}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Editing Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Magic Eraser",
              "Skin Retouch",
              "Eye Enhancement",
              "Smile Correction",
              "Hair Enhancement",
              "Lighting Fix",
              "Noise Reduction",
              "Sharpen",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Smart Adjustments
          </h2>

          <div className="space-y-4">
            {[
              "Brightness",
              "Contrast",
              "Exposure",
              "Highlights",
              "Shadows",
              "Temperature",
              "Saturation",
              "Vibrance",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Photo Editor Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Projects",
            "Edited Photos",
            "Portraits",
            "Background Removed",
            "Restored Images",
            "AI Enhancements",
            "Filters",
            "Exports",
            "Cloud Sync",
            "Favorites",
            "Templates",
            "Quality Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Camera className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Background & Object Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Remove backgrounds, replace objects and extend images using advanced generative AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Background Remover",
              "Object Replacement",
              "Magic Eraser",
              "Generative Fill",
              "Inpainting",
              "Outpainting",
              "Canvas Expansion",
              "AI Composition",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Brush className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Remove Background
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Fill
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Expand Canvas
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Editing Modes
          </h2>

          <div className="space-y-4">
            {[
              "Smart Select",
              "Quick Mask",
              "Layer Edit",
              "Object Detect",
              "Edge Refine",
              "Auto Blend",
              "Perspective",
              "AI Mask",
            ].map((mode) => (
              <button
                key={mode}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Composition Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Smart Layers",
              "AI Shadows",
              "Reflection",
              "Lighting Match",
              "Perspective Warp",
              "Object Clone",
              "Scene Merge",
              "Auto Composition",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Enhancement
          </h2>

          <div className="space-y-4">
            {[
              "Auto Cleanup",
              "Object Detection",
              "Smart Crop",
              "Auto Frame",
              "Image Balance",
              "Depth Mapping",
              "AI Relighting",
              "Scene Optimizer",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            AI Editing Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Background Removed",
            "Objects Edited",
            "Generative Fill",
            "Canvas Expanded",
            "Magic Erase",
            "AI Layers",
            "Masks",
            "Exports",
            "Cloud Files",
            "Versions",
            "Templates",
            "Editing Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Brush className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Portrait & Face Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate studio-quality portraits, restore faces and create professional headshots using advanced AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Portrait",
              "Professional Headshot",
              "Face Restoration",
              "Beauty Retouch",
              "Face Swap",
              "Age Transformation",
              "Expression Editor",
              "Hair Style Generator",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Camera className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate Portrait
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Face Retouch
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Headshot
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Portrait Styles
          </h2>

          <div className="space-y-4">
            {[
              "Business",
              "Fashion",
              "Studio",
              "Outdoor",
              "Cinematic",
              "Luxury",
              "Minimal",
              "Creative",
            ].map((styleItem) => (
              <button
                key={styleItem}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {styleItem}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Face AI Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Skin Smoothing",
              "Teeth Whitening",
              "Eye Enhancement",
              "Smile Adjustment",
              "Beard Generator",
              "Hair Color",
              "Makeup AI",
              "Accessories",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Portrait Enhancements
          </h2>

          <div className="space-y-4">
            {[
              "Studio Lighting",
              "Blur Background",
              "Color Match",
              "HDR Portrait",
              "AI Relighting",
              "Pose Correction",
              "Lens Effects",
              "Portrait Upscale",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Portrait Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Portraits",
            "Headshots",
            "Restorations",
            "Retouched Faces",
            "Face Swaps",
            "Age Edits",
            "Hair Styles",
            "Makeup Designs",
            "Accessories",
            "Exports",
            "Templates",
            "Portrait Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Camera className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Design & Graphics Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design professional marketing materials, social graphics and branding assets using AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Poster Design",
              "Social Media Post",
              "Flyer",
              "Banner",
              "Business Card",
              "Brochure",
              "Magazine Cover",
              "Logo Concepts",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Palette className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate Design
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Layout
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Brand Kit
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Design Categories
          </h2>

          <div className="space-y-4">
            {[
              "Marketing",
              "Business",
              "Education",
              "Events",
              "Restaurant",
              "E-Commerce",
              "Corporate",
              "Creative",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Graphic Design Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Layout",
              "Smart Resize",
              "Typography",
              "Icon Library",
              "Shape Builder",
              "Illustrations",
              "Color Palette",
              "Mockups",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Branding Center
          </h2>

          <div className="space-y-4">
            {[
              "Logo Kit",
              "Brand Colors",
              "Fonts",
              "Business Identity",
              "Packaging",
              "Presentation",
              "Brand Guidelines",
              "Marketing Kit",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Graphics Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Designs",
            "Posters",
            "Flyers",
            "Banners",
            "Logos",
            "Business Cards",
            "Brand Kits",
            "Templates",
            "Projects",
            "Exports",
            "Cloud Files",
            "Design Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Palette className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Product Photography Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create studio-quality product photos, e-commerce listings and lifestyle mockups with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Product Photography",
              "Background Generator",
              "Studio Lighting",
              "Reflection Generator",
              "Packaging Mockups",
              "Lifestyle Scenes",
              "Marketplace Images",
              "Catalog Creator",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Camera className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate Product Photos
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Mockup
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Catalog
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Product Categories
          </h2>

          <div className="space-y-4">
            {[
              "Fashion",
              "Electronics",
              "Jewelry",
              "Furniture",
              "Beauty",
              "Food",
              "Automotive",
              "Home Decor",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Photography Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Studio Setup",
              "HDR Lighting",
              "Shadow Control",
              "Reflection Control",
              "360° Viewer",
              "Multi-angle Capture",
              "Color Calibration",
              "Image Stacking",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Export
          </h2>

          <div className="space-y-4">
            {[
              "Amazon",
              "Flipkart",
              "eBay",
              "Etsy",
              "Shopify",
              "WooCommerce",
              "Instagram Shop",
              "Facebook Shop",
            ].map((market) => (
              <button
                key={market}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {market}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Product Studio Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Products",
            "Studio Photos",
            "Mockups",
            "Catalogs",
            "Backgrounds",
            "Lighting Presets",
            "Marketplace Exports",
            "Lifestyle Scenes",
            "Projects",
            "Templates",
            "Downloads",
            "Product Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Camera className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Art & Illustration Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create concept art, digital paintings, fantasy worlds and professional illustrations with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Digital Painting",
              "Concept Art",
              "Fantasy Art",
              "Comic Creator",
              "Manga Studio",
              "Character Design",
              "Environment Art",
              "NFT Generator",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Palette className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate Artwork
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Character Creator
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Environment Builder
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Art Styles
          </h2>

          <div className="space-y-4">
            {[
              "Anime",
              "Comic",
              "Realistic",
              "Fantasy",
              "Cyberpunk",
              "Steampunk",
              "Pixel Art",
              "Watercolor",
            ].map((styleItem) => (
              <button
                key={styleItem}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {styleItem}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Illustration Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Line Art",
              "Coloring",
              "Sketch Generator",
              "Perspective",
              "Lighting",
              "Textures",
              "Brush Library",
              "Reference Board",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Creative Assets
          </h2>

          <div className="space-y-4">
            {[
              "Characters",
              "Creatures",
              "Weapons",
              "Vehicles",
              "Buildings",
              "Landscapes",
              "Magic Effects",
              "Props",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Art Studio Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Artworks",
            "Concepts",
            "Characters",
            "Environments",
            "Comics",
            "NFTs",
            "Brushes",
            "Styles",
            "Projects",
            "Templates",
            "Exports",
            "Creative Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Palette className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Social Media Design Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design professional social media graphics, thumbnails and branded content for every platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Instagram Post",
              "Instagram Story",
              "YouTube Thumbnail",
              "YouTube Banner",
              "Facebook Cover",
              "LinkedIn Banner",
              "X Post",
              "Pinterest Pin",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Create Design
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Resize
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Brand Templates
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Platform Templates
          </h2>

          <div className="space-y-4">
            {[
              "Instagram",
              "Facebook",
              "YouTube",
              "LinkedIn",
              "Pinterest",
              "X",
              "Threads",
              "WhatsApp",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Social Design Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Text Effects",
              "Background Generator",
              "Gradient Creator",
              "Shape Library",
              "Sticker Pack",
              "Emoji Pack",
              "AI Typography",
              "Color Themes",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Brand Assets
          </h2>

          <div className="space-y-4">
            {[
              "Logo",
              "Brand Colors",
              "Fonts",
              "Icons",
              "Illustrations",
              "Templates",
              "Campaign Kit",
              "Media Library",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Social Media Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Posts",
            "Stories",
            "Thumbnails",
            "Banners",
            "Templates",
            "Campaigns",
            "Brand Kits",
            "Exports",
            "Projects",
            "Cloud Files",
            "Scheduled Posts",
            "Social Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Vector & SVG Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create scalable vector graphics, logos, icons and illustrations with AI-powered precision.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "SVG Generator",
              "Vector Converter",
              "Logo Vectorizer",
              "Icon Creator",
              "Illustration Vectorizer",
              "Infographic Builder",
              "Pattern Generator",
              "AI Tracing",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Palette className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate Vector
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Convert to SVG
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Assets
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Vector Categories
          </h2>

          <div className="space-y-4">
            {[
              "Icons",
              "Logos",
              "Illustrations",
              "Charts",
              "Patterns",
              "Stickers",
              "UI Assets",
              "Brand Assets",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Vector Design Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Bezier Editor",
              "Pen Tool",
              "Shape Builder",
              "Path Editor",
              "Gradient Mesh",
              "Color Palette",
              "Stroke Styles",
              "Boolean Operations",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Export Formats
          </h2>

          <div className="space-y-4">
            {[
              "SVG",
              "PDF",
              "EPS",
              "AI",
              "PNG",
              "JPG",
              "WebP",
              "Figma",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Vector Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "SVG Files",
            "Vectors",
            "Icons",
            "Logos",
            "Illustrations",
            "Patterns",
            "Exports",
            "Templates",
            "Projects",
            "Collections",
            "Cloud Sync",
            "Vector Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Palette className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Print & Publishing Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Design print-ready books, magazines, brochures and marketing materials with AI-powered publishing tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Book Cover",
              "Magazine Layout",
              "Newspaper Design",
              "Poster Design",
              "Brochure Creator",
              "Packaging Design",
              "Print Catalog",
              "Business Stationery",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Create Print Design
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export PDF
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Print Preview
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Print Templates
          </h2>

          <div className="space-y-4">
            {[
              "A4",
              "A3",
              "Letter",
              "Legal",
              "Business Card",
              "Flyer",
              "Banner",
              "Packaging",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Publishing Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "CMYK Conversion",
              "Bleed Settings",
              "Crop Marks",
              "Print Safe Area",
              "Typography",
              "Page Layout",
              "Grid System",
              "Color Profiles",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Export Formats
          </h2>

          <div className="space-y-4">
            {[
              "PDF",
              "PDF/X",
              "PNG",
              "JPG",
              "TIFF",
              "EPS",
              "SVG",
              "Print Package",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Publishing Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Books",
            "Magazines",
            "Posters",
            "Brochures",
            "Packaging",
            "PDF Exports",
            "Templates",
            "Projects",
            "Print Jobs",
            "Assets",
            "Downloads",
            "Publishing Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image Analytics & Asset Management
            </h2>

            <p className="mt-2 text-muted-foreground">
              Organize, search, analyze and manage every AI image from one intelligent digital asset platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Asset Library",
              "AI Search",
              "Smart Collections",
              "Image Analytics",
              "Auto Tagging",
              "Duplicate Finder",
              "Cloud Sync",
              "Version History",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Open Library
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Search
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Organize Assets
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Asset Categories
          </h2>

          <div className="space-y-4">
            {[
              "Photos",
              "Designs",
              "Illustrations",
              "Vectors",
              "Mockups",
              "Logos",
              "Brand Assets",
              "Templates",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Digital Asset Management
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Collections",
              "Folders",
              "Favorites",
              "Labels",
              "Face Recognition",
              "Object Detection",
              "Color Search",
              "Metadata",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Insights
          </h2>

          <div className="space-y-4">
            {[
              "Most Used",
              "Recent Uploads",
              "Storage Usage",
              "Duplicate Assets",
              "Trending Designs",
              "Popular Styles",
              "Activity History",
              "Usage Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Asset Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Images",
            "Collections",
            "Favorites",
            "Cloud Files",
            "Storage",
            "AI Tags",
            "Versions",
            "Downloads",
            "Shared Assets",
            "Templates",
            "Analytics",
            "Asset Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Collaboration & Cloud Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with designers, teams and clients in real time using cloud-powered creative workspaces.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Cloud Workspace",
              "Team Projects",
              "Shared Library",
              "Real-time Editing",
              "Design Reviews",
              "Version Control",
              "Client Approval",
              "Task Manager",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Upload className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
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
            Team Features
          </h2>

          <div className="space-y-4">
            {[
              "Comments",
              "Annotations",
              "Mentions",
              "Notifications",
              "Activity Feed",
              "Approvals",
              "Review Queue",
              "Design History",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Workspace Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Cloud Storage",
              "Asset Sharing",
              "Brand Library",
              "Templates",
              "File Locking",
              "Merge Changes",
              "Backup",
              "Restore",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Management
          </h2>

          <div className="space-y-4">
            {[
              "Administrators",
              "Editors",
              "Designers",
              "Reviewers",
              "Guests",
              "Permissions",
              "Audit Logs",
              "Team Analytics",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Collaboration Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Projects",
            "Team Members",
            "Shared Files",
            "Tasks",
            "Comments",
            "Approvals",
            "Versions",
            "Cloud Storage",
            "Templates",
            "Reviews",
            "Activity",
            "Team Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Upload className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image API & Automation Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Integrate AI image generation into applications using APIs, webhooks, cloud rendering and automated workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Image Generation API",
              "REST API",
              "GraphQL API",
              "Batch Processing",
              "Workflow Builder",
              "Cloud Rendering",
              "Webhooks",
              "Developer SDK",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Generate API Key
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Workflow
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open API Docs
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Developer Services
          </h2>

          <div className="space-y-4">
            {[
              "API Keys",
              "SDK Downloads",
              "CLI",
              "OAuth",
              "JWT",
              "Rate Limits",
              "Webhooks",
              "GraphQL",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Automation Workflows
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Auto Generation",
              "Batch Jobs",
              "Cloud Sync",
              "Webhook Events",
              "Auto Publish",
              "Email Alerts",
              "Scheduled Tasks",
              "Workflow Logs",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            API Monitoring
          </h2>

          <div className="space-y-4">
            {[
              "API Requests",
              "Response Time",
              "Rate Limits",
              "Errors",
              "Usage Analytics",
              "Billing",
              "Logs",
              "Service Status",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            "API Keys",
            "Requests",
            "Workflows",
            "Batch Jobs",
            "Cloud Storage",
            "Webhooks",
            "SDK Downloads",
            "Usage",
            "Errors",
            "Latency",
            "Logs",
            "Developer Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image Stock Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Buy, sell and license AI-generated images, illustrations and digital assets through a global marketplace.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Stock Photos",
              "AI Art Marketplace",
              "Premium Illustrations",
              "Vector Marketplace",
              "Mockup Store",
              "Template Store",
              "NFT Marketplace",
              "Digital Assets",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Browse Marketplace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Sell Assets
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Upload Portfolio
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Categories
          </h2>

          <div className="space-y-4">
            {[
              "Photography",
              "Illustrations",
              "Vectors",
              "Logos",
              "Icons",
              "Mockups",
              "Templates",
              "Textures",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Marketplace Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Portfolio",
              "Collections",
              "Pricing",
              "Discounts",
              "Coupons",
              "Subscriptions",
              "Bundles",
              "Affiliate Program",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Creator Center
          </h2>

          <div className="space-y-4">
            {[
              "Licensing",
              "Royalty Reports",
              "Sales History",
              "Customer Reviews",
              "Downloads",
              "Trending Assets",
              "Top Sellers",
              "Revenue Analytics",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Marketplace Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Products",
            "Downloads",
            "Customers",
            "Orders",
            "Revenue",
            "Licenses",
            "Collections",
            "Portfolios",
            "Reviews",
            "Top Sellers",
            "Analytics",
            "Marketplace Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image Security & Rights Management
            </h2>

            <p className="mt-2 text-muted-foreground">
              Protect your creative assets with AI-powered copyright detection, watermarking, licensing and enterprise security.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Copyright Scanner",
              "Watermark Generator",
              "License Manager",
              "DRM Protection",
              "Content Moderation",
              "Deepfake Detection",
              "Regional Rights",
              "Security Audit",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Run Security Scan
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Apply Watermark
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate License
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Protection Features
          </h2>

          <div className="space-y-4">
            {[
              "Visible Watermark",
              "Invisible Watermark",
              "Fingerprinting",
              "Encrypted Storage",
              "Secure Sharing",
              "Download Control",
              "Access Policies",
              "Audit Trail",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Compliance Center
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "DMCA",
              "GDPR",
              "Copyright Reports",
              "License Validation",
              "Usage Tracking",
              "Access Logs",
              "Compliance Audit",
              "Security Policies",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Moderation
          </h2>

          <div className="space-y-4">
            {[
              "NSFW Detection",
              "Violence Detection",
              "Deepfake Scanner",
              "Copyright Match",
              "Policy Violations",
              "AI Risk Analysis",
              "Fraud Detection",
              "Moderation Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            "Protected Assets",
            "Licenses",
            "Watermarks",
            "Copyright Matches",
            "Security Alerts",
            "Compliance",
            "Audit Logs",
            "Moderation Jobs",
            "Downloads Blocked",
            "Deepfake Scans",
            "Policies",
            "Security Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Enterprise Image Platform
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage enterprise-scale digital assets, brand libraries and global image distribution from one AI-powered platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Enterprise Portal",
              "Brand Management",
              "Digital Asset Manager",
              "Global Distribution",
              "Enterprise Search",
              "Cloud Delivery",
              "Compliance Center",
              "Asset Governance",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Open Enterprise Portal
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Brand Center
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Asset Governance
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Enterprise Modules
          </h2>

          <div className="space-y-4">
            {[
              "Brand Library",
              "Media Portal",
              "Regional Assets",
              "Shared Templates",
              "Marketing Assets",
              "Campaign Library",
              "Corporate Identity",
              "Enterprise Archive",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Enterprise Services
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Single Sign-On",
              "Role Management",
              "Audit Logs",
              "Cloud Backup",
              "Asset Approval",
              "Workflow Engine",
              "Policy Center",
              "Disaster Recovery",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Enterprise Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Asset Usage",
              "Brand Compliance",
              "Regional Distribution",
              "Storage Reports",
              "Team Activity",
              "Asset Performance",
              "Security Events",
              "Executive Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Enterprise Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Organizations",
            "Departments",
            "Brand Assets",
            "Projects",
            "Cloud Storage",
            "Enterprise Users",
            "Templates",
            "Policies",
            "Audit Reports",
            "Compliance",
            "Analytics",
            "Enterprise Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image Operations Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Monitor rendering infrastructure, AI compute resources, storage systems and global image processing from one intelligent dashboard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Render Queue",
              "GPU Processing",
              "AI Compute Cluster",
              "Storage Manager",
              "Cloud Rendering",
              "Backup Center",
              "Recovery Manager",
              "Operations AI",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Open Operations
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Run Diagnostics
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Optimize Resources
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Infrastructure
          </h2>

          <div className="space-y-4">
            {[
              "GPU Nodes",
              "CPU Servers",
              "AI Workers",
              "Cloud Storage",
              "CDN",
              "Load Balancer",
              "Database Cluster",
              "Edge Network",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Operations Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Health Checks",
              "Auto Scaling",
              "Queue Manager",
              "Log Viewer",
              "Job Scheduler",
              "Incident Center",
              "Disaster Recovery",
              "Resource Optimizer",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Operations Insights
          </h2>

          <div className="space-y-4">
            {[
              "GPU Usage",
              "Processing Speed",
              "Storage Usage",
              "Bandwidth",
              "Queue Status",
              "Failure Prediction",
              "Cost Optimization",
              "System Alerts",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Operations Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Processing Jobs",
            "GPU Usage",
            "CPU Usage",
            "Memory",
            "Storage",
            "Bandwidth",
            "Cloud Nodes",
            "AI Workers",
            "Queue Size",
            "Backups",
            "Alerts",
            "Operations Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Education & Learning Image Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create educational illustrations, scientific diagrams, classroom visuals and interactive learning materials using AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Educational Illustrations",
              "Scientific Diagrams",
              "Math Visuals",
              "History Timelines",
              "Geography Maps",
              "Children's Book Art",
              "Worksheet Generator",
              "Learning Posters",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Image className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Create Learning Assets
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Diagrams
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Build Worksheets
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Education Categories
          </h2>

          <div className="space-y-4">
            {[
              "Mathematics",
              "Science",
              "Biology",
              "Physics",
              "Chemistry",
              "History",
              "Geography",
              "Languages",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Teaching Resources
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Flash Cards",
              "Mind Maps",
              "Flow Charts",
              "Infographics",
              "Laboratory Diagrams",
              "Presentation Slides",
              "Printable Worksheets",
              "Exam Materials",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Learning Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Resources Created",
              "Student Downloads",
              "Popular Topics",
              "Course Graphics",
              "Visual Library",
              "Teacher Activity",
              "Learning Reports",
              "Education Insights",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Education Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Lessons",
            "Illustrations",
            "Diagrams",
            "Worksheets",
            "Infographics",
            "Presentations",
            "Maps",
            "Resources",
            "Templates",
            "Downloads",
            "Reports",
            "Education Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Image className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

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
              AI Image Platform Operations Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Monitor global AI image infrastructure, rendering resources, cloud storage and enterprise operations from one intelligent control center.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Global Infrastructure",
              "AI Processing Queue",
              "Multi-cloud Storage",
              "GPU Rendering",
              "CDN Manager",
              "Backup Center",
              "Disaster Recovery",
              "Operations AI",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-fuchsia-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Open Operations Center
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Run Diagnostics
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Optimize AI Resources
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Infrastructure Services
          </h2>

          <div className="space-y-4">
            {[
              "GPU Cluster",
              "CPU Cluster",
              "AI Workers",
              "Cloud Storage",
              "CDN Network",
              "Database",
              "Load Balancer",
              "Edge Network",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Operations Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Queue Monitor",
              "Auto Scaling",
              "Resource Scheduler",
              "Performance Tuning",
              "Log Viewer",
              "Incident Manager",
              "Health Monitor",
              "Cost Optimizer",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Platform Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Processing Speed",
              "GPU Utilization",
              "Storage Usage",
              "Bandwidth",
              "Request Queue",
              "Failure Prediction",
              "System Alerts",
              "Cost Analytics",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
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
            Operations Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Processing Jobs",
            "GPU Usage",
            "CPU Usage",
            "Memory",
            "Storage",
            "Bandwidth",
            "Cloud Nodes",
            "AI Workers",
            "Queue Size",
            "Backups",
            "Alerts",
            "Operations Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-fuchsia-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-fuchsia-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-pink-500/10 to-violet-500/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Market AI Image Operating System
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Generate, edit, restore, enhance, design, publish and manage professional AI images from one intelligent creative platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-4 font-bold text-white">
              Launch Image Studio
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Images
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "AI Templates",
            value: "6000+",
          },
          {
            title: "Art Styles",
            value: "3000+",
          },
          {
            title: "Image Models",
            value: "1200+",
          },
          {
            title: "Cloud Assets",
            value: "Unlimited",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-fuchsia-500">
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
            Global AI Image Platform
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Everything needed to create, edit, organize, protect and distribute AI-generated images across every creative workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Image Generation",
            "Photo Editing",
            "Portrait Studio",
            "Background Removal",
            "Vector Design",
            "Illustration",
            "Graphics",
            "Social Media",
            "Product Photography",
            "Marketplace",
            "Analytics",
            "Security",
            "Automation",
            "Cloud Assets",
            "Enterprise",
            "Operations",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-black">
            Export & Distribution Center
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "PNG Export",
            "JPG Export",
            "WebP Export",
            "SVG Export",
            "PDF Export",
            "Cloud Storage",
            "Google Drive",
            "Dropbox",
            "OneDrive",
            "CDN Delivery",
            "API Export",
            "Enterprise Sync",
          ].map((item) => (
            <button
              key={item}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-fuchsia-500 hover:bg-white/5"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-pink-500/10 to-violet-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Create Any Image With AI
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          From realistic photography and digital artwork to marketing creatives,
          product catalogs, educational graphics, enterprise assets and brand
          management—Market AI Image Studio provides every creative tool in one
          powerful AI workspace.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-10 py-5 text-lg font-bold text-white">
            Start Creating
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            Open Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
