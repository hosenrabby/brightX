"use client";

import { AppWindow, Palette, Smartphone, Boxes } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { services } from "@/lib/site";

const icons = {
  saas: Boxes,
  mobile: Smartphone,
  web: AppWindow,
  design: Palette,
} as const;

const extras = {
  saas: "Platforms",
  mobile: "Apps",
  web: "Portals",
  design: "Systems",
} as const;

export function GlassCards() {
  const reduce = useReducedMotion();

  return (
    <Container className="relative z-10 -mt-8 md:-mt-14">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[service.slug];
          return (
            <motion.li
              key={service.slug}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -10 }}
            >
              <a
                href="#services"
                className={cn(
                  "group glass-panel flex h-full flex-col rounded-2xl p-5 transition duration-300",
                  "hover:border-gold/70 hover:bg-gold/18 hover:shadow-[0_12px_40px_rgba(232,185,35,0.18)]",
                )}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-gold transition duration-300 group-hover:bg-gold group-hover:text-canvas">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-mute transition duration-300 group-hover:text-ink/85">
                  {extras[service.slug]}
                </p>
                <span className="mt-5 flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full bg-white/25",
                        dot === 0 && "bg-gold group-hover:bg-canvas",
                      )}
                    />
                  ))}
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Container>
  );
}
