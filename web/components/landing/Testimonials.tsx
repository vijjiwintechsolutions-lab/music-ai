const testimonials = [
  {
    name: "Alex Johnson",
    role: "Music Producer",
    company: "BeatLab Studio",
    rating: 5,
    image: "🎧",
    review:
      "Market1 AI completely changed my workflow. I can generate professional song ideas in minutes instead of spending hours.",
  },
  {
    name: "Sophia Williams",
    role: "Content Creator",
    company: "YouTube",
    rating: 5,
    image: "🎤",
    review:
      "The AI lyrics, voice generation and music creation are incredibly impressive. My audience loves the results.",
  },
  {
    name: "Rahul Kumar",
    role: "Independent Artist",
    company: "Spotify Artist",
    rating: 5,
    image: "🎵",
    review:
      "I produced an entire album using Market1 AI. The quality exceeded my expectations and saved me countless hours.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Loved by Creators Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Thousands of musicians, creators and businesses are already
            building with Market1 AI.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10 text-3xl">
                    {item.image}
                  </div>

                  <div>

                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>

                    <p className="text-xs text-violet-500">
                      {item.company}
                    </p>

                  </div>

                </div>

              </div>

              <div className="mb-6 flex">

                {Array.from({ length: item.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-xl text-yellow-500"
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
