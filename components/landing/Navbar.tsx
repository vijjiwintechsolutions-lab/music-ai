"use client";

import Link from "next/link";
import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Music2 className="h-7 w-7 text-violet-500" />
          <span className="text-xl font-bold">
            Market1 AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#">Features</Link>
          <Link href="#">AI Tools</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
