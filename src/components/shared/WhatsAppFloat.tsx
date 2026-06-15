"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center bg-[#128C7E] text-white shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:bg-[#0f7a6e]"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      <Icon name="whatsapp" size={28} />
    </motion.a>
  );
}
