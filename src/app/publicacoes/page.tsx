import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = createMetadata({
  title: "Publicações",
  description: "Publicações e notícias do escritório Victor Morais Advocacia.",
  path: "/publicacoes",
});

export default function PublicationsPage() {
  return (
    <Section
      eyebrow="Conteúdo"
      title="Publicações"
      description="Espaço para publicações, notícias e materiais institucionais do escritório."
    >
      <p className="text-lg text-slate">
        Em breve, esta seção reunirá publicações e notícias oficiais da equipe.
      </p>
    </Section>
  );
}
