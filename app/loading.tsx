import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-36">
      <Container>
        <div className="max-w-3xl">
          <div className="h-3 w-28 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-8 h-14 max-w-2xl animate-pulse rounded-3xl bg-slate-200" />
          <div className="mt-4 h-14 max-w-xl animate-pulse rounded-3xl bg-slate-100" />
          <div className="mt-8 h-px w-48 animate-pulseLine bg-brand-primary/40" />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-72 animate-pulse rounded-[32px] bg-slate-100" />
          ))}
        </div>
      </Container>
    </div>
  );
}
