import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/site-data";

export function IndustriesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Industries"
        title="Sector depth shaped by operating realities."
        description="Our teams adapt strategy, technology, and transformation programs to the constraints and economics of each industry."
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.04}>
                <article className="group">
                  <div className="relative h-56 overflow-hidden rounded-[22px] bg-slate-100">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="border-b border-slate-200 py-5">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Icon className="h-4 w-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Industry</span>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-semibold text-slate-950">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/industries" variant="secondary">
            Explore Industries
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}