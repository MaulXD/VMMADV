import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { MapSection } from "@/components/home/MapSection";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: siteConfig.hero.consultive,
  path: "/contato",
});

type PageProps = {
  searchParams: Promise<{ area?: string }>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <>
      <ContactSection defaultArea={params.area ?? ""} />
      <MapSection />
    </>
  );
}
