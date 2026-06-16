import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAreaBySlug, precatoriosArea } from "@/lib/areas";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const landingPages = ["precatorios", "tributario", "previdenciario"] as const;

const landingMap: Record<(typeof landingPages)[number], string> = {
  precatorios: precatoriosArea.slug,
  tributario: "direito-tributario",
  previdenciario: "direito-previdenciario",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingPages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const areaSlug = landingMap[slug as (typeof landingPages)[number]];
  const area = getAreaBySlug(areaSlug);
  if (!area) return {};

  return createMetadata({
    title: `${area.title} · Landing`,
    description: area.shortDescription,
    path: `/lp/${slug}`,
    keywords: area.keywords,
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  if (!(slug in landingMap)) notFound();
  const areaSlug = landingMap[slug as (typeof landingPages)[number]];

  const area = getAreaBySlug(areaSlug);
  if (!area) notFound();

  return (
    <main className="min-h-screen bg-off-white">
      <Section
        title={area.title}
        description={area.description}
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Button href={buildWhatsAppUrl()} external variant="whatsapp">
            Falar agora no WhatsApp
          </Button>
        </div>
        <div className="form-panel max-w-2xl">
          <div className="form-panel-header">
            <p className="form-eyebrow">Atendimento</p>
            <h3 className="form-panel-title">Solicitar contato</h3>
          </div>
          <div className="form-panel-body">
            <ContactForm defaultArea={area.slug} />
          </div>
        </div>
      </Section>
    </main>
  );
}
