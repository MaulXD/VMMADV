import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";

const mapQuery = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}`,
);

export function MapSection() {
  return (
    <Section spacious={false} eyebrow="Localização" title="Maceió, Alagoas">
      <p className="-mt-8 mb-10 max-w-xl text-slate">
        {siteConfig.address.full}
      </p>
      <div className="aspect-[16/9] max-h-[480px] w-full overflow-hidden bg-muted lg:aspect-[21/9]">
        <iframe
          title="Mapa do escritório VMMADV"
          src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}
