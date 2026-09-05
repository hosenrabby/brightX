import { AppWindow, Palette, Smartphone, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

const icons = {
  saas: Boxes,
  mobile: Smartphone,
  web: AppWindow,
  design: Palette,
} as const;

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title="What we build with you"
          description="A studio that covers the product surface — from the system design to the interface people touch."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.slug];
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <article className="group h-full rounded-xl border border-gold/20 bg-surface p-6 transition duration-200 hover:border-gold/55 hover:bg-elevated">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{service.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="#contact" variant="secondary">
            Talk about a brief
          </Button>
        </div>
      </Container>
    </Section>
  );
}
