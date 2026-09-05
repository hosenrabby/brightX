import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { workItems } from "@/lib/site";

export function SelectedWork() {
  return (
    <Section id="work" className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Engagements with a production shape"
          description="Two recent patterns we ship: a multi-tenant SaaS core, and a mobile product tied to an operations console."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {workItems.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.08}>
              <article className="overflow-hidden rounded-xl border border-gold/20 bg-canvas transition duration-200 hover:border-gold/50">
                <WorkThumb variant={index === 0 ? "saas" : "mobile"} />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{item.body}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WorkThumb({ variant }: { variant: "saas" | "mobile" }) {
  if (variant === "mobile") {
    return (
      <div className="flex h-44 items-end justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(232,185,35,0.16),transparent_55%)] pt-6">
        <div className="h-36 w-24 rounded-t-2xl border border-gold/30 bg-elevated p-2">
          <div className="h-full rounded-xl border border-white/8 bg-canvas p-2">
            <div className="h-1.5 w-8 rounded-full bg-gold/50" />
            <div className="mt-3 space-y-1.5">
              <div className="h-8 rounded-md bg-gold/20" />
              <div className="h-8 rounded-md bg-white/6" />
              <div className="h-8 rounded-md bg-white/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(232,185,35,0.16),transparent_50%)] p-5">
      <div className="flex h-full flex-col rounded-lg border border-gold/20 bg-elevated p-3">
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded bg-gold/20" />
          <div className="h-8 flex-1 rounded bg-white/6" />
          <div className="h-8 flex-1 rounded bg-white/6" />
        </div>
        <div className="mt-3 flex flex-1 items-end gap-1">
          {[40, 70, 55, 90, 60, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gold/70"
              style={{ height: `${h}%`, opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
