import { environments, stackMarks } from "@/lib/site";

export function HeroWorkspace() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_70%_20%,rgba(232,185,35,0.22),transparent_58%)]"
      />
      <div className="relative rounded-[1.6rem] border border-white/12 bg-[#101014] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-2 flex justify-center">
          <span className="h-1.5 w-16 rounded-full bg-white/12" />
        </div>
        <div className="relative overflow-hidden rounded-[1.15rem] border border-white/8 bg-[#0c0c10]">
          <div className="grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-5">
            <EnvTable />
            <GrowthGlass />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 bg-black/35 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
              We ship on
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {stackMarks.map((mark) => (
                <li key={mark} className="text-xs text-ink/80">
                  {mark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnvTable() {
  return (
    <div className="glass-panel rounded-2xl p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        Working environments
      </p>
      <table className="mt-3 w-full text-left text-xs">
        <thead>
          <tr className="text-mute">
            <th className="pb-2 font-medium">Env</th>
            <th className="pb-2 font-medium">Status</th>
            <th className="pb-2 font-medium">Release</th>
          </tr>
        </thead>
        <tbody>
          {environments.map((row) => (
            <tr key={row.name} className="border-t border-white/8">
              <td className="py-2.5 text-ink">{row.name}</td>
              <td className="py-2.5">
                <span
                  className={
                    row.status === "Live"
                      ? "text-gold"
                      : row.status === "Healthy"
                        ? "text-ink"
                        : "text-mute"
                  }
                >
                  {row.status}
                </span>
              </td>
              <td className="py-2.5 font-mono text-[11px] text-mute">
                {row.release}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GrowthGlass() {
  const points = "8,78 40,62 72,68 104,40 136,48 168,22 200,28 232,12";

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute">
            Delivery velocity
          </p>
          <p className="mt-1 text-sm text-ink">Sprint throughput</p>
        </div>
        <p className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
          +68% growth
        </p>
      </div>
      <svg viewBox="0 0 240 96" className="mt-4 h-24 w-full" aria-hidden>
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8B923" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#E8B923" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`${points} 232,96 8,96`} fill="url(#chartFill)" />
        <polyline
          className="chart-line"
          points={points}
          fill="none"
          stroke="#E8B923"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [8, 78],
          [40, 62],
          [72, 68],
          [104, 40],
          [136, 48],
          [168, 22],
          [200, 28],
          [232, 12],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#E8B923" />
        ))}
      </svg>
    </div>
  );
}
