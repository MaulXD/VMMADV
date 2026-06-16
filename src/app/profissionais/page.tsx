import type { Metadata } from "next";
import Link from "next/link";
import { ProfessionalCard } from "@/components/professionals/ProfessionalCard";
import { Section } from "@/components/ui/Section";
import { professionals } from "@/lib/professionals";
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
    <Section
      eyebrow="Equipe"
      title="Nossos profissionais"
      description="Conheça quem compõe o escritório e as áreas de atuação de cada membro da equipe."
    >
      <p className="mb-12 max-w-2xl font-serif-body text-slate">
        Para informações institucionais sobre o escritório, visite a página{" "}
        <Link href="/sobre" className="text-gold underline">
          Sobre
        </Link>
        .
      </p>

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
  );
}
