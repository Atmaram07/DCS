"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { company, navGroups, primaryNav } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const activeLink = useMemo(() => {
    return primaryNav.find((item) => pathname.startsWith(item.href))?.href;
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="relative px-1 sm:px-2">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link href="/" className="group flex items-center gap-3">
             

<Image
  src="/logo.png"
  alt="Logo"
  width={180}
  height={60}
  priority
/>
            
              <div>
                <p className="font-heading text-sm font-semibold tracking-[0.14em] text-slate-950">{company.name}</p>
                <p className="text-xs text-slate-500">Strategy. Technology. Execution.</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-slate-700 transition hover:text-slate-950"
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      activeLink === item.href ? "scale-x-100" : "",
                      "bg-brand-primary",
                    )}
                  />
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMegaOpen((current) => !current)}
                className="relative text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Explore
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-2 h-px transition duration-300",
                    megaOpen ? "scale-x-100" : "scale-x-0",
                    "bg-brand-primary",
                  )}
                />
              </button>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/insights"
                aria-label="Search insights"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition duration-300 hover:border-brand-primary hover:text-brand-primary"
              >
                <Search className="h-4 w-4" />
              </Link>
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {megaOpen ? (
            <div className="hidden border-t border-slate-200/70 py-6 lg:block">
              <div className="grid gap-6 lg:grid-cols-3">
                {navGroups.map((group) => (
                  <div key={group.title} className="rounded-[28px] bg-slate-50 p-6">
                    <p className="font-heading text-xl font-semibold text-slate-950">{group.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
                    <div className="mt-5 space-y-3">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-sm font-medium text-slate-700 transition hover:text-brand-primary"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {menuOpen ? (
            <div className="border-t border-slate-200/70 py-5 lg:hidden">
              <div className="space-y-2">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ButtonLink href="/insights" variant="secondary" className="w-full">
                  Search Insights
                </ButtonLink>
                <ButtonLink href="/contact" className="w-full">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
