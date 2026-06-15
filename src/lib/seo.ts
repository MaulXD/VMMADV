import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.shortName
      ? `${siteConfig.name} · ${siteConfig.shortName}`
      : `${title} · ${siteConfig.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: { canonical: url },
  };
}

export const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.whatsappDisplay,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: "BR",
  },
  areaServed: "BR",
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Advogado",
  },
};
