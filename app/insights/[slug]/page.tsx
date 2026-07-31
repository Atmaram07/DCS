import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { insights } from "@/lib/site-data";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <article className="bg-white pt-32 sm:pt-36">
      <Container className="pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{insight.category}</p>
        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {insight.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
          <span>{insight.publishedAt}</span>
          <span>{insight.readTime}</span>
        </div>
      </Container>
      <Container className="pb-20">
        <div className="relative h-[360px] overflow-hidden rounded-[36px] shadow-panel sm:h-[520px]">
          <Image src={insight.image} alt={insight.title} fill className="object-cover" />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-9 text-slate-600">
          {insight.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
