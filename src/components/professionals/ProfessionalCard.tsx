import Image from "next/image";
import { Button } from "@/components/ui/Button";
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
        "grid items-start gap-10 lg:grid-cols-2 lg:gap-16",
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

      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="section-eyebrow">{professional.role}</p>
            {professional.credential ? (
              <p className="mt-2 text-sm text-slate">{professional.credential}</p>
            ) : null}
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-navy sm:text-4xl">
              {professional.name}
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-sm leading-relaxed text-slate">{professional.bio}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Especialidades
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {professional.specialties.map((specialty) => (
              <li
                key={specialty}
                className="border border-line/80 bg-white px-4 py-3 text-sm leading-relaxed text-navy"
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line/70 pt-6">
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Contato
          </p>
          <p className="mt-3 text-sm text-slate">
            {siteConfig.city} / {siteConfig.state}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={professional.phoneHref}
              variant="whatsapp"
              external={isWhatsApp}
            >
              WhatsApp
            </Button>
            <Button
              href={`mailto:${professional.email}`}
              variant="secondary"
              iconLeft="mail"
            >
              E-mail
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
