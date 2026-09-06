import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { testimonial } from "@/lib/site";

export function Testimonial() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <figure className="relative px-2 py-4 md:px-8">
            <span
              className="block font-serif text-[7rem] leading-none text-gold md:text-[9rem]"
              aria-hidden
            >
              “
            </span>
            <blockquote className="-mt-10 max-w-3xl text-2xl font-medium tracking-tight text-ink md:-mt-14 md:text-3xl md:leading-snug">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-mute">{testimonial.role}</figcaption>
          </figure>
        </FadeIn>
      </Container>
    </Section>
  );
}
