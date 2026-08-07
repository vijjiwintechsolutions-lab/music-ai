import {
  Receipt,
  CreditCard,
  CheckCircle2,
  Download,
} from "lucide-react";

const invoices = [
  {
    id: "INV-2026-001",
    plan: "Pro Plan",
    amount: "$19.00",
    date: "01 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-002",
    plan: "AI Credits",
    amount: "$10.00",
    date: "25 Jul 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-003",
    plan: "Pro Plan",
    amount: "$19.00",
    date: "01 Jul 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-004",
    plan: "Enterprise Add-on",
    amount: "$49.00",
    date: "15 Jun 2026",
    status: "Paid",
  },
];

export default function BillingHistory() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Billing History
          </h2>

          <p className="mt-2 text-muted-foreground">
            View and download your invoices.
          </p>

        </div>

        <Receipt className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-4">

        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 lg:flex-row lg:items-center lg:justify-between"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

                <CreditCard className="h-7 w-7 text-white" />

              </div>

              <div>

                <h3 className="font-bold">
                  {invoice.plan}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {invoice.id}
                </p>

              </div>

            </div>

            <div className="text-left lg:text-center">

              <div className="font-bold">
                {invoice.amount}
              </div>

              <div className="text-sm text-muted-foreground">
                {invoice.date}
              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-500">

                <CheckCircle2 className="h-4 w-4" />

                <span className="text-sm font-semibold">
                  {invoice.status}
                </span>

              </div>

              <button className="rounded-xl border border-white/10 p-3 transition hover:bg-white/5">

                <Download className="h-5 w-5" />

              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
