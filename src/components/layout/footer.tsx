import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-mute">{site.description}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-mute hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-sm text-mute hover:text-ink">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Contact
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-ink hover:text-gold"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-mute">Replies within one business day.</p>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-white/8 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 BrightX. All rights reserved.</p>
        <p>SaaS · Mobile · Platforms</p>
      </Container>
    </footer>
  );
}
