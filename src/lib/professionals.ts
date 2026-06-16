import { siteConfig } from "./site-config";

export type Professional = {
  id: string;
  name: string;
  role: string;
  credential?: string;
  bio: string;
  specialties: string[];
  phone: string;
  phoneHref: string;
  email: string;
  image: string;
  imageAlt: string;
};

const base = "https://victormoraisadv.com.br/wp-content/uploads";

export const professionals: Professional[] = [
  {
    id: "victor-morais",
    name: "Dr. Victor de Medeiros Morais",
    role: "Fundador",
    credential: siteConfig.oab,
    bio: "Advogado com atuação consultiva e contenciosa em demandas de alta complexidade, com destaque em causas contra entes federativos, precatórios, litígios tributários e previdenciários em todo o território nacional.",
    specialties: [
      "Direito Público",
      "Direito Tributário",
      "Direito Previdenciário",
      "Precatórios e RPV",
    ],
    phone: siteConfig.contact.whatsappDisplay,
    phoneHref: `https://wa.me/${siteConfig.contact.whatsapp}`,
    email: siteConfig.contact.email,
    image: `${base}/2025/05/R6FC9113-1.jpg-preto-e-branco-1.jpg`,
    imageAlt: "Dr. Victor de Medeiros Morais, fundador do escritório Victor Morais Advocacia",
  },
  {
    id: "hevelyn-dantas",
    name: "Hevelyn Carla Dantas Lima",
    role: "Assessora Jurídica",
    bio: "Atua na análise e condução de demandas empresariais, previdenciárias e contratuais, com foco em orientação técnica objetiva e acompanhamento próximo do cliente.",
    specialties: [
      "Direito Empresarial",
      "Direito Previdenciário",
      "Direito Contratual",
    ],
    phone: siteConfig.contact.whatsappDisplay,
    phoneHref: `https://wa.me/${siteConfig.contact.whatsapp}`,
    email: "hevelyndantas@victormoraisadv.com.br",
    image: `${base}/2025/06/ookookokokook-heve-.jpg`,
    imageAlt: "Hevelyn Carla Dantas Lima, assessora jurídica",
  },
  {
    id: "luis-santos",
    name: "Dr. Luís Carlos dos Santos",
    role: "Advogado",
    credential: "OAB/UF 000",
    bio: "Experiência em defesa criminal, consultoria eleitoral e contencioso administrativo, com atuação estratégica em procedimentos sensíveis e prazos curtos.",
    specialties: [
      "Direito Criminal",
      "Direito Eleitoral",
      "Direito Administrativo",
    ],
    phone: siteConfig.contact.whatsappDisplay,
    phoneHref: `https://wa.me/${siteConfig.contact.whatsapp}`,
    email: siteConfig.contact.email,
    image: `${base}/2025/06/uizinhoooooo-1.jpg`,
    imageAlt: "Dr. Luís Carlos dos Santos, advogado",
  },
  {
    id: "valdenor-morais",
    name: "Dr. Valdenor de Lima Morais",
    role: "Advogado",
    credential: "OAB/UF 00000",
    bio: "Atua em regularização documental, licenciamento e conformidade regulatória empresarial, com assessoria técnica para adequação às exigências legais.",
    specialties: [
      "Consultoria jurídica em regularização e conformidade documental",
      "Assessoria para licenciamento e conformidade regulatória empresarial",
    ],
    phone: siteConfig.contact.whatsappDisplay,
    phoneHref: `https://wa.me/${siteConfig.contact.whatsapp}`,
    email: siteConfig.contact.email,
    image: `${base}/2025/07/foto-do-painho-para-o-site.jpg`,
    imageAlt: "Dr. Valdenor de Lima Morais, advogado",
  },
];
