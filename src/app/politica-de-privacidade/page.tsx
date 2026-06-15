import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = createMetadata({
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados do site VMMADV.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <Section title="Política de Privacidade">
      <div className="prose prose-slate max-w-3xl space-y-4 text-slate">
        <p>
          O {siteConfig.name} trata dados pessoais em conformidade com a Lei Geral
          de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>
        <p>
          Coletamos nome, CPF, telefone, e-mail e informações sobre sua demanda
          jurídica exclusivamente para análise, retorno de contato e prestação de
          serviços advocatícios.
        </p>
        <p>
          Os dados podem ser armazenados em formulários internos e planilhas de
          controle de leads, com acesso restrito à equipe responsável.
        </p>
        <p>
          Você pode solicitar acesso, correção ou exclusão dos seus dados pelo
          e-mail {siteConfig.contact.email}.
        </p>
      </div>
    </Section>
  );
}
