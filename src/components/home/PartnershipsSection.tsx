import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";

export function PartnershipsSection() {
  return (
    <Section
      eyebrow="Parcerias"
      title="Atuação em rede"
      description="Articulação com parceiros estratégicos para ampliar cobertura e profundidade técnica em demandas específicas."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.partnerships.map((partner) => (
          <article key={partner.shortName} className="border border-line bg-white p-6">
            <p className="section-rule">{partner.shortName}</p>
            <h3 className="mt-3 font-serif text-xl font-medium text-navy">
              {partner.name}
            </h3>
            <p className="mt-2 text-sm text-slate">{partner.email}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
