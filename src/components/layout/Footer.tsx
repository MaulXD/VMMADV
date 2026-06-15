import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-page section-spacing grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-5">
          <p className="font-serif text-3xl font-light">{siteConfig.shortName}</p>
          <p className="max-w-md text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
          <ul className="space-y-4 pt-2 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-gold-light" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" size={18} className="text-gold-light" />
              <a href={buildWhatsAppUrl()} className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" size={18} className="text-gold-light" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-6 text-sm text-gold-light">Institucional</p>
          <ul className="space-y-3 text-sm text-white/75">
            {footerLinks.institutional.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-6 text-sm text-gold-light">Conteúdo</p>
          <ul className="space-y-3 text-sm text-white/75">
            {[...footerLinks.content, ...footerLinks.legal].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <NewsletterForm variant="footer" rememberSubscription />
        </div>
      </div>

      <div className="divider-soft border-white/10">
        <div className="container-page py-8 text-center text-xs leading-relaxed text-white/45">
          <p>{siteConfig.copyright}</p>
          <p className="mt-2">{siteConfig.oabDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
