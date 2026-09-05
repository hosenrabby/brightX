import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { stats } from "@/lib/site";

export function StatsBar() {
  return (
    <section className="relative z-10 pt-10 pb-4 md:pt-12">
      <Container>
        <div className="glass-panel flex flex-col gap-6 rounded-2xl px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <dl className="grid flex-1 grid-cols-3 gap-4">
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-mute">
                  {item.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <Button href="#contact" className="gap-2 self-start md:self-center">
            Get a quote
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
