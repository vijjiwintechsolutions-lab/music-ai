import { Sparkles, Crown, Zap } from "lucide-react";

export default function CreditCard() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-8 text-white shadow-2xl">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2">

            <Sparkles className="h-6 w-6" />

            <span className="font-semibold">
              AI Credits
            </span>

          </div>

          <h2 className="mt-6 text-6xl font-black">
            250
          </h2>

          <p className="mt-3 text-white/80">
            Credits Remaining
          </p>

        </div>

        <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">

          <Crown className="h-12 w-12" />

        </div>

      </div>

      <div className="mt-10">

        <div className="mb-3 flex items-center justify-between text-sm">

          <span>Monthly Usage</span>

          <span>75%</span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/20">

          <div className="h-full w-3/4 rounded-full bg-white" />

        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-white/10 p-5 backdrop-blur">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-bold">
              Pro Plan
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Unlimited AI tools & faster generation
            </p>

          </div>

          <Zap className="h-8 w-8" />

        </div>

      </div>

      <button className="mt-8 w-full rounded-2xl bg-white py-4 font-semibold text-violet-700 transition hover:scale-[1.02]">

        Buy More Credits

      </button>

    </section>
  );
}
