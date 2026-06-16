import Link from "next/link";
import type { Metadata } from "next";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Icon } from "@/components/icons/Icon";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "Artigos e conteúdos jurídicos do escritório Victor Morais Advocacia.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section
      eyebrow="Conteúdo"
      title="Blog"
      description="Artigos sobre as principais áreas de atuação do escritório."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-16">
        <div className="divide-y divide-line border-y border-line">
          {blogPosts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0 last:pb-0 sm:py-10">
              <p className="text-sm text-slate">
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy sm:text-3xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group inline-flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <span>{post.title}</span>
                  <Icon
                    name="arrow-right"
                    size={20}
                    className="mt-1.5 shrink-0 text-gold transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <aside className="order-first lg:order-none lg:sticky lg:top-28">
          <NewsletterForm variant="blog" rememberSubscription />
        </aside>
      </div>
    </Section>
  );
}
