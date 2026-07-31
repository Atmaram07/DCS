import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicePillars } from "@/components/sections/service-pillars";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore strategy, digital transformation, technology consulting, operations, AI, risk, and training services from Dodong Consultancy Services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting capabilities designed to connect ambition with execution."
        description="From transformation strategy to AI adoption and operational redesign, DCS helps organizations address complex priorities with discipline and speed."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        aside={
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-primary">Our approach</p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We build each engagement around the decisions leadership must make, the capabilities teams need, and the operating changes required for outcomes to stick.
            </p>
          </div>
        }
      />
      <ServicePillars />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
