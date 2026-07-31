import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { insights } from "@/lib/site-data";

export function FeaturedInsights() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Latest Insights"
        title="Recent thinking on digital growth, healthcare platforms, and utility modernization."
        description="Selected DCS perspectives drawn from the industries and technology problems we work on most often."
      />
      <Container>
        <div className="grid gap-0 border-y border-slate-200 lg:grid-cols-[1.1fr_0.9fr]">
          {insights.slice(0, 1).map((insight) => (
            <Reveal key={insight.slug}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group block border-b border-slate-200 py-8 lg:border-b-0 lg:py-10 lg:pr-10"
              >
                <div className="relative h-[320px] overflow-hidden rounded-[24px] bg-slate-100 sm:h-[380px]">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-primary">{insight.category}</p>
                <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-slate-950">{insight.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{insight.excerpt}</p>
                <div className="mt-5 flex gap-4 text-sm text-slate-500">
                  <span>{insight.publishedAt}</span>
                  <span>{insight.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}

          <div className="lg:border-l lg:border-slate-200">
            {insights.slice(1).map((insight, index) => (
              <Reveal key={insight.slug} delay={0.08 + index * 0.08}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group block border-b border-slate-200 px-0 py-8 transition duration-300 hover:bg-slate-50 lg:px-10"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{insight.category}</p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-slate-950">{insight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{insight.excerpt}</p>
                  <div className="mt-4 flex gap-4 text-sm text-slate-500">
                    <span>{insight.publishedAt}</span>
                    <span>{insight.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
