import Image from "next/image";

import { industries } from "@/lib/site-data";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function IndustryFocus() {
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.04}>
              <article
                id={slugify(industry.title)}
                className="grid gap-5 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-[220px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[220px] overflow-hidden rounded-[24px]">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover" />
                </div>
                <div className="p-2 sm:p-4">
                  <h3 className="font-heading text-3xl font-semibold text-slate-950">{industry.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{industry.description}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    Each industry solution combines digital execution, technology architecture, and business-specific workflow design so the platform actually fits how the sector operates.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
