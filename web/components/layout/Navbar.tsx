"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  Bell, 
  ChevronDown, 
  Code2, 
  Image as ImageIcon, 
  Video, 
  Music, 
  Bot, 
  Globe, 
  Menu, 
  X 
} from "lucide-react";

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const studiosList = [
    { name: "AI Code Studio", desc: "Full-stack apps & APIs", href: "/studio/code", icon: <Code2 className="h-5 w-5 text-cyan-400" /> },
    { name: "AI Image Studio", desc: "Generative art & graphics", href: "/studio/image", icon: <ImageIcon className="h-5 w-5 text-fuchsia-400" /> },
    { name: "AI Video Studio", desc: "Cinematic videos & reels", href: "/studio/video", icon: <Video className="h-5 w-5 text-rose-400" /> },
    { name: "AI Song Studio", desc: "Original tracks & voice", href: "/studio/song", icon: <Music className="h-5 w-5 text-amber-400" /> },
    { name: "AI Agent Studio", desc: "Autonomous workflows", href: "/studio/agent", icon: <Bot className="h-5 w-5 text-violet-400" /> },
    { name: "AI Website Builder", desc: "Prompt-to-site generator", href: "/studio/website", icon: <Globe className="h-5 w-5 text-emerald-400" /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-fuchsia-500 shadow-lg shadow-cyan-500/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight">Market AI</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-cyan-400">SaaS Ecosystem</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* AI Tools / Mega Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              onBlur={() => setTimeout(() => setIsToolsOpen(false), 200)}
              className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-white transition"
            >
              <span>AI Studios</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega Menu Panel */}
            {isToolsOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-[600px] -translate-x-1/2 rounded-3xl border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-4">
                {studiosList.map((studio) => (
                  <Link
                    key={studio.name}
                    href={studio.href}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 p-4 transition hover:border-cyan-500/50 hover:bg-white/5 group"
                  >
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition group-hover:scale-110">
                      {studio.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold group-hover:text-cyan-400 transition">{studio.name}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{studio.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/dashboard" className="text-sm font-semibold text-muted-foreground hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-muted-foreground hover:text-white transition">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm font-semibold text-muted-foreground hover:text-white transition">
            Documentation
          </Link>
        </nav>

        {/* Right Actions (Search, Notifications, Profile) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Quick Search trigger */}
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:border-cyan-500/50 transition">
            <Search className="h-5 w-5" />
          </button>

          {/* Notifications Button */}
          <button 
            onClick={() => setHasNotifications(false)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:border-cyan-500/50 transition"
          >
            <Bell className="h-5 w-5" />
            {hasNotifications && (
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            )}
          </button>

          {/* Launch App / Dashboard CTA */}
          <Link
            href="/dashboard"
            className="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
          >
            Launch Console
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-background px-6 py-6 space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Studios</p>
            {studiosList.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-muted-foreground hover:text-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-xl bg-cyan-600 py-3 text-center text-sm font-bold text-white"
            >
              Launch Console
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
