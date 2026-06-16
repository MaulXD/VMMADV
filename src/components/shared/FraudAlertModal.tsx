"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const STORAGE_KEY = "vmmadv-fraud-alert-snooze";

const officialChannels = [
  {
    label: "VMMADV — PRINCIPAL",
    phone: siteConfig.contact.whatsappDisplay,
    phoneHref: buildWhatsAppUrl(),
    phoneNote: "WhatsApp",
    emails: [
      { href: `mailto:${siteConfig.contact.email}`, label: siteConfig.contact.email },
      {
        href: `mailto:${siteConfig.contact.emailPrecatorios}`,
        label: siteConfig.contact.emailPrecatorios,
      },
    ],
  },
  {
    label: "SARMENTO CAMARGO SARMENTO",
    phone: siteConfig.partnerships[0].phone,
    phoneHref: `tel:${siteConfig.partnerships[0].phone.replace(/\D/g, "")}`,
    emails: [
      {
        href: `mailto:${siteConfig.partnerships[0].email}`,
        label: siteConfig.partnerships[0].email,
      },
    ],
  },
  {
    label: "ANCREF",
    phone: siteConfig.partnerships[1].phone,
    phoneHref: `tel:${siteConfig.partnerships[1].phone.replace(/\D/g, "")}`,
    emails: [
      {
        href: `mailto:${siteConfig.partnerships[1].email}`,
        label: siteConfig.partnerships[1].email,
      },
    ],
  },
];

function isSnoozed(): boolean {
  if (typeof window === "undefined") return true;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  const until = Number(raw);
  return Number.isFinite(until) && Date.now() < until;
}

export function FraudAlertModal() {
  const [visible, setVisible] = useState(false);
  const [snoozeDay, setSnoozeDay] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setVisible(!isSnoozed());
  }, []);

  function close() {
    if (snoozeDay) {
      const oneDay = 24 * 60 * 60 * 1000;
      window.localStorage.setItem(STORAGE_KEY, String(Date.now() + oneDay));
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fraud-alert-title"
    >
      <motion.div
        className="w-full max-w-4xl border border-[#9a7340]/80 bg-[#0a0a0a] text-[#e8e4dc] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#9a7340]/70 text-[#9a7340]">
              <Icon name="alert-triangle" size={26} />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#9a7340] uppercase">
                Victor Morais Advocacia · VMMADV
              </p>
              <h2
                id="fraud-alert-title"
                className="mt-3 font-serif text-4xl font-semibold leading-[1.15] sm:text-[2.75rem]"
              >
                Alerta: prevenção
                <span className="mt-1 block italic text-[#9a7340]">
                  contra golpes
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-[#c8c4bc] sm:text-base">
            <p>
              Identificamos um aumento de tentativas de{" "}
              <span className="font-medium text-[#9a7340]">
                golpe com criminosos que se passam pelo nosso escritório
              </span>
              , solicitando valores, documentos ou dados bancários por
              WhatsApp, SMS, e-mail ou redes sociais.
            </p>
            <p>
              <strong className="font-medium text-[#e8e4dc]">
                Victor Morais Advocacia
              </strong>{" "}
              não solicita pagamentos antecipados por esses canais informais nem
              envia cobranças sem processo formal. Em caso de dúvida, confirme
              sempre pelos contatos abaixo.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#9a7340] uppercase">
              Canais oficiais de atendimento
            </p>
            <div className="mt-6 divide-y divide-[#9a7340]/25 border-y border-[#9a7340]/25">
              {officialChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="grid gap-4 py-6 sm:grid-cols-[minmax(140px,220px)_1fr] sm:items-start sm:gap-8"
                >
                  <p className="text-[11px] font-medium tracking-[0.18em] text-[#9a7340] uppercase">
                    {channel.label}
                  </p>
                  <div className="space-y-1.5 text-sm sm:text-right">
                    <p>
                      <a
                        href={channel.phoneHref}
                        className="text-[#e8e4dc] transition-colors hover:text-[#9a7340]"
                        {...(channel.phoneNote
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {channel.phone}
                        {channel.phoneNote ? (
                          <span className="text-[#8a8680]">
                            {" "}
                            · {channel.phoneNote}
                          </span>
                        ) : null}
                      </a>
                    </p>
                    {channel.emails.map((email) => (
                      <p key={email.label}>
                        <a
                          href={email.href}
                          className="text-[#e8e4dc] transition-colors hover:text-[#9a7340]"
                        >
                          {email.label}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#8a8680]">
              <input
                type="checkbox"
                checked={snoozeDay}
                onChange={(event) => setSnoozeDay(event.target.checked)}
                className="h-4 w-4 shrink-0 appearance-none border border-[#6a6660] bg-transparent checked:border-[#9a7340] checked:bg-[#9a7340]"
              />
              Não mostrar novamente por 1 dia
            </label>

            <button
              type="button"
              disabled={!snoozeDay}
              onClick={close}
              className="border border-[#9a7340]/80 px-8 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#9a7340] uppercase transition-colors enabled:hover:bg-[#9a7340]/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Entendi, fechar aviso
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
