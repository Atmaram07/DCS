import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Read original articles from Dodong Consultancy Services on transformation, operating model design, technology, and enterprise execution.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives for leaders building resilient, modern organizations."
        description="We publish original thinking on enterprise transformation, technology change, operating design, and the management disciplines that support long-term performance."
        primaryCta={{ label: "Contact Our Advisors", href: "/contact" }}
      />
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 0.05}>
                <Link href={`/insights/${insight.slug}`} className="group block overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                  <div className="relative h-72 overflow-hidden">
                    <Image src={insight.image} alt={insight.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">{insight.category}</p>
                    <h2 className="mt-4 font-heading text-2xl font-semibold text-slate-950">{insight.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{insight.excerpt}</p>
                    <div className="mt-6 flex gap-4 text-sm text-slate-500">
                      <span>{insight.publishedAt}</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
