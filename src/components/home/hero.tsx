"use client";

import Image from "next/image";
import { CheckIcon } from "@/components/ui/check-icon";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroBullets, stackMarks } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgba(232,185,35,0.1),transparent_42%),radial-gradient(ellipse_at_88%_18%,rgba(232,185,35,0.16),transparent_48%)]"
      />

      <Container width="10/12" className="relative grid items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:pb-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Product engineering studio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            Engineer powerful digital products with{" "}
            <span className="text-gold">BrightX</span>
          </h1>
          <ul className="mt-7 max-w-lg space-y-3">
            {heroBullets.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-mute">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckIcon size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Start a project</Button>
            <Button href="#features" variant="secondary">
              Explore features
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-6">
            {stackMarks.map((mark) => (
              <span key={mark} className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
                {mark}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="relative"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gold/15 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/hero-laptop.jpg"
              alt="BrightX product work on a laptop"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
