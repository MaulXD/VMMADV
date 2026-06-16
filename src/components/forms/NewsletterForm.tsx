"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getNewsletterSubscription,
  setNewsletterSubscription,
} from "@/lib/newsletter-storage";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  variant?: "footer" | "inline" | "blog";
  rememberSubscription?: boolean;
};

export function NewsletterForm({
  variant = "inline",
  rememberSubscription = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);
  const [ready, setReady] = useState(!rememberSubscription);

  const isDark = variant === "footer" || variant === "blog";

  useEffect(() => {
    if (!rememberSubscription) return;
    const existing = getNewsletterSubscription();
    if (existing) setSubscribedEmail(existing.email);
    setReady(true);
  }, [rememberSubscription]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consentimento: consent }),
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível inscrever o e-mail.");
      }

      if (rememberSubscription) {
        setNewsletterSubscription(email);
        setSubscribedEmail(email);
      }

      setMessage("Inscrição realizada com sucesso.");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Erro ao inscrever e-mail.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!ready) return null;

  if (rememberSubscription && subscribedEmail) {
    return (
      <div
        className={cn(
          "border p-6",
          variant === "footer"
            ? "border-white/15 bg-white/5 text-white"
            : isDark
              ? "border-white/15 bg-navy text-white"
              : "border-line bg-white",
        )}
      >
        <p className="font-serif text-xl font-semibold">Newsletter jurídica</p>
        <p className={cn("mt-3 text-sm leading-relaxed", isDark ? "text-white/70" : "text-slate")}>
          Inscrição confirmada para{" "}
          <span className={cn("font-medium", isDark ? "text-white" : "text-navy")}>
            {subscribedEmail}
          </span>
          . Você receberá conteúdos e atualizações do escritório.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "border p-6",
        variant === "footer"
          ? "border-white/15 bg-white/5"
          : isDark
            ? "border-white/15 bg-navy"
            : "border-line bg-white",
      )}
    >
      <p className={cn("font-serif text-xl font-semibold", isDark ? "text-white" : "text-navy")}>
        Newsletter jurídica
      </p>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          isDark ? "text-white/70" : "text-slate",
        )}
      >
        Conteúdos e atualizações sobre as áreas de atuação do escritório.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="seu@email.com"
          className={cn(
            "field min-w-0 flex-1",
            isDark &&
              "border-white/20 bg-white text-navy placeholder:text-slate/60",
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          variant={isDark ? "accent" : "primary"}
          iconRight="send"
          className="shrink-0"
        >
          {loading ? "Enviando..." : "Inscrever-se"}
        </Button>
      </div>

      <label
        className={cn(
          "mt-4 flex items-start gap-3 text-sm leading-relaxed",
          isDark ? "text-white/70" : "text-slate",
        )}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 shrink-0"
          required
        />
        <span>
          Concordo em receber comunicações e aceito a{" "}
          <Link
            href="/politica-de-privacidade"
            className={cn(
              "underline underline-offset-2 transition-colors",
              isDark ? "text-gold-light hover:text-white" : "text-gold hover:text-navy",
            )}
          >
            política de privacidade
          </Link>
          .
        </span>
      </label>

      {message ? (
        <p
          className={cn(
            "mt-3 text-sm",
            isDark ? "text-gold-light" : "text-gold",
          )}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
