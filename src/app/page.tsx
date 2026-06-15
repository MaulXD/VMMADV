import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroTriage } from "@/components/home/HeroTriage";
import { AreasGrid } from "@/components/home/AreasGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PrecatoriosHighlight } from "@/components/home/PrecatoriosHighlight";
import { ContactCta } from "@/components/home/ContactCta";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Início",
  description:
    "Victor Morais Advocacia & Consultoria — Direito Público, Tributário e Previdenciário em Maceió e em todo o Brasil.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HeroTriage />
      <AboutPreview />
      <PrecatoriosHighlight />
      <AreasGrid />
      <ContactCta />
    </>
  );
}
