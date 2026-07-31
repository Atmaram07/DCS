"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const outcomeCards = [
  {
    title: "Scale faster",
    description: "Launch better customer journeys and internal systems without adding operational drag.",
  },
  {
    title: "Operate more safely",
    description: "Reduce exposure with secure digital foundations, better controls, and clearer governance.",
  },
  {
    title: "Improve execution",
    description: "Turn strategic priorities into delivery rhythms that teams can actually sustain.",
  },
  {
    title: "Stay aligned",
    description: "Bring strategy, technology, and day-to-day operating decisions into one practical plan.",
  },
];

export function HomeHero() {
  return (
    <section className="bg-white pt-28 sm:pt-32">
      <Container className="pb-14 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-slate-200 pb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-primary">Dodong Consultancy Services</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <h1 className="max-w-5xl font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Help your business move faster with technology that drives growth, resilience, and trust.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                DCS partners with ambitious organizations to modernize operations, improve customer experience, and deliver secure digital systems that scale with real business goals.
              </p>
            </div>
            <div className="space-y-5 border-l border-slate-200 pl-0 lg:pl-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Current focus</p>
                <p className="mt-3 font-heading text-2xl font-semibold text-slate-950">
                  AI adoption, software delivery, cloud modernization, and cyber resilience for high-stakes operations.
                </p>
              </div>
              <ButtonLink href="/contact" variant="secondary">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] p-8 shadow-soft"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-primary">What leaders need</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {outcomeCards.map((card) => (
                <div key={card.title} className="rounded-[24px] border border-white/70 bg-white/80 p-5">
                  <p className="font-heading text-2xl font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">How we work</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">1. Diagnose the real constraint</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We start with the business pressure, customer friction, or operating gap that needs to be solved.</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">2. Design a practical path</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We map the technical, workflow, and governance model that matches the actual pace of the organization.</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">3. Deliver with measurable discipline</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">From build to rollout, we focus on usage, reliability, adoption, and long-term performance.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
              <ButtonLink href="/contact">Request a Discovery Call</ButtonLink>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
