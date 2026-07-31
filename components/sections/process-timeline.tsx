import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-data";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Our Process"
        title="A consulting model built to create momentum."
        description="We combine strategic framing with the operating discipline needed to move through ambiguity, align teams, and deliver results."
      />
      <Container>
        <div className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="relative h-full rounded-[30px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-brand-primary">0{index + 1}</p>
                <h3 className="mt-8 font-heading text-2xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
