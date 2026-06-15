import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
  spacious?: boolean;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  containerClassName,
  dark = false,
  spacious = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacious ? "section-spacing" : "py-14 sm:py-16",
        dark ? "bg-navy text-white" : "bg-background",
        className,
      )}
    >
      <div className={cn("container-page", containerClassName)}>
        {(eyebrow || title || description) && (
          <header className="mb-14 lg:mb-16">
            {eyebrow ? (
              <p className={cn("section-eyebrow", dark && "text-gold-light")}>
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className={cn("section-title", dark && "text-white")}>
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "section-lead",
                  dark ? "text-white/70" : "text-slate",
                )}
              >
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
