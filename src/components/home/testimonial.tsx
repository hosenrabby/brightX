import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { testimonial } from "@/lib/site";

export function Testimonial() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <figure className="rounded-2xl border border-gold/20 bg-surface px-8 py-10 md:px-14 md:py-12">
            <span className="block text-5xl leading-none text-gold" aria-hidden>
              “
            </span>
            <blockquote className="mt-2 max-w-3xl text-xl font-medium tracking-tight text-ink md:text-2xl md:leading-snug">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-mute">
              {testimonial.role}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </Section>
  );
}
