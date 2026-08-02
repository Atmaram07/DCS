import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicePillars } from "@/components/sections/service-pillars";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore growth consulting, technology engineering, AI automation, and cloud security services from DCS | Management & Technology Consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solutions built to help organizations grow, modernize, and execute with confidence."
        description="From customer acquisition and digital growth to software engineering, cloud infrastructure, AI automation and cyber security, DCS helps organizations build sustainable competitive advantage in an increasingly digital world."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        aside={
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-primary">Our approach</p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We build each engagement around the business goals, technology roadmap, and operating changes needed to create measurable impact.
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
