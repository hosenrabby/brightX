"use client";

import { useEffect, useState } from "react";
import {
  FolderCheck,
  Gauge,
  Headset,
  Layers,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/site";

const icons = [Gauge, Layers, ShieldCheck, Headset, Smartphone, FolderCheck];

export function Features() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="Key features"
          title="Prioritize what BrightX should ship next"
          description="The same operating standard whether we are shipping a first product or hardening a platform already in market."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <article className="h-full rounded-xl border border-gold/20 bg-surface p-6 transition duration-200 hover:border-gold/50">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                    {mounted ? <Icon size={18} strokeWidth={1.75} /> : null}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{feature.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
