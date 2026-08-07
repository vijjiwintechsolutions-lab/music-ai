"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Music4,
  Search,
  Bell,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "AI Tools", href: "#tools" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg">

              <Music4 className="h-6 w-6 text-white" />

            </div>

            <div>

              <h1 className="text-xl font-black">
                Market1 AI
              </h1>

              <p className="text-xs text-muted-foreground">
                AI Music Platform
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition hover:text-violet-500"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Search */}

          <div className="hidden xl:flex">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

              <Search className="h-4 w-4 text-muted-foreground" />

              <input
                placeholder="Search AI..."
                className="w-56 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />

            </div>

          </div>

          {/* Right */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="relative rounded-xl border border-white/10 p-3 transition hover:bg-white/5">

              <Bell className="h-5 w-5" />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">

              <Sparkles className="h-4 w-4" />

              Generate

            </button>

            <button className="flex items-center gap-3 rounded-xl border border-white/10 px-3 py-2 transition hover:bg-white/5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                M
              </div>

              <span className="font-medium">
                Account
              </span>

              <ChevronDown className="h-4 w-4" />

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-xl border border-white/10 p-3 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute right-0 top-0 flex h-full w-80 flex-col border-l border-white/10 bg-background">

            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500">

                  <Music4 className="h-5 w-5 text-white" />

                </div>

                <div>

                  <h2 className="font-bold">
                    Market1 AI
                  </h2>

                  <p className="text-xs text-muted-foreground">
                    AI Music Platform
                  </p>

                </div>

              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-white/10 p-2"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <div className="p-6">

              <div className="mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                <Search className="h-4 w-4" />

                <input
                  placeholder="Search..."
                  className="flex-1 bg-transparent outline-none"
                />

              </div>

              <nav className="space-y-2">

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}

              </nav>

            </div>

            <div className="mt-auto border-t border-white/10 p-6">

              <button className="mb-4 w-full rounded-xl border border-white/10 py-3 transition hover:bg-white/5">
                Login
              </button>

              <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white">
                Generate Music
              </button>

            </div>

          </aside>

        </div>
      )}
    </>
  );
}
