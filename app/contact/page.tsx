import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { ContactPanel } from "@/components/sections/contact-panel";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dodong Consultancy Services to discuss strategy, transformation, technology, or operations consulting needs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where your organization needs clarity, speed, or resilience."
        description="Whether you are preparing a digital transformation roadmap, improving customer experience, or strengthening systems security, our team can help you turn the next decision into a practical plan."
      />
      <section className="bg-brand-canvas py-20 sm:py-24 lg:py-28">
        <Container className="max-w-5xl">
          <ContactForm />
        </Container>
      </section>
      <ContactPanel />
    </>
  );
}
