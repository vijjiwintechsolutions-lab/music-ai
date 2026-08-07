"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Music4 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "AI Tools", href: "#tools" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/20">
            <Music4 className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Market1 AI
            </h1>
            <p className="text-xs text-muted-foreground">
              AI Music Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Login</Button>

          <Button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 hover:opacity-90">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border p-2 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-background md:hidden">
          <div className="flex flex-col gap-2 p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 transition hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}

            <Button
              variant="outline"
              className="mt-4"
            >
              Login
            </Button>

            <Button className="bg-gradient-to-r from-violet-600 to-cyan-500">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
