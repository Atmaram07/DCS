import type { MetadataRoute } from "next";

import { caseStudies, company, insights } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/industries", "/insights", "/case-studies", "/careers", "/contact"];

  const staticRoutes = routes.map((route) => ({
    url: `${company.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${company.siteUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.publishedAt),
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${company.siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...insightRoutes, ...caseStudyRoutes];
}
