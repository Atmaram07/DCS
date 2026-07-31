import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#0E4C92_0%,#0A2745_65%,#091a2c_100%)] px-8 py-12 text-white shadow-panel sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Start the conversation</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s turn your next priority into a clear execution plan.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-200">
                  If your leadership team is navigating transformation, growth, modernization, or operating pressure, we can help define the right path forward with practical delivery in mind.
                </p>
              </div>
              <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
