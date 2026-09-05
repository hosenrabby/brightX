import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <Section id="contact" className="pt-8 md:pt-10">
      <Container>
        <FadeIn>
          <div className="rounded-2xl border border-gold/40 bg-surface px-8 py-14 text-center shadow-[0_0_56px_rgba(232,185,35,0.1)] md:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Start a build
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Ready to start a project?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-mute">
              Send a brief — product, timeline, and constraints. We reply within
              one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${site.email}`}>Email BrightX</Button>
              <Button href="#services" variant="secondary">
                Review services
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
