"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { practiceAreas } from "@/lib/areas";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";

export function HeroTriage() {
  const router = useRouter();
  const [area, setArea] = useState("");

  return (
    <section className="border-b border-line bg-white">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <p className="section-eyebrow">Triagem</p>
            <h2 className="font-serif text-3xl font-light text-navy sm:text-4xl">
              Em que podemos ajudar?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Selecione a área e vá direto ao conteúdo relevante.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-xl">
            <div className="relative flex-1">
              <Icon
                name="chevron-right"
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate"
              />
              <select
                id="hero-area"
                value={area}
                onChange={(event) => setArea(event.target.value)}
                className="field appearance-none pr-10"
              >
                <option value="">Selecione a área de atuação</option>
                <option value="precatorios-rpv">Precatórios & RPV</option>
                {practiceAreas.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="button"
              variant="primary"
              className="shrink-0 sm:px-8"
              disabled={!area}
              iconRight="arrow-right"
              onClick={() => {
                if (!area) return;
                router.push(
                  area === "precatorios-rpv"
                    ? "/precatorios-rpv"
                    : `/areas/${area}`,
                );
              }}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
