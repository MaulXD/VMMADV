export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  keywords: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    shortDescription:
      "Consultoria e contencioso tributário para pessoas físicas e empresas.",
    description:
      "Atuação técnica em planejamento tributário, defesa em autos de infração, execuções fiscais e discussões de alta complexidade perante o Judiciário e administrativamente.",
    keywords: ["advogado tributário Maceió", "direito tributário Alagoas"],
  },
  {
    slug: "direito-publico",
    title: "Direito Público",
    shortDescription:
      "Defesa de direitos em face da Administração Pública e entes federativos.",
    description:
      "Patrocínio de demandas contra a Fazenda Pública, análise de atos administrativos e estratégias jurídicas em matéria pública de alta complexidade.",
    keywords: ["direito público Maceió", "advogado direito público"],
  },
  {
    slug: "direito-administrativo",
    title: "Direito Administrativo",
    shortDescription:
      "Atuação em licitações, contratos administrativos e servidores públicos.",
    description:
      "Assessoria e contencioso em relações com o poder público, incluindo licitações, contratos, responsabilidade civil do Estado e direitos de servidores.",
    keywords: ["direito administrativo Maceió"],
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDescription:
      "Aposentadorias, benefícios e revisões perante o INSS e a Justiça.",
    description:
      "Análise de benefícios previdenciários, aposentadorias, revisões de vida e planejamento previdenciário com atuação administrativa e judicial.",
    keywords: ["advogado previdenciário Maceió", "direito previdenciário"],
  },
  {
    slug: "direito-sucessorio",
    title: "Direito Sucessório",
    shortDescription:
      "Inventários, partilhas e planejamento sucessório patrimonial.",
    description:
      "Condução de inventários judiciais e extrajudiciais, partilhas, testamentos e estratégias de organização patrimonial familiar.",
    keywords: ["inventário Maceió", "direito sucessório"],
  },
  {
    slug: "direito-condominial",
    title: "Direito Condominial",
    shortDescription:
      "Assessoria jurídica para condomínios e síndicos.",
    description:
      "Consultoria e contencioso condominial, regulamentos internos, assembleias e resolução de conflitos entre condôminos e administradoras.",
    keywords: ["advogado condominial Maceió"],
  },
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    shortDescription:
      "Estruturação societária e consultoria para empresas.",
    description:
      "Assessoria em contratos empresariais, governança, reestruturações e demandas contenciosas envolvendo sociedades e grupos econômicos.",
    keywords: ["advogado empresarial Maceió"],
  },
  {
    slug: "direito-contratual",
    title: "Direito Contratual",
    shortDescription:
      "Elaboração, revisão e defesa em relações contratuais.",
    description:
      "Análise de contratos civis e comerciais, negociação de cláusulas e atuação em disputas contratuais de média e alta complexidade.",
    keywords: ["advogado contratos Maceió"],
  },
  {
    slug: "direito-medico",
    title: "Direito Médico",
    shortDescription:
      "Defesa de profissionais e pacientes em demandas da área da saúde.",
    description:
      "Atuação em erro médico, responsabilidade civil, relações entre profissionais de saúde, clínicas e operadoras.",
    keywords: ["advogado direito médico"],
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDescription:
      "Contratos, usucapião e regularização de imóveis.",
    description:
      "Assessoria em compra e venda, locação, usucapião, regularização fundiária e litígios envolvendo propriedade e posse.",
    keywords: ["advogado imobiliário Maceió"],
  },
  {
    slug: "consultoria-armas-de-fogo",
    title: "Consultoria para Armas de Fogo",
    shortDescription:
      "Orientação jurídica para regularização e porte de armas.",
    description:
      "Consultoria especializada em legislação de armas, processos administrativos junto aos órgãos competentes e defesa em demandas correlatas.",
    keywords: ["consultoria armas de fogo"],
  },
  {
    slug: "registro-empresas-vigilancia",
    title: "Registro de Empresas de Vigilância",
    shortDescription:
      "Assessoria para registro e compliance de empresas de segurança.",
    description:
      "Suporte jurídico para abertura, registro e manutenção de empresas de vigilância patrimonial perante órgãos reguladores.",
    keywords: ["registro empresa vigilância"],
  },
];

export const precatoriosArea: PracticeArea = {
  slug: "precatorios-rpv",
  title: "Precatórios & RPV",
  shortDescription:
    "Assessoria especializada para credores de precatórios e RPV em todo o Brasil.",
  description:
    "Atuação dedicada à defesa de credores de precatórios e Requisições de Pequeno Valor (RPV), com análise técnica da situação do crédito, estratégias de cobrança e acompanhamento processual em demandas de alta complexidade contra entes federativos.",
  keywords: [
    "precatórios Alagoas",
    "advogado precatórios",
    "RPV",
    "credor precatório",
    "ação civil pública",
  ],
};

export function getAreaBySlug(slug: string): PracticeArea | undefined {
  if (slug === "precatorios-rpv") return precatoriosArea;
  return practiceAreas.find((area) => area.slug === slug);
}

export const formMotives = [
  { value: "duvidas", label: "Dúvidas" },
  { value: "ingressar", label: "Quero ingressar com ação" },
  { value: "andamento", label: "Quero saber o andamento do processo" },
  { value: "outro", label: "Outro" },
] as const;

export type FormMotive = (typeof formMotives)[number]["value"];
