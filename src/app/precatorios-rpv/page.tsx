import type { Metadata } from "next";
import { precatoriosArea } from "@/lib/areas";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: precatoriosArea.title,
  description: precatoriosArea.description,
  path: "/precatorios-rpv",
  keywords: precatoriosArea.keywords,
});

export default function PrecatoriosPage() {
  return (
    <>
      <Section
        dark
        eyebrow="Especialidade"
        title={precatoriosArea.title}
        description={precatoriosArea.description}
      >
        <Button href={buildWhatsAppUrl()} external variant="whatsapp">
          Falar sobre meu precatório
        </Button>
      </Section>

      <Section title="Como funciona o atendimento">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Triagem",
              text: "Você descreve sua situação e envia os dados principais do crédito.",
            },
            {
              title: "2. Análise",
              text: "A equipe avalia a viabilidade jurídica e os próximos passos.",
            },
            {
              title: "3. Estratégia",
              text: "Definimos o encaminhamento adequado para a cobrança ou defesa do crédito.",
            },
          ].map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-navy/10 bg-off-white p-6"
            >
              <h2 className="font-serif text-xl font-semibold text-navy">
                {step.title}
              </h2>
              <p className="mt-3 text-slate">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-off-white" title="Solicite análise do seu caso">
        <ContactForm defaultArea="precatorios-rpv" />
      </Section>
    </>
  );
}
