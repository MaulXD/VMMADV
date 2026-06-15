import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/areas";
import { createMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/contact/ContactSection";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { practiceAreas } = await import("@/lib/areas");
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return createMetadata({
    title: area.title,
    description: area.shortDescription,
    path: `/areas/${area.slug}`,
    keywords: area.keywords,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area || slug === "precatorios-rpv") notFound();

  return (
    <>
      <Section eyebrow="Área de atuação" title={area.title}>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-20">
          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-slate">{area.shortDescription}</p>
            <p className="leading-relaxed text-slate">{area.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <Button href={buildWhatsAppUrl()} external variant="whatsapp">
              WhatsApp
            </Button>
            <Button href="/areas-de-atuacao" variant="secondary">
              Todas as áreas
            </Button>
          </div>
        </div>
      </Section>

      <ContactSection defaultArea={area.slug} title="Solicite uma análise" compact />
    </>
  );
}
