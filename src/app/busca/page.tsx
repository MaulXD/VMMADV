import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { SearchContent } from "@/components/search/SearchContent";

export const metadata: Metadata = createMetadata({
  title: "Busca",
  description: "Pesquise áreas de atuação e conteúdos do site VMMADV.",
  path: "/busca",
});

export default function SearchPage() {
  return <SearchContent />;
}
