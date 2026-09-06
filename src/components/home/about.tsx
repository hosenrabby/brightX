import Image from "next/image";
import { CheckIcon } from "@/components/ui/check-icon";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { aboutChecks } from "@/lib/site";

const portraits = [
  { src: "/images/story-1.jpg", alt: "BrightX product partner", className: "left-6 top-8 h-56 w-44 md:h-72 md:w-56" },
  { src: "/images/story-2.jpg", alt: "BrightX engineering lead", className: "right-4 top-0 h-48 w-40 md:h-60 md:w-48" },
  { src: "/images/story-3.jpg", alt: "BrightX designer", className: "bottom-4 left-1/3 h-44 w-36 md:h-52 md:w-44" },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[480px]">
              {portraits.map((photo) => (
                <div
                  key={photo.src}
                  className={`absolute overflow-hidden rounded-3xl border border-gold/25 shadow-[0_16px_40px_rgba(0,0,0,0.35)] ${photo.className}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={480}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              About BrightX
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Tailored delivery to match your unique requirements
            </h2>
            <p className="mt-4 text-base leading-7 text-mute">
              BrightX is a product engineering studio: we design the system, ship
              the interface, and leave a codebase your team can own.
            </p>
            <ul className="mt-8 space-y-4">
              {aboutChecks.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-canvas">
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
