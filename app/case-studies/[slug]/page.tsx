import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { caseStudies } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="bg-white pt-32 sm:pt-36">
      <Container className="pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{study.sector}</p>
        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {study.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{study.summary}</p>
      </Container>
      <Container className="pb-20">
        <div className="relative h-[360px] overflow-hidden rounded-[36px] shadow-panel sm:h-[520px]">
          <Image src={study.image} alt={study.title} fill className="object-cover" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[28px] bg-slate-50 p-6">
              <p className="font-heading text-3xl font-semibold text-slate-950">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Challenge</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{study.challenge}</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Approach</h2>
            <div className="mt-5 space-y-4">
              {study.approach.map((item) => (
                <p key={item} className="rounded-[24px] bg-slate-50 p-5 text-base leading-8 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Results</h2>
            <div className="mt-5 space-y-4">
              {study.result.map((item) => (
                <p key={item} className="rounded-[24px] border border-slate-200 p-5 text-base leading-8 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
