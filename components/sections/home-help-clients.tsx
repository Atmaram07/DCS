import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { clientLogos } from "@/lib/site-data";

const helpAreas = [
  {
    title: "Operational speed",
    description:
      "We remove process friction and manual bottlenecks with automation, workflow redesign, and software delivery that helps teams execute faster.",
    href: "/services#technology-engineering",
  },
  {
    title: "Resilience and trust",
    description:
      "We strengthen compliance posture, security operations, and service continuity so leadership teams can scale with confidence.",
    href: "/services#cloud-cyber-security",
  },
  {
    title: "Growth-ready technology",
    description:
      "We design cloud-first, AI-enabled digital foundations that help brands launch new revenue models and support long-term expansion.",
    href: "/services#artificial-intelligence-automation",
  },
];

export function HomeHelpClients() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Trusted by Growth-Focused Organizations"
        title="The technology decisions that matter most to ambitious operators."
        description="DCS helps clients improve execution, reduce risk, and build digital systems that support measurable business momentum instead of isolated technical wins."
      />
      <Container>
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clientLogos.map((logo, index) => (
              <Reveal key={logo.name} delay={index * 0.04}>
                <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-[24px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-sm">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={220}
                    height={108}
                    className="h-16 w-full object-contain"
                    unoptimized
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{logo.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-0 border-y border-slate-200 lg:grid-cols-3">
          {helpAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <Link
                href={area.href}
                className="block border-b border-slate-200 px-0 py-8 transition hover:bg-slate-50 lg:border-b-0 lg:px-8 lg:py-10 [&:not(:last-child)]:lg:border-r [&:not(:last-child)]:lg:border-slate-200"
              >
                <p className="font-heading text-2xl font-semibold text-slate-950">{area.title}</p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">{area.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
