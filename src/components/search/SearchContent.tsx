"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { practiceAreas, precatoriosArea } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";
import { Section } from "@/components/ui/Section";

const searchableItems = [
  ...practiceAreas.map((area) => ({
    title: area.title,
    href: `/areas/${area.slug}`,
    type: "Área",
    text: `${area.title} ${area.shortDescription}`,
  })),
  {
    title: precatoriosArea.title,
    href: "/precatorios-rpv",
    type: "Área",
    text: `${precatoriosArea.title} ${precatoriosArea.description}`,
  },
  ...blogPosts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    type: "Blog",
    text: `${post.title} ${post.excerpt}`,
  })),
];

export function SearchContent() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return searchableItems.filter((item) =>
      item.text.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <Section
      eyebrow="Busca"
      title="Pesquisar no site"
      description="Encontre áreas de atuação e conteúdos publicados."
    >
      <div className="relative max-w-xl">
        <Icon
          name="search"
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: precatórios, tributário, previdenciário..."
          className="field pl-12"
        />
      </div>

      <div className="mt-8 space-y-3">
        {query && results.length === 0 ? (
          <p className="text-slate">Nenhum resultado encontrado.</p>
        ) : null}
        {results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between border border-line bg-white px-5 py-4 transition-colors hover:border-gold/50"
          >
            <div>
              <p className="section-rule mb-2">{item.type}</p>
              <p className="font-serif text-xl font-semibold text-navy">
                {item.title}
              </p>
            </div>
            <Icon
              name="chevron-right"
              size={18}
              className="text-slate transition-transform group-hover:translate-x-0.5 group-hover:text-gold"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
