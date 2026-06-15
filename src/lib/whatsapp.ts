import { siteConfig } from "./site-config";

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappMessage,
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

export function buildLeadWhatsAppMessage(data: {
  nome: string;
  cpf: string;
  telefone: string;
  area: string;
  motivo: string;
  motivoOutro?: string;
}): string {
  const motivoLabel =
    data.motivo === "outro" && data.motivoOutro
      ? data.motivoOutro
      : data.motivo;

  return [
    siteConfig.contact.whatsappMessage,
    "",
    `Nome: ${data.nome}`,
    `CPF: ${data.cpf}`,
    `Telefone: ${data.telefone}`,
    `Área: ${data.area}`,
    `Motivo: ${motivoLabel}`,
  ].join("\n");
}
