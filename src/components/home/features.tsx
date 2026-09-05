import { Gauge, Layers, ShieldCheck, FolderCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/site";

const icons = [Gauge, Layers, ShieldCheck, FolderCheck];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="Key features of a BrightX engagement"
          description="The same operating standard whether we are shipping a first product or hardening a platform already in market."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={feature.title} delay={index * 0.06}>
                <article className="flex gap-4 rounded-xl border border-gold/20 bg-surface p-6 transition duration-200 hover:border-gold/50">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-mute">
                      {feature.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
