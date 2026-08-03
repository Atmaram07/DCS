import { capabilities } from "@/lib/site-data";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ServicePillars() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container className="space-y-5">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <Reveal key={capability.title} delay={index * 0.03}>
              <div
                id={capability.href.split("#")[1]}
                className="grid gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-7 shadow-soft lg:grid-cols-[120px_minmax(0,1fr)_320px]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-white text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-semibold text-slate-950">{capability.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{capability.description}</p>
                </div>
                <div className="rounded-[28px] bg-white p-6 text-sm leading-7 text-slate-600">
                  {capability.deliveryNote}
                </div>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
