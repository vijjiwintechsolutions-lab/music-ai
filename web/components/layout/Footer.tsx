import Link from "next/link";
import {
  Music4,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github,
} from "lucide-react";

const productLinks = [
  "AI Song Generator",
  "AI Lyrics",
  "Voice Cloning",
  "Music Video",
  "Album Cover",
  "Vocal Remover",
];

const companyLinks = [
  "About",
  "Pricing",
  "Blog",
  "Careers",
  "Contact",
  "Affiliates",
];

const supportLinks = [
  "Help Center",
  "Documentation",
  "API",
  "Privacy Policy",
  "Terms of Service",
  "Status",
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Music4 className="h-6 w-6 text-white" />
              </div>

              <div>

                <h2 className="text-2xl font-black">
                  Market1 AI
                </h2>

                <p className="text-sm text-muted-foreground">
                  AI Music Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-muted-foreground">
              Create songs, lyrics, vocals, music videos,
              podcasts, album covers and more using one
              powerful AI platform.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:bg-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:bg-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:bg-accent"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:bg-accent"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:bg-accent"
              >
                <Github className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Product
            </h3>

            <ul className="space-y-4">

              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground transition hover:text-violet-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Company
            </h3>

            <ul className="space-y-4">

              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground transition hover:text-violet-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Support
            </h3>

            <ul className="space-y-4">

              {supportLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground transition hover:text-violet-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Market1 AI. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-500"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-500"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-500"
              >
                Cookies
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
