import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-radial-grid pt-32 sm:pt-36">
      <Container className="pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_420px]">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>
            </Reveal>
            {primaryCta || secondaryCta ? (
              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-wrap gap-4">
                  {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
                  {secondaryCta ? (
                    <ButtonLink href={secondaryCta.href} variant="secondary">
                      {secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </Reveal>
            ) : null}
          </div>

          {aside ? <Reveal delay={0.16}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
