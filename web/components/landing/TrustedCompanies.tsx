const companies = [
  "Spotify",
  "YouTube",
  "Apple Music",
  "Amazon Music",
  "TikTok",
  "Instagram",
  "Meta",
  "Netflix",
  "Adobe",
  "OpenAI",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-white/10 bg-background/40 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by creators worldwide
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">

          {companies.map((company) => (
            <div
              key={company}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold text-muted-foreground transition duration-300 hover:border-violet-500 hover:text-white hover:shadow-xl"
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
