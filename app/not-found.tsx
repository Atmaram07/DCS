import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-36">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">404</p>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          The page you were looking for is not here.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          The link may have changed, or the content may have moved to another part of the site.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
        >
          Back to Homepage
        </Link>
      </Container>
    </div>
  );
}
