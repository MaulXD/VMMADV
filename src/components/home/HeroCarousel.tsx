"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://victormoraisadv.com.br/wp-content/uploads/2025/05/IMG_9016.jpg.jpg";

const slides = [
  {
    id: "principal",
    label: "Escritório",
    image: HERO_IMAGE,
    subtitle: siteConfig.hero.subtitle,
    title: siteConfig.hero.title,
    description: siteConfig.hero.institutional,
    cta: "Falar com o advogado",
    whatsapp: true,
  },
  {
    id: "precatorios",
    label: "Precatórios",
    image: HERO_IMAGE,
    subtitle: "Atuação nacional",
    title: "Precatórios & RPV",
    description:
      "Assessoria dedicada a credores de precatórios e requisições de pequeno valor em todo o Brasil.",
    cta: "Conhecer a área",
    href: "/precatorios-rpv",
    tone: "gold" as const,
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-navy text-white">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <motion.div
            className="relative h-full w-full"
            initial={reduceMotion ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          slide.tone === "gold"
            ? "bg-[linear-gradient(105deg,rgba(15,28,46,0.94)_0%,rgba(15,28,46,0.72)_45%,rgba(154,115,64,0.35)_100%)]"
            : "bg-[linear-gradient(105deg,rgba(15,28,46,0.92)_0%,rgba(15,28,46,0.55)_50%,rgba(15,28,46,0.25)_100%)]"
        }`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,28,46,0.85)_0%,transparent_55%)]" />

      {/* Content */}
      <div className="container-page relative flex min-h-[88vh] flex-col justify-end pb-12 pt-32 sm:pb-16 sm:pt-36">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold-light" aria-hidden />
                <p className="text-sm tracking-[0.18em] text-gold-light uppercase">
                  {slide.subtitle}
                </p>
              </div>

              <h1 className="mt-6 font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                {slide.whatsapp ? (
                  <Button
                    href={buildWhatsAppUrl()}
                    external
                    variant="whatsapp"
                    iconRight="arrow-right"
                  >
                    {slide.cta}
                  </Button>
                ) : (
                  <Button href={slide.href!} variant="accent" iconRight="arrow-right">
                    {slide.cta}
                  </Button>
                )}
                <Button href="/contato" variant="outlineLight">
                  Formulário de contato
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {slides.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Slide: ${item.label}`}
                aria-current={slideIndex === index}
                className={`px-4 py-2 text-sm transition-colors ${
                  slideIndex === index
                    ? "bg-white/10 text-white"
                    : "text-white/45 hover:text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif text-3xl font-medium tabular-nums text-gold-light">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-sm text-white/40 tabular-nums">
              {String(slides.length).padStart(2, "0")}
            </span>
            <div className="ml-2 h-px w-24 overflow-hidden bg-white/15">
              <motion.div
                className="h-full origin-left bg-gold-light"
                animate={{ scaleX: (index + 1) / slides.length }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
