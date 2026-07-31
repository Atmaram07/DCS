import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HomeCareersSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="border-t border-slate-200 pt-10">
          <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">Why DCS</p>
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A delivery model built for momentum, not just recommendations.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                We combine strategic clarity with implementation discipline so leaders can make better decisions, align teams faster, and move into execution with less ambiguity.
              </p>
            </div>
            <div className="lg:pt-2">
              <Link href="/about" className="text-sm font-semibold text-brand-primary transition hover:text-brand-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
