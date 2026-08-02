import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { IndustryFocus } from "@/components/sections/industry-focus";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how DCS supports healthcare, real estate, manufacturing, hospitality, education, professional services, retail, and emerging businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Creating impact across growth-focused sectors."
        description="From healthcare and hospitals to real estate, manufacturing, hospitality, education, professional services, retail, and startups, DCS helps organizations align strategy, technology and execution with sector realities."
        primaryCta={{ label: "Discuss Your Sector", href: "/contact" }}
        secondaryCta={{ label: "Read Our Insights", href: "/insights" }}
      />
      <IndustryFocus />
      <CtaBanner />
    </>
  );
}
