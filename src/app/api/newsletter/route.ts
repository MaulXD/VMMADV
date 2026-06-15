import { NextResponse } from "next/server";

type NewsletterPayload = {
  email: string;
  consentimento: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterPayload;

    if (!body.consentimento) {
      return NextResponse.json(
        { ok: false, error: "É necessário aceitar a política de privacidade." },
        { status: 400 },
      );
    }

    const email = body.email?.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um e-mail válido." },
        { status: 400 },
      );
    }

    // TODO: integrar Google Sheets API (aba newsletter).
    console.info("[newsletter]", JSON.stringify({ timestamp: new Date().toISOString(), email }));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro interno ao inscrever e-mail." },
      { status: 500 },
    );
  }
}
