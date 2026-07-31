import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { openRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore consulting career opportunities at Dodong Consultancy Services.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a team that values rigor, curiosity, and practical impact."
        description="We are building a consulting environment where thoughtful problem-solving, collaboration, and execution discipline matter as much as presentation polish."
        primaryCta={{ label: "Contact Recruiting", href: "/contact" }}
      />
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[36px] bg-brand-secondary p-8 text-white shadow-panel">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Working at DCS</p>
                <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  Small enough to stay sharp. Senior enough to do meaningful work.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-200">
                  Our teams work closely with client leaders, take ownership early, and focus on problems where clarity and execution both matter. We look for people who can think structurally, communicate well, and stay grounded in the realities of delivery.
                </p>
              </div>
            </Reveal>

            <div className="space-y-5">
              {openRoles.map((role, index) => (
                <Reveal key={role.title} delay={index * 0.06}>
                  <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-7 shadow-soft">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-slate-950">{role.title}</h3>
                        <p className="mt-2 text-sm font-medium text-brand-primary">{role.team}</p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                        {role.location}
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{role.summary}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
