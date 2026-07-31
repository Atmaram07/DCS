import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-brand-primary text-white shadow-soft hover:bg-brand-secondary focus-visible:ring-brand-primary/40",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-brand-primary hover:text-brand-primary focus-visible:ring-brand-primary/25",
  ghost:
    "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 focus-visible:ring-white/30",
};

export function ButtonLink({
  href,
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-4",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
