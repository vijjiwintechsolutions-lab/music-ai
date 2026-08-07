import {
  Crown,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

export default function SubscriptionCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500">

          <Crown className="h-8 w-8 text-white" />

        </div>

        <div>

          <h2 className="text-2xl font-black">
            Subscription
          </h2>

          <p className="text-muted-foreground">
            Current Plan Details
          </p>

        </div>

      </div>

      <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-3xl font-black">
              Pro Plan
            </h3>

            <p className="mt-2 text-muted-foreground">
              Unlimited AI Music Generation
            </p>

          </div>

          <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white">
            ACTIVE
          </span>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <CalendarDays className="h-5 w-5 text-violet-400" />

            <span>Renewal Date</span>

          </div>

          <span className="font-semibold">
            15 Aug 2026
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <CreditCard className="h-5 w-5 text-cyan-400" />

            <span>Billing</span>

          </div>

          <span className="font-semibold">
            Monthly
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="h-5 w-5 text-green-500" />

            <span>Status</span>

          </div>

          <span className="font-semibold text-green-500">
            Paid
          </span>

        </div>

      </div>

      <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

        Upgrade Plan

        <ArrowUpRight className="h-5 w-5" />

      </button>

    </section>
  );
}
