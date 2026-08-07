"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", songs: 8 },
  { day: "Tue", songs: 15 },
  { day: "Wed", songs: 12 },
  { day: "Thu", songs: 21 },
  { day: "Fri", songs: 18 },
  { day: "Sat", songs: 29 },
  { day: "Sun", songs: 24 },
];

export default function UsageChart() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8">

        <h2 className="text-2xl font-black">
          Weekly AI Usage
        </h2>

        <p className="mt-2 text-muted-foreground">
          Songs generated during the last 7 days.
        </p>

      </div>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                  stopOpacity={0.9}
                />

                <stop
                  offset="100%"
                  stopColor="#06b6d4"
                  stopOpacity={0.15}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
            />

            <XAxis
              dataKey="day"
              stroke="#888"
            />

            <YAxis
              stroke="#888"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="songs"
              stroke="#8b5cf6"
              strokeWidth={3}
              fill="url(#gradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}
