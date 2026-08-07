const testimonials = [
  {
    name: "Alex Johnson",
    role: "Music Producer",
    company: "BeatLab Studio",
    image: "🎧",
    rating: 5,
    review:
      "Market1 AI completely transformed my workflow. I can create songs in minutes instead of days.",
  },
  {
    name: "Sophia Williams",
    role: "Content Creator",
    company: "YouTube Creator",
    image: "🎤",
    rating: 5,
    review:
      "The AI lyrics, vocals and music quality are unbelievable. My audience loves the songs.",
  },
  {
    name: "Rahul Kumar",
    role: "Independent Artist",
    company: "Spotify Artist",
    image: "🎵",
    rating: 5,
    review:
      "This is the best AI music platform I've ever used. Voice cloning and mastering are outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Loved By Creators Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Thousands of musicians, creators and businesses trust
            Market1 AI to power their creative workflow.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-3xl">

                  {item.image}

                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.role}
                  </p>

                  <p className="text-xs text-violet-400">
                    {item.company}
                  </p>

                </div>

              </div>

              <div className="mb-6 flex gap-1">

                {Array.from({ length: item.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-xl"
                  >
                    ⭐
                  </span>
                ))}

              </div>

              <p className="leading-8 text-muted-foreground">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
