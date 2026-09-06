import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { footerColumns, site } from "@/lib/site";

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"
      />
    </svg>
  );
}

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-surface">
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-1.5rem] select-none text-center text-[18vw] font-extrabold leading-none tracking-tight text-gold/[0.07]"
      >
        BrightX
      </p>
      <Container className="relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-mute">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://x.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-mute hover:border-gold hover:text-gold"
              aria-label="BrightX on X"
            >
              <XMark className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-mute hover:border-gold hover:text-gold"
              aria-label="BrightX on LinkedIn"
            >
              <LinkedInMark className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-mute hover:border-gold hover:text-gold"
              aria-label="BrightX on GitHub"
            >
              <GitHubMark className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-mute hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="relative flex flex-col gap-2 border-t border-white/8 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 BrightX. All rights reserved.</p>
        <p>SaaS · Mobile · Platforms</p>
      </Container>
    </footer>
  );
}
