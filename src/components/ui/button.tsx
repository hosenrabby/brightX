import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-gold text-canvas hover:bg-gold-soft focus-visible:ring-gold/70",
  secondary:
    "border border-gold/40 bg-transparent text-ink hover:border-gold hover:bg-gold/10 focus-visible:ring-gold/50",
  ghost:
    "text-mute hover:text-ink hover:bg-white/5 focus-visible:ring-gold/40",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
