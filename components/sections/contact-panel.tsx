import { MapPinned, Mail, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { company, officeLocations } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section className="bg-brand-secondary py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Start the conversation</p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to explore what&apos;s possible?
            </h2>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-accent" />
                <span>{company.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-accent" />
                <span>{company.phone}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-3">
            {officeLocations.map((office) => (
              <div key={office.city} className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <MapPinned className="h-5 w-5 text-brand-accent" />
                <h3 className="mt-5 font-heading text-2xl font-semibold">{office.city}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{office.address}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
