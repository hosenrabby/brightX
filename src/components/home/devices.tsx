import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

export function Devices() {
  return (
    <Section id="devices">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Products on every screen
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Ship BrightX products across phone, tablet, and web
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-mute">
              One system for the surfaces your users actually open — mobile apps
              and web platforms designed to feel like the same product.
            </p>
            <div className="mt-8">
              <Button href="#contact">Start a project</Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative mx-auto h-[380px] w-full max-w-lg md:h-[440px]">
              <div className="absolute top-6 left-0 w-[68%] overflow-hidden rounded-[1.5rem] border border-gold/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/device-tablet.jpg"
                  alt="BrightX product on a tablet"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[42%] overflow-hidden rounded-[1.75rem] border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/device-phone.jpg"
                  alt="BrightX product on a phone"
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
