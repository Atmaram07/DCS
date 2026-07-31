"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-canvas pt-36">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">Something went off course</p>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          We hit an unexpected issue while loading this page.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Please try again, or head back to the homepage if you would rather continue browsing.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-primary hover:text-brand-primary"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
