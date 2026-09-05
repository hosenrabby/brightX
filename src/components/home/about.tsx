import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps, site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" className="bg-surface/40">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="About the studio"
            title="A partner that can design it and ship it"
            description={site.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <FadeIn key={step.n} delay={index * 0.06}>
                <article className="rounded-xl border border-gold/20 bg-canvas p-5">
                  <p className="text-xs font-semibold text-gold">{step.n}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-mute">{step.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
