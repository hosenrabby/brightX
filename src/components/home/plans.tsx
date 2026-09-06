import { CheckIcon } from "@/components/ui/check-icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { plans } from "@/lib/site";

export function Plans() {
  return (
    <Section id="plans">
      <Container>
        <SectionHeading
          eyebrow="Upgrade your plans"
          title="Choose how you want to work with BrightX"
          description="Three engagement models. Start small, then keep shipping with the same team."
        />
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn
              key={plan.name}
              delay={index * 0.06}
              className={plan.featured ? "h-full lg:-mt-4" : "h-full"}
            >
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7",
                  plan.featured
                    ? "border-gold bg-gold text-canvas shadow-[0_20px_60px_rgba(232,185,35,0.28)]"
                    : "border-gold/20 bg-surface text-ink",
                )}
              >
                {plan.featured && plan.badge ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-canvas/70">
                    {plan.badge}
                  </p>
                ) : (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Engagement
                  </p>
                )}
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {plan.price}
                  <span
                    className={cn(
                      "ml-2 text-sm font-medium",
                      plan.featured ? "text-canvas/70" : "text-mute",
                    )}
                  >
                    {plan.cadence}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-6">
                      <CheckIcon
                        size={16}
                        className={cn("mt-0.5 shrink-0", plan.featured ? "text-canvas" : "text-gold")}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#contact"
                  variant={plan.featured ? "secondary" : "primary"}
                  className={cn(
                    "mt-8 w-full",
                    plan.featured &&
                      "border-canvas/30 bg-canvas text-gold hover:bg-canvas/90 hover:text-gold",
                  )}
                >
                  Start with {plan.name}
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
