import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { networkStats } from "@/lib/site";

const dots = [
  { left: "18%", top: "38%" },
  { left: "28%", top: "32%" },
  { left: "42%", top: "30%" },
  { left: "48%", top: "42%" },
  { left: "55%", top: "28%" },
  { left: "62%", top: "36%" },
  { left: "72%", top: "34%" },
  { left: "78%", top: "48%" },
  { left: "32%", top: "58%" },
  { left: "58%", top: "62%" },
];

export function Network() {
  return (
    <Section id="network" className="overflow-hidden">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 bg-surface">
            <Image
              src="/images/world-map.jpg"
              alt="BrightX delivery network around the world"
              width={1800}
              height={1000}
              className="h-[420px] w-full object-cover opacity-70 md:h-[520px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(232,185,35,0.22)_1px,transparent_1.5px)] [background-size:18px_18px] mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/45 to-transparent" />
            {dots.map((dot) => (
              <span
                key={`${dot.left}-${dot.top}`}
                aria-hidden
                className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_16px_rgba(232,185,35,0.9)]"
                style={{ left: dot.left, top: dot.top }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Global network
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                BrightX teams shipping with partners across 12 countries
              </h2>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {networkStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs uppercase tracking-[0.16em] text-mute">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-ink md:text-3xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
