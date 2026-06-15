import type { Metadata } from "next";
import { practiceAreas, precatoriosArea } from "@/lib/areas";
import { AreaCard } from "@/components/areas/AreaCard";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = createMetadata({
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação do escritório Victor Morais Advocacia em Maceió e em todo o Brasil.",
  path: "/areas-de-atuacao",
});

export default function AreasPage() {
  const allAreas = [precatoriosArea, ...practiceAreas];

  return (
    <Section
      eyebrow="Atuação"
      title="Áreas de Atuação"
      description="Cada demanda recebe triagem objetiva e direcionamento técnico adequado."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {allAreas.map((area) => (
          <AreaCard key={area.slug} area={area} />
        ))}
      </div>
    </Section>
  );
}
