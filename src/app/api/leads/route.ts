import { NextResponse } from "next/server";
import { formMotives, getAreaBySlug } from "@/lib/areas";
import { buildLeadWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

type LeadPayload = {
  nome: string;
  cpf: string;
  telefone: string;
  area: string;
  motivo: string;
  motivoOutro?: string;
  consentimento: boolean;
  origem?: string;
};

function cleanDigits(value: string) {
  return value.replace(/\D/g, "");
}

function isValidCpf(cpf: string) {
  const digits = cleanDigits(cpf);
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;

  const calc = (length: number) => {
    const sum = digits
      .slice(0, length)
      .split("")
      .reduce((acc, digit, index) => acc + Number(digit) * (length + 1 - index), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  return calc(9) === Number(digits[9]) && calc(10) === Number(digits[10]);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.consentimento) {
      return NextResponse.json(
        { ok: false, error: "É necessário aceitar a política de privacidade." },
        { status: 400 },
      );
    }

    if (!body.nome?.trim() || body.nome.trim().length < 3) {
      return NextResponse.json(
        { ok: false, error: "Informe um nome válido." },
        { status: 400 },
      );
    }

    if (!isValidCpf(body.cpf)) {
      return NextResponse.json(
        { ok: false, error: "Informe um CPF válido." },
        { status: 400 },
      );
    }

    if (cleanDigits(body.telefone).length < 10) {
      return NextResponse.json(
        { ok: false, error: "Informe um telefone válido." },
        { status: 400 },
      );
    }

    const area = getAreaBySlug(body.area);
    if (!area) {
      return NextResponse.json(
        { ok: false, error: "Selecione uma área de atuação." },
        { status: 400 },
      );
    }

    const motive = formMotives.find((item) => item.value === body.motivo);
    if (!motive) {
      return NextResponse.json(
        { ok: false, error: "Selecione um motivo de contato." },
        { status: 400 },
      );
    }

    if (body.motivo === "outro" && !body.motivoOutro?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Descreva o motivo do contato." },
        { status: 400 },
      );
    }

    const leadRecord = {
      timestamp: new Date().toISOString(),
      origem: body.origem ?? "/contato",
      nome: body.nome.trim(),
      cpf: body.cpf,
      telefone: body.telefone,
      area: area.title,
      motivo: motive.label,
      motivoOutro: body.motivoOutro?.trim() ?? "",
    };

    // TODO: integrar Google Sheets API quando credenciais estiverem configuradas.
    console.info("[lead]", JSON.stringify(leadRecord));

    const whatsappUrl = buildWhatsAppUrl(
      buildLeadWhatsAppMessage({
        nome: leadRecord.nome,
        cpf: leadRecord.cpf,
        telefone: leadRecord.telefone,
        area: leadRecord.area,
        motivo: leadRecord.motivo,
        motivoOutro: leadRecord.motivoOutro,
      }),
    );

    return NextResponse.json({ ok: true, whatsappUrl });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro interno ao processar o formulário." },
      { status: 500 },
    );
  }
}
