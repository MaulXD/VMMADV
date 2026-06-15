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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
            <div className="lg:py-4">
              <p className="section-eyebrow">Contato</p>
              <h2 className="section-title">{title}</h2>
              <p className="section-lead">{siteConfig.hero.consultive}</p>

              {!compact ? (
                <ul className="mt-12 space-y-6 text-sm text-slate">
                  <li>
                    <Button href={buildWhatsAppUrl()} external variant="whatsapp">
                      WhatsApp
                    </Button>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="mail" size={18} className="text-gold" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-navy"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span>{siteConfig.address.full}</span>
                  </li>
                </ul>
              ) : null}
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <ContactForm defaultArea={defaultArea} />
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-slate">
            <Link href="/contato" className="text-gold underline">
              Formulário de contato
            </Link>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
