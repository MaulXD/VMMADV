import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <Section eyebrow="Sobre" title="Saiba mais sobre nós">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <AnimateIn className="space-y-6 text-slate">
          <p className="text-lg leading-relaxed">
            O escritório {siteConfig.name} atua de forma técnica e estratégica em
            Direito Público, Tributário e Previdenciário.
          </p>
          <p className="leading-relaxed">{siteConfig.hero.consultive}</p>
        </AnimateIn>
        <AnimateIn delay={0.1} direction="left">
          <div className="space-y-8 lg:pl-8 lg:border-l lg:border-line/70">
            <div>
              <p className="section-eyebrow mb-0">{siteConfig.founder}</p>
              <p className="mt-3 font-serif text-3xl font-light text-navy">
                Presença em Maceió, atuação em todo o Brasil
              </p>
            </div>
            <Button href="/sobre" variant="secondary" iconRight="arrow-right">
              Conheça o escritório
            </Button>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
