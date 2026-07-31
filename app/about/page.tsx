import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { principles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dodong Consultancy Services, our consulting philosophy, and how we help organizations transform with clarity and execution discipline.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DCS"
        title="An independent consulting firm built for decisive leadership teams."
        description="We partner with organizations facing strategic, operational, and technology inflection points. Our work is grounded in rigorous analysis, executive clarity, and practical delivery."
        primaryCta={{ label: "Talk With Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        aside={
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">What clients value</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine strategic perspective with a bias for execution, helping leadership teams make better choices and move faster with confidence.
            </p>
          </div>
        }
      />
      <EditorialSplit
        eyebrow="Our Point Of View"
        title="Effective consulting should sharpen decisions and strengthen the organization’s ability to execute."
        description="We believe lasting impact comes from combining strategic clarity, operating detail, and real collaboration with client teams."
        paragraphs={[
          "Our work starts with the choices leadership needs to make, not with prebuilt answers. From there, we build the case for change, align stakeholders, and design an approach that reflects the realities of the organization.",
          "We stay close to implementation because strategy only creates value when teams can act on it. That means shaping governance, measurement, capabilities, and delivery rhythms that are practical from day one.",
        ]}
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Senior leadership discussion"
      />
      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={index * 0.06}>
                  <article className="h-full rounded-[32px] border border-slate-200 bg-white p-7 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-brand-canvas text-brand-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 font-heading text-2xl font-semibold text-slate-950">{principle.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{principle.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <LeadershipSection />
      <CtaBanner />
    </>
  );
}
