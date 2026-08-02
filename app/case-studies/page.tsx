import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Review selected DCS case studies covering healthcare growth, real estate, consumer brands, and technology innovation outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected client success stories that connect strategy to measurable outcomes."
        description="From healthcare growth and real estate engagement to consumer retail and technology innovation, our case studies show how DCS helps organizations create lasting business value."
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
      />
      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container className="space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.06}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="grid gap-6 overflow-hidden rounded-[36px] border border-slate-200 bg-white p-5 shadow-soft lg:grid-cols-[360px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[28px]">
                  <Image src={study.image} alt={study.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between gap-6 p-2 sm:p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">{study.sector}</p>
                    <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950">{study.title}</h2>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{study.summary}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-[24px] bg-slate-50 px-4 py-5">
                        <p className="font-heading text-2xl font-semibold text-slate-950">{metric.value}</p>
                        <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
