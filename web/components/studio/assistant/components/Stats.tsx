"use client";

const stats = [
  { value: "12,845", label: "Messages" },
  { value: "548", label: "Projects" },
  { value: "98%", label: "Success Rate" },
  { value: "24/7", label: "Availability" },
];

export default function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">

      {stats.map((item)=>(
        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
        >

          <h2 className="text-3xl font-black text-cyan-400">

            {item.value}

          </h2>

          <p className="mt-2 text-muted-foreground">

            {item.label}

          </p>

        </div>
      ))}

    </div>
  );
}
