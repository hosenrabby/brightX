"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroWorkspace } from "@/components/home/hero-workspace";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgba(232,185,35,0.1),transparent_42%),radial-gradient(ellipse_at_88%_18%,rgba(232,185,35,0.16),transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[18%] left-0 hidden select-none text-[22rem] font-bold leading-none text-white/[0.03] md:block"
      >
        X
      </div>

      <Container width="10/12" className="relative grid items-center gap-10 pb-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-8 xl:gap-10">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Product engineering studio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            <span className="block">Engineer powerful</span>
            <span className="mt-1 block text-gold">digital products</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-mute">
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
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroWorkspace />
        </motion.div>
      </Container>
    </section>
  );
}
