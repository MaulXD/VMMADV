"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-6 py-4 lg:py-5">
        <Link
          href="/"
          className="relative block shrink-0"
          aria-label={`${siteConfig.name} — Início`}
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-9 w-auto sm:h-10 lg:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 font-serif text-[15px] font-medium tracking-wide transition-colors",
                  active
                    ? "text-white"
                    : "text-white/75 hover:text-white",
                )}
              >
                {link.label}
                {active && !reduceMotion ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : active ? (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      {open ? (
        <motion.div
          className="border-t border-white/10 bg-[#0a0a0a] px-5 py-6 lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-serif text-xl font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
