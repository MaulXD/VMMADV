import type { Metadata } from "next";
import { ProfessionalCard } from "@/components/professionals/ProfessionalCard";
import { Section } from "@/components/ui/Section";
import { professionals, professionalsIntro } from "@/lib/professionals";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Profissionais",
  description:
    "Conheça a equipe da Victor Morais Advocacia — especialistas em Direito Público e Privado, com atuação em Maceió e em todo o Brasil.",
  path: "/profissionais",
  keywords: [
    "advogados Maceió",
    "equipe jurídica Alagoas",
    "Victor Morais Advocacia",
  ],
});

export default function ProfessionalsPage() {
  return (
    <>
      <Section
        eyebrow={professionalsIntro.eyebrow}
        title={professionalsIntro.quote}
      >
        <div className="max-w-3xl space-y-5 text-slate">
          {professionalsIntro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        className="bg-off-white"
        eyebrow="Equipe"
        title="Nossos profissionais"
        description="Conheça quem compõe o escritório e as áreas de atuação de cada membro da equipe."
      >
        <div className="space-y-20 lg:space-y-28">
          {professionals.map((professional, index) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
