"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Things you need to know before working with BrightX"
        />
        <FadeIn>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-gold/15 border-y border-gold/15">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-semibold tracking-tight text-ink">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-gold transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-6 text-mute">{item.a}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
