import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { PracticeArea } from "@/lib/areas";
import { cn } from "@/lib/utils";

type AreaCardProps = {
  area: PracticeArea;
  href?: string;
  className?: string;
};

export function AreaCard({ area, href, className }: AreaCardProps) {
  const targetHref =
    href ??
    (area.slug === "precatorios-rpv"
      ? "/precatorios-rpv"
      : `/areas/${area.slug}`);

  return (
    <Link
      href={targetHref}
      className={cn(
        "group flex h-full flex-col border border-line bg-white p-6 transition-all duration-300 sm:p-7",
        "hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_16px_48px_rgba(15,28,46,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2",
        className,
      )}
    >
      <h3 className="font-serif text-xl font-semibold text-navy transition-colors group-hover:text-gold sm:text-2xl">
        {area.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
        {area.shortDescription}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
        Saiba mais
        <Icon
          name="chevron-right"
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
