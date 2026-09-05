"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,185,35,0.14),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[-8%] hidden -translate-y-1/2 select-none text-[28rem] font-bold leading-none text-white/[0.035] md:block"
      >
        X
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Product engineering studio
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            <span className="block">Engineer powerful</span>
            <span className="mt-1 block text-gold">digital products</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">
            BrightX designs and ships SaaS platforms, mobile apps, and the
            systems behind them — formal craft, production discipline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Start a project</Button>
            <Button href="#services" variant="secondary">
              Explore services
            </Button>
          </div>
        </div>

        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroMesh />
          <ProductFrame />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroMesh() {
  const nodes = [
    [40, 50],
    [120, 30],
    [210, 70],
    [300, 40],
    [380, 90],
    [80, 160],
    [180, 190],
    [270, 150],
    [360, 200],
    [60, 270],
    [160, 310],
    [250, 280],
    [340, 320],
    [420, 240],
  ] as const;

  const links: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [1, 6],
    [2, 7],
    [4, 8],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 12],
    [8, 13],
    [11, 12],
  ];

  return (
    <svg
      viewBox="0 0 460 360"
      className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]"
      aria-hidden
    >
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="rgba(232,185,35,0.28)"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={index % 4 === 0 ? 3.2 : 2.2}
          fill="#E8B923"
          className={index % 5 === 0 ? "node-pulse" : undefined}
          opacity={0.55}
        />
      ))}
    </svg>
  );
}

function ProductFrame() {
  const bars = [42, 68, 54, 88, 61, 74, 49, 80];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-surface shadow-[0_0_48px_rgba(232,185,35,0.12)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
        <span className="ml-3 text-xs text-mute">brightx.app / overview</span>
      </div>
      <div className="grid grid-cols-[88px_1fr] gap-4 p-4 sm:grid-cols-[112px_1fr]">
        <div className="space-y-2">
          {["Home", "Usage", "Billing", "Team"].map((item, index) => (
            <div
              key={item}
              className={`rounded-md px-2.5 py-1.5 text-[11px] ${
                index === 0 ? "bg-gold/15 text-gold" : "text-mute"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "MRR", value: "128k" },
              { label: "Active", value: "4.2k" },
              { label: "Uptime", value: "99.9" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/8 bg-elevated px-2.5 py-2"
              >
                <p className="text-[10px] uppercase tracking-wider text-mute">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-28 items-end gap-1.5 rounded-lg border border-white/8 bg-elevated px-3 py-3">
            {bars.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-sm bg-gold/80"
                style={{ height: `${height}%`, opacity: 0.45 + (index % 3) * 0.18 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
