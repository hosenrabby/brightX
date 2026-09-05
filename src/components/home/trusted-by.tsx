import { Container } from "@/components/ui/container";
import { stackMarks } from "@/lib/site";

export function TrustedBy() {
  return (
    <section className="border-y border-white/8 py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-mute">
          We ship on
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {stackMarks.map((mark) => (
            <li
              key={mark}
              className="text-sm font-medium tracking-wide text-mute/80"
            >
              {mark}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
