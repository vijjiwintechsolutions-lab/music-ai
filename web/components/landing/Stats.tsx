const stats = [
  {
    value: "10M+",
    label: "Songs Generated",
  },
  {
    value: "500K+",
    label: "Active Creators",
  },
  {
    value: "100+",
    label: "Languages",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
];

export default function Stats() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-6xl font-black text-transparent">

                {stat.value}

              </h2>

              <p className="mt-5 text-lg text-muted-foreground">

                {stat.label}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
