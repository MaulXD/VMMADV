/**
 * Configuração central do site VMMADV
 */
export const siteConfig = {
  name: "Victor Morais Advocacia & Consultoria",
  shortName: "VMMADV",
  description:
    "Atuação técnica e estratégica em Direito Público, Tributário e Previdenciário. Presença física em Maceió, AL — atendimento em todo o território nacional.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://victormoraisadv.com.br",
  locale: "pt_BR",
  founder: "Dr. Victor de Medeiros Morais",
  oab: "OAB/AL nº 15.318",
  city: "Maceió",
  state: "AL",
  address: {
    street: "Av. Governador Osman Loureiro, 3506",
    complement: "Ed. Empresarial Premium Office, Salas 202 e 204",
    neighborhood: "Mangabeiras",
    city: "Maceió",
    state: "AL",
    zip: "57037-532",
    full: "Av. Governador Osman Loureiro, 3506 — Ed. Empresarial Premium Office, Salas 202 e 204, Mangabeiras, Maceió/AL",
  },
  hero: {
    title: "Advocacia & Consultoria Jurídica",
    subtitle: "Maceió, Alagoas",
    institutional:
      "Advocacia técnica, estratégica e comprometida com a defesa de direitos de alta complexidade.",
    consultive:
      "Atendimento jurídico estruturado, com triagem objetiva e direcionamento adequado da sua demanda.",
  },
  contact: {
    whatsapp: "5582999193356",
    whatsappDisplay: "+55 (82) 99919-3356",
    email: "contato@victormoraisadv.com.br",
    emailPrecatorios: "vmm.adv.precatorios@gmail.com",
    whatsappMessage: "Olá, gostaria de uma análise jurídica.",
  },
  partnerships: [
    {
      name: "Sarmento, Camargo & Sarmento",
      shortName: "SCS",
      phone: "+55 (82) 8135-4563",
      email: "victormorais@sarmentocamargo.adv.br",
    },
    {
      name: "Associação Nacional de Credores de Entes Federativos",
      shortName: "ANCREF",
      phone: "+55 (82) 8212-2879",
      email: "contato3@ancref.org.br",
    },
  ],
  copyright: `© ${new Date().getFullYear()} Victor Morais Advocacia · VMMADV — Todos os direitos reservados · Maceió, AL · OAB/AL nº 15.318`,
  oabDisclaimer:
    "Este site segue as normas de publicidade da OAB. As informações aqui contidas não constituem promessa de resultado.",
  logo: {
    src: "/logo-vmmadv-full.png",
    width: 938,
    height: 262,
    alt: "Victor Morais Advocacia & Consultoria",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/profissionais", label: "Profissionais" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/precatorios-rpv", label: "Precatórios & RPV" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
] as const;

export const footerLinks = {
  institutional: [
    { href: "/sobre", label: "Sobre o Escritório" },
    { href: "/profissionais", label: "Profissionais" },
    { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
    { href: "/precatorios-rpv", label: "Precatórios & RPV" },
    { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  ],
  content: [
    { href: "/blog", label: "Blog" },
    { href: "/publicacoes", label: "Publicações" },
  ],
  legal: [
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
  ],
} as const;
