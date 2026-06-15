"use client";

import { useState } from "react";
import {
  formMotives,
  practiceAreas,
  precatoriosArea,
  type FormMotive,
} from "@/lib/areas";
import { formatCpf, formatPhone } from "@/lib/format";
import { FormField, FormGroup } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultArea?: string;
  className?: string;
};

type LeadResponse = {
  ok: boolean;
  whatsappUrl?: string;
  error?: string;
};

export function ContactForm({ defaultArea = "", className }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [motivo, setMotivo] = useState<FormMotive | "">("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [area, setArea] = useState(defaultArea);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!motivo) {
      setError("Selecione o motivo do contato.");
      return;
    }

    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      nome: String(formData.get("nome") ?? ""),
      cpf,
      telefone,
      area,
      motivo,
      motivoOutro: String(formData.get("motivoOutro") ?? ""),
      consentimento: consent,
      origem:
        typeof window !== "undefined" ? window.location.pathname : "/contato",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as LeadResponse;

      if (!response.ok || !data.ok || !data.whatsappUrl) {
        throw new Error(data.error ?? "Não foi possível enviar o formulário.");
      }

      window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
      event.currentTarget.reset();
      setConsent(false);
      setMotivo("");
      setCpf("");
      setTelefone("");
      setArea(defaultArea);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Erro ao enviar formulário.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-8", className)}>
      <FormGroup title="Seus dados" description="Para identificação e retorno do contato.">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Nome completo" htmlFor="nome" className="sm:col-span-2">
            <input required id="nome" name="nome" minLength={3} className="field" />
          </FormField>
          <FormField label="CPF" htmlFor="cpf" hint="Somente números">
            <input
              required
              id="cpf"
              name="cpf"
              inputMode="numeric"
              value={cpf}
              onChange={(event) => setCpf(formatCpf(event.target.value))}
              placeholder="000.000.000-00"
              className="field"
            />
          </FormField>
          <FormField label="Telefone / WhatsApp" htmlFor="telefone">
            <input
              required
              id="telefone"
              name="telefone"
              inputMode="tel"
              value={telefone}
              onChange={(event) => setTelefone(formatPhone(event.target.value))}
              placeholder="(00) 00000-0000"
              className="field"
            />
          </FormField>
          <FormField label="Área de atuação" htmlFor="area" className="sm:col-span-2">
            <select
              required
              id="area"
              name="area"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="field"
            >
              <option value="">Selecione</option>
              <option value={precatoriosArea.slug}>{precatoriosArea.title}</option>
              {practiceAreas.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </FormGroup>

      <FormGroup
        title="Sua demanda"
        description="Descreva o que você precisa para direcionarmos corretamente."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {formMotives.map((item) => (
            <label
              key={item.value}
              className={cn(
                "flex min-h-[4.5rem] cursor-pointer items-start gap-3 border p-4 transition-colors",
                motivo === item.value
                  ? "border-gold/40 bg-off-white ring-1 ring-gold/25"
                  : "border-line bg-white hover:border-gold/25 hover:bg-off-white",
              )}
            >
              <input
                type="radio"
                name="motivo"
                value={item.value}
                checked={motivo === item.value}
                onChange={() => setMotivo(item.value)}
                className="mt-0.5 shrink-0"
              />
              <span className="text-sm leading-snug text-navy">{item.label}</span>
            </label>
          ))}
        </div>

        {motivo === "outro" ? (
          <FormField label="Descreva o motivo" htmlFor="motivoOutro">
            <textarea
              required
              id="motivoOutro"
              name="motivoOutro"
              rows={3}
              className="field min-h-[96px] resize-y"
              placeholder="Conte brevemente sua situação..."
            />
          </FormField>
        ) : null}
      </FormGroup>

      <label className="flex items-start gap-3 bg-muted/40 p-4 text-sm leading-relaxed text-slate">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 shrink-0"
          required
        />
        <span>
          Li e concordo com a{" "}
          <a href="/politica-de-privacidade" className="text-gold underline">
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      {error ? (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={loading || !motivo}
        variant="whatsapp"
        iconRight="send"
        className="w-full"
      >
        {loading ? "Enviando..." : "Enviar e continuar no WhatsApp"}
      </Button>
    </form>
  );
}
