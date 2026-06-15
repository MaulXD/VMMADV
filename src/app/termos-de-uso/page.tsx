import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = createMetadata({
  title: "Termos de Uso",
  description: "Termos de uso do site institucional VMMADV.",
  path: "/termos-de-uso",
});

export default function TermsPage() {
  return (
    <Section title="Termos de Uso">
      <div className="max-w-3xl space-y-4 text-slate">
        <p>
          O conteúdo deste site tem caráter informativo e não substitui consulta
          jurídica individualizada.
        </p>
        <p>{siteConfig.oabDisclaimer}</p>
        <p>
          Ao utilizar este site, você concorda com estes termos e com nossa
          Política de Privacidade.
        </p>
      </div>
    </Section>
  );
}
