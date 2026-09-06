"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";

const sectionIds = ["home", "features", "network", "about", "plans", "devices", "faq", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled || open
          ? "border-b border-gold/20 bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container width="10/12" className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a href="#home" className="relative z-10 justify-self-start" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-mute transition-colors hover:text-ink",
                active === link.id && "text-ink",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-200",
                  active === link.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <Button href="#contact">Start a project</Button>
        </div>

        <button
          type="button"
          className="relative z-10 col-start-3 justify-self-end inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-gold/15 bg-canvas md:hidden">
          <Container width="10/12" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Start a project
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
