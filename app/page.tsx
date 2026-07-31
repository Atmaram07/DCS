import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeaturedInsights } from "@/components/sections/featured-insights";
import { HomeCareersSection } from "@/components/sections/home-careers-section";
import { HomeHelpClients } from "@/components/sections/home-help-clients";
import { HomeHero } from "@/components/sections/home-hero";
import { ImpactSection } from "@/components/sections/impact-section";
import { IndustriesGrid } from "@/components/sections/industries-grid";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedInsights />
      <HomeHelpClients />
      <CapabilitiesGrid />
      <CaseStudiesSection />
      <IndustriesGrid />
      <HomeCareersSection />
      <ImpactSection />
      <CtaBanner />
    </>
  );
}
