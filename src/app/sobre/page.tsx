import type { Metadata } from "next";
import Link from "next/link";
import { aboutIntro } from "@/lib/about";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Sobre",
  description: `${aboutIntro.title} Conheça o ${siteConfig.name} e sua atuação em Maceió e em todo o Brasil.`,
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <Section eyebrow={aboutIntro.eyebrow} title={aboutIntro.title}>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20 xl:gap-24">
          <div className="max-w-3xl space-y-5 font-serif-body text-slate">
            {aboutIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="space-y-8 lg:border-l lg:border-line/70 lg:pl-10 xl:pl-12">
            <div>
              <p className="section-eyebrow mb-0">Advogado responsável</p>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-navy sm:text-3xl">
                {siteConfig.founder}
              </h2>
              <p className="mt-3 text-slate">{siteConfig.oab}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate">
              Formação, experiência, publicações e palestras serão detalhadas nesta
              seção.
            </p>
            <div className="flex flex-col gap-3">
              <Button href="/profissionais" variant="secondary" iconRight="arrow-right">
                Conheça a equipe
              </Button>
              <Link href="/contato" className="text-sm text-gold underline">
                Fale com o escritório
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        className="bg-off-white"
        eyebrow="Transparência"
        title="Compromisso com a privacidade"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed text-slate">
            O escritório observa as normas de proteção de dados e de publicidade
            advocatícia. Informações sobre o uso do site estão disponíveis para
            consulta a qualquer momento.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <Button
              href="/politica-de-privacidade"
              variant="secondary"
              iconRight="arrow-right"
            >
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
