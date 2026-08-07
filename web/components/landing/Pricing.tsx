const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners.",
    badge: "Starter",
    featured: false,
    features: [
      "10 AI Songs / Month",
      "AI Lyrics Generator",
      "Basic Voice Generation",
      "720p Downloads",
      "Community Support",
    ],
    button: "Start Free",
  },
  {
    name: "Pro",
    price: "$19",
    description: "For creators and musicians.",
    badge: "Most Popular",
    featured: true,
    features: [
      "Unlimited AI Songs",
      "Unlimited AI Lyrics",
      "Voice Cloning",
      "Music Videos",
      "Album Covers",
      "Commercial License",
      "Priority Support",
      "1080p Downloads",
    ],
    button: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and businesses.",
    badge: "Business",
    featured: false,
    features: [
      "Unlimited Everything",
      "Dedicated GPU",
      "REST API Access",
      "Private AI Models",
      "Team Workspace",
      "SSO Login",
      "Dedicated Manager",
      "24×7 Support",
    ],
    button: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            PRICING
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Choose the plan that fits your creativity and scale as you grow.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-violet-500 bg-gradient-to-b from-violet-500/10 to-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >

              <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                {plan.badge}
              </span>

              <h3 className="mt-6 text-3xl font-black">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-6xl font-black">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="pb-3 text-muted-foreground">
                    /month
                  </span>
                )}

              </div>

              <p className="mt-4 text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500">
                      ✔
                    </span>

                    <span>
                      {feature}
                    </span>
                  </li>
                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-2xl py-4 font-semibold transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-105"
                    : "border border-white/10 hover:bg-white/5"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
