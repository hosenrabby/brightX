import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <SunMark />
      {variant === "full" ? (
        <span className="flex items-baseline leading-none text-ink">
          <span className="text-[15px] font-extrabold tracking-[0.16em]">
            BRIGHT
          </span>
          <span className="-ml-px -translate-y-1 text-[22px] font-bold tracking-tight">
            X
          </span>
        </span>
      ) : null}
      <span className="sr-only">BrightX</span>
    </span>
  );
}

function SunMark() {
  const rays = [
    { angle: 0, length: 9, gold: true },
    { angle: 22.5, length: 6, gold: false },
    { angle: 45, length: 9, gold: true },
    { angle: 67.5, length: 6, gold: false },
    { angle: 90, length: 9, gold: true },
    { angle: 112.5, length: 6, gold: false },
    { angle: 135, length: 9, gold: true },
    { angle: 157.5, length: 6, gold: false },
    { angle: 180, length: 9, gold: true },
    { angle: 202.5, length: 6, gold: false },
    { angle: 225, length: 9, gold: true },
    { angle: 247.5, length: 6, gold: false },
    { angle: 270, length: 9, gold: true },
    { angle: 292.5, length: 6, gold: false },
    { angle: 315, length: 9, gold: true },
    { angle: 337.5, length: 6, gold: false },
  ];

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9 shrink-0"
      aria-hidden
    >
      <g className="sun-rays">
        {rays.map((ray) => {
          const rad = (ray.angle * Math.PI) / 180;
          const inner = 13;
          const x1 = 24 + Math.cos(rad) * inner;
          const y1 = 24 + Math.sin(rad) * inner;
          const x2 = 24 + Math.cos(rad) * (inner + ray.length);
          const y2 = 24 + Math.sin(rad) * (inner + ray.length);
          return (
            <line
              key={ray.angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={ray.gold ? "#E8B923" : "#F0A020"}
              strokeWidth="1.35"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <circle cx="24" cy="24" r="8.5" fill="#E8B923" stroke="#F0A020" strokeWidth="1.2" />
      <path
        d="M20.4 20.4 L27.6 27.6 M27.6 20.4 L20.4 27.6"
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
