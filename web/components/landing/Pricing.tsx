const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    popular: false,
    features: [
      "5 AI Songs / Month",
      "Basic AI Lyrics",
      "720p Downloads",
      "Community Support",
      "Watermarked Exports",
    ],
    button: "Start Free",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    popular: true,
    features: [
      "Unlimited AI Songs",
      "Unlimited AI Lyrics",
      "Voice Cloning",
      "Vocal Remover",
      "Music Video Generator",
      "Album Cover Generator",
      "1080p Downloads",
      "Priority Support",
      "Commercial License",
    ],
    button: "Go Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited Everything",
      "Dedicated GPU",
      "Private AI Models",
      "REST API",
      "Team Workspace",
      "SSO Login",
      "Custom Branding",
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
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-500">
            PRICING
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Simple Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Choose the perfect plan for creators, professionals,
            startups and enterprises.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-violet-500 shadow-xl"
                  : ""
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white">
                  ⭐ Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-end justify-center gap-1">

                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span className="pb-2 text-muted-foreground">
                  {plan.period}
                </span>

              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500">
                      ✓
                    </span>

                    <span>
                      {feature}
                    </span>
                  </li>
                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90"
                    : "border hover:bg-accent"
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
