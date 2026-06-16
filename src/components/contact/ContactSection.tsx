import Link from "next/link";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Icon } from "@/components/icons/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

type ContactSectionProps = {
  defaultArea?: string;
  title?: string;
  compact?: boolean;
};

export function ContactSection({
  defaultArea = "",
  title = "Fale Conosco",
  compact = false,
}: ContactSectionProps) {
  return (
    <section className="section-spacing bg-muted">
      <div className="container-page">
        <AnimateIn>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-16 xl:gap-20">
            <div className="max-w-lg lg:pt-2">
              <p className="section-eyebrow">Contato</p>
              <h2 className="section-title">{title}</h2>
              <p className="section-lead">{siteConfig.hero.consultive}</p>

              {!compact ? (
                <div className="mt-10 space-y-6">
                  <Button href={buildWhatsAppUrl()} external variant="whatsapp">
                    WhatsApp
                  </Button>
                  <ul className="space-y-4 text-sm text-slate">
                    <li className="flex items-center gap-3">
                      <Icon name="mail" size={18} className="shrink-0 text-gold" />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="break-all hover:text-navy"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon
                        name="map-pin"
                        size={18}
                        className="mt-0.5 shrink-0 text-gold"
                      />
                      <span>{siteConfig.address.full}</span>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="form-panel">
              <div className="form-panel-header">
                <p className="form-eyebrow">Atendimento</p>
                <h3 className="font-serif text-2xl font-light text-navy sm:text-3xl">
                  Solicitar contato
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-slate">
                  Preencha os dados abaixo. Ao enviar, você continuará a conversa no
                  WhatsApp.
                </p>
              </div>
              <div className="form-panel-body">
                <ContactForm defaultArea={defaultArea} />
              </div>
            </div>
          </div>

          {!compact ? (
            <p className="mt-10 text-center font-serif text-xs text-slate">
              <Link href="/contato" className="text-gold underline">
                Formulário de contato
              </Link>
            </p>
          ) : null}
        </AnimateIn>
      </div>
    </section>
  );
}
