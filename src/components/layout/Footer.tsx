import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.18em] text-gold-light uppercase font-serif">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm text-white/75">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-page section-spacing">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <Link href="/" aria-label={`${siteConfig.name} — Início`}>
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="h-9 w-auto sm:h-10"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Icon
                  name="map-pin"
                  size={18}
                  className="mt-0.5 shrink-0 text-gold-light"
                />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={18} className="shrink-0 text-gold-light" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" size={18} className="shrink-0 text-gold-light" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all transition-colors hover:text-gold-light"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:gap-10">
            <FooterColumn title="Institucional" links={footerLinks.institutional} />
            <FooterColumn title="Conteúdo" links={footerLinks.content} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-8 text-xs leading-relaxed text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.copyright}</p>
          <p className="max-w-xl sm:text-right">{siteConfig.oabDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
