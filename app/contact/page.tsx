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
        eyebrow="Strategic Consultation via WhatsApp"
        title="Every engagement begins with understanding the business."
        description="During the consultation, we discuss business goals, growth opportunities, customer acquisition challenges, technology roadmap, operational efficiency, and digital transformation priorities through WhatsApp."
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
