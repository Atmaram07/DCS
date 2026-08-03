import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  approachSteps,
  businessOutcomes,
  industryImpactHighlights,
  successStoryHighlights,
  whyChooseItems,
} from "@/lib/site-data";

export function HomepageStorySections() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Helping Organizations Navigate Growth, Transformation & Innovation"
            title="In an increasingly digital world, sustainable growth requires more than isolated solutions."
            description="Organizations need strategic clarity, modern technology, intelligent systems and disciplined execution."
          />
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
                <p className="text-base leading-8 text-slate-700">
                  DCS partners with growth-focused businesses to help them adapt, evolve and create lasting competitive advantage.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  We believe meaningful business transformation happens when strategy, technology and execution work together. That belief guides every engagement we undertake.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">Why this matters</p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Growth now depends on strategy alignment, resilient systems, and a disciplined operating model that can actually scale with the business.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Outcomes We Help Create"
            title="Practical business outcomes that build momentum and resilience."
            description="The goal is to move organizations from pressure to clarity, and from strategy to execution that sticks."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {businessOutcomes.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 0.04}>
                <article className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold text-slate-950">{outcome.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{outcome.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Strategy, technology, execution, and continuous improvement working together."
            description="A grounded operating model for leaders who want practical progress, not isolated activity."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {approachSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">Step {index + 1}</p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Organizations Choose DCS"
            title="Business-first thinking, strategic clarity, and execution discipline."
            description="Every engagement is guided by business objectives, measurable outcomes, and the practical realities of implementation."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {whyChooseItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-heading text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Abhinash Patra"
            description="Founder & Managing Director"
          />
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">DCS | Management &amp; Technology Consulting</p>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  Modern organizations require more than isolated solutions. They need strategic clarity, modern technology and disciplined execution.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Our mission is to help businesses navigate growth, transformation and innovation with confidence while building systems that create lasting value.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">Strategic Consultation via WhatsApp</p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Every engagement begins with understanding the business. During the consultation, we discuss business goals, growth opportunities, customer acquisition challenges, technology roadmap, operational efficiency, and digital transformation priorities.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The objective is simple: identify opportunities that can create meaningful business impact.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Selected Client Success Stories"
            title="Transformation stories built around growth, delivery, and measurable business improvements."
            description="Detailed case studies should link from here."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {successStoryHighlights.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.04}>
                <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="font-heading text-2xl font-semibold text-slate-950">{story.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{story.description}</p>
                  <Link href="/case-studies" className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-brand-secondary">
                    View case studies
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Creating Impact Across Industries"
            title="Sector depth across healthcare, infrastructure, manufacturing, hospitality, education, professional services, retail, and emerging businesses."
            description="A cross-sector footprint designed to support sustainable growth in complex operating environments."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industryImpactHighlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
