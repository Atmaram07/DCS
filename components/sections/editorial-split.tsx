import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type EditorialSplitProps = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
};

export function EditorialSplit({
  eyebrow,
  title,
  description,
  paragraphs,
  image,
  imageAlt,
  cta,
}: EditorialSplitProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-[36px] shadow-panel">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </Reveal>

          <div className="max-w-2xl lg:pl-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.22 + index * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            {cta ? (
              <Reveal delay={0.35}>
                <ButtonLink href={cta.href} variant="secondary" className="mt-9">
                  {cta.label}
                </ButtonLink>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
