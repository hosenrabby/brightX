"use client";

import { cn } from "@/lib/cn";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className }: FadeInProps) {
  return <div className={cn(className)}>{children}</div>;
}
