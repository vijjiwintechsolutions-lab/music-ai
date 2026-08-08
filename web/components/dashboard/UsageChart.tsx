"use client";

import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  Music2,
  TrendingUp,
} from "lucide-react";
import {
  useMemo,
  useState,
} from "react";

type UsageData = {
  day: string;
  songs: number;
};

type UsagePeriod =
  | "7 Days"
  | "14 Days"
  | "30 Days";

const weeklyData: UsageData[] = [
  {
    day: "Mon",
    songs: 8,
  },
  {
    day: "Tue",
    songs: 12,
  },
  {
    day: "Wed",
    songs: 7,
  },
  {
    day: "Thu",
    songs: 15,
  },
  {
    day: "Fri",
    songs: 19,
  },
  {
    day: "Sat",
    songs: 13,
  },
  {
    day: "Sun",
    songs: 22,
  },
];

const fourteenDayData: UsageData[] = [
  {
    day: "Mon",
    songs: 8,
  },
  {
    day: "Tue",
    songs: 12,
  },
  {
    day: "Wed",
    songs: 7,
  },
  {
    day: "Thu",
    songs: 15,
  },
  {
    day: "Fri",
    songs: 19,
  },
  {
    day: "Sat",
    songs: 13,
  },
  {
    day: "Sun",
    songs: 22,
  },
  {
    day: "Mon",
    songs: 11,
  },
  {
    day: "Tue",
    songs: 16,
  },
  {
    day: "Wed",
    songs: 14,
  },
  {
    day: "Thu",
    songs: 18,
  },
  {
    day: "Fri",
    songs: 21,
  },
  {
    day: "Sat",
    songs: 17,
  },
  {
    day: "Sun",
    songs: 25,
  },
];

const thirtyDayData: UsageData[] = [
  {
    day: "W1",
    songs: 42,
  },
  {
    day: "W2",
    songs: 57,
  },
  {
    day: "W3",
    songs: 71,
  },
  {
    day: "W4",
    songs: 86,
  },
];

function getDataForPeriod(
  period: UsagePeriod
): UsageData[] {
  switch (period) {
    case "14 Days":
      return fourteenDayData;

    case "30 Days":
      return thirtyDayData;

    case "7 Days":
    default:
      return weeklyData;
  }
}

function formatNumber(
  value: number
): string {
  return new Intl.NumberFormat(
    "en-IN"
  ).format(value);
}

export default function UsageChart() {
  const [
    period,
    setPeriod,
  ] = useState<UsagePeriod>(
    "7 Days"
  );

  const [
    showMenu,
    setShowMenu,
  ] = useState(false);

  const data = useMemo(
    () =>
      getDataForPeriod(
        period
      ),
    [period]
  );

  const totalSongs =
    data.reduce(
      (
        total,
        item
      ) =>
        total +
        item.songs,
      0
    );

  const highestValue =
    Math.max(
      ...data.map(
        (item) =>
          item.songs
      ),
      1
    );

  const average =
    data.length > 0
      ? totalSongs /
        data.length
      : 0;

  const previousTotal =
    Math.max(
      Math.round(
        totalSongs *
          0.82
      ),
      0
    );

  const growth =
    previousTotal > 0
      ? Math.round(
          ((totalSongs -
            previousTotal) /
            previousTotal) *
            100
        )
      : 0;

  const chartHeight = 220;

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-xl sm:p-6">

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
            <BarChart3 className="h-5 w-5 text-violet-400" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Usage Overview
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Track your music generation activity
            </p>
          </div>

        </div>

        {/* =================================================
            PERIOD SELECTOR
            ================================================= */}

        <div className="relative">

          <button
            type="button"
            onClick={() =>
              setShowMenu(
                (value) =>
                  !value
              )
            }
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            aria-haspopup="listbox"
            aria-expanded={
              showMenu
            }
          >
            <CalendarDays className="h-4 w-4 text-violet-400" />

            {period}

            <ChevronDown
              className={[
                "h-4 w-4 transition-transform",
                showMenu
                  ? "rotate-180"
                  : "",
              ].join(" ")}
            />
          </button>

          {showMenu && (
            <div
              className="absolute right-0 top-full z-20 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-white/10 bg-background p-1 shadow-xl"
              role="listbox"
            >
              {(
                [
                  "7 Days",
                  "14 Days",
                  "30 Days",
                ] as UsagePeriod[]
              ).map(
                (
                  option
                ) => (
                  <button
                    key={
                      option
                    }
                    type="button"
                    role="option"
                    aria-selected={
                      period ===
                      option
                    }
                    onClick={() => {
                      setPeriod(
                        option
                      );

                      setShowMenu(
                        false
                      );
                    }}
                    className={[
                      "block w-full rounded-lg px-3 py-2 text-left text-sm transition",
                      period ===
                      option
                        ? "bg-violet-500/10 text-violet-400"
                        : "text-muted-foreground hover:bg-white/10 hover:text-white",
                    ].join(
                      " "
                    )}
                  >
                    {
                      option
                    }
                  </button>
                )
              )}
            </div>
          )}

        </div>

      </div>

      {/* =================================================
          SUMMARY CARDS
          ================================================= */}

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

        <div className="rounded-xl border border-white/10 bg-black/10 p-4">
          <div className="flex items-center justify-between">

            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Total Songs
            </span>

            <Music2 className="h-4 w-4 text-violet-400" />

          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            {formatNumber(
              totalSongs
            )}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/10 p-4">
          <div className="flex items-center justify-between">

            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Daily Average
            </span>

            <BarChart3 className="h-4 w-4 text-cyan-400" />

          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            {average.toFixed(
              1
            )}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/10 p-4">
          <div className="flex items-center justify-between">

            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Growth
            </span>

            <TrendingUp className="h-4 w-4 text-emerald-400" />

          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              +{growth}%
            </span>

            <span className="text-xs text-emerald-400">
              vs previous
            </span>
          </div>
        </div>

      </div>

      {/* =================================================
          CHART
          ================================================= */}

      <div className="mt-8">

        <div
          className="relative w-full"
          style={{
            height:
              chartHeight,
          }}
        >

          {/* Grid lines */}

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">

            {[0, 1, 2, 3, 4].map(
              (line) => (
                <div
                  key={
                    line
                  }
                  className="border-t border-white/5"
                />
              )
            )}

          </div>

          {/* Y axis labels */}

          <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-10 flex-col justify-between py-1">

            <span className="text-[10px] text-muted-foreground">
              {Math.ceil(
                highestValue
              )}
            </span>

            <span className="text-[10px] text-muted-foreground">
              {Math.ceil(
                highestValue *
                  0.75
              )}
            </span>

            <span className="text-[10px] text-muted-foreground">
              {Math.ceil(
                highestValue *
                  0.5
              )}
            </span>

            <span className="text-[10px] text-muted-foreground">
              {Math.ceil(
                highestValue *
                  0.25
              )}
            </span>

            <span className="text-[10px] text-muted-foreground">
              0
            </span>

          </div>

          {/* Bars */}

          <div className="absolute bottom-0 left-12 right-0 top-0 flex items-end justify-between gap-2 sm:gap-4">

            {data.map(
              (
                item
              ) => {
                const height =
                  Math.max(
                    (item.songs /
                      highestValue) *
                      100,
                    3
                  );

                return (
                  <div
                    key={
                      item.day
                    }
                    className="group relative flex h-full flex-1 flex-col justify-end"
                  >

                    {/* Tooltip */}

                    <div className="pointer-events-none absolute bottom-[calc(var(--bar-height)+8px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-black px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100">
                      {
                        item.songs
                      }{" "}
                      songs
                    </div>

                    {/* Bar */}

                    <div className="flex h-full items-end justify-center">

                      <div
                        className="relative w-full max-w-12 overflow-hidden rounded-t-lg bg-gradient-to-t from-violet-600/70 via-violet-500 to-cyan-400 transition-all duration-500 group-hover:from-violet-500 group-hover:via-fuchsia-500 group-hover:to-cyan-300"
                        style={{
                          height: `${height}%`,
                        }}
                        title={`${item.day}: ${item.songs} songs`}
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

        {/* X axis */}

        <div className="ml-12 mt-3 flex justify-between gap-2">

          {data.map(
            (
              item
            ) => (
              <div
                key={
                  item.day
                }
                className="flex-1 text-center text-[10px] text-muted-foreground sm:text-xs"
              >
                {
                  item.day
                }
              </div>
            )
          )}

        </div>

      </div>

      {/* =================================================
          FOOTER
          ================================================= */}

      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />

          Songs generated

        </div>

        <div className="flex items-center gap-2 text-sm">

          <TrendingUp className="h-4 w-4 text-emerald-400" />

          <span className="font-semibold text-emerald-400">
            +{growth}%
          </span>

          <span className="text-muted-foreground">
            compared with previous period
          </span>

        </div>

      </div>

    </section>
  );
}
