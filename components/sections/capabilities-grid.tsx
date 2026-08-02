import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/lib/site-data";

export function CapabilitiesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Our Capabilities"
        title="The delivery disciplines that connect business priorities to practical execution."
        description="Our work spans growth consulting, technology engineering, AI automation, and cloud security so clients can move from strategy to measurable momentum."
      />
      <Container>
        <div className="grid gap-0 border-y border-slate-200 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal key={capability.title} delay={index * 0.05}>
                <Link
                  href={capability.href}
                  className="group block h-full border-b border-slate-200 px-0 py-8 transition duration-300 hover:bg-slate-50 md:px-6 xl:border-b-0 xl:py-10 [&:not(:last-child)]:xl:border-r [&:not(:last-child)]:xl:border-slate-200"
                >
                  <div className="flex items-center gap-3 text-brand-primary">
                    <Icon className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Capability</span>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-slate-950">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{capability.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
