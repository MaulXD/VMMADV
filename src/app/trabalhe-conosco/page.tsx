import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Trabalhe Conosco",
  description: "Envie seu interesse em integrar a equipe Victor Morais Advocacia.",
  path: "/trabalhe-conosco",
});

export default function CareersPage() {
  return (
    <Section
      eyebrow="Carreiras"
      title="Trabalhe Conosco"
      description="Se você deseja integrar nossa equipe, envie seus dados para análise."
    >
      <ContactForm />
    </Section>
  );
}
