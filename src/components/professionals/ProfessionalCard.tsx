import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import type { Professional } from "@/lib/professionals";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ProfessionalCardProps = {
  professional: Professional;
  reversed?: boolean;
};

export function ProfessionalCard({
  professional,
  reversed = false,
}: ProfessionalCardProps) {
  const isWhatsApp = professional.phoneHref.includes("wa.me");

  return (
    <article
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative aspect-[3/4] max-h-[560px] w-full overflow-hidden bg-muted">
        <Image
          src={professional.image}
          alt={professional.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="space-y-6">
        <div>
          <p className="section-eyebrow">{professional.role}</p>
          {professional.credential ? (
            <p className="mt-2 text-sm text-slate">{professional.credential}</p>
          ) : null}
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-navy sm:text-4xl">
            {professional.name}
          </h2>
        </div>

        {professional.specialties?.length ? (
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
              Especialidades
            </p>
            <ul className="mt-4 space-y-2 text-slate">
              {professional.specialties.map((specialty) => (
                <li key={specialty} className="leading-relaxed">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="border-t border-line/70 pt-6">
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Contato
          </p>
          <p className="mt-3 text-sm text-slate">
            {siteConfig.city} / {siteConfig.state}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={professional.phoneHref}
                className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
                {...(isWhatsApp
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon name="phone" size={16} className="text-gold" />
                {professional.phone}
                {isWhatsApp ? (
                  <span className="text-slate">· WhatsApp</span>
                ) : null}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${professional.email}`}
                className="inline-flex items-center gap-2 text-navy transition-colors hover:text-gold"
              >
                <Icon name="mail" size={16} className="text-gold" />
                {professional.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
