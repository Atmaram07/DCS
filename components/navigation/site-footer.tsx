import Link from "next/link";

import { Container } from "@/components/ui/container";
import { company, officeLocations, primaryNav } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-brand-secondary text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">{company.name}</p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Creating Sustainable Business Growth
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              We partner with ambitious organizations to solve growth, technology, and transformation challenges through consulting, engineering, AI, and disciplined execution.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Navigate</p>
            <div className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-white/90 transition hover:text-brand-accent">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="block text-sm text-white/90 transition hover:text-brand-accent">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Global Reach</p>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              {officeLocations.map((office) => (
                <div key={office.city}>
                  <p className="font-medium text-white">{office.city}</p>
                  <p className="mt-1 text-slate-300">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href={`mailto:${company.email}`} className="transition hover:text-white">
              {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="transition hover:text-white">
              {company.phone}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
