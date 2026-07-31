import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <Container className={cn("mb-12", className)}>
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? (
          <p
            className={cn(
              "mb-4 text-xs font-semibold uppercase tracking-[0.28em]",
              inverted ? "text-brand-accent" : "text-brand-primary",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            inverted ? "text-white" : "text-slate-950",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-5 text-base leading-8 sm:text-lg", inverted ? "text-slate-300" : "text-slate-600")}>
            {description}
          </p>
        ) : null}
      </div>
    </Container>
  );
}
