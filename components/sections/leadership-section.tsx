import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { leaders } from "@/lib/site-data";

export function LeadershipSection() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Leadership"
        title="A senior team that balances strategic perspective with delivery detail."
        description="Our leaders have guided transformation, technology, and operating model work across regulated and complex environments."
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <Reveal key={leader.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="relative h-80">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-slate-950">{leader.name}</h3>
                  <p className="mt-2 text-sm font-medium text-brand-primary">{leader.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{leader.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
