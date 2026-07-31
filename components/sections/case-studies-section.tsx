import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/site-data";

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Case Studies"
        title="Examples of how DCS turns digital strategy into measurable business outcomes."
        description="Across commerce, healthcare, and utility transformation, our work is centered on practical delivery, faster adoption, and stronger operating performance."
      />
      <Container className="space-y-6">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.08}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="grid gap-6 border-t border-slate-200 py-6 transition duration-300 hover:bg-slate-50 md:grid-cols-[320px_minmax(0,1fr)] md:py-8"
            >
              <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-slate-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 py-2 md:pl-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">{study.sector}</p>
                  <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-slate-950">{study.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{study.summary}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {study.outcomes.map((outcome) => (
                    <div key={outcome} className="border-l border-slate-200 pl-4 text-sm font-medium text-slate-700">
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="pt-4 text-center">
          <ButtonLink href="/case-studies" variant="secondary">
            View All Case Studies
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
