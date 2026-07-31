import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const helpAreas = [
  {
    title: "Operational speed",
    description:
      "We remove process friction and manual bottlenecks with automation, workflow redesign, and software delivery that helps teams execute faster.",
    href: "/services#software-development",
  },
  {
    title: "Resilience and trust",
    description:
      "We strengthen compliance posture, security operations, and service continuity so leadership teams can scale with confidence.",
    href: "/services#cybersecurity",
  },
  {
    title: "Growth-ready technology",
    description:
      "We design cloud-first, AI-enabled digital foundations that help brands launch new revenue models and support long-term expansion.",
    href: "/services#artificial-intelligence",
  },
];

export function HomeHelpClients() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading
        eyebrow="Business outcomes"
        title="The technology decisions that matter most to growth-focused organizations."
        description="DCS helps clients improve execution, reduce risk, and create digital systems that support measurable business momentum instead of isolated technical wins."
      />
      <Container>
        <div className="grid gap-0 border-y border-slate-200 lg:grid-cols-3">
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
