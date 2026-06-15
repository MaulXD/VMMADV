import type { MetadataRoute } from "next";
import { practiceAreas } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/sobre",
    "/profissionais",
    "/areas-de-atuacao",
    "/precatorios-rpv",
    "/contato",
    "/blog",
    "/publicacoes",
    "/trabalhe-conosco",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/busca",
    "/lp/precatorios",
    "/lp/tributario",
    "/lp/previdenciario",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...practiceAreas.map((area) => ({
      url: `${base}/areas/${area.slug}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
