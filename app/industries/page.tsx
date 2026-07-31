import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { IndustryFocus } from "@/components/sections/industry-focus";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how Dodong Consultancy Services works across healthcare, manufacturing, retail, finance, government, infrastructure, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector-specific context for leaders facing real operating complexity."
        description="We adapt strategy, modernization, and performance programs to the economic, regulatory, and organizational realities of each industry."
        primaryCta={{ label: "Discuss Your Sector", href: "/contact" }}
        secondaryCta={{ label: "Read Our Insights", href: "/insights" }}
      />
      <IndustryFocus />
      <CtaBanner />
    </>
  );
}
