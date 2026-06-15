import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Sobre",
  description: `Conheça o ${siteConfig.name}, sua atuação e o ${siteConfig.founder}.`,
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="Sobre o escritório" title={siteConfig.name}>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-slate">
            <p className="text-lg leading-relaxed">{siteConfig.description}</p>
            <p className="leading-relaxed">{siteConfig.hero.institutional}</p>
            <p className="leading-relaxed">{siteConfig.hero.consultive}</p>
          </div>

          <aside className="space-y-6 lg:border-l lg:border-line/70 lg:pl-12">
            <div>
              <p className="section-eyebrow">Advogado responsável</p>
              <h2 className="mt-3 font-serif text-3xl font-light text-navy">
                {siteConfig.founder}
              </h2>
              <p className="mt-3 text-slate">{siteConfig.oab}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate">
              Formação, experiência, publicações e palestras serão detalhadas nesta
              seção.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="bg-off-white" eyebrow="Transparência" title="Compromisso com a privacidade">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed text-slate">
            O escritório observa as normas de proteção de dados e de publicidade
            advocatícia. Informações sobre o uso do site estão disponíveis para
            consulta a qualquer momento.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <Button href="/politica-de-privacidade" variant="secondary" iconRight="arrow-right">
              LGPD e Privacidade
            </Button>
            <Button href="/termos-de-uso" variant="ghost">
              Termos de Uso
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
