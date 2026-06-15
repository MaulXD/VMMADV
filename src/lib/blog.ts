export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "precatorios-o-que-o-credor-precisa-saber",
    title: "Precatórios: o que o credor precisa saber",
    excerpt:
      "Entenda os principais pontos de atenção para credores de precatórios e RPV.",
    date: "2026-06-01",
    content: [
      "O mercado de precatórios exige análise técnica cuidadosa da origem do crédito, fase processual e perspectivas de pagamento.",
      "Antes de qualquer decisão, é fundamental verificar a documentação, o ente devedor e os prazos aplicáveis.",
      "Nossa equipe realiza triagem objetiva para orientar o melhor caminho jurídico em cada caso.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
