"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { impactStats } from "@/lib/site-data";
import { formatMetric } from "@/lib/utils";

function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(value * progress));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <>{formatMetric(display)}</>;
}

export function ImpactSection() {
  return (
    <section className="bg-brand-secondary py-20 text-white sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Global Impact"
        title="Experienced across industries, geographies, and transformation contexts."
        description="We help organizations move forward with conviction, whether the challenge is enterprise-wide change or a focused performance agenda."
        inverted
      />
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <p className="font-heading text-5xl font-semibold text-white">
                  <CountUp value={stat.value} />+
                </p>
                <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
